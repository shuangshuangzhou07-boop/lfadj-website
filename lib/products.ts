export type ProductCategory = "Solar" | "Diesel" | "Surveillance" | "Energy Storage";

export type ProductId =
  | "solar-light-tower"
  | "solar-surveillance-light-tower"
  | "solar-energy-storage-light-tower"
  | "diesel-manual-light-tower"
  | "diesel-hydraulic-light-tower"
  | "solar-surveillance-tower"
  | "diesel-surveillance-tower"
  | "solar-storage-tower"
  | "hybrid-storage-system";

export interface ProductDefinition {
  id: ProductId;
  category: ProductCategory;
  title: string;
  description: string;
  baseCost: number;
  supportsBattery: boolean;
  engineSystem?: string;
  generatorSystem?: string;
  batterySystem?: string;
}

export const productCatalog: Record<ProductCategory, ProductDefinition[]> = {
  Solar: [
    {
      id: "solar-light-tower",
      category: "Solar",
      title: "Solar Light Tower",
      description: "Standard solar mobile light tower with battery-backed LED lighting.",
      baseCost: 12000,
      supportsBattery: true,
      batterySystem: "Modular battery bank with fast charging and 48h runtime",
    },
    {
      id: "solar-surveillance-light-tower",
      category: "Solar",
      title: "Solar Surveillance Light Tower",
      description: "Solar-powered surveillance tower with camera-ready mast and remote monitoring support.",
      baseCost: 14500,
      supportsBattery: true,
      batterySystem: "High-capacity battery pack for surveillance and lighting",
    },
    {
      id: "solar-energy-storage-light-tower",
      category: "Solar",
      title: "Solar Energy Storage Light Tower",
      description: "Solar light tower with integrated energy storage for extended off-grid operation.",
      baseCost: 17500,
      supportsBattery: true,
      batterySystem: "Energy storage module optimized for peak shaving and backup power",
    },
  ],
  Diesel: [
    {
      id: "diesel-manual-light-tower",
      category: "Diesel",
      title: "Manual Diesel Light Tower",
      description: "Diesel tower with hand-crank mast and dependable engine power.",
      baseCost: 15000,
      supportsBattery: false,
      engineSystem: "Single-cylinder engine with manual mast lifting",
      generatorSystem: "Integrated diesel generator for continuous lighting",
    },
    {
      id: "diesel-hydraulic-light-tower",
      category: "Diesel",
      title: "Hydraulic Diesel Light Tower",
      description: "Hydraulic mast diesel tower engineered for rugged rental and mining use.",
      baseCost: 17500,
      supportsBattery: false,
      engineSystem: "Hydraulic mast system with heavy-duty diesel engine",
      generatorSystem: "High-output diesel generator for demanding applications",
    },
  ],
  Surveillance: [
    {
      id: "solar-surveillance-tower",
      category: "Surveillance",
      title: "Solar Surveillance Tower",
      description: "Solar surveillance tower for remote security, with smart battery backup.",
      baseCost: 15000,
      supportsBattery: true,
      batterySystem: "Surveillance-grade battery pack with camera uptime support",
    },
    {
      id: "diesel-surveillance-tower",
      category: "Surveillance",
      title: "Diesel Surveillance Tower",
      description: "Diesel-powered surveillance tower with engine-backed operation.",
      baseCost: 17000,
      supportsBattery: false,
      engineSystem: "Diesel engine for continuous surveillance power",
      generatorSystem: "Onboard generator for secure remote operation",
    },
  ],
  "Energy Storage": [
    {
      id: "solar-storage-tower",
      category: "Energy Storage",
      title: "Solar Storage Tower",
      description: "Solar tower with advanced energy storage for long-term deployment.",
      baseCost: 18500,
      supportsBattery: true,
      batterySystem: "High-density storage module for long runtime and peak deliverability",
    },
    {
      id: "hybrid-storage-system",
      category: "Energy Storage",
      title: "Hybrid Storage System",
      description: "Hybrid solution combining solar, battery and generator backup.",
      baseCost: 21000,
      supportsBattery: true,
      engineSystem: "Hybrid engine system with integrated backup generator",
      generatorSystem: "Hybrid generator system for charging and emergency power",
      batterySystem: "Hybrid battery storage designed for high-cycle use",
    },
  ],
};

export const defaultProductByCategory: Record<ProductCategory, ProductDefinition> = {
  Solar: productCatalog.Solar[0],
  Diesel: productCatalog.Diesel[0],
  Surveillance: productCatalog.Surveillance[0],
  "Energy Storage": productCatalog["Energy Storage"][0],
};

export function getProductsByCategory(category: ProductCategory) {
  return productCatalog[category] ?? [];
}

export function getProductById(productId: ProductId) {
  return Object.values(productCatalog)
    .flat()
    .find((product) => product.id === productId);
}
