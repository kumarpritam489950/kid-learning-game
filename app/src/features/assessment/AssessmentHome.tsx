import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { loadAssessmentBank } from '../../content/assessment';
import type { AssessmentSubject } from '../../content/schema';
import styles from './Assessment.module.css';
import { assessmentMeta } from './subjectMeta';
import { DEFAULT_RUN_LENGTH } from './runLogic';

export function AssessmentHome() {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState<readonly AssessmentSubject[] | null>(null);

  useEffect(() => {
    let alive = true;
    void loadAssessmentBank().then((bank) => {
      if (alive) setSubjects(bank);
    });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <section className="panel" aria-label="Assessment">
      <div className={styles.header}>
        <h2>📋 Assessment</h2>
        <button type="button" className="btn btn-ghost" onClick={() => navigate('/')}>
          Back to Islands
        </button>
      </div>
      <p className={styles.description}>
        Pick a subject — you&apos;ll get {DEFAULT_RUN_LENGTH} surprise questions. Do your best!
      </p>

      {subjects === null ? (
        <p className={styles.loading}>Loading questions…</p>
      ) : (
        <div className={styles.grid}>
          {subjects.map((subject) => {
            const meta = assessmentMeta(subject.id);
            return (
              <button
                key={subject.id}
                type="button"
                className={styles.card}
                style={{
                  background: `linear-gradient(160deg, ${meta.bg1}, ${meta.bg2})`,
                  color: meta.ink,
                }}
                onClick={() => navigate(`/assessment/${subject.id}`)}
              >
                <span className={styles.cardEmoji} aria-hidden="true">
                  {meta.emoji}
                </span>
                <span className={styles.cardTitle}>{meta.title}</span>
                <span className={styles.cardCount}>{subject.questions.length} questions</span>
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
