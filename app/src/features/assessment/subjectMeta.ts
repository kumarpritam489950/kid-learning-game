/** Display metadata for the 6 assessment bank subjects. */
export const ASSESSMENT_META: Record<string, { title: string; emoji: string }> = {
  mathematics: { title: 'Mathematics', emoji: '🔢' },
  english: { title: 'English', emoji: '📖' },
  hindi: { title: 'हिन्दी', emoji: '📙' },
  computer: { title: 'Computer', emoji: '💻' },
  kannada: { title: 'ಕನ್ನಡ', emoji: '📘' },
  evs: { title: 'EVS', emoji: '🌱' },
};

export function assessmentTitle(subjectId: string): string {
  const meta = ASSESSMENT_META[subjectId];
  return meta ? `${meta.emoji} ${meta.title}` : subjectId;
}
