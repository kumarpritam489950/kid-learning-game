import { beforeEach, describe, expect, it } from 'vitest';
import { useUserStore } from './userStore';

beforeEach(() => {
  localStorage.clear();
  useUserStore.setState({ profiles: [], currentProfileId: null });
});

describe('createProfile', () => {
  it('creates, selects, and trims', () => {
    const profile = useUserStore.getState().createProfile('  Asha  ');
    expect(profile?.name).toBe('Asha');
    expect(useUserStore.getState().currentProfileId).toBe(profile?.id);
    expect(profile?.avatarEmoji).toBeTruthy();
  });

  it('returns the existing profile for a case-insensitive match (v1 semantics)', () => {
    const first = useUserStore.getState().createProfile('Asha');
    const again = useUserStore.getState().createProfile('ASHA');
    expect(again?.id).toBe(first?.id);
    expect(useUserStore.getState().profiles).toHaveLength(1);
  });

  it('rejects blank names', () => {
    expect(useUserStore.getState().createProfile('   ')).toBeNull();
    expect(useUserStore.getState().profiles).toHaveLength(0);
  });
});

describe('recordLesson', () => {
  it('appends history and accumulates totalScore for the active profile', () => {
    useUserStore.getState().createProfile('Asha');
    useUserStore.getState().recordLesson('math', 'math_counting', 9, 10);
    useUserStore.getState().recordLesson('gk', 'gk_india', 7, 10);

    const profile = useUserStore.getState().profiles[0]!;
    expect(profile.totalScore).toBe(16);
    expect(profile.history).toHaveLength(2);
    expect(profile.history[1]).toMatchObject({ subjectId: 'gk', score: 7, total: 10 });
  });

  it('is a no-op when nobody is logged in', () => {
    useUserStore.getState().createProfile('Asha');
    useUserStore.getState().logout();
    useUserStore.getState().recordLesson('math', 'math_counting', 9, 10);
    expect(useUserStore.getState().profiles[0]!.history).toHaveLength(0);
  });
});

describe('persistence', () => {
  it('writes to the playlearn_v2 key', () => {
    useUserStore.getState().createProfile('Asha');
    const raw = localStorage.getItem('playlearn_v2');
    expect(raw).toContain('Asha');
  });
});
