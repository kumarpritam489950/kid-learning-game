import { APP_META } from '../../../content';
import type { Rng } from '../../../services/rng';
import { pickRandom, randomInt, shuffle } from '../../../services/rng';
import { Disposer } from '../disposer';
import type { FunGameDef, GameContext } from '../types';
import { playFeedbackTone } from './audio';

const ROUNDS = 10;
const NEXT_ROUND_DELAY_MS = 1600;
const POINTS_PER_ROUND = 10;

interface WsChoice {
  label: string;
  correct: boolean;
}

/**
 * One worksheet round. `build` renders the exercise into the page body and
 * returns a fill function that writes the correct answer into the empty
 * box(es) once the child has tapped a choice.
 */
interface WsRound {
  chapter: string;
  instruction: string;
  sideLabel: string;
  build(body: HTMLElement): (ok: boolean) => void;
  choices: WsChoice[];
  answerLabel: string;
  speak: string;
}

function el(tag: string, className: string, text?: string): HTMLElement {
  const node = document.createElement(tag);
  node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

/** Empty dashed answer box; fill() writes the answer and grades it. */
function answerBox(text = ''): {
  box: HTMLElement;
  fill(answer: string, ok: boolean): void;
} {
  const box = el('span', 'ws-box ws-box--answer', text);
  return {
    box,
    fill(answer, ok) {
      box.textContent = answer;
      box.classList.add(ok ? 'ws-box--good' : 'ws-box--fixed');
      const tick = el('span', 'ws-tick', ok ? '✓' : '✗');
      box.appendChild(tick);
    },
  };
}

function numberChoices(rng: Rng, answer: number, count = 4): WsChoice[] {
  const wrong = new Set<number>();
  while (wrong.size < count - 1) {
    const delta = randomInt(rng, 1, 4) * (rng() < 0.5 ? -1 : 1);
    const candidate = answer + delta;
    if (candidate >= 0 && candidate !== answer) wrong.add(candidate);
  }
  return shuffle(rng, [
    { label: String(answer), correct: true },
    ...[...wrong].map((n) => ({ label: String(n), correct: false })),
  ]);
}

/** '+1' and '+0' strategy sums, e.g. 7 + 1 = □ (answer is the number after). */
function makePlusRound(rng: Rng): WsRound {
  const a = randomInt(rng, 1, 18);
  const b = rng() < 0.7 ? 1 : 0;
  const answer = a + b;
  const equation = el('div', 'ws-eq');
  equation.append(
    el('span', 'ws-eq-num', String(a)),
    el('span', 'ws-eq-op', '+'),
    el('span', 'ws-box ws-box--peach', String(b)),
    el('span', 'ws-eq-op', '='),
  );
  const slot = answerBox();
  equation.appendChild(slot.box);
  return {
    chapter: 'Addition up to 20',
    instruction: 'Solve mentally. Tap the number for the box.',
    sideLabel: 'ADDITION UP TO 20',
    build(body) {
      body.appendChild(equation);
      return (ok) => slot.fill(String(answer), ok);
    },
    choices: numberChoices(rng, answer),
    answerLabel: String(answer),
    speak: `${a} plus ${b} equals?`,
  };
}

/** '−1', '−0' and n−n strategy sums, e.g. 8 − 1 = □. */
function makeMinusRound(rng: Rng): WsRound {
  const a = randomInt(rng, 2, 19);
  const kind = randomInt(rng, 0, 2);
  const b = kind === 0 ? 1 : kind === 1 ? 0 : a;
  const answer = a - b;
  const equation = el('div', 'ws-eq');
  equation.append(
    el('span', 'ws-eq-num', String(a)),
    el('span', 'ws-eq-op', '−'),
    el('span', 'ws-box ws-box--blue', String(b)),
    el('span', 'ws-eq-op', '='),
  );
  const slot = answerBox();
  equation.appendChild(slot.box);
  return {
    chapter: 'Subtraction within 20',
    instruction: 'Solve mentally. Tap the number for the box.',
    sideLabel: 'SUBTRACTION WITHIN 20',
    build(body) {
      body.appendChild(equation);
      return (ok) => slot.fill(String(answer), ok);
    },
    choices: numberChoices(rng, answer),
    answerLabel: String(answer),
    speak: `${a} minus ${b} equals?`,
  };
}

/** Before / after / between strip of three boxes with one left empty. */
function makeBeforeAfterRound(rng: Rng): WsRound {
  const mode = pickRandom(rng, ['before', 'after', 'between'] as const);
  const n = randomInt(rng, 2, 47);
  const trio = [n, n + 1, n + 2];
  const missing = mode === 'before' ? 0 : mode === 'after' ? 2 : 1;
  const answer = n + missing;

  const strip = el('div', 'ws-strip');
  let slot!: ReturnType<typeof answerBox>;
  trio.forEach((value, i) => {
    if (i === missing) {
      slot = answerBox();
      strip.appendChild(slot.box);
    } else {
      strip.appendChild(
        el('span', `ws-box ${i % 2 === 0 ? 'ws-box--blue' : 'ws-box--peach'}`, String(value)),
      );
    }
  });

  return {
    chapter: 'Numbers up to 50: Before, After and Between',
    instruction: `Tap the number that comes ${mode}.`,
    sideLabel: 'NUMBERS UP TO 50',
    build(body) {
      body.appendChild(strip);
      return (ok) => slot.fill(String(answer), ok);
    },
    choices: numberChoices(rng, answer),
    answerLabel: String(answer),
    speak: `Which number comes ${mode}?`,
  };
}

/** Hen-and-eggs counting with a Tens | Ones table, numbers 11–19. */
function makeTensOnesRound(rng: Rng): WsRound {
  const ones = randomInt(rng, 1, 9);
  const answer = 10 + ones;

  const scene = el('div', 'ws-eggs');
  scene.appendChild(el('span', 'ws-hen', '🐔'));
  const group = el('span', 'ws-egg-group');
  for (let i = 0; i < 10; i++) group.appendChild(el('span', 'ws-egg', '🥚'));
  scene.appendChild(group);
  const loose = el('span', 'ws-egg-loose');
  for (let i = 0; i < ones; i++) loose.appendChild(el('span', 'ws-egg', '🥚'));
  scene.appendChild(loose);

  const table = el('div', 'ws-to');
  table.append(el('span', 'ws-to-head', 'Tens'), el('span', 'ws-to-head', 'Ones'));
  const tensCell = answerBox();
  const onesCell = answerBox();
  tensCell.box.classList.add('ws-to-cell');
  onesCell.box.classList.add('ws-to-cell');
  table.append(tensCell.box, onesCell.box);

  return {
    chapter: 'Building Numbers up to 20',
    instruction: 'Count the eggs. Tap how many in all.',
    sideLabel: 'NUMBERS UP TO 50',
    build(body) {
      body.append(scene, table);
      return (ok) => {
        tensCell.fill('1', ok);
        onesCell.fill(String(ones), ok);
      };
    },
    choices: numberChoices(rng, answer),
    answerLabel: String(answer),
    speak: 'How many eggs in all?',
  };
}

/** Compare three fruits: tap the biggest or the smallest number. */
function makeCompareRound(rng: Rng): WsRound {
  const values = new Set<number>();
  while (values.size < 3) values.add(randomInt(rng, 10, 50));
  const nums = shuffle(rng, [...values]);
  const biggest = rng() < 0.5;
  const answer = biggest ? Math.max(...nums) : Math.min(...nums);

  const row = el('div', 'ws-fruit-row');
  for (const n of nums) {
    const fruit = el('span', 'ws-fruit');
    fruit.append(el('span', 'ws-fruit-emoji', '🥭'), el('span', 'ws-fruit-num', String(n)));
    row.appendChild(fruit);
  }

  return {
    chapter: 'Comparing Numbers up to 50',
    instruction: `Tap the ${biggest ? 'biggest' : 'smallest'} number.`,
    sideLabel: 'NUMBERS UP TO 50',
    build(body) {
      body.appendChild(row);
      return () => {};
    },
    choices: nums.map((n) => ({ label: String(n), correct: n === answer })),
    answerLabel: String(answer),
    speak: `Tap the ${biggest ? 'biggest' : 'smallest'} number.`,
  };
}

/** Column addition of a 2-digit number and full tens, no carrying. */
function makeAddTensRound(rng: Rng): WsRound {
  const a = randomInt(rng, 11, 59);
  const b = randomInt(rng, 1, Math.floor((99 - a) / 10)) * 10;
  const answer = a + b;

  const column = el('div', 'ws-col');
  column.append(
    el('span', 'ws-col-op', ''),
    el('span', 'ws-col-num', String(a)),
    el('span', 'ws-col-op', '+'),
    el('span', 'ws-col-num', String(b)),
  );
  const rule = el('span', 'ws-col-rule');
  column.appendChild(rule);
  const slot = answerBox();
  slot.box.classList.add('ws-col-answer');
  column.appendChild(slot.box);

  return {
    chapter: 'Adding 2-Digit Numbers',
    instruction: 'Add. Tap the answer.',
    sideLabel: 'ADDING GREATER NUMBERS',
    build(body) {
      body.appendChild(column);
      return (ok) => slot.fill(String(answer), ok);
    },
    choices: numberChoices(rng, answer),
    answerLabel: String(answer),
    speak: `${a} plus ${b} equals?`,
  };
}

const ROUND_MAKERS = [
  makePlusRound,
  makeTensOnesRound,
  makeBeforeAfterRound,
  makeMinusRound,
  makeCompareRound,
  makeAddTensRound,
];

/**
 * CBSE Class 1 mental maths practice styled like a printed workbook page:
 * red worksheet ribbon, numbered questions, bordered answer boxes, a
 * Tens|Ones table and red teacher ticks — six exercise types in rotation.
 */
export function createMentalMathsGame(def: {
  id: string;
  title: string;
  description: string;
}): FunGameDef {
  return {
    ...def,
    mount(host: HTMLElement, ctx: GameContext) {
      const d = new Disposer();

      const area = el('div', 'quiz-area ws-game');
      host.appendChild(area);

      let round = 0;
      let score = 0;
      let answered = false;

      const finish = () => {
        const perfect = ROUNDS * POINTS_PER_ROUND;
        const pct = Math.round((score / perfect) * 100);
        const trophy = pct >= 80 ? '🏆🎉' : pct >= 50 ? '😊⭐' : '💪🌟';
        ctx.onPrompt(`Worksheet done! Score: ${score} / ${perfect}`);
        ctx.onFeedback(`You got ${pct}% — ${trophy}`, 'neutral');
        area.innerHTML = `<div class="balloon-trophy">${trophy}</div>`;
        ctx.onGameOver(score);
      };

      const renderRound = () => {
        if (d.isDisposed) return;
        round += 1;
        answered = false;

        ctx.onInfo(`Round ${round} / ${ROUNDS}`);
        ctx.onScore(`Score: ${score}`);
        ctx.onFeedback('', 'neutral');

        const makeRound = ROUND_MAKERS[(round - 1) % ROUND_MAKERS.length] ?? makePlusRound;
        const data = makeRound(ctx.rng);
        ctx.onPrompt(data.instruction);
        ctx.speak(data.speak, 'en-US');

        area.replaceChildren();

        const page = el('div', 'ws-page');
        const ribbon = el('div', 'ws-ribbon');
        ribbon.append(
          el('span', 'ws-mascot', '🐙'),
          el('span', 'ws-ribbon-band', `WORKSHEET ${round}`),
          el('span', 'ws-ribbon-tag', 'Practice & Drill'),
        );
        page.appendChild(ribbon);
        page.appendChild(el('div', 'ws-chapter', data.chapter));

        const question = el('div', 'ws-question');
        question.append(el('span', 'ws-qnum', '1'), el('span', 'ws-qtext', data.instruction));
        page.appendChild(question);

        const body = el('div', 'ws-body');
        page.appendChild(body);
        const fill = data.build(body);

        page.appendChild(el('span', 'ws-side', data.sideLabel));
        const footer = el('div', 'ws-footer');
        footer.append(
          el('span', 'ws-footer-brand', 'PlayLearn · Mental Maths'),
          el('span', 'ws-pagenum', String(round)),
        );
        page.appendChild(footer);
        area.appendChild(page);

        const buttons = el('div', 'ws-choice-row');
        area.appendChild(buttons);

        for (const choice of data.choices) {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'ws-choice';
          btn.textContent = choice.label;
          d.listen(btn, 'click', () => {
            if (answered) return;
            answered = true;

            buttons.querySelectorAll('button').forEach((b) => {
              b.disabled = true;
            });

            fill(choice.correct);
            if (choice.correct) {
              score += POINTS_PER_ROUND;
              btn.classList.add('balloon-pop');
              ctx.onFeedback(pickRandom(ctx.rng, APP_META.praiseMessages), 'good');
              playFeedbackTone(true);
            } else {
              btn.classList.add('balloon-shake');
              buttons.querySelectorAll('button').forEach((b) => {
                if (b.textContent === data.answerLabel) b.classList.add('balloon-correct');
              });
              ctx.onFeedback(
                `${pickRandom(ctx.rng, APP_META.tryMessages)} It was ${data.answerLabel}!`,
                'try',
              );
              playFeedbackTone(false);
            }

            ctx.onScore(`Score: ${score}`);
            d.timeout(round >= ROUNDS ? finish : renderRound, NEXT_ROUND_DELAY_MS);
          });
          buttons.appendChild(btn);
        }
      };

      renderRound();

      return { destroy: () => d.disposeAll() };
    },
  };
}
