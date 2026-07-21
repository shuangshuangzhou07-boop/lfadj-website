"use client";

import { FormEvent, useId, useState } from "react";

type Language = "en" | "zh";
type SubmitState = "idle" | "submitting" | "success" | "error";

const PRODUCT_SOURCE = "LF971 Solar Mobile Light Tower";

const copyByLanguage = {
  en: {
    title: "Configure a Solar Light Tower for Your Project",
    subtitle:
      "Tell us where and how the light tower will be used. LFADJ will recommend a suitable solar array, battery, LED lighting, mast and control configuration.",
    fields: {
      name: "Name",
      email: "Email",
      country: "Country or Region",
      projectType: "Project Type",
      hours: "Required Lighting Hours per Night",
      description: "Project Description",
      area: "Lighting Area",
      backup: "Required Cloudy-Day Backup",
      equipment: "External Equipment",
      quantity: "Estimated Quantity",
      phone: "WhatsApp or Phone",
    },
    projectTypes: ["Construction", "Mining", "Rental", "Road and Infrastructure", "Emergency", "Security and Monitoring", "Other"],
    equipment: ["Camera", "Speaker", "Router or Communication Device", "Sensor", "Other", "None"],
    select: "Select one",
    requiredHint: "Fields marked * are required.",
    submit: "Request a Solar Configuration",
    submitting: "Submitting...",
    success: "Thank you. Your project requirements have been received. Our team will review the information and contact you.",
    error: "Submission failed. Please check your information and connection, then try again.",
  },
  zh: {
    title: "为您的项目配置太阳能移动照明灯塔",
    subtitle: "请告诉我们灯塔的使用地点和运行需求，LFADJ 将推荐合适的太阳能板、电池、LED灯具、灯杆和控制配置。",
    fields: {
      name: "姓名",
      email: "邮箱",
      country: "国家或地区",
      projectType: "项目类型",
      hours: "每晚所需照明时间",
      description: "项目说明",
      area: "照射面积",
      backup: "连续阴雨备用要求",
      equipment: "外接设备",
      quantity: "预计数量",
      phone: "WhatsApp或电话",
    },
    projectTypes: ["建筑施工", "矿山作业", "设备租赁", "道路与基础设施", "应急项目", "安防与监控", "其他"],
    equipment: ["摄像头", "喇叭", "路由器或通信设备", "传感器", "其他", "不需要"],
    select: "请选择",
    requiredHint: "标 * 为必填项。",
    submit: "获取太阳能配置建议",
    submitting: "正在提交...",
    success: "感谢提交。我们已收到您的项目需求，团队将在审核信息后与您联系。",
    error: "提交失败，请检查填写内容和网络连接后重试。",
  },
} as const;

