'use client';
import React, { Suspense } from 'react';
import Page from "@/components/facultyPage/brachFaculty";

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
