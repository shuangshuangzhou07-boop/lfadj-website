import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "关于 LFADJ｜移动照明企业信息",
  description: "了解 LFADJ 的移动照明业务方向、主要服务对象，以及我们如何协助项目买家整理柴油与太阳能照明需求。",
  alternates: {
    canonical: "https://lfadj.com/zh/about",
    languages: { en: "/en/about", "zh-CN": "/zh/about" },
  },
  openGraph: {
    title: "关于 LFADJ｜移动照明企业信息",
    description: "了解 LFADJ 的移动照明业务方向，以及面向施工、租赁和工业项目买家的需求沟通支持。",
    url: "https://lfadj.com/zh/about",
    type: "website",
  },
};

const capabilityItems = [
  { title: "项目配置", body: "根据应用场景和运行条件匹配供能方式、照明输出、升降系统、运行时间与选配设备。" },
  { title: "OEM / ODM 支持", body: "在技术评估后，支持合理的品牌、规格及配置定制需求。" },
  { title: "质量检查节点", body: "跟进来料、装配、电气功能、出厂测试和发运准备等关键检查环节。" },
  { title: "出口资料支持", body: "协助整理项目交付所需要的规格、产品资料及发运相关文件。" },
];

const exploreItems = [
  { title: "移动照明产品", body: "比较适用于不同运行需求的柴油与太阳能移动照明灯塔。", label: "查看产品", href: "/zh/products" },
  { title: "照明应用场景", body: "了解施工、矿山、油气、设备租赁和应急项目的照明需求。", label: "查看应用场景", href: "/zh/applications" },
  { title: "项目解决方案", body: "在选择配置前了解选型、极端环境及升降系统解决方案。", label: "查看解决方案", href: "/zh/solutions" },
];

export default function ChineseAboutPage() {
  return (
    <main className="mx-auto w-full max-w-7xl overflow-x-hidden bg-white">
        <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/70 px-6 py-14 md:min-h-[500px] md:py-16 lg:min-h-[560px] lg:py-20">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:min-h-[400px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
            <div className="min-w-0">
              <p className="text-sm font-bold tracking-[0.2em] text-blue-700">关于 LFADJ</p>
              <h1 className="mt-5 max-w-[680px] text-4xl font-bold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-[58px]">了解 LFADJ 与我们的移动照明业务</h1>
              <p className="mt-6 max-w-[620px] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">LFADJ 专注移动照明产品与项目支持，服务施工、矿山、市政、应急和设备租赁客户。我们协助买家了解柴油与太阳能方案、整理项目需求并确定合适的下一步沟通方向。</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/zh/products" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">查看移动照明产品</Link>
                <Link href="/zh/contact/request-a-quote" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:border-blue-500 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">提交项目需求</Link>
              </div>
              <p className="mt-6 text-sm font-semibold leading-6 text-slate-600">专注移动照明 <span className="px-1 text-blue-600" aria-hidden="true">·</span> 项目需求支持 <span className="px-1 text-blue-600" aria-hidden="true">·</span> 服务企业买家</p>
            </div>
            <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-xl shadow-slate-900/10">
              <div className="relative aspect-[16/10] w-full">
                <Image src="/images/solutions/temporary-site-lighting/hero-temporary-site-lighting.webp" alt="移动照明灯塔在夜间施工现场提供照明" fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-contain" />
              </div>
            </div>
          </div>
        </section>

      <section className="border-y border-slate-200 bg-slate-50 px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-4xl">
            <p className="text-sm font-bold tracking-[0.2em] text-blue-700">我们的服务对象</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">
              帮助项目买家找到相关信息
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
              施工团队、设备租赁企业和工业项目买家掌握的项目信息往往不同。LFADJ 协助整理关键问题、比较相关移动照明方向，并引导买家找到下一步判断所需的信息。
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-6">
            {[
              {
                title: "理解买家与项目背景",
                body: "从应用场景、运行方式、现场环境和项目团队目前掌握的信息开始沟通。",
              },
              {
                title: "查找相关选择方向",
                body: "通过产品、应用和解决方案信息，比较柴油、太阳能及项目化移动照明方向。",
              },
              {
                title: "准备下一步沟通",
                body: "整理产品或配置判断前需要进一步确认的项目要求与关键问题。",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:p-7"
              >
                <h3 className="text-xl font-bold leading-7 text-slate-950">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>

          <Link
            href="/zh/solutions/how-to-choose-the-right-light-tower"
            className="mt-9 inline-flex rounded-sm font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-800 hover:decoration-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
          >
            了解如何选择合适的移动照明灯塔 →
          </Link>
        </div>
      </section>

      <section className="px-6 py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-start lg:gap-16">
          <div className="min-w-0">
            <p className="text-sm font-bold tracking-[0.2em] text-blue-700">项目服务能力</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">配置建议、质量跟进与出口支持</h2>
            <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">LFADJ 将项目需求转化为可执行的移动照明配置，重点关注规格确认、质量检查节点，以及客户在发运和投入使用前所需要的资料。</p>
            <div className="mt-8 border-t border-slate-200 pt-6">
              <h3 className="text-lg font-bold text-slate-950">管理体系</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {['ISO 9001', 'ISO 14001', 'ISO 45001'].map((certification) => (
                  <span key={certification} className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-bold text-blue-800">{certification}</span>
                ))}
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">以质量、环境及职业健康安全管理体系支持项目服务与质量管理。</p>
            </div>
            <Link href="/zh/about/manufacturing" className="mt-6 inline-flex rounded-sm font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-800 hover:decoration-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">
              查看项目配置与质量管理 →
            </Link>
          </div>
          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            {capabilityItems.map((item, index) => (
              <article key={item.title} className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-7">
                <p className="text-sm font-bold text-blue-700">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-4 text-lg font-bold leading-7 text-slate-950">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold tracking-[0.2em] text-blue-700">进一步了解 LFADJ</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl">找到与您的项目相关的信息</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-6">
            {exploreItems.map((item) => (
              <Link key={item.href} href={item.href} className="group flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 sm:p-7">
                <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-800">{item.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-slate-600">{item.body}</p>
                <span className="mt-6 font-bold text-blue-700 underline decoration-blue-300 underline-offset-4 group-hover:decoration-blue-700">{item.label} →</span>
              </Link>
            ))}
          </div>
          <div className="mt-12 rounded-3xl bg-blue-700 px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">告诉我们您的项目工况</h2>
              <p className="mt-5 text-base leading-8 text-blue-50 sm:text-lg">提交应用场景、预计数量、运行环境和供能偏好，我们将协助整理适合进一步沟通的移动照明配置建议。</p>
              <p className="mt-4 text-sm leading-6 text-blue-100">无需提前确定完整配置，您可以先提供目前已知的项目条件。</p>
            </div>
            <div className="mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col xl:flex-row">
              <Link href="/zh/contact/request-a-quote" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 py-3 text-center text-sm font-bold text-blue-800 transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700">获取项目配置建议</Link>
              <Link href="/zh/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-blue-200 px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700">联系 LFADJ</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
