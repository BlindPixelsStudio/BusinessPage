import type { APIRoute } from "astro";

export const prerender = false;

const RESEND_API_URL = "https://api.resend.com/emails";
const TO_EMAIL = "support@blindpixelsstudio.com";

// Very simple in-memory rate limiting to reduce spam.
// Limits each client IP to a small number of contact submissions
// within a rolling window. This is NOT suitable for multi-instance
// or serverless at scale, but is fine for a small personal site.
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3; // per IP per window
const rateLimitStore = new Map<string, number[]>();

function sanitizeString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  // Basic newline normalization and stripping of dangerous control chars
  return trimmed.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, "").slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  if (!email) return false;
  return /.+@.+\..+/.test(email);
}

export const POST: APIRoute = async ({ request }) => {
  // --- Basic IP-based rate limiting ---
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const now = Date.now();
  const timestamps = rateLimitStore.get(ip) ?? [];
  const recent = timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    console.warn("[contact] Rate limit exceeded for IP", ip);
    return new Response("Too many requests. Please try again in a minute.", {
      status: 429,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  recent.push(now);
  rateLimitStore.set(ip, recent);

  const contentType = request.headers.get("content-type") ?? "";
  let body: Record<string, unknown> = {};

  if (contentType.includes("application/json")) {
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch {
      body = {};
    }
  }

  // If we don't have useful data yet, fall back to parsing form data,
  // but only when the content type supports it to avoid undici errors.
  if (!body.name && !body.email && !body.message) {
    if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      body = Object.fromEntries(formData.entries());
    }
  }

  const name = sanitizeString(body.name, 120);
  const email = sanitizeString(body.email, 254);
  const subject = sanitizeString(body.subject, 200);
  const message = sanitizeString(body.message, 5000);

  if (!name || !subject || !message || !isValidEmail(email)) {
    // For HTML form posts, send a simple 400 with text; JSON callers still get JSON.
    if (contentType.includes("application/json")) {
      return new Response(
        JSON.stringify({ error: "Please provide a name, valid email, subject, and message." }),
        {
          status: 400,
          headers: { "content-type": "application/json" },
        },
      );
    }

    return new Response("Invalid form submission.", {
      status: 400,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  const fromEnv = process.env.CONTACT_FROM_EMAIL;
  const fromAddress = fromEnv && fromEnv.includes("@") ? fromEnv : "onboarding@resend.dev";

  const payload = {
    from: fromAddress,
    to: [TO_EMAIL],
    subject: `[Blind Pixels Studio] ${subject || "New contact from " + name}`,
    reply_to: email,
    text: `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`,
  };

  const apiKey = process.env.RESEND_API_KEY;

  // Diagnostic log to confirm whether the key is visible at runtime.
  console.log("[contact] RESEND_API_KEY present?", Boolean(apiKey));

  if (!apiKey) {
    // In development or misconfigured environments, log the payload and pretend success.
    console.warn("RESEND_API_KEY is not set. Contact form payload:", payload);
    return new Response(null, {
      status: 303,
      headers: { Location: "/contact/sent" },
    });
  }

  try {
    const res = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Resend API error", res.status, text);
      return new Response("Unable to send message right now.", {
        status: 502,
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    return new Response(null, {
      status: 303,
      headers: { Location: "/contact/sent" },
    });
  } catch (err) {
    console.error("Error calling Resend API", err);
    return new Response("Unable to send message right now.", {
      status: 502,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }
};
