import { getProductBySlug, productRegistry } from "./product.registry";

export function loadProducts() {
  return productRegistry;
}

export function getProduct(slug: string) {
  return getProductBySlug(slug);
}

export function loadProduct(slug: string) {
  return getProduct(slug);
}
