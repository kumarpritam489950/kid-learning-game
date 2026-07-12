import { APP_META } from '../../../content';
import { pickRandom, shuffle } from '../../../services/rng';
import { Disposer } from '../disposer';
import type { FunGameDef, GameContext } from '../types';
import { playFeedbackTone } from './audio';

const COLOR_POOL = [
  { name: 'Red', hex: '#ff4444' },
  { name: 'Blue', hex: '#4488ff' },
  { name: 'Green', hex: '#44bb44' },
  { name: 'Yellow', hex: '#ffcc00' },
  { name: 'Orange', hex: '#ff8833' },
  { name: 'Purple', hex: '#aa44ff' },
  { name: 'Pink', hex: '#ff66aa' },
  { name: 'Brown', hex: '#8B4513' },
];
const TOTAL_ROUNDS = 10;
const NEXT_ROUND_DELAY_MS = 1500;

/** Stroop-style color tap, 10 rounds (ported from v1 startColorGame). */
export function createColorTapGame(def: {
  id: string;
  title: string;
  description: string;
}): FunGameDef {
  return {
    ...def,
    mount(host: HTMLElement, ctx: GameContext) {
      const d = new Disposer();

      const area = document.createElement('div');
      area.className = 'color-btn-area';
      host.appendChild(area);

      let round = 0;
      let score = 0;
      let answered = false;

      const finish = () => {
        const perfect = TOTAL_ROUNDS * 10;
        const pct = Math.round((score / perfect) * 100);
        const trophy = pct >= 80 ? '🏆🎉' : pct >= 50 ? '😊⭐' : '💪🎨';
        ctx.onPrompt(`Game over! Score: ${score} / ${perfect}`);
        ctx.onFeedback(`You got ${pct}% — ${trophy}`, 'neutral');
        area.innerHTML = `<div class="balloon-trophy">${trophy}</div>`;
        ctx.onGameOver(score);
      };

      const renderRound = () => {
        if (d.isDisposed) return;
        round += 1;
        answered = false;

        ctx.onInfo(`Round ${round} / ${TOTAL_ROUNDS}`);
        ctx.onScore(`Score: ${score}`);
        ctx.onFeedback('', 'neutral');

        const chosen = shuffle(ctx.rng, COLOR_POOL).slice(0, 4);
        const target = pickRandom(ctx.rng, chosen);

        // Show the word in a DIFFERENT color (Stroop-like, v1 behaviour).
        const wrongColors = chosen.filter((c) => c.name !== target.name);
        const displayColor =
          wrongColors.length > 0 ? pickRandom(ctx.rng, wrongColors).hex : target.hex;
        ctx.onPrompt(`Tap the ${target.name} button!`);
        ctx.speak(`Tap the ${target.name} button`, 'en-US');

        area.replaceChildren();
        const word = document.createElement('div');
        word.className = 'color-word';
        word.textContent = target.name;
        word.style.color = displayColor;
        area.appendChild(word);

        const buttons = document.createElement('div');
        buttons.className = 'color-btn-row';
        area.appendChild(buttons);

        for (const color of chosen) {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'color-btn';
          btn.style.background = color.hex;
          btn.textContent = color.name;
          d.listen(btn, 'click', () => {
            if (answered) return;
            answered = true;

            const isCorrect = color.name === target.name;
            buttons.querySelectorAll('button').forEach((b) => {
              b.disabled = true;
            });

            if (isCorrect) {
              score += 10;
              btn.classList.add('balloon-pop');
              ctx.onFeedback(pickRandom(ctx.rng, APP_META.praiseMessages), 'good');
              playFeedbackTone(true);
            } else {
              btn.classList.add('balloon-shake');
              buttons.querySelectorAll('button').forEach((b) => {
                if (b.textContent === target.name) b.classList.add('balloon-correct');
              });
              ctx.onFeedback(
                `${pickRandom(ctx.rng, APP_META.tryMessages)} It was ${target.name}!`,
                'try',
              );
              playFeedbackTone(false);
            }

            ctx.onScore(`Score: ${score}`);
            d.timeout(round >= TOTAL_ROUNDS ? finish : renderRound, NEXT_ROUND_DELAY_MS);
          });
          buttons.appendChild(btn);
        }
      };

      renderRound();

      return { destroy: () => d.disposeAll() };
    },
  };
}
