import Link from 'next/link';

export function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight text-zinc-900">
          Car Offer AI
        </Link>
        <nav className="flex items-center gap-3 text-sm text-zinc-600">
          <Link href="/sell" className="hover:text-zinc-900">
            Sell
          </Link>
          <Link href="/dealers" className="hover:text-zinc-900">
            Dealers
          </Link>
        </nav>
      </div>
    </header>
  );
}
