"use client";
import React from "react";
import { antiRaggingGuidelines } from "@/constants/antiragging/data";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const Guidelines = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="space-y-12 px-4 sm:px-10 py-12"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-2xl mx-auto text-3xl sm:text-4xl font-bold text-center text-[#06779B]"
      >
        {antiRaggingGuidelines.title}
      </motion.h2>

      {/* Guidelines Content */}
      <div className="max-w-4xl mx-auto space-y-4 text-justify leading-relaxed text-gray-800">
        {antiRaggingGuidelines.content.map((para, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base"
          >
            {para}
          </motion.p>
        ))}

        {/* SubContent */}
        <div className="mt-4">
          <span className="text-[#1D1D1D] font-semibold">
            {antiRaggingGuidelines.subContent1.heading}{" "}
          </span>
          <span>{antiRaggingGuidelines.subContent1.content}</span>
        </div>

        {/* Punishments */}
        <h3 className="text-lg font-semibold mt-8 text-[#2F2F2F]">
          Punishment in the event of ragging:
        </h3>
        <p>{antiRaggingGuidelines.punishments.content}</p>
        <ul className="list-disc pl-6 space-y-2">
          {antiRaggingGuidelines.punishments.subContent.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
        <p className="mt-2">{antiRaggingGuidelines.punishments.ending}</p>
      </div>

      {/* Downloads Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-16 mt-12"
      >
        <div className="bg-white/70 backdrop-blur-sm border rounded-xl shadow-lg max-w-2xl mx-auto overflow-hidden divide-y divide-gray-300">
          {antiRaggingGuidelines.links.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-between items-center px-6 py-5 hover:bg-gray-50 transition"
            >
              <span className="text-base font-medium text-[#06779B]">
                {item.label}
              </span>
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#0077C2] to-[#00AEEF] hover:from-[#005fa3] hover:to-[#008ecc] transition text-white px-6 py-2 rounded-full inline-flex items-center gap-2 text-sm font-semibold shadow-md"
              >
                <Download size={16} /> Download
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Guidelines;
