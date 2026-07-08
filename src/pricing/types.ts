export type PricingTerm = "EXW" | "FOB" | "CIF";
export type ShippingRegion = "Middle East" | "Africa" | "Southeast Asia" | "South America" | "North America";

export interface MobileLightTowerProduct {
  slug: string;
  model: string;
  name: string;
  category: string;
  basePriceUsd: number;
  description: string;
  leadTimeWeeks: number;
}

export interface QuoteInput {
  productSlug: string;
  quantity: number;
  destinationPort: string;
  shippingRegion: ShippingRegion;
}

export interface QuoteBreakdown {
  unitPriceUsd: number;
  subtotalUsd: number;
  exportHandlingUsd: number;
  packagingUsd: number;
  loadingUsd: number;
  freightUsd: number;
  insuranceUsd: number;
  exwUsd: number;
  fobUsd: number;
  cifUsd: number;
}

export interface PricingProfile {
  freightRatePercent: number;
  insuranceRatePercent: number;
}
