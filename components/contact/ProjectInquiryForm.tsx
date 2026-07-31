"use client";

import { FormEvent, useId, useRef, useState } from "react";

type Language = "en" | "zh";
type SubmissionStatus = "idle" | "submitting" | "success" | "error";
type RequiredField =
  | "name"
  | "workEmail"
  | "companyName"
  | "countryOrRegion"
  | "application"
  | "estimatedQuantity"
  | "preferredSolution"
  | "projectDescription";
type ErrorField = RequiredField | "expectedDeliveryTime";
type FieldErrors = Partial<Record<ErrorField, string>>;

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
  dailyOperatingHours: string;
  ambientTemperature: string;
  altitude: string;
  siteConditions: string[];
  fuelAvailability: string;
  lowNoiseRequirement: string;
  externalEquipment: string[];
  expectedDeliveryTime: string;
  website: string;
};

type TextField = Exclude<keyof ProjectInquiryData, "siteConditions" | "externalEquipment">;
type MultiSelectField = "siteConditions" | "externalEquipment";

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
  dailyOperatingHours: "",
  ambientTemperature: "",
  altitude: "",
  siteConditions: [],
  fuelAvailability: "",
  lowNoiseRequirement: "",
  externalEquipment: [],
  expectedDeliveryTime: "",
  website: "",
};

const requiredFields: RequiredField[] = [
  "name",
  "workEmail",
  "companyName",
  "countryOrRegion",
  "application",
  "estimatedQuantity",
  "preferredSolution",
  "projectDescription",
];

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

const dailyOperatingHoursOptions = [
  { value: "less-than-8", en: "Less Than 8 Hours", zh: "少于 8 小时" },
  { value: "8-to-12", en: "8–12 Hours", zh: "8–12 小时" },
  { value: "12-to-24", en: "12–24 Hours", zh: "12–24 小时" },
  { value: "continuous", en: "Continuous Operation", zh: "连续运行" },
  { value: "not-sure", en: "Not Sure", zh: "不确定" },
] as const;

const ambientTemperatureOptions = [
  { value: "standard", en: "Standard Conditions", zh: "普通环境" },
  { value: "above-40", en: "High Temperature Above 40°C", zh: "40°C 以上高温" },
  { value: "low-temperature", en: "Low-Temperature Conditions", zh: "低温环境" },
  { value: "not-sure", en: "Not Sure", zh: "不确定" },
] as const;

const altitudeOptions = [
  { value: "below-1000", en: "Below 1,000 m", zh: "低于 1000 米" },
  { value: "1000-to-2000", en: "1,000–2,000 m", zh: "1000–2000 米" },
  { value: "above-2000", en: "Above 2,000 m", zh: "2000 米以上" },
  { value: "not-sure", en: "Not Sure", zh: "不确定" },
] as const;

const siteConditionOptions = [
  { value: "dust-sand", en: "Dust and Sand", zh: "沙尘" },
  { value: "coastal-salt-spray", en: "Coastal Salt Spray", zh: "沿海盐雾" },
  { value: "strong-winds", en: "Strong Winds", zh: "强风" },
  { value: "humid-rainy", en: "Humid or Rainy", zh: "潮湿多雨" },
  {
    value: "rough-road-transport",
    en: "Rough Road or Difficult Transport",
    zh: "复杂路况或运输困难",
  },
] as const;

const fuelAvailabilityOptions = [
  { value: "readily-available", en: "Readily Available", zh: "方便补充" },
  { value: "limited", en: "Limited", zh: "补给受限" },
  { value: "not-applicable", en: "Not Applicable", zh: "不适用" },
  { value: "not-sure", en: "Not Sure", zh: "不确定" },
] as const;

const lowNoiseRequirementOptions = [
  { value: "yes", en: "Yes", zh: "是" },
  { value: "no", en: "No", zh: "否" },
  { value: "not-sure", en: "Not Sure", zh: "不确定" },
] as const;

