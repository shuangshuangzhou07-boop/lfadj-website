import Image from "next/image";
import Link from "next/link";
import type { SolutionPageData } from "@/lib/site-framework";

export function SolutionPage({ data }: { data: SolutionPageData }) {
  const hero = data.hero;
  const heroSteps = hero?.steps ?? [];
  const heroCta = hero?.cta ?? (data.ctaPlacement === "hero" ? data.cta : null);
  const hasHeroImage = Boolean(hero?.imageSrc);
  const imageEmphasis = hero?.layout === "image-emphasis";
  const heroGridColumns = imageEmphasis
    ? "lg:grid-cols-[0.76fr_1fr]"
    : "lg:grid-cols-[1.05fr_0.95fr]";
  const heroImageSizing = imageEmphasis
    ? "aspect-[5/4] w-full lg:aspect-auto lg:h-[400px]"
    : hero?.imageAspect === "video"
      ? "aspect-video"
      : "min-h-[320px] sm:min-h-[420px]";
  const heroSectionSpacing = imageEmphasis ? "py-14 sm:py-16 lg:py-20" : "py-20 lg:py-28";
  const heroGridGap = imageEmphasis ? "gap-8 lg:gap-10" : "gap-12";
  const heroTitleStyles = imageEmphasis
    ? "mt-7 max-w-[520px] text-4xl leading-tight [text-wrap:balance] sm:text-5xl lg:text-[52px] lg:leading-[1.08]"
    : "mt-10 max-w-4xl text-4xl sm:text-5xl lg:text-6xl";
  const heroSubtitleStyles = imageEmphasis
    ? "mt-5 max-w-[520px] text-lg leading-8"
    : "mt-6 max-w-3xl text-lg leading-8 sm:text-xl";
  const relatedLinksStyle = data.relatedLinksStyle ?? "cards";
  const relatedCtaPadding = data.ctaDensity === "compact" ? "py-[30px]" : "py-12";
  const relatedCtaDescriptionMargin = data.ctaDensity === "compact" ? "mt-3" : "mt-4";
  const relatedCtaButtonMargin = data.ctaDensity === "compact" ? "mt-6" : "mt-8";

  return (
    <main className="bg-white text-slate-950">
      <section className={`border-b border-slate-200 bg-slate-50 px-6 sm:px-8 ${heroSectionSpacing}`}>
        <div className={`mx-auto max-w-[1200px] ${hasHeroImage ? `grid items-center ${heroGridGap} ${heroGridColumns}` : ""}`}>
          <div>
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href={data.homeHref} className="hover:text-slate-950">{data.homeLabel}</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href={data.parentHref} className="hover:text-slate-950">{data.parentLabel}</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-slate-900">{data.title}</li>
            </ol>
          </nav>
          <h1 className={`${heroTitleStyles} font-bold tracking-tight`}>{data.title}</h1>
          <p className={`${heroSubtitleStyles} text-slate-600`}>
            {hero?.subtitle ?? data.description}
          </p>
          {heroSteps.length ? (
            <ol className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {heroSteps.map((step, index) => (
                <li key={step} className="contents">
                  <span className="rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800">
                    {step}
                  </span>
                  {index < heroSteps.length - 1 ? (
                    <span aria-hidden="true" className="text-center text-xl font-bold text-amber-600">
                      ↓
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          ) : null}
          {heroCta ? (
            <Link href={heroCta.href} className={`${imageEmphasis ? "mt-6" : "mt-8"} inline-flex min-h-12 max-w-full items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-center font-semibold text-slate-950 transition-colors hover:bg-amber-400`}>
              {heroCta.label}
            </Link>
          ) : null}
          </div>
          {hero?.imageSrc ? (
            <div className={`relative overflow-hidden rounded-xl border border-slate-200 bg-slate-200 shadow-sm ${heroImageSizing}`}>
              <Image
                src={hero.imageSrc}
                alt={hero.imageAlt ?? ""}
                fill
                priority
                sizes={imageEmphasis ? "(min-width: 1024px) 57vw, 100vw" : "(min-width: 1024px) 46vw, 100vw"}
                className="object-cover object-center"
              />
            </div>
          ) : null}
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.selectionFactors.title}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.selectionFactors.items.map((item) => (
              <article key={item.title} className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {data.detailSections?.map((section) => (
        <section key={section.title} className={`${section.muted ? "bg-slate-50" : "bg-white"} px-6 py-20 sm:px-8`}>
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{section.title}</h2>
            {section.description ? (
              <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">{section.description}</p>
            ) : null}
            {section.items ? (
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {section.items.map((item) => (
                  <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ))}

      <section className="bg-slate-50 px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.mastOptions.title}</h2>
          {data.mastOptions.introduction ? (
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{data.mastOptions.introduction}</p>
          ) : null}
          {data.mastOptions.powerSystemsTable ? (
            <div className="mt-10 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[720px] border-collapse bg-white text-left">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-semibold">{data.mastOptions.powerSystemsTable.projectRequirementLabel}</th>
                    <th scope="col" className="px-6 py-4 font-semibold">{data.mastOptions.powerSystemsTable.recommendedSolutionLabel}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {data.mastOptions.powerSystemsTable.rows.map((row) => (
                    <tr key={row.projectRequirement}>
                      <th scope="row" className="px-6 py-5 align-top font-semibold">{row.projectRequirement}</th>
                      <td className="px-6 py-5 align-top">
                        <Link href={row.recommendedSolution.href} className="font-bold text-slate-950 underline decoration-amber-500 decoration-2 underline-offset-4">
                          {row.recommendedSolution.label}
                        </Link>
                        <p className="mt-2.5 leading-6 text-slate-700">{row.description}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : data.mastOptions.configurationTable ? (
            <div className="mt-10 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[720px] border-collapse bg-white text-left">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-semibold">{data.mastOptions.configurationTable.projectConditionsLabel}</th>
                    <th scope="col" className="px-6 py-4 font-semibold">{data.mastOptions.configurationTable.configurationRecommendationLabel}</th>
                    <th scope="col" className="px-6 py-4 font-semibold">{data.mastOptions.configurationTable.recommendedSolutionLabel}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {data.mastOptions.configurationTable.rows.map((row) => (
                    <tr key={row.projectConditions}>
                      <th scope="row" className="px-6 py-4 font-semibold">{row.projectConditions}</th>
                      <td className="px-6 py-4 text-slate-600">{row.configurationRecommendation}</td>
                      <td className="px-6 py-4 text-slate-600">{row.recommendedSolution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {data.mastOptions.items.map((item) => (
                <article key={item.title} className={`${item.suitableFor ? "flex flex-col" : ""} min-w-0 h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm`}>
                  <h3 className="break-words text-xl font-bold">{item.title}</h3>
                  {item.positioning ? <p className="mt-3 break-words font-semibold text-amber-700">{item.positioning}</p> : null}
                  <p className="mt-3 break-words leading-7 text-slate-600">{item.description}</p>
                  {item.suitableFor ? (
                    <div className="mt-auto pt-4">
                      <div className="border-t border-slate-200 pt-4 lg:min-h-[112px]">
                        <p className="text-sm font-bold uppercase tracking-wide text-slate-900">{item.suitableFor.label}</p>
                        <p className="mt-2 break-words leading-7 text-slate-600">{item.suitableFor.items.join(" / ")}</p>
                      </div>
                    </div>
                  ) : null}
                  {item.relatedProduct ? (
                    <Link href={item.relatedProduct.href} className="mt-5 inline-flex font-semibold underline decoration-amber-500 decoration-2 underline-offset-4">
                      {item.relatedProduct.label}
                    </Link>
                  ) : null}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {data.configurationExamples ? (
        <section className="px-6 py-20 sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.configurationExamples.title}</h2>
            <div className="mt-10 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[560px] border-collapse bg-white text-left">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-semibold">{data.configurationExamples.projectTypeLabel}</th>
                    <th scope="col" className="px-6 py-4 font-semibold">{data.configurationExamples.recommendationLabel}</th>
                    <th scope="col" className="px-6 py-4 font-semibold">{data.configurationExamples.reasonLabel}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {data.configurationExamples.rows.map((row) => (
                    <tr key={row.projectType}>
                      <th scope="row" className="px-6 py-4 font-semibold">{row.projectType}</th>
                      <td className="px-6 py-4 text-slate-600">{row.recommendation}</td>
                      <td className="px-6 py-4 text-slate-600">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-slate-50 px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.relatedProducts.title}</h2>
          {data.relatedProducts.description ? (
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{data.relatedProducts.description}</p>
          ) : null}
          {relatedLinksStyle === "text" && data.relatedProducts.groups ? (
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {data.relatedProducts.groups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-xl font-bold">{group.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-950 hover:decoration-amber-500">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {data.relatedProducts.items.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-xl border border-slate-200 bg-white p-6 text-xl font-bold shadow-sm transition-shadow hover:shadow-md">
                  {item.label}
                </Link>
              ))}
            </div>
          )}
          {data.relatedProducts.supportingLinks ? (
            <div className="mt-8 flex flex-wrap gap-4">
              {data.relatedProducts.supportingLinks.map((item) => (
                <Link key={item.href} href={item.href} className="font-semibold text-slate-700 underline decoration-amber-500 decoration-2 underline-offset-4">
                  {item.label}
                </Link>
              ))}
            </div>
          ) : null}
          {data.ctaPlacement === "related" ? (
            <div className={`mt-16 rounded-xl bg-slate-950 px-6 text-white sm:px-10 ${relatedCtaPadding}`}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.cta.title}</h2>
              <p className={`${relatedCtaDescriptionMargin} max-w-3xl text-lg leading-8 text-slate-300`}>{data.cta.description}</p>
              <Link href={data.cta.href} className={`${relatedCtaButtonMargin} inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-amber-400`}>
                {data.cta.label}
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      {data.ctaPlacement !== "related" && data.ctaPlacement !== "hero" ? (
        <section className="bg-slate-950 px-6 py-20 text-white sm:px-8">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{data.cta.title}</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{data.cta.description}</p>
            <Link href={data.cta.href} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-amber-400">
              {data.cta.label}
            </Link>
          </div>
        </section>
      ) : null}
    </main>
  );
}
