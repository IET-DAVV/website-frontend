import FacilityShowcase from "./FacilityShowcase";
import HeroInfra from "./HeroForInfra";
import HostelsPage from "./HostelInfra";
import IncubationCentre from "./IncubationCenter";
import LibraryPage from "./Library";

export default function Infra() {
  return <div>
    <HeroInfra/>
    <HostelsPage/>
    <LibraryPage/>
    <IncubationCentre/>
    <FacilityShowcase/>
  </div>;
}
