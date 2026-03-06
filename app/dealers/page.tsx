import { DealerSignupForm } from '@/components/dealer/DealerSignupForm';

export default function Page() {
  return (
    <main className="mx-auto max-w-md px-4 pb-10 pt-8">
      <div className="text-center">
        <div className="text-3xl font-semibold tracking-tight text-zinc-900">Get first access to motivated sellers in your area.</div>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          Motivated sellers submit their car details. You get notified, review the lead on your phone, and bid — or pass. No cold calls, no lot traffic.
        </p>
      </div>

      <div className="mt-6">
        <DealerSignupForm />
      </div>

    </main>
  );
}
