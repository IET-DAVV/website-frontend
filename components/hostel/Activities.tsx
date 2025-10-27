'use client';

import React from "react";
import SectionTitle from "../common/SectionTitle";
// 'Variants' type ko import karein
import { motion, type Variants } from "framer-motion";

// Animation variants ko explicitly 'Variants' type se define karein
const contentVariants: Variants = {
  hidden: { opacity: 0, y: 15 }, // Start mein hidden aur thoda neeche
  visible: {
    opacity: 1,
    y: 0, // Final state (visible)
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.2, // Title ke baad halka sa delay
    },
  },
};

export default function Activities() {
  return (
    // Added shadow-sm and overflow-hidden for animation
    <section className="rounded-xl p-6 md:p-10 bg-white shadow-sm overflow-hidden">
      <SectionTitle title="Hostel Life & Activities" />

      {/* Animated content wrapper */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={contentVariants} // Ab yeh 'red' nahi hoga
      >
        {/* Updated Intro Paragraph */}
        <p className="text-gray-600 mt-3 max-w-3xl">
          The Girls Hostel fosters a strong sense of belonging through regular
          cultural and social events such as:
        </p>

        {/* New Bulleted List */}
        <ul className="text-gray-600 mt-4 space-y-2 list-disc list-inside max-w-3xl">
          <li>Freshers Party & Farewell Celebrations</li>
          <li>
            Festival Events: Ganesh Chaturthi, Holi, Dahi Handi, Ram Navami
          </li>
          <li>Movie Nights, Birthdays & Recreational Gatherings</li>
          <li>Sports like cricket and indoor games</li>
        </ul>
      </motion.div>
    </section>
  );
}