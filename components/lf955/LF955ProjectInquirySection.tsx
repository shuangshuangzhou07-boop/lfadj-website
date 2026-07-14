"use client";

import { FormEvent, useId, useState } from "react";

type InquiryLanguage = "zh" | "en";
type SubmitState = "idle" | "submitting" | "success" | "error";

type InquiryCopy = {
  title: string;
  subtitle: string;
  fields: {
    name: string;
    company: string;
    email: string;
    whatsapp: string;
    country: string;
    industry: string;
    environment: string;
    quantity: string;
    dailyHours: string;
    purchaseTime: string;
    details: string;
  };
  placeholders: {
    select: string;
    details: string;
  };
  environmentOptions: string[];
  industryOptions: string[];
  submit: string;
  submitting: string;
  success: string;
  error: string;
  contactRequired: string;
  requiredHint: string;
  contactTitle: string;
  contactText: string;
  contactItems: string[];
  trustText: string;
};

const copyByLanguage: Record<InquiryLanguage, InquiryCopy> = {
  zh: {
    title: "告诉我们您的项目使用环境",
    subtitle:
      "请提供项目国家、工作环境、每日使用时长和需求数量，我们将为您推荐更合适的LF955配置方案。",
    fields: {
      name: "姓名",
      company: "公司名称",
      email: "邮箱",
      whatsapp: "WhatsApp / 电话",
      country: "国家",
      industry: "行业或应用场景",
      environment: "工作环境",
      quantity: "需求数量",
      dailyHours: "每日使用时长",
      purchaseTime: "预计采购时间",
      details: "项目说明",
    },
    placeholders: {
      select: "请选择",
      details: "请简要说明项目地点、使用环境、照明范围、运行时长或其他配置需求。",
    },
    environmentOptions: [
      "高温环境",
      "沙漠或风沙环境",
      "沿海或高腐蚀环境",
      "高海拔环境",
      "普通施工环境",
      "其他",
    ],
    industryOptions: ["施工", "矿山", "租赁", "油气工程", "应急", "道路施工", "其他"],
    submit: "获取我的LF955配置方案",
    submitting: "正在提交...",
    success: "您的项目需求已提交，请等待我们的配置建议。",
    error: "提交失败，请检查网络后重试，或通过 WhatsApp / 电子邮箱联系我们。",
    contactRequired: "请填写有效邮箱。",
    requiredHint: "标 * 为必填项。邮箱用于接收项目回复，WhatsApp / 电话为选填。",
    contactTitle: "需要更快回复？",
    contactText:
      "请发送项目地点、工作时长、需求数量和现场环境，我们将尽快提供配置建议。",
    contactItems: ["WhatsApp", "电子邮箱", "OEM / 代理商支持"],
    trustText: "我们将在收到需求后尽快回复。",
  },
  en: {
    title: "Tell Us About Your Project Environment",
    subtitle:
      "Share your project country, working environment, daily operating hours and required quantity. We will recommend a suitable LF955 configuration.",
    fields: {
      name: "Name",
      company: "Company",
      email: "Email",
      whatsapp: "WhatsApp / Phone",
      country: "Country",
      industry: "Industry or Application",
      environment: "Working Environment",
      quantity: "Required Quantity",
      dailyHours: "Daily Operating Hours",
      purchaseTime: "Expected Purchase Time",
      details: "Project Details",
    },
    placeholders: {
      select: "Select one",
      details:
        "Briefly describe project location, site conditions, lighting area, operating hours or configuration needs.",
    },
    environmentOptions: [
      "High Temperature",
      "Desert or Dusty Environment",
      "Coastal or Corrosive Environment",
      "High Altitude",
      "Standard Construction Environment",
      "Other",
    ],
    industryOptions: [
      "Construction",
      "Mining",
      "Rental",
      "Oil & Gas",
      "Emergency",
      "Road Work",
      "Other",
    ],
    submit: "Get My LF955 Project Solution",
    submitting: "Submitting...",
    success: "Your project request has been submitted. We will review it and recommend a suitable configuration.",
    error: "Submission failed. Please check your connection and try again, or contact us by WhatsApp / email.",
    contactRequired: "Please provide a valid email address.",
    requiredHint: "Fields marked * are required. Email is required for project replies; WhatsApp / phone is optional.",
    contactTitle: "Need a Faster Response?",
    contactText:
      "Send your project location, operating hours, required quantity and site conditions for a faster configuration recommendation.",
    contactItems: ["WhatsApp", "Email", "OEM / Dealer Support"],
    trustText: "We will respond as soon as possible after reviewing your request.",
  },
};

