import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { loadAssessmentSubject } from '../../content/assessment';
import { defaultRng } from '../../services/rng';
import { useUserStore } from '../../stores/userStore';
import styles from './Assessment.module.css';
import {
  buildTopicBreakdown,
  countCorrect,
  DEFAULT_RUN_LENGTH,
  pickRunQuestions,
  type RunQuestion,
} from './runLogic';
import { assessmentTitle } from './subjectMeta';

type Phase = 'loading' | 'missing' | 'running' | 'done';

export function AssessmentRun() {
  const { subjectId = '' } = useParams();
  const navigate = useNavigate();

  const [phase, setPhase] = useState<Phase>('loading');
  const [questions, setQuestions] = useState<RunQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [runKey, setRunKey] = useState(0);

  useEffect(() => {
    let alive = true;
    setPhase('loading');
    void loadAssessmentSubject(subjectId).then((subject) => {
      if (!alive) return;
      if (!subject) {
        setPhase('missing');
        return;
      }
      const run = pickRunQuestions(subject.questions, DEFAULT_RUN_LENGTH, defaultRng);
      setQuestions(run);
      setAnswers(run.map(() => null));
      setIndex(0);
      setPhase('running');
    });
    return () => {
      alive = false;
    };
  }, [subjectId, runKey]);

  const correct = useMemo(() => countCorrect(questions, answers), [questions, answers]);

  useEffect(() => {
    if (phase === 'missing') navigate('/assessment', { replace: true });
  }, [phase, navigate]);

  if (phase === 'loading' || phase === 'missing') {
    return (
      <section className="panel" aria-label="Assessment">
        <p className={styles.loading}>Loading questions…</p>
      </section>
    );
  }

  const finish = (finalAnswers: (string | null)[]) => {
    const breakdown = buildTopicBreakdown(questions, finalAnswers);
    const total = questions.length;
    useUserStore
      .getState()
      .recordAssessment(subjectId, countCorrect(questions, finalAnswers), total, breakdown);
    setPhase('done');
  };

  const choose = (option: string) => {
    const next = [...answers];
    next[index] = option;
    setAnswers(next);
    if (index + 1 >= questions.length) {
      finish(next);
    } else {
      setIndex(index + 1);
    }
  };

  if (phase === 'done') {
    const total = questions.length;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    const breakdown = buildTopicBreakdown(questions, answers);
    const trophy = pct >= 80 ? '🏆' : pct >= 60 ? '⭐' : '💪';

    return (
      <section className="panel" aria-label="Assessment result">
        <h2 className={styles.resultTitle}>
          {trophy} {assessmentTitle(subjectId)} — {correct} / {total} ({pct}%)
        </h2>
        <h3 className={styles.breakdownTitle}>Topic report</h3>
        <ul className={styles.breakdownList}>
          {Object.entries(breakdown).map(([topic, s]) => (
            <li key={topic} className={styles.breakdownItem}>
              <span>{topic}</span>
              <span className={s.correct === s.total ? styles.topicPerfect : undefined}>
                {s.correct}/{s.total}
              </span>
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <button type="button" className="btn btn-main" onClick={() => setRunKey((k) => k + 1)}>
            🔁 Try Again
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('/assessment')}
          >
            Other Subjects
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => navigate('/')}>
            🏝️ Home
          </button>
        </div>
      </section>
    );
  }

  const question = questions[index]!;
  const progressPct = Math.round((index / questions.length) * 100);

  return (
    <section className="panel" aria-label={`${assessmentTitle(subjectId)} assessment`}>
      <div className={styles.header}>
        <h2>{assessmentTitle(subjectId)}</h2>
        <button type="button" className="btn btn-ghost" onClick={() => navigate('/assessment')}>
          Exit
        </button>
      </div>

      <progress
        className={styles.progress}
        value={index}
        max={questions.length}
        aria-label={`Question ${index + 1} of ${questions.length}`}
      >
        {progressPct}%
      </progress>
      <p className={styles.progressLabel}>
        Question {index + 1} of {questions.length}
      </p>

      <div className={styles.questionBox}>
        <p className={styles.question}>{question.question}</p>
      </div>

      <div className={styles.options} aria-label="Answer choices">
        {question.options.map((option) => (
          <button
            key={option}
            type="button"
            className={styles.optionBtn}
            onClick={() => choose(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </section>
  );
}
