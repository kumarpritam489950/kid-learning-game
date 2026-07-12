import { beforeEach, describe, expect, it } from 'vitest';
import { APP_META, getLessonSubject } from '../content';
import { getContentKey } from '../features/lesson/engine/antiRepeat';
import { mulberry32 } from '../services/rng';
import { clearSeenHistory, sessionStars, useSessionStore } from './sessionStore';

const COUNTING = { subjectId: 'math', moduleId: 'math_counting' };

beforeEach(() => {
  useSessionStore.getState().exitLesson();
  clearSeenHistory();
});

describe('startLesson', () => {
  it('picks exactly module.questions questions', () => {
    const ok = useSessionStore
      .getState()
      .startLesson(COUNTING.subjectId, COUNTING.moduleId, mulberry32(1));
    expect(ok).toBe(true);
    const { questions, module } = useSessionStore.getState();
    expect(module?.id).toBe(COUNTING.moduleId);
    expect(questions).toHaveLength(
      getLessonSubject('math')!.modules.find((m) => m.id === COUNTING.moduleId)!.questions,
    );
  });

  it('returns false for unknown ids', () => {
    expect(useSessionStore.getState().startLesson('nope', 'nada')).toBe(false);
  });

  it('avoids repeating content across sessions of the same module', () => {
    useSessionStore.getState().startLesson(COUNTING.subjectId, COUNTING.moduleId, mulberry32(1));
    const firstKeys = new Set(useSessionStore.getState().questions.map(getContentKey));
    useSessionStore.getState().startLesson(COUNTING.subjectId, COUNTING.moduleId, mulberry32(2));
    for (const q of useSessionStore.getState().questions) {
      expect(firstKeys.has(getContentKey(q))).toBe(false);
    }
  });
});

describe('answer flow (v1 semantics)', () => {
  it('scores +10 with praise on a correct answer', () => {
    useSessionStore.getState().startLesson(COUNTING.subjectId, COUNTING.moduleId, mulberry32(1));
    const question = useSessionStore.getState().questions[0]!;
    useSessionStore.getState().submitAnswer(question.answer as string, mulberry32(5));

    const s = useSessionStore.getState();
    expect(s.answered).toBe(true);
    expect(s.score).toBe(10);
    expect(s.correctCount).toBe(1);
    expect(s.feedback?.isCorrect).toBe(true);
    expect(APP_META.praiseMessages).toContain(s.feedback?.message);
  });

  it('shows the correct answer after a wrong pick and ignores double answers', () => {
    useSessionStore.getState().startLesson(COUNTING.subjectId, COUNTING.moduleId, mulberry32(1));
    const question = useSessionStore.getState().questions[0]!;
    useSessionStore.getState().submitAnswer('definitely-wrong', mulberry32(5));

    const s = useSessionStore.getState();
    expect(s.score).toBe(0);
    expect(s.feedback?.isCorrect).toBe(false);
    expect(s.feedback?.message).toContain(`Correct answer: ${String(question.answer)}`);

    // a second submit while answered must be a no-op
    useSessionStore.getState().submitAnswer(question.answer as string, mulberry32(6));
    expect(useSessionStore.getState().score).toBe(0);
  });

  it('runs a full session to finished with bestStars recorded', () => {
    useSessionStore.getState().startLesson(COUNTING.subjectId, COUNTING.moduleId, mulberry32(1));
    const total = useSessionStore.getState().questions.length;

    for (let i = 0; i < total; i += 1) {
      const q = useSessionStore.getState().questions[i]!;
      useSessionStore.getState().submitAnswer(q.answer as string, mulberry32(i));
      const result = useSessionStore.getState().nextQuestion();
      expect(result).toBe(i === total - 1 ? 'finished' : 'question');
    }

    const s = useSessionStore.getState();
    expect(s.finished).toBe(true);
    expect(s.correctCount).toBe(total);
    expect(s.score).toBe(total * 10);
    expect(s.bestStars[COUNTING.moduleId]).toBe(3);
    expect(sessionStars(s)).toBe(3);
  });

  it('refuses to advance before an answer', () => {
    useSessionStore.getState().startLesson(COUNTING.subjectId, COUNTING.moduleId, mulberry32(1));
    expect(useSessionStore.getState().nextQuestion()).toBe('question');
    expect(useSessionStore.getState().index).toBe(0);
  });
});
