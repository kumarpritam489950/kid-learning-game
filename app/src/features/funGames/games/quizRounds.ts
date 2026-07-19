import { APP_META } from '../../../content';
import type { Rng } from '../../../services/rng';
import { pickRandom } from '../../../services/rng';
import { Disposer } from '../disposer';
import type { FunGameDef, GameContext } from '../types';
import { playFeedbackTone } from './audio';

export interface QuizChoice {
  label: string;
  correct: boolean;
}

export interface QuizRound {
  prompt: string;
  /** Big display above the choices: an emoji, a letter, or an equation. */
  visual: string;
  choices: QuizChoice[];
  speak?: { text: string; lang: string };
  /** Spoken/shown when the answer was wrong, e.g. the correct word. */
  answerLabel: string;
}

const NEXT_ROUND_DELAY_MS = 1500;
const POINTS_PER_ROUND = 10;

/**
 * Shared engine for round-based tap quizzes (same play pattern as Color
 * Tap): show a visual + prompt, tap one of the choice buttons, get
 * praise/try feedback, next round. Games supply only their round data.
 */
export function createQuizRoundsGame(
  def: { id: string; title: string; description: string },
  opts: { rounds: number; makeRound(rng: Rng, round: number): QuizRound },
): FunGameDef {
  return {
    ...def,
    mount(host: HTMLElement, ctx: GameContext) {
      const d = new Disposer();

      const area = document.createElement('div');
      area.className = 'quiz-area';
      host.appendChild(area);

      let round = 0;
      let score = 0;
      let answered = false;

      const finish = () => {
        const perfect = opts.rounds * POINTS_PER_ROUND;
        const pct = Math.round((score / perfect) * 100);
        const trophy = pct >= 80 ? '🏆🎉' : pct >= 50 ? '😊⭐' : '💪🌟';
        ctx.onPrompt(`Game over! Score: ${score} / ${perfect}`);
        ctx.onFeedback(`You got ${pct}% — ${trophy}`, 'neutral');
        area.innerHTML = `<div class="balloon-trophy">${trophy}</div>`;
        ctx.onGameOver(score);
      };

      const renderRound = () => {
        if (d.isDisposed) return;
        round += 1;
        answered = false;

        ctx.onInfo(`Round ${round} / ${opts.rounds}`);
        ctx.onScore(`Score: ${score}`);
        ctx.onFeedback('', 'neutral');

        const data = opts.makeRound(ctx.rng, round);
        ctx.onPrompt(data.prompt);
        if (data.speak) ctx.speak(data.speak.text, data.speak.lang);

        area.replaceChildren();
        const visual = document.createElement('div');
        visual.className = 'quiz-visual';
        visual.textContent = data.visual;
        area.appendChild(visual);

        const buttons = document.createElement('div');
        buttons.className = 'quiz-choice-row';
        area.appendChild(buttons);

        for (const choice of data.choices) {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'quiz-choice';
          btn.textContent = choice.label;
          d.listen(btn, 'click', () => {
            if (answered) return;
            answered = true;

            buttons.querySelectorAll('button').forEach((b) => {
              b.disabled = true;
            });

            if (choice.correct) {
              score += POINTS_PER_ROUND;
              btn.classList.add('balloon-pop');
              ctx.onFeedback(pickRandom(ctx.rng, APP_META.praiseMessages), 'good');
              playFeedbackTone(true);
            } else {
              btn.classList.add('balloon-shake');
              buttons.querySelectorAll('button').forEach((b) => {
                if (b.textContent === data.choices.find((c) => c.correct)?.label) {
                  b.classList.add('balloon-correct');
                }
              });
              ctx.onFeedback(
                `${pickRandom(ctx.rng, APP_META.tryMessages)} It was ${data.answerLabel}!`,
                'try',
              );
              playFeedbackTone(false);
            }

            ctx.onScore(`Score: ${score}`);
            d.timeout(round >= opts.rounds ? finish : renderRound, NEXT_ROUND_DELAY_MS);
          });
          buttons.appendChild(btn);
        }
      };

      renderRound();

      return { destroy: () => d.disposeAll() };
    },
  };
}
