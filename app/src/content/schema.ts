import { z } from 'zod';

/**
 * Content schemas for everything under src/content/.
 *
 * The JSON is generated from the v1 sources by scripts/convert-legacy.mjs and
 * validated against these schemas in tests (and once at startup in dev).
 * Field shapes mirror exactly what the v1 question generators consumed
 * (js/app.js in the repo root, lines ~450-913 at tag v1-legacy).
 */

// ── Shared pieces ─────────────────────────────────────────────────────────────

const moduleBase = {
  id: z.string().min(1),
  title: z.string().min(1),
};

/** Letter entry normalized by the converter: phonetic is always present. */
const letterEntry = z.strictObject({
  letter: z.string().min(1),
  phonetic: z.string().nullable(),
});

const pictureWordItem = z.strictObject({
  picture: z.string().min(1),
  word: z.string().min(1),
});

const pictureWordItemWithPhonetic = z.strictObject({
  picture: z.string().min(1),
  word: z.string().min(1),
  phonetic: z.string().nullable(),
});

const rhymeItem = z.strictObject({
  lines: z.string().min(1),
  answer: z.string().min(1),
  options: z.array(z.string().min(1)).min(2),
  speakText: z.string().min(1),
  speakLang: z.string().optional(),
  emoji: z.string().optional(),
});

// ── Lesson modules (the 16 v1 question-generator types) ──────────────────────

export const lessonModuleSchema = z.discriminatedUnion('type', [
  z.strictObject({
    ...moduleBase,
    type: z.literal('counting'),
    questions: z.number().int().positive(),
    items: z.array(z.string().min(1)).min(1),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('arithmetic'),
    questions: z.number().int().positive(),
    operation: z.enum(['add', 'subtract']),
    minValue: z.number().int().nonnegative(),
    maxValue: z.number().int().nonnegative(),
    maxAnswer: z.number().int().nonnegative(),
    visualItems: z.array(z.string().min(1)).min(1),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('shape'),
    questions: z.number().int().positive(),
    shapes: z.array(z.strictObject({ name: z.string().min(1), symbol: z.string().min(1) })).min(2),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('missingLetter'),
    questions: z.number().int().positive(),
    words: z
      .array(
        z.strictObject({
          fullWord: z.string().min(1),
          display: z.string().min(1),
          answer: z.string().min(1),
        }),
      )
      .min(1),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('pictureWord'),
    questions: z.number().int().positive(),
    items: z.array(pictureWordItem).min(1),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('sightWord'),
    questions: z.number().int().positive(),
    words: z.array(z.string().min(1)).min(2),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('kannadaLetter'),
    questions: z.number().int().positive(),
    letters: z.array(letterEntry).min(2),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('kannadaPictureWord'),
    questions: z.number().int().positive(),
    items: z.array(pictureWordItemWithPhonetic).min(1),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('kannadaDragWord'),
    questions: z.number().int().positive(),
    words: z
      .array(
        z.strictObject({
          letters: z.array(z.string().min(1)).min(1),
          answerText: z.string().min(1),
          clue: z.string().min(1),
          picture: z.string().min(1),
        }),
      )
      .min(1),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('hindiLetter'),
    questions: z.number().int().positive(),
    letters: z.array(letterEntry).min(2),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('hindiPictureWord'),
    questions: z.number().int().positive(),
    items: z.array(pictureWordItemWithPhonetic).min(1),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('hindiMissingMatra'),
    questions: z.number().int().positive(),
    words: z
      .array(
        z.strictObject({
          display: z.string().min(1),
          answer: z.string().min(1),
          // Absent on hin_more_matras words — v1 rendered "undefined" in the
          // prompt there; v2 omits the hint suffix instead.
          hint: z.string().min(1).optional(),
          fullWord: z.string().min(1),
          // Extra authoring metadata present on some words.
          base: z.string().optional(),
          matra: z.string().optional(),
        }),
      )
      .min(1),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('scienceMcq'),
    questions: z.number().int().positive(),
    items: z
      .array(
        z.strictObject({
          question: z.string().min(1),
          visual: z.string(),
          answer: z.string().min(1),
          options: z.array(z.string().min(1)).min(2),
          // Authored TTS hints on some items; the v1 engine ignored these,
          // the v2 engine may speak them.
          speakText: z.string().optional(),
          speakLang: z.string().optional(),
        }),
      )
      .min(1),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('hindiBarakhadi'),
    questions: z.number().int().positive(),
    combos: z
      .array(
        z.strictObject({
          consonant: z.string().min(1),
          matra: z.string().min(1),
          result: z.string().min(1),
        }),
      )
      .min(2),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('rhymeComplete'),
    questions: z.number().int().positive(),
    completePrompt: z.string().optional(),
    items: z.array(rhymeItem).min(1),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('hindiPoem'),
    questions: z.number().int().positive(),
    completePrompt: z.string().optional(),
    items: z.array(rhymeItem).min(1),
  }),
]);

