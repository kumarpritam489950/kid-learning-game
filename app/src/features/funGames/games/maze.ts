import { Disposer } from '../disposer';
import type { FunGameDef, GameContext } from '../types';

const CELL = 40;
const GRID = 10;
const SIZE = CELL * GRID;

/** Maze runner (ported from v1 startMazeGame) + on-screen d-pad for touch. */
export function createMazeGame(def: {
  id: string;
  title: string;
  description: string;
}): FunGameDef {
  return {
    ...def,
    mount(host: HTMLElement, ctx: GameContext) {
      const d = new Disposer();

      const canvas = document.createElement('canvas');
      canvas.width = SIZE;
      canvas.height = SIZE;
      canvas.className = 'game-canvas';
      host.appendChild(canvas);

      const dpad = document.createElement('div');
      dpad.className = 'dpad';
      host.appendChild(dpad);

      const g = canvas.getContext('2d');
      let player = { x: 0, y: 0 };
      const goal = { x: 9, y: 9 };
      let walls: { x: number; y: number }[] = [];
      let startTime = Date.now();
      let level = 1;

      ctx.onScore(`Level: ${level}`);
      ctx.onPrompt('Reach the star ⭐');

      const generateMaze = () => {
        walls = [];
        for (let i = 0; i < 30; i += 1) {
          walls.push({
            x: Math.floor(ctx.rng() * GRID),
            y: Math.floor(ctx.rng() * GRID),
          });
        }
        walls = walls.filter(
          (w) => !(w.x === 0 && w.y === 0) && !(w.x === goal.x && w.y === goal.y),
        );
      };

      const draw = () => {
        if (!g) return;
        g.fillStyle = '#fff';
        g.fillRect(0, 0, SIZE, SIZE);

        g.strokeStyle = '#ddd';
        for (let i = 0; i <= GRID; i += 1) {
          g.beginPath();
          g.moveTo(i * CELL, 0);
          g.lineTo(i * CELL, SIZE);
          g.stroke();
          g.beginPath();
          g.moveTo(0, i * CELL);
          g.lineTo(SIZE, i * CELL);
          g.stroke();
        }

        g.fillStyle = '#333';
        for (const w of walls) g.fillRect(w.x * CELL, w.y * CELL, CELL, CELL);

        g.font = '30px Arial';
        g.textAlign = 'left';
        g.textBaseline = 'alphabetic';
        g.fillText('⭐', goal.x * CELL + 5, goal.y * CELL + 30);

        g.fillStyle = '#4CAF50';
        g.beginPath();
        g.arc(player.x * CELL + CELL / 2, player.y * CELL + CELL / 2, CELL / 3, 0, Math.PI * 2);
        g.fill();

        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        ctx.onInfo(`Time: ${elapsed}s`);
      };

      const movePlayer = (dx: number, dy: number) => {
        const newX = player.x + dx;
        const newY = player.y + dy;
        if (newX < 0 || newX >= GRID || newY < 0 || newY >= GRID) return;
        if (walls.some((w) => w.x === newX && w.y === newY)) return;

        player = { x: newX, y: newY };
        draw();

        if (player.x === goal.x && player.y === goal.y) {
          const elapsed = Math.floor((Date.now() - startTime) / 1000);
          ctx.onFeedback(`Level ${level} complete in ${elapsed}s! 🎉`, 'good');
          level += 1;
          ctx.onScore(`Level: ${level}`);
          d.timeout(() => {
            player = { x: 0, y: 0 };
            startTime = Date.now();
            generateMaze();
            draw();
            ctx.onFeedback('', 'neutral');
          }, 2000);
        }
      };

      for (const [label, dx, dy, aria] of [
        ['⬆️', 0, -1, 'Up'],
        ['⬅️', -1, 0, 'Left'],
        ['➡️', 1, 0, 'Right'],
        ['⬇️', 0, 1, 'Down'],
      ] as const) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `dpad-btn dpad-${aria.toLowerCase()}`;
        btn.textContent = label;
        btn.setAttribute('aria-label', `Move ${aria}`);
        d.listen(btn, 'click', () => movePlayer(dx, dy));
        dpad.appendChild(btn);
      }

      d.listen(document, 'keydown', (e) => {
        const key = (e as KeyboardEvent).key;
        if (key === 'ArrowUp') movePlayer(0, -1);
        else if (key === 'ArrowDown') movePlayer(0, 1);
        else if (key === 'ArrowLeft') movePlayer(-1, 0);
        else if (key === 'ArrowRight') movePlayer(1, 0);
        else return;
        e.preventDefault();
      });

      generateMaze();
      draw();

      return { destroy: () => d.disposeAll() };
    },
  };
}
