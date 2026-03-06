import { cn } from '@/lib/cn';
import type { TextareaHTMLAttributes } from 'react';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  hint?: string;
};

export function Textarea({ className, label, hint, ...props }: Props) {
  return (
    <label className="block">
      {label ? <div className="mb-1.5 text-sm font-medium text-zinc-900">{label}</div> : null}
      <textarea
        className={cn(
          'min-h-[120px] w-full resize-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-base outline-none transition focus:border-zinc-400',
          className
        )}
        {...props}
      />
      {hint ? <div className="mt-1.5 text-xs text-zinc-500">{hint}</div> : null}
    </label>
  );
}
