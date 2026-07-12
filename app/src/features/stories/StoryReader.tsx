import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';
import { STORIES } from '../../content';
import { cancelSpeech, speak } from '../../services/tts';
import styles from './Stories.module.css';

const AUTO_READ_DELAY_MS = 600;

export function StoryReader() {
  const { storyId = '' } = useParams();
  const navigate = useNavigate();
  const story = STORIES.stories.find((s) => s.id === storyId);
  const [pageIndex, setPageIndex] = useState(0);

  const page = story?.pages[pageIndex];

  // Auto-read each page shortly after it appears (v1 behaviour).
  useEffect(() => {
    if (!page) return;
    const timer = setTimeout(() => speak(page.speakText, 'en-US'), AUTO_READ_DELAY_MS);
    return () => {
      clearTimeout(timer);
      cancelSpeech();
    };
  }, [page]);

  if (!story || !page) {
    return <Navigate to="/stories" replace />;
  }

  const isLast = pageIndex === story.pages.length - 1;

  return (
    <section className="panel" aria-label={story.title}>
      <div className={styles.header}>
        <h2>
          {story.emoji} {story.title}
        </h2>
        <button type="button" className="btn btn-ghost" onClick={() => navigate('/stories')}>
          All Stories
        </button>
      </div>

      <div key={pageIndex} className={styles.page}>
        <div className={styles.pageVisual} aria-hidden="true">
          {page.visual}
        </div>
        <p className={styles.pageText}>{page.text}</p>
        <button
          type="button"
          className={styles.readBtn}
          aria-label="Read this page aloud"
          onClick={() => speak(page.speakText, 'en-US')}
        >
          🔊 Read to me
        </button>
      </div>

      {isLast && <p className={styles.moral}>🌟 Moral: {story.moral}</p>}

      <div className={styles.dots} aria-label={`Page ${pageIndex + 1} of ${story.pages.length}`}>
        {story.pages.map((_, i) => (
          <span key={i} className={i === pageIndex ? styles.dotActive : styles.dot} />
        ))}
      </div>

      <div className={styles.nav}>
        <button
          type="button"
          className="btn btn-ghost"
          disabled={pageIndex === 0}
          onClick={() => setPageIndex((i) => Math.max(0, i - 1))}
        >
          ← Back
        </button>
        <button
          type="button"
          className="btn btn-main"
          onClick={() => (isLast ? navigate('/stories') : setPageIndex((i) => i + 1))}
        >
          {isLast ? '🏠 Finish' : 'Next →'}
        </button>
      </div>
    </section>
  );
}
