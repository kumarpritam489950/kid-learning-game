import type { LessonModule } from '../../../../content/schema';
import type { Rng } from '../../../../services/rng';
import { shuffle } from '../../../../services/rng';
import type { Question } from '../types';
import { hindiMatras, makeQuestionId, rotatedDistractors } from './support';

type HindiLetterModule = Extract<LessonModule, { type: 'hindiLetter' }>;
type HindiPictureWordModule = Extract<LessonModule, { type: 'hindiPictureWord' }>;
type HindiMissingMatraModule = Extract<LessonModule, { type: 'hindiMissingMatra' }>;
type HindiBarakhadiModule = Extract<LessonModule, { type: 'hindiBarakhadi' }>;

export function generateHindiLetterBank(module: HindiLetterModule, rng: Rng): Question[] {
  const prompts = [
    'इस अक्षर को चुनो (Choose this letter).',
    'सही अक्षर पहचानो (Identify this letter).',
    'यह अक्षर कौन सा है? (Which letter is this?)',
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
        speakLang: 'hi-IN',
      });
    });
  });
  return bank;
}

export function generateHindiPictureWordBank(module: HindiPictureWordModule, rng: Rng): Question[] {
  const prompts = [
    'इस चित्र का सही शब्द चुनो।',
    'चित्र देखो, शब्द बताओ।',
    'सही हिन्दी शब्द चुनो।',
    'यह क्या है?',
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
        ...(item.image ? { image: item.image } : {}),
        phonetic: item.phonetic,
        answer: item.word,
        options: shuffle(rng, [item.word, ...distractors]),
        speakText: item.word,
        speakLang: 'hi-IN',
      });
    });
  });
  return bank;
}

export function generateHindiMissingMatraBank(
  module: HindiMissingMatraModule,
  rng: Rng,
): Question[] {
  const prompts = ['सही मात्रा चुनो।', 'शब्द पूरा करो।', 'कौन सी मात्रा लगेगी?'];
  const bank: Question[] = [];
  module.words.forEach((word, wi) => {
    prompts.forEach((prompt, pi) => {
      const distractors = rotatedDistractors(hindiMatras, word.answer, 3, wi + pi);
      bank.push({
        id: makeQuestionId(module.id, wi, pi),
        kind: 'mcq',
        // v1 rendered "undefined" when hint was missing; omit the suffix instead.
        prompt: word.hint ? `${prompt} — ${word.hint}` : prompt,
        visual: word.display,
        answer: word.answer,
        options: shuffle(rng, [word.answer, ...distractors]),
        speakText: word.fullWord,
        speakLang: 'hi-IN',
      });
    });
  });
  return bank;
}

export function generateHindiBarakhadiBank(module: HindiBarakhadiModule, rng: Rng): Question[] {
  const allResults = module.combos.map((c) => c.result);
  const allMatras = [...new Set(module.combos.map((c) => c.matra))];
  const bank: Question[] = [];
  module.combos.forEach((combo, ci) => {
    const d1 = rotatedDistractors(allResults, combo.result, 3, ci);
    bank.push({
      id: makeQuestionId(module.id, ci, 0),
      kind: 'mcq',
      prompt: `क्या बनेगा? — ${combo.consonant} ➕ ${combo.matra} = ?`,
      visual: `${combo.consonant} + ${combo.matra} = ?`,
      answer: combo.result,
      options: shuffle(rng, [combo.result, ...d1]),
      speakText: combo.result,
      speakLang: 'hi-IN',
    });
    const d2 = rotatedDistractors(allMatras, combo.matra, 3, ci + 1);
    bank.push({
      id: makeQuestionId(module.id, ci, 1),
      kind: 'mcq',
      prompt: `"${combo.result}" में कौन सी मात्रा लगी है?`,
      visual: combo.result,
      answer: combo.matra,
      options: shuffle(rng, [combo.matra, ...d2]),
      speakText: combo.result,
      speakLang: 'hi-IN',
    });
  });
  return bank;
}
