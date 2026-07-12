export type VoiceSupport = 'exact' | 'prefix' | 'name' | 'none';

/**
 * Speech engine abstraction. Default implementation wraps the Web Speech
 * API; a Capacitor-native engine can be swapped in on Android if WebView
 * voices prove unreliable.
 */
export interface SpeechEngine {
  speak(text: string, lang?: string): void;
  cancel(): void;
  /** How well the given BCP-47 lang is covered by an installed voice. */
  getVoiceSupport(lang: string): VoiceSupport;
}
