export type PricingTier = "economy" | "standard" | "premium";

export interface PricingConfig {
  products: {
    solar: {
      baseCost: number;
      mast: Record<string, number>;
      lights: Record<string, number>;
      battery: Record<string, number>;
    };
    diesel: {
      baseCost: number;
      mast: Record<string, number>;
    };
  };
  freight: Record<string, number>;
  exchangeRates: {
    USD_RMB: number;
    USD_SAR: number;
  };
  margin: Record<PricingTier, number>;
  insuranceRate: number;
}

export const pricingDB: PricingConfig = {
  products: {
    solar: {
      baseCost: 12000,
      mast: { "7m": 0, "9m": 400, "12m": 800 },
      lights: { "2": 0, "4": 300, "6": 600 },
      battery: { "1": 0, "2": 500, "3": 900 },
    },
    diesel: {
      baseCost: 15000,
      mast: { "7m": 0, "9m": 500, "12m": 900 },
    },
  },
  freight: {
    Australia: 1200,
    Saudi: 900,
    Africa: 1500,
  },
  exchangeRates: {
    USD_RMB: 7.2,
    USD_SAR: 3.75,
  },
  margin: {
    economy: 0.08,
    standard: 0.12,
    premium: 0.15,
  },
  insuranceRate: 0.0035,
};
