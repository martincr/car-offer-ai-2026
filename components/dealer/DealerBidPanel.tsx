'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Textarea } from '@/components/ui/Textarea';

export function DealerBidPanel({ leadId }: { leadId: string }) {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [dealerName, setDealerName] = useState('');
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  async function send(action: 'bid' | 'pass') {
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch(`/api/leads/${encodeURIComponent(leadId)}/bid`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, amount, message, dealerName }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error ?? 'Failed');

      setStatus({
        ok: true,
        text: action === 'pass' ? 'Marked as pass.' : 'Bid sent (prototype).',
      });

      if (action === 'pass') {
        setMessage('');
        setAmount('');
      }
    } catch (e: any) {
      setStatus({ ok: false, text: e?.message ?? 'Something went wrong.' });
    } finally {
      setLoading(false);
    }
  }

  const canBid = amount.trim().length > 0 && !loading;

  return (
    <Card className="p-5">
      <div className="text-lg font-semibold text-zinc-900">Bid or pass</div>
      <div className="mt-1 text-sm text-zinc-600">One tap. Keep it moving.</div>

      <div className="mt-4 grid gap-3">
        <Input
          label="Dealer name (optional)"
          placeholder="ABC Motors"
          value={dealerName}
          onChange={e => setDealerName(e.target.value)}
        />
        <Input
          label="Your cash offer"
          placeholder="e.g. 26,500"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          inputMode="numeric"
        />
        <Textarea
          label="Message to seller (optional)"
          placeholder="Pickup timing, inspection, etc."
          value={message}
          onChange={e => setMessage(e.target.value)}
        />

        <div className="flex gap-2">
          <Button className="flex-1" size="lg" disabled={!canBid} onClick={() => send('bid')}>
            {loading ? 'Sending…' : 'Send bid'}
          </Button>
          <Button
            variant="secondary"
            className="flex-1"
            size="lg"
            disabled={loading}
            onClick={() => send('pass')}
          >
            Pass
          </Button>
        </div>

        {status ? (
          <div
            className={`rounded-2xl border p-4 text-sm ${status.ok ? 'border-zinc-200 bg-zinc-50 text-zinc-700' : 'border-red-200 bg-red-50 text-red-700'}`}
          >
            {status.text}
          </div>
        ) : null}

        <div className="text-xs text-zinc-500">
          In production this would notify the seller via text. This is a UI prototype.
        </div>
      </div>
    </Card>
  );
}
