// components/hostel/Facilities.tsx
'use client';
import React from "react";
import { motion, Variants } from "framer-motion";
import SectionTitle from "../common/SectionTitle";

// Animation variants (typed properly)
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const Feature: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <motion.div
    variants={item}
    whileHover={{
      y: -6,
      scale: 1.02,
      boxShadow: "0 10px 25px rgba(59, 122, 158, 0.15)",
    }}
    transition={{ type: "spring", stiffness: 220, damping: 18 }}
    className="rounded-2xl border-2 border-[#34759A] p-8 bg-white transition duration-300 cursor-default"
  >
    <h5 className="font-extrabold text-lg text-[#34759A] tracking-tight">
      {title}
    </h5>
    {subtitle && (
      <p className="text-sm text-gray-700 mt-2 leading-relaxed">{subtitle}</p>
    )}
  </motion.div>
);

export default function Facilities() {
  return (
    <section className="w-full bg-white text-left px-8 md:px-16 py-12">
      <SectionTitle title="Facilities" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <Feature
          title="Wi-Fi & LAN"
          subtitle="High-speed connectivity in each room (block-specific)."
        />
        <Feature
          title="Mess Facility"
          subtitle="Nutritious vegetarian meals with weekly specials."
        />
        <Feature
          title="Recreation Hall"
          subtitle="Includes Table Tennis, Chess & Carrom (access with permission)."
        />
        <Feature
          title="Medical Aid"
          subtitle="First-aid kits and warden-supervised hospital visits."
        />
        <Feature
          title="Laundry"
          subtitle="Two washing machines in A Block."
        />
        <Feature
          title="Security"
          subtitle="24×7 guards, CCTV, and fire extinguishers on each floor."
        />
      </motion.div>
    </section>
  );
}
