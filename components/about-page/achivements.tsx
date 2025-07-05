"use client";

import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsTrophy } from "react-icons/bs";
import { ACHIEVEMENTS_DATA } from "@/constants/about-page/achievements-data";

const ITEMS_PER_PAGE = 4;

const AchievementsSlider = () => {
  const [page, setPage] = useState(0);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const totalPages = Math.ceil(ACHIEVEMENTS_DATA.length / ITEMS_PER_PAGE);
  const containerRef = useRef<HTMLDivElement>(null);

  // 🕒 Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prevPage) => (prevPage + 1) % totalPages);
      setSelectedId(null);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const handleDragEnd = (event: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -100 && page < totalPages - 1) {
      setPage(page + 1);
      setSelectedId(null);
    } else if (info.offset.x > 100 && page > 0) {
      setPage(page - 1);
      setSelectedId(null);
    }
  };

  const handleDotClick = (i: number) => {
    setPage(i);
    setSelectedId(null);
  };

  const visibleAchievements = ACHIEVEMENTS_DATA.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE,
  );

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-10"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          ref={containerRef}
        >
          {visibleAchievements.map((achieve) => {
            const isSelected = selectedId === achieve.id;
            return (
              <motion.div
                key={achieve.id}
                onClick={() => setSelectedId(achieve.id)}
                whileHover={{ scale: 1.05 }}
                className={`w-[280px] min-h-[300px] flex flex-col items-center text-center p-6 border-2 rounded-2xl shadow-sm transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "border-[#3B799E] text-[#3B799E]"
                    : "border-black text-black hover:border-[#3B799E] hover:text-[#3B799E]"
                }`}
              >
                <BsTrophy size={48} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">{achieve.title}</h3>
                <p className="text-sm">{achieve.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-2 pb-4">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === page ? "bg-[#3B799E]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementsSlider;
