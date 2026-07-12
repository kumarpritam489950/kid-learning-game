import { beforeEach, describe, expect, it } from 'vitest';
import { useUserStore } from '../../stores/userStore';
import {
  LEGACY_CURRENT_KEY,
  LEGACY_USERS_KEY,
  MIGRATION_MARKER_KEY,
  runLegacyImport,
  transformLegacyUsers,
} from './legacyImport';

/** Real v1 shape (js/app.js createUser/updateUserScore at tag v1-legacy). */
const LEGACY_USERS = [
  {
    name: 'Anaya',
    createdAt: 1700000000000,
    totalScore: 17,
    history: [
      {
        subjectId: 'math',
        moduleId: 'math_counting',
        score: 9,
        total: 10,
        timestamp: 1700000001000,
      },
      { subjectId: 'hindi', moduleId: 'hin_matras', score: 8, total: 10, timestamp: 1700000002000 },
    ],
  },
  { name: 'Veer', createdAt: 1700000003000, totalScore: 0, history: [] },
];

beforeEach(() => {
  localStorage.clear();
  useUserStore.setState({ profiles: [], currentProfileId: null });
});

describe('transformLegacyUsers', () => {
  it('converts the real v1 shape with ids and ms timestamps', () => {
    const profiles = transformLegacyUsers(LEGACY_USERS);
    expect(profiles).toHaveLength(2);

    const anaya = profiles[0]!;
    expect(anaya.name).toBe('Anaya');
    expect(anaya.id).toMatch(/[0-9a-f-]{36}/);
    expect(anaya.createdAtMs).toBe(1700000000000);
    expect(anaya.totalScore).toBe(17);
    expect(anaya.history).toHaveLength(2);
    expect(anaya.history[0]).toMatchObject({
      kind: 'lesson',
      subjectId: 'math',
      moduleId: 'math_counting',
      score: 9,
      total: 10,
      timestampMs: 1700000001000,
    });
  });

  it('merges case-insensitive duplicate names', () => {
    const profiles = transformLegacyUsers([
      {
        name: 'asha',
        createdAt: 1,
        totalScore: 5,
        history: [{ subjectId: 'math', moduleId: 'm1', score: 5, total: 10, timestamp: 2 }],
      },
      {
        name: 'Asha',
        createdAt: 3,
        totalScore: 4,
        history: [{ subjectId: 'gk', moduleId: 'g1', score: 4, total: 10, timestamp: 1 }],
      },
    ]);
    expect(profiles).toHaveLength(1);
    expect(profiles[0]!.history).toHaveLength(2);
    expect(profiles[0]!.history[0]!.timestampMs).toBeLessThan(profiles[0]!.history[1]!.timestampMs);
    expect(profiles[0]!.totalScore).toBe(9);
  });

  it('recomputes totalScore from history when the stored value is stale', () => {
    const profiles = transformLegacyUsers([
      {
        name: 'Zoe',
        createdAt: 1,
        totalScore: 1,
        history: [{ subjectId: 'math', moduleId: 'm1', score: 7, total: 10, timestamp: 2 }],
      },
    ]);
    expect(profiles[0]!.totalScore).toBe(7);
  });

  it('skips garbage entries without crashing', () => {
    const profiles = transformLegacyUsers([
      null,
      42,
      { name: '' },
      { name: 'Ok', createdAt: 'wat', totalScore: 'nope', history: [null, { bad: true }] },
    ] as unknown[]);
    expect(profiles).toHaveLength(1);
    expect(profiles[0]!.name).toBe('Ok');
    expect(profiles[0]!.history).toHaveLength(0);
    expect(profiles[0]!.totalScore).toBe(0);
  });

  it('returns [] for non-array payloads', () => {
    expect(transformLegacyUsers('nonsense')).toEqual([]);
    expect(transformLegacyUsers({})).toEqual([]);
  });
});

describe('runLegacyImport', () => {
  it('imports once, selects the previously active user, and leaves legacy keys intact', () => {
    localStorage.setItem(LEGACY_USERS_KEY, JSON.stringify(LEGACY_USERS));
    localStorage.setItem(LEGACY_CURRENT_KEY, 'anaya');

    expect(runLegacyImport()).toBe('imported');

    const state = useUserStore.getState();
    expect(state.profiles).toHaveLength(2);
    const current = state.profiles.find((p) => p.id === state.currentProfileId);
    expect(current?.name).toBe('Anaya');

    // rollback safety: legacy keys untouched, marker set
    expect(localStorage.getItem(LEGACY_USERS_KEY)).not.toBeNull();
    expect(localStorage.getItem(LEGACY_CURRENT_KEY)).toBe('anaya');
    expect(localStorage.getItem(MIGRATION_MARKER_KEY)).not.toBeNull();

    // second boot: no double import
    expect(runLegacyImport()).toBe('already-migrated');
    expect(useUserStore.getState().profiles).toHaveLength(2);
  });

  it('does nothing on fresh installs', () => {
    expect(runLegacyImport()).toBe('nothing-to-import');
    expect(useUserStore.getState().profiles).toHaveLength(0);
  });

  it('survives corrupt legacy JSON', () => {
    localStorage.setItem(LEGACY_USERS_KEY, '{not json');
    expect(runLegacyImport()).toBe('failed');
    expect(useUserStore.getState().profiles).toHaveLength(0);
  });

  it('does not clobber an existing v2 profile with the same name', () => {
    useUserStore.getState().createProfile('Anaya');
    const v2Id = useUserStore.getState().currentProfileId;
    localStorage.setItem(LEGACY_USERS_KEY, JSON.stringify(LEGACY_USERS));

    expect(runLegacyImport()).toBe('imported');
    const state = useUserStore.getState();
    expect(state.profiles.filter((p) => p.name.toLowerCase() === 'anaya')).toHaveLength(1);
    expect(state.currentProfileId).toBe(v2Id);
    expect(state.profiles.map((p) => p.name)).toContain('Veer');
  });
});
