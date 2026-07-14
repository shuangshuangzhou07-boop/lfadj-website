import Image from "next/image";
import Link from "next/link";
import { homepageDictionary, type HomeLanguage } from "@/src/i18n/homepageDictionary";

type HomePageTemplateProps = {
  lang: HomeLanguage;
};

export function HomePageTemplate({ lang }: HomePageTemplateProps) {
  const t = homepageDictionary[lang];

  return (
    <main className="w-full">
      <section className="w-full bg-gradient-to-br from-slate-50 to-blue-50 px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8 lg:pb-16 lg:pt-20">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 sm:text-sm">
              {t.hero.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl lg:text-[3.5rem]">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">
              {t.hero.subtitle}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
              {t.hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={t.hero.primaryHref}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700"
              >
                {t.hero.primaryCta}
              </Link>
              <Link
                href={t.hero.secondaryHref}
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-50"
              >
                {t.hero.secondaryCta}
              </Link>
            </div>
            <ul className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-gray-700">
              {t.hero.trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-sm">
            <div className="relative aspect-[3/2] lg:aspect-[4/3]">
              <Image
                src="/images/products/lf955/applications/night-construction.jpg"
                alt={t.hero.heroImageAlt}
                fill
                priority
                sizes="(max-width: 1023px) calc(100vw - 48px), (max-width: 1280px) 44vw, 524px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-y border-gray-200 bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gray-600">
            {t.authority.eyebrow}
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {t.authority.title}
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-gray-600">
            {t.authority.description}
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {t.authority.items.map((item, index) => (
              <article
                key={item.title}
                className="h-full border-l-4 border-amber-500 bg-white p-6 shadow-sm ring-1 ring-stone-200 sm:p-7"
              >
                <span className="text-sm font-bold tracking-[0.18em] text-amber-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-extrabold leading-snug text-gray-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <a
            href="#project-selection"
            className="mt-7 inline-flex text-sm font-bold text-blue-700 underline-offset-4 hover:underline"
          >
            {t.authority.selectionLinkLabel} →
          </a>
        </div>
      </section>

      <section id="project-selection" className="w-full scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">
            {t.keywordCluster.eyebrow}
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {t.keywordCluster.title}
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-gray-600">
            {t.keywordCluster.description}
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:gap-14">
            <div>
              <h3 className="text-xl font-bold text-gray-950">
                {t.keywordCluster.evaluationHeading}
              </h3>
              <ol className="mt-6 border-l-2 border-blue-200 pl-6">
                {t.keywordCluster.evaluationItems.map((item, index) => (
                  <li key={item.title} className="relative pb-6 last:pb-0">
                    <span className="absolute -left-[2.15rem] flex h-5 w-5 items-center justify-center rounded-full bg-blue-700 text-[10px] font-bold text-white">
                      {index + 1}
                    </span>
                    <h3 className="font-bold text-gray-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="relative">
              <span aria-hidden="true" className="absolute -left-10 top-1/2 hidden text-3xl text-blue-300 lg:block">
                →
              </span>
              <h3 className="text-xl font-bold text-gray-950">
                {t.keywordCluster.solutionsHeading}
              </h3>
              <div className="mt-6 space-y-4">
                {t.keywordCluster.solutions.map((solution) => (
                  <article key={solution.title} className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
                    <h3 className="text-lg font-bold text-gray-950">{solution.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {solution.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {solution.tags.map((tag) => (
                        <li key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={solution.href}
                      className="mt-5 self-start text-sm font-bold text-blue-700 underline-offset-4 hover:underline"
                    >
                      {solution.linkLabel} →
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-200 pt-7">
            <p className="font-bold text-gray-900">
              {t.keywordCluster.industryHeading}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {t.keywordCluster.industryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-blue-700 underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-gray-200 pt-7 sm:flex-row sm:items-center">
            <p className="font-semibold text-gray-800">
              {t.keywordCluster.confirmation}
            </p>
            <Link
              href={t.keywordCluster.ctaHref}
              className="inline-flex h-11 shrink-0 items-center justify-center rounded-lg border border-blue-700 px-5 text-sm font-semibold text-blue-700 hover:bg-blue-50"
            >
              {t.keywordCluster.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {t.productShowcase.title}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.productShowcase.items.map((product) => (
              <article key={product.title} className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 50vw, 300px"
                    className="object-contain p-4"
                  />
                </div>
                <div className="flex flex-1 flex-col border-t border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-950">{product.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
                    {product.description}
                  </p>
                  <Link
                    href={product.href}
                    className="mt-6 self-start text-sm font-bold text-blue-700 underline-offset-4 hover:underline"
                  >
                    {product.linkLabel} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">
            {t.trustSignals.eyebrow}
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {t.trustSignals.title}
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-gray-600">
            {t.trustSignals.description}
          </p>

          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-950">
              {t.trustSignals.processHeading}
            </h3>
            <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-9 lg:gap-3">
              {t.trustSignals.process.map((step, index) => (
                <li
                  key={step}
                  className={`relative rounded-lg border px-4 py-3 text-sm font-semibold ${index === 7 ? "border-blue-500 bg-blue-50 text-blue-950 ring-1 ring-blue-200" : "border-gray-200 bg-gray-50 text-gray-800"}`}
                >
                  <span className="mr-2 block text-xs font-bold tracking-wide text-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block">{step}</span>
                  {index < t.trustSignals.process.length - 1 && (
                    <span aria-hidden="true" className="absolute -right-[0.7rem] top-1/2 z-10 hidden -translate-y-1/2 text-blue-400 lg:block">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <figure>
              <video
                controls
                preload="none"
                playsInline
                poster="/images/products/lf955/manufacturing/08-testing.jpg"
                className="aspect-video w-full rounded-2xl bg-black object-cover shadow-sm"
              >
                <source src="/videos/products/lf955/factory-testing.mp4" type="video/mp4" />
                {t.trustSignals.videoFallback}
              </video>
              <figcaption className="mt-4">
                <span className="block font-bold text-gray-900">
                  {t.trustSignals.videoTitle}
                </span>
                <span className="mt-2 block text-sm leading-6 text-gray-600">
                  {t.trustSignals.videoDescription}
                </span>
              </figcaption>
            </figure>

            <div>
              <h3 className="text-xl font-bold text-gray-950">
                {t.trustSignals.qualityHeading}
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {t.trustSignals.qualityItems.map((item) => (
                  <div key={item.title} className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              {/* TODO: Upload and display verified certificate scans when the real files are available. */}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-gray-200 pt-7 sm:flex-row sm:items-center">
            <p className="max-w-3xl font-semibold text-gray-800">
              {t.trustSignals.statement}
            </p>
            <Link
              href={t.trustSignals.ctaHref}
              className="inline-flex h-11 shrink-0 items-center justify-center rounded-lg bg-blue-700 px-5 text-sm font-semibold text-white hover:bg-blue-800"
            >
              {t.trustSignals.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full border-t border-slate-800 bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 px-8 py-12 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-14 lg:py-14">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">
                {t.cta.eyebrow}
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {t.cta.title}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
                {t.cta.description}
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-400">
                {t.cta.hint}
              </p>
            </div>
            <Link
              href={t.cta.href}
              className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-blue-600 px-7 text-sm font-semibold text-white hover:bg-blue-500 sm:w-auto"
            >
              {t.cta.buttonLabel}
            </Link>
          </div>
          {/* TODO: Add verified Email or WhatsApp contact links when approved contact details are available. */}
        </div>
      </section>
    </main>
  );
}
