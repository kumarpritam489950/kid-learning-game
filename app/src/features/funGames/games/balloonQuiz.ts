import { APP_META } from '../../../content';
import { pickRandom, randomInt, shuffle } from '../../../services/rng';
import { Disposer } from '../disposer';
import type { FunGameDef, GameContext } from '../types';
import { playFeedbackTone } from './audio';

const BALLOON_COLORS = [
  '#ff6b6b',
  '#ffd93d',
  '#6bcb77',
  '#4d96ff',
  '#ff922b',
  '#cc5de8',
  '#f06595',
  '#74c0fc',
];
const TOTAL_ROUNDS = 10;
const NEXT_ROUND_DELAY_MS = 1500;

/** Pop the balloon with the asked number (ported from v1 startBalloonGame). */
export function createBalloonQuizGame(def: {
  id: string;
  title: string;
  description: string;
}): FunGameDef {
  return {
    ...def,
    mount(host: HTMLElement, ctx: GameContext) {
      const d = new Disposer();

      const area = document.createElement('div');
      area.className = 'balloon-area';
      host.appendChild(area);

      let round = 0;
      let score = 0;
      let target = 0;
      let answered = false;

      const finish = () => {
        const perfect = TOTAL_ROUNDS * 10;
        const pct = Math.round((score / perfect) * 100);
        const trophy = pct >= 80 ? '🏆🎉' : pct >= 50 ? '😊⭐' : '💪🎈';
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

        const numSet = new Set<number>();
        while (numSet.size < 6) numSet.add(randomInt(ctx.rng, 1, 20));
        const nums = [...numSet];
        target = pickRandom(ctx.rng, nums);

        ctx.onPrompt(`🎈 Pop the balloon with number ${target}!`);
        ctx.speak(`Pop the balloon with number ${target}`, 'en-US');

        area.replaceChildren();
        const colors = shuffle(ctx.rng, BALLOON_COLORS);
        nums.forEach((num, i) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'balloon';
          btn.style.background = colors[i % colors.length]!;
          btn.textContent = String(num);
          btn.setAttribute('aria-label', `Balloon ${num}`);
          d.listen(btn, 'click', () => {
            if (answered) return;
            answered = true;

            const isCorrect = num === target;
            area.querySelectorAll('button').forEach((b) => {
              b.disabled = true;
            });

            if (isCorrect) {
              score += 10;
              btn.classList.add('balloon-pop');
              ctx.onFeedback(pickRandom(ctx.rng, APP_META.praiseMessages), 'good');
              playFeedbackTone(true);
            } else {
              btn.classList.add('balloon-shake');
              area.querySelectorAll('button').forEach((b) => {
                if (Number(b.textContent) === target) b.classList.add('balloon-correct');
              });
              ctx.onFeedback(
                `${pickRandom(ctx.rng, APP_META.tryMessages)} It was ${target}!`,
                'try',
              );
              playFeedbackTone(false);
            }

            ctx.onScore(`Score: ${score}`);
            d.timeout(round >= TOTAL_ROUNDS ? finish : renderRound, NEXT_ROUND_DELAY_MS);
          });
          area.appendChild(btn);
        });
      };

      renderRound();

      return { destroy: () => d.disposeAll() };
    },
  };
}
