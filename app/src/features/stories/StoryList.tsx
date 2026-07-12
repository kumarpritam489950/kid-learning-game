import { useNavigate } from 'react-router';
import { STORIES } from '../../content';
import styles from './Stories.module.css';

export function StoryList() {
  const navigate = useNavigate();

  return (
    <section className="panel" aria-label="Story Time">
      <div className={styles.header}>
        <h2>
          {STORIES.icon} {STORIES.name}
        </h2>
        <button type="button" className="btn btn-ghost" onClick={() => navigate('/')}>
          Back to Islands
        </button>
      </div>
      <p className={styles.description}>{STORIES.description}</p>
      <div className={styles.grid}>
        {STORIES.stories.map((story) => (
          <button
            key={story.id}
            type="button"
            className={styles.card}
            onClick={() => navigate(`/stories/${story.id}`)}
          >
            <span className={styles.cardEmoji} aria-hidden="true">
              {story.emoji}
            </span>
            <span className={styles.cardTitle}>{story.title}</span>
            <span className={styles.cardMoral}>{story.moral}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
