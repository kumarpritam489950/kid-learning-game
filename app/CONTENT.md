# Content Pipeline

All game content lives as JSON under `src/content/`, validated by Zod schemas
in [src/content/schema.ts](src/content/schema.ts).

## Layout

| Path                       | What                                                                                                             |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `subjects/<id>.json`       | 9 lesson subjects (english, math, kannada, hindi, science, computer, rhymes, gk, mental_math), 114 modules total |
| `funGames.json`            | 9 arcade game configs (8 more games are code-defined in `features/funGames/registry.ts`: 2 v1 + 6 subject games) |
| `stories.json`             | 10 Story Time stories with per-page text + TTS lines (4 v1 + 6 Class 1 reading-book batch 2026-07c)              |
| `assessment/<id>.json`     | 432-question assessment bank (mathematics 99, english 87, hindi 57, computer 67, kannada 56, evs 66)             |
| `app-meta.json`            | praise/try messages, class level                                                                                 |
| `conversion-manifest.json` | frozen v1 counts — the floor the live content may never drop below                                               |

Batches so far: v1 conversion (103 modules / 283 assessment) + 2026-07
authoring batch (`scripts/add-content-2026-07.mjs`: +8 modules / +59
assessment questions) + 2026-07b authoring batch
(`scripts/add-assessment-2026-07b.mjs`: +90 assessment questions, 15 per
subject; also repaired evs #24, whose v1 text was its topic name).
Picture-word items carry `image` illustrations
(OpenMoji, CC BY-SA 4.0) fetched by `scripts/fetch-openmoji.mjs` — 335
items covered; composite visuals (e.g. "🍎 A", keycap numbers) keep text
rendering on purpose.

`src/content/index.ts` exposes typed accessors (`LESSON_SUBJECTS`, `FUN_GAMES`,
`STORIES`, `ASSESSMENT_SUBJECTS`, `APP_META`). Content is Zod-validated in
tests and once at startup in dev builds; production pays no validation cost.

## Editing content

Edit the JSON directly, then run `npm test`. The tests in
`src/content/content.test.ts` enforce:

- every file parses against its schema (strict — unknown keys are errors)
- module/question counts match the frozen expectations (update those numbers
  deliberately when adding content)
- globally unique module ids
- every assessment question has exactly one correct option

## Module types

16 lesson types (discriminated on `type`): `counting`, `arithmetic`, `shape`,
`missingLetter`, `pictureWord`, `sightWord`, `kannadaLetter`,
`kannadaPictureWord`, `kannadaDragWord`, `hindiLetter`, `hindiPictureWord`,
`hindiMissingMatra`, `scienceMcq`, `hindiBarakhadi`, `rhymeComplete`,
`hindiPoem` — plus 9 arcade types. Field shapes are documented by the schemas
themselves.

## Provenance

Generated from the v1 sources (git tag `v1-legacy`) by
`scripts/convert-legacy.mjs`:

- `data/gameData.js` → subjects, fun games, stories, app meta
- `assessment_expanded.js` → assessment bank

Normalizations applied during conversion:

- letter lists (`string | {letter, phonetic}`) → always `{letter, phonetic: string|null}`
- arithmetic `visualItem` (singular) → `visualItems` array
- `phonetic` on hindi/kannada picture-word items → explicit `null` when absent

Known v1 data quirks handled:

- **assessment_expanded.js is syntactically broken** after the object's closing
  `};` (line ~3134): a generator bug appended orphaned question blocks plus
  duplicate `kannada`/`evs` sections. Only the valid prefix (which contains all
  six subjects) is used; the tail was never loadable by any JS engine.
- **hin_more_matras words have no `hint`** — v1 rendered the string
  "undefined" in those prompts; the v2 generator omits the hint suffix.
- Some `scienceMcq` items carry `speakText`/`speakLang` that v1 ignored; v2
  may honor them for TTS.

The converter is one-time: after the v2 cutover removes the legacy files, the
JSON here is the source of truth. (`tools/legacy/generate_questions.py` still
refers to the old assessment format and would need updating to emit JSON if
ever revived.)
