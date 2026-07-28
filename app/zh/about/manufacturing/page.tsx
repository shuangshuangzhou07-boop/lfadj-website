import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const processSteps = ["项目需求", "产品配置", "制造协调", "质量检验", "交付"];

const qualityChecks = ["材料检验", "结构质量检查", "电气测试", "出货前最终检查"];

const configurationCategories = [
  {
    title: "动力配置",
    items: ["Kubota", "Yanmar", "Perkins", "其他发动机选项"],
  },
  {
    title: "照明配置",
    items: ["LED输出选项", "光束配置", "照明覆盖范围"],
  },
  {
    title: "灯杆系统",
    items: ["手动灯杆", "电动灯杆"],
  },
];

const qualityStandards = ["ISO9001", "ISO14001", "ISO45001"];

const experienceVisuals = [
  {
    title: "制造过程",
    subject: "移动照明设备零部件加工与焊接过程。",
    imageSrc: "/images/about/manufacturing/mobile-light-tower-manufacturing-process.webp",
    imageAlt: "包含焊接工序的移动照明灯塔制造过程",
  },
  {
    title: "质量检测",
    subject: "出货前电气检查与系统测试。",
    imageSrc: "/images/about/manufacturing/mobile-light-tower-quality-inspection.webp",
    imageAlt: "移动照明灯塔质量检测与电气测试",
  },
  {
    title: "成品准备",
    subject: "完成装配的移动照明设备，准备进行检查与交付。",
    imageSrc: "/images/about/manufacturing/mobile-light-tower-finished-product-preparation.webp",
    imageAlt: "准备交付的移动照明灯塔成品",
  },
];

const manufacturingExperience = ["结构件制造", "部件装配", "电气测试", "最终检查", "出货准备"];

const reasonsToChoose = ["项目化照明解决方案", "可靠供应链管理", "灵活产品配置", "质量管控交付"];

const relatedLinks = [
  { href: "/zh/applications/mining-lighting", label: "矿山照明" },
  { href: "/zh/applications/construction-lighting", label: "建筑照明" },
  { href: "/zh/applications/oil-gas-lighting", label: "油气照明" },
  { href: "/zh/applications/rental-lighting", label: "租赁照明" },
  { href: "/zh/applications/emergency-lighting", label: "应急照明" },
  { href: "/zh/resources/what-is-mobile-light-tower", label: "什么是移动照明灯塔？" },
];

export const metadata: Metadata = {
  title: "移动照明灯塔制造与质量管理 | LFADJ",
  description: "了解LFADJ如何通过专业制造合作伙伴、项目化配置和严格质量管理，为全球客户提供可靠的移动照明解决方案。",
};

export default function ChineseManufacturingPage() {
  return (
    <main className="bg-white text-slate-950">
      <section
        className="relative isolate flex min-h-[420px] items-center overflow-hidden bg-cover bg-center px-6 py-8 text-white md:min-h-[480px] md:px-8 md:py-16 lg:min-h-[560px] lg:py-20"
        style={{
          backgroundImage:
            "url('/images/about/manufacturing/mobile-light-tower-manufacturing-workshop.webp')",
        }}
      >
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/30" />

        <div className="mx-auto w-full max-w-[1200px]">
          <div className="max-w-[600px]">
            <h1 className="max-w-[650px] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
              移动照明灯塔制造与质量管理
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-100 sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl">
              LFADJ通过专业制造合作伙伴、项目化配置和严格质量管理，为全球客户提供可靠的移动照明解决方案。
            </p>
            <Link
              href="/zh/contact"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-center text-base font-bold text-slate-950 transition hover:bg-amber-400 sm:mt-8"
            >
              获取项目照明配置建议
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">制造体系与质量管理</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            LFADJ围绕项目需求制定产品配置，与专业制造合作伙伴协调生产，并在交付前实施质量检验管理。
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            LFADJ与专业移动照明设备制造合作伙伴协作，通过项目需求确认、产品配置、质量管理和交付协调，为不同应用场景提供可靠的移动照明解决方案。
          </p>

          <div className="mt-10 flex flex-col gap-3 lg:flex-row lg:items-stretch">
            {processSteps.map((step, index) => (
              <div key={step} className="flex flex-col items-center gap-3 lg:min-w-0 lg:flex-1 lg:flex-row">
                <article className="flex min-h-24 w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-5 text-center shadow-sm">
                  <h3 className="font-bold text-slate-950">{step}</h3>
                </article>
                {index < processSteps.length - 1 && (
                  <>
                    <span aria-hidden="true" className="font-bold text-amber-600 lg:hidden">
                      ↓
                    </span>
                    <span aria-hidden="true" className="hidden font-bold text-amber-600 lg:inline">
                      →
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {qualityChecks.map((check) => (
              <article key={check} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950">{check}</h3>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold tracking-tight text-slate-950">制造经验</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {manufacturingExperience.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {experienceVisuals.map((visual) => (
                <article key={visual.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative aspect-[4/3] bg-slate-100">
                    <Image
                      src={visual.imageSrc}
                      alt={visual.imageAlt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-slate-950">{visual.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{visual.subject}</p>
                  </div>
                </article>
              ))}
            </div>
            <Link
              href="/zh/resources"
              className="mt-8 inline-flex font-semibold text-slate-950 underline decoration-amber-500 decoration-2 underline-offset-4"
            >
              了解移动照明灯塔制造知识 →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">项目配置能力</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            配置方案根据现场条件、运行需求和所选产品平台确定，具体可选项因产品型号和项目要求而异。
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {configurationCategories.map((category) => (
              <article key={category.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-950">{category.title}</h3>
                <ul className="mt-5 space-y-3 text-slate-600">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="font-bold text-amber-600">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">质量标准与认证</h3>
              <ul className="mt-5 space-y-3">
                {qualityStandards.map((standard) => (
                  <li key={standard} className="flex gap-3 text-slate-600">
                    <span aria-hidden="true" className="font-bold text-amber-600">
                      •
                    </span>
                    <span>{standard}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-6 text-slate-600">
                LFADJ遵循国际认可的质量管理实践，并与合格制造合作伙伴协作，确保产品可靠交付。
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                所列标准为参考框架；适用的认证文件和发证主体按具体项目及供货范围进行审核。
              </p>
            </article>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/zh/products/lf955"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-amber-500"
            >
              查看LF955柴油移动照明灯塔
            </Link>
            <Link
              href="/zh/products/lf971"
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-amber-500"
            >
              查看LF971太阳能移动照明灯塔
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">为什么选择LFADJ</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasonsToChoose.map((reason) => (
              <article key={reason} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950">{reason}</h3>
              </article>
            ))}
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <h3 className="text-xl font-bold text-slate-950">相关应用与资源</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {relatedLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-amber-500 hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">需要定制移动照明方案？</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            告诉我们您的项目环境和照明需求。
          </p>
          <Link
            href="/zh/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-base font-bold text-slate-950 transition hover:bg-amber-400"
          >
            获取项目照明配置建议
          </Link>
        </div>
      </section>
    </main>
  );
}
