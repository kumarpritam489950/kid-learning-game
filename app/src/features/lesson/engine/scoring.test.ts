import { describe, expect, it } from 'vitest';
import { getStarsText, scoreToStars } from './scoring';

describe('scoreToStars (v1 thresholds)', () => {
  it.each([
    [10, 10, 3],
    [8, 10, 3],
    [7, 10, 2],
    [6, 10, 2],
    [5, 10, 1],
    [4, 10, 1],
    [3, 10, 0],
    [0, 10, 0],
  ])('%i/%i → %i stars', (correct, total, stars) => {
    expect(scoreToStars(correct, total)).toBe(stars);
  });
});

describe('getStarsText', () => {
  it('renders filled and empty stars', () => {
    expect(getStarsText(0)).toBe('☆☆☆');
    expect(getStarsText(2)).toBe('★★☆');
    expect(getStarsText(3)).toBe('★★★');
  });
});
