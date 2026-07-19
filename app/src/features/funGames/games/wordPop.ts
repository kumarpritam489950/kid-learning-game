import { pickRandom, randomInt, shuffle } from '../../../services/rng';
import type { FunGameDef } from '../types';
import { createQuizRoundsGame } from './quizRounds';

const WORDS = [
  { word: 'CAT', emoji: '🐱' },
  { word: 'DOG', emoji: '🐶' },
  { word: 'SUN', emoji: '☀️' },
  { word: 'BUS', emoji: '🚌' },
  { word: 'CUP', emoji: '🥤' },
  { word: 'HAT', emoji: '🎩' },
  { word: 'PEN', emoji: '🖊️' },
  { word: 'BED', emoji: '🛏️' },
  { word: 'FAN', emoji: '🪭' },
  { word: 'KITE', emoji: '🪁' },
  { word: 'FISH', emoji: '🐟' },
  { word: 'BALL', emoji: '⚽' },
  { word: 'STAR', emoji: '⭐' },
  { word: 'TREE', emoji: '🌳' },
  { word: 'CAKE', emoji: '🎂' },
  { word: 'FROG', emoji: '🐸' },
  { word: 'MOON', emoji: '🌙' },
  { word: 'DUCK', emoji: '🦆' },
];

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

/** English spelling game: fill the missing letter of a picture word. */
export function createWordPopGame(def: {
  id: string;
  title: string;
  description: string;
}): FunGameDef {
  return createQuizRoundsGame(def, {
    rounds: 10,
    makeRound(rng) {
      const { word, emoji } = pickRandom(rng, WORDS);
      const blankAt = randomInt(rng, 0, word.length - 1);
      const missing = word[blankAt]!;
      const blanked = `${word.slice(0, blankAt)}_${word.slice(blankAt + 1)}`;

      const wrongPool = shuffle(
        rng,
        [...LETTERS].filter((l) => l !== missing),
      ).slice(0, 3);
      const choices = shuffle(rng, [
        { label: missing, correct: true },
        ...wrongPool.map((label) => ({ label, correct: false })),
      ]);

      return {
        prompt: 'Which letter is missing?',
        visual: `${emoji} ${blanked}`,
        choices,
        speak: { text: word.toLowerCase(), lang: 'en-US' },
        answerLabel: `${missing} (${word})`,
      };
    },
  });
}
