import { getProductById, type ProductId } from "@/lib/products";

export type CountryCode = "Australia" | "Saudi Arabia" | "Africa";

export interface QuoteInput {
  productId: ProductId;
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

function getProductCost(input: QuoteInput) {
  const product = getProductById(input.productId);
  if (!product) {
    throw new Error(`Unknown product ID: ${input.productId}`);
  }

  const mastCost = input.mastHeight === 9 ? 500 : 0;
  const lightsCost = input.lights === 4 ? 300 : 0;
  const batteryCost = product.supportsBattery ? Math.max(0, input.batteries) * 200 : 0;

  return product.baseCost + mastCost + lightsCost + batteryCost;
}

function getFreight(country: CountryCode) {
  const freightMap: Record<CountryCode, number> = {
    Australia: 1200,
    "Saudi Arabia": 800,
    Africa: 1500,
  };

  return freightMap[country] ?? 0;
}

function getMargin(tier: QuoteTier["name"]) {
  const marginMap: Record<QuoteTier["name"], number> = {
    Economy: 0.08,
    Standard: 0.12,
    Premium: 0.15,
  };

  return marginMap[tier];
}

function calculateQuote(input: QuoteInput, tier: QuoteTier["name"]): QuoteTier {
  const productCost = getProductCost(input);
  const freight = getFreight(input.country);
  const insuranceRate = 0.005;

  const tierConfig = {
    Economy: { mastHeight: 7, lights: 2, batteries: 1 },
    Standard: { mastHeight: input.mastHeight === 9 ? 9 : 7, lights: input.lights === 4 ? 4 : 2, batteries: 2 },
    Premium: { mastHeight: 9, lights: 4, batteries: 4 },
  }[tier];

  const tierExw = productCost + (tierConfig.mastHeight === 9 ? 500 : 0) + (tierConfig.lights === 4 ? 300 : 0) + tierConfig.batteries * 200;
  const tierFob = tierExw + 200;
  const tierInsurance = roundCurrency((tierFob + freight) * insuranceRate);
  const tierCif = tierFob + freight + tierInsurance;
  const margin = getMargin(tier);

  const displayExw = roundCurrency(tierExw * (1 + margin));
  const displayFob = roundCurrency(tierFob * (1 + margin));
  const displayCif = roundCurrency(tierCif * (1 + margin));

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
