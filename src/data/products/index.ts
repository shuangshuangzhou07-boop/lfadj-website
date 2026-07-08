import lf6130 from "./lf6130";

export { lf6130 };

export const products = [lf6130];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug) ?? null;
}
