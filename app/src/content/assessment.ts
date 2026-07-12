import type { AssessmentSubject } from './schema';
import { assessmentSubjectSchema } from './schema';

let cache: AssessmentSubject[] | null = null;

/**
 * The 283-question assessment bank is loaded on demand (own chunk) so the
 * home screen and lessons never pay for it.
 */
export async function loadAssessmentBank(): Promise<AssessmentSubject[]> {
  if (!cache) {
    const modules = await Promise.all([
      import('./assessment/mathematics.json'),
      import('./assessment/english.json'),
      import('./assessment/hindi.json'),
      import('./assessment/computer.json'),
      import('./assessment/kannada.json'),
      import('./assessment/evs.json'),
    ]);
    const bank = modules.map((m) => m.default as unknown as AssessmentSubject);
    if (import.meta.env.DEV) {
      for (const subject of bank) assessmentSubjectSchema.parse(subject);
    }
    cache = bank;
  }
  return cache;
}

export async function loadAssessmentSubject(
  subjectId: string,
): Promise<AssessmentSubject | undefined> {
  const bank = await loadAssessmentBank();
  return bank.find((subject) => subject.id === subjectId);
}
