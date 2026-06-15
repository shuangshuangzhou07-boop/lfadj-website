import lf6130 from "./products/LF6130.json";
import { validateProductData } from "./product.schema";
import type { ProductData } from "./product.types";

export const productRegistry: ProductData[] = [
  validateProductData(lf6130 as ProductData),
];

export function getProductSlugs(): string[] {
  return productRegistry.map((product) => product.slug);
}

export function getProductBySlug(slug: string): ProductData | undefined {
  return productRegistry.find((product) => product.slug === slug);
}
