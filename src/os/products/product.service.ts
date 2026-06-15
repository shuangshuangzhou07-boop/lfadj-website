import { loadOSProduct, loadOSProducts } from "./product.loader";

export const productService = {
  list: loadOSProducts,
  getBySlug: loadOSProduct,
};
