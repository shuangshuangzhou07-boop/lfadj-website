import ManufacturingPage, {
  generateMetadata as generateManufacturingMetadata,
} from "../../[lang]/manufacturing/page";

export function generateMetadata() {
  return generateManufacturingMetadata({ params: { lang: "en" } });
}

export default function Page() {
  return <ManufacturingPage params={{ lang: "en" }} />;
}
