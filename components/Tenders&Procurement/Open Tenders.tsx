"use client";
import React from 'react';
import { motion } from "framer-motion";

const OpenTendersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Main Heading: OPEN TENDERS*/}
        <div className="text-center py-6 mb-8 relative">
          <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={"text-5xl font-center text-gray-500 mb-3"}
    >
    OPEN TENDERS
    </motion.h2>
            
          
          {/* Close button icon placeholder */}
          <div className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-900 cursor-pointer">
            
          </div>
        </div>
        {/* Introduction */}
        <section className="mb-10">
          <p className="text-base text-gray-700 leading-relaxed text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        {/* Placeholder Image Section */}
        <section className="mb-12">
          <div className="w-full h-[500px] bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-500 text-2xl">
            {/* This is a placeholder for your actual image */}
             Image Placeholder
          </div>
        </section>

      </main>
    </div>
  );
};

export default OpenTendersPage;