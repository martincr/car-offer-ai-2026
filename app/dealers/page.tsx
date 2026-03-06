import { DealerSignupForm } from '@/components/dealer/DealerSignupForm';

export default function Page() {
  return (
    <main className="mx-auto max-w-md px-4 pb-10 pt-8">
      <div className="text-center">
        <div className="text-3xl font-semibold tracking-tight text-zinc-900">Dealer access</div>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          Get real seller leads. View on your phone. Bid or pass.
        </p>
      </div>

      <div className="mt-6">
        <DealerSignupForm />
      </div>

      <div className="mt-8 text-xs text-zinc-500">
        Price: <span className="font-medium text-zinc-800">$500 buyer access fee</span> to activate.
      </div>
    </main>
  );
}
