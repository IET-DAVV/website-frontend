"use client";
import React, { useRef } from "react";
import { history } from "@/constants/about-page/about";
import "@/styles/fonts.css";
import { motion, useScroll, useTransform } from "framer-motion";

// ✨ Type definition for timeline events
interface HistoryEvent {
  id: number;
  title: string;
}

// 🧩 Timeline Item Component
const TimelineItem = ({ item, index }: { item: HistoryEvent; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      id={`timeline-item-${index}`}
      className={`relative w-full md:w-9/12 
        ${isEven ? "md:self-start pr-10 md:pr-80" : "md:self-end pl-10 md:pl-80"}`}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className={`bg-white/10 backdrop-blur-sm text-white rounded-2xl p-4 md:p-6 shadow-md border border-white/20 
          ${isEven ? "origin-left" : "origin-right"} w-full`}
        whileHover={{ scale: 1.03, borderColor: "rgba(255, 255, 255, 0.5)" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 className="text-base md:text-lg font-light leading-snug">{item.title}</h3>
      </motion.div>
    </motion.div>
  );
};

// 🏛️ Main History Component
const History = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 🎯 Scroll progress hook for animated center line
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
  });
  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="w-full bg-[#3B799E] px-6 py-16 md:px-20 md:py-24">
      {/* 🔠 Section Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="font-newyork text-white text-3xl md:text-5xl font-extralight tracking-wide relative inline-block">
          IET HISTORY
          <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-white/90 rounded" />
        </h1>
      </div>

      {/* 📜 Scrollable Timeline Container */}
      <div
        ref={scrollContainerRef}
        className="relative max-w-5xl mx-auto max-h-[70vh] overflow-y-auto overflow-x-visible pr-4 custom-scrollbar-hide scroll-smooth"
      >
        <div className="relative py-8">
          {/* 🧵 Static center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-white/30 hidden md:block" />

          {/* 🟢 Animated progress line */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-white hidden md:block"
            style={{ height: pathHeight }}
          />

          {/* 📌 Timeline items */}
          <div className="flex flex-col space-y-12 md:space-y-16">
            {history.map((item: HistoryEvent, index: number) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
