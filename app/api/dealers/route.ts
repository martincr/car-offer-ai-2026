import { NextResponse } from 'next/server';
import { createDealerSignup, listDealers } from '@/lib/store';

export async function GET() {
  return NextResponse.json({ dealers: listDealers() });
}

export async function POST(req: Request) {
  let body: any = null;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const dealershipName = String(body?.dealershipName ?? '').trim();
  const contactName = String(body?.contactName ?? '').trim();
  const phone = String(body?.phone ?? '').trim();
  const email = String(body?.email ?? '').trim();
  const cityState = String(body?.cityState ?? '').trim();

  if (!dealershipName || !contactName || !phone || !email) {
    return NextResponse.json(
      { error: 'Dealership name, contact, phone, and email are required' },
      { status: 400 }
    );
  }

  const dealer = createDealerSignup({ dealershipName, contactName, phone, email, cityState });

  return NextResponse.json({ id: dealer.id });
}
