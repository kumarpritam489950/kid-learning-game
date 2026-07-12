/**
 * Tracks every timer/listener a game creates so destroy() provably clears
 * them (successor of v1's global gameCleanup registry, but per-game).
 */
export class Disposer {
  private timers = new Set<ReturnType<typeof setTimeout>>();
  private intervals = new Set<ReturnType<typeof setInterval>>();
  private listeners: {
    target: EventTarget;
    type: string;
    fn: EventListenerOrEventListenerObject;
    options?: AddEventListenerOptions | boolean;
  }[] = [];
  private disposed = false;

  timeout(fn: () => void, ms: number): ReturnType<typeof setTimeout> {
    const id = setTimeout(() => {
      this.timers.delete(id);
      fn();
    }, ms);
    this.timers.add(id);
    return id;
  }

  clearTimeout(id: ReturnType<typeof setTimeout>): void {
    clearTimeout(id);
    this.timers.delete(id);
  }

  interval(fn: () => void, ms: number): ReturnType<typeof setInterval> {
    const id = setInterval(fn, ms);
    this.intervals.add(id);
    return id;
  }

  clearInterval(id: ReturnType<typeof setInterval>): void {
    clearInterval(id);
    this.intervals.delete(id);
  }

  listen(
    target: EventTarget,
    type: string,
    fn: EventListenerOrEventListenerObject,
    options?: AddEventListenerOptions | boolean,
  ): void {
    target.addEventListener(type, fn, options);
    this.listeners.push({ target, type, fn, options });
  }

  get isDisposed(): boolean {
    return this.disposed;
  }

  disposeAll(): void {
    this.disposed = true;
    for (const id of this.timers) clearTimeout(id);
    this.timers.clear();
    for (const id of this.intervals) clearInterval(id);
    this.intervals.clear();
    for (const { target, type, fn, options } of this.listeners) {
      target.removeEventListener(type, fn, options);
    }
    this.listeners = [];
  }
}
