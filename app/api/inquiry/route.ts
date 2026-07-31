import { NextResponse } from "next/server";

export const runtime = "nodejs";

const LF955_PRODUCT = "LF955 Diesel Mobile Light Tower";
const LF971_PRODUCT = "LF971 Solar Mobile Light Tower";
const GENERAL_INQUIRY_TYPE = "general-project";
const SUPPORTED_PRODUCTS = {
  [LF955_PRODUCT]: { heading: "New LF955 product inquiry", subject: "New LF955 inquiry" },
  [LF971_PRODUCT]: { heading: "New LF971 solar project inquiry", subject: "New LF971 solar inquiry" },
} as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Language = "en" | "zh";
type LocalizedOption = { en: string; zh: string };
type DeliveryMessage = {
  replyTo: string;
  subject: string;
  text: string;
  html?: string;
};

type LegacyInquiryPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  country?: unknown;
  projectType?: unknown;
  quantity?: unknown;
  requirements?: unknown;
  product?: unknown;
};

type GeneralInquiryPayload = {
  inquiryType?: unknown;
  language?: unknown;
  name?: unknown;
  workEmail?: unknown;
  companyName?: unknown;
  countryRegion?: unknown;
  phoneWhatsApp?: unknown;
  application?: unknown;
  estimatedQuantity?: unknown;
  preferredSolution?: unknown;
  projectDescription?: unknown;
  dailyOperatingHours?: unknown;
  ambientTemperature?: unknown;
  altitude?: unknown;
  siteConditions?: unknown;
  fuelAvailability?: unknown;
  lowNoiseRequirement?: unknown;
  externalEquipment?: unknown;
  expectedDeliveryTime?: unknown;
  website?: unknown;
};

type ValidGeneralInquiry = {
  language: Language;
  name: string;
  workEmail: string;
  companyName: string;
  countryRegion: string;
  phoneWhatsApp: string;
  application: string;
  estimatedQuantity: number;
  preferredSolution: string;
  projectDescription: string;
  dailyOperatingHours: string;
  ambientTemperature: string;
  altitude: string;
  siteConditions: string[];
  fuelAvailability: string;
  lowNoiseRequirement: string;
  externalEquipment: string[];
  expectedDeliveryTime: string;
};

type ValidationResult<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

const APPLICATION_LABELS = {
  construction: { en: "Construction", zh: "建筑施工" },
  mining: { en: "Mining", zh: "矿山" },
  "oil-gas": { en: "Oil & Gas", zh: "油气工程" },
  "equipment-rental": { en: "Equipment Rental", zh: "设备租赁" },
  "emergency-lighting": { en: "Emergency Lighting", zh: "应急照明" },
  "road-safety": { en: "Road Safety", zh: "道路安全" },
  "temporary-monitoring": { en: "Temporary Monitoring", zh: "临时监控" },
  other: { en: "Other", zh: "其他" },
} satisfies Record<string, LocalizedOption>;

const PREFERRED_SOLUTION_LABELS = {
  "diesel-light-tower": { en: "Diesel Mobile Light Tower", zh: "柴油移动照明灯塔" },
  "solar-light-tower": { en: "Solar Mobile Light Tower", zh: "太阳能移动照明灯塔" },
  "solar-surveillance-trailer": {
    en: "Solar Surveillance Trailer",
    zh: "太阳能监控拖车",
  },
  "recommendation-needed": { en: "Recommendation Needed", zh: "需要配置建议" },
} satisfies Record<string, LocalizedOption>;

const DAILY_OPERATING_HOURS_LABELS = {
  "less-than-8": { en: "Less Than 8 Hours", zh: "少于 8 小时" },
  "8-to-12": { en: "8–12 Hours", zh: "8–12 小时" },
  "12-to-24": { en: "12–24 Hours", zh: "12–24 小时" },
  continuous: { en: "Continuous Operation", zh: "连续运行" },
  "not-sure": { en: "Not Sure", zh: "不确定" },
} satisfies Record<string, LocalizedOption>;

