import { NextResponse } from "next/server";
import { createLead, listLeads } from "@/lib/store";
import { LeadDraft } from "@/lib/types";

export async function GET() {
  return NextResponse.json({ leads: listLeads() });
}

export async function POST(req: Request) {
  let body: LeadDraft | null = null;
  try {
    body = (await req.json()) as LeadDraft;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body?.vin) return NextResponse.json({ error: "VIN is required" }, { status: 400 });

  if (!body.contact?.phone || !body.contact?.name) {
    return NextResponse.json({ error: "Name + phone are required" }, { status: 400 });
  }

  const lead = createLead(body);
  return NextResponse.json({ id: lead.id });
}
