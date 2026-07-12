import { Navigate, useNavigate, useParams } from 'react-router';
import { getLessonSubject } from '../../content';
import { useSessionStore } from '../../stores/sessionStore';
import { getStarsText } from './engine/scoring';
import styles from './SubjectHub.module.css';

export function SubjectHub() {
  const { subjectId = '' } = useParams();
  const navigate = useNavigate();
  const bestStars = useSessionStore((s) => s.bestStars);
  const subject = getLessonSubject(subjectId);

  if (!subject) {
    return <Navigate to="/" replace />;
  }

  return (
    <section className="panel" aria-label={`${subject.name} missions`}>
      <div className={styles.header}>
        <h2>
          {subject.icon} {subject.name}
        </h2>
        <button type="button" className="btn btn-ghost" onClick={() => navigate('/')}>
          Back to Islands
        </button>
      </div>
      <p className={styles.description}>{subject.description}</p>
      <div className={styles.moduleGrid}>
        {subject.modules.map((module, index) => (
          <button
            key={module.id}
            type="button"
            className={styles.moduleCard}
            onClick={() => navigate(`/lesson/${subject.id}/${module.id}`)}
          >
            <span className={styles.moduleCount}>Mission {index + 1}</span>
            <span className={styles.moduleTitle}>{module.title}</span>
            <span className={styles.moduleStars}>
              Best: {getStarsText(bestStars[module.id] ?? 0)}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
