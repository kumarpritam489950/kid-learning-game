/**
 * Mental Math subject upgrade (batch 2026-07d), modeled on the Class 1
 * "mental maths" workbook chapters:
 *
 * 1. Replaces the repetitive decorative visuals (⚡, 🔗, …) with varied
 *    single-emoji visuals per module so every question gets a real
 *    OpenMoji illustration (CC BY-SA 4.0, https://openmoji.org) — the same
 *    pipeline picture-word items use.
 * 2. Adds three workbook-style modules: Before/After/Between (up to 50),
 *    Tens and Ones, and Add 2-Digit Numbers.
 * 3. Downloads the needed OpenMoji SVGs and sets `image` on every item
 *    whose visual is a single-codepoint emoji.
 *
 * Idempotent. Run from app/:  node scripts/add-mentalmath-2026-07d.mjs
 */
import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const subjectFile = path.resolve(__dirname, '../src/content/subjects/mental_math.json');
const imagesDir = path.resolve(__dirname, '../public/images/words');
const OPENMOJI_BASE = 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg';

/** Varied visuals per drill module — one per item, rotating. */
const VISUAL_ROTATION = {
  mental_quick_add: ['🍎', '🎈', '⭐', '🍬', '🐠'],
  mental_quick_subtract: ['🎈', '🍪', '🐦', '🧁', '🍭'],
  mental_number_bonds_10: ['🔟', '🖐', '🧩', '🔗'],
  mental_doubling: ['🎲', '🦋', '👐', '🐞'],
  mental_one_more_less: ['🎠'],
  mental_skip_counting: ['🐸', '🦘', '🐰'],
  mental_comparison: ['⚖', '🥭', '🐘'],
  mental_missing_numbers: ['🚂', '🚃'],
  mm_number_names: ['🔢', '✏'],
};

/** MCQ item helper: answer + three authored distractors. */
const q = (question, visual, answer, wrongs) => ({
  question,
  visual,
  answer: String(answer),
  options: [String(answer), ...wrongs.map(String)],
});

const NEW_MODULES = [
  {
    id: 'mm_before_after_between',
    title: 'Before, After and Between (up to 50)',
    type: 'scienceMcq',
    questions: 10,
    items: [
      q('What number comes after 24?', '🎠', 25, [23, 26, 34]),
      q('What number comes after 39?', '🎠', 40, [38, 41, 49]),
      q('What number comes after 46?', '🎠', 47, [45, 48, 44]),
      q('What number comes before 30?', '🎠', 29, [31, 28, 20]),
      q('What number comes before 41?', '🎠', 40, [42, 39, 31]),
      q('What number comes before 18?', '🎠', 17, [19, 16, 8]),
      q('Which number comes between 25 and 27?', '🎠', 26, [24, 28, 25]),
      q('Which number comes between 33 and 35?', '🎠', 34, [32, 36, 33]),
      q('Which number comes between 48 and 50?', '🎠', 49, [47, 50, 48]),
      q('What number comes after 35?', '🎠', 36, [34, 37, 45]),
      q('What number comes before 22?', '🎠', 21, [23, 20, 12]),
      q('Which number comes between 19 and 21?', '🎠', 20, [18, 22, 19]),
      q('What number comes after 42?', '🎠', 43, [41, 44, 52]),
      q('What number comes before 37?', '🎠', 36, [38, 35, 27]),
      q('Which number comes between 44 and 46?', '🎠', 45, [43, 47, 44]),
    ],
  },
  {
    id: 'mm_tens_ones',
    title: 'Tens and Ones',
    type: 'scienceMcq',
    questions: 10,
    items: [
      q('1 ten and 3 ones make ___', '🐔', 13, [31, 4, 10]),
      q('How many tens are in 15?', '🥚', 1, [5, 15, 10]),
      q('How many ones are in 17?', '🧺', 7, [1, 17, 10]),
      q('10 + 4 = ?', '🐔', 14, [40, 13, 15]),
      q('1 ten and 8 ones make ___', '🥚', 18, [81, 9, 10]),
      q('How many ones are in 12?', '🧺', 2, [1, 12, 10]),
      q('2 tens make ___', '🐔', 20, [2, 12, 22]),
      q('10 + 9 = ?', '🥚', 19, [91, 18, 20]),
      q('1 ten and 6 ones make ___', '🧺', 16, [61, 7, 10]),
      q('How many tens are in 20?', '🐔', 2, [0, 20, 10]),
      q('10 + 1 = ?', '🥚', 11, [10, 12, 101]),
      q('How many ones are in 19?', '🧺', 9, [1, 19, 10]),
      q('1 ten and 0 ones make ___', '🐔', 10, [1, 100, 11]),
      q('10 + 7 = ?', '🥚', 17, [70, 16, 18]),
      q('How many ones are in 15?', '🧺', 5, [1, 15, 10]),
    ],
  },
  {
    id: 'mm_add_2digit',
    title: 'Add 2-Digit Numbers',
    type: 'scienceMcq',
    questions: 10,
    items: [
      q('23 + 10 = ?', '🧮', 33, [32, 34, 43]),
      q('34 + 20 = ?', '🧮', 54, [53, 55, 45]),
      q('42 + 30 = ?', '🧮', 72, [71, 73, 62]),
      q('15 + 40 = ?', '🧮', 55, [54, 56, 45]),
      q('23 + 14 = ?', '🧮', 37, [36, 38, 27]),
      q('32 + 25 = ?', '🧮', 57, [56, 58, 47]),
      q('40 + 30 = ?', '🧮', 70, [60, 80, 71]),
      q('61 + 22 = ?', '🧮', 83, [82, 84, 73]),
      q('24 + 50 = ?', '🧮', 74, [73, 75, 64]),
      q('33 + 33 = ?', '🧮', 66, [63, 69, 56]),
      q('12 + 43 = ?', '🧮', 55, [54, 56, 45]),
      q('45 + 20 = ?', '🧮', 65, [64, 66, 55]),
      q('36 + 41 = ?', '🧮', 77, [76, 78, 67]),
      q('22 + 22 = ?', '🧮', 44, [42, 46, 24]),
      q('53 + 14 = ?', '🧮', 67, [66, 68, 57]),
    ],
  },
];

