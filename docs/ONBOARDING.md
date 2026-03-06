# Onboarding & Developer Guide

## Prerequisites

- **Node.js** 20+ (use nvm or your preferred manager)
- **npm** 10+

## Setup

```bash
npm install
npx playwright install   # install Playwright browsers for E2E tests
```

## Running the app

```bash
npm run dev     # start the Next.js dev server on http://localhost:3000
```

Key URLs:
- `/` — seller flow (homepage)
- `/sell` — seller flow (direct)
- `/dealers` — dealer signup
- `/d/{id}` — dealer lead view (link shown on thank-you page after submitting a lead)

> **Note:** the store is in-memory. All leads and dealer signups reset on server restart.

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server (requires build first) |
| `npm run lint` | Run ESLint (flat config, `eslint.config.mjs`) |
| `npm run typecheck` | Run `tsc --noEmit` |
| `npm run format` | Run Prettier across `app/`, `components/`, `lib/` |
| `npm run test:e2e` | Run Playwright tests (server must be running) |

## Code quality

- **Linting:** `npm run lint` uses ESLint 10 with flat config (`eslint.config.mjs`). Based on `typescript-eslint`. Run before committing.
- **Formatting:** `npm run format` runs Prettier. Config in `prettier.config.js`.
- **Type checking:** `npm run typecheck`. Strict mode is enabled.

CI runs lint → typecheck → build → E2E on every push/PR. See `docs/CI.md`.

## Project conventions

- UI components go in `components/ui/` (primitives) or `components/` (feature-specific).
- API logic stays in `app/api/` route handlers — keep it minimal.
- Types are shared via `lib/types.ts`. Validators in `lib/validators.ts`.
- Follow the existing Tailwind class patterns — `rounded-2xl`, zinc palette, `text-sm`.
- Avoid `any` unless there's a good reason; the rule is currently off but may be tightened later.

## Adding UI components (shadcn)

```bash
npx shadcn@latest add <component>
# e.g. npx shadcn@latest add button dialog dropdown-menu
```

Config lives in `components.json`. Generated files drop into `components/ui/`.

Available components: `button`, `dialog`, `dropdown-menu`, `context-menu`, `menubar`, `navigation-menu`, etc. There is no component called `menu` — use `dropdown-menu` or `navigation-menu` instead.

## Testing

Playwright is used for E2E tests. Tests live under `tests/`.

```bash
# run tests (start server first)
npm run start &
npm run test:e2e

# view the HTML report after a run
npx playwright show-report
```

## Dependency management

- Run `npm audit` regularly.
- Use `npm audit fix` for minor fixes; avoid `--force` without reviewing the diff.
- Major version bumps should be done in a branch and verified locally before merging.
- Update `docs/TECH_STACK.md` and `docs/CHANGELOG.md` when making significant dependency changes.

---

See `docs/FLOW_ANALYSIS.md` for known UX issues and the priority list for what to work on next.
