# Car Offer AI (prototype UI)

Mobile-first, grayscale UI for:
- Sellers: enter VIN → answer quick questions → upload photos → submit for dealer bids
- Dealers: simple signup form + lead view page (bid / pass)

This repo is intentionally lean. The “backend” is an in-memory store (good for UI prototyping; not production).

## Quick start

```bash
npm install
npm run dev
```

Open:
- Seller flow: http://localhost:3000/
- Dealer signup: http://localhost:3000/dealers
- Dealer lead view (after submitting a seller lead): the thank-you page shows a demo link like `/d/{id}`.

## What’s included (MVP fields)
Required / important dealer fields captured:
- VIN (required) + decoded basics (year/make/model/trim)
- Seller name + phone (OTP UI)
- Location (ZIP) + mileage
- Title in hand vs loan → lienholder bank + payoff amount (optional)
- Condition + accident flag + notes
- Photos (multi-upload)
- Existing Carvana / CarMax offer (optional) + upload + “don’t edit screenshots” warning

## Notes
- VIN decoding uses the public NHTSA vPIC API via `/api/vin`.
- SMS/email verification is UI-only placeholder (no real SMS sent).
- Lead storage is in-memory (resets on server restart).

## Footer copy
Per request:
> from the guy who made ONLY USED TESLA — adam Qureshi , QURESHI MEDIA LLC . Small softwware movement. Independent.

(Spelling kept as provided.)

