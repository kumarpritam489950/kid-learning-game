import { pickRandom, shuffle } from '../../../services/rng';
import type { FunGameDef } from '../types';
import { createQuizRoundsGame } from './quizRounds';

const OBJECTS = [
  { name: 'pizza slice', emoji: '🍕', shape: 'Triangle' },
  { name: 'full moon', emoji: '🌕', shape: 'Circle' },
  { name: 'book', emoji: '📖', shape: 'Rectangle' },
  { name: 'dice', emoji: '🎲', shape: 'Square' },
  { name: 'football', emoji: '⚽', shape: 'Circle' },
  { name: 'door', emoji: '🚪', shape: 'Rectangle' },
  { name: 'egg', emoji: '🥚', shape: 'Oval' },
  { name: 'doughnut', emoji: '🍩', shape: 'Circle' },
  { name: 'television', emoji: '📺', shape: 'Rectangle' },
  { name: 'tent', emoji: '⛺', shape: 'Triangle' },
  { name: 'clock', emoji: '🕐', shape: 'Circle' },
  { name: 'envelope', emoji: '✉️', shape: 'Rectangle' },
  { name: 'watermelon', emoji: '🍉', shape: 'Oval' },
  { name: 'traffic sign', emoji: '⚠️', shape: 'Triangle' },
];

const SHAPES = ['Circle', 'Square', 'Triangle', 'Rectangle', 'Oval'];

/** Maths shapes game: spot the shape of everyday objects. */
export function createShapeDetectiveGame(def: {
  id: string;
  title: string;
  description: string;
}): FunGameDef {
  return createQuizRoundsGame(def, {
    rounds: 10,
    makeRound(rng) {
      const target = pickRandom(rng, OBJECTS);
      const wrong = shuffle(
        rng,
        SHAPES.filter((s) => s !== target.shape),
      ).slice(0, 3);

      const choices = shuffle(rng, [
        { label: target.shape, correct: true },
        ...wrong.map((label) => ({ label, correct: false })),
      ]);

      return {
        prompt: `What shape is the ${target.name}?`,
        visual: target.emoji,
        choices,
        speak: { text: `What shape is the ${target.name}?`, lang: 'en-US' },
        answerLabel: target.shape,
      };
    },
  });
}
