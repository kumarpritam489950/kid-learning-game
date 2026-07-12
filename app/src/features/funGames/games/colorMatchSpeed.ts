import { pickRandom, shuffle } from '../../../services/rng';
import { Disposer } from '../disposer';
import type { FunGameDef, GameContext } from '../types';
import { playFeedbackTone } from './audio';

const COLORS = [
  { name: 'Red', hex: '#f44336' },
  { name: 'Blue', hex: '#2196F3' },
  { name: 'Green', hex: '#4CAF50' },
  { name: 'Yellow', hex: '#FFC107' },
];
const ROUND_DELAY_MS = 500;

/** Timed Stroop color matching (ported from v1 startColorMatchSpeed). */
export function createColorMatchSpeedGame(
  def: { id: string; title: string; description: string },
  durationSeconds: number,
): FunGameDef {
  return {
    ...def,
    mount(host: HTMLElement, ctx: GameContext) {
      const d = new Disposer();

      const word = document.createElement('div');
      word.className = 'color-word';
      host.appendChild(word);

      const buttons = document.createElement('div');
      buttons.className = 'color-btn-row';
      host.appendChild(buttons);

      let score = 0;
      let timeLeft = durationSeconds;
      let current = COLORS[0]!;
      let running = true;

      ctx.onScore(`Score: ${score}`);
      ctx.onInfo(`Time: ${timeLeft}s`);
      ctx.onPrompt('Tap the button that matches the WORD, not its color!');

      const nextRound = () => {
        if (!running || d.isDisposed) return;
        current = pickRandom(ctx.rng, COLORS);
        const wrongColor = pickRandom(
          ctx.rng,
          COLORS.filter((c) => c.name !== current.name),
        );

        word.textContent = current.name;
        word.style.color = wrongColor.hex; // Stroop effect!

        buttons.replaceChildren();
        for (const color of shuffle(ctx.rng, COLORS)) {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'color-btn';
          btn.textContent = color.name;
          btn.style.background = color.hex;
          d.listen(btn, 'click', () => {
            if (!running) return;
            if (color.name === current.name) {
              score += 5;
              ctx.onFeedback('✓ Correct!', 'good');
              playFeedbackTone(true);
            } else {
              ctx.onFeedback('✗ Wrong!', 'try');
              playFeedbackTone(false);
            }
            ctx.onScore(`Score: ${score}`);
            d.timeout(nextRound, ROUND_DELAY_MS);
          });
          buttons.appendChild(btn);
        }
      };

      const countdown = d.interval(() => {
        timeLeft -= 1;
        ctx.onInfo(`Time: ${timeLeft}s`);
        if (timeLeft <= 0 && running) {
          running = false;
          d.clearInterval(countdown);
          word.textContent = 'Game Over!';
          word.style.color = '';
          buttons.replaceChildren();
          ctx.onFeedback(`Final Score: ${score} 🌈`, 'good');
          ctx.onGameOver(score);
        }
      }, 1000);

      nextRound();

      return { destroy: () => d.disposeAll() };
    },
  };
}
