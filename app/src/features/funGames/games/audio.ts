/** Short feedback beep (ported from v1 playFeedbackTone). */
export function playFeedbackTone(isGood: boolean): void {
  type AudioCtor = typeof AudioContext;
  const Ctor: AudioCtor | undefined =
    (globalThis as { AudioContext?: AudioCtor; webkitAudioContext?: AudioCtor }).AudioContext ??
    (globalThis as { webkitAudioContext?: AudioCtor }).webkitAudioContext;
  if (!Ctor) return;

  try {
    const ctx = new Ctor();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = isGood ? 'triangle' : 'square';
    osc.frequency.value = isGood ? 760 : 220;
    gain.gain.value = 0.01;

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
    osc.stop(ctx.currentTime + 0.2);
  } catch {
    // Audio is a nicety — never let it break gameplay.
  }
}
