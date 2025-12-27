"use client";
import React, { useState, useEffect } from "react";
import { rolllistData } from "@/constants/roll-list/data"; // Adjust the import path as necessary
import Title from "../common/academics/Title";
import YearSelector from "../common/academics/YearSelector"; // Assuming this component exists
import BranchSelector from "../common/academics/BranchSelector"; // CORRECTED: Using BranchSelector now
import { MdOutlineFileDownload } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const RollList = () => {
  // State management
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  // Derivations from data
  const years = Object.keys(rolllistData);
  const yearData = selectedYear ? rolllistData[selectedYear as keyof typeof rolllistData] : null;
  
  // Branches are the keys of the year object, but only if it doesn't have a direct PdfLink
  const branches = yearData && !("PdfLink" in yearData) ? Object.keys(yearData) : [];
  
  // Determine the correct PDF link to display
  let pdfLink: string | null = null;
  if (yearData) {
    if ("PdfLink" in yearData) {
      pdfLink = typeof yearData.PdfLink === "string" ? yearData.PdfLink : null; // Direct link for years like MTECH., M.Sc.
    } else if (selectedBranch && yearData[selectedBranch as keyof typeof yearData]) {
      pdfLink = (yearData[selectedBranch as keyof typeof yearData] as any).PdfLink; // Link for a selected branch
    }
  }

  // Set default year on initial load
  useEffect(() => {
    if (years.length > 0) {
      setSelectedYear(years[0]);
    }
  }, [years]);

  // When year changes, reset the selected branch
  useEffect(() => {
    setSelectedBranch(null);
    // If the new year has branches, select the first one by default
    const newYearData = rolllistData[selectedYear as keyof typeof rolllistData];
    const newBranches = newYearData && !("PdfLink" in newYearData) ? Object.keys(newYearData) : [];
    if (newBranches.length > 0) {
      setSelectedBranch(newBranches[0]);
    }
  }, [selectedYear]);

  return (
    <div className="text-black">
      <Title title="ROLL LIST" />

      {/* Reusable Year Selector */}
      <YearSelector
        years={years}
        selectedYear={selectedYear}
        onSelect={setSelectedYear}
      />

      {/* Conditionally render the reusable Branch Selector */}
      {branches.length > 0 && (
        <BranchSelector
          branches={branches}
          selectedBranch={selectedBranch || ""}
          onSelect={setSelectedBranch}
        />
      )}
      
      {/* PDF Viewer Section */}
      <AnimatePresence mode="wait">
        {pdfLink && (
          <motion.div
            key={pdfLink} // Animate when the link changes
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col gap-4 w-full md:w-3/4 lg:w-1/2 mx-auto mb-4 px-4"
          >
            <div className="flex justify-end items-center">
              <a
                href={pdfLink}
                className="bg-black rounded-full p-2 ml-auto hover:scale-110 focus:outline-none transition-transform duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdOutlineFileDownload className="text-white text-xl" />
              </a>
            </div>
            <iframe
              src={pdfLink}
              title={`PDF Viewer for ${selectedBranch || selectedYear}`}
              className="border-2 border-gray-300 h-[500px] w-full rounded-xl shadow-lg"
            ></iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RollList;