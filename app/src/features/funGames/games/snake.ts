import { Disposer } from '../disposer';
import type { FunGameDef, GameContext } from '../types';

const GRID = 20;
const SIZE = 400;
const SPEED_MS = 120;

/** Classic snake (ported from v1 funGames.snake) + on-screen d-pad for touch. */
export function createSnakeGame(def: {
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
      const cells = SIZE / GRID;

      let snake = [
        { x: 5, y: 5 },
        { x: 4, y: 5 },
        { x: 3, y: 5 },
      ];
      let direction = { x: 1, y: 0 };
      let nextDirection = { x: 1, y: 0 };
      let food = { x: 0, y: 0 };
      let score = 0;
      let running = true;

      ctx.onScore(`Score: ${score}`);
      ctx.onInfo('');
      ctx.onPrompt('Eat apples 🍎 — don’t hit the walls or yourself!');

      const setDirection = (x: number, y: number) => {
        if (!running) return;
        if (x !== 0 && direction.x === 0) nextDirection = { x, y: 0 };
        if (y !== 0 && direction.y === 0) nextDirection = { x: 0, y };
      };

      for (const [label, x, y, aria] of [
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
        d.listen(btn, 'click', () => setDirection(x, y));
        dpad.appendChild(btn);
      }

      d.listen(document, 'keydown', (e) => {
        const key = (e as KeyboardEvent).key;
        if (key === 'ArrowUp') setDirection(0, -1);
        else if (key === 'ArrowDown') setDirection(0, 1);
        else if (key === 'ArrowLeft') setDirection(-1, 0);
        else if (key === 'ArrowRight') setDirection(1, 0);
        else return;
        e.preventDefault();
      });

      const spawnFood = () => {
        do {
          food = {
            x: Math.floor(ctx.rng() * cells),
            y: Math.floor(ctx.rng() * cells),
          };
        } while (snake.some((s) => s.x === food.x && s.y === food.y));
      };

      const draw = () => {
        if (!g) return;
        g.fillStyle = '#f0f0f0';
        g.fillRect(0, 0, SIZE, SIZE);
        snake.forEach((segment, i) => {
          g.fillStyle = i === 0 ? '#2d5' : '#4d8';
          g.fillRect(segment.x * GRID + 1, segment.y * GRID + 1, GRID - 2, GRID - 2);
        });
        g.fillStyle = '#f44';
        g.beginPath();
        g.arc(food.x * GRID + GRID / 2, food.y * GRID + GRID / 2, GRID / 2 - 2, 0, Math.PI * 2);
        g.fill();
      };

      const gameOver = () => {
        running = false;
        d.clearInterval(loop);
        ctx.onFeedback(`Game Over! Final Score: ${score} 🐍`, 'try');
        ctx.onGameOver(score);
      };

      const update = () => {
        direction = nextDirection;
        const head = { x: snake[0]!.x + direction.x, y: snake[0]!.y + direction.y };

        if (head.x < 0 || head.x >= cells || head.y < 0 || head.y >= cells) {
          gameOver();
          return;
        }
        if (snake.some((s) => s.x === head.x && s.y === head.y)) {
          gameOver();
          return;
        }

        snake = [head, ...snake];
        if (head.x === food.x && head.y === food.y) {
          score += 10;
          ctx.onScore(`Score: ${score}`);
          spawnFood();
        } else {
          snake.pop();
        }
      };

      spawnFood();
      draw();
      const loop = d.interval(() => {
        update();
        if (running) draw();
      }, SPEED_MS);

      return { destroy: () => d.disposeAll() };
    },
  };
}
