import type { Metadata } from 'next';
import './globals.css';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Get Cash Offers for Your Car | Car Offer AI',
  description: 'Sell your car fast. Enter your VIN and get competing cash offers from real local dealers — no haggling, no dealership visits required.',
  openGraph: {
    title: 'Get Cash Offers for Your Car | Car Offer AI',
    description: 'Real dealers compete for your car. See offers in minutes.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <TopBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
