import type { LessonModule } from '../../../../content/schema';
import type { Rng } from '../../../../services/rng';
import { shuffle } from '../../../../services/rng';
import type { Question } from '../types';
import { englishAlphabet, makeQuestionId, rotatedDistractors } from './support';

type MissingLetterModule = Extract<LessonModule, { type: 'missingLetter' }>;
type PictureWordModule = Extract<LessonModule, { type: 'pictureWord' }>;
type SightWordModule = Extract<LessonModule, { type: 'sightWord' }>;

export function generateMissingLetterBank(module: MissingLetterModule, rng: Rng): Question[] {
  const prompts = ['Fill the missing letter.', 'Complete the word.', 'Choose the missing letter.'];
  const bank: Question[] = [];
  module.words.forEach((word, wi) => {
    prompts.forEach((prompt, pi) => {
      const distractors = rotatedDistractors(englishAlphabet, word.answer, 3, wi + pi);
      bank.push({
        id: makeQuestionId(module.id, wi, pi),
        kind: 'mcq',
        prompt: `${prompt} — ${word.fullWord}`,
        visual: word.display,
        answer: word.answer,
        options: shuffle(rng, [word.answer, ...distractors]),
        speakText: word.fullWord,
        speakLang: 'en-US',
      });
    });
  });
  return bank;
}

export function generatePictureWordBank(module: PictureWordModule, rng: Rng): Question[] {
  const prompts = [
    'Choose the correct word for this picture.',
    'Pick the matching word.',
    'Which word matches this picture?',
    'Tap the right word.',
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
        answer: item.word,
        options: shuffle(rng, [item.word, ...distractors]),
        speakText: item.word,
        speakLang: 'en-US',
      });
    });
  });
  return bank;
}

export function generateSightWordBank(module: SightWordModule, rng: Rng): Question[] {
  const prompts = [
    'Tap the sight word.',
    'Find this sight word.',
    'Choose the correct sight word.',
  ];
  const bank: Question[] = [];
  module.words.forEach((word, wi) => {
    prompts.forEach((prompt, pi) => {
      const distractors = rotatedDistractors(module.words, word, 3, wi + pi);
      bank.push({
        id: makeQuestionId(module.id, wi, pi),
        kind: 'mcq',
        prompt: `${prompt}: "${word}"`,
        visual: '👀',
        answer: word,
        options: shuffle(rng, [word, ...distractors]),
        speakText: word,
        speakLang: 'en-US',
      });
    });
  });
  return bank;
}
