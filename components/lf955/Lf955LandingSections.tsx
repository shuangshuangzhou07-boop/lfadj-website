import Image from "next/image";

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  headlineSupport?: string;
  productName?: string;
  subtitle: string;
  summary?: string;
  primaryCta: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
  tertiaryCta?: string;
  tertiaryHref?: string;
  trustBadges?: string[];
  valueBadges?: string[];
  applicationLabel?: string;
  applications?: string[];
  advantageLabel?: string;
  advantages?: string[];
  trustedLabel?: string;
  trustLogos?: string[];
  imageSrc: string;
  imageAlt: string;
  imageObjectPosition?: string;
  featuredMedia?: boolean;
};

type ProblemCard = {
  title: string;
  problem: string;
  impact: string;
  solution: string;
};

type CostLossCard = {
  title: string;
  problem: string;
  solution: string | string[];
};

type CoreConfigurationItem = {
  label: string;
  value: string;
};

type ManufacturingProcessStep = {
  step: string;
  title: string;
  image: string;
  imageAlt: string;
};

type SolutionModule = {
  title: string;
  bullets: string[];
};

type SpecRow = {
  label: string;
  value: string;
};

type SpecGroup = {
  title: string;
  rows: SpecRow[];
};

type FaqItem = {
  q: string;
  a: string;
};

type ApplicationCard = {
  title: string;
  problem: string;
  impact: string;
  solution: string;
  image: string;
  objectPosition?: string;
};

type RoiCard = {
  icon: string;
  title: string;
  metricValue?: string;
  metricLabel?: string;
  lines: string[];
  results: string[];
  comparisonLabel?: string;
  comparisonValue?: string;
};

type RiskPoint = {
  title: string;
  description: string;
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
  image: string;
};

type ConfigurationGroup = {
  title: string;
  options: string;
  recommendation: string;
};

type TestStep = {
  step: string;
  title: string;
};

type ComparisonTable = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  columns: string[];
  rows: string[][];
};

type ProjectCard = {
  title: string;
  region: string;
  challenge: string;
  result: string;
};

type FinalCtaProps = {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta?: string;
  tertiaryCta?: string;
  href: string;
  secondaryHref?: string;
  tertiaryHref?: string;
  configTitle?: string;
  configOptions?: { label: string; value: string }[];
  trustTitle?: string;
  trustBullets?: string[];
  urgencyLine?: string;
  showActionButtons?: boolean;
  formLabels?: {
    name: string;
    country: string;
    projectType: string;
    message: string;
  };
  formOptions?: string[];
  submitLabel?: string;
};

