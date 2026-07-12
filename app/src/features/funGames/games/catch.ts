import { Disposer } from '../disposer';
import type { FunGameDef, GameContext } from '../types';

const WIDTH = 400;
const HEIGHT = 500;

interface FallingItem {
  x: number;
  y: number;
  speed: number;
  type: 'apple' | 'bomb';
  size: number;
}

/** Catch the apples (ported from v1 funGames.catch) + pointer/touch support. */
export function createCatchGame(
  def: { id: string; title: string; description: string },
  durationSeconds: number,
): FunGameDef {
  return {
    ...def,
    mount(host: HTMLElement, ctx: GameContext) {
      const d = new Disposer();

      const canvas = document.createElement('canvas');
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
      canvas.className = 'game-canvas game-canvas-sky';
      host.appendChild(canvas);

      const g = canvas.getContext('2d');
      const basket = { x: WIDTH / 2 - 30, width: 60, height: 20 };
      let items: FallingItem[] = [];
      let score = 0;
      let timeLeft = durationSeconds;
      let running = true;

      ctx.onScore(`Score: ${score}`);
      ctx.onInfo(`Time: ${timeLeft}s`);
      ctx.onPrompt('Catch apples 🍎 — avoid bombs 💣!');

      const moveTo = (clientX: number) => {
        const rect = canvas.getBoundingClientRect();
        const scale = canvas.width / rect.width;
        basket.x = (clientX - rect.left) * scale - basket.width / 2;
        basket.x = Math.max(0, Math.min(WIDTH - basket.width, basket.x));
      };

      // pointermove covers mouse AND touch/pen (v1 was mouse-only).
      d.listen(canvas, 'pointermove', (e) => moveTo((e as PointerEvent).clientX));
      d.listen(document, 'keydown', (e) => {
        const key = (e as KeyboardEvent).key;
        if (key === 'ArrowLeft') {
          basket.x = Math.max(0, basket.x - 20);
          e.preventDefault();
        } else if (key === 'ArrowRight') {
          basket.x = Math.min(WIDTH - basket.width, basket.x + 20);
          e.preventDefault();
        }
      });

      const spawnItem = () => {
        const isBomb = ctx.rng() < 0.15;
        items.push({
          x: ctx.rng() * (WIDTH - 30),
          y: 0,
          speed: 2 + ctx.rng() * 2,
          type: isBomb ? 'bomb' : 'apple',
          size: 25,
        });
      };

      const update = () => {
        items = items.filter((item) => {
          item.y += item.speed;
          if (
            item.y + item.size >= HEIGHT - basket.height &&
            item.x + item.size > basket.x &&
            item.x < basket.x + basket.width
          ) {
            score = item.type === 'apple' ? score + 10 : Math.max(0, score - 20);
            ctx.onScore(`Score: ${score}`);
            return false;
          }
          return item.y < HEIGHT;
        });
      };

      const draw = () => {
        if (!g) return;
        g.fillStyle = '#87CEEB';
        g.fillRect(0, 0, WIDTH, HEIGHT);
        g.fillStyle = '#8B4513';
        g.fillRect(basket.x, HEIGHT - basket.height, basket.width, basket.height);
        g.font = '25px Arial';
        for (const item of items) {
          g.fillText(item.type === 'apple' ? '🍎' : '💣', item.x, item.y);
        }
      };

      const loop = d.interval(() => {
        update();
        draw();
      }, 1000 / 60);
      const spawner = d.interval(spawnItem, 1000);
      const countdown = d.interval(() => {
        timeLeft -= 1;
        ctx.onInfo(`Time: ${timeLeft}s`);
        if (timeLeft <= 0 && running) {
          running = false;
          d.clearInterval(loop);
          d.clearInterval(spawner);
          d.clearInterval(countdown);
          ctx.onFeedback(`Time's up! Final Score: ${score} 🎯`, 'good');
          ctx.onGameOver(score);
        }
      }, 1000);

      return { destroy: () => d.disposeAll() };
    },
  };
}
