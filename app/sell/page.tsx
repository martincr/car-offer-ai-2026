import { SellFlow } from '@/components/SellFlow';

export default function Page({ searchParams }: { searchParams: { vin?: string } }) {
  return (
    <main className="mx-auto max-w-md px-4 pb-28 pt-6">
      <SellFlow initialVin={searchParams.vin ?? ''} />
    </main>
  );
}
