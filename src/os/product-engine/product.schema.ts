import type { ProductData } from "./product.types";

const requiredStringFields: Array<keyof Pick<ProductData, "slug" | "name" | "category">> = [
  "slug",
  "name",
  "category",
];

export function validateProductData(product: ProductData): ProductData {
  for (const field of requiredStringFields) {
    if (!product[field]) {
      throw new Error(`Product data missing required field: ${field}`);
    }
  }

  if (!product.hero?.title || !product.hero?.subtitle) {
    throw new Error(`Product ${product.slug} must include hero content.`);
  }

  if (!product.specs?.engine || !product.specs?.power || !product.specs?.mast) {
    throw new Error(`Product ${product.slug} must include core specifications.`);
  }

  if (!Array.isArray(product.features) || product.features.length === 0) {
    throw new Error(`Product ${product.slug} must include features.`);
  }

  if (!Array.isArray(product.applications) || product.applications.length === 0) {
    throw new Error(`Product ${product.slug} must include applications.`);
  }

  if (!product.trust?.manufacturer || !product.cta?.title || !product.seo?.description) {
    throw new Error(`Product ${product.slug} must include trust, CTA and SEO content.`);
  }

  return product;
}
