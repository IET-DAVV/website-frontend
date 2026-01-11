"use client";
import { motion } from "framer-motion";

const blocks = [
  { name: "Block A", details: "Third-year students | Double occupancy rooms" },
  { name: "Block B", details: "First-year students & Warden House | Triple & four-sharing rooms" },
  { name: "Block C", details: "Final-year, M.Sc. & Ph.D | Single occupancy rooms" },
  { name: "Block D", details: "Second & Final-year students | Double occupancy rooms" },
];

export default function HostelHero() {
  return (
    <section className="bg-white">
      {/* Full-Screen Hero Section */}
      <div className="bg-[#3B7A9E] min-h-screen flex flex-col items-center justify-center text-white px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-newyork mb-8 uppercase tracking-tighter"
        >
          Girl&apos;s Hostel
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-3xl font-light tracking-[0.3em] uppercase opacity-90"
        >
          Safe • Supportive • Self-sufficient
        </motion.p>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <h2 className="text-5xl font-bold text-gray-900 sticky top-10">
            Overview
          </h2>
          <div className="space-y-6 text-xl leading-relaxed text-gray-700">
            <p>
              The Girls Hostel at the Institute of Engineering and Technology (IET) provides a secure, comfortable, and inclusive living environment for female students.
            </p>
            <p>
              Located within the main campus, it comprises four blocks — **A, B, C, and D** — along with a Warden House and Kitchen House. Each block is designed to support different academic years, ensuring a balanced community.
            </p>
          </div>
        </div>

        {/* Accommodation Details Grid */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">Accommodation Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {blocks.map((block, i) => (
              <motion.div 
                key={i}
                whileHover={{ backgroundColor: "#3B7A9E", color: "#ffffff" }}
                className="border-2 border-[#3B7A9E] p-10 rounded-sm transition-colors duration-300 group"
              >
                <h3 className="text-2xl font-bold mb-6 text-[#3B7A9E] group-hover:text-white uppercase">
                  {block.name}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 leading-relaxed">
                  {block.details}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-sm italic text-gray-500 text-center">
            * All rooms include a bed, study table, chair, and almirah. Mattress not provided.
          </p>
        </div>
      </div>
    </section>
  );
}