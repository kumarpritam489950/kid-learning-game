import { Disposer } from '../disposer';
import type { FunGameDef, GameContext } from '../types';
import { playFeedbackTone } from './audio';

const COLS = 8;
const ROWS = 10;
const BUBBLE = 45;
const COLORS = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a8e6cf', '#ff8e53'];
const TARGET = 100;

/** Pop same-color groups (ported from v1 startBubbleBlast). */
export function createBubbleGame(def: {
  id: string;
  title: string;
  description: string;
}): FunGameDef {
  return {
    ...def,
    mount(host: HTMLElement, ctx: GameContext) {
      const d = new Disposer();

      const canvas = document.createElement('canvas');
      canvas.width = COLS * BUBBLE;
      canvas.height = ROWS * BUBBLE;
      canvas.className = 'game-canvas game-canvas-dark';
      host.appendChild(canvas);

      const g = canvas.getContext('2d');
      let score = 0;
      let grid: (string | null)[][] = [];
      let finished = false;

      ctx.onScore(`Score: ${score}`);
      ctx.onPrompt(`Pop groups of 2+ same-color bubbles — reach ${TARGET}!`);

      const initGrid = () => {
        grid = Array.from({ length: ROWS }, () =>
          Array.from({ length: COLS }, () => COLORS[Math.floor(ctx.rng() * COLORS.length)]!),
        );
      };

      const draw = () => {
        if (!g) return;
        g.fillStyle = '#222';
        g.fillRect(0, 0, canvas.width, canvas.height);
        for (let r = 0; r < ROWS; r += 1) {
          for (let c = 0; c < COLS; c += 1) {
            const color = grid[r]![c];
            if (!color) continue;
            g.fillStyle = color;
            g.beginPath();
            g.arc(c * BUBBLE + BUBBLE / 2, r * BUBBLE + BUBBLE / 2, BUBBLE / 2 - 2, 0, Math.PI * 2);
            g.fill();
            g.strokeStyle = '#fff';
            g.lineWidth = 2;
            g.stroke();
          }
        }
        ctx.onScore(`Score: ${score}`);
      };

      const findConnected = (
        r: number,
        c: number,
        color: string,
        visited = new Set<string>(),
      ): { r: number; c: number }[] => {
        const key = `${r},${c}`;
        if (visited.has(key)) return [];
        if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return [];
        if (grid[r]![c] !== color) return [];
        visited.add(key);
        return [
          { r, c },
          ...findConnected(r - 1, c, color, visited),
          ...findConnected(r + 1, c, color, visited),
          ...findConnected(r, c - 1, color, visited),
          ...findConnected(r, c + 1, color, visited),
        ];
      };

      d.listen(canvas, 'click', (e) => {
        if (finished) return;
        const rect = canvas.getBoundingClientRect();
        const scale = canvas.width / rect.width;
        const x = ((e as MouseEvent).clientX - rect.left) * scale;
        const y = ((e as MouseEvent).clientY - rect.top) * scale;
        const c = Math.floor(x / BUBBLE);
        const r = Math.floor(y / BUBBLE);

        if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return;
        const color = grid[r]![c];
        if (!color) return;

        const connected = findConnected(r, c, color);
        if (connected.length < 2) return;

        for (const pos of connected) grid[pos.r]![pos.c] = null;
        score += connected.length * 5;
        playFeedbackTone(true);

        // Drop remaining bubbles down.
        for (let col = 0; col < COLS; col += 1) {
          let writeRow = ROWS - 1;
          for (let row = ROWS - 1; row >= 0; row -= 1) {
            const value = grid[row]![col];
            if (value) {
              grid[writeRow]![col] = value;
              if (writeRow !== row) grid[row]![col] = null;
              writeRow -= 1;
            }
          }
        }

        draw();
        if (score >= TARGET) {
          finished = true;
          ctx.onFeedback('You won! 🎉', 'good');
          ctx.onGameOver(score);
        }
      });

      initGrid();
      draw();

      return { destroy: () => d.disposeAll() };
    },
  };
}
