import { pickRandom, shuffle } from '../../../services/rng';
import type { FunGameDef } from '../types';
import { createQuizRoundsGame } from './quizRounds';

const LETTER_WORDS = [
  { letter: 'अ', word: 'अनार', emoji: '🍎' },
  { letter: 'आ', word: 'आम', emoji: '🥭' },
  { letter: 'इ', word: 'इमली', emoji: '🌰' },
  { letter: 'उ', word: 'उल्लू', emoji: '🦉' },
  { letter: 'ए', word: 'एड़ी', emoji: '🦶' },
  { letter: 'क', word: 'कमल', emoji: '🪷' },
  { letter: 'ख', word: 'खरगोश', emoji: '🐰' },
  { letter: 'ग', word: 'गमला', emoji: '🪴' },
  { letter: 'घ', word: 'घर', emoji: '🏠' },
  { letter: 'च', word: 'चम्मच', emoji: '🥄' },
  { letter: 'छ', word: 'छाता', emoji: '☂️' },
  { letter: 'ज', word: 'जहाज', emoji: '🚢' },
  { letter: 'त', word: 'तरबूज', emoji: '🍉' },
  { letter: 'न', word: 'नल', emoji: '🚰' },
  { letter: 'म', word: 'मछली', emoji: '🐟' },
  { letter: 'ब', word: 'बकरी', emoji: '🐐' },
];

/** Hindi varnamala game: match the letter to the word it starts. */
export function createHindiAksharGame(def: {
  id: string;
  title: string;
  description: string;
}): FunGameDef {
  return createQuizRoundsGame(def, {
    rounds: 10,
    makeRound(rng) {
      const target = pickRandom(rng, LETTER_WORDS);
      const wrong = shuffle(
        rng,
        LETTER_WORDS.filter((l) => l.letter !== target.letter),
      ).slice(0, 3);

      const choices = shuffle(rng, [
        { label: `${target.emoji} ${target.word}`, correct: true },
        ...wrong.map((l) => ({ label: `${l.emoji} ${l.word}`, correct: false })),
      ]);

      return {
        prompt: `"${target.letter}" से क्या बनता है?`,
        visual: target.letter,
        choices,
        speak: { text: `${target.letter} से क्या बनता है?`, lang: 'hi-IN' },
        answerLabel: target.word,
      };
    },
  });
}
