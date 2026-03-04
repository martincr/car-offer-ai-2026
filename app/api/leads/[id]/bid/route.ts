import { NextResponse } from "next/server";
import { addBid, getLead } from "@/lib/store";

function id(prefix: string) {
  return `${prefix}_${Math.random().toString(36).slice(2, 8)}${Date.now().toString(36).slice(4)}`;
}

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const lead = getLead(params.id);
  if (!lead) return NextResponse.json({ error: "Lead not found" }, { status: 404 });

  let body: any = null;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const action: "bid" | "pass" = body?.action === "pass" ? "pass" : "bid";
  const amount = String(body?.amount ?? "").trim();
  const message = String(body?.message ?? "").trim();
  const dealerName = String(body?.dealerName ?? "").trim();

  if (action === "bid" && !amount) {
    return NextResponse.json({ error: "Bid amount is required" }, { status: 400 });
  }

  const bid = {
    id: id("bid"),
    createdAt: new Date().toISOString(),
    action,
    amount: amount || "0",
    message: message || undefined,
    dealerName: dealerName || undefined
  };

  const updated = addBid(params.id, bid);
  if (!updated) return NextResponse.json({ error: "Failed to add bid" }, { status: 500 });

  return NextResponse.json({ ok: true });
}
