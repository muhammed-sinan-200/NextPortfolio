const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_SUBJECT = 200;
const MAX_MESSAGE = 5000;

/** Max contact submissions per IP within the window. */
const RATE_LIMIT_MAX = 5;
/** Sliding window length (1 hour). */
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

/**
 * In-memory IP → recent request timestamps.
 * Works per serverless instance; fine for a low-traffic portfolio.
 */
const rateLimitStore = new Map();

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const recent = (rateLimitStore.get(ip) || []).filter((t) => t > windowStart);

  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitStore.set(ip, recent);
    return true;
  }

  recent.push(now);
  rateLimitStore.set(ip, recent);
  return false;
}

function validateContactPayload(body) {
  const errors = [];

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, errors: ["Invalid request body"] };
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name) errors.push("Name is required");
  else if (name.length > MAX_NAME) errors.push("Name is too long");

  if (!email) errors.push("Email is required");
  else if (email.length > MAX_EMAIL || !EMAIL_PATTERN.test(email)) {
    errors.push("A valid email is required");
  }

  if (!subject) errors.push("Subject is required");
  else if (subject.length > MAX_SUBJECT) errors.push("Subject is too long");

  if (!message) errors.push("Message is required");
  else if (message.length > MAX_MESSAGE) errors.push("Message is too long");

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: { name, email, subject, message },
  };
}

export async function POST(request) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return Response.json(
      { ok: false, error: "Failed to send message" },
      { status: 429 }
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  // Honeypot: if filled, pretend success and skip EmailJS so bots get no signal.
  const honeypot =
    typeof body?.website === "string" ? body.website.trim() : body?.website;

  if (honeypot) {
    return Response.json({ ok: true }, { status: 200 });
  }

  const validation = validateContactPayload(body);

  if (!validation.ok) {
    return Response.json(
      { ok: false, error: "Validation failed", details: validation.errors },
      { status: 400 }
    );
  }

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.error("Missing EmailJS environment variables");
    return Response.json(
      { ok: false, error: "Email service is not configured" },
      { status: 500 }
    );
  }

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: validation.data,
  };

  if (privateKey) {
    payload.accessToken = privateKey;
  }

  try {
    const emailjsResponse = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!emailjsResponse.ok) {
      const errorText = await emailjsResponse.text();
      console.error("EmailJS error:", emailjsResponse.status, errorText);
      return Response.json(
        { ok: false, error: "Failed to send message" },
        { status: 502 }
      );
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { ok: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}

export function GET() {
  return Response.json(
    { ok: false, error: "Method not allowed" },
    { status: 405 }
  );
}
