import React, { Suspense } from 'react';
import Page from "@/components/facultyPage/facultyData";

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Page />
      </Suspense>
    </div>
  );
}

export default page;
