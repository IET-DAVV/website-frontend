"use client";

import React, { useState } from "react";

const navItems = [
  "B.E. (FULL TIME)",
  "B.E. (PART-TIME)",
  "M.E.",
  "MSc.",
  "PhD",
];

type TnavbarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const Tnavbar: React.FC<TnavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full flex flex-col items-center py-12">
      {/* TIME – TABLE heading */}
      <h1 className="text-5xl font-serif tracking-widest text-[#006f8b] py-12">
        TIME – TABLE
      </h1>

      {/* Navigation tabs */}
      <div className="flex border-b border-gray-300 gap-16">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`pb-2 text-base font-semibold transition-all ${
              activeTab === item
                ? "text-[#006f8b] border-b-2 border-[#006f8b]"
                : "text-black hover:text-[#006f8b]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tnavbar;
