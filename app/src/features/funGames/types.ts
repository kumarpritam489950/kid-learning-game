import type { Rng } from '../../services/rng';

export type FeedbackTone = 'good' | 'try' | 'neutral';

/**
 * Callbacks a game uses to talk to the React chrome around it. Games own
 * the DOM inside their host element; score/prompt/feedback lines and the
 * back button are rendered by GameHost from these callbacks.
 */
export interface GameContext {
  /** Primary stat line, e.g. "Score: 30" or "Moves: 4". */
  onScore(text: string): void;
  /** Secondary stat line, e.g. "Time: 45s", "Round 3 / 10", "Pairs: 2 / 6". */
  onInfo(text: string): void;
  /** Instruction line above the play area (balloon/color/snap games). */
  onPrompt(text: string): void;
  onFeedback(text: string, tone: FeedbackTone): void;
  /** Ends the game; GameHost shows the final score + Play Again. */
  onGameOver(finalScore: number): void;
  speak(text: string, lang?: string): void;
  rng: Rng;
}

export interface GameHandle {
  destroy(): void;
}

export interface FunGameDef {
  id: string;
  title: string;
  description: string;
  /** Build the game inside `host`; must clean up fully in destroy(). */
  mount(host: HTMLElement, ctx: GameContext): GameHandle;
}
