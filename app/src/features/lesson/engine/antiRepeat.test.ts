import { describe, expect, it } from 'vitest';
import { mulberry32 } from '../../../services/rng';
import { getContentKey, pickQuestionsForSession } from './antiRepeat';
import type { Question } from './types';

function mcq(id: string, visual: string, answer: string): Question {
  return { id, kind: 'mcq', prompt: 'p', visual, answer, options: [answer, 'x'] };
}

describe('getContentKey', () => {
  it('prefers an explicit dedupeKey (authored MCQs with decorative visuals)', () => {
    expect(getContentKey({ ...mcq('a', '⚡', '7'), dedupeKey: '3 + 4 = ?||7' })).toBe(
      '3 + 4 = ?||7',
    );
  });

  it('prefers equation over visual and joins array answers', () => {
    expect(getContentKey({ ...mcq('a', '🍎', '3'), equation: '1 + 2 = ?' })).toBe('1 + 2 = ?||3');
    expect(getContentKey(mcq('a', '🍎', '3'))).toBe('🍎||3');
    expect(
      getContentKey({
        id: 'd',
        kind: 'drag',
        prompt: 'p',
        visual: '🐘',
        answer: ['ಆ', 'ನೆ'],
        answerText: 'ಆನೆ',
        bank: [],
      }),
    ).toBe('🐘||ಆನೆ');
  });
});

describe('pickQuestionsForSession', () => {
  const bank = Array.from({ length: 10 }, (_, i) => mcq(`q${i}`, `v${i}`, String(i)));

  it('never repeats content within a session', () => {
    const picks = pickQuestionsForSession(bank, new Set(), 5, mulberry32(1));
    const keys = picks.map(getContentKey);
    expect(new Set(keys).size).toBe(5);
  });

  it('avoids content seen in earlier sessions', () => {
    const seen = new Set<string>();
    const first = pickQuestionsForSession(bank, seen, 5, mulberry32(1));
    const second = pickQuestionsForSession(bank, seen, 5, mulberry32(2));
    const firstKeys = new Set(first.map(getContentKey));
    for (const q of second) {
      expect(firstKeys.has(getContentKey(q))).toBe(false);
    }
  });

  it('resets once the pool is exhausted', () => {
    const seen = new Set<string>();
    pickQuestionsForSession(bank, seen, 5, mulberry32(1));
    pickQuestionsForSession(bank, seen, 5, mulberry32(2));
    // pool exhausted — third session must reset rather than come up short
    const third = pickQuestionsForSession(bank, seen, 5, mulberry32(3));
    expect(third).toHaveLength(5);
  });

  it('collapses duplicate content to one representative', () => {
    const dupBank = [mcq('a', 'same', '1'), mcq('b', 'same', '1'), mcq('c', 'other', '2')];
    const picks = pickQuestionsForSession(dupBank, new Set(), 2, mulberry32(1));
    expect(new Set(picks.map(getContentKey)).size).toBe(2);
  });
});
