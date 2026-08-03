import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const processSteps = [
  {
    title: "项目需求确认",
    description: "分析现场环境、运行时间、照明范围、动力条件及附加设备需求。",
  },
  {
    title: "产品配置建议",
    description: "集中确认柴油或太阳能方案，以及主要动力、照明、灯杆、拖车和控制配置。",
  },
  {
    title: "样机或样品协调",
    description: "对于需要定制验证的适用项目，可协调样机或样品开发并核对配置。",
  },
  {
    title: "小批量验证",
    description: "在适用项目中，可协调小批量验证装配、性能及配置适用性。",
  },
  {
    title: "生产与交付",
    description: "配置确认后，按照已确认的要求推进生产、最终检查、包装和出口交付准备。",
  },
];

const qualityChecks = [
  {
    title: "来料部件要求",
    description: "按照已确认的供货要求检查部件规格与状态。",
  },
  {
    title: "装配与功能检查",
    description: "依据已批准的配置检查装配状态和核心功能。",
  },
  {
    title: "电气系统检查",
    description: "按照约定要求检查电气连接和系统功能。",
  },
  {
    title: "最终配置核验",
    description: "对照已确认的项目规格核验最终产品配置。",
  },
  {
    title: "包装与出货准备",
    description: "按照约定的交付和防护要求准备包装与发运。",
  },
];

const coreCapabilities = [
  {
    title: "项目配置",
    description: "根据使用环境、运行时间和照明范围，提出柴油或太阳能方案及关键动力、灯具、升降杆、拖车平台和控制系统配置建议。",
  },
  {
    title: "质量要求管理",
    description: "将确认的技术、功能与检查要求落实到生产、检查和最终核验环节。",
  },
  {
    title: "代工与定制支持",
    description: "对于适用项目，支持配置调整、样机确认和小批量验证。",
  },
  {
    title: "生产与交付支持",
    description: "按照确认的项目要求推进生产、最终检查、包装和出口交付准备。",
  },
];

const experienceVisuals = [
  {
    title: "移动照明灯塔生产过程",
    subject: "按照已确认的移动照明设备配置和技术要求推进生产。",
    imageSrc: "/images/about/manufacturing/mobile-light-tower-manufacturing-process.webp",
    imageAlt: "移动照明灯塔生产过程",
  },
  {
    title: "质量检测",
    subject: "按照约定的质量要求完成配置与系统检查。",
    imageSrc: "/images/about/manufacturing/mobile-light-tower-quality-inspection.webp",
    imageAlt: "移动照明灯塔质量检查",
  },
  {
    title: "成品与发运准备",
    subject: "完成装配的设备进入最终核验、包装与发运准备。",
    imageSrc: "/images/about/manufacturing/mobile-light-tower-finished-product-preparation.webp",
    imageAlt: "准备发运的移动照明灯塔成品",
  },
];

const relatedLinks = [
  { href: "/zh/products", label: "产品中心" },
  { href: "/zh/solutions", label: "解决方案" },
  { href: "/zh/resources", label: "资源中心" },
  { href: "/zh/contact", label: "获取项目报价" },
];

export const metadata: Metadata = {
  title: "移动照明灯塔项目配置与质量管理 | LFADJ",
  description: "了解LFADJ为移动照明灯塔项目提供的产品配置、质量要求管理、代工与定制、生产跟进及出口交付支持。",
  alternates: {
    canonical: "https://lfadj.com/zh/about/manufacturing",
    languages: {
      en: "/en/about/manufacturing",
      "zh-CN": "/zh/about/manufacturing",
    },
  },
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
              移动照明灯塔项目配置与质量管理
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-100 sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl">
              LFADJ根据项目环境和运行需求提供移动照明设备配置建议，并按照确认的要求跟进生产、质量检查与出口交付准备。
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">项目配置与交付支持</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            LFADJ首先分析项目用途、现场环境、运行时间、照明范围及附加设备需求，并据此提出合适的移动照明设备配置。配置确认后，我们将按照确认的技术与质量要求推进生产、检查及交付准备，使设备更符合项目现场和后续使用需求。
          </p>

          <div className="mt-12">
            <h3 className="text-2xl font-bold tracking-tight text-slate-950">代工与定制项目流程</h3>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              对于适合定制且需要验证的项目，可协调样机开发与小批量验证。
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <p className="text-sm font-bold text-amber-700">{String(index + 1).padStart(2, "0")}</p>
                <h4 className="mt-3 font-bold text-slate-950">{step.title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold tracking-tight text-slate-950">生产过程与质量控制</h3>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              从部件要求、装配功能到最终配置和包装准备，各环节均依据已确认的项目规格与质量要求进行检查。
            </p>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {qualityChecks.map((check) => (
              <article key={check.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-bold text-slate-950">{check.title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">{check.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <div className="grid gap-5 md:grid-cols-3">
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">项目配置与交付能力</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            四项相互衔接的能力支持配置决策、质量跟进、适用定制项目和交付准备。
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {coreCapabilities.map((capability) => (
              <article key={capability.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950">{capability.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{capability.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 border-t border-slate-200 pt-8">
            <h3 className="text-xl font-bold text-slate-950">查看产品、解决方案与项目支持</h3>
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">需要适合项目环境的移动照明配置？</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            请提供使用环境、运行时间、照明范围和目标配置，我们将协助评估产品配置、制造要求与交付方案。
          </p>
          <Link
            href="/zh/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-base font-bold text-slate-950 transition hover:bg-amber-400"
          >
            获取项目报价
          </Link>
        </div>
      </section>
    </main>
  );
}
