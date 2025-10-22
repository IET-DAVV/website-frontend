// dont change the export variable and read all the comments
"use client";
import React from "react";
import Title from "../common/academics/Title"; // Use this import for titel component
// import {} from "../constants/Tender/data.ts"

// This component creates the main title, styled similarly to your example.


// The main component for the page, now named RIPage
const TendersPage: React.FC = () => {
  return (
    <>
      <Title title="TENDERS PIRCUREA IEXTS" className="text-7xl leading-tight font-newyork" />
    </>
  );
};

export default TendersPage;
