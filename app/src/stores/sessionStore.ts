import { create } from 'zustand';
import { APP_META, getLessonSubject } from '../content';
import type { LessonModule } from '../content/schema';
import { pickQuestionsForSession } from '../features/lesson/engine/antiRepeat';
import { createQuestionBank } from '../features/lesson/engine/generators';
import { POINTS_PER_CORRECT, scoreToStars } from '../features/lesson/engine/scoring';
import type { Question } from '../features/lesson/engine/types';
import type { Rng } from '../services/rng';
import { defaultRng, pickRandom } from '../services/rng';

/**
 * Anti-repeat history per module, keyed by content fingerprint. Session
 * (page-lifetime) scoped, exactly like v1's state.moduleSeenHistory.
 */
const moduleSeenHistory = new Map<string, Set<string>>();

/** Forget which questions were seen (used on logout and in tests). */
export function clearSeenHistory(): void {
  moduleSeenHistory.clear();
}

export interface LessonFeedback {
  message: string;
  isCorrect: boolean;
}

interface SessionState {
  subjectId: string | null;
  module: LessonModule | null;
  questions: Question[];
  /** Size of the full generated bank (for the "Random N / M" title). */
  bankSize: number;
  /** 0-based index of the current question. */
  index: number;
  score: number;
  correctCount: number;
  answered: boolean;
  feedback: LessonFeedback | null;
  finished: boolean;
  /** Best stars per module this page-load (v1 state.subjectStars). */
  bestStars: Record<string, number>;

  /** Returns false when the subject/module id is unknown. */
  startLesson: (subjectId: string, moduleId: string, rng?: Rng) => boolean;
  submitAnswer: (value: string | string[], rng?: Rng) => void;
  nextQuestion: () => 'question' | 'finished';
  exitLesson: () => void;
}

export const useSessionStore = create<SessionState>()((set, get) => ({
  subjectId: null,
  module: null,
  questions: [],
  bankSize: 0,
  index: 0,
  score: 0,
  correctCount: 0,
  answered: false,
  feedback: null,
  finished: false,
  bestStars: {},

  startLesson: (subjectId, moduleId, rng = defaultRng) => {
    const module = getLessonSubject(subjectId)?.modules.find((m) => m.id === moduleId);
    if (!module) return false;

    const bank = createQuestionBank(module, rng);
    let seen = moduleSeenHistory.get(module.id);
    if (!seen) {
      seen = new Set();
      moduleSeenHistory.set(module.id, seen);
    }
    const questions = pickQuestionsForSession(bank, seen, module.questions, rng);

    set({
      subjectId,
      module,
      questions,
      bankSize: bank.length,
      index: 0,
      score: 0,
      correctCount: 0,
      answered: false,
      feedback: null,
      finished: false,
    });
    return true;
  },

  submitAnswer: (value, rng = defaultRng) => {
    const { answered, questions, index, score, correctCount } = get();
    const question = questions[index];
    if (answered || !question) return;

    const expected = question.kind === 'drag' ? question.answer.join('|') : String(question.answer);
    const actual = Array.isArray(value) ? value.join('|') : String(value);
    const isCorrect = expected === actual;

    if (isCorrect) {
      set({
        answered: true,
        correctCount: correctCount + 1,
        score: score + POINTS_PER_CORRECT,
        feedback: { message: pickRandom(rng, APP_META.praiseMessages), isCorrect: true },
      });
    } else {
      const answerText = question.kind === 'drag' ? question.answerText : question.answer;
      set({
        answered: true,
        feedback: {
          message: `${pickRandom(rng, APP_META.tryMessages)} Correct answer: ${answerText}`,
          isCorrect: false,
        },
      });
    }
  },

  nextQuestion: () => {
    const { answered, index, questions, module, correctCount, bestStars } = get();
    if (!answered) return 'question';

    if (index + 1 >= questions.length) {
      const stars = scoreToStars(correctCount, questions.length);
      const moduleId = module?.id;
      set({
        finished: true,
        bestStars: moduleId
          ? { ...bestStars, [moduleId]: Math.max(bestStars[moduleId] ?? 0, stars) }
          : bestStars,
      });
      return 'finished';
    }

    set({ index: index + 1, answered: false, feedback: null });
    return 'question';
  },

  exitLesson: () => {
    set({
      subjectId: null,
      module: null,
      questions: [],
      bankSize: 0,
      index: 0,
      score: 0,
      correctCount: 0,
      answered: false,
      feedback: null,
      finished: false,
    });
  },
}));

/** Live star count for the running session (v1 updated this after answers). */
export function sessionStars(state: Pick<SessionState, 'correctCount' | 'questions'>): number {
  return state.questions.length === 0
    ? 0
    : scoreToStars(state.correctCount, state.questions.length);
}
