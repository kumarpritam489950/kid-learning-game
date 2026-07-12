import type { Rng } from '../../../services/rng';
import { shuffle } from '../../../services/rng';
import type { Question } from './types';

/**
 * Content fingerprint: equation (arithmetic) or visual, plus the answer.
 * Two questions with the same key never appear in one session, even when
 * generated under different ids/prompts. Ported from v1.
 */
export function getContentKey(question: Question): string {
  if (question.dedupeKey) return question.dedupeKey;
  const base = question.equation ?? question.visual;
  const ans = Array.isArray(question.answer) ? question.answer.join('') : String(question.answer);
  return `${base}||${ans}`;
}

/**
 * Pick `count` questions for a session, avoiding content the child has seen
 * in earlier sessions of the same module (until the pool is exhausted, then
 * the history resets). `seen` is mutated. Ported from v1
 * pickQuestionsForSession.
 */
export function pickQuestionsForSession(
  bank: readonly Question[],
  seen: Set<string>,
  count: number,
  rng: Rng,
): Question[] {
  const uniqueMap = new Map<string, Question>();
  for (const question of bank) {
    const key = getContentKey(question);
    if (!uniqueMap.has(key)) uniqueMap.set(key, question);
  }

  const allUnique = [...uniqueMap.values()];
  let unseen = allUnique.filter((q) => !seen.has(getContentKey(q)));

  if (unseen.length < count) {
    seen.clear();
    unseen = shuffle(rng, allUnique);
  } else {
    unseen = shuffle(rng, unseen);
  }

  const picks = unseen.slice(0, count);
  for (const pick of picks) seen.add(getContentKey(pick));
  return picks;
}
