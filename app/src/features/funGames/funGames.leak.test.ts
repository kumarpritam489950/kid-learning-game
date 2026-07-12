import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mulberry32 } from '../../services/rng';
import { getAllGames } from './registry';
import type { GameContext } from './types';

/**
 * Every game must be leak-free: after destroy() there are no pending
 * timers/intervals, all document listeners are removed, and no callbacks
 * fire anymore. (This is what keeps navigation away from a game safe.)
 */

function stubCtx() {
  const calls = { after: 0 };
  let destroyed = false;
  const bump = () => {
    if (destroyed) calls.after += 1;
  };
  const ctx: GameContext = {
    onScore: bump,
    onInfo: bump,
    onPrompt: bump,
    onFeedback: bump,
    onGameOver: bump,
    speak: () => undefined,
    rng: mulberry32(42),
  };
  return { ctx, calls, markDestroyed: () => (destroyed = true) };
}

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
  document.body.replaceChildren();
});

describe('fun game leak safety', () => {
  const games = getAllGames();

  it('has all 11 games registered', () => {
    expect(games).toHaveLength(11);
    expect(new Set(games.map((g) => g.id)).size).toBe(11);
  });

  it.each(games.map((g) => [g.id, g] as const))(
    '%s cleans up completely on destroy',
    (_id, game) => {
      const host = document.createElement('div');
      document.body.appendChild(host);

      const addSpy = vi.spyOn(document, 'addEventListener');
      const removeSpy = vi.spyOn(document, 'removeEventListener');

      const { ctx, calls, markDestroyed } = stubCtx();
      const handle = game.mount(host, ctx);

      // Let the game run a bit, poke it once, run a bit more.
      vi.advanceTimersByTime(1100);
      const button = host.querySelector<HTMLButtonElement>('button:not(:disabled)');
      button?.click();
      vi.advanceTimersByTime(600);

      handle.destroy();
      markDestroyed();

      // No timers or intervals may survive destroy().
      expect(vi.getTimerCount(), 'pending timers after destroy').toBe(0);

      // Every document listener the game added must be removed again.
      const added = addSpy.mock.calls.map(([type, fn]) => ({ type, fn }));
      const removed = removeSpy.mock.calls.map(([type, fn]) => ({ type, fn }));
      for (const entry of added) {
        expect(
          removed.some((r) => r.type === entry.type && r.fn === entry.fn),
          `document ${String(entry.type)} listener not removed`,
        ).toBe(true);
      }

      // Nothing may keep calling back after destroy.
      vi.advanceTimersByTime(120_000);
      expect(calls.after, 'callbacks fired after destroy').toBe(0);

      addSpy.mockRestore();
      removeSpy.mockRestore();
      host.remove();
    },
  );
});
