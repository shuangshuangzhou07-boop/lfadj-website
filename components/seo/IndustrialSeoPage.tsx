type SeoCard = {
  title: string;
  description: string;
  href: string;
  tag?: string;
};

type Stat = {
  label: string;
  value: string;
};

type IndustrialSeoPageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  summary: string;
  keywords: string[];
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
  cards: SeoCard[];
  stats: Stat[];
  note: string;
  bottomTitle: string;
  bottomText: string;
};

export function IndustrialSeoPage({
  eyebrow,
  title,
  subtitle,
  summary,
  keywords,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
  cards,
  stats,
  note,
  bottomTitle,
  bottomText,
}: IndustrialSeoPageProps) {
  return (
    <main className="bg-white text-slate-950">
      <section className="bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.12),_transparent_34%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_38%,_#f8fafc_100%)] px-6 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{subtitle}</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">{summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={primaryHref} className="inline-flex h-12 items-center justify-center rounded-full bg-sky-600 px-6 text-sm font-semibold text-white transition hover:bg-sky-500">
              {primaryCta}
            </a>
            <a href={secondaryHref} className="inline-flex h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-900 transition hover:border-sky-500 hover:text-sky-700">
              {secondaryCta}
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-2xl font-semibold tracking-tight text-slate-950">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[22px] border border-sky-200 bg-sky-50 px-5 py-4 text-sm leading-7 text-slate-700">
            {note}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {cards.map((card) => (
              <a key={card.href} href={card.href} className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-400 hover:shadow-md">
                {card.tag ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">{card.tag}</p> : null}
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">{card.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-950 px-6 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold tracking-tight">{bottomTitle}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">{bottomText}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={primaryHref} className="inline-flex h-12 items-center justify-center rounded-full bg-sky-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
              {primaryCta}
            </a>
            <a href={secondaryHref} className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition hover:border-sky-400 hover:text-sky-300">
              {secondaryCta}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
