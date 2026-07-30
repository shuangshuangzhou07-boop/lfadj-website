"use client";

import { FormEvent, useId, useState } from "react";

type Language = "en" | "zh";

type ProjectInquiryData = {
  name: string;
  workEmail: string;
  companyName: string;
  countryOrRegion: string;
  phoneOrWhatsApp: string;
  application: string;
  estimatedQuantity: string;
  preferredSolution: string;
  projectDescription: string;
};

const initialFormData: ProjectInquiryData = {
  name: "",
  workEmail: "",
  companyName: "",
  countryOrRegion: "",
  phoneOrWhatsApp: "",
  application: "",
  estimatedQuantity: "",
  preferredSolution: "",
  projectDescription: "",
};

const applicationOptions = [
  { value: "construction", en: "Construction", zh: "建筑施工" },
  { value: "mining", en: "Mining", zh: "矿山" },
  { value: "oil-gas", en: "Oil & Gas", zh: "油气工程" },
  { value: "equipment-rental", en: "Equipment Rental", zh: "设备租赁" },
  { value: "emergency-lighting", en: "Emergency Lighting", zh: "应急照明" },
  { value: "road-safety", en: "Road Safety", zh: "道路安全" },
  { value: "temporary-monitoring", en: "Temporary Monitoring", zh: "临时监控" },
  { value: "other", en: "Other", zh: "其他" },
] as const;

const preferredSolutionOptions = [
  {
    value: "diesel-light-tower",
    en: "Diesel Mobile Light Tower",
    zh: "柴油移动照明灯塔",
  },
  {
    value: "solar-light-tower",
    en: "Solar Mobile Light Tower",
    zh: "太阳能移动照明灯塔",
  },
  {
    value: "solar-surveillance-trailer",
    en: "Solar Surveillance Trailer",
    zh: "太阳能监控拖车",
  },
  {
    value: "recommendation-needed",
    en: "Recommendation Needed",
    zh: "需要配置建议",
  },
] as const;

const copyByLanguage = {
  en: {
    groupTitle: "Contact Information",
    projectGroupTitle: "Project Requirements",
    projectGroupDescription:
      "Provide the basic application and purchasing requirements. If you are not sure which solution is suitable, select “Recommendation Needed.”",
    required: "Required",
    optional: "Optional",
    requiredHint: "Fields marked as required must be completed.",
    selectPrompt: "Select one",
    fields: {
      name: "Name",
      workEmail: "Work Email",
      companyName: "Company Name",
      countryOrRegion: "Country or Region",
      phoneOrWhatsApp: "Phone or WhatsApp",
      application: "Application",
      estimatedQuantity: "Estimated Quantity",
      preferredSolution: "Preferred Solution",
      projectDescription: "Project Description",
    },
    projectDescriptionPlaceholder:
      "Tell us where the equipment will be used, the project type and the main lighting or monitoring requirements.",
    projectDescriptionHelp:
      "Include any confirmed operating conditions or special requirements if available.",
    privacyTitle: "Privacy and contact",
    privacy:
      "Your information will only be used to review your project requirements and contact you about suitable mobile lighting configurations.",
    contact:
      "Additional project fields and secure submission will be added in the next form stage.",
  },
  zh: {
    groupTitle: "客户信息",
    projectGroupTitle: "项目需求",
    projectGroupDescription:
      "请提供基本应用和采购需求。如果暂时不确定适合哪种方案，可以选择“需要配置建议”。",
    required: "必填",
    optional: "选填",
    requiredHint: "标记为必填的字段需要完整填写。",
    selectPrompt: "请选择",
    fields: {
      name: "姓名",
      workEmail: "工作邮箱",
      companyName: "公司名称",
      countryOrRegion: "国家或地区",
      phoneOrWhatsApp: "电话或 WhatsApp",
      application: "应用场景",
      estimatedQuantity: "预计采购数量",
      preferredSolution: "倾向方案",
      projectDescription: "项目说明",
    },
    projectDescriptionPlaceholder:
      "请说明设备使用地点、项目类型以及主要照明或监控需求。",
    projectDescriptionHelp: "如已有明确的运行条件或特殊要求，也可以一并说明。",
    privacyTitle: "隐私及联系说明",
    privacy: "您的信息仅用于审核项目需求，并就合适的移动照明配置与您联系。",
    contact: "后续表单阶段将增加项目需求字段和安全提交功能。",
  },
} as const;

