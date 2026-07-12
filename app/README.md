# PlayLearn Island v2 (app)

React 19 + TypeScript + Vite rebuild of PlayLearn Island. See
[CONTENT.md](CONTENT.md) for the content pipeline and
[../README.md](../README.md) for the project overview.

## Commands (run inside `app/`)

| Command             | What                                       |
| ------------------- | ------------------------------------------ |
| `npm run dev`       | dev server                                 |
| `npm test`          | unit/component tests (Vitest + RTL)        |
| `npm run e2e`       | Playwright against the built preview       |
| `npm run lint`      | oxlint (react-hooks, jsx-a11y, no-console) |
| `npm run typecheck` | strict TypeScript                          |
| `npm run format`    | Prettier                                   |
| `npm run build`     | production build (GitHub Pages base path)  |
| `npm run build:cap` | Capacitor build (relative base)            |

## Licenses / attribution

- Word illustrations in `public/images/words/` are
  [OpenMoji](https://openmoji.org) — the open-source emoji and icon project.
  License: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
  Fetched by `scripts/fetch-openmoji.mjs`; drop a same-named file there (or
  set an item's `image` field) to use your own illustration instead.
- Font: [Baloo 2](https://fonts.google.com/specimen/Baloo+2) (OFL) via
  @fontsource.
