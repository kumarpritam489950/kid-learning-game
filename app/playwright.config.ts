import { defineConfig, devices } from '@playwright/test';

/**
 * E2E tests run against the production build served by `vite preview`, on
 * the real GitHub Pages base path. Run `npm run build` first (CI does).
 */
export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://localhost:4173/kid-learning-game/',
    trace: 'on-first-retry',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'npm run preview -- --port 4173 --strictPort',
    url: 'http://localhost:4173/kid-learning-game/',
    reuseExistingServer: !process.env.CI,
  },
});