const AMBIENT_TEMPERATURE_LABELS = {
  standard: { en: "Standard Conditions", zh: "普通环境" },
  "above-40": { en: "High Temperature Above 40°C", zh: "40°C 以上高温" },
  "low-temperature": { en: "Low-Temperature Conditions", zh: "低温环境" },
  "not-sure": { en: "Not Sure", zh: "不确定" },
} satisfies Record<string, LocalizedOption>;

const ALTITUDE_LABELS = {
  "below-1000": { en: "Below 1,000 m", zh: "低于 1000 米" },
  "1000-to-2000": { en: "1,000–2,000 m", zh: "1000–2000 米" },
  "above-2000": { en: "Above 2,000 m", zh: "2000 米以上" },
  "not-sure": { en: "Not Sure", zh: "不确定" },
} satisfies Record<string, LocalizedOption>;

const SITE_CONDITION_LABELS = {
  "dust-sand": { en: "Dust and Sand", zh: "沙尘" },
  "coastal-salt-spray": { en: "Coastal Salt Spray", zh: "沿海盐雾" },
  "strong-winds": { en: "Strong Winds", zh: "强风" },
  "humid-rainy": { en: "Humid or Rainy", zh: "潮湿多雨" },
  "rough-road-transport": {
    en: "Rough Road or Difficult Transport",
    zh: "复杂路况或运输困难",
  },
} satisfies Record<string, LocalizedOption>;

const FUEL_AVAILABILITY_LABELS = {
  "readily-available": { en: "Readily Available", zh: "方便补充" },
  limited: { en: "Limited", zh: "补给受限" },
  "not-applicable": { en: "Not Applicable", zh: "不适用" },
  "not-sure": { en: "Not Sure", zh: "不确定" },
} satisfies Record<string, LocalizedOption>;

const LOW_NOISE_REQUIREMENT_LABELS = {
  yes: { en: "Yes", zh: "是" },
  no: { en: "No", zh: "否" },
  "not-sure": { en: "Not Sure", zh: "不确定" },
} satisfies Record<string, LocalizedOption>;

const EXTERNAL_EQUIPMENT_LABELS = {
  camera: { en: "Camera", zh: "摄像头" },
  speaker: { en: "Speaker", zh: "喇叭" },
  router: { en: "Router", zh: "路由器" },
  sensor: { en: "Sensor", zh: "传感器" },
  other: { en: "Other", zh: "其他" },
} satisfies Record<string, LocalizedOption>;

const GENERAL_EMAIL_COPY = {
  en: {
    subject: "[LFADJ Project Inquiry]",
    notProvided: "Not Provided",
    sections: {
      contact: "Contact Information",
      requirements: "Project Requirements",
      operating: "Project Operating Conditions",
    },
    fields: {
      name: "Name",
      workEmail: "Work Email",
      companyName: "Company Name",
      countryRegion: "Country or Region",
      phoneWhatsApp: "Phone or WhatsApp",
      application: "Application",
      estimatedQuantity: "Estimated Quantity",
      preferredSolution: "Preferred Solution",
      projectDescription: "Project Description",
      dailyOperatingHours: "Expected Daily Operating Hours",
      ambientTemperature: "Ambient Temperature",
      altitude: "Altitude",
      siteConditions: "Site Conditions",
      fuelAvailability: "Fuel Availability",
      lowNoiseRequirement: "Low-Noise Requirement",
      externalEquipment: "External Equipment",
      expectedDeliveryTime: "Expected Delivery Time",
    },
  },
  zh: {
    subject: "[LFADJ 项目询价]",
    notProvided: "未提供",
    sections: {
      contact: "客户信息",
      requirements: "项目需求",
      operating: "项目运行条件",
    },
    fields: {
      name: "姓名",
      workEmail: "工作邮箱",
      companyName: "公司名称",
      countryRegion: "国家或地区",
      phoneWhatsApp: "电话或 WhatsApp",
      application: "应用场景",
      estimatedQuantity: "预计采购数量",
      preferredSolution: "倾向方案",
      projectDescription: "项目说明",
      dailyOperatingHours: "每天预计运行时间",
      ambientTemperature: "环境温度",
      altitude: "海拔",
      siteConditions: "现场环境",
      fuelAvailability: "燃油补给条件",
      lowNoiseRequirement: "低噪声要求",
      externalEquipment: "外接设备",
      expectedDeliveryTime: "预计交货时间",
    },
  },
} as const;