const externalEquipmentOptions = [
  { value: "camera", en: "Camera", zh: "摄像头" },
  { value: "speaker", en: "Speaker", zh: "喇叭" },
  { value: "router", en: "Router", zh: "路由器" },
  { value: "sensor", en: "Sensor", zh: "传感器" },
  { value: "other", en: "Other", zh: "其他" },
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
    operatingGroupTitle: "Project Operating Conditions",
    operatingGroupDescription:
      "Add temperature, altitude, site conditions, fuel availability or external equipment details.",
    operatingGroupAction: "Add Conditions",
    operatingGroupHideAction: "Hide Conditions",
    operatingFields: {
      dailyOperatingHours: "Expected Daily Operating Hours",
      ambientTemperature: "Ambient Temperature",
      altitude: "Altitude",
      siteConditions: "Site Conditions",
      fuelAvailability: "Fuel Availability",
      lowNoiseRequirement: "Low-Noise Requirement",
      externalEquipment: "External Equipment",
      expectedDeliveryTime: "Expected Delivery Time",
    },
    siteConditionsHelp:
      "Select all special site conditions that may affect equipment configuration or transport.",
    externalEquipmentHelp:
      "Select any equipment that may need power or mounting support.",
    expectedDeliveryTimePlaceholder: "For example: October 2026 or Q4 2026",
    websiteLabel: "Website",
    submit: "Submit Project Requirements",
    submitting: "Submitting…",
    submissionNote:
      "We use your information only to review and respond to your project inquiry.",
    success:
      "Your project requirements have been received. We will review the application and operating conditions and contact you by email or WhatsApp.",
    submissionErrors: {
      badRequest: "Please review the required fields and submit again.",
      unavailable: "The inquiry service is temporarily unavailable. Please try again later.",
      delivery: "We could not send your inquiry. Please try again later.",
      generic: "Something went wrong while submitting your inquiry. Please try again.",
    },
    fieldErrors: {
      required: "This field is required.",
      email: "Enter a valid work email address.",
      quantity: "Enter a whole number from 1 to 100000.",
      projectDescriptionTooLong: "Project description must not exceed 3000 characters.",
      expectedDeliveryTimeTooLong: "Expected delivery time must not exceed 100 characters.",
    },
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
    operatingGroupTitle: "项目运行条件",
    operatingGroupDescription:
      "可补充环境温度、海拔、现场条件、燃油补给或外接设备需求。",
    operatingGroupAction: "展开填写",
    operatingGroupHideAction: "收起",
    operatingFields: {
      dailyOperatingHours: "每天预计运行时间",
      ambientTemperature: "环境温度",
      altitude: "海拔",
      siteConditions: "现场环境",
      fuelAvailability: "燃油补给条件",
      lowNoiseRequirement: "低噪声要求",
      externalEquipment: "外接设备",
      expectedDeliveryTime: "预计交货时间",
    },
    siteConditionsHelp: "请选择所有可能影响设备配置或运输的特殊现场条件。",
    externalEquipmentHelp: "请选择可能需要供电或安装支持的外接设备。",
    expectedDeliveryTimePlaceholder: "例如：2026 年 10 月或 2026 年第四季度",
    websiteLabel: "网站",
    submit: "提交项目需求",
    submitting: "正在提交……",
    submissionNote: "我们仅使用您提交的信息审核并回复项目询价。",
    success:
      "项目需求已收到。我们将审核您提供的应用场景和运行条件，并通过邮箱或 WhatsApp 与您联系。",
    submissionErrors: {
      badRequest: "请检查必填信息后重新提交。",
      unavailable: "询价服务暂时不可用，请稍后重试。",
      delivery: "询价暂时未能发送，请稍后重试。",
      generic: "提交询价时出现问题，请重试。",
    },
    fieldErrors: {
      required: "此项为必填信息。",
      email: "请输入有效的工作邮箱。",
      quantity: "请输入 1 至 100000 之间的整数。",
      projectDescriptionTooLong: "项目说明不能超过 3000 个字符。",
      expectedDeliveryTimeTooLong: "预计交货时间不能超过 100 个字符。",
    },
  },
} as const;

