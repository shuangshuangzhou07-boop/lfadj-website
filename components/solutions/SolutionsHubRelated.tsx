import Link from "next/link";

type SolutionsHubRelatedProps = {
  lang: "en" | "zh";
};

const relatedProducts = {
  en: [
    { label: "LF955 Diesel Mobile Light Tower", href: "/en/products/lf955" },
    { label: "LF971 Solar Mobile Light Tower", href: "/en/products/lf971" },
  ],
  zh: [
    { label: "LF955 柴油移动照明灯塔", href: "/zh/products/lf955" },
    { label: "LF971 太阳能移动照明灯塔", href: "/zh/products/lf971" },
  ],
} as const;

export function SolutionsHubRelated({ lang }: SolutionsHubRelatedProps) {
  const zh = lang === "zh";

  return (
    <section className="bg-white px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {zh ? "相关移动照明产品" : "Related Mobile Light Tower Products"}
        </h2>
        <ul className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:gap-x-8">
          {relatedProducts[lang].map((product) => (
            <li key={product.href}>
              <Link
                href={product.href}
                className="font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-950 hover:decoration-amber-500"
              >
                {product.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-xl bg-slate-950 px-6 py-10 text-left text-white sm:px-10">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {zh
              ? "不确定哪种移动照明方案适合您的项目？"
              : "Not Sure Which Mobile Lighting Solution Fits Your Project?"}
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            {zh
              ? "告诉我们您的项目类型、工作环境、照明需求和使用时间，我们将协助您确认适合的产品与配置。"
              : "Tell us your project type, operating environment, lighting requirements and operating hours. We will help identify a suitable product and configuration."}
          </p>
          <Link
            href={zh ? "/zh/contact" : "/en/contact"}
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-amber-400"
          >
            {zh ? "获取项目配置建议" : "Get a Project Recommendation"}
          </Link>
        </div>
      </div>
    </section>
  );
}