function readLegacyText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function singleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
}

function validateText(
  value: unknown,
  field: string,
  maxLength: number,
  required: boolean,
  preserveLines = false,
): ValidationResult<string> {
  if (value === undefined || value === null) {
    return required
      ? { ok: false, error: `${field} is required.` }
      : { ok: true, value: "" };
  }

  if (typeof value !== "string") {
    return { ok: false, error: `${field} must be a string.` };
  }

  const trimmed = value.trim();

  if (required && trimmed.length === 0) {
    return { ok: false, error: `${field} is required.` };
  }

  if (trimmed.length > maxLength) {
    return { ok: false, error: `${field} is too long.` };
  }

  return {
    ok: true,
    value: preserveLines ? trimmed : singleLine(trimmed),
  };
}

function validateEnum(
  value: unknown,
  field: string,
  options: Record<string, LocalizedOption>,
  required: boolean,
): ValidationResult<string> {
  if (value === undefined || value === null || value === "") {
    return required
      ? { ok: false, error: `${field} is required.` }
      : { ok: true, value: "" };
  }

  if (typeof value !== "string" || !(value in options)) {
    return { ok: false, error: `${field} is invalid.` };
  }

  return { ok: true, value };
}

function validateStringArray(
  value: unknown,
  field: string,
  options: Record<string, LocalizedOption>,
): ValidationResult<string[]> {
  if (value === undefined || value === null) {
    return { ok: true, value: [] };
  }

  if (!Array.isArray(value)) {
    return { ok: false, error: `${field} must be an array.` };
  }

  if (value.some((item) => typeof item !== "string" || !(item in options))) {
    return { ok: false, error: `${field} contains an invalid value.` };
  }

  const uniqueValues = [...new Set(value as string[])];

  if (uniqueValues.length > 5) {
    return { ok: false, error: `${field} contains too many values.` };
  }

  return { ok: true, value: uniqueValues };
}

function quantityUsesScientificNotation(rawJson: string) {
  return /"estimatedQuantity"\s*:\s*(?:"[^"]*[eE][^"]*"|-?(?:\d+\.?\d*|\.\d+)[eE][+-]?\d+)/.test(
    rawJson,
  );
}

function validateQuantity(value: unknown, rawJson: string): ValidationResult<number> {
  if (quantityUsesScientificNotation(rawJson)) {
    return { ok: false, error: "estimatedQuantity must be a whole number." };
  }

  const quantityText =
    typeof value === "number"
      ? String(value)
      : typeof value === "string"
        ? value.trim()
        : "";

  if (!/^\d+$/.test(quantityText)) {
    return { ok: false, error: "estimatedQuantity must be a whole number." };
  }

  const quantity = Number(quantityText);

  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 100000) {
    return { ok: false, error: "estimatedQuantity must be between 1 and 100000." };
  }

  return { ok: true, value: quantity };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function localizedValue(
  labels: Record<string, LocalizedOption>,
  value: string,
  language: Language,
  fallback: string,
) {
  return value ? labels[value][language] : fallback;
}

function localizedList(
  labels: Record<string, LocalizedOption>,
  values: string[],
  language: Language,
  fallback: string,
) {
  return values.length > 0
    ? values.map((value) => labels[value][language]).join(", ")
    : fallback;
}

