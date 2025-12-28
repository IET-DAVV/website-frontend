"use client";
import { motion } from "framer-motion";

export default function HostelInfo() {
  const facilities = [
    { title: "Wi-Fi & LAN", desc: "High-speed connectivity in each room (block-specific)." },
    { title: "Mess Facility", desc: "Nutritious vegetarian meals with weekly specials." },
    { title: "Recreation Hall", desc: "Includes Table Tennis, Chess & Carrom (access with permission)." },
    { title: "Laundry", desc: "Two washing machines in A Block." },
    { title: "Security", desc: "24x7 guards, CCTV, and fire extinguishers on each floor." },
  ];

  return (
    <section className="bg-gray-50 py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-20 text-gray-900 uppercase">Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-gray-200">
          {facilities.map((f, i) => (
            <div key={i} className="p-12 border-r border-b border-gray-200 bg-white">
              <h4 className="text-2xl font-bold mb-4 text-[#3B7A9E]">{f.title}</h4>
              <p className="text-gray-600 text-lg">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Rules & Fee Structure */}
        <div className="grid lg:grid-cols-2 gap-16 mt-32">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 uppercase tracking-tight">Hostel Rules</h2>
            <div className="space-y-4 text-lg text-gray-700 bg-white p-8 border-l-4 border-[#3B7A9E] shadow-sm">
              <p>• Attendance before 8:30 PM is MANDATORY for all residents.</p>
              <p>• Leave forms must be signed by the Warden.</p>
              <p>• Smoking, alcohol, and ragging are strictly prohibited.</p>
              <p>• Visitors are permitted only during specified hours.</p>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 uppercase tracking-tight">Fee Structure</h2>
            <div className="bg-[#3B7A9E] text-white p-12 shadow-xl">
              <div className="flex justify-between items-center border-b border-white/20 pb-6 mb-6">
                <span className="text-xl">Annual Hostel Fee</span>
                <span className="text-3xl font-bold">₹25,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl">Mess Charges</span>
                <span className="text-3xl font-bold">₹2,500 <small className="text-sm">/ mo</small></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}