function emojiToCode(emoji) {
  const cps = [...emoji]
    .map((ch) => ch.codePointAt(0).toString(16).toUpperCase())
    .filter((cp) => cp !== 'FE0F');
  return cps.length === 1 ? cps[0] : null; // single-codepoint emoji only
}

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

async function download(code) {
  const target = path.join(imagesDir, `${code}.svg`);
  if (await exists(target)) return 'cached';
  const res = await fetch(`${OPENMOJI_BASE}/${code}.svg`);
  if (!res.ok) return 'missing';
  await writeFile(target, Buffer.from(await res.arrayBuffer()));
  return 'downloaded';
}

await mkdir(imagesDir, { recursive: true });
const subject = JSON.parse(await readFile(subjectFile, 'utf8'));

for (const mod of NEW_MODULES) {
  if (!subject.modules.some((m) => m.id === mod.id)) subject.modules.push(mod);
}

for (const mod of subject.modules) {
  const rotation = VISUAL_ROTATION[mod.id];
  if (rotation) {
    mod.items.forEach((item, i) => {
      item.visual = rotation[i % rotation.length];
    });
  }
}

const summary = { downloaded: 0, cached: 0, missing: [], patched: 0 };
for (const mod of subject.modules) {
  if (mod.type !== 'scienceMcq') continue;
  for (const item of mod.items) {
    const code = emojiToCode(item.visual.trim());
    if (!code) continue; // multi-emoji visuals keep emoji rendering
    const result = await download(code);
    if (result === 'missing') {
      summary.missing.push(`${mod.id}: ${item.visual} (${code})`);
      continue;
    }
    summary[result] += 1;
    item.image = `images/words/${code}.svg`;
    summary.patched += 1;
  }
}

await writeFile(subjectFile, `${JSON.stringify(subject, null, 2)}\n`, 'utf8');
process.stdout.write(
  [
    `Modules: ${subject.modules.length}. Images — downloaded: ${summary.downloaded}, ` +
      `cached: ${summary.cached}, items illustrated: ${summary.patched}`,
    summary.missing.length
      ? `No OpenMoji for (kept emoji):\n  ${summary.missing.join('\n  ')}`
      : '',
    '',
  ]
    .filter(Boolean)
    .join('\n'),
);
