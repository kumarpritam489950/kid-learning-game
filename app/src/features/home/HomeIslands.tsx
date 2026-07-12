import { Link } from 'react-router';
import { ISLANDS } from './islands';
import styles from './HomeIslands.module.css';

export function HomeIslands() {
  return (
    <section aria-label="Main Menu">
      <div className={styles.grid}>
        {ISLANDS.map((island) => (
          <Link
            key={island.id}
            to={island.to}
            className={styles.island}
            style={{ background: island.gradient }}
            aria-label={island.ariaLabel}
          >
            <span className={styles.emoji} aria-hidden="true">
              {island.emoji}
            </span>
            <span className={styles.title}>{island.title}</span>
            <span className={styles.subtitle}>{island.subtitle}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