export function ProjectInquiryForm({ language }: { language: Language }) {
  const copy = copyByLanguage[language];
  const formId = useId();
  const [formData, setFormData] = useState<ProjectInquiryData>(initialFormData);
  const projectDescriptionHelpId = `${formId}-projectDescription-help`;

  function fieldId(field: keyof ProjectInquiryData) {
    return `${formId}-${field}`;
  }

  function updateField(field: keyof ProjectInquiryData, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  function updateEstimatedQuantity(value: string) {
    if (/^\d*$/.test(value)) {
      updateField("estimatedQuantity", value);
    }
  }

  function preventIncompleteSubmission(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  const inputClassName =
    "mt-2 h-12 w-full min-w-0 rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-950 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10";
  const labelClassName = "text-sm font-semibold text-slate-800";
  const statusClassName = "ml-2 text-xs font-medium text-slate-500";

  return (
    <>
      <section className="px-6 pb-16 sm:pb-20">
        <div className="mx-auto max-w-[960px]">
          <form
            noValidate
            onSubmit={preventIncompleteSubmission}
            className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
          >
            <fieldset className="min-w-0">
              <legend className="text-2xl font-bold tracking-tight text-slate-950">
                {copy.groupTitle}
              </legend>
              <p className="mt-3 text-sm leading-6 text-slate-600">{copy.requiredHint}</p>

              <div className="mt-8 grid min-w-0 gap-6 md:grid-cols-2">
                <label htmlFor={fieldId("name")} className="block min-w-0">
                  <span className={labelClassName}>{copy.fields.name}</span>
                  <span className={statusClassName}>{copy.required}</span>
                  <input
                    id={fieldId("name")}
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    className={inputClassName}
                  />
                </label>

                <label htmlFor={fieldId("workEmail")} className="block min-w-0">
                  <span className={labelClassName}>{copy.fields.workEmail}</span>
                  <span className={statusClassName}>{copy.required}</span>
                  <input
                    id={fieldId("workEmail")}
                    name="workEmail"
                    required
                    type="email"
                    autoComplete="email"
                    value={formData.workEmail}
                    onChange={(event) => updateField("workEmail", event.target.value)}
                    className={inputClassName}
                  />
                </label>

                <label htmlFor={fieldId("companyName")} className="block min-w-0">
                  <span className={labelClassName}>{copy.fields.companyName}</span>
                  <span className={statusClassName}>{copy.required}</span>
                  <input
                    id={fieldId("companyName")}
                    name="companyName"
                    required
                    autoComplete="organization"
                    value={formData.companyName}
                    onChange={(event) => updateField("companyName", event.target.value)}
                    className={inputClassName}
                  />
                </label>

                <label htmlFor={fieldId("countryOrRegion")} className="block min-w-0">
                  <span className={labelClassName}>{copy.fields.countryOrRegion}</span>
                  <span className={statusClassName}>{copy.required}</span>
                  <input
                    id={fieldId("countryOrRegion")}
                    name="countryOrRegion"
                    required
                    value={formData.countryOrRegion}
                    onChange={(event) => updateField("countryOrRegion", event.target.value)}
                    className={inputClassName}
                  />
                </label>

                <label htmlFor={fieldId("phoneOrWhatsApp")} className="block min-w-0 md:col-span-2">
                  <span className={labelClassName}>{copy.fields.phoneOrWhatsApp}</span>
                  <span className={statusClassName}>{copy.optional}</span>
                  <input
                    id={fieldId("phoneOrWhatsApp")}
                    name="phoneOrWhatsApp"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phoneOrWhatsApp}
                    onChange={(event) => updateField("phoneOrWhatsApp", event.target.value)}
                    className={inputClassName}
                  />
                </label>
              </div>
            </fieldset>

            <fieldset className="mt-10 min-w-0 border-t border-slate-200 pt-10">
              <legend className="text-2xl font-bold tracking-tight text-slate-950">
                {copy.projectGroupTitle}
              </legend>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                {copy.projectGroupDescription}
              </p>

              <div className="mt-8 grid min-w-0 gap-6 md:grid-cols-2">
                <label htmlFor={fieldId("application")} className="block min-w-0">
                  <span className={labelClassName}>{copy.fields.application}</span>
                  <span className={statusClassName}>{copy.required}</span>
                  <select
                    id={fieldId("application")}
                    name="application"
                    required
                    value={formData.application}
                    onChange={(event) => updateField("application", event.target.value)}
                    className={inputClassName}
                  >
                    <option value="" disabled>
                      {copy.selectPrompt}
                    </option>
                    {applicationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option[language]}
                      </option>
                    ))}
                  </select>
                </label>

                <label htmlFor={fieldId("estimatedQuantity")} className="block min-w-0">
                  <span className={labelClassName}>{copy.fields.estimatedQuantity}</span>
                  <span className={statusClassName}>{copy.required}</span>
                  <input
                    id={fieldId("estimatedQuantity")}
                    name="estimatedQuantity"
                    required
                    type="number"
                    min="1"
                    step="1"
                    inputMode="numeric"
                    value={formData.estimatedQuantity}
                    onChange={(event) => updateEstimatedQuantity(event.target.value)}
                    className={inputClassName}
                  />
                </label>

                <label
                  htmlFor={fieldId("preferredSolution")}
                  className="block min-w-0 md:col-span-2"
                >
                  <span className={labelClassName}>{copy.fields.preferredSolution}</span>
                  <span className={statusClassName}>{copy.required}</span>
                  <select
                    id={fieldId("preferredSolution")}
                    name="preferredSolution"
                    required
                    value={formData.preferredSolution}
                    onChange={(event) => updateField("preferredSolution", event.target.value)}
                    className={inputClassName}
                  >
                    <option value="" disabled>
                      {copy.selectPrompt}
                    </option>
                    {preferredSolutionOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option[language]}
                      </option>
                    ))}
                  </select>
                </label>

                <label
                  htmlFor={fieldId("projectDescription")}
                  className="block min-w-0 md:col-span-2"
                >
                  <span className={labelClassName}>{copy.fields.projectDescription}</span>
                  <span className={statusClassName}>{copy.required}</span>
                  <textarea
                    id={fieldId("projectDescription")}
                    name="projectDescription"
                    required
                    rows={5}
                    maxLength={3000}
                    aria-describedby={projectDescriptionHelpId}
                    placeholder={copy.projectDescriptionPlaceholder}
                    value={formData.projectDescription}
                    onChange={(event) => updateField("projectDescription", event.target.value)}
                    className={`${inputClassName} h-auto py-3`}
                  />
                  <span
                    id={projectDescriptionHelpId}
                    className="mt-2 block text-sm leading-6 text-slate-500"
                  >
                    {copy.projectDescriptionHelp}
                  </span>
                </label>
              </div>

              {/* Additional field groups and submission controls will be added here. */}
            </fieldset>
          </form>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-[960px]">
          <h2 className="text-lg font-bold text-slate-950">{copy.privacyTitle}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{copy.privacy}</p>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">{copy.contact}</p>
        </div>
      </section>
    </>
  );
}
