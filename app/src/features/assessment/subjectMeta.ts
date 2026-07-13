/** Display metadata for the 6 assessment bank subjects. */
export const ASSESSMENT_META: Record<
  string,
  { title: string; emoji: string; bg1: string; bg2: string; ink: string }
> = {
  mathematics: {
    title: 'Mathematics',
    emoji: '🔢',
    bg1: '#dbeafe',
    bg2: '#b5d4fd',
    ink: '#1e3a8a',
  },
  english: { title: 'English', emoji: '📖', bg1: '#ffe8d1', bg2: '#ffd1a1', ink: '#7c3a00' },
  hindi: { title: 'हिन्दी', emoji: '📙', bg1: '#ffe1e1', bg2: '#ffc4b8', ink: '#6d2020' },
  computer: { title: 'Computer', emoji: '💻', bg1: '#d9f7ec', bg2: '#b0ecd6', ink: '#065f46' },
  kannada: { title: 'ಕನ್ನಡ', emoji: '📘', bg1: '#ece4ff', bg2: '#d6c9ff', ink: '#4c2a85' },
  evs: { title: 'EVS', emoji: '🌱', bg1: '#e6f8d2', bg2: '#cdefab', ink: '#2f5e12' },
};

const FALLBACK = { title: '', emoji: '📋', bg1: '#ffe1e1', bg2: '#ffc4b8', ink: '#6d2020' };

export function assessmentMeta(subjectId: string) {
  return ASSESSMENT_META[subjectId] ?? { ...FALLBACK, title: subjectId };
}

export function assessmentTitle(subjectId: string): string {
  const meta = ASSESSMENT_META[subjectId];
  return meta ? `${meta.emoji} ${meta.title}` : subjectId;
}
