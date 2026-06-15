import type { Metadata } from "next";
import type { ProductData } from "../product-engine/product.types";

export function buildProductMeta(product: ProductData): Metadata {
  return {
    title: `${product.name} | Mobile Light Tower Manufacturer | OEM Supplier`,
    description: product.seo.description,
    alternates: {
      canonical: `https://lfadj.com/products/${product.slug}`,
    },
    keywords: product.seo.keywords,
    openGraph: {
      title: `${product.name} | Mobile Light Tower Manufacturer | OEM Supplier`,
      description: product.seo.description,
      url: `https://lfadj.com/products/${product.slug}`,
      type: "website",
    },
  };
}
