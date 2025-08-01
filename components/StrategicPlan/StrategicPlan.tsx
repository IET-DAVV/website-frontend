"use client";
import React from "react";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "600", "200", "700"],
});

const StrategicPlan: React.FC = () => {
  return (
    <div className={`${manrope.className} px-2 py-6 max-w-7xl mx-auto space-y-10 text-left`}>
      {/* Title */}

      {/* Description with inline link */}
      <p className="text-lg text-center text-gray-800">
        To view the strategic plan of IET DAVV{" "}
        <a
          href="/about/strategic-plans.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#06779B] font-semibold underline hover:text-[#055f7e] transition-colors"
        >
          click here
        </a>.
      </p>
    </div>
  );
};

export default StrategicPlan;
