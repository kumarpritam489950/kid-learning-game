import type { Question } from '../../features/lesson/engine/types';
import type { SpeechEngine } from './types';
import { WebSpeechEngine } from './webSpeechEngine';

let engine: SpeechEngine = new WebSpeechEngine();

/** Swap the engine (e.g. Capacitor-native TTS on Android, mocks in tests). */
export function setSpeechEngine(next: SpeechEngine): void {
  engine = next;
}

export function speak(text: string, lang?: string): void {
  engine.speak(text, lang);
}

export function cancelSpeech(): void {
  engine.cancel();
}

export function getVoiceSupport(lang: string) {
  return engine.getVoiceSupport(lang);
}

/** Speak a question's audio line, if it has one (v1 speakQuestion). */
export function speakQuestion(question: Pick<Question, 'speakText' | 'speakLang'>): void {
  if (question.speakText) {
    engine.speak(question.speakText, question.speakLang);
  }
}
