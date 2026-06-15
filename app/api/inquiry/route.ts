import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Inquiry = {
  intent?: string;
  name?: string;
  email?: string;
  brand?: string;
  socials?: string;
  scope?: string;
  timePreference?: string;
  date?: string;
  brief?: string;
};

export async function POST(req: Request) {
  let body: Inquiry;
  try {
    body = (await req.json()) as Inquiry;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  if (!body.name || !body.email) {
    return NextResponse.json({ ok: false, error: "Name and email are required" }, { status: 422 });
  }

  // In production, forward this to email / CRM / Slack. For now we log it so the
  // submission is captured server-side and the studio can wire up a provider.
  console.log("[Concept Creations] New inquiry:", {
    intent: body.intent,
    name: body.name,
    email: body.email,
    brand: body.brand,
    socials: body.socials,
    scope: body.scope,
    date: body.date,
    timePreference: body.timePreference,
    brief: body.brief,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
