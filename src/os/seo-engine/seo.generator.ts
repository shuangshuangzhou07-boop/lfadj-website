import type { ProductData } from "../product-engine/product.types";
import { buildProductMeta } from "./meta.builder";

export function generateSEO(product: ProductData) {
  return {
    title: `${product.name} | Mobile Light Tower Manufacturer | OEM Supplier`,
    description: product.seo.description,
    keywords: product.seo.keywords.join(", "),
    alternates: {
      canonical: `https://lfadj.com/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | Mobile Light Tower Manufacturer | OEM Supplier`,
      description: product.seo.description,
      url: `https://lfadj.com/products/${product.slug}`,
      type: "website",
    },
  };
}

export function generateSeoForProduct(product: ProductData) {
  return buildProductMeta(product);
}
