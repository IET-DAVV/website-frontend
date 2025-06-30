"use client";
import React, { useState, useEffect } from "react";
import ProgramCard from "./programcard";
import { programsData } from "@/constants/Programs/programsdata";

const TABS = [
  { key: "btech-full", label: "B.Tech (FULL TIME)" },
  { key: "btech-part", label: "B.Tech (PART-TIME)" },
  { key: "me-full", label: "M.E. (FULL TIME)" },
  { key: "me-part", label: "M.E. (PART TIME)" },
  { key: "phd", label: "PHD" },
  { key: "msc", label: "MSc." },
];

const ProgramsOffered: React.FC = () => {
  const [activeTab, setActiveTab] = useState("me-part");
  const data = programsData[activeTab];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex justify-center space-x-4 border-b mb-8">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-2 text-sm sm:text-base font-medium transition ${
              activeTab === tab.key
                ? "text-[#06779B] border-b-2 border-[#06779B]"
                : "text-gray-600 hover:text-[#06779B]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="uppercase text-sm text-gray-500">{data.subtitle}</p>
          <h2 className="text-4xl font-serif font-bold mb-4">{data.title}</h2>
          <p className="text-gray-600 mb-6">{data.description}</p>
          <div className="flex gap-8 text-sm">
            <div>
              <span className="block text-blue-600 font-bold text-lg">
                {data.duration}
              </span>
              Duration
            </div>
            <div>
              <span className="block text-blue-600 font-bold text-lg">
                {data.students}
              </span>
              Students enrolled
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {data.specializations.map((spec, idx) => (
            <ProgramCard key={idx} name={spec.name} active={false} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsOffered;
