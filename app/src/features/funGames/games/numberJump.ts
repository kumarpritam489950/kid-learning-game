import { Disposer } from '../disposer';
import type { FunGameDef, GameContext } from '../types';
import { playFeedbackTone } from './audio';

const WIDTH = 400;
const HEIGHT = 400;

interface Platform {
  x: number;
  y: number;
  width: number;
  height: number;
  number: number;
}

/** Tap the platform with the target number (ported from v1 startNumberJumpGame). */
export function createNumberJumpGame(def: {
  id: string;
  title: string;
  description: string;
}): FunGameDef {
  return {
    ...def,
    mount(host: HTMLElement, ctx: GameContext) {
      const d = new Disposer();

      const canvas = document.createElement('canvas');
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
      canvas.className = 'game-canvas';
      host.appendChild(canvas);

      const g = canvas.getContext('2d');
      let score = 0;
      let targetNum = Math.floor(ctx.rng() * 10) + 1;
      let platforms: Platform[] = [];

      ctx.onScore(`Score: ${score}`);

      const makePlatforms = () => {
        platforms = [];
        for (let i = 0; i < 8; i += 1) {
          platforms.push({
            x: (i % 4) * 100,
            y: Math.floor(i / 4) * 200 + 50,
            width: 90,
            height: 40,
            number: Math.floor(ctx.rng() * 10) + 1,
          });
        }
        platforms[Math.floor(ctx.rng() * platforms.length)]!.number = targetNum;
      };

      const draw = () => {
        if (!g) return;
        g.fillStyle = '#FFE4B5';
        g.fillRect(0, 0, WIDTH, HEIGHT);
        for (const p of platforms) {
          g.fillStyle = p.number === targetNum ? '#4CAF50' : '#2196F3';
          g.fillRect(p.x, p.y, p.width, p.height);
          g.fillStyle = '#fff';
          g.font = 'bold 24px Arial';
          g.textAlign = 'center';
          g.textBaseline = 'middle';
          g.fillText(String(p.number), p.x + p.width / 2, p.y + p.height / 2);
        }
      };

      const newTarget = () => {
        targetNum = Math.floor(ctx.rng() * 10) + 1;
        ctx.onPrompt(`Jump on: ${targetNum}`);
        makePlatforms();
        draw();
      };

      d.listen(canvas, 'click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const scale = canvas.width / rect.width;
        const x = ((e as MouseEvent).clientX - rect.left) * scale;
        const y = ((e as MouseEvent).clientY - rect.top) * scale;

        for (const p of platforms) {
          if (x >= p.x && x <= p.x + p.width && y >= p.y && y <= p.y + p.height) {
            if (p.number === targetNum) {
              score += 10;
              ctx.onFeedback('✓ Correct! Great jump!', 'good');
              playFeedbackTone(true);
              newTarget();
            } else {
              ctx.onFeedback('✗ Wrong number! Try again!', 'try');
              playFeedbackTone(false);
            }
            ctx.onScore(`Score: ${score}`);
          }
        }
      });

      ctx.onPrompt(`Jump on: ${targetNum}`);
      makePlatforms();
      draw();

      return { destroy: () => d.disposeAll() };
    },
  };
}
