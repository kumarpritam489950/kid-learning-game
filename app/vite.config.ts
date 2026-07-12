/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves the app from /kid-learning-game/ (project site);
// the Capacitor build loads from the bundle root, so it needs relative paths.
export default defineConfig(({ mode }) => ({
  base: mode === 'capacitor' ? './' : '/kid-learning-game/',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8' as const,
      include: ['src/**'],
      exclude: ['src/**/*.test.*', 'src/setupTests.ts', 'src/main.tsx'],
    },
  },
}));
