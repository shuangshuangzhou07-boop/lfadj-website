import { createClonePlan } from "./cloner.engine";

export function cloneProductModule(sourceProduct: string, targetProduct: string) {
  return createClonePlan(`/products/${sourceProduct}`, `/products/${targetProduct}`);
}
