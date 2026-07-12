import { APP_META } from '../../../content';
import { pickRandom } from '../../../services/rng';
import { Disposer } from '../disposer';
import type { FunGameDef, GameContext } from '../types';
import { playFeedbackTone } from './audio';

const MATCH_CHANCE = 0.3;
const SNAP_WINDOW_MS = 2000;
const NO_MATCH_ADVANCE_MS = 1500;
const AFTER_SNAP_MS = 1000;
const BETWEEN_ROUNDS_MS = 800;

/** Click SNAP when the two cards match (ported from v1 startSnapGame). */
export function createSnapGame(
  def: { id: string; title: string; description: string },
  cardTypes: readonly string[],
  totalRounds: number,
): FunGameDef {
  return {
    ...def,
    mount(host: HTMLElement, ctx: GameContext) {
      const d = new Disposer();

      const cardsRow = document.createElement('div');
      cardsRow.className = 'snap-cards';
      const card1 = document.createElement('div');
      const card2 = document.createElement('div');
      card1.className = 'snap-card';
      card2.className = 'snap-card';
      cardsRow.append(card1, card2);
      host.appendChild(cardsRow);

      const snapBtn = document.createElement('button');
      snapBtn.type = 'button';
      snapBtn.className = 'snap-btn';
      snapBtn.textContent = '⚡ SNAP! ⚡';
      snapBtn.style.visibility = 'hidden';
      host.appendChild(snapBtn);

      let score = 0;
      let round = 1;
      let snapEnabled = false;
      let snapTimer: ReturnType<typeof setTimeout> | null = null;

      const updateScore = () => {
        ctx.onScore(`Score: ${score}`);
        ctx.onInfo(`Round: ${round}/${totalRounds}`);
      };

      const endGame = () => {
        snapBtn.style.visibility = 'hidden';
        card1.textContent = '🏆';
        card2.textContent = '🎉';
        ctx.onPrompt('Game Complete!');
        ctx.onFeedback(
          `Final Score: ${score} points! ${score >= 200 ? '🏆 Amazing!' : score >= 100 ? '⭐ Great job!' : '💪 Keep practicing!'}`,
          'good',
        );
        ctx.onGameOver(score);
      };

      const nextRound = () => {
        if (snapTimer) {
          d.clearTimeout(snapTimer);
          snapTimer = null;
        }
        ctx.onFeedback('', 'neutral');
        round += 1;
        if (round > totalRounds) {
          endGame();
        } else {
          updateScore();
          d.timeout(showCards, BETWEEN_ROUNDS_MS);
        }
      };

      const showCards = () => {
        if (d.isDisposed) return;
        let c1 = pickRandom(ctx.rng, cardTypes);
        let c2 = pickRandom(ctx.rng, cardTypes);
        let matching = false;

        if (ctx.rng() < MATCH_CHANCE) {
          c2 = c1;
          matching = true;
        } else {
          while (c2 === c1) c2 = pickRandom(ctx.rng, cardTypes);
        }

        card1.textContent = c1;
        card2.textContent = c2;
        card1.classList.toggle('match', matching);
        card2.classList.toggle('match', matching);

        if (matching) {
          snapBtn.style.visibility = 'visible';
          snapEnabled = true;
          ctx.onPrompt('⚡ They match! Click SNAP! ⚡');
          snapTimer = d.timeout(() => {
            if (snapEnabled) {
              ctx.onFeedback('⏰ Too slow! You missed it!', 'try');
              score = Math.max(0, score - 5);
              updateScore();
              nextRound();
            }
          }, SNAP_WINDOW_MS);
        } else {
          snapBtn.style.visibility = 'hidden';
          snapEnabled = false;
          ctx.onPrompt('Watch the cards...');
          d.timeout(nextRound, NO_MATCH_ADVANCE_MS);
        }
      };

      d.listen(snapBtn, 'click', () => {
        if (!snapEnabled) {
          ctx.onFeedback("❌ Wrong! Cards don't match!", 'try');
          score = Math.max(0, score - 10);
          playFeedbackTone(false);
          updateScore();
          return;
        }
        if (snapTimer) {
          d.clearTimeout(snapTimer);
          snapTimer = null;
        }
        snapEnabled = false;
        score += 20;
        ctx.onFeedback(`✓ Perfect SNAP! ${pickRandom(ctx.rng, APP_META.praiseMessages)}`, 'good');
        playFeedbackTone(true);
        updateScore();
        d.timeout(nextRound, AFTER_SNAP_MS);
      });

      updateScore();
      showCards();

      return { destroy: () => d.disposeAll() };
    },
  };
}
