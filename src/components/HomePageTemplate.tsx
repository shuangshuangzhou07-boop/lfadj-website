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
      <section className="w-full bg-gradient-to-br from-slate-50 to-emerald-50/60 px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-[1120px] items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(380px,0.92fr)] lg:gap-12">
          <div className="min-w-0">
            <h1 className="max-w-[700px] text-[36px] font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-[44px] lg:text-[50px]">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-[680px] text-[17px] leading-[1.75] text-slate-700 sm:text-lg">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={t.hero.primaryHref}
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-emerald-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
              >
                {t.hero.primaryCta}
              </Link>
              <Link
                href={t.hero.secondaryHref}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:border-emerald-700 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
              >
                {t.hero.secondaryCta}
              </Link>
            </div>
          </div>
          <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/hero/construction-mobile-light-tower.webp"
                alt={t.hero.heroImageAlt}
                fill
                priority
                sizes="(max-width: 1023px) calc(100vw - 48px), (max-width: 1280px) 44vw, 524px"
                className="object-cover object-[70%_center]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full border-y border-slate-200 bg-slate-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="max-w-4xl text-[30px] font-bold leading-tight tracking-tight text-slate-950 sm:text-[36px]">
            {t.productShowcase.title}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {t.productShowcase.items.map((product) => (
              <article key={product.title} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-emerald-300 hover:shadow-md">
                <div className="relative aspect-[4/3] bg-white">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1279px) 50vw, 616px"
                      className="object-contain p-5 transition duration-300 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-slate-100 px-6 text-center text-sm font-semibold text-slate-500">
                      {product.imageAlt}
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col border-t border-slate-100 p-7 sm:p-8">
                  <h3 className="text-[22px] font-bold text-slate-950">{product.title}</h3>
                  <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{product.description}</p>
                  <Link
                    href={product.href}
                    className="mt-6 inline-flex min-h-12 items-center justify-center rounded-lg border border-emerald-700 px-5 py-3 text-sm font-bold text-emerald-800 transition hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
                  >
                    {product.linkLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="project-selection" className="w-full scroll-mt-24 bg-white px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="max-w-4xl text-[30px] font-bold leading-tight tracking-tight text-slate-950 sm:text-[36px]">
            {t.selectionGuide.title}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
            {t.selectionGuide.subtitle}
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.selectionGuide.cards.map((card) => (
              <article key={card.title} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:p-7">
                <h3 className="text-xl font-bold text-slate-950">{card.title}</h3>
                <ul className="mt-4 flex-1 space-y-3 text-base leading-7 text-slate-600">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {card.href && card.linkLabel ? (
                  <Link href={card.href} className="mt-6 text-sm font-bold text-emerald-800 underline-offset-4 hover:underline">
                    {card.linkLabel} →
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-5 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <Link href={t.selectionGuide.solutionsHref} className="inline-flex text-sm font-bold text-emerald-800 underline-offset-4 hover:underline">
              {t.selectionGuide.solutionsLabel} →
            </Link>
            <Link href={t.selectionGuide.ctaHref} className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-emerald-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2">
              {t.selectionGuide.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full border-t border-slate-200 bg-slate-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="max-w-4xl text-[30px] font-bold leading-tight tracking-tight text-slate-950 sm:text-[36px]">
            {t.solutionsResources.title}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.solutionsResources.cards.map((card) => (
              <article key={card.title} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md lg:p-7">
                <h3 className="text-xl font-bold text-slate-950">{card.title}</h3>
                <ul className="mt-4 flex-1 space-y-3 text-base leading-7 text-slate-600">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={card.href} className="mt-7 inline-flex text-sm font-bold text-emerald-800 underline-offset-4 hover:underline">
                  {card.linkLabel} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="w-full bg-emerald-950 px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">
                {t.cta.eyebrow}
              </p>
              <h2 className="mt-4 max-w-[680px] text-[30px] font-bold leading-tight tracking-tight text-white sm:text-[36px] lg:text-[40px]">
                {t.cta.title}
              </h2>
              <p className="mt-5 max-w-[680px] text-base leading-7 text-emerald-50/80">
                {t.cta.description}
              </p>
              <p className="mt-3 max-w-[680px] text-sm leading-6 text-emerald-100/70">
                {t.cta.hint}
              </p>
            </div>
            <Link
              href={t.cta.href}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-white px-7 py-3 text-sm font-bold text-emerald-950 transition hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950 sm:w-auto"
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
