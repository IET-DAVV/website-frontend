import React from "react";
import SectionTitle from "../common/SectionTitle";

export default function AdmissionFee() {
  return (
    <section className="rounded-xl p-6 md:p-10 bg-white">
      <SectionTitle title="Hostel Admission & Fee Structure" />

      <div className="mt-4 text-gray-700 space-y-6">
        {/* Points */}
        <ul className="list-disc pl-6 text-gray-600 leading-relaxed">
          <li>Submit hostel application and undertaking form</li>
          <li>Provide mess undertaking and anti-ragging affidavit</li>
          <li>Room allocation based on vacancy</li>
        </ul>

{/* Fee Table */}
<div className="overflow-hidden rounded-xl border-2 border-[#3B7A9E]/60">
  <div className="grid grid-cols-2 divide-x-2 divide-[#3B7A9E]/50 text-sm md:text-base">
    {/* Updated bg color to match, and text-white for contrast */}
    <div className="bg-[#3B7A9E] text-white font-semibold p-4">
      Annual Hostel Fee
    </div>
    <div className="bg-white text-right font-medium p-4">₹25,000</div>

    {/* Updated bg color to match, and text-white for contrast */}
    <div className="bg-[#3B7A9E] text-white font-semibold p-4 border-t-2 border-[#3B7A9E]/50">
      Mess Charges
    </div>
    <div className="bg-white text-right font-medium p-4 border-t-2 border-[#3B7A9E]/50">
      ₹2,500 per month
    </div>
  </div>
</div>
      </div>
    </section>
  );
}
