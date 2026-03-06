# Continuous Integration

The CI pipeline runs on every push or pull request to `main` via GitHub Actions (`.github/workflows/ci.yml`).

## Workflow steps

| Step | Command | Notes |
|---|---|---|
| Install | `npm ci` | Clean install from lockfile |
| Lint | `npm run lint` | ESLint 10 flat config |
| Type check | `npm run typecheck` | `tsc --noEmit` |
| Build | `npm run build` | Next.js production build |
| Start server | `npm run start &` | Background process on port 3000 |
| Wait | `npx wait-on http://localhost:3000` | Blocks until server is ready (60s timeout) |
| E2E tests | `npm run test:e2e` | Playwright against running server |
| Lighthouse | `npx lighthouse ...` | Performance audit — logged, non-blocking (`|| true`) |

## Failure behaviour

- Any step before Lighthouse failing will stop the pipeline and block merges.
- Lighthouse failures are suppressed (`|| true`) — the score is logged only.

## Running CI steps locally

```bash
npm run lint
npm run typecheck
npm run build
npm run start &
npx wait-on http://localhost:3000
npm run test:e2e
```

## Known limitations

- **No dependency caching** — `npm ci` runs from scratch on every build, which is slow. Add `actions/cache` for `node_modules` to speed this up.
- **No parallelism** — lint, typecheck, and build run sequentially. Could be split into parallel jobs.
- **No unit tests** — only E2E. Jest or Vitest unit tests would give faster feedback.
- **No deployment job** — CI does not deploy to staging or production after a successful build.
- **Playwright browsers not cached** — if `npx playwright install` is needed in CI, add it as a step before E2E.

## Future improvements

- Cache `node_modules` and Playwright browsers between runs.
- Split lint/typecheck/build into parallel jobs.
- Add a deploy step triggered on merge to `main`.
- Add unit test coverage with a minimum threshold.
- Add `npm audit` as a non-blocking informational step.
