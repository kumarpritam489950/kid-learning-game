import { Navigate, useNavigate } from 'react-router';
import { useSessionStore } from '../../stores/sessionStore';
import { getStarsText, scoreToStars } from './engine/scoring';
import styles from './ResultView.module.css';

export function ResultView() {
  const navigate = useNavigate();
  const finished = useSessionStore((s) => s.finished);
  const module = useSessionStore((s) => s.module);
  const subjectId = useSessionStore((s) => s.subjectId);
  const questions = useSessionStore((s) => s.questions);
  const correctCount = useSessionStore((s) => s.correctCount);
  const score = useSessionStore((s) => s.score);

  if (!finished || !module || !subjectId) {
    return <Navigate to="/" replace />;
  }

  const stars = scoreToStars(correctCount, questions.length);

  return (
    <section className="panel" aria-label="Lesson result">
      <h2 className={styles.title}>{module.title} Complete!</h2>
      <p className={styles.summary}>
        You got {correctCount} out of {questions.length}. Final Score: {score}
      </p>
      <div className={styles.stars} aria-label={`${stars} of 3 stars`}>
        {getStarsText(stars)}
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className="btn btn-main"
          onClick={() => navigate(`/lesson/${subjectId}/${module.id}`)}
        >
          🔁 Play Again
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate(`/subject/${subjectId}`)}
        >
          More Missions
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => navigate('/')}>
          🏝️ Home
        </button>
      </div>
    </section>
  );
}
