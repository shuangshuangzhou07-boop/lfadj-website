import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { lf951Overview } from "@/src/data/products/lf951";

type Lang = "en" | "zh";

function isLang(value: string): value is Lang {
  return value === "en" || value === "zh";
}

const pageCopy = {
  en: {
    home: "Home",
    products: "Products",
    title: "LF951 Portable Light Tower",
    subtitle:
      "A compact push-type light tower with manual mast lifting and configurable lamp and generator options for mobile worksite lighting.",
    advantages: [
      {
        title: "Manual Mast Lifting",
        description: "Hand-operated mast lifting supports direct height adjustment at the worksite.",
      },
      {
        title: "Compact Push-Type Chassis",
        description: "A compact four-wheel chassis supports short-distance positioning within the work area.",
      },
      {
        title: "Flexible Lighting Configuration",
        description: "Lamp and generator options can be matched to the project lighting requirements.",
      },
    ],
    primaryCta: "Request LF951 Configuration",
    secondaryCta: "View Technical Specifications",
  },
  zh: {
    home: "首页",
    products: "产品中心",
    title: "LF951 手推式移动照明灯塔",
    subtitle:
      "采用手推式移动底盘、手摇升降灯杆及可选灯具和发电机配置，适用于中小型移动作业现场。",
    advantages: [
      {
        title: "手摇升降灯杆",
        description: "通过手摇方式调节灯杆高度，满足作业现场的部署需求。",
      },
      {
        title: "紧凑手推式底盘",
        description: "紧凑型四轮底盘便于在作业区域内进行短距离位置调整。",
      },
      {
        title: "灵活照明配置",
        description: "可根据项目照明需求匹配灯具与发电机配置。",
      },
    ],
    primaryCta: "获取 LF951 配置建议",
    secondaryCta: "查看技术参数",
  },
} as const;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }];
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = isLang(params.lang) ? params.lang : "en";
  const zh = lang === "zh";
  const title = zh
    ? "LF951手推式移动照明灯塔 | LFADJ"
    : "LF951 Portable Light Tower | LFADJ";
  const description = zh
    ? "了解LF951手推式移动照明灯塔，采用手摇升降灯杆、紧凑型手推底盘及可选灯具配置，适用于施工、道路维护、应急和租赁项目。"
    : "Explore the LF951 portable light tower with manual mast lifting, configurable LED output and a compact push-type chassis for construction, maintenance, emergency and rental projects.";
  const url = `https://lfadj.com/${lang}/products/lf951`;
  const image = "https://lfadj.com/images/products/lf951/lf951-mobile-light-tower-hero.webp";
  const imageAlt = zh
    ? "LF951手推式移动照明灯塔，配备手摇升降灯杆和四轮移动底盘"
    : "LF951 portable light tower with manual mast and four-wheel push-type chassis";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: "https://lfadj.com/en/products/lf951",
        "zh-CN": "https://lfadj.com/zh/products/lf951",
        "x-default": "https://lfadj.com/en/products/lf951",
      },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "LFADJ",
      locale: zh ? "zh_CN" : "en_US",
      images: [{ url: image, alt: imageAlt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [{ url: image, alt: imageAlt }] },
  };
}

function getProductSchema(lang: Lang) {
  const zh = lang === "zh";

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: pageCopy[lang].title,
    description: pageCopy[lang].subtitle,
    sku: "LF951",
    mpn: "LF951",
    category: zh ? "手推式移动照明灯塔" : "Portable Mobile Light Tower",
    url: `https://lfadj.com/${lang}/products/lf951`,
    brand: { "@type": "Brand", name: "LFADJ" },
    image: "https://lfadj.com/images/products/lf951/lf951-mobile-light-tower-hero.webp",
  };
}

