import { describe, expect, it } from 'vitest';
import type { AssessmentQuestion } from '../../content/schema';
import { mulberry32 } from '../../services/rng';
import { buildTopicBreakdown, countCorrect, pickRunQuestions } from './runLogic';

const POOL: AssessmentQuestion[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  question: `Q${i + 1}?`,
  topic: i % 3 === 0 ? 'Adding Zero' : i % 3 === 1 ? 'Counting' : 'Shapes',
  options: [
    { text: `right-${i}`, correct: true },
    { text: `wrong-a-${i}`, correct: false },
    { text: `wrong-b-${i}`, correct: false },
    { text: `wrong-c-${i}`, correct: false },
  ],
}));

describe('pickRunQuestions', () => {
  it('samples distinct questions and resolves the correct answer', () => {
    const run = pickRunQuestions(POOL, 20, mulberry32(1));
    expect(run).toHaveLength(20);
    expect(new Set(run.map((q) => q.id)).size).toBe(20);
    for (const q of run) {
      expect(q.options).toContain(q.answer);
      expect(q.answer).toMatch(/^right-/);
      expect(q.options).toHaveLength(4);
    }
  });

  it('caps at the pool size', () => {
    expect(pickRunQuestions(POOL.slice(0, 5), 20, mulberry32(1))).toHaveLength(5);
  });

  it('shuffles option order (not always authored order)', () => {
    const run = pickRunQuestions(POOL, 30, mulberry32(7));
    const someShuffled = run.some((q) => q.options[0] !== q.answer);
    expect(someShuffled).toBe(true);
  });
});

describe('scoring', () => {
  it('counts correct answers and builds per-topic breakdown', () => {
    const run = pickRunQuestions(POOL, 10, mulberry32(3));
    const answers = run.map((q, i) => (i % 2 === 0 ? q.answer : 'nope'));

    expect(countCorrect(run, answers)).toBe(5);

    const breakdown = buildTopicBreakdown(run, answers);
    const totals = Object.values(breakdown).reduce(
      (acc, t) => ({ correct: acc.correct + t.correct, total: acc.total + t.total }),
      { correct: 0, total: 0 },
    );
    expect(totals.total).toBe(10);
    expect(totals.correct).toBe(5);
  });

  it('treats unanswered as wrong', () => {
    const run = pickRunQuestions(POOL, 4, mulberry32(3));
    expect(countCorrect(run, [null, null, null, null])).toBe(0);
  });
});
