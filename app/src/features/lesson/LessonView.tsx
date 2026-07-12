import { Fragment, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import { cancelSpeech, speak, speakQuestion } from '../../services/tts';
import { useSessionStore, sessionStars } from '../../stores/sessionStore';
import { useSettingsStore } from '../../stores/settingsStore';
import { DragBoard } from './DragBoard';
import { getStarsText } from './engine/scoring';
import type { Question } from './engine/types';
import styles from './Lesson.module.css';

function QuestionVisual({ question }: { question: Question }) {
  const phoneticsEnabled = useSettingsStore((s) => s.phoneticsEnabled);
  const visualText = question.equation
    ? `${question.visual}   ${question.equation}`
    : question.visual;
  const lines = visualText.split('\n');

  return (
    <div className={`${styles.questionVisual} ${question.isRhyme ? styles.rhymeVisual : ''}`}>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line}
        </Fragment>
      ))}
      {phoneticsEnabled && question.phonetic && (
        <div className={styles.phoneticContainer}>
          <span className={styles.phoneticText}>({question.phonetic})</span>
          {question.speakText && (
            <button
              type="button"
              className={styles.phoneticSpeaker}
              title="Play pronunciation"
              aria-label="Play pronunciation"
              onClick={() => speak(question.speakText!, question.speakLang)}
            >
              🔊
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export function LessonView() {
  const { subjectId = '', moduleId = '' } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const module = useSessionStore((s) => s.module);
  const questions = useSessionStore((s) => s.questions);
  const bankSize = useSessionStore((s) => s.bankSize);
  const index = useSessionStore((s) => s.index);
  const score = useSessionStore((s) => s.score);
  const answered = useSessionStore((s) => s.answered);
  const feedback = useSessionStore((s) => s.feedback);
  const correctCount = useSessionStore((s) => s.correctCount);
  const startLesson = useSessionStore((s) => s.startLesson);
  const submitAnswer = useSessionStore((s) => s.submitAnswer);
  const nextQuestion = useSessionStore((s) => s.nextQuestion);
  const exitLesson = useSessionStore((s) => s.exitLesson);

  // location.key in the deps makes "Play Again" restart the same route.
  useEffect(() => {
    const ok = startLesson(subjectId, moduleId);
    if (!ok) navigate('/', { replace: true });
    return () => cancelSpeech();
  }, [subjectId, moduleId, location.key, startLesson, navigate]);

  const question = questions[index];

  // Local nudge shown when the child taps Check with empty slots (v1 parity).
  const [hint, setHint] = useState<string | null>(null);

  // Auto-speak questions that carry audio (v1 behaviour).
  useEffect(() => {
    setHint(null);
    if (question) speakQuestion(question);
  }, [question]);

  if (!module || !question) {
    return null;
  }

  const stars = sessionStars({ correctCount, questions });

  const handleNext = () => {
    if (nextQuestion() === 'finished') {
      navigate('/result');
    }
  };

  const handleExit = () => {
    exitLesson();
    navigate(`/subject/${subjectId}`);
  };

  return (
    <section className="panel" aria-label={`${module.title} lesson`}>
      <div className={styles.header}>
        <h2>
          {module.title}{' '}
          <span className={styles.bankNote}>
            (Random {questions.length} / {bankSize})
          </span>
        </h2>
        <button type="button" className="btn btn-ghost" onClick={handleExit}>
          Exit
        </button>
      </div>

      <div className={styles.stats}>
        <span>
          Q {index + 1} / {questions.length}
        </span>
        <span>Score: {score}</span>
        <span>Stars: {getStarsText(stars)}</span>
      </div>

      <div className={styles.questionBox}>
        <p className={styles.prompt}>{question.prompt}</p>
        <QuestionVisual question={question} />
        {question.speakText && (
          <button
            type="button"
            className={styles.speakBtn}
            aria-label="Read aloud"
            title="Read aloud"
            onClick={() => speakQuestion(question)}
          >
            🔊
          </button>
        )}
      </div>

      {question.kind === 'mcq' ? (
        <div className={styles.options} aria-label="Answer choices">
          {question.options.map((option) => (
            <button
              key={option}
              type="button"
              className={styles.optionBtn}
              disabled={answered}
              onClick={() => submitAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <DragBoard
          key={question.id}
          question={question}
          answered={answered}
          onCheck={(values) => {
            setHint(null);
            submitAnswer(values);
          }}
          onIncomplete={() => setHint('Fill all slots before checking.')}
        />
      )}

      <p
        className={`${styles.feedback} ${
          feedback
            ? feedback.isCorrect
              ? styles.feedbackGood
              : styles.feedbackTry
            : hint
              ? styles.feedbackTry
              : ''
        }`}
        aria-live="polite"
      >
        {feedback?.message ?? hint ?? ''}
      </p>

      <div className={styles.actions}>
        <button type="button" className="btn btn-main" disabled={!answered} onClick={handleNext}>
          Next ➡
        </button>
      </div>
    </section>
  );
}
