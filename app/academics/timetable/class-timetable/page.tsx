"use client";

import BranchSelector from "@/components/class-timetable/BranchSelector";
import MEBranchSelector from "@/components/class-timetable/MEBranchSelector";
import PHDBranchSelector from "@/components/class-timetable/PHDBranchSelector";
import ShowButton from "@/components/class-timetable/ShowButton";
import Tnavbar from "@/components/class-timetable/Tnavbar";
import YearSelector from "@/components/class-timetable/YearSelector";

import React, { useState } from "react";

function Page() {
  //smart codes.
  const handleShowClick = () => {
    console.log("Show button clicked!");
    // You can trigger filtering, toggling, API calls, etc.
  };

  const [activeTab, setActiveTab] = useState("B.E. (FULL TIME)");

  const renderBranchComponent = () => {
    switch (activeTab) {
      case "B.E. (FULL TIME)":
      case "B.E. (PART-TIME)":
        return <BranchSelector />;
      case "M.E.":
        return <MEBranchSelector />;
      case "PhD":
        return <PHDBranchSelector />;
      default:
        return null;
    }
  };

  return (
    <>
      <Tnavbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="px-8 mt-6">
        {/* 🔹 Heading with bold serif font and spacing */}
        <h2 className="text-2xl font-serif  text-black mb-2">BRANCH</h2>
        <hr className="border-t border-gray-300 mb-6" />

        {renderBranchComponent()}
      </div>
      <div className="px-8 mt-6">
        <h2 className="text-2xl font-serif  text-black mb-2">YEAR</h2>

        <hr className="border-t border-gray-300 mb-6" />
        <YearSelector />
      </div>
      <div className="px-8 mt-6 flex justify-center items-center">
        <ShowButton onClick={handleShowClick} />
      </div>
    </>
  );
}

export default Page;
