"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function SingleCard() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
 

  return (
    <div ref={containerRef}>
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
      >
        <div className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row h-full">
            {/* Content Section */}
            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                  Hi there
                </span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Test Please work
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-purple-700 transition-colors text-lg"
                >
                  Book your trip
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-purple-800 text-purple-800 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-colors text-lg"
                >
                  Learn more
                </motion.button>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 relative overflow-hidden lg:rounded-r-3xl">
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-20 z-10`}
              />
              <img
                src={'mblock.png'}
                alt={"Mblock "}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 z-10" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
