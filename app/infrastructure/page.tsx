import FacilityShowcase from "@/components/infrastructure/FacilityShowcase";
import HeroInfra from "@/components/infrastructure/HeroForInfra";
import HostelsPage from "@/components/infrastructure/HostelInfra";
import IncubationCentre from "@/components/infrastructure/IncubationCenter";
import LibraryPage from "@/components/infrastructure/Library";

const page = () => {
  return (
    <div>
      <HeroInfra />
      <HostelsPage />
      <LibraryPage />
      <IncubationCentre />
      <FacilityShowcase />
    </div>
  );
};

export default page;
