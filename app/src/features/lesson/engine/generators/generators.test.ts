import { describe, expect, it } from 'vitest';
import { LESSON_SUBJECTS } from '../../../../content';
import { mulberry32 } from '../../../../services/rng';
import { getContentKey } from '../antiRepeat';
import { createQuestionBank } from './index';

const ALL_MODULES = LESSON_SUBJECTS.flatMap((subject) =>
  subject.modules.map((module) => ({ subjectId: subject.id, module })),
);

describe('createQuestionBank across all real content', () => {
  it('covers all 114 modules (103 v1 + 8 batch 2026-07 + 3 mental maths 2026-07d)', () => {
    expect(ALL_MODULES).toHaveLength(114);
  });

  it.each(ALL_MODULES.map((m) => [`${m.subjectId}/${m.module.id}`, m.module] as const))(
    '%s produces a valid bank',
    (_label, module) => {
      const bank = createQuestionBank(module, mulberry32(1234));
      expect(bank.length).toBeGreaterThan(0);

      for (const question of bank) {
        expect(question.id.startsWith(`${module.id}:`)).toBe(true);
        expect(question.prompt.length).toBeGreaterThan(0);

        if (question.kind === 'mcq') {
          expect(question.options).toContain(question.answer);
          expect(question.options.length).toBeGreaterThanOrEqual(2);
        } else {
          // every answer letter must be offered in the tile bank (multiset)
          const pool = [...question.bank];
          for (const letter of question.answer) {
            const at = pool.indexOf(letter);
            expect(at, `letter ${letter} missing in bank for ${question.id}`).toBeGreaterThan(-1);
            pool.splice(at, 1);
          }
          expect(question.answerText.length).toBeGreaterThan(0);
        }
      }
    },
  );

  it.each(ALL_MODULES.map((m) => [`${m.subjectId}/${m.module.id}`, m.module] as const))(
    '%s has enough unique content for a full session',
    (_label, module) => {
      const bank = createQuestionBank(module, mulberry32(99));
      const uniqueKeys = new Set(bank.map(getContentKey));
      // v1 would render undefined questions if the unique pool were smaller
      // than the per-session question count; guarantee it never happens.
      expect(uniqueKeys.size).toBeGreaterThanOrEqual(module.questions);
    },
  );

  it('is deterministic under a fixed seed', () => {
    for (const { module } of ALL_MODULES) {
      const a = createQuestionBank(module, mulberry32(7));
      const b = createQuestionBank(module, mulberry32(7));
      expect(JSON.stringify(a)).toBe(JSON.stringify(b));
    }
  });
});
