// components/hostel/QuickFacts.tsx
import React from "react";
import SectionTitle from "../common/SectionTitle";

export default function QuickFacts() {
  const facts = [
    { label: "Total Blocks", value: "A, B, C, D + Warden House + Kitchen House" },
    { label: "Occupancy", value: "Single, Double, Triple, Four-sharing" },
    { label: "Security", value: "24×7 guards, CCTV" },
    { label: "Mess", value: "On-campus, vegetarian" },
    { label: "Attendance", value: "8:30 PM mandatory" },
    {
      label: "Special Features",
      value: "Wi-Fi, Geysers, Fire Safety, Pad Dispensers",
    },
  ];

  return (
    <section className="rounded-xl p-6 md:p-10 bg-white">
      <SectionTitle title="Quick Facts" />

      <div className="mt-6 overflow-hidden rounded-xl border-2 border-[#3B7A9E]/60">
        <div className="grid grid-cols-2 divide-x-2 divide-[#3B7A9E]/50 text-sm md:text-base">
          {facts.map((fact, index) => (
            <React.Fragment key={index}>
              <div
                className={`bg-[#3B7A9E] text-white font-semibold p-4 ${
                  index !== 0 ? "border-t-2 border-[#3B7A9E]/50" : ""
                }`}
              >
                {fact.label}
              </div>
              <div
                className={`bg-white text-right font-medium p-4 ${
                  index !== 0 ? "border-t-2 border-[#5B7A9E]/50" : ""
                }`}
              >
                {fact.value}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
