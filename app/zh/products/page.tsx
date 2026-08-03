import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "移动照明灯塔产品｜手推式、柴油与太阳能型号 | LFADJ",
  description: "比较LFADJ手推式、柴油和太阳能移动照明灯塔，包括LF951、LF955与LF971，了解动力方式、升降操作和现场条件差异。",
  alternates: {
    canonical: "https://lfadj.com/zh/products",
    languages: {
      en: "https://lfadj.com/en/products",
      "zh-CN": "https://lfadj.com/zh/products",
      "x-default": "https://lfadj.com/en/products",
    },
  },
  openGraph: {
    title: "移动照明灯塔产品｜手推式、柴油与太阳能型号 | LFADJ",
    description: "比较LFADJ手推式、柴油和太阳能移动照明灯塔，包括LF951、LF955与LF971，了解动力方式、升降操作和现场条件差异。",
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
    category: "手推式移动照明灯塔",
    anchor: undefined,
    description: "紧凑型手推设备，适合较小作业范围和需要灵活调整位置的项目。",
    differences: ["手推式移动底盘", "手摇升降操作", "紧凑部署空间"],
  },
  {
    model: "LF955",
    title: "LF955 柴油移动照明灯塔",
    href: "/zh/products/lf955",
    image: "/images/products/lf955/hero/lf955-hero.jpg",
    alt: "LF955柴油移动照明灯塔",
    category: "柴油",
    anchor: "diesel-products",
    description: "柴油动力设备，适合需要在较长运行时段保持可靠照明的项目。",
    differences: ["柴油动力方式", "7.5 米电动升降", "拖车式现场部署"],
  },
  {
    model: "LF971",
    title: "LF971 太阳能移动照明灯塔",
    href: "/zh/products/lf971",
    image: "/images/products/lf971/hero/lf971-hero.webp",
    alt: "LF971太阳能移动照明灯塔",
    category: "太阳能",
    anchor: "solar-products",
    description: "太阳能供电设备，适合偏远现场或希望减少日常燃油补给的项目。",
    differences: ["太阳能供电与电池储能", "四节升降杆", "拖车式离网部署"],
  },
] as const;

function ProductCard({ product }: { product: (typeof mobileLightTowers)[number] }) {
  return (
    <article id={product.anchor} className="flex h-full min-w-0 scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg">
      <div className="border-b border-slate-100 bg-slate-50 px-6 py-4">
        <span className="inline-flex rounded-full bg-white px-3 py-1.5 text-sm font-bold text-slate-700 ring-1 ring-inset ring-slate-200">
          {product.category}
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
          {product.differences.map((difference) => <li key={difference} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600"/><span>{difference}</span></li>)}
        </ul>
        <Link href={product.href} className="mt-auto rounded-sm pt-8 text-base font-bold text-blue-700 underline decoration-blue-200 underline-offset-4 transition hover:decoration-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">查看 {product.model} 详情 →</Link>
      </div>
    </article>
  );
}

export default function ChineseProductsPage() {
  return (
    <main className="w-full bg-surface-white text-text-primary">
      <section className="w-full border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-9 lg:grid-cols-[minmax(0,1.08fr)_minmax(440px,0.92fr)] lg:items-center lg:gap-10 xl:gap-12">
            <div className="max-w-[650px]">
              <p className="text-sm font-bold tracking-[0.2em] text-blue-700">移动照明产品</p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-gray-950 sm:text-5xl lg:text-[56px]">
                适用于不同现场需求的移动照明灯塔
              </h1>
              <p className="mt-6 max-w-[620px] text-lg leading-8 text-gray-700 sm:text-xl">
                LFADJ 提供手推式、柴油和太阳能移动照明灯塔，可用于施工、矿山、租赁、应急及偏远现场照明项目。买家可以按照动力方式、升降操作和项目条件比较不同型号。
              </p>
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

        </div>
      </section>

      <section id="product-range" className="w-full scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">比较主推移动照明灯塔型号</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">从动力方式、升降操作、现场条件和部署方式判断值得进一步了解的型号。</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mobileLightTowers.map((product) => <ProductCard key={product.model} product={product} />)}
          </div>
        </div>
      </section>

      <section className="w-full bg-brand-navy-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">从产品比较继续确认项目需求</h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              如果暂时无法从三个型号中直接判断，可以先梳理以下运行条件，并提交配置沟通所需的项目资料。
            </p>
          </div>

          <div className="mt-12 grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(400px,0.78fr)] lg:items-start lg:gap-12">
            <ol className="min-w-0 divide-y divide-slate-700 border-y border-slate-700">
              {[
                ["部署和移动频率", "判断设备需要多频繁地调整位置，以及现场可用于部署的空间。"],
                ["燃油补给或太阳能条件", "确认燃油获取、太阳能照射条件以及日常能源补给限制。"],
                ["所需升降操作方式", "明确倾向的升降方式，以及现场人员如何完成灯杆部署。"],
                ["运行时间与现场环境", "梳理每日运行时间、温度、海拔、粉尘、风力和通行条件。"],
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
              <h3 className="text-2xl font-bold leading-tight tracking-tight">联系前建议准备的项目信息</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">这些实际资料有助于 LFADJ 在配置沟通前理解项目背景。</p>
              <ul className="mt-7 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {["应用或现场类型", "预计数量", "每日运行时间", "温度和海拔", "燃油补给条件", "期望交付时间"].map((detail) => (
                  <li key={detail} className="flex min-w-0 items-center gap-3 rounded-lg bg-slate-50 px-4 py-3"><span className="h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden="true" /><span>{detail}</span></li>
                ))}
              </ul>
              <div className="mt-8 grid gap-3">
                <Link href="/zh/contact" className="inline-flex min-h-14 items-center justify-center rounded-md bg-blue-700 px-6 py-3 text-center text-base font-bold text-white transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-4">提交项目需求</Link>
                <Link href="/zh/solutions/how-to-choose-the-right-light-tower" className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-center text-sm font-bold text-slate-800 transition hover:border-blue-500 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">查看移动照明灯塔选型指南</Link>
              </div>
            </aside>
          </div>

          <nav aria-label="继续浏览" className="mt-12 border-t border-slate-800 pt-6">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-slate-300">
              <li><Link href="/zh/applications" className="rounded-sm transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">行业应用 →</Link></li>
              <li><Link href="/zh/solutions" className="rounded-sm transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">解决方案 →</Link></li>
              <li><Link href="/zh/resources" className="rounded-sm transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">资源中心 →</Link></li>
            </ul>
          </nav>
        </div>
      </section>

    </main>
  );
}
