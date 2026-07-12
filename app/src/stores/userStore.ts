import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface LessonHistoryEntry {
  id: string;
  kind: 'lesson' | 'assessment';
  subjectId: string;
  moduleId: string;
  /** Correct answers in the session (v1 stored correctCount here). */
  score: number;
  total: number;
  timestampMs: number;
  /** Assessment attempts only: correct/total per topic. */
  topicBreakdown?: Record<string, { correct: number; total: number }>;
}

export interface Profile {
  id: string;
  name: string;
  avatarEmoji: string;
  createdAtMs: number;
  /** Running sum of history scores (v1 totalScore). */
  totalScore: number;
  history: LessonHistoryEntry[];
}

const AVATARS = ['🦁', '🐼', '🦊', '🐵', '🐸', '🦄', '🐯', '🐨', '🐰', '🐶'];

interface UserState {
  profiles: Profile[];
  currentProfileId: string | null;

  /**
   * Create (or return the existing case-insensitive match, v1 semantics)
   * and select a profile. Returns null for blank names.
   */
  createProfile: (name: string) => Profile | null;
  selectProfile: (id: string) => void;
  logout: () => void;
  recordLesson: (subjectId: string, moduleId: string, score: number, total: number) => void;
  recordAssessment: (
    subjectId: string,
    score: number,
    total: number,
    topicBreakdown: Record<string, { correct: number; total: number }>,
  ) => void;
  /** Seed profiles from the legacy import; skips names that already exist. */
  seedProfiles: (profiles: Profile[], currentName?: string | null) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      profiles: [],
      currentProfileId: null,

      createProfile: (name) => {
        const trimmed = name.trim();
        if (!trimmed) return null;

        const existing = get().profiles.find((p) => p.name.toLowerCase() === trimmed.toLowerCase());
        if (existing) {
          set({ currentProfileId: existing.id });
          return existing;
        }

        const profile: Profile = {
          id: crypto.randomUUID(),
          name: trimmed,
          avatarEmoji: AVATARS[get().profiles.length % AVATARS.length]!,
          createdAtMs: Date.now(),
          totalScore: 0,
          history: [],
        };
        set((s) => ({ profiles: [...s.profiles, profile], currentProfileId: profile.id }));
        return profile;
      },

      selectProfile: (id) => {
        if (get().profiles.some((p) => p.id === id)) {
          set({ currentProfileId: id });
        }
      },

      logout: () => set({ currentProfileId: null }),

      recordLesson: (subjectId, moduleId, score, total) => {
        const { currentProfileId } = get();
        if (!currentProfileId) return;
        const entry: LessonHistoryEntry = {
          id: crypto.randomUUID(),
          kind: 'lesson',
          subjectId,
          moduleId,
          score,
          total,
          timestampMs: Date.now(),
        };
        set((s) => ({
          profiles: s.profiles.map((p) =>
            p.id === currentProfileId
              ? { ...p, totalScore: p.totalScore + score, history: [...p.history, entry] }
              : p,
          ),
        }));
      },

      recordAssessment: (subjectId, score, total, topicBreakdown) => {
        const { currentProfileId } = get();
        if (!currentProfileId) return;
        const entry: LessonHistoryEntry = {
          id: crypto.randomUUID(),
          kind: 'assessment',
          subjectId,
          moduleId: 'assessment',
          score,
          total,
          timestampMs: Date.now(),
          topicBreakdown,
        };
        set((s) => ({
          profiles: s.profiles.map((p) =>
            p.id === currentProfileId
              ? { ...p, totalScore: p.totalScore + score, history: [...p.history, entry] }
              : p,
          ),
        }));
      },

      seedProfiles: (incoming, currentName) => {
        set((s) => {
          const existingNames = new Set(s.profiles.map((p) => p.name.toLowerCase()));
          const added = incoming.filter((p) => !existingNames.has(p.name.toLowerCase()));
          const profiles = [...s.profiles, ...added];
          let currentProfileId = s.currentProfileId;
          if (!currentProfileId && currentName) {
            const match = profiles.find((p) => p.name.toLowerCase() === currentName.toLowerCase());
            if (match) currentProfileId = match.id;
          }
          return { profiles, currentProfileId };
        });
      },
    }),
    { name: 'playlearn_v2', version: 1 },
  ),
);

export function useCurrentProfile(): Profile | null {
  return useUserStore((s) => s.profiles.find((p) => p.id === s.currentProfileId) ?? null);
}
