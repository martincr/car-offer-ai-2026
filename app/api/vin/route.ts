import { NextResponse } from 'next/server';

function cleanVin(input: string) {
  return input.toUpperCase().replace(/\s+/g, '');
}

function isVinLike(vin: string) {
  return /^[A-HJ-NPR-Z0-9]{11,17}$/.test(vin);
}

function normalizeValue(v: any) {
  const s = String(v ?? '').trim();
  if (!s || s === '0' || /not applicable/i.test(s) || /null/i.test(s)) return '';
  return s;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const vinRaw = searchParams.get('vin') ?? '';
  const vin = cleanVin(vinRaw);

  if (!vin) {
    return NextResponse.json({ error: 'VIN is required' }, { status: 400 });
  }
  if (!isVinLike(vin)) {
    return NextResponse.json({ error: 'Invalid VIN format' }, { status: 400 });
  }

  const url = `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValuesExtended/${encodeURIComponent(vin)}?format=json`;

  try {
    const res = await fetch(url, { next: { revalidate: 60 * 60 } });
    if (!res.ok) {
      return NextResponse.json({ error: 'VIN decode failed' }, { status: 502 });
    }
    const json = await res.json();
    const r = json?.Results?.[0] ?? {};

    const vehicle = {
      year: normalizeValue(r.ModelYear),
      make: normalizeValue(r.Make),
      model: normalizeValue(r.Model),
      trim: normalizeValue(r.Trim) || normalizeValue(r.Series),
    };

    return NextResponse.json({ vin, vehicle });
  } catch {
    return NextResponse.json({ error: 'VIN decode error' }, { status: 502 });
  }
}
