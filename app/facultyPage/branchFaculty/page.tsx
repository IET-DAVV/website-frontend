import React, { Suspense } from "react";
import FacultyData from "@/components/facultyPage/page";

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <FacultyData />
      </Suspense>
    </div>
  );
};

export default page;
