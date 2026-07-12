/** A runtime question produced by the generators (v1 bank item shape). */
interface QuestionBase {
  id: string;
  prompt: string;
  /** Emoji/text shown in the question box; may contain \n for multi-line. */
  visual: string;
  /** Illustration path (relative to BASE_URL) rendered instead of visual. */
  image?: string;
  /** Shown next to the visual for arithmetic (e.g. "2 + 3 = ?"). */
  equation?: string;
  /** Pronunciation hint shown when phonetics are enabled. */
  phonetic?: string | null;
  speakText?: string;
  speakLang?: string;
  /** Rhyme/poem questions render their visual in verse styling. */
  isRhyme?: boolean;
  /**
   * Overrides the anti-repeat fingerprint. Authored MCQs need this because
   * their visual is decorative (v1 keyed on visual||answer and collapsed
   * distinct questions sharing an emoji + answer, crashing sessions in
   * modules like mental_quick_add).
   */
  dedupeKey?: string;
}

export interface McqQuestion extends QuestionBase {
  kind: 'mcq';
  answer: string;
  options: string[];
}

export interface DragQuestion extends QuestionBase {
  kind: 'drag';
  /** Ordered letters the child must place. */
  answer: string[];
  /** The word the letters spell, for feedback. */
  answerText: string;
  /** Letter tiles offered (answer letters + decoys, shuffled). */
  bank: string[];
}

export type Question = McqQuestion | DragQuestion;
