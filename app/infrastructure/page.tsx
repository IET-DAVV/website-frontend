import FacilityShowcase from "@/components/infrastructure/FacilityShowcase";
import HeroInfra from "@/components/infrastructure/HeroForInfra";
import HostelsPage from "@/components/infrastructure/HostelInfra";

import LibraryPage from "@/components/infrastructure/library";

const InfrastructurePage = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Full-width sections manage their own internal constraints */}
      <HeroInfra />
      
      {/* Grouped content sections */}
      <div className="flex flex-col">
        <HostelsPage />
        <LibraryPage />

        <FacilityShowcase />
      </div>
    </main>
  );
};

export default InfrastructurePage;