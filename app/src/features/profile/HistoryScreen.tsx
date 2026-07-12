import { Navigate, useNavigate } from 'react-router';
import { LESSON_SUBJECTS } from '../../content';
import { assessmentTitle } from '../assessment/subjectMeta';
import type { LessonHistoryEntry } from '../../stores/userStore';
import { useCurrentProfile } from '../../stores/userStore';
import styles from './HistoryScreen.module.css';

const RECENT_PER_SUBJECT = 5;

export function HistoryScreen() {
  const navigate = useNavigate();
  const profile = useCurrentProfile();

  if (!profile) {
    return <Navigate to="/profiles" replace />;
  }

  const lessons = profile.history.filter((e) => e.kind === 'lesson');
  const assessments = profile.history.filter((e) => e.kind === 'assessment');

  const bySubject = new Map<string, LessonHistoryEntry[]>();
  for (const entry of lessons) {
    const list = bySubject.get(entry.subjectId) ?? [];
    list.push(entry);
    bySubject.set(entry.subjectId, list);
  }

  const totalSessions = profile.history.length;
  const totalPossible = profile.history.reduce((sum, e) => sum + e.total, 0);
  const average = totalSessions > 0 ? Math.round((profile.totalScore / totalPossible) * 100) : 0;

  return (
    <section className="panel" aria-label="Learning history">
      <div className={styles.header}>
        <h2>📊 {profile.name}&apos;s Learning History</h2>
        <button type="button" className="btn btn-ghost" onClick={() => navigate('/')}>
          Back
        </button>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statValue}>{profile.totalScore}</span>
          <span className={styles.statLabel}>Total Score</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>{totalSessions}</span>
          <span className={styles.statLabel}>Sessions</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>{average}%</span>
          <span className={styles.statLabel}>Average</span>
        </div>
      </div>

      {totalSessions === 0 ? (
        <p className={styles.empty}>No learning history yet. Start playing to see your progress!</p>
      ) : (
        [...bySubject.entries()].map(([subjectId, entries]) => {
          const subject = LESSON_SUBJECTS.find((s) => s.id === subjectId);
          if (!subject) return null;
          const subjectTotal = entries.reduce((sum, e) => sum + e.score, 0);
          const recent = entries.slice(-RECENT_PER_SUBJECT).reverse();

          return (
            <div key={subjectId} className={styles.section}>
              <h3>
                {subject.icon} {subject.name}{' '}
                <span className={styles.subjectTotal}>({subjectTotal} pts)</span>
              </h3>
              {recent.map((entry) => {
                const module = subject.modules.find((m) => m.id === entry.moduleId);
                const percentage =
                  entry.total > 0 ? Math.round((entry.score / entry.total) * 100) : 0;
                return (
                  <div key={entry.id} className={styles.item}>
                    <span>{module?.title ?? entry.moduleId}</span>
                    <span className={styles.itemScore}>
                      {entry.score}/{entry.total}{' '}
                      <span className={styles.muted}>({percentage}%)</span>
                    </span>
                  </div>
                );
              })}
              {entries.length > RECENT_PER_SUBJECT && (
                <p className={styles.more}>
                  … and {entries.length - RECENT_PER_SUBJECT} more sessions
                </p>
              )}
            </div>
          );
        })
      )}

      {assessments.length > 0 && (
        <div className={styles.section}>
          <h3>📋 Assessments</h3>
          {assessments
            .slice(-RECENT_PER_SUBJECT)
            .reverse()
            .map((entry) => {
              const percentage =
                entry.total > 0 ? Math.round((entry.score / entry.total) * 100) : 0;
              return (
                <div key={entry.id} className={styles.item}>
                  <span>{assessmentTitle(entry.subjectId)}</span>
                  <span className={styles.itemScore}>
                    {entry.score}/{entry.total}{' '}
                    <span className={styles.muted}>({percentage}%)</span>
                  </span>
                </div>
              );
            })}
        </div>
      )}
    </section>
  );
}
