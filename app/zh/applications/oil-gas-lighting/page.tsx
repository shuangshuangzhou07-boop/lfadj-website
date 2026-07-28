import OilGasLightingPage, {
  generateMetadata as generateOilGasLightingMetadata,
} from "../../../[lang]/applications/oil-gas-lighting/page";

export function generateMetadata() {
  return generateOilGasLightingMetadata({ params: { lang: "zh" } });
}

export default function Page() {
  return <OilGasLightingPage params={{ lang: "zh" }} />;
}
