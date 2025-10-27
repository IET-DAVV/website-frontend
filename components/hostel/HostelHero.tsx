// components/hostel/HostelHero.tsx
"use client";
import { motion } from "framer-motion";
import React from "react";

export default function HostelHero() {
  return (
    <section
      className="w-full text-white bg-[#3B7A9E] relative overflow-hidden" 
      // ☝️ The 'w-full' class here sets the width to 100% of the viewport (or its parent).
    >
      {/* Gradient overlay for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3B7A9E] to-[#2D5F7A] opacity-90" />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 py-24 text-center">
        <motion.h1
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-light tracking-wide font-serif drop-shadow-sm"
        >
          Girl&apos;s Hostel
        </motion.h1>

        <motion.p
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-base md:text-lg text-slate-100/90"
        >
          Safe. Supportive. Self-sufficient.
        </motion.p>

        {/* Accent underline animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mx-auto mt-6 w-32 h-1 bg-white/70 origin-left rounded-full"
        />
      </div>
    </section>
  );
}