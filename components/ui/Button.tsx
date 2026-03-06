import { cn } from '@/lib/cn';
import type { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
};

export function Button({ className, variant = 'primary', size = 'md', ...props }: Props) {
  const base =
    'inline-flex items-center justify-center rounded-2xl font-medium transition active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed';
  const variants: Record<NonNullable<Props['variant']>, string> = {
    primary: 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-card',
    secondary: 'bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50',
    ghost: 'bg-transparent text-zinc-700 hover:bg-zinc-100',
  };
  const sizes: Record<NonNullable<Props['size']>, string> = {
    md: 'h-11 px-4 text-sm',
    lg: 'h-14 px-5 text-base',
  };

  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}
