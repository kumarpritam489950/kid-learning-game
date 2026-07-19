import { FUN_GAMES } from '../../content';
import type { ArcadeModule } from '../../content/schema';
import { createAnimalHomesGame } from './games/animalHomes';
import { createBalloonPopSpeedGame } from './games/balloonPopSpeed';
import { createBalloonQuizGame } from './games/balloonQuiz';
import { createBubbleGame } from './games/bubble';
import { createCatchGame } from './games/catch';
import { createColorMatchSpeedGame } from './games/colorMatchSpeed';
import { createColorTapGame } from './games/colorTap';
import { createHindiAksharGame } from './games/hindiAkshar';
import { createMazeGame } from './games/maze';
import { createMemoryGame } from './games/memory';
import { createMentalMathsGame } from './games/mentalMaths';
import { createNumberJumpGame } from './games/numberJump';
import { createQuickMathGame } from './games/quickMath';
import { createShapeDetectiveGame } from './games/shapeDetective';
import { createSnakeGame } from './games/snake';
import { createSnapGame } from './games/snap';
import { createWordPopGame } from './games/wordPop';
import type { FunGameDef } from './types';

function gameDefFromModule(m: ArcadeModule): FunGameDef {
  const base = { id: m.id, title: m.title, description: m.description };
  switch (m.type) {
    case 'snakeGame':
      return createSnakeGame(base);
    case 'catchGame':
      return createCatchGame(base, m.duration);
    // The balloon_pop content module (duration-based) is the SPEED game;
    // the number-quiz balloon game below never had a content module in v1.
    case 'balloonPop':
      return createBalloonPopSpeedGame(base, m.duration);
    case 'memoryMatch':
      return createMemoryGame(base, m.emojis);
    case 'numberJump':
      return createNumberJumpGame(base);
    case 'colorMatchSpeed':
      return createColorMatchSpeedGame(base, m.duration);
    case 'mazeRunner':
      return createMazeGame(base);
    case 'bubbleBlast':
      return createBubbleGame(base);
    case 'snapGame':
      return createSnapGame(base, m.cardTypes, m.rounds);
  }
}

/** v1 hardcoded these two menu tiles without content modules. */
const BALLOON_QUIZ = createBalloonQuizGame({
  id: 'balloon_quiz',
  title: '🎈 Balloon Pop Numbers',
  description: 'Pop the balloon with the number you hear!',
});

const COLOR_TAP = createColorTapGame({
  id: 'color_tap',
  title: '🎨 Color Tap',
  description: "Tap the named color — don't be tricked!",
});

/** CBSE Class 1 subject games (batch 2026-07: English, Maths, Hindi, EVS)
 *  plus the workbook-styled Mental Maths drill. */
const SUBJECT_GAMES: FunGameDef[] = [
  createWordPopGame({
    id: 'word_pop',
    title: '🔤 Word Pop',
    description: 'Find the missing letter of the picture word!',
  }),
  createQuickMathGame({
    id: 'quick_math',
    title: '➕ Quick Maths',
    description: 'Solve sums up to 20 as fast as you can!',
  }),
  createHindiAksharGame({
    id: 'hindi_akshar',
    title: '🪔 अक्षर खेल',
    description: 'हिन्दी अक्षर से शब्द मिलाओ!',
  }),
  createAnimalHomesGame({
    id: 'animal_homes',
    title: '🏡 Animal Homes',
    description: 'Match every animal to its home!',
  }),
  createShapeDetectiveGame({
    id: 'shape_detective',
    title: '🔷 Shape Detective',
    description: 'Spot the shapes hiding in everyday things!',
  }),
  createMentalMathsGame({
    id: 'mental_maths',
    title: '🧮 Mental Maths',
    description: 'Workbook-style worksheets: solve sums in your head!',
  }),
];

let cache: FunGameDef[] | null = null;

/** All 17 games: the 11 v1 arcade games plus the 6 subject games. */
export function getAllGames(): FunGameDef[] {
  if (!cache) {
    const byId = new Map(FUN_GAMES.modules.map((m) => [m.id, gameDefFromModule(m)]));
    const fromContent = (id: string): FunGameDef => {
      const def = byId.get(id);
      if (!def) throw new Error(`fun game module missing from content: ${id}`);
      return def;
    };
    cache = [
      BALLOON_QUIZ,
      fromContent('memory_match'),
      COLOR_TAP,
      fromContent('snake_game'),
      fromContent('catch_game'),
      fromContent('balloon_pop'),
      fromContent('number_jump'),
      fromContent('color_match_fast'),
      fromContent('maze_runner'),
      fromContent('bubble_blast'),
      fromContent('snap_game'),
      ...SUBJECT_GAMES,
    ];
  }
  return cache;
}

export function getGameById(id: string): FunGameDef | undefined {
  return getAllGames().find((game) => game.id === id);
}
