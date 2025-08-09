import FacilityShowcase from "@/components/infrastructure/FacilityShowcase";
import HeroInfra from "@/components/infrastructure/HeroForInfra";
import HostelsPage from "@/components/infrastructure/HostelInfra";
import IncubationCentre from "@/components/infrastructure/IncubationCenter";
import LibraryPage from "@/components/infrastructure/library";

const page = () => {
  return (
    <div className="flex flex-col gap-8 px-4 md:px-8 lg:px-16">
      <HeroInfra />
      <HostelsPage />
      <LibraryPage />
      <IncubationCentre />
      <FacilityShowcase />
    </div>
  );
};

export default page;
