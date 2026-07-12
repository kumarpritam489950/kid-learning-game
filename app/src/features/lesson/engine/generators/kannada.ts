import type { LessonModule } from '../../../../content/schema';
import type { Rng } from '../../../../services/rng';
import { shuffle } from '../../../../services/rng';
import type { Question } from '../types';
import { kannadaDecoyPool, makeQuestionId, rotatedDistractors } from './support';

type KannadaLetterModule = Extract<LessonModule, { type: 'kannadaLetter' }>;
type KannadaPictureWordModule = Extract<LessonModule, { type: 'kannadaPictureWord' }>;
type KannadaDragWordModule = Extract<LessonModule, { type: 'kannadaDragWord' }>;

export function generateKannadaLetterBank(module: KannadaLetterModule, rng: Rng): Question[] {
  const prompts = [
    'ಈ ಅಕ್ಷರವನ್ನು ಆರಿಸಿ (Choose this letter).',
    'ಈ ಅಕ್ಷರ ಗುರುತಿಸಿ (Identify this letter).',
    'ಸರಿಯಾದ ಅಕ್ಷರ ಆಯ್ಕೆಮಾಡಿ (Pick the correct letter).',
  ];
  const letterArray = module.letters.map((entry) => entry.letter);
  const bank: Question[] = [];
  module.letters.forEach((entry, li) => {
    prompts.forEach((prompt, pi) => {
      const distractors = rotatedDistractors(letterArray, entry.letter, 3, li + pi);
      bank.push({
        id: makeQuestionId(module.id, li, pi),
        kind: 'mcq',
        prompt,
        visual: entry.letter,
        phonetic: entry.phonetic,
        answer: entry.letter,
        options: shuffle(rng, [entry.letter, ...distractors]),
        speakText: entry.letter,
        speakLang: 'kn-IN',
      });
    });
  });
  return bank;
}

export function generateKannadaPictureWordBank(
  module: KannadaPictureWordModule,
  rng: Rng,
): Question[] {
  const prompts = [
    'ಚಿತ್ರಕ್ಕೆ ಸರಿಯಾದ ಕನ್ನಡ ಪದ ಆಯ್ಕೆ ಮಾಡಿ.',
    'ಈ ಚಿತ್ರಕ್ಕೆ ಯಾವ ಪದ?',
    'ಸರಿಯಾದ ಪದ ಆರಿಸಿ.',
    'ಪದ ಆಯ್ಕೆ ಮಾಡಿ.',
  ];
  const words = module.items.map((item) => item.word);
  const bank: Question[] = [];
  module.items.forEach((item, ii) => {
    prompts.forEach((prompt, pi) => {
      const distractors = rotatedDistractors(words, item.word, 3, ii + pi);
      bank.push({
        id: makeQuestionId(module.id, ii, pi),
        kind: 'mcq',
        prompt,
        visual: item.picture,
        phonetic: item.phonetic,
        answer: item.word,
        options: shuffle(rng, [item.word, ...distractors]),
        speakText: item.word,
        speakLang: 'kn-IN',
      });
    });
  });
  return bank;
}

export function generateKannadaDragBank(module: KannadaDragWordModule, rng: Rng): Question[] {
  const prompts = [
    'Build the Kannada word.',
    'Drag letters to complete the word.',
    'Arrange letters in the correct order.',
  ];
  const bank: Question[] = [];
  module.words.forEach((card, ci) => {
    prompts.forEach((prompt, pi) => {
      const neededDecoys = Math.max(1, 3 - card.letters.length);
      const decoys = rotatedDistractors(kannadaDecoyPool, '', neededDecoys, ci + pi);
      bank.push({
        id: makeQuestionId(module.id, ci, pi),
        kind: 'drag',
        prompt: `${prompt} — ${card.clue} ${card.picture}`,
        visual: card.picture,
        answer: card.letters,
        answerText: card.answerText,
        bank: shuffle(rng, [...card.letters, ...decoys]),
        speakText: card.answerText,
        speakLang: 'kn-IN',
      });
    });
  });
  return bank;
}
