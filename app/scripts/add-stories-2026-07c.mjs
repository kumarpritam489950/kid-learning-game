/**
 * Content batch 2026-07c: +6 English reading-book stories for CBSE Class 1.
 * Original texts written at early-reader level (short sentences, sight
 * words), plus one public-domain folk tale retelling (The Little Red Hen).
 *
 * Run once from app/:  node scripts/add-stories-2026-07c.mjs
 * Idempotent: skips any story whose id already exists.
 * After running: update the story count in src/content/content.test.ts.
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const storiesPath = path.resolve(__dirname, '../src/content/stories.json');

const page = (visual, text) => ({ visual, text, speakText: text });

const NEW_STORIES = [
  {
    id: 'ravi_red_kite',
    title: 'Ravi and the Red Kite',
    emoji: '🧒🪁',
    moral: 'Friends help each other.',
    pages: [
      page('🧒🪁', 'This is Ravi. He has a red kite.'),
      page('🌬️🪁', 'The wind blows. The kite goes up, up, up!'),
      page('🌳🪁', 'Oh no! The kite is stuck in a tall tree.'),
      page('🧒😢', 'Ravi is sad. He cannot reach his kite.'),
      page('👧🪜', 'His friend Mira brings a ladder. They get the kite down together.'),
      page('🧒👧🪁', 'Ravi and Mira fly the kite together. Flying with a friend is more fun!'),
    ],
  },
  {
    id: 'little_seed',
    title: 'The Little Seed',
    emoji: '🌱☀️',
    moral: 'Good things take time to grow.',
    pages: [
      page('🌰', 'A little seed sleeps in the soil.'),
      page('🌧️', 'The rain falls. Drip, drop, drip!'),
      page('☀️', 'The sun shines. The soil gets warm.'),
      page('🌱', 'The seed wakes up. A tiny green shoot comes out.'),
      page('🌿🌸', 'The shoot grows and grows. Little flowers open up.'),
      page('🌳🐦', 'Now it is a big plant! Birds and bees come to say hello.'),
    ],
  },
  {
    id: 'meena_market',
    title: 'Meena Goes to the Market',
    emoji: '👧🧺',
    moral: 'Sharing makes everyone happy.',
    pages: [
      page('👧🧺', 'Meena goes to the market with her mother.'),
      page('🍎🍎', 'She buys two red apples.'),
      page('🍌🍌🍌', 'She buys three yellow bananas.'),
      page('🥕🥕🥕🥕', 'She buys four orange carrots.'),
      page('👵🍎', 'At home, Meena gives one apple to her grandmother.'),
      page('👵😊', 'Grandmother smiles a big smile. Meena feels very happy.'),
    ],
  },
  {
    id: 'rainy_day_cat',
    title: 'The Rainy Day',
    emoji: '☔🐱',
    moral: 'Be kind to animals.',
    pages: [
      page('🌧️🌧️', 'It rains and rains all day.'),
      page('🐱💧', 'A little cat sits in the rain. It is wet and cold.'),
      page('👦🪟', 'Arjun sees the cat from his window.'),
      page('👦☔', 'He runs out with his big umbrella.'),
      page('🏠🐱', 'He brings the cat home and dries it with a soft towel.'),
      page('🐱💤', 'The cat purrs and falls asleep. Arjun feels good inside.'),
    ],
  },
  {
    id: 'little_red_hen',
    title: 'The Little Red Hen',
    emoji: '🐔🌾',
    moral: 'Work hard and you will enjoy the reward.',
    pages: [
      page('🐔🌾', 'A little red hen finds some grains of wheat.'),
      page('🐔❓', '"Who will help me plant the wheat?" she asks.'),
      page('🐱🐶', '"Not I," says the cat. "Not I," says the dog.'),
      page('🐔🌱', 'So the hen plants the wheat all by herself. It grows tall and golden.'),
      page('🍞', 'She makes soft, warm bread from the wheat. What a lovely smell!'),
      page('🐔🐥', 'She shares the bread with her little chicks. Yum, yum, yum!'),
    ],
  },
  {
    id: 'tara_moon',
    title: 'Tara and the Moon',
    emoji: '👧🌙',
    moral: 'Ask questions — that is how we learn.',
    pages: [
      page('👧🌙', 'At night, Tara looks up at the sky.'),
      page('🌕✨', 'The moon is big and round. The stars twinkle, twinkle.'),
      page('👧❓', '"Mummy, why does the moon change its shape?" asks Tara.'),
      page('👩🌒', 'Mother says, "The moon shows us a new shape every night."'),
      page('🌒🌓🌕', 'Some nights it is thin like a banana. Some nights it is round like a roti.'),
      page('👧💤', 'Tara waves good night to the moon and goes to sleep.'),
    ],
  },
];

// ── Apply ─────────────────────────────────────────────────────────────────────

const subject = JSON.parse(await readFile(storiesPath, 'utf8'));
const existing = new Set(subject.stories.map((s) => s.id));
let added = 0;
for (const story of NEW_STORIES) {
  if (existing.has(story.id)) continue;
  subject.stories.push(story);
  added += 1;
}
if (added > 0) {
  await writeFile(storiesPath, `${JSON.stringify(subject, null, 2)}\n`, 'utf8');
}

process.stdout.write(
  `Added ${added} stories (total ${subject.stories.length}).\n` +
    'Now update the story count in src/content/content.test.ts.\n',
);
