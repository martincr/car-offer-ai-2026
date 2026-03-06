'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

type Props = {
  name: string;
  phone?: string;
  email?: string;
  carTitle: string;
};

export function SellerContactReveal({ name, phone, email, carTitle }: Props) {
  const [revealed, setRevealed] = useState(false);

  if (!revealed) {
    return (
      <div>
        <div className="text-sm text-zinc-500">
          Contact details are shown after you commit to bidding or passing.
        </div>
        <div className="mt-3">
          <Button variant="secondary" onClick={() => setRevealed(true)}>
            Reveal contact info
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-sm text-zinc-700">
        <div className="font-medium text-zinc-900">{name}</div>
        {phone ? <div className="mt-1">{phone}</div> : null}
        {email ? <div className="mt-1">{email}</div> : null}
      </div>

      <div className="mt-4 flex gap-2">
        {phone ? (
          <a
            className="flex-1 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-center text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            href={`sms:${encodeURIComponent(phone)}?&body=${encodeURIComponent(
              `Hey ${name} — saw your ${carTitle} on Car Offer AI. I can offer $____ cash. When can you talk?`
            )}`}
          >
            Text seller
          </a>
        ) : null}
        {email ? (
          <a
            className="flex-1 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-center text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            href={`mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent('Car Offer AI — cash offer')}`}
          >
            Email
          </a>
        ) : null}
      </div>

      <div className="mt-3 text-xs text-zinc-500">
        Handle responsibly.
      </div>
    </div>
  );
}
