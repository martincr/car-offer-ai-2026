import { getLead } from '@/lib/store';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { DealerBidPanel } from '@/components/dealer/DealerBidPanel';

export default function Page({ params }: { params: { id: string } }) {
  const lead = getLead(params.id);

  if (!lead) {
    return (
      <main className="mx-auto max-w-md px-4 pb-10 pt-10">
        <Card className="p-5">
          <div className="text-lg font-semibold text-zinc-900">Lead not found</div>
          <div className="mt-1 text-sm text-zinc-600">
            This link may be expired (prototype store resets on restart).
          </div>
          <div className="mt-4">
            <Link className="underline underline-offset-2 text-sm text-zinc-700" href="/dealers">
              Go to dealer signup
            </Link>
          </div>
        </Card>
      </main>
    );
  }

  const d = lead.data;
  const carTitle =
    `${d.vehicle?.year ?? '—'} ${d.vehicle?.make ?? ''} ${d.vehicle?.model ?? ''}`.trim();

  return (
    <main className="mx-auto max-w-md px-4 pb-10 pt-6">
      <div className="mb-4">
        <div className="text-xs text-zinc-500">Dealer view</div>
        <div className="text-2xl font-semibold tracking-tight text-zinc-900">{carTitle}</div>
        <div className="mt-1 text-sm text-zinc-600">{d.vehicle?.trim ? d.vehicle.trim : ''}</div>
      </div>

      <Card className="p-5">
        <div className="text-sm font-medium text-zinc-900">Key info</div>

        <div className="mt-3 grid gap-2 text-sm">
          <div className="flex items-start justify-between gap-3">
            <div className="text-zinc-500">VIN</div>
            <div className="font-mono text-zinc-900">{d.vin}</div>
          </div>
          <div className="flex items-start justify-between gap-3">
            <div className="text-zinc-500">Mileage</div>
            <div className="text-zinc-900">{d.mileage ?? '—'}</div>
          </div>
          <div className="flex items-start justify-between gap-3">
            <div className="text-zinc-500">ZIP</div>
            <div className="text-zinc-900">{d.location?.zip ?? '—'}</div>
          </div>

          <div className="flex items-start justify-between gap-3">
            <div className="text-zinc-500">Condition</div>
            <div className="text-zinc-900">{d.condition ?? '—'}</div>
          </div>

          <div className="flex items-start justify-between gap-3">
            <div className="text-zinc-500">Accidents</div>
            <div className="text-zinc-900">{d.accidents ?? '—'}</div>
          </div>

          <div className="flex items-start justify-between gap-3">
            <div className="text-zinc-500">Title in hand</div>
            <div className="text-zinc-900">{d.title?.titleInHand ?? '—'}</div>
          </div>

          {d.title?.titleInHand === 'No' ? (
            <>
              <div className="flex items-start justify-between gap-3">
                <div className="text-zinc-500">Loan</div>
                <div className="text-zinc-900">{d.title?.hasLoan ?? '—'}</div>
              </div>
              {d.title?.hasLoan === 'Yes' ? (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-zinc-500">Lienholder</div>
                    <div className="text-zinc-900">{d.title?.lienholder ?? '—'}</div>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-zinc-500">Payoff</div>
                    <div className="text-zinc-900">{d.title?.payoffAmount ?? '—'}</div>
                  </div>
                </>
              ) : null}
            </>
          ) : null}

          {(d.existingOffer?.source ?? 'None') !== 'None' ? (
            <>
              <div className="mt-2 border-t border-zinc-200/70 pt-3 text-sm font-medium text-zinc-900">
                Existing offer
              </div>
              <div className="flex items-start justify-between gap-3">
                <div className="text-zinc-500">Source</div>
                <div className="text-zinc-900">{d.existingOffer?.source}</div>
              </div>
              <div className="flex items-start justify-between gap-3">
                <div className="text-zinc-500">Amount</div>
                <div className="text-zinc-900">{d.existingOffer?.amount ?? '—'}</div>
              </div>
              <div className="flex items-start justify-between gap-3">
                <div className="text-zinc-500">Expires</div>
                <div className="text-zinc-900">{d.existingOffer?.expires ?? '—'}</div>
              </div>

              <div className="mt-2 text-xs text-zinc-500">
                Dealers should verify. Do not accept edited screenshots.
              </div>

              {d.existingOffer?.files?.length ? (
                <div className="mt-3 grid gap-2">
                  {d.existingOffer.files.map((f, idx) => (
                    <a
                      key={idx}
                      href={f}
                      download={`offer_${idx + 1}`}
                      className="rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 hover:bg-zinc-50"
                    >
                      Download offer file {idx + 1}
                    </a>
                  ))}
                </div>
              ) : null}
            </>
          ) : null}

          {d.notes ? (
            <>
              <div className="mt-2 border-t border-zinc-200/70 pt-3 text-sm font-medium text-zinc-900">
                Notes
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700">
                {d.notes}
              </div>
            </>
          ) : null}
        </div>
      </Card>

      <div className="mt-4">
        <Card className="p-5">
          <div className="text-sm font-medium text-zinc-900">Photos</div>
          {d.photos?.length ? (
            <div className="mt-3 grid grid-cols-2 gap-2">
              {d.photos.map((src, idx) => (
                <a
                  key={idx}
                  href={src}
                  target="_blank"
                  rel="noreferrer"
                  className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Photo ${idx + 1}`} className="h-40 w-full object-cover" />
                </a>
              ))}
            </div>
          ) : (
            <div className="mt-2 text-sm text-zinc-500">No photos uploaded.</div>
          )}
        </Card>
      </div>

      <div className="mt-4">
        <Card className="p-5">
          <div className="text-sm font-medium text-zinc-900">Seller contact</div>
          <div className="mt-2 text-sm text-zinc-700">
            <div className="font-medium text-zinc-900">{d.contact.name ?? '—'}</div>
            <div className="mt-1">{d.contact.phone ?? '—'}</div>
            {d.contact.email ? <div className="mt-1">{d.contact.email}</div> : null}
          </div>

          <div className="mt-4 flex gap-2">
            {d.contact.phone ? (
              <a
                className="flex-1 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-center text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                href={`sms:${encodeURIComponent(d.contact.phone)}?&body=${encodeURIComponent(
                  `Hey ${d.contact.name ?? ''} — saw your ${carTitle} on Car Offer AI. I can offer $____ cash. When can you talk?`
                )}`}
              >
                Text seller
              </a>
            ) : null}
            {d.contact.email ? (
              <a
                className="flex-1 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-center text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                href={`mailto:${encodeURIComponent(d.contact.email)}?subject=${encodeURIComponent('Car Offer AI — cash offer')}`}
              >
                Email
              </a>
            ) : null}
          </div>

          <div className="mt-3 text-xs text-zinc-500">
            Note: seller contact is shared to enable fast deals. Handle responsibly.
          </div>
        </Card>
      </div>

      <div className="mt-4">
        <DealerBidPanel leadId={lead.id} />
      </div>

      {lead.bids.length ? (
        <div className="mt-4">
          <Card className="p-5">
            <div className="text-sm font-medium text-zinc-900">Bids / actions (prototype)</div>
            <div className="mt-3 space-y-2 text-sm text-zinc-700">
              {lead.bids.map(b => (
                <div key={b.id} className="rounded-2xl border border-zinc-200 bg-white p-3">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">
                      {b.action === 'pass' ? 'Pass' : `Bid: $${b.amount}`}
                    </div>
                    <div className="text-xs text-zinc-500">
                      {new Date(b.createdAt).toLocaleString()}
                    </div>
                  </div>
                  {b.message ? <div className="mt-1 text-sm text-zinc-600">{b.message}</div> : null}
                </div>
              ))}
            </div>
          </Card>
        </div>
      ) : null}
    </main>
  );
}