export function ProjectInquiryForm({ language }: { language: Language }) {
  const copy = copyByLanguage[language];
  const formId = useId();
  const [formData, setFormData] = useState<ProjectInquiryData>(initialFormData);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>("idle");
  const [submissionError, setSubmissionError] = useState("");
  const [isOperatingConditionsOpen, setIsOperatingConditionsOpen] = useState(false);
  const submissionLockRef = useRef(false);
  const projectDescriptionHelpId = `${formId}-projectDescription-help`;
  const siteConditionsHelpId = `${formId}-siteConditions-help`;
  const externalEquipmentHelpId = `${formId}-externalEquipment-help`;
  const isSubmitting = submissionStatus === "submitting";

  function fieldId(field: keyof ProjectInquiryData) {
    return `${formId}-${field}`;
  }

  function optionId(field: MultiSelectField, value: string) {
    return `${formId}-${field}-${value}`;
  }

  function errorId(field: ErrorField) {
    return `${formId}-${field}-error`;
  }

  function isErrorField(field: keyof ProjectInquiryData): field is ErrorField {
    return [...requiredFields, "expectedDeliveryTime"].includes(field as ErrorField);
  }

  function clearFieldError(field: keyof ProjectInquiryData) {
    if (!isErrorField(field)) return;

    setFieldErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function updateField(field: TextField, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));
    clearFieldError(field);
    if (submissionStatus === "success" || submissionStatus === "error") {
      setSubmissionStatus("idle");
    }
  }

  function toggleMultiSelect(field: MultiSelectField, value: string) {
    setFormData((current) => {
      const values = current[field];
      return {
        ...current,
        [field]: values.includes(value)
          ? values.filter((currentValue) => currentValue !== value)
          : [...values, value],
      };
    });
    if (submissionStatus === "success" || submissionStatus === "error") {
      setSubmissionStatus("idle");
    }
  }

  function updateEstimatedQuantity(value: string) {
    if (/^\d*$/.test(value)) {
      updateField("estimatedQuantity", value);
    }
  }

  function describedBy(field: ErrorField, helpId?: string) {
    return [helpId, fieldErrors[field] ? errorId(field) : ""].filter(Boolean).join(" ") || undefined;
  }

  function renderFieldError(field: ErrorField) {
    const message = fieldErrors[field];
    return message ? (
      <span id={errorId(field)} className="mt-2 block text-sm font-medium text-red-700">
        {message}
      </span>
    ) : null;
  }

  function validateForm() {
    const errors: FieldErrors = {};
    const trimmedRequiredValues: Record<RequiredField, string> = {
      name: formData.name.trim(),
      workEmail: formData.workEmail.trim(),
      companyName: formData.companyName.trim(),
      countryOrRegion: formData.countryOrRegion.trim(),
      application: formData.application.trim(),
      estimatedQuantity: formData.estimatedQuantity.trim(),
      preferredSolution: formData.preferredSolution.trim(),
      projectDescription: formData.projectDescription.trim(),
    };

    requiredFields.forEach((field) => {
      if (!trimmedRequiredValues[field]) errors[field] = copy.fieldErrors.required;
    });

    if (
      trimmedRequiredValues.workEmail &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedRequiredValues.workEmail)
    ) {
      errors.workEmail = copy.fieldErrors.email;
    }

    if (trimmedRequiredValues.estimatedQuantity) {
      const quantity = Number(trimmedRequiredValues.estimatedQuantity);
      if (
        !/^\d+$/.test(trimmedRequiredValues.estimatedQuantity) ||
        !Number.isInteger(quantity) ||
        quantity < 1 ||
        quantity > 100000
      ) {
        errors.estimatedQuantity = copy.fieldErrors.quantity;
      }
    }

    if (formData.projectDescription.trim().length > 3000) {
      errors.projectDescription = copy.fieldErrors.projectDescriptionTooLong;
    }

    if (formData.expectedDeliveryTime.trim().length > 100) {
      errors.expectedDeliveryTime = copy.fieldErrors.expectedDeliveryTimeTooLong;
    }

    return errors;
  }

  function focusFirstInvalidField(form: HTMLFormElement, errors: FieldErrors) {
    const fieldOrder: ErrorField[] = [...requiredFields, "expectedDeliveryTime"];
    const firstInvalidField = fieldOrder.find((field) => errors[field]);
    if (!firstInvalidField) return;

    const element = form.elements.namedItem(firstInvalidField);
    if (element instanceof HTMLElement) element.focus();
  }

  function failureMessage(status: number) {
    if (status === 400) return copy.submissionErrors.badRequest;
    if (status === 503) return copy.submissionErrors.unavailable;
    if (status === 502) return copy.submissionErrors.delivery;
    return copy.submissionErrors.generic;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submissionLockRef.current) return;

    const form = event.currentTarget;
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setSubmissionError("");
      setSubmissionStatus("idle");
      focusFirstInvalidField(form, errors);
      return;
    }

    setFieldErrors({});
    setSubmissionError("");
    setSubmissionStatus("submitting");
    submissionLockRef.current = true;

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inquiryType: "general-project",
          language,
          name: formData.name.trim(),
          workEmail: formData.workEmail.trim(),
          companyName: formData.companyName.trim(),
          countryRegion: formData.countryOrRegion.trim(),
          phoneWhatsApp: formData.phoneOrWhatsApp.trim(),
          application: formData.application,
          estimatedQuantity: formData.estimatedQuantity,
          preferredSolution: formData.preferredSolution,
          projectDescription: formData.projectDescription.trim(),
          dailyOperatingHours: formData.dailyOperatingHours,
          ambientTemperature: formData.ambientTemperature,
          altitude: formData.altitude,
          siteConditions: formData.siteConditions,
          fuelAvailability: formData.fuelAvailability,
          lowNoiseRequirement: formData.lowNoiseRequirement,
          externalEquipment: formData.externalEquipment,
          expectedDeliveryTime: formData.expectedDeliveryTime.trim(),
          website: formData.website,
        }),
      });
      const responseBody = (await response.json().catch(() => null)) as {
        success?: unknown;
      } | null;

      if (response.status === 201 && responseBody?.success === true) {
        setFormData(initialFormData);
        setFieldErrors({});
        setSubmissionError("");
        setSubmissionStatus("success");
        setIsOperatingConditionsOpen(false);
        return;
      }

      setSubmissionError(failureMessage(response.status));
      setSubmissionStatus("error");
    } catch {
      setSubmissionError(copy.submissionErrors.generic);
      setSubmissionStatus("error");
    } finally {
      submissionLockRef.current = false;
    }
  }

  const inputClassName =
    "mt-2 h-12 w-full min-w-0 rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-950 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10";
  const labelClassName = "text-sm font-semibold text-slate-800";
  const statusClassName = "ml-2 text-xs font-medium text-slate-500";

  return (
    <>
      <section className="px-6 pb-14 sm:pb-16">
        <div className="mx-auto max-w-[960px]">
          <form
            noValidate
            onSubmit={handleSubmit}
            aria-busy={isSubmitting}
            className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8"
          >
            <div
              aria-hidden="true"
              className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
            >
              <label htmlFor={fieldId("website")}>{copy.websiteLabel}</label>
              <input
                id={fieldId("website")}
                name="website"
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
                value={formData.website}
                onChange={(event) => updateField("website", event.target.value)}
              />
            </div>

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
                    maxLength={120}
                    autoComplete="name"
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={describedBy("name")}
                    value={formData.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    className={inputClassName}
                  />
                  {renderFieldError("name")}
                </label>

                <label htmlFor={fieldId("workEmail")} className="block min-w-0">
                  <span className={labelClassName}>{copy.fields.workEmail}</span>
                  <span className={statusClassName}>{copy.required}</span>
                  <input
                    id={fieldId("workEmail")}
                    name="workEmail"
                    required
                    type="email"
                    maxLength={254}
                    autoComplete="email"
                    aria-invalid={Boolean(fieldErrors.workEmail)}
                    aria-describedby={describedBy("workEmail")}
                    value={formData.workEmail}
                    onChange={(event) => updateField("workEmail", event.target.value)}
                    className={inputClassName}
                  />
                  {renderFieldError("workEmail")}
                </label>

                <label htmlFor={fieldId("companyName")} className="block min-w-0">
                  <span className={labelClassName}>{copy.fields.companyName}</span>
                  <span className={statusClassName}>{copy.required}</span>
                  <input
                    id={fieldId("companyName")}
                    name="companyName"
                    required
                    maxLength={160}
                    autoComplete="organization"
                    aria-invalid={Boolean(fieldErrors.companyName)}
                    aria-describedby={describedBy("companyName")}
                    value={formData.companyName}
                    onChange={(event) => updateField("companyName", event.target.value)}
                    className={inputClassName}
                  />
                  {renderFieldError("companyName")}
                </label>

                <label htmlFor={fieldId("countryOrRegion")} className="block min-w-0">
                  <span className={labelClassName}>{copy.fields.countryOrRegion}</span>
                  <span className={statusClassName}>{copy.required}</span>
                  <input
                    id={fieldId("countryOrRegion")}
                    name="countryOrRegion"
                    required
                    maxLength={120}
                    aria-invalid={Boolean(fieldErrors.countryOrRegion)}
                    aria-describedby={describedBy("countryOrRegion")}
                    value={formData.countryOrRegion}
                    onChange={(event) => updateField("countryOrRegion", event.target.value)}
                    className={inputClassName}
                  />
                  {renderFieldError("countryOrRegion")}
                </label>

                <label htmlFor={fieldId("phoneOrWhatsApp")} className="block min-w-0 md:col-span-2">
                  <span className={labelClassName}>{copy.fields.phoneOrWhatsApp}</span>
                  <span className={statusClassName}>{copy.optional}</span>
                  <input
                    id={fieldId("phoneOrWhatsApp")}
                    name="phoneOrWhatsApp"
                    type="tel"
                    maxLength={80}
                    autoComplete="tel"
                    value={formData.phoneOrWhatsApp}
                    onChange={(event) => updateField("phoneOrWhatsApp", event.target.value)}
                    className={inputClassName}
                  />
                </label>
              </div>
            </fieldset>

            <fieldset className="mt-8 min-w-0 border-t border-slate-200 pt-8">
              <legend className="text-2xl font-bold tracking-tight text-slate-950">
                {copy.projectGroupTitle}
              </legend>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                {copy.projectGroupDescription}
              </p>

              <div className="mt-6 grid min-w-0 gap-5 md:grid-cols-2">
                <label htmlFor={fieldId("application")} className="block min-w-0">
                  <span className={labelClassName}>{copy.fields.application}</span>
                  <span className={statusClassName}>{copy.required}</span>
                  <select
                    id={fieldId("application")}
                    name="application"
                    required
                    aria-invalid={Boolean(fieldErrors.application)}
                    aria-describedby={describedBy("application")}
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
                  {renderFieldError("application")}
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
                    aria-invalid={Boolean(fieldErrors.estimatedQuantity)}
                    aria-describedby={describedBy("estimatedQuantity")}
                    value={formData.estimatedQuantity}
                    onChange={(event) => updateEstimatedQuantity(event.target.value)}
                    className={inputClassName}
                  />
                  {renderFieldError("estimatedQuantity")}
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
                    aria-invalid={Boolean(fieldErrors.preferredSolution)}
                    aria-describedby={describedBy("preferredSolution")}
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
                  {renderFieldError("preferredSolution")}
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
                    aria-invalid={Boolean(fieldErrors.projectDescription)}
                    aria-describedby={describedBy(
                      "projectDescription",
                      projectDescriptionHelpId,
                    )}
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
                  {renderFieldError("projectDescription")}
                </label>
              </div>

            </fieldset>

            <section className="mt-8 min-w-0 border-t border-slate-200 pt-8">
              <button
                type="button"
                aria-expanded={isOperatingConditionsOpen}
                aria-controls="project-operating-conditions"
                onClick={() => setIsOperatingConditionsOpen((open) => !open)}
                className="group grid w-full min-w-0 grid-cols-1 items-center gap-y-3 rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-4 text-left transition-colors hover:border-blue-300 hover:bg-blue-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-x-4 sm:px-5"
              >
                <span className="min-w-0">
                  <span className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-lg font-bold tracking-tight text-slate-950">
                      {copy.operatingGroupTitle}
                    </span>
                    <span className="text-xs font-medium text-slate-500">{copy.optional}</span>
                  </span>
                  <span className="mt-1.5 block max-w-2xl text-sm leading-6 text-slate-600">
                    {copy.operatingGroupDescription}
                  </span>
                </span>
                <span className="flex shrink-0 items-center justify-between gap-2 text-sm font-semibold text-slate-700 group-hover:text-blue-700 sm:justify-start">
                  <span>
                    {isOperatingConditionsOpen
                      ? copy.operatingGroupHideAction
                      : copy.operatingGroupAction}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 border-b-2 border-r-2 border-current transition-transform ${
                      isOperatingConditionsOpen ? "rotate-[225deg]" : "rotate-45"
                    }`}
                  />
                </span>
              </button>

              <div
                id="project-operating-conditions"
                hidden={!isOperatingConditionsOpen}
                className="mt-6 grid min-w-0 gap-5 rounded-xl border border-slate-200 bg-white p-4 sm:p-5 md:grid-cols-2"
              >
                <label htmlFor={fieldId("dailyOperatingHours")} className="block min-w-0">
                  <span className={labelClassName}>
                    {copy.operatingFields.dailyOperatingHours}
                  </span>
                  <span className={statusClassName}>{copy.optional}</span>
                  <select
                    id={fieldId("dailyOperatingHours")}
                    name="dailyOperatingHours"
                    value={formData.dailyOperatingHours}
                    onChange={(event) => updateField("dailyOperatingHours", event.target.value)}
                    className={inputClassName}
                  >
                    <option value="">{copy.selectPrompt}</option>
                    {dailyOperatingHoursOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option[language]}
                      </option>
                    ))}
                  </select>
                </label>

                <label htmlFor={fieldId("ambientTemperature")} className="block min-w-0">
                  <span className={labelClassName}>
                    {copy.operatingFields.ambientTemperature}
                  </span>
                  <span className={statusClassName}>{copy.optional}</span>
                  <select
                    id={fieldId("ambientTemperature")}
                    name="ambientTemperature"
                    value={formData.ambientTemperature}
                    onChange={(event) => updateField("ambientTemperature", event.target.value)}
                    className={inputClassName}
                  >
                    <option value="">{copy.selectPrompt}</option>
                    {ambientTemperatureOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option[language]}
                      </option>
                    ))}
                  </select>
                </label>

                <label htmlFor={fieldId("altitude")} className="block min-w-0">
                  <span className={labelClassName}>{copy.operatingFields.altitude}</span>
                  <span className={statusClassName}>{copy.optional}</span>
                  <select
                    id={fieldId("altitude")}
                    name="altitude"
                    value={formData.altitude}
                    onChange={(event) => updateField("altitude", event.target.value)}
                    className={inputClassName}
                  >
                    <option value="">{copy.selectPrompt}</option>
                    {altitudeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option[language]}
                      </option>
                    ))}
                  </select>
                </label>

                <label htmlFor={fieldId("fuelAvailability")} className="block min-w-0">
                  <span className={labelClassName}>
                    {copy.operatingFields.fuelAvailability}
                  </span>
                  <span className={statusClassName}>{copy.optional}</span>
                  <select
                    id={fieldId("fuelAvailability")}
                    name="fuelAvailability"
                    value={formData.fuelAvailability}
                    onChange={(event) => updateField("fuelAvailability", event.target.value)}
                    className={inputClassName}
                  >
                    <option value="">{copy.selectPrompt}</option>
                    {fuelAvailabilityOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option[language]}
                      </option>
                    ))}
                  </select>
                </label>

                <fieldset
                  aria-describedby={siteConditionsHelpId}
                  className="min-w-0 md:col-span-2"
                >
                  <legend className={labelClassName}>
                    {copy.operatingFields.siteConditions}
                    <span className={statusClassName}>{copy.optional}</span>
                  </legend>
                  <p
                    id={siteConditionsHelpId}
                    className="mt-2 text-sm leading-6 text-slate-500"
                  >
                    {copy.siteConditionsHelp}
                  </p>
                  <div className="mt-3 grid min-w-0 gap-3 sm:grid-cols-2">
                    {siteConditionOptions.map((option) => {
                      const id = optionId("siteConditions", option.value);
                      return (
                        <label
                          key={option.value}
                          htmlFor={id}
                          className={`flex min-h-12 min-w-0 cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-sm leading-6 text-slate-700 transition-colors hover:border-blue-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-600/15 ${
                            formData.siteConditions.includes(option.value)
                              ? "border-blue-300 bg-blue-50/60"
                              : "border-slate-200 bg-white"
                          }`}
                        >
                          <input
                            id={id}
                            name="siteConditions"
                            type="checkbox"
                            value={option.value}
                            checked={formData.siteConditions.includes(option.value)}
                            onChange={() => toggleMultiSelect("siteConditions", option.value)}
                            className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
                          />
                          <span className="min-w-0">{option[language]}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <label htmlFor={fieldId("lowNoiseRequirement")} className="block min-w-0">
                  <span className={labelClassName}>
                    {copy.operatingFields.lowNoiseRequirement}
                  </span>
                  <span className={statusClassName}>{copy.optional}</span>
                  <select
                    id={fieldId("lowNoiseRequirement")}
                    name="lowNoiseRequirement"
                    value={formData.lowNoiseRequirement}
                    onChange={(event) => updateField("lowNoiseRequirement", event.target.value)}
                    className={inputClassName}
                  >
                    <option value="">{copy.selectPrompt}</option>
                    {lowNoiseRequirementOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option[language]}
                      </option>
                    ))}
                  </select>
                </label>

                <label htmlFor={fieldId("expectedDeliveryTime")} className="block min-w-0">
                  <span className={labelClassName}>
                    {copy.operatingFields.expectedDeliveryTime}
                  </span>
                  <span className={statusClassName}>{copy.optional}</span>
                  <input
                    id={fieldId("expectedDeliveryTime")}
                    name="expectedDeliveryTime"
                    type="text"
                    maxLength={100}
                    aria-invalid={Boolean(fieldErrors.expectedDeliveryTime)}
                    aria-describedby={describedBy("expectedDeliveryTime")}
                    placeholder={copy.expectedDeliveryTimePlaceholder}
                    value={formData.expectedDeliveryTime}
                    onChange={(event) => updateField("expectedDeliveryTime", event.target.value)}
                    className={inputClassName}
                  />
                  {renderFieldError("expectedDeliveryTime")}
                </label>

                <fieldset
                  aria-describedby={externalEquipmentHelpId}
                  className="min-w-0 md:col-span-2"
                >
                  <legend className={labelClassName}>
                    {copy.operatingFields.externalEquipment}
                    <span className={statusClassName}>{copy.optional}</span>
                  </legend>
                  <p
                    id={externalEquipmentHelpId}
                    className="mt-2 text-sm leading-6 text-slate-500"
                  >
                    {copy.externalEquipmentHelp}
                  </p>
                  <div className="mt-3 grid min-w-0 gap-3 sm:grid-cols-2">
                    {externalEquipmentOptions.map((option) => {
                      const id = optionId("externalEquipment", option.value);
                      return (
                        <label
                          key={option.value}
                          htmlFor={id}
                          className={`flex min-h-12 min-w-0 cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-sm leading-6 text-slate-700 transition-colors hover:border-blue-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-600/15 ${
                            formData.externalEquipment.includes(option.value)
                              ? "border-blue-300 bg-blue-50/60"
                              : "border-slate-200 bg-white"
                          }`}
                        >
                          <input
                            id={id}
                            name="externalEquipment"
                            type="checkbox"
                            value={option.value}
                            checked={formData.externalEquipment.includes(option.value)}
                            onChange={() => toggleMultiSelect("externalEquipment", option.value)}
                            className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
                          />
                          <span className="min-w-0">{option[language]}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
              </div>
            </section>

            <div className="mt-8 border-t border-slate-200 pt-7">
              <button
                type="submit"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-blue-600 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:text-slate-100 sm:w-auto"
              >
                {isSubmitting ? copy.submitting : copy.submit}
              </button>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                {copy.submissionNote}
              </p>
              <div className="mt-3 min-h-14">
                {submissionStatus === "success" ? (
                  <p
                    role="status"
                    aria-live="polite"
                    className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium leading-6 text-green-800"
                  >
                    {copy.success}
                  </p>
                ) : null}
                {submissionStatus === "error" ? (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium leading-6 text-red-800"
                  >
                    {submissionError}
                  </p>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
