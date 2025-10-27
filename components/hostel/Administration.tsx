"use client";
import React from "react";
import SectionTitle from "../common/SectionTitle";
import Image from "next/image";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const imageVariant = {
  hover: { scale: 1.08, rotate: 2 },
  tap: { scale: 0.98 },
};

export default function Administration() {
  return (
    <section className="rounded-xl p-6 md:p-10 bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SectionTitle title="Hostel Administration" />
      </motion.div>

      <motion.div
        className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[1, 2].map((card, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            custom={i}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            className="flex flex-col md:flex-row items-center gap-4 border-2 rounded-xl p-5 bg-white transition-all duration-300"
            style={{ borderColor: "#3B7A9E" }}
          >
            <motion.div
              className="w-full md:w-1/3 rounded-lg overflow-hidden"
              variants={imageVariant}
              whileHover="hover"
              whileTap="tap"
            >
              <Image
                src={i === 0 ? "/hostel/warden.jpg" : "/hostel/caretaker.jpg"}
                alt={i === 0 ? "Jyoti Hawelia" : "Day Caretaker"}
                width={250}
                height={250}
                className="object-cover w-full h-full"
              />
            </motion.div>

            <motion.div
              className="flex-1 space-y-1 text-slate-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 + 0.5, duration: 0.6 }}
            >
              <p>
                <strong>Hostel Warden:</strong> {i === 0 ? "Jyoti Hawelia" : "[Name]"}
              </p>
              <p>
                <strong>Day Caretaker:</strong> Shobha Aunty
              </p>
              <p>
                <strong>Support Staff:</strong> 7+ female staff & security guards on shifts
              </p>
              <p>
                <strong>Contact:</strong> [Email / Extension]
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
