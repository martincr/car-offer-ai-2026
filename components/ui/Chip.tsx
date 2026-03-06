import { cn } from '@/lib/cn';
import type { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { selected?: boolean };

export function Chip({ selected, className, ...props }: Props) {
  return (
    <button
      className={cn(
        'h-10 rounded-2xl border px-4 text-sm transition',
        selected
          ? 'border-zinc-900 bg-zinc-900 text-white'
          : 'border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50',
        className
      )}
      {...props}
    />
  );
}
