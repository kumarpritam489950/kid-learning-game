import type { SpeechEngine, VoiceSupport } from './types';

/** v1 defaults: slightly slow and bright, kid-friendly. */
const RATE = 0.85;
const PITCH = 1.1;

/**
 * Voice resolution ported from v1: exact lang match → language-prefix match
 * → (kn-IN only) voice-name match → engine default.
 */
export function resolveVoice(
  voices: readonly SpeechSynthesisVoice[],
  lang: string,
): SpeechSynthesisVoice | undefined {
  let voice = voices.find((v) => v.lang === lang);
  if (!voice) {
    const prefix = lang.split('-')[0]!;
    voice = voices.find((v) => v.lang.startsWith(prefix));
  }
  if (!voice && lang === 'kn-IN') {
    voice = voices.find((v) => /kannada/i.test(v.name));
  }
  return voice;
}

export function classifyVoiceSupport(
  voices: readonly SpeechSynthesisVoice[],
  lang: string,
): VoiceSupport {
  if (voices.some((v) => v.lang === lang)) return 'exact';
  const prefix = lang.split('-')[0]!;
  if (voices.some((v) => v.lang.startsWith(prefix))) return 'prefix';
  if (lang === 'kn-IN' && voices.some((v) => /kannada/i.test(v.name))) return 'name';
  return 'none';
}

export class WebSpeechEngine implements SpeechEngine {
  private get synth(): SpeechSynthesis | undefined {
    return typeof globalThis.speechSynthesis === 'undefined'
      ? undefined
      : globalThis.speechSynthesis;
  }

  speak(text: string, lang = 'en-US'): void {
    const synth = this.synth;
    if (!synth || !text) return;

    let spoken = false;
    const doSpeak = () => {
      if (spoken) return;
      spoken = true;
      synth.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = lang;
      utter.rate = RATE;
      utter.pitch = PITCH;
      const voice = resolveVoice(synth.getVoices(), lang);
      if (voice) utter.voice = voice;
      synth.speak(utter);
    };

    // Voices load asynchronously on some browsers; wait once, with a
    // fallback timer (ported from v1).
    if (synth.getVoices().length > 0) {
      doSpeak();
    } else {
      synth.addEventListener('voiceschanged', doSpeak, { once: true });
      setTimeout(doSpeak, 200);
    }
  }

  cancel(): void {
    this.synth?.cancel();
  }

  getVoiceSupport(lang: string): VoiceSupport {
    const synth = this.synth;
    if (!synth) return 'none';
    return classifyVoiceSupport(synth.getVoices(), lang);
  }
}
