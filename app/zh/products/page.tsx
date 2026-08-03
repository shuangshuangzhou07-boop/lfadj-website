import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "移动照明产品｜照明灯塔与移动监控拖车 | LFADJ",
  description: "比较LFADJ现场照明设备，包括柴油和太阳能移动照明灯塔、移动监控拖车，并根据供电、运行和现场需求选择合适方向。",
  alternates: {
    canonical: "https://lfadj.com/zh/products",
    languages: {
      en: "https://lfadj.com/en/products",
      "zh-CN": "https://lfadj.com/zh/products",
      "x-default": "https://lfadj.com/en/products",
    },
  },
  openGraph: {
    title: "移动照明产品｜照明灯塔与移动监控拖车 | LFADJ",
    description: "比较LFADJ现场照明设备，包括柴油和太阳能移动照明灯塔、移动监控拖车，并根据供电、运行和现场需求选择合适方向。",
    url: "https://lfadj.com/zh/products",
    type: "website",
  },
};

const mobileLightTowers = [
  {
    model: "LF951",
    title: "LF951 手推式移动照明灯塔",
    href: "/zh/products/lf951",
    image: "/images/products/lf951/lf951-mobile-light-tower-hero.webp",
    alt: "LF951手推式移动照明灯塔",
    category: "柴油",
    anchor: "diesel-products",
    description: "适用于中小型移动作业区域、维护、应急和设备租赁项目。",
    differences: ["手摇升降灯杆", "四轮手推式底盘", "灯具与发电机灵活选配"],
    featured: false,
  },
  {
    model: "LF955",
    title: "LF955 柴油移动照明灯塔",
    href: "/zh/products/lf955",
    image: "/images/products/lf955/hero/lf955-hero.jpg",
    alt: "LF955柴油移动照明灯塔",
    category: "柴油",
    anchor: undefined,
    description: "适用于建筑施工、矿山、道路作业和设备租赁等移动照明项目。",
    differences: ["柴油动力系统", "高效LED照明", "支持项目配置匹配"],
    featured: true,
  },
  {
    model: "LF971",
    title: "LF971 太阳能移动照明灯塔",
    href: "/zh/products/lf971",
    image: "/images/products/lf971/hero/lf971-hero.webp",
    alt: "LF971太阳能移动照明灯塔",
    category: "太阳能",
    anchor: "solar-products",
    description: "适用于能够支持太阳能充电和储能照明的户外及离网项目。",
    differences: ["太阳能供电与储能系统", "电动升降灯杆", "低维护运行"],
    featured: true,
  },
] as const;

