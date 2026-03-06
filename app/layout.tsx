import type { Metadata } from 'next';
import './globals.css';
import { TopBar } from '@/components/TopBar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Car Offer AI',
  description: 'Get a cash offer from real dealers. Fast.',
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
