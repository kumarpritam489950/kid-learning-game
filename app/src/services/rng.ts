/**
 * Injectable random source. Production uses Math.random; tests inject a
 * seeded generator so question banks are reproducible.
 */
export type Rng = () => number;

/** Deterministic PRNG (mulberry32) for tests and reproducible sessions. */
export function mulberry32(seed: number): Rng {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const defaultRng: Rng = Math.random;

export function randomInt(rng: Rng, min: number, max: number): number {
  return Math.floor(rng() * (max - min + 1)) + min;
}

export function pickRandom<T>(rng: Rng, array: readonly T[]): T {
  const item = array[randomInt(rng, 0, array.length - 1)];
  if (item === undefined) throw new Error('pickRandom called with an empty array');
  return item;
}

export function shuffle<T>(rng: Rng, array: readonly T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = randomInt(rng, 0, i);
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}
