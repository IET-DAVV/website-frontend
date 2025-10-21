"use client";
import React, { useState } from "react";
import "./FreshersCorner.css";

const TabsSection = () => {
  const tabs = [
    "B.TECH (FULL TIME)",
    "B.TECH (PART TIME)",
    "M.TECH (FULL TIME)",
    "M.TECH (PART TIME)",
    "Ph.D",
    "MSc.",
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="tab-container">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-btn ${activeTab === tab ? "active-tab" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabsSection;
