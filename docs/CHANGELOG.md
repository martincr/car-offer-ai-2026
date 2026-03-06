# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Dependencies
- **Next.js** upgraded from 14.2.5 to 14.2.35 (patched) to address security advisory.
- Afterwards, forced audit upgrade bumped **Next.js** to **16.1.6** (major upgrade).
- **eslint-config-next** upgraded to 16.1.6 to match Next.js.
- Additional packages were added/removed during `npm audit fix --force` and peer dependency warnings appeared (e.g. ESLint 10 requirement).

### Security
- Ran `npm audit fix` which highlighted high‑severity vulnerabilities requiring major version upgrades.
- Executed `npm audit fix --force` to clear all vulnerabilities; results show 0 remaining.

### Documentation
- Added `docs/TECH_STACK.md` summarizing stack and improvement suggestions.
- Created `docs/CHANGELOG.md` (this file) to track changes.

### Tooling
- Enabled stricter TypeScript compiler options (`noImplicitAny`, `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`).
- Added `.eslintrc.json` with custom rules and bumped ESLint to v10.
- Introduced Prettier config and `format` script for consistent styling.

### Testing
- Installed `@playwright/test` and configured Playwright with `playwright.config.ts`.
- Added example test file under `tests/` and `test:e2e` script.
- Browsers installed via `npx playwright install` for local E2E runs.

### Documentation
- Created `docs/ONBOARDING.md` outlining environment, commands, structure, and
  conventions for new contributors.

### CI
- Added GitHub Actions workflow (`.github/workflows/ci.yml`) for linting, typechecking,
  building, Playwright E2E tests, and a Lighthouse performance check.

### Recommendations
- Note to review Next.js migration guide after bumping to 16.x.
- Suggest updating ESLint to v10 and validating the application builds successfully.

---

Entries above describe recent work done on or around **March 6 2026** and will be updated with future changes.