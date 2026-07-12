import type { LessonModule } from '../../../../content/schema';
import type { Rng } from '../../../../services/rng';
import { shuffle } from '../../../../services/rng';
import type { Question } from '../types';
import { makeQuestionId, numberOptions } from './support';

type CountingModule = Extract<LessonModule, { type: 'counting' }>;
type ArithmeticModule = Extract<LessonModule, { type: 'arithmetic' }>;
type ShapeModule = Extract<LessonModule, { type: 'shape' }>;

export function generateCountingBank(module: CountingModule, rng: Rng): Question[] {
  const prompts = [
    'Count the objects and choose the number.',
    'How many objects do you see?',
    'Tap the correct count.',
  ];
  const bank: Question[] = [];
  prompts.forEach((prompt, pi) => {
    module.items.forEach((item, ii) => {
      for (let count = 1; count <= 20; count += 1) {
        bank.push({
          id: makeQuestionId(module.id, pi, ii, count),
          kind: 'mcq',
          prompt,
          visual: Array.from({ length: count }, () => item).join(' '),
          answer: String(count),
          options: numberOptions(rng, count, 20),
        });
      }
    });
  });
  return bank;
}

export function generateArithmeticBank(module: ArithmeticModule, rng: Rng): Question[] {
  const bank: Question[] = [];
  const symbol = module.operation === 'add' ? '+' : '-';
  const prompts =
    module.operation === 'add'
      ? ['Add the groups.', 'How much in total?', 'Count and add together.']
      : ['Subtract the second group.', 'How many are left?', 'Take away and count.'];

  prompts.forEach((prompt, pi) => {
    for (let a = module.minValue; a <= module.maxValue; a += 1) {
      for (let b = module.minValue; b <= module.maxValue; b += 1) {
        if (module.operation === 'add' && a + b > module.maxAnswer) continue;
        if (module.operation === 'subtract' && b > a) continue;
        const answer = module.operation === 'add' ? a + b : a - b;
        const item = module.visualItems[pi % module.visualItems.length]!;
        const visualA = Array.from({ length: a }, () => item).join(' ');
        const visualB = Array.from({ length: b }, () => item).join(' ');
        bank.push({
          id: makeQuestionId(module.id, pi, a, b),
          kind: 'mcq',
          prompt,
          visual: `${visualA || '0'}  ${symbol}  ${visualB || '0'}`,
          equation: `${a} ${symbol} ${b} = ?`,
          answer: String(answer),
          options: numberOptions(rng, answer, module.maxAnswer),
        });
      }
    }
  });
  return bank;
}

export function generateShapeBank(module: ShapeModule, rng: Rng): Question[] {
  const prompts = [
    'What is this shape?',
    'Find the correct shape name.',
    'Identify this shape.',
    'Which shape is shown?',
  ];
  const shapeNames = module.shapes.map((s) => s.name);
  const bank: Question[] = [];
  prompts.forEach((prompt, pi) => {
    module.shapes.forEach((shape, si) => {
      for (let repeat = 1; repeat <= 6; repeat += 1) {
        bank.push({
          id: makeQuestionId(module.id, pi, si, repeat),
          kind: 'mcq',
          prompt,
          visual: Array.from({ length: repeat }, () => shape.symbol).join(' '),
          answer: shape.name,
          options: shuffle(rng, [...shapeNames]),
        });
      }
    });
  });
  return bank;
}
