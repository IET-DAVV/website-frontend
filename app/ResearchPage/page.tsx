import { Suspense } from "react";
import EquipmentPage from "@/components/Research_&_Innovation/OngoingResearch";

const ResearchPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EquipmentPage />
    </Suspense>
  );
};

export default ResearchPage;