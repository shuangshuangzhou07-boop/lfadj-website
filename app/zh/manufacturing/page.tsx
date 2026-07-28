import ManufacturingPage, {
  generateMetadata as generateManufacturingMetadata,
} from "../../[lang]/manufacturing/page";

export function generateMetadata() {
  return generateManufacturingMetadata({ params: { lang: "zh" } });
}

export default function Page() {
  return <ManufacturingPage params={{ lang: "zh" }} />;
}
