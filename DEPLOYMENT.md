# Deployment & Cutover Runbook

The v1 site (repo root) is served by GitHub Pages from the `main` branch.
The v2 app (`app/`) deploys via the **Deploy to GitHub Pages** workflow.
Same origin + path — that is what keeps every child's localStorage progress.

## Why the cutover is safe

- v1's `sw.js` was cache-first with a never-bumped cache, so installed
  clients never revalidate pages. But browsers ALWAYS re-fetch the SW
  script itself — and v2 ships its worker at the **same path**
  (`/kid-learning-game/sw.js`) with `skipWaiting` + `clientsClaim` and an
  explicit `caches.delete('playlearn-v1')`. Old installs converge to v2
  within two loads.
- v2 imports v1 `playlearn_users` localStorage on first boot and **never
  deletes the legacy keys** (rollback stays possible).
- Rollback: Settings → Pages → Source back to "Deploy from a branch".

## Cutover checklist (do in order)

1. **Before flipping** — keep a v1 reference client:
   - open https://kumaranayapritam.github.io/kid-learning-game/ in a
     browser profile you won't clear, AND on one real phone (ideally one
     with the installed PWA and real play history).
2. GitHub → repo **Settings → Pages → Source: "GitHub Actions"**.
3. GitHub → **Actions → "Deploy to GitHub Pages" → Run workflow** (main).
4. Wait for green, then on BOTH reference clients from step 1:
   - load the site twice (first load hands over the SW, second is v2)
   - confirm the island home renders and **“Welcome back — your stars are
     safe!”** appears with the old profile + total stars intact
   - play one lesson question; open History
5. If anything is wrong: flip Pages Source back to branch (instant
   rollback) — nothing on the devices was destroyed.
6. **After verified cutover** (separate commit):
   - delete the legacy root files: `index.html`, `styles.css`, `sw.js`,
     `manifest.json`, `assessment.html`, `js/`, `data/`,
     `assessment_expanded.js`, `ASSESSMENT.md`
   - edit `.github/workflows/deploy.yml`: replace `workflow_dispatch`
     with `push: branches: [main], paths: ['app/**']` for auto-deploys
   - (later release) switch the SW registration to an update prompt so
     deploys never yank the page mid-lesson

## Local commands

```powershell
cd app
npm run build       # production build → app/dist
npm run preview     # serve it at http://localhost:4173/kid-learning-game/
npm run e2e         # Playwright suite against the built preview
```
