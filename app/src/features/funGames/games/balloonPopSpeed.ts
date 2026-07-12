import { Disposer } from '../disposer';
import type { FunGameDef, GameContext } from '../types';

const COLORS = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff922b', '#cc5de8'];
const SPAWN_MS = 500;
const BALLOON_LIFE_MS = 2000;

/** Pop as many balloons as you can (ported from v1 funGames.balloonPopSpeed). */
export function createBalloonPopSpeedGame(
  def: { id: string; title: string; description: string },
  durationSeconds: number,
): FunGameDef {
  return {
    ...def,
    mount(host: HTMLElement, ctx: GameContext) {
      const d = new Disposer();

      const area = document.createElement('div');
      area.className = 'balloon-pop-area';
      host.appendChild(area);

      let score = 0;
      let timeLeft = durationSeconds;
      let running = true;

      ctx.onScore(`Score: ${score}`);
      ctx.onInfo(`Time: ${timeLeft}s`);
      ctx.onPrompt('Pop the balloons — fast! 🎈');

      const spawnBalloon = () => {
        if (!running) return;
        const balloon = document.createElement('button');
        balloon.type = 'button';
        balloon.className = 'speed-balloon';
        balloon.textContent = '🎈';
        balloon.setAttribute('aria-label', 'Balloon');
        balloon.style.left = `${ctx.rng() * 80}%`;
        balloon.style.top = `${ctx.rng() * 80}%`;
        balloon.style.color = COLORS[Math.floor(ctx.rng() * COLORS.length)]!;
        balloon.style.fontSize = `${20 + ctx.rng() * 30}px`;

        d.listen(balloon, 'click', () => {
          if (!running) return;
          score += 5;
          ctx.onScore(`Score: ${score}`);
          balloon.remove();
        });

        area.appendChild(balloon);
        d.timeout(() => balloon.remove(), BALLOON_LIFE_MS);
      };

      const spawner = d.interval(spawnBalloon, SPAWN_MS);
      const countdown = d.interval(() => {
        timeLeft -= 1;
        ctx.onInfo(`Time: ${timeLeft}s`);
        if (timeLeft <= 0 && running) {
          running = false;
          d.clearInterval(spawner);
          d.clearInterval(countdown);
          area.replaceChildren();
          ctx.onFeedback(`Game Over! Final Score: ${score} 🎈`, 'good');
          ctx.onGameOver(score);
        }
      }, 1000);

      return { destroy: () => d.disposeAll() };
    },
  };
}
