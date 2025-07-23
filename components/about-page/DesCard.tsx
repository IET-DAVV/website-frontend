"use client";
import React from "react";
import { motion } from "framer-motion";

interface Cardprop {
  id: string;
  description: string;
}

const DesCard = ({ id, description }: Cardprop) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start faded + pushed down
      whileInView={{ opacity: 1, y: 0 }} // Animate in when visible
      viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% in view
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)" }} // Hover effect
      className="bg-white rounded-2xl shadow-md px-6 py-5 border border-gray-100 h-56 flex flex-col justify-between transition-all duration-300"
    >
      <h1 className="text-dark-blue text-xl sm:text-2xl font-semibold font-mono">
        {id}
      </h1>
      <p className="text-light-gray text-sm sm:text-base font-sans leading-relaxed border-t pt-3 overflow-hidden text-ellipsis">
        {description}
      </p>
    </motion.div>
  );
};

export default DesCard;
