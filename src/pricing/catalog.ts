import type { MobileLightTowerProduct, PricingProfile, ShippingRegion } from "./types";

export const mobileLightTowerProducts: MobileLightTowerProduct[] = [
  {
    slug: "lf6130",
    model: "LF6130",
    name: "LF6130 Hydraulic Mobile Lighting Tower",
    category: "Diesel Light Tower",
    basePriceUsd: 12800,
    description:
      "Hydraulic mobile light tower with diesel power, 4 × 400W LED output and 9 m mast.",
    leadTimeWeeks: 6,
  },
];

export const shippingProfiles: Record<ShippingRegion, PricingProfile> = {
  "Middle East": { freightRatePercent: 0.08, insuranceRatePercent: 0.004 },
  Africa: { freightRatePercent: 0.1, insuranceRatePercent: 0.005 },
  "Southeast Asia": { freightRatePercent: 0.07, insuranceRatePercent: 0.0035 },
  "South America": { freightRatePercent: 0.11, insuranceRatePercent: 0.0055 },
  "North America": { freightRatePercent: 0.09, insuranceRatePercent: 0.0045 },
};

export function getMobileLightTowerProduct(slug: string) {
  return mobileLightTowerProducts.find((product) => product.slug === slug) ?? null;
}

export function getShippingProfile(region: ShippingRegion) {
  return shippingProfiles[region];
}
