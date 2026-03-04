import { cn } from "@/lib/cn";
import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
};

export function Input({ className, label, hint, error, ...props }: Props) {
  return (
    <label className="block">
      {label ? <div className="mb-1.5 text-sm font-medium text-zinc-900">{label}</div> : null}
      <input
        className={cn(
          "h-14 w-full rounded-2xl border bg-white px-4 text-base outline-none transition",
          error ? "border-red-300 focus:border-red-400" : "border-zinc-200 focus:border-zinc-400",
          className
        )}
        {...props}
      />
      {error ? <div className="mt-1.5 text-xs text-red-600">{error}</div> : null}
      {!error && hint ? <div className="mt-1.5 text-xs text-zinc-500">{hint}</div> : null}
    </label>
  );
}