export default function LF951Page({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) {
    redirect("/en/products/lf951");
  }

  const lang = params.lang;
  const zh = lang === "zh";
  const copy = pageCopy[lang];
  const overview = lf951Overview[lang];
  const productSchema = getProductSchema(lang);
  const relatedApplications = zh
    ? [
        { label: "建筑施工照明", href: "/zh/applications/construction-lighting" },
        { label: "应急照明", href: "/zh/applications/emergency-lighting" },
        { label: "租赁照明", href: "/zh/applications/rental-lighting" },
      ]
    : [
        { label: "Construction Lighting", href: "/en/applications/construction-lighting" },
        { label: "Emergency Lighting", href: "/en/applications/emergency-lighting" },
        { label: "Rental Lighting", href: "/en/applications/rental-lighting" },
      ];
  const relatedSolutions = zh
    ? [
        { label: "如何选择合适的移动照明灯塔", href: "/zh/solutions/how-to-choose-the-right-light-tower" },
        { label: "临时现场照明", href: "/zh/solutions/temporary-site-lighting" },
        { label: "极端环境照明", href: "/zh/solutions/how-to-choose-the-right-light-tower-for-harsh-environments" },
      ]
    : [
        { label: "How to Choose the Right Light Tower", href: "/en/solutions/how-to-choose-the-right-light-tower" },
        { label: "Temporary Site Lighting", href: "/en/solutions/temporary-site-lighting" },
        { label: "Extreme Environment Lighting", href: "/en/solutions/how-to-choose-the-right-light-tower-for-harsh-environments" },
      ];
  const relatedProducts = zh
    ? [
        { label: "LF955柴油移动照明灯塔", href: "/zh/products/lf955" },
        { label: "LF971太阳能移动照明灯塔", href: "/zh/products/lf971" },
      ]
    : [
        { label: "LF955 Diesel Mobile Light Tower", href: "/en/products/lf955" },
        { label: "LF971 Solar Mobile Light Tower", href: "/en/products/lf971" },
      ];
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: copy.home,
        item: `https://lfadj.com/${lang}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: copy.products,
        item: `https://lfadj.com/${lang}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: copy.title,
        item: `https://lfadj.com/${lang}/products/lf951`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <main className="bg-white text-slate-950">
        <section className="border-b border-slate-200 bg-slate-50 text-slate-950">
          <div className="relative mx-auto max-w-[1120px] px-6 py-14 sm:px-8 lg:px-12 lg:py-20">
            <nav
              aria-label={zh ? "面包屑导航" : "Breadcrumb"}
              className="absolute left-6 top-5 text-sm text-slate-500 sm:left-8 lg:left-12 lg:top-8"
            >
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link className="hover:text-slate-950" href={`/${lang}`}>
                    {copy.home}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link className="hover:text-slate-950" href={`/${lang}/products`}>
                    {copy.products}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-medium text-slate-700">
                  LF951
                </li>
              </ol>
            </nav>

            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[56px]">
                  {copy.title}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
                  {copy.subtitle}
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Link
                    href={`/${lang}/contact`}
                    className="inline-flex min-h-14 items-center justify-center rounded-md bg-amber-500 px-8 text-center text-base font-semibold text-slate-950 shadow-sm transition-colors hover:bg-amber-400"
                  >
                    {copy.primaryCta}
                  </Link>
                  <a
                    href="#technical-specifications"
                    className="inline-flex min-h-14 items-center justify-center rounded-md border border-slate-300 bg-white px-8 text-center text-base font-semibold text-slate-900 transition-colors hover:border-slate-500 hover:bg-slate-100"
                  >
                    {copy.secondaryCta}
                  </a>
                </div>
              </div>

              <div className="relative min-h-[340px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:min-h-[460px] lg:min-h-[540px]">
                <Image
                  src="/images/products/lf951/lf951-mobile-light-tower-hero.webp"
                  alt={
                    zh
                      ? "LF951 手推式移动照明灯塔"
                      : "LF951 hand-push mobile light tower"
                  }
                  fill
                  priority
                  sizes="(min-width: 1440px) 720px, (min-width: 1024px) 55vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {copy.advantages.map((advantage, index) => (
                <article key={advantage.title} className="h-full border-t-2 border-amber-500 bg-white p-6 shadow-sm">
                  <span className="text-sm font-bold tabular-nums text-amber-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 text-xl font-bold leading-7 text-slate-950">{advantage.title}</h2>
                  <p className="mt-3 text-base leading-7 text-slate-600">{advantage.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="lf951-overview-title"
          className="bg-white py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-[800px] px-6 sm:px-8 lg:px-12">
            <div>
              <h2
                id="lf951-overview-title"
                className="text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl"
              >
                {overview.title}
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
                {overview.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div id="technical-specifications" className="scroll-mt-24 mt-12 sm:mt-14">
              <h3 className="text-2xl font-bold tracking-tight text-slate-950">
                {overview.technicalInformationTitle}
              </h3>
              <div className="mt-6 overflow-hidden rounded-lg border border-slate-200">
                <table className="w-full border-collapse text-left text-sm sm:text-base">
                  <tbody>
                    {overview.technicalInformation.map((item, index) => (
                      <tr key={item.label} className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                        <th
                          scope="row"
                          className="w-[45%] border-r border-slate-200 px-4 py-4 font-semibold text-slate-700 sm:w-1/3 sm:px-6"
                        >
                          {item.label}
                        </th>
                        <td className="px-4 py-4 font-medium text-slate-950 sm:px-6">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="lf951-resources-title" className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-[800px] px-6 sm:px-8 lg:px-12">
            <h2 id="lf951-resources-title" className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              {zh ? "相关信息" : "Related Information"}
            </h2>

            <div className="mt-10 grid gap-10 border-y border-slate-200 py-10 lg:grid-cols-3 lg:gap-14">
              {[
                { title: zh ? "相关应用" : "Related Applications", links: relatedApplications },
                { title: zh ? "相关解决方案" : "Related Solutions", links: relatedSolutions },
                { title: zh ? "相关产品" : "Related Products", links: relatedProducts },
              ].map((group) => (
                <div key={group.title}>
                  <h3 className="text-lg font-bold text-slate-950">{group.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link className="font-medium leading-7 text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-amber-700" href={link.href}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-lg bg-slate-950 px-6 py-8 text-white sm:px-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold leading-tight">
                  {zh ? "需要帮助配置LF951？" : "Need Help Configuring the LF951?"}
                </h3>
                <p className="mt-3 max-w-xl leading-7 text-slate-300">
                  {zh
                    ? "告诉我们所需的照明亮度、运行时间和现场条件，我们将为您建议合适的灯具与发电机配置。"
                    : "Tell us your required lighting output, operating time and worksite conditions. We will recommend a suitable lamp and generator configuration."}
                </p>
              </div>
              <Link
                href={zh ? "/zh/contact" : "/en/contact"}
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-amber-500 px-6 text-center font-semibold text-slate-950 hover:bg-amber-400"
              >
                {zh ? "获取项目配置建议" : "Request a Project Recommendation"}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
