'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export function DealerSignupForm() {
  const [dealershipName, setDealershipName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [cityState, setCityState] = useState('');
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState<{ ok: boolean; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit() {
    setLoading(true);
    setSubmitted(null);
    try {
      const res = await fetch('/api/dealers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dealershipName, contactName, phone, email, cityState }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error ?? 'Failed to submit');

      setSubmitted({
        ok: true,
        message:
          "You’re in line. We’ll text you a payment link — once confirmed, you’ll start receiving leads immediately.",
      });
    } catch (e: any) {
      setSubmitted({ ok: false, message: e?.message ?? 'Something went wrong.' });
    } finally {
      setLoading(false);
    }
  }

  const can =
    dealershipName.trim() &&
    contactName.trim() &&
    phone.trim() &&
    email.trim() &&
    agree &&
    !loading;

  return (
    <Card className="p-5">
      <div className="text-lg font-semibold text-zinc-900">Get access to local seller leads</div>
      <div className="mt-1 text-sm text-zinc-600">Fill out the form and we'll send you a payment link to activate your account.</div>

      <div className="mt-4 grid gap-3">
        <Input
          label="Dealership name"
          placeholder="Acme Autos"
          value={dealershipName}
          onChange={e => setDealershipName(e.target.value)}
        />
        <Input
          label="Contact name"
          placeholder="Buyer / manager"
          value={contactName}
          onChange={e => setContactName(e.target.value)}
        />
        <Input
          label="Mobile phone"
          placeholder="(555) 555-5555"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          inputMode="tel"
        />
        <Input
          label="Email"
          placeholder="you@dealership.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          inputMode="email"
        />
        <Input
          label="City, State (optional)"
          placeholder="Austin, TX"
          value={cityState}
          onChange={e => setCityState(e.target.value)}
        />

        <label className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4 text-sm">
          <input
            type="checkbox"
            className="mt-1"
            checked={agree}
            onChange={e => setAgree(e.target.checked)}
          />
          <span className="text-zinc-700">
            I agree to pay the{' '}
            <span className="font-medium text-zinc-900">one-time $500 buyer access fee</span> to activate.
          </span>
        </label>

        <Button size="lg" disabled={!can} onClick={submit}>
          {loading ? 'Sending…' : 'Request access'}
        </Button>

        {submitted ? (
          <div
            className={`rounded-2xl border p-4 text-sm ${submitted.ok ? 'border-zinc-200 bg-zinc-50 text-zinc-700' : 'border-red-200 bg-red-50 text-red-700'}`}
          >
            {submitted.message}
          </div>
        ) : null}

        <div className="text-xs text-zinc-500">
          One-time fee. No monthly subscription. Cancel anytime.
        </div>
      </div>
    </Card>
  );
}
