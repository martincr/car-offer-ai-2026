# Onboarding & Developer Guide

This document helps new contributors get up to speed and understand the
project conventions.

## Environment

1. **Node.js** 18+ (tested with 20).  Install using nvm or your preferred manager.
2. **macOS/Linux/Windows** – network compatibles; ports 3000/3001 used locally.
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the app

- `npm run dev` starts the Next.js server. It will auto‑pick a free port if
  3000 is occupied (falling back to 3001, etc.).
- Server state is ephemeral: leads are stored in memory and reset on restart.

## Code quality

- **Formatting**: `npm run format` runs Prettier across `app/`, `components/` and
  `lib/`. This is automatically configured via `prettier.config.js`.
- **Linting**: `npm run lint` uses ESLint with `.eslintrc.json`. Feel free to
  run before commits or configure a git hook.
- **Type-checking**: `npm run typecheck` ensures TS errors are caught early.

Both lint and typecheck commands are run in CI (see `/.github/workflows` once
added).

## Testing

We use Playwright for end-to-end validation.

- Browsers are installed via `npx playwright install` (already executed).
- Tests live under `tests/` and extend as features are added.
- Start the dev server, then run:
  ```bash
  npm run test:e2e
  ```
- To view the HTML report after a run:
  ```bash
  npx playwright show-report
  ```

## Project structure recap

- `app/` – Next.js App Router pages and API route handlers
- `components/` – React UI components, subdivided by area
- `lib/` – shared utilities, types and state
- `docs/` – supporting documentation (tech stack, changelog, onboarding)

## Dependency management

- Keep track of `next`, `react`, Tailwind, ESLint, and TypeScript versions in
  `package.json`.
- Run `npm audit` regularly; use `npm audit fix` for minor fixes.
- Major version bumps should be done in a feature branch and verified locally.

## Additional tips

- Follow the existing UI style for new components (Tailwind + utility classes).
- Avoid adding backend logic in the frontend; the API routes are minimal.
- When adding new dependencies, update `docs/TECH_STACK.md` and `docs/CHANGELOG.md`.

---

Welcome aboard! If you have questions or run into issues, feel free to open an
issue or reach out to the maintainer. Happy hacking!
