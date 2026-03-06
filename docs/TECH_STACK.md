# Technology Stack

## Core

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.1.6 | Framework — App Router, server components, API route handlers |
| React | 18.2.0 | UI library |
| TypeScript | 5.4.5 | Static typing |
| Tailwind CSS | 3.4.4 | Utility-first styling |

## UI components

- **shadcn CLI** — scaffolds accessible Tailwind/Radix components via `npx shadcn@latest add <component>`. Config lives in `components.json`. Generated code drops into `components/ui/`.
- **Radix UI** — headless primitives used by shadcn components (`@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-slot`).
- Custom components live in `components/` and `components/ui/`.

## Tooling

| Tool | Config file | Purpose |
|---|---|---|
| ESLint 10 | `eslint.config.mjs` | Linting (flat config, typescript-eslint) |
| Prettier | `prettier.config.js` | Code formatting |
| TypeScript | `tsconfig.json` | Strict mode with `noImplicitAny`, `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns` |
| Playwright | `playwright.config.ts` | End-to-end tests |

## API

- **NHTSA vPIC API** — free public API for VIN decoding (`/api/vin` route). No API key required.
- All other routes use an **in-memory store** (`lib/store.ts`) — resets on server restart.

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs on every push/PR to `main`:

1. `npm ci` — clean install
2. `npm run lint` — ESLint
3. `npm run typecheck` — TypeScript
4. `npm run build` — Next.js production build
5. `npm run start &` + `wait-on` — start production server
6. `npm run test:e2e` — Playwright
7. Lighthouse performance audit (logged, non-blocking)

## Project structure

```
app/
  api/           API route handlers
    vin/         VIN decode (NHTSA)
    leads/       Lead creation + bid submission
    dealers/     Dealer signup
  d/[id]/        Dealer lead view
  sell/          Seller flow
  thank-you/[id] Post-submission confirmation
  dealers/       Dealer signup page
components/
  dealer/        DealerBidPanel, DealerSignupForm, SellerContactReveal
  sell/          ChatAgent, PhotoPicker
  ui/            Button, Card, Chip, Input, etc.
lib/
  store.ts       In-memory lead/dealer store
  types.ts       Shared TypeScript types
  validators.ts  VIN, phone validation helpers
docs/            Documentation
.github/
  workflows/     CI configuration
```

## Known production gaps

See `docs/FLOW_ANALYSIS.md` for a full list. Key items:

- In-memory store — needs a persistent database before going live
- No SMS integration — bid notifications and OTP are not implemented
- No dealer authentication — `/d/{id}` links are unauthenticated
- No seller bid-tracking dashboard
