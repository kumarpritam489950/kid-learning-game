import type { LessonModule } from '../../../../content/schema';
import type { Rng } from '../../../../services/rng';
import type { Question } from '../types';
import {
  generateMissingLetterBank,
  generatePictureWordBank,
  generateSightWordBank,
} from './english';
import {
  generateHindiBarakhadiBank,
  generateHindiLetterBank,
  generateHindiMissingMatraBank,
  generateHindiPictureWordBank,
} from './hindi';
import {
  generateKannadaDragBank,
  generateKannadaLetterBank,
  generateKannadaPictureWordBank,
} from './kannada';
import { generateArithmeticBank, generateCountingBank, generateShapeBank } from './math';
import { generateHindiPoemBank, generateRhymeBank, generateScienceMcqBank } from './mcqAndRhymes';

/** Build the full question bank for a module (v1 createQuestionBank). */
export function createQuestionBank(module: LessonModule, rng: Rng): Question[] {
  switch (module.type) {
    case 'counting':
      return generateCountingBank(module, rng);
    case 'arithmetic':
      return generateArithmeticBank(module, rng);
    case 'shape':
      return generateShapeBank(module, rng);
    case 'missingLetter':
      return generateMissingLetterBank(module, rng);
    case 'pictureWord':
      return generatePictureWordBank(module, rng);
    case 'sightWord':
      return generateSightWordBank(module, rng);
    case 'kannadaLetter':
      return generateKannadaLetterBank(module, rng);
    case 'kannadaPictureWord':
      return generateKannadaPictureWordBank(module, rng);
    case 'kannadaDragWord':
      return generateKannadaDragBank(module, rng);
    case 'hindiLetter':
      return generateHindiLetterBank(module, rng);
    case 'hindiPictureWord':
      return generateHindiPictureWordBank(module, rng);
    case 'hindiMissingMatra':
      return generateHindiMissingMatraBank(module, rng);
    case 'scienceMcq':
      return generateScienceMcqBank(module, rng);
    case 'hindiBarakhadi':
      return generateHindiBarakhadiBank(module, rng);
    case 'rhymeComplete':
      return generateRhymeBank(module, rng);
    case 'hindiPoem':
      return generateHindiPoemBank(module, rng);
  }
}
