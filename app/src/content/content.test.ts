import { describe, expect, it } from 'vitest';
import { loadAssessmentBank } from './assessment';
import manifest from './conversion-manifest.json';
import { APP_META, FUN_GAMES, LESSON_SUBJECTS, STORIES, validateAllContent } from './index';
import { assessmentSubjectSchema } from './schema';

const ASSESSMENT_SUBJECTS = await loadAssessmentBank();

/**
 * Current expected counts — the source of truth for how much content the
 * app ships TODAY. Update these numbers deliberately with every authoring
 * batch. The committed conversion manifest stays the frozen v1 BASELINE:
 * live content may grow beyond it but must never drop below it.
 */
const EXPECTED_MODULES: Record<string, number> = {
  english: 21,
  math: 21,
  kannada: 13,
  hindi: 19,
  science: 13,
  computer: 4,
  rhymes: 2,
  gk: 6,
  mental_math: 12,
};

const EXPECTED_ASSESSMENT: Record<string, number> = {
  mathematics: 99,
  english: 87,
  hindi: 57,
  computer: 67,
  kannada: 56,
  evs: 66,
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

  it('has the full 432-question assessment bank (283 v1 + 59 batch 2026-07 + 90 batch 2026-07b)', () => {
    expect(ASSESSMENT_SUBJECTS.map((s) => s.id).sort()).toEqual(
      Object.keys(EXPECTED_ASSESSMENT).sort(),
    );
    let total = 0;
    for (const subject of ASSESSMENT_SUBJECTS) {
      expect(subject.questions, subject.id).toHaveLength(EXPECTED_ASSESSMENT[subject.id]!);
      total += subject.questions.length;
    }
    expect(total).toBe(432);
  });

  it('never drops below the frozen v1 baseline (conversion manifest)', () => {
    for (const subject of LESSON_SUBJECTS) {
      expect(subject.modules.length, subject.id).toBeGreaterThanOrEqual(
        manifest.subjects[subject.id as keyof typeof manifest.subjects].modules,
      );
    }
    for (const subject of ASSESSMENT_SUBJECTS) {
      expect(subject.questions.length, subject.id).toBeGreaterThanOrEqual(
        manifest.assessment[subject.id as keyof typeof manifest.assessment],
      );
    }
    expect(STORIES.stories.length).toBeGreaterThanOrEqual(manifest.stories.count);
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
