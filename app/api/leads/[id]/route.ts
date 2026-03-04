import { NextResponse } from "next/server";
import { getLead } from "@/lib/store";

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const lead = getLead(params.id);
  if (!lead) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ lead });
}