export function HeroSection({
  eyebrow = "Mobile Lighting Solutions",
  title,
  headlineSupport,
  productName,
  subtitle,
  summary,
  primaryCta,
  primaryHref = "#final-cta",
  trustBadges,
  valueBadges,
  applicationLabel = "Applications",
  applications,
  advantageLabel = "Core Advantages",
  advantages,
  trustLogos,
  imageSrc,
  imageAlt,
  imageObjectPosition = "center center",
  featuredMedia = false,
}: HeroSectionProps) {
  const applicationItems = applications ?? trustLogos ?? [];
  const advantageItems = advantages ?? valueBadges ?? trustBadges ?? [];

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(115deg,_#0B1220_0%,_#111A29_48%,_#1B2432_100%)]">
      <div className={`relative z-10 mx-auto flex min-h-[680px] flex-col px-6 py-14 sm:px-8 lg:px-12 lg:py-16 ${featuredMedia ? "max-w-[1540px] lg:min-h-[820px]" : "max-w-[1440px] lg:min-h-[760px]"}`}>
        <div className={`grid flex-1 gap-10 lg:items-center ${featuredMedia ? "lg:grid-cols-[38%_62%] lg:gap-12" : "lg:grid-cols-[42%_58%] lg:gap-12"}`}>
          <div className={featuredMedia ? "max-w-[570px]" : "max-w-[640px]"}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">{eyebrow}</p>
            <h1 className="mt-6 max-w-3xl whitespace-pre-line text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[54px]">
              {title}
            </h1>
            {headlineSupport ? <p className="mt-5 text-lg font-semibold leading-8 text-amber-300 sm:text-xl">{headlineSupport}</p> : null}
            {productName ? <p className="mt-7 text-xl font-semibold leading-8 text-amber-300 sm:text-2xl">{productName}</p> : null}
            <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-slate-200 sm:text-lg">{subtitle}</p>
            {summary ? <p className="mt-4 max-w-2xl text-base font-medium leading-8 text-slate-300">{summary}</p> : null}

            <div className="mt-8 space-y-6">
              {applicationItems.length ? (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">{applicationLabel}</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {applicationItems.map((item) => (
                      <span key={item} className="inline-flex min-h-10 items-center rounded-md border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {advantageItems.length ? (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">{advantageLabel}</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {advantageItems.map((item) => (
                      <span key={item} className="inline-flex min-h-10 items-center rounded-md border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href={primaryHref} className="inline-flex h-[56px] min-h-[56px] items-center justify-center rounded-md bg-amber-500 px-9 text-base font-semibold text-slate-950 shadow-[0_16px_34px_rgba(245,158,11,0.24)] transition duration-300 hover:bg-amber-400 sm:w-auto">
                {primaryCta}
              </a>
            </div>
          </div>

          <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-slate-100 ${featuredMedia ? "min-h-[420px] shadow-[0_34px_90px_rgba(0,0,0,0.48)] sm:min-h-[540px] lg:min-h-[680px] lg:translate-y-2" : "min-h-[300px] shadow-[0_28px_70px_rgba(0,0,0,0.36)] sm:min-h-[430px] lg:min-h-[560px]"}`}>
            <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 lg:w-[80%]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 90vw"
                className="object-contain"
                style={{ objectPosition: "center" }}
              />
            </div>
            {featuredMedia ? (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(251,191,36,0.20),transparent_26%),radial-gradient(circle_at_82%_68%,rgba(255,255,255,0.10),transparent_22%),radial-gradient(ellipse_at_center,transparent_44%,rgba(2,6,23,0.34)_100%)]" />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip({ items }: { items: string[] }) {
  return (
    <section className="border-y border-slate-200 bg-white px-6 py-4 text-slate-800 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 lg:px-2">
        {items.map((item) => (
          <span key={item} className="whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

type LF955Advantage = {
  title: string;
  description: string;
};

type ProductApplicationItem = {
  title: string;
  description: string;
};

export function WhyLf955Section({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: LF955Advantage[];
}) {
  return (
    <section className="bg-white px-6 py-20 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px] lg:px-2">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <article key={item.title} className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductApplicationsSection({
  title,
  items,
}: {
  title: string;
  items: ProductApplicationItem[];
}) {
  return (
    <section id="applications" aria-labelledby="lf955-applications-title" className="bg-slate-50 px-6 py-20 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px] lg:px-2">
        <h2 id="lf955-applications-title" className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item, index) => (
            <article key={item.title} className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="text-sm font-semibold text-amber-600">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectCostLossSection({
  title,
  subtitle,
  cards,
  problemLabel,
  solutionLabel,
  emphasisText,
}: {
  title: string;
  subtitle: string;
  cards: CostLossCard[];
  problemLabel: string;
  solutionLabel: string;
  emphasisText: string;
}) {
  return (
    <section className="bg-slate-50 px-6 py-20 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px] lg:px-2">
        <div className="max-w-4xl text-left">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <article key={card.title} className="flex min-h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="pt-1 text-xl font-semibold tracking-tight text-slate-950">{card.title}</h3>
              </div>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{problemLabel}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{card.problem}</p>
              </div>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-xs font-bold tracking-[0.08em] text-amber-700">{solutionLabel}</p>
                <ul className="mt-3 space-y-2 text-sm font-medium leading-7 text-slate-800">
                  {(Array.isArray(card.solution) ? card.solution : [card.solution]).map((item) => {
                    const splitIndex = item.indexOf(":");
                    const label = splitIndex > 0 ? item.slice(0, splitIndex) : "";
                    const detail = splitIndex > 0 ? item.slice(splitIndex + 1).trim() : item;

                    return (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[0.72em] h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        <span>
                          {label ? <strong className="font-semibold text-slate-950">{label}: </strong> : null}
                          {detail}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 border-l-4 border-amber-500 bg-white px-6 py-5 text-base font-semibold leading-8 text-slate-800 shadow-sm sm:text-lg">
          {emphasisText}
        </p>
      </div>
    </section>
  );
}

export function LF955ConfigurationManufacturingSection({
  title,
  subtitle,
  configurationTitle,
  configuration,
  configurationOptionsTitle,
  configurationOptionsDescription,
  configurationOptions,
  configurationOptionLabel,
  videoTitle,
  videoLabel,
  videoSrc,
  videoPoster,
  videoFallback,
  processTitle,
  processSteps,
}: {
  title: string;
  subtitle: string;
  configurationTitle?: string;
  configuration?: CoreConfigurationItem[];
  configurationOptionsTitle?: string;
  configurationOptionsDescription?: string;
  configurationOptions?: ConfigurationGroup[];
  configurationOptionLabel?: string;
  videoTitle: string;
  videoLabel: string;
  videoSrc: string;
  videoPoster?: string;
  videoFallback: string;
  processTitle: string;
  processSteps: ManufacturingProcessStep[];
}) {
  const hasCoreConfiguration = Boolean(configurationTitle && configuration?.length);

  return (
    <section className="bg-white px-6 py-20 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{subtitle}</p>
        </div>

        <div className={`mt-12 grid gap-8 ${hasCoreConfiguration ? "lg:grid-cols-[0.9fr_1.1fr]" : ""}`}>
          {hasCoreConfiguration ? (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight">{configurationTitle}</h3>
              <dl className="mt-6 divide-y divide-slate-200">
                {configuration?.map((item) => (
                  <div key={item.label} className="grid gap-1 py-4 sm:grid-cols-[140px_1fr] sm:gap-5">
                    <dt className="text-sm font-semibold text-slate-950">{item.label}</dt>
                    <dd className="text-sm leading-6 text-slate-600">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}

          <div className="flex min-h-[420px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-sm">
            <div className="px-6 py-5 sm:px-8">
              <h3 className="text-2xl font-semibold tracking-tight text-white">{videoTitle}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{videoLabel}</p>
            </div>
            <video controls preload="metadata" poster={videoPoster || undefined} className="min-h-[260px] w-full flex-1 bg-black object-cover" aria-label={videoLabel}>
              <source src={videoSrc} type="video/mp4" />
              {videoFallback}
            </video>
          </div>
        </div>

        {configurationOptionsTitle && configurationOptionsDescription && configurationOptions?.length ? (
          <section id="configuration" aria-labelledby="lf955-configuration-options-title" className="mt-14 border-t border-slate-200 pt-14">
            <div className="max-w-4xl">
              <h2 id="lf955-configuration-options-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {configurationOptionsTitle}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{configurationOptionsDescription}</p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {configurationOptions.map((group) => (
                <article key={group.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  {configurationOptionLabel ? (
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">{configurationOptionLabel}</p>
                  ) : null}
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">{group.title}</h3>
                  <p className="mt-4 text-sm font-semibold leading-7 text-slate-800">{group.options}</p>
                  <p className="mt-5 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600">{group.recommendation}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-14">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{processTitle}</h3>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.step} className="flex h-full min-h-[292px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                  <Image src={step.image} alt={step.imageAlt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                  <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                    {step.step}
                  </span>
                </div>
                <div className="flex min-h-[76px] flex-1 items-center px-5 py-4">
                  <p className="font-semibold text-slate-950">{step.title}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function LF955ProjectInquirySection({
  title,
  subtitle,
  fieldLabels,
  environmentOptions,
  submitLabel,
  contactTitle,
  contactText,
  contactItems,
  trustText,
}: {
  title: string;
  subtitle: string;
  fieldLabels: {
    name: string;
    contact: string;
    country: string;
    industry: string;
    environment: string;
    quantity: string;
    message: string;
  };
  environmentOptions: string[];
  submitLabel: string;
  contactTitle: string;
  contactText: string;
  contactItems: string[];
  trustText: string;
}) {
  const inputClassName =
    "mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-500/15";

  return (
    <section id="project-environment-inquiry" className="bg-slate-50 px-6 py-20 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{subtitle}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-800">{fieldLabels.name}</span>
                <input required name="name" autoComplete="name" className={inputClassName} />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-800">{fieldLabels.contact}</span>
                <input required name="contact" autoComplete="email" className={inputClassName} />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-800">{fieldLabels.country}</span>
                <input required name="country" autoComplete="country-name" className={inputClassName} />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-800">{fieldLabels.industry}</span>
                <input required name="industry" className={inputClassName} />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-800">{fieldLabels.environment}</span>
                <select required name="workingEnvironment" defaultValue="" className={inputClassName}>
                  <option value="" disabled>
                    {fieldLabels.environment}
                  </option>
                  {environmentOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-800">{fieldLabels.quantity}</span>
                <input required name="quantity" type="number" min="1" inputMode="numeric" className={inputClassName} />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-slate-800">{fieldLabels.message}</span>
                <textarea required name="message" rows={5} className={`${inputClassName} h-auto py-3`} />
              </label>
            </div>
            <button type="submit" className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-amber-500 px-7 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
              {submitLabel}
            </button>
          </form>

          <aside className="rounded-2xl bg-slate-950 p-6 text-white shadow-sm sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight">{contactTitle}</h3>
            <p className="mt-4 text-base leading-8 text-slate-300">{contactText}</p>
            <ul className="mt-8 space-y-3">
              {contactItems.map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-semibold text-slate-100">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 border-l-4 border-amber-400 bg-white/[0.05] px-4 py-4 text-sm font-semibold leading-7 text-amber-200">
              {trustText}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function ProblemEngineeringSection({
  eyebrow = "Problem Engineering",
  title,
  subtitle,
  cards,
  labels = { problem: "Problem", impact: "Impact", solution: "Solution" },
  ctaLabel = "Request Custom Configuration",
  ctaHref = "#final-cta",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  cards: ProblemCard[];
  labels?: { problem: string; impact: string; solution: string };
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const hasSubtitle = Boolean(subtitle);

  return (
    <section className="bg-[#0B1220] px-6 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
          {hasSubtitle ? <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{subtitle}</p> : null}
        </div>
        <div className={hasSubtitle ? "mt-10 grid gap-5 lg:grid-cols-3" : "mt-7 grid gap-5 lg:grid-cols-3"}>
          {cards.map((card) => (
            <article key={card.title} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_70px_rgba(0,0,0,0.28)]">
              <h3 className="text-2xl font-semibold leading-8 text-white">{card.title}</h3>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{labels.problem}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{card.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{labels.impact}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{card.impact}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">{labels.solution}</p>
                  <p className="mt-2 text-sm leading-7 text-white">{card.solution}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <a href={ctaHref} className="inline-flex h-12 items-center justify-center rounded-full bg-amber-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export function SolutionSystemSection({
  eyebrow = "Solution System",
  title,
  subtitle,
  modules,
  ctaLabel = "Get Full Project Solution",
  ctaHref = "#final-cta",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  modules: SolutionModule[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">{eyebrow}</p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{subtitle}</p>
        </div>
        <div className={`mt-10 grid gap-4 md:grid-cols-2 ${modules.length === 3 ? "xl:grid-cols-3" : "xl:grid-cols-5"}`}>
          {modules.map((module) => (
            <div key={module.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="text-base font-semibold leading-6 text-white">{module.title}</h3>
              <ul className="mt-3 space-y-2">
                {module.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm leading-6 text-slate-300">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a href={ctaHref} className="inline-flex h-12 items-center justify-center rounded-full bg-amber-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export function TechnicalSpecsSection({
  eyebrow = "Technical Specs",
  title,
  subtitle,
  groups,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  groups: SpecGroup[];
}) {
  return (
    <section id="technical-specifications" className="mx-auto max-w-[1280px] px-6 py-[120px] sm:px-8 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-600">{eyebrow}</p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">{subtitle}</p>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-[#111827] p-6 shadow-2xl shadow-slate-900/20 sm:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            {groups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <h3 className="text-lg font-semibold tracking-tight text-white">{group.title}</h3>
                <dl className="mt-5 space-y-4">
                  {group.rows.map((row) => (
                    <div key={row.label} className="border-t border-white/10 pt-4">
                      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{row.label}</dt>
                      <dd className="mt-1 text-sm font-medium leading-6 text-slate-100">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductFaqSection({
  title,
  items,
}: {
  title: string;
  items: FaqItem[];
}) {
  return (
    <section id="faq" aria-labelledby="lf955-faq-title" className="bg-slate-50 px-6 py-20 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <h2 id="lf955-faq-title" className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>

        <div className="mt-10 space-y-4">
          {items.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm open:border-amber-300 sm:px-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold leading-7 text-slate-950">
                <span>{item.q}</span>
                <span aria-hidden="true" className="text-2xl font-light text-amber-600 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600 sm:text-base">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectRoiEngineeringSection({
  eyebrow = "Project ROI & Engineering Value",
  title,
  subtitle,
  comparisonHeader,
  cards,
  primaryCta,
  secondaryCta,
  primaryHref,
  secondaryHref,
  resultLabel = "Result",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  comparisonHeader?: string;
  cards: RoiCard[];
  primaryCta: string;
  secondaryCta?: string;
  primaryHref: string;
  secondaryHref: string;
  resultLabel?: string;
}) {
  return (
    <section className="bg-[#0B1220] px-6 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{subtitle}</p>
          {comparisonHeader ? (
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">{comparisonHeader}</p>
          ) : null}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-amber-400/40"
            >
              {card.metricValue && card.metricLabel ? (
                <div className="mb-6 rounded-2xl border border-amber-400/30 bg-amber-400/10 p-5">
                  <p className="text-[38px] font-semibold leading-none text-amber-300">{card.metricValue}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">{card.metricLabel}</p>
                </div>
              ) : null}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10 text-base text-amber-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white">{card.title}</h3>
              </div>
              {card.comparisonLabel && card.comparisonValue ? (
                <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{card.comparisonLabel}</p>
                  <p className="mt-2 text-base font-semibold text-amber-300">{card.comparisonValue}</p>
                </div>
              ) : null}
              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                {card.lines.map((line) => (
                  <p key={line} className="border-l border-white/10 pl-3">
                    {line}
                  </p>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">{resultLabel}</p>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-white">
                  {card.results.map((result) => (
                    <li key={result} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={primaryHref}
            className="inline-flex h-12 items-center justify-center rounded-full bg-amber-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
          >
            {primaryCta}
          </a>
          {secondaryCta ? (
            <a
              href={secondaryHref}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-300"
            >
              {secondaryCta}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function CompetitorFailureSection({
  title,
  subtitle,
  risks,
  advantageTitle,
  advantages,
}: {
  title: string;
  subtitle: string;
  risks: RiskPoint[];
  advantageTitle: string;
  advantages: string[];
}) {
  return (
    <section className="bg-[#0B1220] px-6 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-300">Competitive Risk</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{subtitle}</p>
        </div>
        <div className={`mt-10 grid gap-6 ${risks.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {risks.map((risk) => (
            <article
              key={risk.title}
              className="rounded-[24px] border border-rose-500/20 bg-gradient-to-b from-rose-500/10 to-white/[0.03] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-rose-400/30 bg-rose-400/10 text-base font-semibold text-rose-300">
                  !
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white">{risk.title}</h3>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">{risk.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-[24px] border border-amber-400/20 bg-amber-400/5 p-6">
          <h3 className="text-xl font-semibold tracking-tight text-white">{advantageTitle}</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {advantages.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ApplicationEngineeringSection({
  eyebrow = "Application Engineering",
  title,
  subtitle,
  cards,
  labels,
  ctaLabel = "Talk to Engineer (WhatsApp)",
  ctaHref = "#final-cta",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  cards: ApplicationCard[];
  labels: { problem: string; impact: string; solution: string };
  ctaLabel?: string | null;
  ctaHref?: string;
}) {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{subtitle}</p>
        </div>
        <div className={`mt-10 grid gap-6 md:grid-cols-2 ${cards.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {cards.map((item) => (
            <article key={item.title} className="group relative min-h-[430px] overflow-hidden rounded-[22px] bg-slate-200 shadow-[0_20px_54px_rgba(15,23,42,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_74px_rgba(15,23,42,0.2)]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes={cards.length === 4 ? "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                style={{ objectPosition: item.objectPosition ?? "center" }}
              />
              <div className="absolute inset-0 bg-slate-950/18" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/86 via-slate-950/38 to-slate-950/8" />
              <div className="relative z-10 flex min-h-[430px] flex-col justify-end p-6">
                <h3 className="text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                <div className="mt-5 space-y-3">
                  {[
                    [labels.problem, item.problem],
                    [labels.impact, item.impact],
                    [labels.solution, item.solution],
                  ].map(([label, value]) => (
                    <div key={label} className="border-l border-amber-300/70 pl-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300">{label}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-100">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        {ctaLabel ? (
          <div className="mt-8">
            <a href={ctaHref} className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-amber-500 hover:text-slate-950">
              {ctaLabel}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function ManufacturingProofSection({
  eyebrow = "Manufacturing Proof",
  title,
  subtitle,
  steps,
  proofPoints,
  ctaLabel = "Request Factory Capability Proof",
  ctaHref = "#final-cta",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  proofPoints?: string[];
  ctaLabel?: string | null;
  ctaHref?: string;
}) {
  return (
    <section className="bg-slate-50 px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{subtitle}</p>
        </div>
        {proofPoints?.length ? (
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {proofPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold leading-6 text-slate-900 shadow-sm">
                {point}
              </div>
            ))}
          </div>
        ) : null}
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((item) => (
            <article key={item.step} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md">
              <div className="relative h-40 w-full overflow-hidden">
                <Image src={item.image} alt={`${item.step} ${item.title}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">{item.step}</p>
                <h4 className="mt-2 text-base font-semibold tracking-tight text-slate-900">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        {ctaLabel ? (
          <div className="mt-8">
            <a href={ctaHref} className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-amber-500 hover:text-slate-950">
              {ctaLabel}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function ProductConfigurationSection({
  eyebrow = "Product Configuration",
  title,
  subtitle,
  groups,
  ctaLabel = "Request Custom Configuration",
  ctaHref = "#final-cta",
  optionLabel = "Select",
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  groups: ConfigurationGroup[];
  ctaLabel?: string | null;
  ctaHref?: string;
  optionLabel?: string;
}) {
  return (
    <section id="configuration" className="bg-white px-6 py-24 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{subtitle}</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <article key={group.title} className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">{optionLabel}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">{group.title}</h3>
              <p className="mt-4 text-sm font-semibold leading-7 text-slate-800">{group.options}</p>
              <p className="mt-5 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600">{group.recommendation}</p>
            </article>
          ))}
        </div>
        {ctaLabel ? (
          <div className="mt-8">
            <a href={ctaHref} className="inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-amber-500 hover:text-slate-950">
              {ctaLabel}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function QualityTestingSection({
  eyebrow = "Quality Testing",
  title,
  subtitle,
  steps,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  steps: TestStep[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
      <div className="rounded-[28px] border border-slate-800 bg-[#0B1220] p-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.2)] sm:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{subtitle}</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {steps.map((step) => (
            <div key={step.step} className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 shadow-[0_16px_42px_rgba(0,0,0,0.16)]">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-300/30 bg-amber-400/10 text-sm font-bold text-amber-300">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{step.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustryComparisonSection({
  eyebrow = "Industry Comparison",
  title,
  subtitle,
  columns,
  rows,
}: ComparisonTable) {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">{eyebrow}</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
            <p className="mt-4 text-base font-medium text-slate-400">{subtitle}</p>
          </div>
          <div className="h-1 w-24 bg-amber-400" />
        </div>
        <div className="mt-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] shadow-[0_34px_90px_rgba(0,0,0,0.28)]">
          <div className="grid grid-cols-[0.92fr_1fr_1.08fr_1fr] border-b border-white/10 bg-slate-900/80 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            {columns.map((column, index) => (
              <div key={column} className={`px-4 py-5 sm:px-6 ${index === 2 ? "bg-[#F5A623] text-slate-950" : ""}`}>
                {column}
              </div>
            ))}
          </div>
          {rows.map(([metric, standard, lf955, improvement]) => (
            <div key={metric} className="grid grid-cols-[0.92fr_1fr_1.08fr_1fr] border-b border-white/10 last:border-b-0">
              <div className="px-4 py-5 text-sm font-semibold text-white sm:px-6">{metric}</div>
              <div className="px-4 py-5 text-sm font-medium leading-6 text-slate-400 sm:px-6">{standard}</div>
              <div className="border-l border-[#F5A623]/40 bg-[#F5A623]/14 px-4 py-5 text-sm font-semibold leading-6 text-white sm:px-6">{lf955}</div>
              <div className="border-l border-white/10 px-4 py-5 text-sm font-medium leading-6 text-slate-300 sm:px-6">{improvement}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RealProjectsSection({
  eyebrow = "Real Projects",
  title,
  subtitle,
  projects,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  projects: ProjectCard[];
}) {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{subtitle}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">{project.region}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{project.challenge}</p>
              <p className="mt-5 border-t border-slate-200 pt-4 text-sm leading-7 font-medium text-slate-800">{project.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalConversionCTA({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  tertiaryCta,
  href,
  secondaryHref = "/downloads/LF955-Diesel-Light-Tower-Datasheet.pdf",
  tertiaryHref = "https://wa.me/",
  configTitle,
  configOptions,
  trustTitle,
  trustBullets,
  urgencyLine,
  showActionButtons = true,
  formLabels = {
    name: "Name",
    country: "Country",
    projectType: "Project Type",
    message: "Message",
  },
  formOptions = [
    "Night construction site",
    "Mining site dust environment",
    "Oilfield lighting",
    "Emergency rescue lighting",
    "Rental fleet",
  ],
  submitLabel = "Request Custom Configuration",
}: FinalCtaProps) {
  return (
    <section id="final-cta" className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
      <div className="grid gap-8 rounded-[28px] bg-[#0B1220] p-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.2)] sm:p-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{subtitle}</p>
          {configOptions?.length ? (
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              {configTitle ? <h3 className="text-lg font-semibold tracking-tight text-white">{configTitle}</h3> : null}
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {configOptions.map((option) => (
                  <div key={option.label} className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{option.label}</p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white">{option.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {trustBullets?.length ? (
            <div className="mt-8">
              {trustTitle ? <h3 className="text-lg font-semibold tracking-tight text-white">{trustTitle}</h3> : null}
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {trustBullets.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm leading-7 text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {urgencyLine ? <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-amber-300">{urgencyLine}</p> : null}
          {showActionButtons ? (
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={href} className="inline-flex h-12 items-center justify-center rounded-full bg-amber-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
                {primaryCta}
              </a>
              {secondaryCta ? (
                <a href={secondaryHref} className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-300">
                  {secondaryCta}
                </a>
              ) : null}
              {tertiaryCta ? (
                <a href={tertiaryHref} className="inline-flex h-12 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-6 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400 hover:text-slate-950">
                  {tertiaryCta}
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
        <form id="lead-form" className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
          <div className="grid gap-4">
            <label className="block">
              <span className="text-sm font-semibold text-slate-200">{formLabels.name}</span>
              <input name="name" className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-200">{formLabels.country}</span>
              <input name="country" className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-200">{formLabels.projectType}</span>
              <select name="projectType" className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20">
                {formOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-200">{formLabels.message}</span>
              <textarea name="message" rows={5} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-amber-400 focus:ring-4 focus:ring-amber-400/20" />
            </label>
            <button type="submit" className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-amber-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
              {submitLabel}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