function emailRows(rows: [string, string][]) {
  return rows
    .map(
      ([label, value]) =>
        `<tr><th style="padding:8px 12px;text-align:left;vertical-align:top;border-bottom:1px solid #e2e8f0">${escapeHtml(label)}</th><td style="padding:8px 12px;vertical-align:top;border-bottom:1px solid #e2e8f0">${escapeHtml(value).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");
}

function emailSection(title: string, rows: [string, string][]) {
  return `<h2 style="margin:24px 0 8px;font-size:18px">${escapeHtml(title)}</h2><table style="width:100%;border-collapse:collapse">${emailRows(rows)}</table>`;
}

function textSection(title: string, rows: [string, string][]) {
  return [title, ...rows.map(([label, value]) => `${label}: ${value}`)].join("\n");
}

function formatGeneralEmail(inquiry: ValidGeneralInquiry): DeliveryMessage {
  const { language } = inquiry;
  const copy = GENERAL_EMAIL_COPY[language];
  const fallback = copy.notProvided;
  const contactRows: [string, string][] = [
    [copy.fields.name, inquiry.name],
    [copy.fields.workEmail, inquiry.workEmail],
    [copy.fields.companyName, inquiry.companyName],
    [copy.fields.countryRegion, inquiry.countryRegion],
    [copy.fields.phoneWhatsApp, inquiry.phoneWhatsApp || fallback],
  ];
  const requirementRows: [string, string][] = [
    [
      copy.fields.application,
      localizedValue(APPLICATION_LABELS, inquiry.application, language, fallback),
    ],
    [copy.fields.estimatedQuantity, String(inquiry.estimatedQuantity)],
    [
      copy.fields.preferredSolution,
      localizedValue(PREFERRED_SOLUTION_LABELS, inquiry.preferredSolution, language, fallback),
    ],
    [copy.fields.projectDescription, inquiry.projectDescription],
  ];
  const operatingRows: [string, string][] = [
    [
      copy.fields.dailyOperatingHours,
      localizedValue(
        DAILY_OPERATING_HOURS_LABELS,
        inquiry.dailyOperatingHours,
        language,
        fallback,
      ),
    ],
    [
      copy.fields.ambientTemperature,
      localizedValue(
        AMBIENT_TEMPERATURE_LABELS,
        inquiry.ambientTemperature,
        language,
        fallback,
      ),
    ],
    [
      copy.fields.altitude,
      localizedValue(ALTITUDE_LABELS, inquiry.altitude, language, fallback),
    ],
    [
      copy.fields.siteConditions,
      localizedList(SITE_CONDITION_LABELS, inquiry.siteConditions, language, fallback),
    ],
    [
      copy.fields.fuelAvailability,
      localizedValue(
        FUEL_AVAILABILITY_LABELS,
        inquiry.fuelAvailability,
        language,
        fallback,
      ),
    ],
    [
      copy.fields.lowNoiseRequirement,
      localizedValue(
        LOW_NOISE_REQUIREMENT_LABELS,
        inquiry.lowNoiseRequirement,
        language,
        fallback,
      ),
    ],
    [
      copy.fields.externalEquipment,
      localizedList(EXTERNAL_EQUIPMENT_LABELS, inquiry.externalEquipment, language, fallback),
    ],
    [copy.fields.expectedDeliveryTime, inquiry.expectedDeliveryTime || fallback],
  ];

  return {
    replyTo: inquiry.workEmail,
    subject: `${copy.subject} ${singleLine(inquiry.companyName)} — ${singleLine(inquiry.countryRegion)}`,
    text: [
      textSection(copy.sections.contact, contactRows),
      textSection(copy.sections.requirements, requirementRows),
      textSection(copy.sections.operating, operatingRows),
    ].join("\n\n"),
    html: [
      emailSection(copy.sections.contact, contactRows),
      emailSection(copy.sections.requirements, requirementRows),
      emailSection(copy.sections.operating, operatingRows),
    ].join(""),
  };
}

function validateGeneralInquiry(
  payload: GeneralInquiryPayload,
  rawJson: string,
): ValidationResult<ValidGeneralInquiry> {
  if (payload.inquiryType !== GENERAL_INQUIRY_TYPE) {
    return { ok: false, error: "Unsupported inquiry type." };
  }

  if (payload.language !== "en" && payload.language !== "zh") {
    return { ok: false, error: "language must be en or zh." };
  }

  const name = validateText(payload.name, "name", 120, true);
  const workEmail = validateText(payload.workEmail, "workEmail", 254, true);
  const companyName = validateText(payload.companyName, "companyName", 160, true);
  const countryRegion = validateText(payload.countryRegion, "countryRegion", 120, true);
  const phoneWhatsApp = validateText(payload.phoneWhatsApp, "phoneWhatsApp", 80, false);
  const application = validateEnum(
    payload.application,
    "application",
    APPLICATION_LABELS,
    true,
  );
  const estimatedQuantity = validateQuantity(payload.estimatedQuantity, rawJson);
  const preferredSolution = validateEnum(
    payload.preferredSolution,
    "preferredSolution",
    PREFERRED_SOLUTION_LABELS,
    true,
  );
  const projectDescription = validateText(
    payload.projectDescription,
    "projectDescription",
    3000,
    true,
    true,
  );
  const dailyOperatingHours = validateEnum(
    payload.dailyOperatingHours,
    "dailyOperatingHours",
    DAILY_OPERATING_HOURS_LABELS,
    false,
  );
  const ambientTemperature = validateEnum(
    payload.ambientTemperature,
    "ambientTemperature",
    AMBIENT_TEMPERATURE_LABELS,
    false,
  );
  const altitude = validateEnum(payload.altitude, "altitude", ALTITUDE_LABELS, false);
  const siteConditions = validateStringArray(
    payload.siteConditions,
    "siteConditions",
    SITE_CONDITION_LABELS,
  );
  const fuelAvailability = validateEnum(
    payload.fuelAvailability,
    "fuelAvailability",
    FUEL_AVAILABILITY_LABELS,
    false,
  );
  const lowNoiseRequirement = validateEnum(
    payload.lowNoiseRequirement,
    "lowNoiseRequirement",
    LOW_NOISE_REQUIREMENT_LABELS,
    false,
  );
  const externalEquipment = validateStringArray(
    payload.externalEquipment,
    "externalEquipment",
    EXTERNAL_EQUIPMENT_LABELS,
  );
  const expectedDeliveryTime = validateText(
    payload.expectedDeliveryTime,
    "expectedDeliveryTime",
    100,
    false,
  );

  const results = [
    name,
    workEmail,
    companyName,
    countryRegion,
    phoneWhatsApp,
    application,
    estimatedQuantity,
    preferredSolution,
    projectDescription,
    dailyOperatingHours,
    ambientTemperature,
    altitude,
    siteConditions,
    fuelAvailability,
    lowNoiseRequirement,
    externalEquipment,
    expectedDeliveryTime,
  ];
  const invalidResult = results.find((result) => !result.ok);

  if (invalidResult && !invalidResult.ok) {
    return invalidResult;
  }

  if (!workEmail.ok || !EMAIL_PATTERN.test(workEmail.value.toLowerCase())) {
    return { ok: false, error: "A valid workEmail is required." };
  }

  if (
    !name.ok ||
    !companyName.ok ||
    !countryRegion.ok ||
    !phoneWhatsApp.ok ||
    !application.ok ||
    !estimatedQuantity.ok ||
    !preferredSolution.ok ||
    !projectDescription.ok ||
    !dailyOperatingHours.ok ||
    !ambientTemperature.ok ||
    !altitude.ok ||
    !siteConditions.ok ||
    !fuelAvailability.ok ||
    !lowNoiseRequirement.ok ||
    !externalEquipment.ok ||
    !expectedDeliveryTime.ok
  ) {
    return { ok: false, error: "Invalid inquiry payload." };
  }

  return {
    ok: true,
    value: {
      language: payload.language,
      name: name.value,
      workEmail: workEmail.value.toLowerCase(),
      companyName: companyName.value,
      countryRegion: countryRegion.value,
      phoneWhatsApp: phoneWhatsApp.value,
      application: application.value,
      estimatedQuantity: estimatedQuantity.value,
      preferredSolution: preferredSolution.value,
      projectDescription: projectDescription.value,
      dailyOperatingHours: dailyOperatingHours.value,
      ambientTemperature: ambientTemperature.value,
      altitude: altitude.value,
      siteConditions: siteConditions.value,
      fuelAvailability: fuelAvailability.value,
      lowNoiseRequirement: lowNoiseRequirement.value,
      externalEquipment: externalEquipment.value,
      expectedDeliveryTime: expectedDeliveryTime.value,
    },
  };
}

async function deliverEmail(message: DeliveryMessage) {
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
        reply_to: message.replyTo,
        subject: message.subject,
        text: message.text,
        ...(message.html ? { html: message.html } : {}),
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

async function handleLegacyInquiry(payload: LegacyInquiryPayload) {
  const name = singleLine(readLegacyText(payload.name, 120));
  const company = singleLine(readLegacyText(payload.company, 160));
  const email = singleLine(readLegacyText(payload.email, 254)).toLowerCase();
  const country = singleLine(readLegacyText(payload.country, 120));
  const projectType = singleLine(readLegacyText(payload.projectType, 160));
  const requirements = readLegacyText(payload.requirements, 5000);
  const product = singleLine(readLegacyText(payload.product, 160));
  const quantityText = singleLine(readLegacyText(payload.quantity, 12));
  const quantity = Number(quantityText);
  const productConfig = SUPPORTED_PRODUCTS[product as keyof typeof SUPPORTED_PRODUCTS];

  if (!productConfig) {
    return NextResponse.json({ error: "Unsupported product inquiry." }, { status: 400 });
  }

  const missingFields = [
    ["name", name],
    ["email", email],
    ["country", country],
    ["projectType", projectType],
    ["requirements", requirements],
    ["product", product],
    ...(product === LF955_PRODUCT ? [["quantity", quantityText]] : []),
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

  if (quantityText && (!Number.isInteger(quantity) || quantity < 1 || quantity > 100000)) {
    return NextResponse.json({ error: "Quantity must be a positive whole number." }, { status: 400 });
  }

  const emailText = [
    productConfig.heading,
    "",
    `Product: ${product}`,
    `Name: ${name}`,
    `Company: ${company || "Not provided"}`,
    `Email: ${email}`,
    `Country: ${country}`,
    `Project type: ${projectType}`,
    `Quantity: ${quantityText || "Not provided"}`,
    "",
    "Requirements:",
    requirements,
  ].join("\n");

  return deliverEmail({
    replyTo: email,
    subject: `${productConfig.subject} from ${name} (${country})`,
    text: emailText,
  });
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Content-Type must be application/json." }, { status: 415 });
  }

  let rawJson: string;
  let payload: Record<string, unknown>;

  try {
    rawJson = await request.text();
    const parsed = JSON.parse(rawJson) as unknown;

    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
    }

    payload = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  if (!Object.hasOwn(payload, "inquiryType")) {
    return handleLegacyInquiry(payload as LegacyInquiryPayload);
  }

  const generalPayload = payload as GeneralInquiryPayload;

  if (
    typeof generalPayload.website === "string" &&
    generalPayload.website.trim().length > 0 &&
    generalPayload.inquiryType === GENERAL_INQUIRY_TYPE
  ) {
    return NextResponse.json({ success: true, inquiryId: "accepted" }, { status: 201 });
  }

  if (
    generalPayload.website !== undefined &&
    generalPayload.website !== null &&
    typeof generalPayload.website !== "string"
  ) {
    return NextResponse.json({ error: "Invalid inquiry payload." }, { status: 400 });
  }

  const validated = validateGeneralInquiry(generalPayload, rawJson);

  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  return deliverEmail(formatGeneralEmail(validated.value));
}
