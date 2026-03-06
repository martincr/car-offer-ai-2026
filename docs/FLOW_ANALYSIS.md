# Flow Analysis — Seller & Dealer Personas

Last updated: 2026-03-06

## Overview

The app has two personas and two primary flows:

- **Seller** — submits their car via an 8-step guided form (quick or chat mode), receives bids via text
- **Dealer** — signs up and pays a $500 access fee, receives per-lead text links, bids or passes from their phone

---

## Seller Flow

### Steps (Quick mode, 8 total)

| Step | Screen | Required to proceed |
|------|--------|---------------------|
| 0 | VIN entry | Valid 17-char VIN + successful decode |
| 1 | VIN confirmation | User confirms decoded vehicle |
| 2 | Contact info | Name + phone + phone verified (OTP) |
| 3 | ZIP + mileage | Both fields filled |
| 4 | Title & loan | Title in hand Yes/No; loan details if applicable |
| 5 | Condition + accidents + notes | Condition selected |
| 6 | Photos | Minimum 3 photos uploaded |
| 7 | Existing offer (Carvana/CarMax) | None required if source = None; amount + file if source set |

After submission → `/thank-you/[id]` → seller waits for texts

---

## Dealer Flow

### Signup

- `/dealers` page → fill form → $500 one-time fee (payment link sent via text, not yet implemented)
- After activation → dealer receives `/d/[id]` links per lead via text (not yet implemented)

### Lead view (`/d/[id]`)

- Full car details: VIN, mileage, ZIP, condition, accidents, title/loan, notes
- Seller photos (2-col grid)
- Seller contact (name, phone, email) with one-tap "Text seller" and "Email" links
- Bid panel: enter amount + optional message + optional dealer name → submit or pass

---

## Known Issues & Friction Points

### Critical — Build-breaking

1. **`/thank-you/[id]/page.tsx` uses old params type** — `params: { id: string }` must be `params: Promise<{ id: string }>` in Next.js 15. Will fail in production.
2. **`/d/[id]/page.tsx` uses old params type** — Same issue.

### Critical — Trust & data

3. **Fake OTP is visible to production users** — The phone verification UI shows "Prototype UI: no real SMS yet. Enter any 6 digits to 'verify'." This text is live and destroys user trust. Needs to either be replaced with real SMS or the gate removed until real SMS is wired.
4. **In-memory store resets on server restart** — `lib/store.ts` uses `globalThis` with no persistence. Every Vercel cold start loses all leads and dealer signups. A persistent database is required before going live.

### High friction — Seller

5. **No progress persistence** — All 8 steps live in React state. Refreshing or navigating away resets the form to step 0.
6. **No bid tracking page** — After submitting, the seller has no way to view received bids. The thank-you page says "You'll get texts as bids come in" but texting isn't wired up and there's no dashboard fallback.
7. **Photos hard gate** — Minimum 3 photos required to proceed past step 6. Users on mobile mid-flow typically don't have photos ready. No "save and add later" path exists.
8. **Existing offer forces file upload** — Selecting any offer source other than None requires entering an amount AND uploading a file. If the user has an offer but not the file handy, they are stuck.
9. **No timeline expectation on thank-you page** — "You'll get texts as bids come in" sets no expectation. Adding "expect offers within a few hours" would reduce post-submit anxiety.

### High friction — Dealer

10. **No dealer dashboard** — Dealers only see leads via one-off text links. There is no login, no browsable list of active leads, and no way to see leads they've been sent previously.
11. **No authentication on dealer view** — `/d/[id]` is publicly accessible to anyone with the URL. No dealer login, no token validation, no access gate.
12. **Seller contact exposed immediately** — Seller name, phone, and email are visible to whoever opens the link before any commitment is made. Should be gated behind bid submission or explicit acknowledgement.
13. **Dealer name is optional on bids** — Bids can be submitted with no dealer identity. The seller receives an anonymous offer amount with no indication of who made it, which undermines trust.
14. **No bid notification to seller** — `DealerBidPanel` notes "in production this would notify the seller via text" — but this is not implemented. The core value prop for the seller is not functional end-to-end.

---

## Priority Order (recommended)

| Priority | Issue | Area |
|----------|-------|------|
| 1 | Params bug in `/thank-you/[id]` and `/d/[id]` | Build |
| 2 | Fake OTP text visible to users | Trust |
| 3 | In-memory store | Data integrity |
| 4 | Real SMS / bid notifications | Core value |
| 5 | No progress persistence (session save) | Seller UX |
| 6 | No bid tracking page for seller | Seller UX |
| 7 | Photos hard gate / save-and-continue | Seller UX |
| 8 | Dealer dashboard + auth | Dealer UX |
| 9 | Seller contact gating | Privacy |
| 10 | Required dealer name on bids | Trust |
