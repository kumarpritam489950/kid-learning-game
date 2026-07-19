import { pickRandom, shuffle } from '../../../services/rng';
import type { FunGameDef } from '../types';
import { createQuizRoundsGame } from './quizRounds';

const ANIMALS = [
  { name: 'dog', emoji: '🐶', home: 'Kennel' },
  { name: 'bird', emoji: '🐦', home: 'Nest' },
  { name: 'fish', emoji: '🐟', home: 'Water' },
  { name: 'cow', emoji: '🐄', home: 'Shed' },
  { name: 'bee', emoji: '🐝', home: 'Hive' },
  { name: 'spider', emoji: '🕷️', home: 'Web' },
  { name: 'horse', emoji: '🐴', home: 'Stable' },
  { name: 'lion', emoji: '🦁', home: 'Den' },
  { name: 'rabbit', emoji: '🐰', home: 'Burrow' },
  { name: 'monkey', emoji: '🐵', home: 'Tree' },
  { name: 'hen', emoji: '🐔', home: 'Coop' },
  { name: 'ant', emoji: '🐜', home: 'Anthill' },
];

/** EVS game: match each animal to its home. */
export function createAnimalHomesGame(def: {
  id: string;
  title: string;
  description: string;
}): FunGameDef {
  return createQuizRoundsGame(def, {
    rounds: 10,
    makeRound(rng) {
      const animal = pickRandom(rng, ANIMALS);
      const wrong = shuffle(
        rng,
        ANIMALS.filter((a) => a.home !== animal.home),
      ).slice(0, 3);

      const choices = shuffle(rng, [
        { label: animal.home, correct: true },
        ...wrong.map((a) => ({ label: a.home, correct: false })),
      ]);

      return {
        prompt: `Where does the ${animal.name} live?`,
        visual: animal.emoji,
        choices,
        speak: { text: `Where does the ${animal.name} live?`, lang: 'en-US' },
        answerLabel: animal.home,
      };
    },
  });
}