export function Lf971SolarInquiryForm({ language }: { language: Language }) {
  const copy = copyByLanguage[language];
  const formId = useId();
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [externalEquipment, setExternalEquipment] = useState<string[]>([]);
  const noneOption = language === "zh" ? "不需要" : "None";
  const isSubmitting = submitState === "submitting";

  function fieldId(name: string) {
    return `${formId}-${name}`;
  }

  function toggleEquipment(option: string) {
    setExternalEquipment((current) => {
      if (option === noneOption) {
        return current.includes(option) ? [] : [option];
      }

      const withoutNone = current.filter((item) => item !== noneOption);
      return withoutNone.includes(option)
        ? withoutNone.filter((item) => item !== option)
        : [...withoutNone, option];
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    setSubmitState("idle");

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const notProvided = language === "zh" ? "未提供" : "Not provided";
    const requirements = [
      `Product Source: ${PRODUCT_SOURCE}`,
      `Submission Language: ${language === "zh" ? "Chinese" : "English"}`,
      `Required Lighting Hours per Night: ${value("lightingHours")}`,
      `Lighting Area: ${value("lightingArea") || notProvided}`,
      `Required Cloudy-Day Backup: ${value("cloudyDayBackup") || notProvided}`,
      `External Equipment: ${externalEquipment.join(", ") || notProvided}`,
      `WhatsApp or Phone: ${value("phone") || notProvided}`,
      "",
      `Project Description: ${value("projectDescription")}`,
    ].join("\n");

    setSubmitState("submitting");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: value("name"),
          email: value("email"),
          country: value("country"),
          projectType: value("projectType"),
          quantity: value("quantity"),
          requirements,
          product: PRODUCT_SOURCE,
        }),
      });

      if (!response.ok) throw new Error("Inquiry submission failed");

      form.reset();
      setExternalEquipment([]);
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  const inputClassName =
    "mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-500/15";
  const labelClassName = "text-sm font-semibold text-slate-800";

  return (
    <section className="border-b border-slate-200 bg-slate-50 px-6 py-20 text-slate-950 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1320px]">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{copy.title}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-700 sm:text-xl">{copy.subtitle}</p>
        </div>

        <form noValidate onSubmit={handleSubmit} className="mt-12 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <p className="mb-6 text-sm text-slate-500">{copy.requiredHint}</p>
          <div className="grid gap-5 md:grid-cols-2">
            <label htmlFor={fieldId("name")} className="block">
              <span className={labelClassName}>{copy.fields.name} *</span>
              <input id={fieldId("name")} name="name" required autoComplete="name" className={inputClassName} />
            </label>
            <label htmlFor={fieldId("email")} className="block">
              <span className={labelClassName}>{copy.fields.email} *</span>
              <input id={fieldId("email")} name="email" required type="email" autoComplete="email" className={inputClassName} />
            </label>
            <label htmlFor={fieldId("country")} className="block">
              <span className={labelClassName}>{copy.fields.country} *</span>
              <input id={fieldId("country")} name="country" required autoComplete="country-name" className={inputClassName} />
            </label>
            <label htmlFor={fieldId("projectType")} className="block">
              <span className={labelClassName}>{copy.fields.projectType} *</span>
              <select id={fieldId("projectType")} name="projectType" required defaultValue="" className={inputClassName}>
                <option value="" disabled>{copy.select}</option>
                {copy.projectTypes.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </label>
            <label htmlFor={fieldId("lightingHours")} className="block">
              <span className={labelClassName}>{copy.fields.hours} *</span>
              <input id={fieldId("lightingHours")} name="lightingHours" required className={inputClassName} />
            </label>
            <label htmlFor={fieldId("lightingArea")} className="block">
              <span className={labelClassName}>{copy.fields.area}</span>
              <input id={fieldId("lightingArea")} name="lightingArea" className={inputClassName} />
            </label>
            <label htmlFor={fieldId("cloudyDayBackup")} className="block">
              <span className={labelClassName}>{copy.fields.backup}</span>
              <input id={fieldId("cloudyDayBackup")} name="cloudyDayBackup" className={inputClassName} />
            </label>
            <label htmlFor={fieldId("quantity")} className="block">
              <span className={labelClassName}>{copy.fields.quantity}</span>
              <input id={fieldId("quantity")} name="quantity" type="number" min="1" inputMode="numeric" className={inputClassName} />
            </label>
            <label htmlFor={fieldId("phone")} className="block md:col-span-2">
              <span className={labelClassName}>{copy.fields.phone}</span>
              <input id={fieldId("phone")} name="phone" type="tel" autoComplete="tel" className={inputClassName} />
            </label>

            <fieldset className="md:col-span-2">
              <legend className={labelClassName}>{copy.fields.equipment}</legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {copy.equipment.map((option) => (
                  <label key={option} className="flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700">
                    <input
                      type="checkbox"
                      checked={externalEquipment.includes(option)}
                      onChange={() => toggleEquipment(option)}
                      className="h-4 w-4 accent-amber-500"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label htmlFor={fieldId("projectDescription")} className="block md:col-span-2">
              <span className={labelClassName}>{copy.fields.description} *</span>
              <textarea id={fieldId("projectDescription")} name="projectDescription" required rows={6} className={`${inputClassName} h-auto py-3`} />
            </label>
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? copy.submitting : copy.submit}
            </button>
            <p aria-live="polite" className="text-sm font-medium text-slate-700">
              {submitState === "success" ? copy.success : null}
              {submitState === "error" ? copy.error : null}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
