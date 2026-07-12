import type { Rng } from '../../../../services/rng';
import { randomInt, shuffle } from '../../../../services/rng';

/* Shared pools ported from v1 js/app.js (tag v1-legacy, lines 216-218). */

export const englishAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const hindiMatras = ['ा', 'ि', 'ी', 'ु', 'ू', 'े', 'ै', 'ो', 'ौ', 'ं', 'ँ', 'ः'];

export const kannadaDecoyPool = [
  'ಲ',
  'ವ',
  'ರ',
  'ನ',
  'ಸ',
  'ಶ',
  'ಗ',
  'ಪ',
  'ಚ',
  'ಟ',
  'ತ',
  'ಬ',
  'ಮ',
  'ಯ',
  'ಹ',
  'ಖ',
  'ಘ',
  'ಝ',
  'ಥ',
  'ಧ',
  'ಫ',
  'ಭ',
  'ಷ',
  'ಳ',
];

export function makeQuestionId(moduleId: string, ...parts: (string | number)[]): string {
  return `${moduleId}:${parts.join('|')}`;
}

/**
 * Four numeric answer options (as strings) around the correct answer,
 * clamped to [0, maxAnswer]. Ported from v1 with a bounded retry so tiny
 * ranges cannot loop forever.
 */
export function numberOptions(rng: Rng, answer: number, maxAnswer: number, spread = 4): string[] {
  const set = new Set<number>([answer]);
  let attempts = 0;
  while (set.size < 4 && attempts < 200) {
    const delta = randomInt(rng, -spread, spread);
    set.add(Math.max(0, Math.min(maxAnswer, answer + delta)));
    attempts += 1;
  }
  return shuffle(rng, [...set]).map(String);
}

/**
 * Deterministic distractor picker: walks the pool starting at `offset`,
 * skipping the answer. Ported verbatim from v1.
 */
export function rotatedDistractors(
  pool: readonly string[],
  answer: string,
  count: number,
  offset: number,
): string[] {
  const clean = pool.filter((item) => item !== answer);
  const out: string[] = [];
  for (let i = 0; i < clean.length && out.length < count; i += 1) {
    out.push(clean[(offset + i) % clean.length]!);
  }
  return out;
}
