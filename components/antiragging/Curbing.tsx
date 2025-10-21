"use client";
import React from "react";
import { antiRaggingCurbing } from "@/constants/antiragging/data";
import { motion } from "framer-motion";

const Curbing = () => {
  return (
    <div className="px-6 sm:px-12 lg:px-36 pb-32">
      {/* Title 1 */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto my-16 text-2xl sm:text-3xl font-bold text-center text-[#06779B]"
      >
        {antiRaggingCurbing.title}
      </motion.h2>

      {/* Section 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white/70 backdrop-blur-sm border rounded-xl shadow-lg max-w-5xl w-full mx-auto overflow-hidden"
      >
        <div className="flex justify-between items-center px-6 py-5">
          <span className="text-lg font-medium">
            {antiRaggingCurbing.sectino1.label}{" "}
            <span className="text-[#06779B] font-semibold">
              {antiRaggingCurbing.sectino1.extralabel}
            </span>
          </span>
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href={antiRaggingCurbing.sectino1.file}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#0077C2] to-[#00AEEF] hover:from-[#005fa3] hover:to-[#008ecc] transition text-white px-8 py-2 rounded-full inline-flex items-center gap-2 text-sm font-semibold shadow-md"
          >
            Download
          </motion.a>
        </div>
      </motion.div>

      {/* Title 2 */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto my-16 text-xl sm:text-2xl font-semibold text-center text-[#06779B]"
      >
        {antiRaggingCurbing.title2}
      </motion.h2>

      {/* Section 2 */}
      <div className="bg-white/70 backdrop-blur-sm border rounded-xl shadow-lg max-w-5xl w-full mx-auto overflow-hidden divide-y">
        {antiRaggingCurbing.section2.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: idx * 0.05,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="px-6 py-5 flex flex-col sm:flex-row justify-between gap-4"
          >
            <div className="text-lg font-semibold text-[#06779B] w-full sm:w-1/2">
              {item.label}
            </div>
            <div className="text-lg font-medium w-full sm:w-1/2">
              {item.subLabel}{" "}
              {item.Highlight && (
                <span className="text-[#F51C1C] font-semibold">
                  {item.Highlight}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Curbing;
