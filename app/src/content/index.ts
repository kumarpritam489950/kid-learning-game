import type {
  AppMeta,
  AssessmentSubject,
  FunGamesSubject,
  LessonSubject,
  StoriesSubject,
} from './schema';
import {
  appMetaSchema,
  assessmentSubjectSchema,
  funGamesSubjectSchema,
  lessonSubjectSchema,
  storiesSubjectSchema,
} from './schema';

import appMetaJson from './app-meta.json';
import assessmentComputerJson from './assessment/computer.json';
import assessmentEnglishJson from './assessment/english.json';
import assessmentEvsJson from './assessment/evs.json';
import assessmentHindiJson from './assessment/hindi.json';
import assessmentKannadaJson from './assessment/kannada.json';
import assessmentMathematicsJson from './assessment/mathematics.json';
import storiesJson from './stories.json';
import computerJson from './subjects/computer.json';
import englishJson from './subjects/english.json';
import funGamesJson from './subjects/funGames.json';
import gkJson from './subjects/gk.json';
import hindiJson from './subjects/hindi.json';
import kannadaJson from './subjects/kannada.json';
import mathJson from './subjects/math.json';
import mentalMathJson from './subjects/mental_math.json';
import rhymesJson from './subjects/rhymes.json';
import scienceJson from './subjects/science.json';

// The JSON is produced by scripts/convert-legacy.mjs and validated against the
// schemas in tests (content.test.ts) and once at startup in dev builds, so the
// casts below are safe and keep validation cost out of production startup.

/** Lesson subjects in v1 main-menu order. */
export const LESSON_SUBJECTS: readonly LessonSubject[] = [
  englishJson,
  mathJson,
  kannadaJson,
  hindiJson,
  scienceJson,
  computerJson,
  rhymesJson,
  gkJson,
  mentalMathJson,
] as unknown as LessonSubject[];

export const FUN_GAMES: FunGamesSubject = funGamesJson as unknown as FunGamesSubject;

export const STORIES: StoriesSubject = storiesJson as unknown as StoriesSubject;

export const APP_META: AppMeta = appMetaJson as unknown as AppMeta;

/** Assessment banks keyed by assessment subject id. */
export const ASSESSMENT_SUBJECTS: readonly AssessmentSubject[] = [
  assessmentMathematicsJson,
  assessmentEnglishJson,
  assessmentHindiJson,
  assessmentComputerJson,
  assessmentKannadaJson,
  assessmentEvsJson,
] as unknown as AssessmentSubject[];

export function getLessonSubject(subjectId: string): LessonSubject | undefined {
  return LESSON_SUBJECTS.find((subject) => subject.id === subjectId);
}

export function getAssessmentSubject(subjectId: string): AssessmentSubject | undefined {
  return ASSESSMENT_SUBJECTS.find((subject) => subject.id === subjectId);
}

/**
 * Parse every content file against its schema. Throws on the first mismatch.
 * Runs in tests always, and once at startup in dev.
 */
export function validateAllContent(): void {
  for (const subject of LESSON_SUBJECTS) lessonSubjectSchema.parse(subject);
  funGamesSubjectSchema.parse(FUN_GAMES);
  storiesSubjectSchema.parse(STORIES);
  appMetaSchema.parse(APP_META);
  for (const subject of ASSESSMENT_SUBJECTS) assessmentSubjectSchema.parse(subject);
}

if (import.meta.env.DEV) {
  validateAllContent();
}
