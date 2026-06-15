import type { OSProduct } from "../products/product.types";
import type { OSSeoMeta } from "./seo.types";

export function generateProductSeo(product: OSProduct): OSSeoMeta {
  return {
    title: `${product.name} | LFADJ`,
    description: product.description,
    canonical: `https://lfadj.com/products/${product.slug}`,
    keywords: product.keywords,
  };
}
