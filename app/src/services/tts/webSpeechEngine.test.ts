import { describe, expect, it } from 'vitest';
import { classifyVoiceSupport, resolveVoice } from './webSpeechEngine';

function voice(lang: string, name: string): SpeechSynthesisVoice {
  return { lang, name, default: false, localService: true, voiceURI: name } as SpeechSynthesisVoice;
}

const VOICES = [
  voice('en-US', 'Samantha'),
  voice('en-GB', 'Daniel'),
  voice('hi-IN', 'Lekha'),
  voice('kn', 'Kannada Female'),
];

describe('resolveVoice (v1 chain: exact → prefix → kannada name)', () => {
  it('finds an exact match', () => {
    expect(resolveVoice(VOICES, 'hi-IN')?.name).toBe('Lekha');
  });

  it('falls back to a language-prefix match', () => {
    expect(resolveVoice(VOICES, 'en-IN')?.name).toBe('Samantha');
  });

  it('matches kn-IN by prefix when a kn voice exists', () => {
    expect(resolveVoice(VOICES, 'kn-IN')?.name).toBe('Kannada Female');
  });

  it('matches kn-IN by voice name when no kn lang is present', () => {
    const noKnLang = [voice('en-US', 'Samantha'), voice('und', 'Google ಕನ್ನಡ Kannada')];
    expect(resolveVoice(noKnLang, 'kn-IN')?.name).toBe('Google ಕನ್ನಡ Kannada');
  });

  it('returns undefined when nothing matches', () => {
    expect(resolveVoice([voice('en-US', 'Samantha')], 'ta-IN')).toBeUndefined();
  });
});

describe('classifyVoiceSupport', () => {
  it.each([
    ['hi-IN', 'exact'],
    ['en-IN', 'prefix'],
    ['ta-IN', 'none'],
  ] as const)('%s → %s', (lang, expected) => {
    expect(classifyVoiceSupport(VOICES, lang)).toBe(expected);
  });

  it('reports name-only Kannada support', () => {
    const noKnLang = [voice('und', 'Kannada voice')];
    expect(classifyVoiceSupport(noKnLang, 'kn-IN')).toBe('name');
  });
});
