'use client';
import React, { Suspense } from 'react';
import Page from "@/components/facultyData/branchFaculty";

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Page />
      </Suspense>
    </div>
  );
};

export default page;
