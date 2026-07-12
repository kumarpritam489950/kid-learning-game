/**
 * Downloads OpenMoji illustrations (CC BY-SA 4.0, https://openmoji.org) for
 * every picture-word item and patches the content JSON with `image` paths.
 *
 * Run from app/:  node scripts/fetch-openmoji.mjs
 *
 * - Emoji → uppercase hyphenated codepoints → public/images/words/<code>.svg
 * - Items get `"image": "images/words/<code>.svg"` (renderer prefixes the
 *   Vite BASE_URL). Existing files are not re-downloaded, and an `image`
 *   already present in JSON is left alone — drop your own illustration at
 *   the same path (or point `image` elsewhere) to replace one.
 */
import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const subjectsDir = path.resolve(__dirname, '../src/content/subjects');
const imagesDir = path.resolve(__dirname, '../public/images/words');

const OPENMOJI_BASE = 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/svg';
const PICTURE_TYPES = new Set(['pictureWord', 'kannadaPictureWord', 'hindiPictureWord']);

function emojiToCodepoints(emoji) {
  // OpenMoji filenames use uppercase hyphenated codepoints without FE0F
  // variation selectors (except where required — dropping FE0F covers the
  // pictographic emoji used in this content).
  return [...emoji]
    .map((ch) => ch.codePointAt(0).toString(16).toUpperCase())
    .filter((cp) => cp !== 'FE0F')
    .join('-');
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

const summary = { downloaded: 0, cached: 0, missing: [], patched: 0 };

for (const file of ['english.json', 'kannada.json', 'hindi.json']) {
  const filePath = path.join(subjectsDir, file);
  const subject = JSON.parse(await readFile(filePath, 'utf8'));
  let changed = false;

  for (const module of subject.modules) {
    if (!PICTURE_TYPES.has(module.type)) continue;
    for (const item of module.items) {
      if (item.image) continue; // hand-placed illustration wins
      const code = emojiToCodepoints(item.picture.trim());
      if (!code) continue;
      const result = await download(code);
      if (result === 'missing') {
        summary.missing.push(`${module.id}: ${item.picture} (${code})`);
        continue;
      }
      summary[result] += 1;
      item.image = `images/words/${code}.svg`;
      summary.patched += 1;
      changed = true;
    }
  }

  if (changed) {
    await writeFile(filePath, `${JSON.stringify(subject, null, 2)}\n`, 'utf8');
  }
}

process.stdout.write(
  [
    `Downloaded: ${summary.downloaded}, cached: ${summary.cached}, items patched: ${summary.patched}`,
    summary.missing.length
      ? `No OpenMoji found for (kept emoji rendering):\n  ${summary.missing.join('\n  ')}`
      : 'All picture-word items have illustrations.',
    '',
  ].join('\n'),
);
