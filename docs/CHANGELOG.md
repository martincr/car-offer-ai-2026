# Changelog

All notable changes to this project are documented here.

---

## 2026-03-06

### Bug fixes
- Fixed Next.js 15/16 breaking change: `params` in dynamic route handlers must now be typed as `Promise<{...}>` and awaited. Applied to all four affected handlers: `app/api/leads/[id]/route.ts`, `app/api/leads/[id]/bid/route.ts`, `app/thank-you/[id]/page.tsx`, `app/d/[id]/page.tsx`.

### Security & trust
- Removed fake OTP phone verification UI from seller flow (`SellFlow.tsx`, `ChatAgent.tsx`). The placeholder admitted "no real SMS sent" which was visible to production users. Phone number is now collected directly without a fake verification gate.
- Gated seller contact info (name, phone, email) in the dealer lead view behind a "Reveal contact info" button (`SellerContactReveal.tsx`). Contact details were previously visible immediately to anyone with the lead URL.

### SEO & copy
- Updated page metadata (`app/layout.tsx`): new title, meta description, and OpenGraph fields.
- Updated homepage headline and subheading (`app/page.tsx`).
- Updated dealers page headline, subheading, form card copy, success message, and footer note.
- Removed redundant price note from dealers page.
- Centered footer text.

### CI fixes
- Fixed broken GitHub Actions workflow: removed `services` block that was attempting to run the app in a Docker container without access to the repo. Replaced with a `Start server` step (`npm run start &`) followed by `npx wait-on` to block until port 3000 is ready.
- Replaced `next lint` (broken in Next.js 16) with `eslint .` using a new `eslint.config.mjs` flat config (ESLint 10 / typescript-eslint).
- Removed stale `eslint-disable-next-line` comments referencing unloaded plugins (`react-hooks/exhaustive-deps`, `@next/next/no-img-element`) across four source files.
- Fixed unused `catch (e)` variable in `app/api/vin/route.ts`.

### Repository hygiene
- Updated `.gitignore` to exclude `.next`, `out`, `build`, `.env*`, `.DS_Store`, `*.pem`, and `lhreport.json`.
- Removed already-tracked `.next` directory from git index.
- Removed unused `ExistingOfferSource` import from `components/sell/ChatAgent.tsx`.

### Documentation
- Added `docs/FLOW_ANALYSIS.md`: full UX analysis of seller and dealer flows, listing 14 friction points and issues with priority ordering.
- Updated `README.md`, `TECH_STACK.md`, `ONBOARDING.md`, `CI.md` to reflect current state.

---

## Earlier (prior to 2026-03-06)

### Dependencies
- Next.js upgraded from 14.2.5 → 14.2.35 (security patch) → 16.1.6 (forced major via `npm audit fix --force`).
- `eslint-config-next` upgraded to 16.1.6 to match Next.js.
- Removed deprecated `shadcn-ui` package; updated `components.json` style to `default`.

### Tooling
- Enabled stricter TypeScript compiler options (`noImplicitAny`, `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`).
- Added Prettier config and `format` script.

### Testing
- Installed `@playwright/test`, configured `playwright.config.ts`, added `test:e2e` script.

### CI
- Added `.github/workflows/ci.yml` for lint, typecheck, build, E2E, and Lighthouse steps.
- Added `docs/CI.md`.

### Documentation
- Added `docs/TECH_STACK.md` and `docs/ONBOARDING.md`.
