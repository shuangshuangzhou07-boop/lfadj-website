export type BusinessModule = {
  name: string;
  purpose: string;
  ownerCenter: string;
};

export function createBusinessModule(name: string, purpose: string, ownerCenter = "Centers"): BusinessModule {
  return {
    name,
    purpose,
    ownerCenter,
  };
}
