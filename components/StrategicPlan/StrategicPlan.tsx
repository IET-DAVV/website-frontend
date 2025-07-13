"use client";
import React from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const StrategicPlan: React.FC = () => {
  return (
    <div className={`${manrope.className} px-10 py-12 max-w-7xl mx-auto space-y-10 text-center`}>
      {/* Title */}
      <h1 className="text-4xl font-newyork text-black mb-6">
        IET STRATEGIC PLAN
        <br />
        (2024–29)
      </h1>

      {/* Button to open/download PDF */}
      <a
        href="/about/strategic plans.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#06779B] text-white px-6 py-3 rounded-md text-lg font-medium shadow hover:bg-[#055f7e] transition-colors"
      >
        View Full Strategic Plan PDF
      </a>
    </div>
  );
};

export default StrategicPlan;
