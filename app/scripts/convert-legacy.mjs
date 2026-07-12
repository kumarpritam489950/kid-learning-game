/**
 * One-time conversion of the v1 content files into typed JSON under src/content/.
 *
 * Sources (repo root, kept until the v2 cutover):
 *   - data/gameData.js          → assigns globalThis.GAME_DATA when executed
 *   - assessment_expanded.js    → declares `const assessmentQuestions = {...}`
 *
 * Run from app/:  node scripts/convert-legacy.mjs
 *
 * Normalizations applied (documented in CONTENT.md):
 *   - letter lists (string | {letter, phonetic}) → always {letter, phonetic|null}
 *   - arithmetic `visualItem` (singular)         → `visualItems` array
 *   - pictureWord-style `phonetic` absent        → explicit null
 * Note: assessment_expanded.js is broken after the object's closing `};`
 * (a generator bug appended orphaned question blocks plus duplicate
 * kannada/evs sections that are not valid JavaScript). Only the valid
 * prefix — which already contains all six subjects — is evaluated; the
 * unparseable tail is ignored. See CONTENT.md.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../..');
const contentDir = path.resolve(__dirname, '../src/content');

// ── Load legacy sources ───────────────────────────────────────────────────────
await import(pathToFileURL(path.join(repoRoot, 'data', 'gameData.js')).href);
const gameData = globalThis.GAME_DATA;
if (!gameData?.curriculum || !gameData?.app) {
  throw new Error('GAME_DATA not populated after importing data/gameData.js');
}

const assessmentSrc = await readFile(path.join(repoRoot, 'assessment_expanded.js'), 'utf8');
// The declaration closes at the first top-level `};` — everything after it is
// the unparseable generator-bug tail (see header comment).
const closeMatch = /^};/m.exec(assessmentSrc);
if (!closeMatch) throw new Error('Could not find the end of the assessmentQuestions object');
const validPrefix = assessmentSrc.slice(0, closeMatch.index + 2);
const assessment = new Function(`${validPrefix}; return assessmentQuestions;`)();
if (!assessment || typeof assessment !== 'object') {
  throw new Error('assessmentQuestions not found in assessment_expanded.js');
}

// ── Normalization helpers ─────────────────────────────────────────────────────
function normalizeLetters(letters) {
  return letters.map((entry) =>
    typeof entry === 'string'
      ? { letter: entry, phonetic: null }
      : { letter: entry.letter, phonetic: entry.phonetic ?? null },
  );
}

function normalizeItemsWithPhonetic(items) {
  return items.map((item) => ({ ...item, phonetic: item.phonetic ?? null }));
}

function normalizeModule(module) {
  const out = { ...module };
  if (module.type === 'kannadaLetter' || module.type === 'hindiLetter') {
    out.letters = normalizeLetters(module.letters);
  }
  if (module.type === 'arithmetic' && !Array.isArray(module.visualItems)) {
    out.visualItems = [module.visualItem];
    delete out.visualItem;
  }
  if (module.type === 'kannadaPictureWord' || module.type === 'hindiPictureWord') {
    out.items = normalizeItemsWithPhonetic(module.items);
  }
  return out;
}

/** Count the "content units" (authored entries) inside a module. */
function moduleUnits(module) {
  for (const key of ['items', 'words', 'letters', 'shapes', 'combos', 'emojis', 'cardTypes']) {
    if (Array.isArray(module[key])) return module[key].length;
  }
  return 0;
}

// ── Convert curriculum subjects ───────────────────────────────────────────────
const manifest = {
  generatedAt: new Date().toISOString(),
  sources: { gameData: 'data/gameData.js', assessment: 'assessment_expanded.js' },
  subjects: {},
  stories: { count: 0, pages: {} },
  assessment: {},
  app: {
    praiseMessages: gameData.app.praiseMessages.length,
    tryMessages: gameData.app.tryMessages.length,
  },
};

await mkdir(path.join(contentDir, 'subjects'), { recursive: true });
await mkdir(path.join(contentDir, 'assessment'), { recursive: true });

async function writeJson(relPath, data) {
  const target = path.join(contentDir, relPath);
  await writeFile(target, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

const problems = [];

for (const [subjectId, subject] of Object.entries(gameData.curriculum)) {
  if (subjectId === 'stories') {
    const stories = subject.list.map((story) => ({ ...story }));
    manifest.stories.count = stories.length;
    for (const story of stories) manifest.stories.pages[story.id] = story.pages.length;
    await writeJson('stories.json', {
      id: 'stories',
      name: subject.name,
      icon: subject.icon,
      description: subject.description,
      stories,
    });
    continue;
  }

  const modules = subject.modules.map(normalizeModule);
  manifest.subjects[subjectId] = {
    modules: modules.length,
    units: Object.fromEntries(modules.map((m) => [m.id, moduleUnits(m)])),
  };
  await writeJson(`subjects/${subjectId}.json`, {
    id: subjectId,
    name: subject.name,
    icon: subject.icon,
    description: subject.description,
    modules,
  });
}

// ── Convert assessment bank ───────────────────────────────────────────────────
for (const [subjectId, questions] of Object.entries(assessment)) {
  const seenIds = new Set();
  questions.forEach((q) => {
    const correctCount = q.options.filter((o) => o.correct).length;
    if (correctCount !== 1) {
      problems.push(`assessment ${subjectId} q${q.id}: ${correctCount} correct options`);
    }
    if (seenIds.has(q.id)) {
      problems.push(`assessment ${subjectId}: duplicate question id ${q.id}`);
    }
    seenIds.add(q.id);
  });
  manifest.assessment[subjectId] = questions.length;
  await writeJson(`assessment/${subjectId}.json`, { id: subjectId, questions });
}

await writeJson('app-meta.json', gameData.app);
await writeJson('conversion-manifest.json', manifest);

// ── Report ────────────────────────────────────────────────────────────────────
const subjectSummary = Object.entries(manifest.subjects)
  .map(([id, s]) => `  ${id}: ${s.modules} modules`)
  .join('\n');
const assessmentSummary = Object.entries(manifest.assessment)
  .map(([id, n]) => `  ${id}: ${n} questions`)
  .join('\n');

process.stdout.write(
  [
    'Converted subjects:',
    subjectSummary,
    `Stories: ${manifest.stories.count}`,
    'Assessment bank:',
    assessmentSummary,
    problems.length
      ? `PROBLEMS (${problems.length}):\n${problems.join('\n')}`
      : 'No data problems found.',
    '',
  ].join('\n'),
);

if (problems.length) process.exitCode = 1;
