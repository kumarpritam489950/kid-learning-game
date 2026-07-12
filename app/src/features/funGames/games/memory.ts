import { APP_META } from '../../../content';
import { pickRandom, shuffle } from '../../../services/rng';
import { Disposer } from '../disposer';
import type { FunGameDef, GameContext } from '../types';
import { playFeedbackTone } from './audio';

const PAIRS = 6;
const FLIP_BACK_MS = 800;

/** Find matching pairs (ported from v1 startMemoryGame). */
export function createMemoryGame(
  def: { id: string; title: string; description: string },
  emojiPool: readonly string[],
): FunGameDef {
  return {
    ...def,
    mount(host: HTMLElement, ctx: GameContext) {
      const d = new Disposer();

      const grid = document.createElement('div');
      grid.className = 'memory-grid';
      host.appendChild(grid);

      const chosen = shuffle(ctx.rng, [...emojiPool]).slice(0, PAIRS);
      const cards = shuffle(ctx.rng, [...chosen, ...chosen]);
      let flipped: number[] = [];
      const matched = new Set<number>();
      let moves = 0;
      let pairs = 0;
      let busy = false;

      ctx.onScore(`Moves: ${moves}`);
      ctx.onInfo(`Pairs: ${pairs} / ${PAIRS}`);
      ctx.onPrompt('Find the matching pairs!');

      const cardEls: HTMLButtonElement[] = cards.map((emoji, i) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'memory-card';
        card.textContent = '?';
        card.setAttribute('aria-label', `Card ${i + 1}`);
        d.listen(card, 'click', () => flip(i, emoji, card));
        grid.appendChild(card);
        return card;
      });

      const finish = () => {
        const trophy = moves <= PAIRS * 2 ? '🏆🎉' : moves <= PAIRS * 3 ? '😊⭐' : '💪🃏';
        ctx.onFeedback(`All ${PAIRS} pairs found in ${moves} moves! ${trophy}`, 'good');
        grid.innerHTML = `<div class="balloon-trophy">${trophy}</div>`;
        // Lower moves = better; report pairs*10 as a friendly score.
        ctx.onGameOver(PAIRS * 10);
      };

      const flip = (index: number, emoji: string, card: HTMLButtonElement) => {
        if (busy || matched.has(index) || flipped.includes(index)) return;

        card.textContent = emoji;
        card.classList.add('flipped');
        flipped.push(index);

        if (flipped.length === 2) {
          moves += 1;
          busy = true;
          ctx.onScore(`Moves: ${moves}`);

          const [a, b] = flipped as [number, number];
          if (cards[a] === cards[b]) {
            matched.add(a);
            matched.add(b);
            pairs += 1;
            ctx.onInfo(`Pairs: ${pairs} / ${PAIRS}`);
            ctx.onFeedback(pickRandom(ctx.rng, APP_META.praiseMessages), 'good');
            playFeedbackTone(true);
            cardEls[a]!.classList.add('matched');
            cardEls[b]!.classList.add('matched');
            cardEls[a]!.disabled = true;
            cardEls[b]!.disabled = true;
            flipped = [];
            busy = false;
            if (pairs === PAIRS) d.timeout(finish, FLIP_BACK_MS);
          } else {
            playFeedbackTone(false);
            d.timeout(() => {
              for (const i of [a, b]) {
                cardEls[i]!.textContent = '?';
                cardEls[i]!.classList.remove('flipped');
              }
              flipped = [];
              busy = false;
            }, FLIP_BACK_MS);
          }
        }
      };

      return { destroy: () => d.disposeAll() };
    },
  };
}
