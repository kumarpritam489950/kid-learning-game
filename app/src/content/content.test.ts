import { describe, expect, it } from 'vitest';
import { loadAssessmentBank } from './assessment';
import manifest from './conversion-manifest.json';
import { APP_META, FUN_GAMES, LESSON_SUBJECTS, STORIES, validateAllContent } from './index';
import { assessmentSubjectSchema } from './schema';

const ASSESSMENT_SUBJECTS = await loadAssessmentBank();

/**
 * Frozen counts from the v1 sources, captured when scripts/convert-legacy.mjs
 * ran against data/gameData.js + assessment_expanded.js (tag v1-legacy).
 * If content is edited on purpose, update these numbers deliberately.
 */
const EXPECTED_MODULES: Record<string, number> = {
  english: 21,
  math: 20,
  kannada: 12,
  hindi: 18,
  science: 12,
  computer: 3,
  rhymes: 2,
  gk: 4,
  mental_math: 11,
};

const EXPECTED_ASSESSMENT: Record<string, number> = {
  mathematics: 75,
  english: 62,
  hindi: 32,
  computer: 42,
  kannada: 31,
  evs: 41,
};

describe('content schemas', () => {
  it('every content file parses against its schema', () => {
    expect(() => validateAllContent()).not.toThrow();
    for (const subject of ASSESSMENT_SUBJECTS) {
      expect(() => assessmentSubjectSchema.parse(subject)).not.toThrow();
    }
  });
});

describe('count parity with v1 sources', () => {
  it('has all 9 lesson subjects with the v1 module counts', () => {
    expect(LESSON_SUBJECTS.map((s) => s.id).sort()).toEqual(Object.keys(EXPECTED_MODULES).sort());
    for (const subject of LESSON_SUBJECTS) {
      expect(subject.modules, subject.id).toHaveLength(EXPECTED_MODULES[subject.id]!);
    }
  });

  it('has 9 arcade game modules and 4 stories', () => {
    expect(FUN_GAMES.modules).toHaveLength(9);
    expect(STORIES.stories).toHaveLength(4);
  });

  it('has the full 283-question assessment bank', () => {
    expect(ASSESSMENT_SUBJECTS.map((s) => s.id).sort()).toEqual(
      Object.keys(EXPECTED_ASSESSMENT).sort(),
    );
    let total = 0;
    for (const subject of ASSESSMENT_SUBJECTS) {
      expect(subject.questions, subject.id).toHaveLength(EXPECTED_ASSESSMENT[subject.id]!);
      total += subject.questions.length;
    }
    expect(total).toBe(283);
  });

  it('matches the committed conversion manifest', () => {
    for (const subject of LESSON_SUBJECTS) {
      expect(manifest.subjects[subject.id as keyof typeof manifest.subjects].modules).toBe(
        subject.modules.length,
      );
    }
    for (const subject of ASSESSMENT_SUBJECTS) {
      expect(manifest.assessment[subject.id as keyof typeof manifest.assessment]).toBe(
        subject.questions.length,
      );
    }
    expect(manifest.stories.count).toBe(STORIES.stories.length);
  });
});

describe('content integrity', () => {
  it('module ids are globally unique', () => {
    const ids = [
      ...LESSON_SUBJECTS.flatMap((s) => s.modules.map((m) => m.id)),
      ...FUN_GAMES.modules.map((m) => m.id),
    ];
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every assessment question has exactly one correct option', () => {
    for (const subject of ASSESSMENT_SUBJECTS) {
      for (const question of subject.questions) {
        const correct = question.options.filter((o) => o.correct);
        expect(correct, `${subject.id} q${question.id}`).toHaveLength(1);
      }
    }
  });

  it('praise and try messages exist', () => {
    expect(APP_META.praiseMessages.length).toBeGreaterThan(0);
    expect(APP_META.tryMessages.length).toBeGreaterThan(0);
  });
});
