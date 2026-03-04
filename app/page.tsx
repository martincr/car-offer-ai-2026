import Link from "next/link";
import { StartCard } from "@/components/StartCard";

export default function Page() {
  return (
    <main className="mx-auto max-w-md px-4 pb-10 pt-8">
      <div className="text-center">
        <div className="text-4xl font-semibold tracking-tight text-zinc-900">Cash offers. Real dealers.</div>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          Enter your VIN, answer a few quick questions, and dealers bid for your car.
        </p>
      </div>

      <div className="mt-6">
        <StartCard />
      </div>

      <div className="mt-6 text-center text-xs text-zinc-500">
        Dealer? <Link className="underline underline-offset-2" href="/dealers">Sign up here</Link>.
      </div>
    </main>
  );
}
