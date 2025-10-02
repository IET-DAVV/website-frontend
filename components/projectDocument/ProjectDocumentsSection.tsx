// src/components/projectDocument/ProjectDocumentsSection.jsx (or .tsx)

"use client";
import React from "react";
// ⚠️ Ensure this path is correct for your project
import { projectDocuments } from "@/constants/projectDocuments";
import { Download } from "lucide-react";
import "@/styles/fonts.css";
import Title from "../common/academics/Title";
import { motion } from "framer-motion";

const ProjectDocumentsSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="space-y-8 px-4 sm:px-10 py-10"
    >
      {/* Page Headings */}
      <Title
        title="Project Documents"
        className="text-6xl leading-tight font-newyork mb-0 text-center text-[#0077C2]"
      />
      <Title
        title="(FOR BE IV YEAR STUDENTS)"
        className="text-4xl font-newyork leading-tight mb-10 text-center text-gray-600"
      />

      {/* Animated Sections */}
      {projectDocuments.map((section, index) => (
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
          className="space-y-4 mb-10"
        >
          {/* Section Title */}
          <h2
            className="text-xl font-bold text-center text-[#2F2F2F] mb-4"
            dangerouslySetInnerHTML={{ __html: section.title }}
          />

          {/* Downloads Container: Now holds the border and dividers */}
          <div className="border border-gray-800 rounded-sm divide-y divide-gray-500 max-w-2xl w-full mx-auto">
            {section.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.05,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                // Item styling: No individual border, just padding and background
                className="flex justify-between items-center px-4 py-3 bg-white" 
              >
                {/* File Label */}
                <span className="text-base font-medium text-gray-700">
                  {item.label}
                </span>

                {/* Download Button */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0077C2] hover:bg-[#005fa3] transition text-white px-4 py-1.5 rounded inline-flex items-center gap-1 text-sm"
                >
                  Download <Download size={15} />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectDocumentsSection;