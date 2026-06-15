"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ChangeEvent, ReactNode, useMemo, useRef, useState } from "react";

type SpecificationRow = {
  label: string;
  value: string;
};

type TemplateStyle = "industrial" | "minimal" | "dark";
type PdfQuality = "standard" | "high";

type CatalogData = {
  productName: string;
  chineseName: string;
  productModel: string;
  productCategory: string;
  shortDescription: string;
  features: string[];
  specifications: SpecificationRow[];
  selectedApplications: string[];
  companyName: string;
  website: string;
  email: string;
  whatsapp: string;
};

const applicationTags = [
  "Construction",
  "Mining",
  "Emergency Rescue",
  "Equipment Rental",
  "Municipal",
  "Oil & Gas",
  "Power Utility",
  "Road Construction",
  "Tunnel Construction",
  "Disaster Relief",
];

const defaultCatalogData: CatalogData = {
  productName: "LED Hydraulic Mobile Lighting Tower",
  chineseName: "LED液压移动照明灯塔",
  productModel: "LF6130",
  productCategory: "Mobile Light Tower / 移动照明灯塔",
  shortDescription:
    "Professional LED hydraulic mobile lighting tower designed for construction, mining, emergency rescue, equipment rental and temporary outdoor projects.",
  features: ["4×400W LED", "Kubota Z482 Engine", "9m Hydraulic Mast", "IP65 Protection", "48h Runtime"],
  specifications: [
    { label: "Lighting", value: "4×400W LED" },
    { label: "Engine", value: "Kubota Z482" },
    { label: "Mast", value: "9m Hydraulic Mast" },
    { label: "Protection", value: "IP65" },
    { label: "Runtime", value: "48h" },
    { label: "Application", value: "Outdoor Worksites" },
  ],
  selectedApplications: ["Construction", "Mining", "Emergency Rescue", "Equipment Rental"],
  companyName: "Zhejiang Longfa Lighting Co., Ltd.",
  website: "www.lfadj.com",
  email: "info@lfadj.com",
  whatsapp: "WhatsApp",
};

const templateOptions: Array<{ id: TemplateStyle; label: string }> = [
  { id: "industrial", label: "Industrial Blue" },
  { id: "minimal", label: "Minimal White" },
  { id: "dark", label: "Dark Header" },
];

const qualityOptions: Array<{ id: PdfQuality; label: string }> = [
  { id: "standard", label: "Standard" },
  { id: "high", label: "High" },
];

function slugPart(value: string) {
  return value
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toUpperCase();
}

function filenameFor(model: string) {
  return `LFADJ-${slugPart(model)}-Product-Catalog.pdf`;
}

function PanelCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
      <h2 className="text-base font-bold text-[#111827]">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function TextInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#374151]">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm text-[#111827] outline-none transition focus:border-[#0B3B6F] focus:ring-2 focus:ring-[#0B3B6F]/10"
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-[#374151]">{label}</span>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={rows}
        className="mt-2 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 py-3 text-sm leading-6 text-[#111827] outline-none transition focus:border-[#0B3B6F] focus:ring-2 focus:ring-[#0B3B6F]/10"
      />
    </label>
  );
}

function SettingRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3">
      <span className="text-sm font-semibold text-[#374151]">{label}</span>
      <span className="text-right text-sm font-bold text-[#0B3B6F]">{value}</span>
    </div>
  );
}

export default function PdfCatalogGeneratorPage() {
  const [catalogData, setCatalogData] = useState<CatalogData>(defaultCatalogData);
  const [imagePreview, setImagePreview] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [templateStyle, setTemplateStyle] = useState<TemplateStyle>("industrial");
  const [pdfQuality, setPdfQuality] = useState<PdfQuality>("standard");
  const previewRef = useRef<HTMLDivElement>(null);

  const highlights = useMemo(() => catalogData.features.filter(Boolean).slice(0, 5), [catalogData.features]);
  const fileName = filenameFor(catalogData.productModel);
  const brandBarClass =
    templateStyle === "minimal"
      ? "border-b border-[#E5E7EB] bg-white text-[#0B3B6F]"
      : templateStyle === "dark"
        ? "bg-[#111827] text-white"
        : "bg-[#0B3B6F] text-white";
  const brandSubTextClass = templateStyle === "minimal" ? "text-[#6B7280]" : "text-blue-100";

  function updateField<K extends keyof CatalogData>(field: K, value: CatalogData[K]) {
    setCatalogData((current) => ({ ...current, [field]: value }));
  }

  function updateFeature(index: number, value: string) {
    const next = [...catalogData.features];
    next[index] = value;
    updateField("features", next);
  }

  function removeFeature(index: number) {
    updateField(
      "features",
      catalogData.features.filter((_, itemIndex) => itemIndex !== index),
    );
  }

  function updateSpecification(index: number, field: keyof SpecificationRow, value: string) {
    const next = [...catalogData.specifications];
    next[index] = { ...next[index], [field]: value };
    updateField("specifications", next);
  }

  function removeSpecification(index: number) {
    updateField(
      "specifications",
      catalogData.specifications.filter((_, itemIndex) => itemIndex !== index),
    );
  }

  function toggleApplication(tag: string) {
    const exists = catalogData.selectedApplications.includes(tag);
    updateField(
      "selectedApplications",
      exists
        ? catalogData.selectedApplications.filter((item) => item !== tag)
        : [...catalogData.selectedApplications, tag],
    );
  }

  function handleImageUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  }

  function resetDemoData() {
    setCatalogData(defaultCatalogData);
    setImagePreview("");
    setTemplateStyle("industrial");
    setPdfQuality("standard");
    setErrorMessage("");
  }

  async function generatePdf() {
    if (!previewRef.current) return;

    setIsGenerating(true);
    setErrorMessage("");

    try {
      const pages = Array.from(previewRef.current.querySelectorAll<HTMLElement>("[data-pdf-page]"));
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      for (const [index, page] of pages.entries()) {
        const canvas = await html2canvas(page, {
          scale: pdfQuality === "high" ? 3 : 2,
          backgroundColor: "#FFFFFF",
          useCORS: true,
        });
        const imageData = canvas.toDataURL("image/png");
        if (index > 0) pdf.addPage();
        pdf.addImage(imageData, "PNG", 0, 0, pageWidth, pageHeight);
      }

      pdf.save(fileName);
    } catch (error) {
      console.error(error);
      setErrorMessage("PDF generation failed. Please check the uploaded image and try again.");
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F3F4F6] text-[#111827]">
      <header className="sticky top-0 z-30 border-b border-[#E5E7EB] bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-[1760px] flex-col gap-5 px-5 py-5 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
              LFADJ AI Digital Factory
            </p>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-[#111827] md:text-4xl">
              LFADJ PDF Catalog Generator V3.0
            </h1>
            <p className="mt-1 text-lg font-semibold text-[#0B3B6F]">PDF目录生成工具 企业版</p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[#6B7280]">
              Enterprise bilingual catalog builder for mobile lighting tower products.
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
            {errorMessage ? <p className="text-sm font-medium text-red-600">{errorMessage}</p> : null}
            <button
              type="button"
              onClick={generatePdf}
              disabled={isGenerating}
              className="h-12 min-w-44 rounded-xl bg-[#0B3B6F] px-7 text-sm font-bold text-white shadow-sm transition hover:bg-[#082f59] disabled:cursor-not-allowed disabled:bg-[#6B7280]"
            >
              {isGenerating ? "Generating PDF..." : "Generate PDF"}
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1760px] gap-6 px-5 py-6 xl:grid-cols-[390px_minmax(720px,1fr)_320px] lg:px-8">
        <aside className="space-y-5 xl:max-h-[calc(100vh-150px)] xl:overflow-y-auto xl:pr-1">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6B7280]">Left Panel</p>
            <h2 className="mt-2 text-xl font-bold text-[#111827]">Product Data Input Panel</h2>
            <p className="mt-2 text-sm leading-6 text-[#6B7280]">Fill bilingual product data for the catalog preview.</p>
          </div>

          <PanelCard title="A. Brand Information / 品牌信息">
            <TextInput label="Company Name / 公司名称" value={catalogData.companyName} onChange={(value) => updateField("companyName", value)} />
            <TextInput label="Website / 官网" value={catalogData.website} onChange={(value) => updateField("website", value)} />
            <TextInput label="Email / 邮箱" value={catalogData.email} onChange={(value) => updateField("email", value)} />
            <TextInput label="WhatsApp / WhatsApp" value={catalogData.whatsapp} onChange={(value) => updateField("whatsapp", value)} />
          </PanelCard>

          <PanelCard title="B. Product Basic Information / 产品基础信息">
            <TextInput label="Product Name / 产品名称" value={catalogData.productName} onChange={(value) => updateField("productName", value)} />
            <TextInput label="Chinese Name / 中文名称" value={catalogData.chineseName} onChange={(value) => updateField("chineseName", value)} />
            <TextInput label="Product Model / 产品型号" value={catalogData.productModel} onChange={(value) => updateField("productModel", value)} />
            <TextInput label="Product Category / 产品类别" value={catalogData.productCategory} onChange={(value) => updateField("productCategory", value)} />
            <TextArea label="Short Description / 简短描述" value={catalogData.shortDescription} onChange={(value) => updateField("shortDescription", value)} rows={5} />
          </PanelCard>

          <PanelCard title="C. Product Image / 产品图片">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full rounded-xl border border-dashed border-[#CBD5E1] bg-[#F9FAFB] px-4 py-4 text-sm text-[#6B7280]"
            />
            <div className="flex min-h-44 items-center justify-center rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
              {imagePreview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={imagePreview} alt="Uploaded product preview" className="max-h-40 max-w-full object-contain" />
              ) : (
                <span className="text-sm font-semibold text-[#6B7280]">Product Image / 产品图片</span>
              )}
            </div>
            <p className="text-xs leading-5 text-[#6B7280]">Upload one product image. It will appear immediately in the A4 preview and exported PDF.</p>
          </PanelCard>

          <PanelCard title="D. Key Features / 核心特点">
            {catalogData.features.map((feature, index) => (
              <div key={index} className="grid grid-cols-[1fr_auto] gap-2">
                <input
                  value={feature}
                  onChange={(event) => updateFeature(index, event.target.value)}
                  className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm outline-none transition focus:border-[#0B3B6F] focus:ring-2 focus:ring-[#0B3B6F]/10"
                  aria-label={`Feature ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="h-11 rounded-xl border border-[#E5E7EB] px-3 text-sm font-bold text-[#6B7280] transition hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => updateField("features", [...catalogData.features, ""])}
              className="h-10 rounded-xl border border-[#0B3B6F] px-4 text-sm font-bold text-[#0B3B6F] transition hover:bg-[#0B3B6F] hover:text-white"
            >
              + Add Feature
            </button>
          </PanelCard>

          <PanelCard title="E. Technical Specifications / 技术参数">
            {catalogData.specifications.map((row, index) => (
              <div key={index} className="grid grid-cols-[0.85fr_1fr_auto] gap-2">
                <input
                  value={row.label}
                  onChange={(event) => updateSpecification(index, "label", event.target.value)}
                  className="h-11 rounded-xl border border-[#E5E7EB] px-3 text-sm outline-none focus:border-[#0B3B6F]"
                  aria-label={`Specification label ${index + 1}`}
                />
                <input
                  value={row.value}
                  onChange={(event) => updateSpecification(index, "value", event.target.value)}
                  className="h-11 rounded-xl border border-[#E5E7EB] px-3 text-sm outline-none focus:border-[#0B3B6F]"
                  aria-label={`Specification value ${index + 1}`}
                />
                <button
                  type="button"
                  onClick={() => removeSpecification(index)}
                  className="h-11 rounded-xl border border-[#E5E7EB] px-3 text-sm font-bold text-[#6B7280] transition hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => updateField("specifications", [...catalogData.specifications, { label: "", value: "" }])}
              className="h-10 rounded-xl border border-[#0B3B6F] px-4 text-sm font-bold text-[#0B3B6F] transition hover:bg-[#0B3B6F] hover:text-white"
            >
              + Add Specification
            </button>
          </PanelCard>

          <PanelCard title="F. Applications / 应用场景">
            <div className="flex flex-wrap gap-2">
              {applicationTags.map((tag) => {
                const selected = catalogData.selectedApplications.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleApplication(tag)}
                    className={`rounded-full border px-3 py-2 text-sm font-semibold transition ${
                      selected
                        ? "border-[#0B3B6F] bg-[#0B3B6F] text-white"
                        : "border-[#E5E7EB] bg-white text-[#6B7280] hover:border-[#0B3B6F] hover:text-[#0B3B6F]"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </PanelCard>
        </aside>

        <section className="rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm md:p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6B7280]">Center Panel</p>
              <h2 className="mt-2 text-xl font-bold text-[#111827]">A4 Live Preview / A4实时预览</h2>
              <p className="mt-1 text-sm text-[#6B7280]">Two-page bilingual catalog layout, ready for PDF export.</p>
            </div>
            <div className="hidden rounded-full bg-[#F3F4F6] px-4 py-2 text-sm font-semibold text-[#6B7280] md:block">
              A4 · 2 Pages
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl bg-[#F3F4F6] p-4 md:p-8">
            <div ref={previewRef} className="mx-auto flex w-[794px] flex-col gap-12">
              <div>
                <div className="mb-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#6B7280]">
                  Page 1 · Cover
                </div>
                <article data-pdf-page className="h-[1123px] overflow-hidden bg-white shadow-2xl ring-1 ring-black/5">
                  <div className="flex h-full flex-col">
                    <div className={`${brandBarClass} px-12 py-7`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-4xl font-bold tracking-tight">LFADJ</div>
                          <div className={`mt-1 text-sm font-medium ${brandSubTextClass}`}>Professional Mobile Lighting Solutions</div>
                        </div>
                        <div className="rounded-full border border-current/30 px-4 py-2 text-sm font-bold">Product Catalog</div>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col px-12 py-10">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#6B7280]">{catalogData.productModel}</p>
                        <h2 className="mt-4 max-w-[650px] text-5xl font-bold leading-[1.08] text-[#0B3B6F]">{catalogData.productName}</h2>
                        <p className="mt-3 text-2xl font-semibold text-[#111827]">{catalogData.chineseName}</p>
                      </div>

                      <div className="my-8 flex min-h-[430px] flex-1 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-10">
                        {imagePreview ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={imagePreview} alt={catalogData.productName} className="max-h-full max-w-full object-contain" />
                        ) : (
                          <div className="flex h-full min-h-[350px] w-full items-center justify-center rounded-xl border border-dashed border-[#CBD5E1] text-lg font-semibold text-[#6B7280]">
                            Product Image / 产品图片
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-5 gap-3">
                        {highlights.map((feature, index) => (
                          <div key={`${feature}-${index}`} className="flex min-h-[82px] items-center justify-center rounded-2xl bg-[#F3F4F6] px-3 text-center text-sm font-bold leading-5 text-[#0B3B6F]">
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#111827] px-12 py-5 text-sm font-semibold text-white">
                      <div className="flex items-center justify-between gap-4">
                        <span>{catalogData.website}</span>
                        <span>{catalogData.email}</span>
                        <span>{catalogData.whatsapp}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              <div>
                <div className="mb-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#6B7280]">
                  Page 2 · Details
                </div>
                <article data-pdf-page className="h-[1123px] overflow-hidden bg-white p-11 shadow-2xl ring-1 ring-black/5">
                  <header className="flex items-center justify-between border-b border-[#E5E7EB] pb-5">
                    <div>
                      <div className="text-3xl font-bold text-[#0B3B6F]">LFADJ</div>
                      <p className="mt-1 text-sm font-medium text-[#6B7280]">Professional Mobile Lighting Solutions</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6B7280]">Product Details</p>
                      <p className="mt-1 text-lg font-bold text-[#111827]">{catalogData.productModel}</p>
                    </div>
                  </header>

                  <section className="grid gap-6 pt-7">
                    <div>
                      <h3 className="text-2xl font-bold text-[#0B3B6F]">Overview / 产品介绍</h3>
                      <p className="mt-3 text-[15px] leading-7 text-[#374151]">{catalogData.shortDescription}</p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#0B3B6F]">Technical Specifications / 技术参数</h3>
                      <div className="mt-3 overflow-hidden rounded-2xl border border-[#E5E7EB]">
                        {catalogData.specifications
                          .filter((row) => row.label || row.value)
                          .slice(0, 8)
                          .map((row, index) => (
                            <div key={`${row.label}-${index}`} className="grid grid-cols-[210px_1fr] border-b border-[#E5E7EB] last:border-b-0">
                              <div className="bg-[#F3F4F6] px-5 py-2.5 text-sm font-bold text-[#111827]">{row.label || "Specification"}</div>
                              <div className="px-5 py-2.5 text-sm text-[#374151]">{row.value}</div>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#0B3B6F]">Applications / 应用场景</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {catalogData.selectedApplications.map((tag) => (
                          <span key={tag} className="rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-2 text-sm font-semibold text-[#374151]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#0B3B6F]">Features / 核心特点</h3>
                      <div className="mt-3 grid grid-cols-2 gap-3">
                        {catalogData.features
                          .filter(Boolean)
                          .slice(0, 8)
                          .map((feature, index) => (
                            <div key={`${feature}-${index}`} className="rounded-2xl bg-[#F3F4F6] px-4 py-3 text-sm font-semibold text-[#111827]">
                              {feature}
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="rounded-2xl bg-[#0B3B6F] p-6 text-white">
                      <h3 className="text-2xl font-bold">Company Information / 公司信息</h3>
                      <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                        <p>
                          <span className="block text-blue-100">Company / 公司</span>
                          <strong>{catalogData.companyName}</strong>
                        </p>
                        <p>
                          <span className="block text-blue-100">Category / 类别</span>
                          <strong>{catalogData.productCategory}</strong>
                        </p>
                        <p>
                          <span className="block text-blue-100">Website / 官网</span>
                          <strong>{catalogData.website}</strong>
                        </p>
                        <p>
                          <span className="block text-blue-100">Email / 邮箱</span>
                          <strong>{catalogData.email}</strong>
                        </p>
                      </div>
                    </div>
                  </section>

                  <footer className="mt-7 border-t border-[#E5E7EB] pt-4 text-center text-sm font-semibold text-[#6B7280]">
                    {catalogData.website}
                  </footer>
                </article>
              </div>
            </div>
          </div>
        </section>

        <aside className="space-y-5 xl:max-h-[calc(100vh-150px)] xl:overflow-y-auto xl:pl-1">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6B7280]">Right Panel</p>
            <h2 className="mt-2 text-xl font-bold text-[#111827]">Template / Export Settings</h2>
            <p className="mt-2 text-sm leading-6 text-[#6B7280]">Choose template style and export options for the A4 PDF catalog.</p>
          </div>

          <PanelCard title="Template Style / 模板样式">
            <div className="grid gap-2">
              {templateOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setTemplateStyle(option.id)}
                  className={`h-11 rounded-xl border px-4 text-left text-sm font-bold transition ${
                    templateStyle === option.id
                      ? "border-[#0B3B6F] bg-[#0B3B6F] text-white"
                      : "border-[#E5E7EB] bg-white text-[#374151] hover:border-[#0B3B6F] hover:text-[#0B3B6F]"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </PanelCard>

          <PanelCard title="Export Options / 导出选项">
            <div>
              <p className="text-sm font-semibold text-[#374151]">PDF Quality / PDF质量</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {qualityOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setPdfQuality(option.id)}
                    className={`h-10 rounded-xl border text-sm font-bold transition ${
                      pdfQuality === option.id
                        ? "border-[#0B3B6F] bg-[#0B3B6F] text-white"
                        : "border-[#E5E7EB] bg-white text-[#374151] hover:border-[#0B3B6F] hover:text-[#0B3B6F]"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            <SettingRow label="Page Size" value="A4" />
            <SettingRow label="Filename" value={fileName} />
          </PanelCard>

          <PanelCard title="Actions / 操作">
            <button
              type="button"
              onClick={generatePdf}
              disabled={isGenerating}
              className="h-12 w-full rounded-xl bg-[#0B3B6F] px-5 text-sm font-bold text-white shadow-sm transition hover:bg-[#082f59] disabled:cursor-not-allowed disabled:bg-[#6B7280]"
            >
              {isGenerating ? "Generating PDF..." : "Generate PDF"}
            </button>
            <button
              type="button"
              onClick={resetDemoData}
              className="h-12 w-full rounded-xl border border-[#E5E7EB] bg-white px-5 text-sm font-bold text-[#374151] transition hover:border-[#0B3B6F] hover:text-[#0B3B6F]"
            >
              Reset Demo Data
            </button>
          </PanelCard>

          <PanelCard title="Catalog Readiness / 目录完整度">
            <div className="space-y-3">
              {[
                ["Product data", Boolean(catalogData.productName && catalogData.productModel)],
                ["Feature cards", highlights.length >= 5],
                ["Specifications", catalogData.specifications.filter((row) => row.label && row.value).length >= 4],
                ["Applications", catalogData.selectedApplications.length > 0],
                ["Product image", Boolean(imagePreview)],
              ].map(([label, ready]) => (
                <div key={String(label)} className="flex items-center justify-between rounded-xl bg-[#F9FAFB] px-4 py-3">
                  <span className="text-sm font-semibold text-[#374151]">{label}</span>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${ready ? "bg-green-100 text-green-700" : "bg-[#E5E7EB] text-[#6B7280]"}`}>
                    {ready ? "Ready" : "Pending"}
                  </span>
                </div>
              ))}
            </div>
          </PanelCard>
        </aside>
      </section>
    </main>
  );
}
