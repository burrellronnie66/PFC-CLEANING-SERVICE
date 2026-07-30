import { NextResponse } from "next/server";
import { getService, site } from "@/config/site";

/**
 * ============================================================
 * QUOTE FORM DELIVERY — CONFIGURATION AREA
 * ============================================================
 * Choose how quote requests reach you by setting environment
 * variables (in .env.local for local dev, or your host's
 * environment settings in production — e.g. Vercel → Project →
 * Settings → Environment Variables). Never commit secrets.
 *
 *   QUOTE_PROVIDER = "log" | "formspree" | "resend" | "webhook"
 *
 * 1) "log" (default) — no external service yet. Requests are
 *    printed to the server log so the site works out of the box.
 *
 * 2) "formspree" — easiest email delivery, no code changes:
 *      QUOTE_PROVIDER=formspree
 *      QUOTE_FORMSPREE_ID=yourFormId      (from https://formspree.io)
 *
 * 3) "resend" — transactional email via https://resend.com:
 *      QUOTE_PROVIDER=resend
 *      QUOTE_RESEND_API_KEY=re_xxxxxxxx
 *      QUOTE_TO_EMAIL=you@yourdomain.com   (where quotes are sent)
 *      QUOTE_FROM_EMAIL=quotes@pfcservice.net (verified sender domain)
 *
 * 4) "webhook" — pipe leads into GoHighLevel, Zapier, Make, or any
 *    CRM that accepts an inbound webhook / JSON POST:
 *      QUOTE_PROVIDER=webhook
 *      QUOTE_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/...
 * ============================================================
 */

type QuotePayload = {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  propertyType: string;
  service: string;
  frequency: string;
  preferredDate: string;
  propertySize: string;
  bedrooms: string;
  bathrooms: string;
  details: string;
  consent: boolean;
  company: string; // honeypot
};

function isValid(body: QuotePayload): boolean {
  const phoneDigits = body.phone?.replace(/\D/g, "") ?? "";
  return Boolean(
    body.fullName?.trim().length >= 2 &&
      phoneDigits.length >= 10 &&
      phoneDigits.length <= 11 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(body.email ?? "") &&
      body.address?.trim().length >= 4 &&
      body.city?.trim().length >= 2 &&
      /^\d{5}(-\d{4})?$/.test(body.zip?.trim() ?? "") &&
      body.propertyType &&
      body.service &&
      body.frequency &&
      body.consent === true
  );
}

function summarize(body: QuotePayload): Record<string, string> {
  return {
    "Full Name": body.fullName,
    Phone: body.phone,
    Email: body.email,
    "Service Address": body.address,
    City: body.city,
    ZIP: body.zip,
    "Property Type": body.propertyType,
    Service: getService(body.service)?.name ?? body.service,
    Frequency: body.frequency,
    "Preferred Date": body.preferredDate || "No preference",
    "Property Size": body.propertySize || "Not provided",
    Bedrooms: body.bedrooms || "Not provided",
    Bathrooms: body.bathrooms || "Not provided",
    Details: body.details || "None",
  };
}

export async function POST(request: Request) {
  let body: QuotePayload;
  try {
    body = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without delivering them
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  if (!isValid(body)) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 422 }
    );
  }

  const summary = summarize(body);
  const provider = process.env.QUOTE_PROVIDER ?? site.quoteForm.provider;

  try {
    switch (provider) {
      case "formspree": {
        const formId = process.env.QUOTE_FORMSPREE_ID;
        if (!formId) throw new Error("QUOTE_FORMSPREE_ID is not set");
        const res = await fetch(`https://formspree.io/f/${formId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `New quote request — ${summary["Full Name"]} (${summary.Service})`,
            ...summary,
          }),
        });
        if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
        break;
      }

      case "resend": {
        const apiKey = process.env.QUOTE_RESEND_API_KEY;
        const to = process.env.QUOTE_TO_EMAIL;
        const from =
          process.env.QUOTE_FROM_EMAIL ?? "quotes@pfcservice.net";
        if (!apiKey || !to)
          throw new Error("QUOTE_RESEND_API_KEY / QUOTE_TO_EMAIL not set");
        const lines = Object.entries(summary)
          .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:bold">${k}</td><td style="padding:6px 12px">${escapeHtml(v)}</td></tr>`)
          .join("");
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: `${site.name} <${from}>`,
            to: [to],
            reply_to: body.email,
            subject: `New quote request — ${summary["Full Name"]} (${summary.Service})`,
            html: `<h2>New quote request from ${site.domainDisplay}</h2><table border="1" cellspacing="0" style="border-collapse:collapse">${lines}</table>`,
          }),
        });
        if (!res.ok) throw new Error(`Resend responded ${res.status}`);
        break;
      }

      case "webhook": {
        const url = process.env.QUOTE_WEBHOOK_URL;
        if (!url) throw new Error("QUOTE_WEBHOOK_URL is not set");
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ source: site.url, ...body }),
        });
        if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
        break;
      }

      case "log":
      default: {
        // No delivery service configured yet — log so requests are
        // visible in the server output during development/preview.
        console.log("[quote-request]", JSON.stringify(summary, null, 2));
        break;
      }
    }
  } catch (err) {
    console.error("[quote-request] delivery failed:", err);
    return NextResponse.json(
      { error: "Delivery failed. Please call us instead." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
