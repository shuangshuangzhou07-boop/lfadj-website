import lf6130 from "./lf6130";
import lf6180 from "./lf6180";
import lf6182 from "./lf6182";
import lf6186 from "./lf6186";
import lf6189 from "./lf6189";
import solarLightTower from "./solar-light-tower";
import portableLightTower from "./portable-light-tower";
import hybridLightTower from "./hybrid-light-tower";
import surveillanceLightTower from "./surveillance-light-tower";

export const productRegistry = {
  lf6130,
  lf6180,
  lf6182,
  lf6186,
  lf6189,
  "solar-light-tower": solarLightTower,
  "portable-light-tower": portableLightTower,
  "hybrid-light-tower": hybridLightTower,
  "surveillance-light-tower": surveillanceLightTower,
};

export type ProductSlug = keyof typeof productRegistry;

export const allProducts = Object.values(productRegistry);

export const allProductSummaries = allProducts.map((product) => ({
  slug: product.slug,
  name: product.name,
  category: product.category,
}));

export function getRegisteredProduct(slug: string) {
  return productRegistry[slug as ProductSlug] ?? null;
}
