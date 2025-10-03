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
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="space-y-12 px-4 sm:px-10 py-10"
    >
      {/* Page Headings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-3"
      >
        <Title
          title="PROCESS"
          className="text-6xl sm:text-7xl leading-tight font-newyork bg-gradient-to-r from-[#0077C2] to-[#00C6FF] bg-clip-text text-transparent"
        />
        <Title
          title="(ADMISSION 2025-26)"
          className="text-2xl sm:text-4xl font-newyork text-gray-800"
        />
      </motion.div>

      {/* Animated Sections */}
      <div className="space-y-16">
        {admissionDownloads.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.25,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Section Title */}
            <h2
              className="text-2xl font-semibold text-center text-[#2F2F2F] tracking-wide"
              dangerouslySetInnerHTML={{ __html: section.title }}
            />

            {/* Downloads Box */}
            <div className="bg-white/60 backdrop-blur-sm border rounded-xl shadow-lg max-w-2xl w-full mx-auto overflow-hidden">
              {section.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.08,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center px-5 py-4 hover:bg-gray-50 transition"
                >
                  <span className="text-sm sm:text-base font-medium text-gray-800">
                    {item.label}
                  </span>
                  <motion.a
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#0077C2] to-[#00AEEF] hover:from-[#005fa3] hover:to-[#008ecc] transition text-white px-5 py-2 rounded-full inline-flex items-center gap-2 text-sm font-semibold shadow-md"
                  >
                    <Download size={16} /> Download
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DownloadSection;
