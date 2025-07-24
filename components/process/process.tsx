"use client";
import React from "react";
import { admissionDownloads } from "@/constants/process";
import { Download } from "lucide-react";
import "@/styles/fonts.css";
import Title from "../common/academics/Title";
import { motion } from "framer-motion";

const DownloadSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }} // 👈 slower & smoother
      className="space-y-8 px-4 sm:px-10"
    >
      {/* Page Headings */}
      <Title
        title="PROCESS"
        className="text-7xl leading-tight font-newyork mb-0"
      />
      <Title
        title="(ADMISSION 2025-26)"
        className="text-4xl font-newyork leading-tight mb-10"
      />

      {/* Animated Sections */}
      {admissionDownloads.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7, // 👈 slower section entrance
            delay: index * 0.25, // 👈 staggered even more
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="space-y-4 mb-16"
        >
          {/* Section Title */}
          <h2
            className="text-xl font-bold text-center text-[#2F2F2F] mb-0"
            dangerouslySetInnerHTML={{ __html: section.title }}
          />

          {/* Downloads Box */}
          <div className="border rounded-md divide-y divide-gray-800 max-w-2xl w-full mx-auto shadow-sm border-gray-800">
            {section.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.55, // 👈 slower item animation
                  delay: idx * 0.05, // 👈 slower stagger per item
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="flex justify-between items-center px-4 py-3"
              >
                <span className="text-sm font-medium">{item.label}</span>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0077C2] hover:bg-[#005fa3] transition text-white px-4 py-1.5 rounded inline-flex items-center gap-1 text-sm"
                >
                  Click Here <Download size={15} />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DownloadSection;
