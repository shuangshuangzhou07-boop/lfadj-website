import { homepageDictionary, type HomeLanguage } from "@/src/i18n/homepageDictionary";

type HomePageTemplateProps = {
  lang: HomeLanguage;
};

export function HomePageTemplate({ lang }: HomePageTemplateProps) {
  const t = homepageDictionary[lang];

  return (
    <main className='max-w-7xl mx-auto'>
      <section className="px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
              {t.hero.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-2xl font-semibold text-gray-900">
              {t.hero.subtitle}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              {t.hero.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={t.links.lf6130}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700"
              >
                {t.hero.primaryCta}
              </a>
              <a
                href={t.links.contact}
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-50"
              >
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
            <div className="aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-white p-4">
              <img
                src="/images/products/lf6130.png"
                alt={t.hero.imageAlt}
                className="h-full w-full object-contain drop-shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-white px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gray-500">
            {t.authority.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {t.authority.title}
          </h2>
          {t.authority.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 max-w-4xl text-base leading-8 text-gray-600">
              {paragraph}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={t.links.lf6130}
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
            >
              {t.authority.primaryCta}
            </a>
            <a
              href="/seo/backlink-strategy"
              className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-bold text-black hover:border-blue-500"
            >
              {t.authority.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gray-500">
            {t.keywordCluster.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {t.keywordCluster.title}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.keywordCluster.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-blue-600">
                  {link.priority}
                </span>
                <h3 className="mt-3 text-lg font-bold text-black">
                  {link.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {link.text}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gray-500">
            {t.trustSignals.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {t.trustSignals.title}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.trustSignals.items.map((item) => (
              <article
                key={item}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-sm font-bold text-gray-800 shadow-sm"
              >
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="border-t border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {t.productCategories.title}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.productCategories.items.map((category) => (
              <a
                key={category.title}
                href={t.links.products}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-black">{category.title}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {category.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="applications" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gray-500">
            {t.applications.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {t.applications.title}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.applications.items.map((application) => (
              <article
                key={application.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-black">
                  {application.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {application.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-gray-500">
            {t.seoCluster.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {t.seoCluster.title}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.seoCluster.items.map((item) => (
              <a key={item.href} href={item.href} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-blue-500">
                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">{item.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {t.manufacturing.title}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.manufacturing.items.map((item) => (
              <article key={item} className="rounded-2xl border border-gray-200 bg-white p-6 text-sm font-bold text-gray-800 shadow-sm">
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {t.resources.title}
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {t.resources.items.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-black">
                  {item.question}
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-gray-100 bg-gray-50 px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-gray-500">
              {t.cta.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
              {t.cta.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
              {t.cta.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={t.links.contact}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white hover:bg-blue-700"
              >
                {t.cta.primaryCta}
              </a>
              <a
                href={t.links.products}
                className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-black hover:bg-gray-50"
              >
                {t.cta.secondaryCta}
              </a>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-bold text-gray-900">{t.cta.whatsappTitle}</p>
              <p className="mt-2 text-sm text-gray-600">{t.cta.whatsappText}</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-bold text-gray-900">{t.cta.emailTitle}</p>
              <p className="mt-2 text-sm text-gray-600">{t.cta.emailText}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
