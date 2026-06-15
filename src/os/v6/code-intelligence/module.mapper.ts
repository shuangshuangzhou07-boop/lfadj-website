export type ModuleMapEntry = {
  module: string;
  responsibility: string;
};

export function mapModule(module: string, responsibility: string): ModuleMapEntry {
  return {
    module,
    responsibility,
  };
}
