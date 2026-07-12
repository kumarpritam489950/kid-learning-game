import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  /** Show phonetic transcriptions next to Hindi/Kannada letters. */
  phoneticsEnabled: boolean;
  togglePhonetics: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      phoneticsEnabled: true,
      togglePhonetics: () => set((s) => ({ phoneticsEnabled: !s.phoneticsEnabled })),
    }),
    { name: 'playlearn_settings_v2', version: 1 },
  ),
);
