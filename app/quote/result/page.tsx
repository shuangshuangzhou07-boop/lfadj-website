"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { formatCurrency, generateTierQuotes } from "@/lib/quoteEngine";
import { getProductById, type ProductId } from "@/lib/products";
import { getInitialLocale, setLocale, t, type Locale } from "@/lib/i18n";
import { generateQuotePDF } from "@/lib/quotePdf";
import { translateText } from "@/lib/translator";
import { generateWhatsAppMessage } from "@/lib/whatsappMessage";

function QuoteResultContent() {
  const searchParams = useSearchParams();
  const [locale, setLocaleState] = useState<Locale>("en");

  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    setLocaleState(getInitialLocale());

    const handlePricingChange = () => {
      setRefreshKey((value) => value + 1);
    };

    window.addEventListener("lfadj-pricing-updated", handlePricingChange);
    return () => window.removeEventListener("lfadj-pricing-updated", handlePricingChange);
  }, []);

  const quoteInput = useMemo(() => {
    const productId = (searchParams.get("productId") as ProductId) || "solar-light-tower";
    const mastHeight = Number(searchParams.get("mastHeight") || 7) as 7 | 9;
    const lights = Number(searchParams.get("lights") || 4) as 2 | 4;
    const batteries = Number(searchParams.get("batteries") || 2);
    const country = (searchParams.get("country") as "Australia" | "Saudi Arabia" | "Africa") || "Australia";

    return {
      productId,
      mastHeight,
      lights,
      batteries,
      country,
    };
  }, [searchParams]);

  const selectedProduct = useMemo(() => getProductById(quoteInput.productId), [quoteInput.productId]);
  const quotes = useMemo(() => generateTierQuotes(quoteInput), [quoteInput, refreshKey]);

  const toggleLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    setLocale(nextLocale);
  };

  const isZh = locale === "zh";

  const text = useMemo(() => ({
    title: t(locale, "quoteResultsTitle"),
    subtitle: t(locale, "quoteResultsSubtitle"),
    quoteSummary: t(locale, "quoteSummary"),
    configuration: t(locale, "configurationLabel"),
    destination: t(locale, "destinationLabel"),
    salesActions: t(locale, "salesActions"),
    salesAssistant: t(locale, "salesAssistant"),
    downloadPdf: t(locale, "downloadPdf"),
    copyText: t(locale, "copyText"),
    email: t(locale, "email"),
    englishMessage: t(locale, "englishMessage"),
    chineseMessage: t(locale, "chineseMessage"),
    copyButton: t(locale, "copyButton"),
    selectButton: t(locale, "selectButton"),
    quoteBreakdown: t(locale, "quoteBreakdown"),
    quoteBreakdownHint: t(locale, "quoteBreakdownHint"),
    itemLabel: t(locale, "itemLabel"),
    amountLabel: t(locale, "amountLabel"),
    deliveryLabel: t(locale, "deliveryLabel"),
  }), [locale]);

  const localizedQuotes = useMemo(() => quotes.map((quote) => ({
    ...quote,
    title: isZh ? (quote.name === "Economy" ? "经济型" : quote.name === "Standard" ? "标准型" : "高配型") : quote.title,
    recommendation: isZh ? (quote.name === "Economy" ? "面向预算敏感客户的入门选项。" : quote.name === "Standard" ? "适用于大多数项目的平衡方案。" : "面向矿山、油田和租赁业务的高配方案。") : quote.recommendation,
  })), [isZh, quotes]);

  const englishSummary = useMemo(() => {
    const productTitle = selectedProduct?.title ?? quoteInput.productId;
    const configDescription = selectedProduct?.supportsBattery
      ? `${quoteInput.mastHeight}m mast, ${quoteInput.lights} lights, ${quoteInput.batteries} batteries`
      : `${quoteInput.mastHeight}m mast, ${quoteInput.lights} lights`;

    return [
      `Product: ${productTitle}`,
      `Configuration: ${configDescription}`,
      `Shipping: ${quoteInput.country}`,
      ...localizedQuotes.map((quote) => `${quote.name}: EXW ${formatCurrency(quote.exw)} / FOB ${formatCurrency(quote.fob)} / CIF ${formatCurrency(quote.cif)}`),
    ].join("\n");
  }, [localizedQuotes, quoteInput, selectedProduct]);

  const chineseSummary = useMemo(() => translateText(englishSummary, "en2zh"), [englishSummary]);

  const freightMap = useMemo(() => ({
    Australia: 1200,
    "Saudi Arabia": 800,
    Africa: 1500,
  }), []);

  const breakdownRows = useMemo(() => {
    const freight = freightMap[quoteInput.country];
    const margin = quoteInput.country === "Saudi Arabia" ? 0.15 : quoteInput.country === "Africa" ? 0.18 : 0.12;
    const baseExw = localizedQuotes[1]?.exw ? localizedQuotes[1].exw / (1 + margin) : 0;
    const profit = localizedQuotes[1]?.exw ? localizedQuotes[1].exw - baseExw : 0;
    const insurance = localizedQuotes[1]?.cif ? localizedQuotes[1].cif - localizedQuotes[1].fob - freight : 0;

    return [
      { label: isZh ? "EXW" : "EXW", value: formatCurrency(localizedQuotes[1]?.exw ?? 0) },
      { label: isZh ? "国内成本" : "Domestic Cost", value: formatCurrency(200) },
      { label: isZh ? "运费" : "Freight", value: formatCurrency(freight) },
      { label: isZh ? "保险" : "Insurance", value: formatCurrency(insurance) },
      { label: isZh ? "利润" : "Profit", value: formatCurrency(profit) },
    ];
  }, [freightMap, isZh, localizedQuotes, quoteInput.country]);

  const tierMeta = useMemo(() => ({
    Economy: {
      delivery: isZh ? "7-10 天" : "7-10 days",
      features: isZh ? ["基础部署", "快速交付", "预算友好"] : ["Basic deployment", "Fast delivery", "Budget friendly"],
    },
    Standard: {
      delivery: isZh ? "12-18 天" : "12-18 days",
      features: isZh ? ["平衡性能", "最受欢迎", "优先支持"] : ["Balanced performance", "Most requested", "Priority support"],
    },
    Premium: {
      delivery: isZh ? "18-25 天" : "18-25 days",
      features: isZh ? ["高性价比", "高配置", "强化售后"] : ["High ROI", "High configuration", "Premium support"],
    },
  }), [isZh]);

  const copyText = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  const handleExportPdf = () => {
    generateQuotePDF({
      product: selectedProduct?.title ?? quoteInput.productId,
      country: quoteInput.country,
      economyPrice: formatCurrency(localizedQuotes[0]?.exw ?? 0),
      standardPrice: formatCurrency(localizedQuotes[1]?.exw ?? 0),
      premiumPrice: formatCurrency(localizedQuotes[2]?.exw ?? 0),
    });
  };

  const productLabel = selectedProduct?.title ?? quoteInput.productId;

  const handleWhatsApp = () => {
    copyText(generateWhatsAppMessage({
      product: productLabel,
      country: quoteInput.country,
      standardPrice: formatCurrency(localizedQuotes[1]?.cif ?? 0),
    }));
  };

  const handleEmail = () => {
    copyText(`Subject: LFADJ Quotation\n\nHello,\n\nPlease find the latest quote below.\n\nProduct: ${productLabel} Light Tower\nCountry: ${quoteInput.country}\nStandard CIF: ${formatCurrency(localizedQuotes[1]?.cif ?? 0)}\n\nBest regards,\nLFADJ Sales Team`);
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_100%)] px-4 py-6 text-white sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <section className="rounded-[28px] border border-slate-800/80 bg-slate-900/80 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.35)] backdrop-blur md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">LFADJ Sales OS V6</p>
              <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">{text.title}</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">{text.subtitle}</p>
            </div>
            <LanguageSwitch locale={locale} onChange={toggleLocale} />
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.55fr_0.8fr]">
          <div className="space-y-6">
            <section className="rounded-[24px] border border-slate-800/80 bg-slate-900/80 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.25)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">{text.quoteSummary}</p>
                  <h2 className="mt-2 text-xl font-semibold">{selectedProduct?.title ?? quoteInput.productId}</h2>
                </div>
                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm font-semibold text-cyan-300">
                  {quoteInput.country}
                </span>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-sm text-slate-400">{text.configuration}</p>
                  <p className="mt-2 text-sm font-medium text-white">{quoteInput.mastHeight}m mast · {quoteInput.lights} lights · {quoteInput.batteries} batteries</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-sm text-slate-400">{text.destination}</p>
                  <p className="mt-2 text-sm font-medium text-white">{quoteInput.country}</p>
                </div>
              </div>
            </section>

            <section className="grid gap-4 xl:grid-cols-3">
              {localizedQuotes.map((quote) => {
                const meta = tierMeta[quote.name as keyof typeof tierMeta];
                const isRecommended = Boolean(quote.isRecommended);
                return (
                  <article key={quote.name} className={`rounded-[24px] border p-6 shadow-[0_18px_45px_rgba(2,6,23,0.24)] ${isRecommended ? "border-cyan-400 bg-cyan-500/10" : "border-slate-800 bg-slate-900/80"}`}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">{quote.name}</p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">{quote.title}</h3>
                      </div>
                      {isRecommended ? (
                        <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-950">{isZh ? "推荐" : "Recommended"}</span>
                      ) : null}
                    </div>

                    <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                      <p className="text-sm text-slate-400">{isZh ? "CIF 价格" : "CIF Price"}</p>
                      <p className="mt-2 text-3xl font-semibold text-white">{formatCurrency(quote.cif)}</p>
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-950/60 px-3 py-2 text-sm text-slate-300">
                        <span>{isZh ? "交货时间" : "Delivery"}</span>
                        <span className="font-medium text-white">{meta.delivery}</span>
                      </div>
                      <ul className="space-y-2 text-sm text-slate-300">
                        {meta.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-cyan-400" />{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <button type="button" onClick={() => copyText(`${quote.name}: ${formatCurrency(quote.cif)}`)} className={`mt-6 w-full rounded-2xl px-4 py-3 text-sm font-semibold transition ${isRecommended ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400" : "bg-slate-800 text-white hover:bg-slate-700"}`}>
                      {isRecommended ? text.selectButton : text.copyButton}
                    </button>
                  </article>
                );
              })}
            </section>

            <section className="rounded-[24px] border border-slate-800/80 bg-slate-900/80 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.22)]">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold">{text.quoteBreakdown}</h3>
                <span className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-sm text-slate-300">{text.quoteBreakdownHint}</span>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800">
                <table className="min-w-full divide-y divide-slate-800 text-sm">
                  <thead className="bg-slate-950/80">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-slate-300">{text.itemLabel}</th>
                      <th className="px-4 py-3 text-right font-semibold text-slate-300">{text.amountLabel}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 bg-slate-900/70">
                    {breakdownRows.map((row) => (
                      <tr key={row.label}>
                        <td className="px-4 py-3 text-slate-300">{row.label}</td>
                        <td className="px-4 py-3 text-right font-medium text-white">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-6">
            <section className="rounded-[24px] border border-slate-800/80 bg-slate-900/80 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.22)]">
              <h3 className="text-lg font-semibold">{text.salesActions}</h3>
              <div className="mt-4 space-y-3">
                <button type="button" onClick={handleExportPdf} className="flex w-full items-center justify-center rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">📄 {text.downloadPdf}</button>
                <button type="button" onClick={handleWhatsApp} className="flex w-full items-center justify-center rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400">💬 {t(locale, "whatsapp")}</button>
                <button type="button" onClick={handleEmail} className="flex w-full items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-700">📧 {text.email}</button>
                <button type="button" onClick={() => copyText(englishSummary)} className="flex w-full items-center justify-center rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800">📋 {text.copyText}</button>
              </div>
            </section>

            <section className="rounded-[24px] border border-slate-800/80 bg-slate-900/80 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.22)]">
              <h3 className="text-lg font-semibold">{text.salesAssistant}</h3>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-sm font-semibold text-slate-300">{text.englishMessage}</p>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-400">{generateWhatsAppMessage({ product: productLabel, country: quoteInput.country, standardPrice: formatCurrency(localizedQuotes[1]?.cif ?? 0) })}</p>
                  <button type="button" onClick={() => copyText(generateWhatsAppMessage({ product: productLabel, country: quoteInput.country, standardPrice: formatCurrency(localizedQuotes[1]?.cif ?? 0) }))} className="mt-3 rounded-full border border-slate-700 px-3 py-2 text-sm font-semibold text-slate-200">{text.copyButton}</button>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <p className="text-sm font-semibold text-slate-300">{text.chineseMessage}</p>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-400">{chineseSummary}</p>
                  <button type="button" onClick={() => copyText(chineseSummary)} className="mt-3 rounded-full border border-slate-700 px-3 py-2 text-sm font-semibold text-slate-200">{text.copyButton}</button>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default function QuoteResultPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 px-6 py-16 text-white">Loading quote results...</div>}>
      <QuoteResultContent />
    </Suspense>
  );
}