// ── Arcade (fun game) modules ─────────────────────────────────────────────────

export const arcadeModuleSchema = z.discriminatedUnion('type', [
  z.strictObject({
    ...moduleBase,
    type: z.literal('snakeGame'),
    description: z.string().min(1),
    controls: z.string().min(1),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('memoryMatch'),
    description: z.string().min(1),
    gridSize: z.number().int().positive(),
    emojis: z.array(z.string().min(1)).min(2),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('catchGame'),
    description: z.string().min(1),
    duration: z.number().int().positive(),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('balloonPop'),
    description: z.string().min(1),
    duration: z.number().int().positive(),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('numberJump'),
    description: z.string().min(1),
    difficulty: z.string().min(1),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('colorMatchSpeed'),
    description: z.string().min(1),
    duration: z.number().int().positive(),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('mazeRunner'),
    description: z.string().min(1),
    mazeSize: z.number().int().positive(),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('bubbleBlast'),
    description: z.string().min(1),
    gridSize: z.number().int().positive(),
  }),
  z.strictObject({
    ...moduleBase,
    type: z.literal('snapGame'),
    description: z.string().min(1),
    cardTypes: z.array(z.string().min(1)).min(2),
    rounds: z.number().int().positive(),
  }),
]);

// ── Subjects ──────────────────────────────────────────────────────────────────

const subjectBase = {
  id: z.string().min(1),
  name: z.string().min(1),
  icon: z.string().min(1),
  description: z.string().min(1),
};

export const lessonSubjectSchema = z.strictObject({
  ...subjectBase,
  modules: z.array(lessonModuleSchema).min(1),
});

export const funGamesSubjectSchema = z.strictObject({
  ...subjectBase,
  modules: z.array(arcadeModuleSchema).min(1),
});

// ── Stories ───────────────────────────────────────────────────────────────────

export const storySchema = z.strictObject({
  id: z.string().min(1),
  title: z.string().min(1),
  emoji: z.string().min(1),
  moral: z.string().min(1),
  pages: z
    .array(
      z.strictObject({
        visual: z.string().min(1),
        text: z.string().min(1),
        speakText: z.string().min(1),
      }),
    )
    .min(1),
});

export const storiesSubjectSchema = z.strictObject({
  ...subjectBase,
  stories: z.array(storySchema).min(1),
});

// ── Assessment bank ───────────────────────────────────────────────────────────

export const assessmentQuestionSchema = z
  .strictObject({
    id: z.number().int(),
    question: z.string().min(1),
    options: z.array(z.strictObject({ text: z.string().min(1), correct: z.boolean() })).min(2),
    topic: z.string().min(1),
  })
  .refine((q) => q.options.filter((o) => o.correct).length === 1, {
    message: 'question must have exactly one correct option',
  });

export const assessmentSubjectSchema = z.strictObject({
  id: z.string().min(1),
  questions: z.array(assessmentQuestionSchema).min(1),
});

// ── App metadata ──────────────────────────────────────────────────────────────

export const appMetaSchema = z.strictObject({
  classLevel: z.string().min(1),
  board: z.string().min(1),
  praiseMessages: z.array(z.string().min(1)).min(1),
  tryMessages: z.array(z.string().min(1)).min(1),
});

// ── Inferred types ────────────────────────────────────────────────────────────

export type LessonModule = z.infer<typeof lessonModuleSchema>;
export type LessonModuleType = LessonModule['type'];
export type ArcadeModule = z.infer<typeof arcadeModuleSchema>;
export type LessonSubject = z.infer<typeof lessonSubjectSchema>;
export type FunGamesSubject = z.infer<typeof funGamesSubjectSchema>;
export type Story = z.infer<typeof storySchema>;
export type StoriesSubject = z.infer<typeof storiesSubjectSchema>;
export type AssessmentQuestion = z.infer<typeof assessmentQuestionSchema>;
export type AssessmentSubject = z.infer<typeof assessmentSubjectSchema>;
export type AppMeta = z.infer<typeof appMetaSchema>;
