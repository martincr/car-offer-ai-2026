# Project Technology Stack

This project was bootstrapped with `create-next-app` (TypeScript template) and uses the
following core technologies:

- **Next.js** 14.2.5 – framework for server-rendered React apps with file-based routing.
- **React** 18.2.0 – UI library.
- **TypeScript** – statically typed JavaScript; `tsconfig.json` present.
- **Tailwind CSS** 3.4.4 – utility-first styling framework (configured via `tailwind.config.ts` and `postcss.config.js`).
- **ESLint** with `eslint-config-next` – linting for code quality.

The application contains:

- `app/` directory using the new Next.js App Router and nested layouts.
- API routes under `app/api` using the new route handlers.
- Components split under `components/` with subfolders for organization.

## Suggestions for Improvements

1. **Dependency updates**
   - The `next` dependency is flagged as having a security vulnerability; upgrade to a patched version when feasible.
   - Run `npm audit fix` regularly and monitor dev‑dependency deprecations.

2. **Type safety & linting**
   - Strict TypeScript options enabled (`noImplicitAny`, `noUnusedLocals/Parameters`, `noImplicitReturns`, etc.).
   - ESLint configuration added (`.eslintrc.json`) extending `next/core-web-vitals` with TypeScript-specific rules.
   - Prettier added for consistent formatting; `format` script available.

3. **Style tooling**
   - Prettier config (`prettier.config.js`) enforces quotes, trailing commas, print width, etc.
   - `npm run format` applies style rules across source files.

4. **Testing**
   - Added Playwright for end‑to‑end tests (`@playwright/test`).
   - Configuration in `playwright.config.ts`, sample test in `tests/`.
   - Use `npm run test:e2e` to execute tests; browsers installed via `npx playwright install`.

4. **Testing**
   - Introduce a testing framework (Jest/Playwright/React Testing Library) and add basic unit and E2E tests.

5. **Docs & onboarding**
   - Continue documenting architecture decisions or API contracts under `docs/`.
   - Include setup instructions and common commands in README.

6. **Performance & CI**
   - CI pipeline added (`.github/workflows/ci.yml`) running lint, typecheck, build, and
     Playwright tests on push/pull requests.
   - Pipeline also executes a Lighthouse performance audit and logs the score.
   - Consider further static analysis or enforce budgets in CI.

2. **Type safety & linting**
   - Enable stricter TypeScript compiler options (e.g. `noImplicitAny`, `strict`).
   - Add custom ESLint rules or Prettier integration for consistent style.

3. **Testing**
   - Introduce a testing framework (Jest/Playwright/React Testing Library) and add basic unit and E2E tests.

4. **Docs & onboarding**
   - Continue documenting architecture decisions or API contracts under `docs/`.
   - Include setup instructions and common commands in README.

5. **Performance & CI**
   - Add a CI pipeline (GitHub Actions) for building, linting, and tests.
   - Consider adding static analysis (e.g. Lighthouse) or performance budgets.

---

This file can serve as a reference for new contributors or future audits.