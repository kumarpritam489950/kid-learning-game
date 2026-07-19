import type { LessonModule } from '../../../../content/schema';
import type { Rng } from '../../../../services/rng';
import { shuffle } from '../../../../services/rng';
import type { Question } from '../types';
import { makeQuestionId } from './support';

type ScienceMcqModule = Extract<LessonModule, { type: 'scienceMcq' }>;
type RhymeCompleteModule = Extract<LessonModule, { type: 'rhymeComplete' }>;
type HindiPoemModule = Extract<LessonModule, { type: 'hindiPoem' }>;

/** Generic authored-MCQ generator (science, GK, computer, mental math, …). */
export function generateScienceMcqBank(module: ScienceMcqModule, rng: Rng): Question[] {
  return module.items.map((item, ii) => ({
    id: makeQuestionId(module.id, ii),
    kind: 'mcq' as const,
    prompt: item.question,
    visual: item.visual,
    ...(item.image ? { image: item.image } : {}),
    answer: item.answer,
    options: shuffle(rng, [...item.options]),
    // The question text is the real content here; keying on the (often
    // shared, decorative) visual made v1 collapse distinct questions.
    dedupeKey: `${item.question}||${item.answer}`,
    // v1 ignored these authored hints; v2 speaks them when present.
    ...(item.speakText ? { speakText: item.speakText, speakLang: item.speakLang } : {}),
  }));
}

export function generateRhymeBank(module: RhymeCompleteModule, rng: Rng): Question[] {
  const basePrompt = module.completePrompt ?? '🎵 Complete the rhyme!';
  return module.items.map((item, ii) => ({
    id: makeQuestionId(module.id, ii),
    kind: 'mcq' as const,
    prompt: item.emoji ? `${item.emoji}  ${basePrompt}` : basePrompt,
    visual: item.lines,
    answer: item.answer,
    options: shuffle(rng, [...item.options]),
    speakText: item.speakText,
    speakLang: item.speakLang ?? 'en-US',
    isRhyme: true,
  }));
}

export function generateHindiPoemBank(module: HindiPoemModule, rng: Rng): Question[] {
  const basePrompt = module.completePrompt ?? '🎵 कविता पूरी करो!';
  return module.items.map((item, ii) => ({
    id: makeQuestionId(module.id, ii),
    kind: 'mcq' as const,
    prompt: item.emoji ? `${item.emoji}  ${basePrompt}` : basePrompt,
    visual: item.lines,
    answer: item.answer,
    options: shuffle(rng, [...item.options]),
    speakText: item.speakText,
    speakLang: 'hi-IN',
    isRhyme: true,
  }));
}
