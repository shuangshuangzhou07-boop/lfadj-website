"use client";

import { pricingDB, type PricingConfig } from "@/lib/config/pricingDB";

const STORAGE_KEY = "lfadj-pricing-config";

export function loadPricing(): PricingConfig {
  if (typeof window === "undefined") {
    return pricingDB;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return pricingDB;
    }

    const parsed = JSON.parse(raw) as PricingConfig;
    return {
      ...pricingDB,
      ...parsed,
      products: {
        solar: {
          ...pricingDB.products.solar,
          ...parsed.products?.solar,
          mast: { ...pricingDB.products.solar.mast, ...parsed.products?.solar?.mast },
          lights: { ...pricingDB.products.solar.lights, ...parsed.products?.solar?.lights },
          battery: { ...pricingDB.products.solar.battery, ...parsed.products?.solar?.battery },
        },
        diesel: {
          ...pricingDB.products.diesel,
          ...parsed.products?.diesel,
          mast: { ...pricingDB.products.diesel.mast, ...parsed.products?.diesel?.mast },
        },
      },
      freight: { ...pricingDB.freight, ...parsed.freight },
      exchangeRates: { ...pricingDB.exchangeRates, ...parsed.exchangeRates },
      margin: { ...pricingDB.margin, ...parsed.margin },
      insuranceRate: parsed.insuranceRate ?? pricingDB.insuranceRate,
    };
  } catch {
    return pricingDB;
  }
}

export function savePricing(config: PricingConfig) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
}

export function resetPricing() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
}
