# Car Offer AI (prototype UI)

Mobile-first app for selling your car to dealers. Sellers submit their car details; dealers receive leads via text and bid or pass from their phone.

> Prototype — backend is in-memory (resets on server restart). Not production-ready.

## Quick start

```bash
npm install
npm run dev         # start the Next.js development server
npm run format      # run Prettier on source files
npm run lint        # run ESLint (flat config via eslint.config.mjs)
npm run typecheck   # verify TypeScript without emitting
npm run test:e2e    # execute Playwright end-to-end tests (build + start server first)
```

Open in your browser:
- Seller flow: `http://localhost:3000/`
- Dealer signup: `http://localhost:3000/dealers`
- Dealer lead view: after submitting a seller lead, the thank-you page shows a demo link `/d/{id}`

## User flows

**Seller (8 steps):**
1. Enter VIN → decoded via NHTSA vPIC API
2. Confirm vehicle
3. Name + mobile phone
4. ZIP + mileage
5. Title & loan status
6. Condition + accidents + notes
7. Photos (min 3)
8. Existing offer (optional — Carvana/CarMax)

**Dealer:**
1. Sign up at `/dealers` (one-time $500 access fee, payment link sent via text)
2. Receive per-lead text links → view full car details + photos
3. Reveal seller contact → bid or pass

## Known limitations (prototype)

- Lead storage is in-memory — resets on every server restart
- SMS notifications not implemented (bid → seller text is a placeholder)
- Dealer authentication not implemented — `/d/{id}` links are public
- VIN decoding uses the free NHTSA vPIC API (no API key required)

## Docs

- `docs/TECH_STACK.md` — stack overview
- `docs/ONBOARDING.md` — developer setup and conventions
- `docs/CI.md` — GitHub Actions workflow
- `docs/CHANGELOG.md` — change history
- `docs/FLOW_ANALYSIS.md` — UX analysis of both personas with known issues
