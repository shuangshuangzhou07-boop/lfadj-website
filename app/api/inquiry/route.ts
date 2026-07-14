import { NextResponse } from "next/server";

export const runtime = "nodejs";

const LF955_PRODUCT = "LF955 Diesel Mobile Light Tower";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type InquiryPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  country?: unknown;
  projectType?: unknown;
  quantity?: unknown;
  requirements?: unknown;
  product?: unknown;
};

function readText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Content-Type must be application/json." }, { status: 415 });
  }

  let payload: InquiryPayload;

  try {
    payload = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const name = singleLine(readText(payload.name, 120));
  const company = singleLine(readText(payload.company, 160));
  const email = singleLine(readText(payload.email, 254)).toLowerCase();
  const country = singleLine(readText(payload.country, 120));
  const projectType = singleLine(readText(payload.projectType, 160));
  const requirements = readText(payload.requirements, 5000);
  const product = singleLine(readText(payload.product, 160));
  const quantityText = singleLine(readText(payload.quantity, 12));
  const quantity = Number(quantityText);

  const missingFields = [
    ["name", name],
    ["email", email],
    ["country", country],
    ["projectType", projectType],
    ["quantity", quantityText],
    ["requirements", requirements],
    ["product", product],
  ].filter(([, value]) => !value).map(([field]) => field);

  if (missingFields.length > 0) {
    return NextResponse.json(
      { error: `Missing required fields: ${missingFields.join(", ")}.` },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 100000) {
    return NextResponse.json({ error: "Quantity must be a positive whole number." }, { status: 400 });
  }

  if (product !== LF955_PRODUCT) {
    return NextResponse.json({ error: "Unsupported product inquiry." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const inquiryEmail = process.env.INQUIRY_EMAIL;
  const fromEmail = process.env.INQUIRY_FROM_EMAIL;

  if (!resendApiKey || !inquiryEmail || !fromEmail) {
    console.error("Inquiry email service is not configured.");
    return NextResponse.json({ error: "Inquiry service is temporarily unavailable." }, { status: 503 });
  }

  const recipients = inquiryEmail.split(",").map((item) => item.trim()).filter(Boolean);

  if (recipients.length === 0 || recipients.some((recipient) => !EMAIL_PATTERN.test(recipient))) {
    console.error("INQUIRY_EMAIL contains an invalid recipient address.");
    return NextResponse.json({ error: "Inquiry service is temporarily unavailable." }, { status: 503 });
  }

  const emailText = [
    "New LF955 product inquiry",
    "",
    `Product: ${product}`,
    `Name: ${name}`,
    `Company: ${company || "Not provided"}`,
    `Email: ${email}`,
    `Country: ${country}`,
    `Project type: ${projectType}`,
    `Quantity: ${quantity}`,
    "",
    "Requirements:",
    requirements,
  ].join("\n");

  try {
    const deliveryResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: recipients,
        reply_to: email,
        subject: `New LF955 inquiry from ${name} (${country})`,
        text: emailText,
      }),
      cache: "no-store",
    });

    if (!deliveryResponse.ok) {
      console.error("Inquiry email delivery failed with status:", deliveryResponse.status);
      return NextResponse.json({ error: "Unable to deliver the inquiry." }, { status: 502 });
    }

    const delivery = (await deliveryResponse.json()) as { id?: string };

    if (!delivery.id) {
      console.error("Inquiry email provider returned no delivery id.");
      return NextResponse.json({ error: "Unable to confirm inquiry delivery." }, { status: 502 });
    }

    return NextResponse.json({ success: true, inquiryId: delivery.id }, { status: 201 });
  } catch (error) {
    console.error("Inquiry email request failed:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json({ error: "Unable to deliver the inquiry." }, { status: 502 });
  }
}
