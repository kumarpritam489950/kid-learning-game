import type { LessonHistoryEntry, Profile } from '../../stores/userStore';
import { useUserStore } from '../../stores/userStore';

export const LEGACY_USERS_KEY = 'playlearn_users';
export const LEGACY_CURRENT_KEY = 'playlearn_current_user';
export const MIGRATION_MARKER_KEY = 'playlearn_migrated_v2';

const AVATARS = ['🦁', '🐼', '🦊', '🐵', '🐸', '🦄', '🐯', '🐨', '🐰', '🐶'];

interface LegacyEntry {
  subjectId?: unknown;
  moduleId?: unknown;
  score?: unknown;
  total?: unknown;
  timestamp?: unknown;
}

interface LegacyUser {
  name?: unknown;
  createdAt?: unknown;
  totalScore?: unknown;
  history?: unknown;
}

function asFiniteNumber(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

/**
 * Transform the v1 `playlearn_users` array into v2 profiles. Defensive:
 * invalid users/entries are skipped, case-insensitive duplicate names are
 * merged (histories concatenated), and totalScore is recomputed from
 * history (falling back to the stored value when it is larger — e.g. if
 * old history entries were lost).
 */
export function transformLegacyUsers(raw: unknown): Profile[] {
  if (!Array.isArray(raw)) return [];

  const byName = new Map<string, Profile>();
  let index = 0;

  for (const candidate of raw as LegacyUser[]) {
    if (!candidate || typeof candidate !== 'object') continue;
    const name = typeof candidate.name === 'string' ? candidate.name.trim() : '';
    if (!name) continue;

    const entries: LessonHistoryEntry[] = [];
    if (Array.isArray(candidate.history)) {
      for (const entry of candidate.history as LegacyEntry[]) {
        if (!entry || typeof entry !== 'object') continue;
        if (typeof entry.subjectId !== 'string' || typeof entry.moduleId !== 'string') continue;
        entries.push({
          id: crypto.randomUUID(),
          kind: 'lesson',
          subjectId: entry.subjectId,
          moduleId: entry.moduleId,
          score: asFiniteNumber(entry.score, 0),
          total: asFiniteNumber(entry.total, 0),
          timestampMs: asFiniteNumber(entry.timestamp, Date.now()),
        });
      }
    }

    const key = name.toLowerCase();
    const existing = byName.get(key);
    if (existing) {
      existing.history = [...existing.history, ...entries].sort(
        (a, b) => a.timestampMs - b.timestampMs,
      );
      existing.totalScore += asFiniteNumber(candidate.totalScore, 0);
      continue;
    }

    byName.set(key, {
      id: crypto.randomUUID(),
      name,
      avatarEmoji: AVATARS[index % AVATARS.length]!,
      createdAtMs: asFiniteNumber(candidate.createdAt, Date.now()),
      totalScore: asFiniteNumber(candidate.totalScore, 0),
      history: entries,
    });
    index += 1;
  }

  // Sanity: recomputed history sum wins unless the stored total is larger.
  const profiles = [...byName.values()];
  for (const profile of profiles) {
    const recomputed = profile.history.reduce((sum, e) => sum + e.score, 0);
    profile.totalScore = Math.max(recomputed, profile.totalScore);
  }
  return profiles;
}

export type ImportResult = 'imported' | 'already-migrated' | 'nothing-to-import' | 'failed';

/**
 * One-time boot import of v1 localStorage data. The legacy keys are left
 * untouched so the old site (until cutover) and any rollback keep working.
 */
export function runLegacyImport(storage: Storage = localStorage): ImportResult {
  try {
    if (storage.getItem(MIGRATION_MARKER_KEY)) return 'already-migrated';
    const rawUsers = storage.getItem(LEGACY_USERS_KEY);
    if (!rawUsers) return 'nothing-to-import';

    const profiles = transformLegacyUsers(JSON.parse(rawUsers));
    if (profiles.length === 0) {
      storage.setItem(MIGRATION_MARKER_KEY, new Date().toISOString());
      return 'nothing-to-import';
    }

    const currentName = storage.getItem(LEGACY_CURRENT_KEY);
    useUserStore.getState().seedProfiles(profiles, currentName);
    storage.setItem(MIGRATION_MARKER_KEY, new Date().toISOString());
    return 'imported';
  } catch {
    // Never block the app on a broken legacy payload.
    return 'failed';
  }
}
