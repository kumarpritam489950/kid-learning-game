export const POINTS_PER_CORRECT = 10;
export const MAX_STARS = 3;

/** v1 thresholds: ≥80% → 3★, ≥60% → 2★, ≥40% → 1★, else 0. */
export function scoreToStars(correct: number, total: number): number {
  const ratio = correct / total;
  if (ratio >= 0.8) return 3;
  if (ratio >= 0.6) return 2;
  if (ratio >= 0.4) return 1;
  return 0;
}

export function getStarsText(stars: number, total = MAX_STARS): string {
  const full = '★'.repeat(Math.min(total, stars));
  const empty = '☆'.repeat(Math.max(0, total - stars));
  return full + empty;
}
