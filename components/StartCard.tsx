'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { cleanVin, isValidVin } from '@/lib/validators';

export function StartCard() {
  const router = useRouter();
  const [vin, setVin] = useState('');
  const [touched, setTouched] = useState(false);

  const vinClean = useMemo(() => cleanVin(vin), [vin]);
  const vinOk = useMemo(() => (vinClean.length === 0 ? false : isValidVin(vinClean)), [vinClean]);

  const error =
    touched && vinClean.length > 0 && !vinOk
      ? 'VIN should be 17 characters (letters & numbers). No I/O/Q.'
      : undefined;

  return (
    <Card className="p-5">
      <div className="text-sm font-medium text-zinc-900">Start with your VIN</div>
      <div className="mt-1 text-xs text-zinc-500">
        This is required so dealers can verify your exact car.
      </div>

      <div className="mt-4">
        <Input
          label="VIN"
          placeholder="e.g. 5YJ3E1EA7KF317XXX"
          value={vin}
          onChange={e => setVin(e.target.value)}
          onBlur={() => setTouched(true)}
          autoCapitalize="characters"
          autoCorrect="off"
          spellCheck={false}
          inputMode="text"
          error={error}
        />
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <Button
          size="lg"
          disabled={!vinOk}
          onClick={() => router.push(`/sell?vin=${encodeURIComponent(vinClean)}`)}
        >
          Get my cash offer
        </Button>

        <Button variant="secondary" size="lg" onClick={() => router.push('/dealers')}>
          I&apos;m a dealer
        </Button>

        <div className="text-xs text-zinc-500">No pressure. No spam. Takes ~2 minutes.</div>
      </div>
    </Card>
  );
}
