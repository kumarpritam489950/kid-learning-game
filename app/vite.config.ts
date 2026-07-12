/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// GitHub Pages serves the app from /kid-learning-game/ (project site);
// the Capacitor build loads from the bundle root, so it needs relative
// paths — and no service worker (assets ship inside the app bundle).
export default defineConfig(({ mode }) => ({
  base: mode === 'capacitor' ? './' : '/kid-learning-game/',
  plugins: [
    react(),
    ...(mode === 'capacitor'
      ? []
      : [
          VitePWA({
            strategies: 'injectManifest',
            srcDir: 'src',
            filename: 'sw.ts',
            // Same output path/scope as the legacy worker so installed v1
            // clients update in place (see src/sw.ts).
            injectRegister: false,
            manifest: {
              name: 'PlayLearn Island',
              short_name: 'PlayLearn',
              description:
                'Fun CBSE Class 1 learning games — English, Math, Hindi, Kannada, Science, stories and more.',
              start_url: '.',
              scope: '.',
              display: 'standalone',
              orientation: 'portrait',
              theme_color: '#9ee7ff',
              background_color: '#f3ffb6',
              icons: [
                { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
                { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
                {
                  src: 'maskable-icon-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                  purpose: 'maskable',
                },
              ],
            },
            injectManifest: {
              globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
              // word illustrations + font subsets push past the default 2MB
              maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
            },
          }),
        ]),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8' as const,
      include: ['src/**'],
      exclude: ['src/**/*.test.*', 'src/setupTests.ts', 'src/main.tsx', 'src/sw.ts'],
    },
  },
}));
