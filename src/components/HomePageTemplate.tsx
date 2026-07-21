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
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-black sm:text-5xl lg:text-[3.5rem]">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={t.hero.primaryHref}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700"
              >
                {t.hero.primaryCta}
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-sm">
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

      <section className="w-full border-y border-gray-200 bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {t.productShowcase.title}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {t.productShowcase.items.map((product) => (
              <article key={product.title} className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="relative aspect-[4/3] bg-white">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1279px) 50vw, 616px"
                      className="object-contain p-4"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-slate-100 px-6 text-center text-sm font-semibold text-slate-500">
                      {product.imageAlt}
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col border-t border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-950">{product.title}</h3>
                  <p className="mt-3 text-sm font-semibold text-blue-700">{product.models}</p>
                  <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">{product.description}</p>
                  <Link
                    href={product.href}
                    className="mt-6 inline-flex h-10 items-center justify-center rounded-lg border border-blue-700 px-4 text-sm font-bold text-blue-700 hover:bg-blue-50"
                  >
                    {product.linkLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="project-selection" className="w-full scroll-mt-24 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {t.selectionGuide.title}
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-gray-600">
            {t.selectionGuide.subtitle}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.selectionGuide.cards.map((card) => (
              <article key={card.title} className="flex h-full flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-xl font-bold text-gray-950">{card.title}</h3>
                <ul className="mt-5 flex-1 space-y-3 text-sm leading-6 text-gray-700">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {card.href && card.linkLabel ? (
                  <Link href={card.href} className="mt-6 text-sm font-bold text-blue-700 underline-offset-4 hover:underline">
                    {card.linkLabel} →
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-6 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Link href={t.selectionGuide.solutionsHref} className="inline-flex text-sm font-bold text-blue-700 underline-offset-4 hover:underline">
              {t.selectionGuide.solutionsLabel} →
            </Link>
            <Link href={t.selectionGuide.ctaHref} className="inline-flex h-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700">
              {t.selectionGuide.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full border-t border-gray-200 bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="max-w-4xl text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {t.solutionsResources.title}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.solutionsResources.cards.map((card) => (
              <article key={card.title} className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-950">{card.title}</h3>
                <ul className="mt-5 flex-1 space-y-3 text-sm leading-6 text-gray-700">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href={card.href} className="mt-7 inline-flex text-sm font-bold text-blue-700 underline-offset-4 hover:underline">
                  {card.linkLabel} →
                </Link>
              </article>
            ))}
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
