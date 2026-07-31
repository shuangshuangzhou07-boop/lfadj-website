import LightTowerTotalCostOfOwnershipPage, {
  generateMetadata as generateTcoMetadata,
} from "../../../[lang]/resources/light-tower-total-cost-of-ownership/page";

export function generateMetadata() {
  return generateTcoMetadata({ params: { lang: "en" } });
}

export default function Page() {
  return <LightTowerTotalCostOfOwnershipPage params={{ lang: "en" }} />;
}
