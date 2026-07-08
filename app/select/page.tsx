"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { getInitialLocale, setLocale, t, type Locale } from "@/lib/i18n";
import { getProductsByCategory, getProductById, type ProductCategory, type ProductId } from "@/lib/products";

const categories = ["Solar", "Diesel", "Surveillance", "Energy Storage"] as const;

type ProductCategoryOption = (typeof categories)[number];

export default function SelectPage() {
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>("en");
  const [category, setCategory] = useState<ProductCategoryOption>("Solar");
  const [productId, setProductId] = useState<ProductId>("solar-light-tower");
  const [mastHeight, setMastHeight] = useState<7 | 9>(7);
  const [lights, setLights] = useState<2 | 4>(4);
  const [batteries, setBatteries] = useState(2);
  const [country, setCountry] = useState<"Australia" | "Saudi Arabia" | "Africa">("Australia");

  const products = useMemo(() => getProductsByCategory(category), [category]);
  const selectedProduct = getProductById(productId) ?? products[0];

  useEffect(() => {
    setLocaleState(getInitialLocale());
  }, []);

  useEffect(() => {
    if (!products.some((product) => product.id === productId)) {
      setProductId(products[0]?.id ?? "solar-light-tower");
    }
  }, [products, productId]);

  useEffect(() => {
    if (!selectedProduct?.supportsBattery) {
      setBatteries(0);
    } else if (selectedProduct && batteries < 1) {
      setBatteries(1);
    }
  }, [selectedProduct, batteries]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams({
      productId,
      mastHeight: String(mastHeight),
      lights: String(lights),
      batteries: String(batteries),
      country,
    });
    router.push(`/quote/result?${params.toString()}`);
  };

  const text = useMemo(() => ({
    product: t(locale, "product"),
    solar: t(locale, "solar"),
    diesel: t(locale, "diesel"),
    solarDescription: t(locale, "solarDescription"),
    dieselDescription: t(locale, "dieselDescription"),
    configuration: t(locale, "configuration"),
    mastHeight: t(locale, "mastHeight"),
    lights: t(locale, "lights"),
    battery: t(locale, "battery"),
    country: t(locale, "country"),
    submit: t(locale, "submit"),
    selectProduct: t(locale, "selectProduct"),
    selectConfig: t(locale, "selectConfig"),
    selectCountry: t(locale, "selectCountry"),
    pageSubtitle: t(locale, "pageSubtitle"),
  }), [locale]);

  const toggleLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    setLocale(nextLocale);
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">LFADJ Sales OS V5</p>
            <h1 className="mt-3 text-3xl font-semibold">{t(locale, "appTitle")}</h1>
          </div>
          <LanguageSwitch locale={locale} onChange={toggleLocale} />
        </div>
        <p className="mt-3 text-sm text-slate-400">{text.pageSubtitle}</p>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <section>
            <h2 className="text-lg font-semibold">{text.selectProduct}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {categories.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setCategory(option)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold ${category === option ? "border-cyan-400 bg-cyan-500/10" : "border-slate-700 bg-slate-800"}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold">{t(locale, "product")}</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {products.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => setProductId(product.id)}
                  className={`rounded-xl border px-4 py-3 text-left ${productId === product.id ? "border-cyan-400 bg-cyan-500/10" : "border-slate-700 bg-slate-800"}`}
                >
                  <div className="font-semibold">{product.title}</div>
                  <div className="text-sm text-slate-400">{product.description}</div>
                </button>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold">{text.selectConfig}</h2>
            <div className="mt-3 grid gap-4 md:grid-cols-3">
              <label className="block text-sm">
                <span className="mb-2 block text-slate-300">{text.mastHeight}</span>
                <select
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2"
                  value={mastHeight}
                  onChange={(event) => setMastHeight(Number(event.target.value) as 7 | 9)}
                >
                  <option value={7}>7m</option>
                  <option value={9}>9m</option>
                </select>
              </label>

              <label className="block text-sm">
                <span className="mb-2 block text-slate-300">{text.lights}</span>
                <select
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2"
                  value={lights}
                  onChange={(event) => setLights(Number(event.target.value) as 2 | 4)}
                >
                  <option value={2}>2 lights</option>
                  <option value={4}>4 lights</option>
                </select>
              </label>

              {selectedProduct?.supportsBattery ? (
                <label className="block text-sm">
                  <span className="mb-2 block text-slate-300">{text.battery}</span>
                  <input
                    type="number"
                    min="1"
                    max="4"
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2"
                    value={batteries}
                    onChange={(event) => {
                      const nextValue = Math.max(1, Math.min(4, Number(event.target.value)));
                      setBatteries(nextValue);
                    }}
                  />
                </label>
              ) : (
                <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4 text-sm text-slate-300">
                  <div className="font-semibold">Engine System</div>
                  <p className="mt-1">{selectedProduct?.engineSystem}</p>
                  <div className="mt-3 font-semibold">Generator System</div>
                  <p className="mt-1">{selectedProduct?.generatorSystem}</p>
                </div>
              )}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold">{text.selectCountry}</h2>
            <select
              className="mt-3 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2"
              value={country}
              onChange={(event) => setCountry(event.target.value as "Australia" | "Saudi Arabia" | "Africa")}
            >
              <option value="Australia">Australia</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Africa">Africa</option>
            </select>
          </section>

          <button
            type="submit"
            className="w-full rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            {text.submit}
          </button>
        </form>
      </div>
    </main>
  );
}
