"use client"; // ensure this if you're directly using hooks in this file

import React, { Suspense } from "react";
import Page from "@/components/facultyPage/facultyData";

const FacultyPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Page />
      </Suspense>
    </div>
  );
};

export default FacultyPage;
