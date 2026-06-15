import type { ProductData } from "../product-engine/product.types";

export function generateProductKeywords(product: ProductData): string[] {
  return Array.from(new Set([product.category, product.name, ...product.seo.keywords]));
}
