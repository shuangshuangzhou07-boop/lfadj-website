import { pricingDB, type PricingConfig, type PricingTier } from "@/lib/config/pricingDB";
import { loadPricing } from "@/lib/storage/pricingStore";

export type ProductType = "Solar" | "Diesel";
export type CountryCode = "Australia" | "Saudi Arabia" | "Africa";

export interface QuoteInput {
  productType: ProductType;
  mastHeight: 7 | 9;
  lights: 2 | 4;
  batteries: number;
  country: CountryCode;
}

export interface QuoteTier {
  name: "Economy" | "Standard" | "Premium";
  title: string;
  recommendation: string;
  exw: number;
  fob: number;
  cif: number;
  configuration: {
    mastHeight: number;
    lights: number;
    batteries: number;
  };
  isRecommended?: boolean;
  highlightNote?: string;
}

function roundCurrency(value: number) {
  return Math.round(value * 100) / 100;
}

function getPricingConfig(): PricingConfig {
  return loadPricing();
}

function getProductCost(input: QuoteInput, config: PricingConfig) {
  const productKey = input.productType.toLowerCase() as "solar" | "diesel";
  const product = config.products[productKey];
  const baseCost = product.baseCost;
  const mastCost = product.mast[`${input.mastHeight}m`] ?? 0;
  const lightsCost = productKey === "solar" ? (product as typeof product & { lights: Record<string, number> }).lights[`${input.lights}`] ?? 0 : 0;
  const batteryCost = productKey === "solar" ? (product as typeof product & { battery: Record<string, number> }).battery[`${Math.max(1, input.batteries)}`] ?? 0 : 0;

  return baseCost + mastCost + lightsCost + batteryCost;
}

function getFreight(country: CountryCode, config: PricingConfig) {
  const freightKey = country === "Saudi Arabia" ? "Saudi" : country;
  return config.freight[freightKey] ?? 0;
}

function getMargin(tier: QuoteTier["name"], config: PricingConfig) {
  const marginKey = tier.toLowerCase() as PricingTier;
  return config.margin[marginKey] ?? 0;
}

function calculateQuote(input: QuoteInput, tier: QuoteTier["name"]): QuoteTier {
  const config = getPricingConfig();
  const productCost = getProductCost(input, config);
  const freight = getFreight(input.country, config);
  const insuranceRate = config.insuranceRate;

  const tierConfig = {
    Economy: { mastHeight: 7, lights: 2, batteries: 1 },
    Standard: { mastHeight: input.mastHeight === 9 ? 9 : 7, lights: input.lights === 4 ? 4 : 2, batteries: 2 },
    Premium: { mastHeight: 9, lights: 4, batteries: 4 },
  }[tier];

  const exw = roundCurrency(productCost + (tierConfig.mastHeight === 9 ? 400 : 0) + (tierConfig.lights === 4 ? 300 : 0) + tierConfig.batteries * 500);
  const fob = roundCurrency(exw + 200);
  const insurance = roundCurrency((fob + freight) * insuranceRate);
  const cif = roundCurrency(fob + freight + insurance);
  const margin = getMargin(tier, config);

  const displayExw = roundCurrency(exw * (1 + margin));
  const displayFob = roundCurrency(fob * (1 + margin));
  const displayCif = roundCurrency(cif * (1 + margin));

  const recommendationMap: Record<QuoteTier["name"], string> = {
    Economy: "Entry-level option for budget-focused buyers and quick deployment.",
    Standard: "Balanced choice for most projects with dependable performance.",
    Premium: "High-end setup for mining, oilfield, and rental operations with stronger ROI.",
  };

  const highlightMap: Record<QuoteTier["name"], { isRecommended?: boolean; highlightNote?: string }> = {
    Economy: {},
    Standard: { isRecommended: true, highlightNote: "Recommended" },
    Premium: { highlightNote: "High configuration" },
  };

  return {
    name: tier,
    title: `${tier} Version`,
    recommendation: recommendationMap[tier],
    exw: displayExw,
    fob: displayFob,
    cif: displayCif,
    configuration: tierConfig,
    ...highlightMap[tier],
  };
}

export function generateTierQuotes(input: QuoteInput): QuoteTier[] {
  return ["Economy", "Standard", "Premium"].map((tier) => calculateQuote(input, tier as QuoteTier["name"]));
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function getPricingSnapshot() {
  return getPricingConfig();
}
