import Link from 'next/link';
import { getLead } from '@/lib/store';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function Page({ params }: { params: { id: string } }) {
  const lead = getLead(params.id);

  return (
    <main className="mx-auto max-w-md px-4 pb-10 pt-10">
      <Card className="p-5">
        <div className="text-2xl font-semibold tracking-tight text-zinc-900">You’re in.</div>
        <div className="mt-2 text-sm leading-relaxed text-zinc-600">
          We sent your car to dealers who buy cars like this. You’ll get texts as bids come in.
        </div>

        {lead ? (
          <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700">
            <div className="text-xs text-zinc-500">Submitted</div>
            <div className="mt-1 font-medium text-zinc-900">
              {lead.data.vehicle?.year ?? '—'} {lead.data.vehicle?.make ?? ''}{' '}
              {lead.data.vehicle?.model ?? ''}{' '}
              {lead.data.vehicle?.trim ? `(${lead.data.vehicle.trim})` : ''}
            </div>
            <div className="mt-1 text-xs text-zinc-500">VIN</div>
            <div className="mt-0.5 font-mono text-xs text-zinc-900">{lead.data.vin}</div>
          </div>
        ) : (
          <div className="mt-4 text-sm text-zinc-600">
            (Prototype note: lead data may reset on restart.)
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3">
          <Link href="/sell">
            <Button size="lg" className="w-full">
              Submit another car
            </Button>
          </Link>

          <Link href="/">
            <Button size="lg" variant="secondary" className="w-full">
              Back home
            </Button>
          </Link>
        </div>

        {lead ? (
          <details className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <summary className="cursor-pointer text-sm font-medium text-zinc-900">
              Developer demo link (dealer view)
            </summary>
            <div className="mt-2 text-sm text-zinc-700">
              Open:{' '}
              <Link className="underline underline-offset-2" href={`/d/${lead.id}`}>
                /d/{lead.id}
              </Link>
            </div>
            <div className="mt-2 text-xs text-zinc-500">
              In production this link is what dealers receive via text.
            </div>
          </details>
        ) : null}
      </Card>
    </main>
  );
}
