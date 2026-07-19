import { randomInt, shuffle } from '../../../services/rng';
import type { FunGameDef } from '../types';
import { createQuizRoundsGame } from './quizRounds';

/** CBSE Class 1 mental maths: additions to 20 and simple subtractions. */
export function createQuickMathGame(def: {
  id: string;
  title: string;
  description: string;
}): FunGameDef {
  return createQuizRoundsGame(def, {
    rounds: 10,
    makeRound(rng) {
      const isAddition = rng() < 0.6;
      let a: number;
      let b: number;
      let answer: number;
      let symbol: string;
      if (isAddition) {
        a = randomInt(rng, 1, 15);
        b = randomInt(rng, 1, 20 - a);
        answer = a + b;
        symbol = '+';
      } else {
        a = randomInt(rng, 2, 20);
        b = randomInt(rng, 1, a);
        answer = a - b;
        symbol = '−';
      }

      const wrong = new Set<number>();
      while (wrong.size < 3) {
        const delta = randomInt(rng, 1, 4) * (rng() < 0.5 ? -1 : 1);
        const candidate = answer + delta;
        if (candidate >= 0 && candidate !== answer) wrong.add(candidate);
      }

      const choices = shuffle(rng, [
        { label: String(answer), correct: true },
        ...[...wrong].map((n) => ({ label: String(n), correct: false })),
      ]);

      return {
        prompt: 'Tap the right answer!',
        visual: `${a} ${symbol} ${b} = ?`,
        choices,
        speak: {
          text: `${a} ${isAddition ? 'plus' : 'minus'} ${b} equals?`,
          lang: 'en-US',
        },
        answerLabel: String(answer),
      };
    },
  });
}