function ProductCard({ product }: { product: (typeof mobileLightTowers)[number] }) {
  return (
    <article id={product.anchor} className="flex h-full min-w-0 scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg">
      <div className={`border-b border-slate-100 px-6 py-4 ${product.featured ? "bg-blue-50" : "bg-slate-50"}`}>
        <span className={`inline-flex rounded-full px-3 py-1.5 text-sm font-bold ${product.featured ? "bg-blue-700 text-white" : "bg-white text-slate-700 ring-1 ring-inset ring-slate-200"}`}>
          {product.featured ? "主推型号" : product.category}
        </span>
      </div>
      <div className="relative h-64 border-b border-slate-100 bg-white sm:h-72 lg:h-80">
        <Image src={product.image} alt={product.alt} fill sizes="(min-width: 1280px) 384px, (min-width: 1024px) 31vw, (min-width: 768px) 50vw, 100vw" className="object-contain p-4 sm:p-5 lg:p-6" />
      </div>
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <p className="text-base font-bold tracking-[0.16em] text-blue-700">{product.model}</p>
        <h3 className="mt-4 text-xl font-bold leading-snug text-gray-950 sm:text-2xl">{product.title}</h3>
        <p className="mt-4 text-base leading-7 text-gray-600">{product.description}</p>
        <ul className="mt-5 space-y-3 text-base leading-7 text-gray-700">
          {product.differences.map((difference) => <li key={difference} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"/><span>{difference}</span></li>)}
        </ul>
        <Link href={product.href} className="mt-auto self-start pt-8 text-base font-bold text-blue-700 underline-offset-4 hover:underline">查看产品 →</Link>
      </div>
    </article>
  );
}

export default function ChineseProductsPage() {
  return (
    <main className="w-full bg-white">
      <section className="w-full border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-9 lg:grid-cols-[minmax(0,1.08fr)_minmax(440px,0.92fr)] lg:items-center lg:gap-10 xl:gap-12">
            <div className="max-w-[650px]">
              <p className="text-sm font-bold tracking-[0.2em] text-blue-700">现场照明产品系列</p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-gray-950 sm:text-5xl lg:text-[56px]">
                移动照明灯塔与现场照明设备
              </h1>
              <p className="mt-6 max-w-[620px] text-lg leading-8 text-gray-700 sm:text-xl">
                提供柴油移动照明灯塔、太阳能移动照明灯塔和移动监控方案，并可根据运行时间、照明范围与现场环境提供配置建议。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="#product-range" className="inline-flex min-h-12 items-center justify-center rounded-md bg-blue-700 px-6 font-bold text-white transition hover:bg-blue-800">
                  浏览产品
                </Link>
                <Link href="/zh/contact" className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 bg-white px-6 font-bold text-slate-900 transition hover:border-blue-500 hover:text-blue-700">
                  获取选型建议
                </Link>
              </div>
            </div>

            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:aspect-[6/5]">
              <Image
                src="/images/products/lf971/hero/lf971-hero.webp"
                alt="配有灯杆、太阳能板、拖车底盘和支腿的LF971太阳能移动照明灯塔"
                fill
                priority
                sizes="(min-width: 1280px) 520px, (min-width: 1024px) 44vw, 100vw"
                className="object-contain p-2 sm:p-4 lg:p-3"
              />
            </div>
          </div>

          <nav aria-label="产品分类" className="mt-10 grid gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 shadow-sm sm:grid-cols-3 lg:mt-12">
            {[
              { name: "柴油移动照明灯塔", description: "适合需要较长运行时间的现场照明。", href: "#diesel-products" },
              { name: "太阳能移动照明灯塔", description: "适合离网、低噪音照明项目。", href: "#solar-products" },
              { name: "移动监控拖车", description: "适合移动式现场监控需求。", href: "#product-range" },
            ].map((category) => (
              <Link key={category.name} href={category.href} className="group flex h-full min-h-28 items-center justify-between gap-5 bg-white px-5 py-5 transition hover:bg-blue-50 focus-visible:bg-blue-50 sm:px-6">
                <span>
                  <span className="block font-bold leading-6 text-slate-950 group-hover:text-blue-700">{category.name}</span>
                  <span className="mt-1.5 block text-sm leading-5 text-slate-600">{category.description}</span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-xl text-blue-700 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section id="product-range" className="w-full scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">浏览移动照明产品</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">可按照动力方式、部署条件和现场用途比较不同产品。</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mobileLightTowers.map((product) => <ProductCard key={product.model} product={product} />)}
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">不确定哪种移动照明方案适合您的项目？</h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              运行时间、能源补给、照明范围和现场环境会共同影响产品选择。LFADJ可根据实际项目条件提供合适的配置建议。
            </p>
          </div>

          <div className="mt-12 grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.78fr)] lg:items-start lg:gap-12">
            <ol className="min-w-0 divide-y divide-slate-700 border-y border-slate-700">
              {[
                ["连续长时间运行或需要稳定动力", "柴油移动照明灯塔"],
                ["无市电、燃油补给困难或希望减少日常维护", "太阳能移动照明灯塔"],
                ["需要远程安防、现场监控或附加设备", "移动监控拖车"],
                ["高温、风沙、高海拔或特殊项目条件", "获取项目化配置建议"],
              ].map(([condition, direction], index) => (
                <li key={condition} className="grid min-w-0 gap-3 py-6 sm:grid-cols-[2.75rem_minmax(0,1fr)] sm:items-start sm:gap-5 sm:py-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400 text-sm font-bold text-blue-300">{index + 1}</span>
                  <div className="min-w-0">
                    <p className="text-base font-semibold leading-7 text-white">{condition}</p>
                    <p className="mt-2 flex min-w-0 gap-2 text-base font-medium leading-7 text-slate-300"><span className="shrink-0 text-blue-400" aria-hidden="true">→</span><span>{direction}</span></p>
                  </div>
                </li>
              ))}
            </ol>

            <aside className="min-w-0 rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-xl sm:p-8 lg:p-9">
              <h3 className="text-2xl font-bold leading-tight tracking-tight">获取配置建议前，请准备以下项目信息</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">提供以下项目条件，有助于配置建议更贴合实际运行需求。</p>
              <ul className="mt-7 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {["应用场景", "运行时间", "照明范围", "现场环境", "预计数量"].map((detail) => (
                  <li key={detail} className="flex min-w-0 items-center gap-3 rounded-lg bg-slate-50 px-4 py-3"><span className="h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden="true" /><span>{detail}</span></li>
                ))}
              </ul>
              <div className="mt-8 grid gap-3">
                <Link href="/zh/contact" className="inline-flex min-h-14 items-center justify-center rounded-md bg-blue-700 px-6 py-3 text-center text-base font-bold text-white transition hover:bg-blue-800">获取项目照明配置建议</Link>
                <Link href="/zh/solutions/how-to-choose-the-right-light-tower" className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-center text-sm font-bold text-slate-800 transition hover:border-blue-500 hover:text-blue-700">查看移动照明灯塔选型指南</Link>
              </div>
            </aside>
          </div>

          <nav aria-label="继续浏览" className="mt-12 border-t border-slate-800 pt-6">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-slate-300">
              <li><Link href="/zh/applications" className="transition hover:text-white">行业应用 →</Link></li>
              <li><Link href="/zh/solutions" className="transition hover:text-white">解决方案 →</Link></li>
              <li><Link href="/zh/resources" className="transition hover:text-white">资源中心 →</Link></li>
            </ul>
          </nav>
        </div>
      </section>

    </main>
  );
}
