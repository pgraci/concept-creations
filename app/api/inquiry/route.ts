import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE } from "@/lib/content";

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

const SCOPE_LABELS: Record<string, string> = {
  single: "One video",
  multiple: "Multiple videos",
  ugc: "UGC content",
  social: "Full social management",
};

// Recipient and sender are configurable so the studio can change them without a
// code change. `from` must be on a domain verified in Resend; until the studio's
// domain is verified, set INQUIRY_FROM to "onboarding@resend.dev" in Vercel.
const TO = process.env.INQUIRY_TO || SITE.email;
const FROM = process.env.INQUIRY_FROM || `${SITE.name} <inquiries@conceptcreations.ltd>`;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );

export async function POST(req: Request) {
  let body: Inquiry;
  try {
    body = (await req.json()) as Inquiry;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  if (!name || !email) {
    return NextResponse.json({ ok: false, error: "Name and email are required" }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[Concept Creations] RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, error: "Email is not configured" },
      { status: 500 }
    );
  }

  const isCall = body.intent === "call";
  const scopeLabel = body.scope ? SCOPE_LABELS[body.scope] ?? body.scope : "—";

  const rows: [string, string | undefined][] = [
    ["Type", isCall ? "Consultation call" : "Quote request"],
    ["Name", name],
    ["Email", email],
    ["Brand / company", body.brand],
    ["Social accounts", body.socials],
    ["Looking for", scopeLabel],
  ];
  if (isCall) {
    rows.push(["Preferred date", body.date]);
    rows.push(["Preferred time", body.timePreference]);
  }
  rows.push(["Brief", body.brief]);

  const tableRows = rows
    .filter(([, v]) => v && v.trim())
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:8px 16px 8px 0;color:#8a8478;font-size:13px;white-space:nowrap;vertical-align:top;">${esc(
            label
          )}</td>
          <td style="padding:8px 0;color:#1a1a1a;font-size:14px;">${esc(value!).replace(
            /\n/g,
            "<br/>"
          )}</td>
        </tr>`
    )
    .join("");

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="font-size:18px;color:#1a1a1a;margin:0 0 4px;">
        New ${isCall ? "consultation request" : "quote request"}
      </h2>
      <p style="color:#8a8478;font-size:13px;margin:0 0 20px;">via conceptcreations.ltd</p>
      <table style="border-collapse:collapse;width:100%;">${tableRows}</table>
    </div>
  `;

  const text = rows
    .filter(([, v]) => v && v.trim())
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `${isCall ? "Consultation" : "Quote"} request — ${name}${
        body.brand ? ` (${body.brand})` : ""
      }`,
      html,
      text,
    });

    if (error) {
      console.error("[Concept Creations] Resend error:", error);
      return NextResponse.json({ ok: false, error: "Could not send" }, { status: 502 });
    }
  } catch (err) {
    console.error("[Concept Creations] Resend threw:", err);
    return NextResponse.json({ ok: false, error: "Could not send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