export function LF955ProjectInquirySection({ language }: { language: InquiryLanguage }) {
  const copy = copyByLanguage[language];
  const formId = useId();
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  function fieldId(name: string) {
    return `${formId}-${name}`;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitState === "submitting") {
      return;
    }

    const form = event.currentTarget;
    setSubmitState("idle");

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const requirements = [
      `WhatsApp / Phone: ${String(data.get("whatsapp") ?? "").trim() || "Not provided"}`,
      `Working environment: ${String(data.get("workingEnvironment") ?? "").trim() || "Not provided"}`,
      `Daily operating hours: ${String(data.get("dailyOperatingHours") ?? "").trim() || "Not provided"}`,
      `Expected purchase time: ${String(data.get("expectedPurchaseTime") ?? "").trim() || "Not provided"}`,
      "",
      String(data.get("projectDetails") ?? "").trim(),
    ].join("\n");

    setSubmitState("submitting");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? "").trim(),
          company: String(data.get("company") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          country: String(data.get("country") ?? "").trim(),
          projectType: String(data.get("industry") ?? "").trim(),
          quantity: String(data.get("quantity") ?? "").trim(),
          requirements,
          product: "LF955 Diesel Mobile Light Tower",
        }),
      });

      if (!response.ok) {
        throw new Error(`Inquiry request failed with status ${response.status}`);
      }

      setSubmitState("success");
      form.reset();
    } catch {
      setSubmitState("error");
    }
  }

  const inputClassName =
    "mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-500/15";
  const labelClassName = "text-sm font-semibold text-slate-800";
  const isSubmitting = submitState === "submitting";

  return (
    <section id="project-environment-inquiry" className="bg-slate-50 px-6 py-20 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{copy.title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{copy.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form noValidate className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8" onSubmit={handleSubmit}>
            <p className="mb-5 text-sm leading-6 text-slate-500">{copy.requiredHint}</p>
            <div className="grid gap-5 sm:grid-cols-2">
              <label htmlFor={fieldId("name")} className="block">
                <span className={labelClassName}>{copy.fields.name} *</span>
                <input id={fieldId("name")} required name="name" autoComplete="name" className={inputClassName} />
              </label>
              <label htmlFor={fieldId("company")} className="block">
                <span className={labelClassName}>{copy.fields.company}</span>
                <input id={fieldId("company")} name="company" autoComplete="organization" className={inputClassName} />
              </label>

              <label htmlFor={fieldId("email")} className="block">
                <span className={labelClassName}>{copy.fields.email} *</span>
                <input id={fieldId("email")} required name="email" type="email" autoComplete="email" className={inputClassName} />
              </label>
              <label htmlFor={fieldId("whatsapp")} className="block">
                <span className={labelClassName}>{copy.fields.whatsapp}</span>
                <input id={fieldId("whatsapp")} name="whatsapp" type="tel" autoComplete="tel" className={inputClassName} />
              </label>

              <label htmlFor={fieldId("country")} className="block">
                <span className={labelClassName}>{copy.fields.country} *</span>
                <input id={fieldId("country")} required name="country" autoComplete="country-name" className={inputClassName} />
              </label>
              <label htmlFor={fieldId("industry")} className="block">
                <span className={labelClassName}>{copy.fields.industry} *</span>
                <select id={fieldId("industry")} required name="industry" defaultValue="" className={inputClassName}>
                  <option value="" disabled>
                    {copy.placeholders.select}
                  </option>
                  {copy.industryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label htmlFor={fieldId("environment")} className="block">
                <span className={labelClassName}>{copy.fields.environment}</span>
                <select id={fieldId("environment")} name="workingEnvironment" defaultValue="" className={inputClassName}>
                  <option value="" disabled>
                    {copy.placeholders.select}
                  </option>
                  {copy.environmentOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor={fieldId("quantity")} className="block">
                <span className={labelClassName}>{copy.fields.quantity} *</span>
                <input id={fieldId("quantity")} required name="quantity" type="number" min="1" inputMode="numeric" className={inputClassName} />
              </label>

              <label htmlFor={fieldId("dailyHours")} className="block">
                <span className={labelClassName}>{copy.fields.dailyHours}</span>
                <input id={fieldId("dailyHours")} name="dailyOperatingHours" className={inputClassName} />
              </label>
              <label htmlFor={fieldId("purchaseTime")} className="block">
                <span className={labelClassName}>{copy.fields.purchaseTime}</span>
                <input id={fieldId("purchaseTime")} name="expectedPurchaseTime" className={inputClassName} />
              </label>

              <label htmlFor={fieldId("details")} className="block sm:col-span-2">
                <span className={labelClassName}>{copy.fields.details} *</span>
                <textarea id={fieldId("details")} required name="projectDetails" rows={5} placeholder={copy.placeholders.details} className={`${inputClassName} h-auto py-3`} />
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 items-center justify-center rounded-full bg-amber-500 px-7 text-sm font-semibold text-slate-950 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? copy.submitting : copy.submit}
              </button>
              <p className="text-sm font-medium text-slate-600" aria-live="polite">
                {submitState === "success" ? copy.success : null}
                {submitState === "error" ? copy.error : null}
              </p>
            </div>
          </form>

          <aside className="rounded-2xl bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight">{copy.contactTitle}</h3>
            <p className="mt-4 text-base leading-8 text-slate-300">{copy.contactText}</p>
            <ul className="mt-8 space-y-3">
              {copy.contactItems.map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-slate-100">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 border-l-4 border-amber-400 bg-white/[0.05] px-4 py-4 text-sm font-semibold leading-7 text-amber-200">
              {copy.trustText}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
