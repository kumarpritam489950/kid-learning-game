import type { AssessmentQuestion } from '../../content/schema';
import type { Rng } from '../../services/rng';
import { shuffle } from '../../services/rng';

export const DEFAULT_RUN_LENGTH = 20;

export interface RunQuestion {
  id: number;
  question: string;
  topic: string;
  /** Shuffled option texts. */
  options: string[];
  answer: string;
}

export interface TopicScore {
  correct: number;
  total: number;
}

/**
 * Sample a run of distinct questions from a subject's pool and shuffle each
 * question's options (the bank stores them in authored order with the
 * correct one flagged).
 */
export function pickRunQuestions(
  pool: readonly AssessmentQuestion[],
  count: number,
  rng: Rng,
): RunQuestion[] {
  return shuffle(rng, [...pool])
    .slice(0, Math.min(count, pool.length))
    .map((q) => {
      const correct = q.options.find((o) => o.correct);
      return {
        id: q.id,
        question: q.question,
        topic: q.topic,
        options: shuffle(
          rng,
          q.options.map((o) => o.text),
        ),
        answer: correct?.text ?? '',
      };
    });
}

/** Aggregate per-topic correct/total from answered questions. */
export function buildTopicBreakdown(
  questions: readonly RunQuestion[],
  answers: readonly (string | null)[],
): Record<string, TopicScore> {
  const byTopic: Record<string, TopicScore> = {};
  questions.forEach((q, i) => {
    const entry = (byTopic[q.topic] ??= { correct: 0, total: 0 });
    entry.total += 1;
    if (answers[i] === q.answer) entry.correct += 1;
  });
  return byTopic;
}

export function countCorrect(
  questions: readonly RunQuestion[],
  answers: readonly (string | null)[],
): number {
  return questions.reduce((sum, q, i) => (answers[i] === q.answer ? sum + 1 : sum), 0);
}
