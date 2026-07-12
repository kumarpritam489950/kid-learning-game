import { describe, expect, it } from 'vitest';
import { mulberry32, pickRandom, randomInt, shuffle } from './rng';

describe('mulberry32', () => {
  it('is deterministic for a given seed', () => {
    const a = mulberry32(42);
    const b = mulberry32(42);
    const seqA = Array.from({ length: 20 }, () => a());
    const seqB = Array.from({ length: 20 }, () => b());
    expect(seqA).toEqual(seqB);
  });

  it('produces values in [0, 1)', () => {
    const rng = mulberry32(7);
    for (let i = 0; i < 1000; i += 1) {
      const v = rng();
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThan(1);
    }
  });
});

describe('helpers', () => {
  it('randomInt stays within bounds inclusive', () => {
    const rng = mulberry32(1);
    for (let i = 0; i < 500; i += 1) {
      const v = randomInt(rng, 2, 5);
      expect(v).toBeGreaterThanOrEqual(2);
      expect(v).toBeLessThanOrEqual(5);
    }
  });

  it('shuffle preserves elements', () => {
    const rng = mulberry32(3);
    const input = [1, 2, 3, 4, 5, 6, 7];
    const out = shuffle(rng, input);
    expect([...out].sort()).toEqual([...input].sort());
    expect(input).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('pickRandom throws on empty arrays', () => {
    expect(() => pickRandom(mulberry32(1), [])).toThrow();
  });
});
