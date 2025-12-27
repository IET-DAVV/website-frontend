"use client";
import React from 'react';
import { motion } from "framer-motion";

const FundedProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Main Heading: 1. SEMICON INDIA 2025 */}
        <div className="text-center py-6 mb-8 relative">
          <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
            font-newyork font-normal text-gray-800
            text-4xl leading-[44px]
            sm:text-5xl sm:leading-[60px]
            md:text-6xl md:leading-[80px]
            lg:text-[60px] lg:leading-[80px]`
      }
    >
    1. SEMICON INDIA 2025
    </motion.h2>
            
          
          {/* Close button icon placeholder */}
          <div className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-900 cursor-pointer">
            
          </div>
        </div>

        {/* Placeholder Image Section */}
        <section className="mb-12">
          <div className="w-full h-[500px] bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-500 text-2xl">
            {/* This is a placeholder for your actual image */}
             Image Placeholder
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Introduction</h3>
          <p className="text-base text-gray-700 leading-relaxed text-justify">
            The Institute of Engineering & Technology (IET-DAVV), Indore, proudly announces its participation in Semicon India 2025, inaugurated by Honourable Prime Minister. This landmark event provided a platform to showcase innovation in VLSI research and development. Researchers presented an indigenous microprocessor chip fabricated at the Semiconductor Complex Limited (SCL), Chandigarh. Among these, one chip was conceptualized, designed, and developed by the Advanced VLSI laboratory of IET-DAVV.
          </p>
        </section>

        {/* Project Overview */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Project Overview</h3>
          <p className="text-base text-gray-700 leading-relaxed text-justify mb-4">
            The chip designed by IET-DAVV represents a significant step in advancing indigenous semiconductor research and design capabilities in India.
          </p>
          <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2 pl-4">
            <li>The project involved a complete flow from VLSI design: front-end design, back-end design, logic verification, physical verification, synthesis, place-and-route, and DRC/LVS verification.</li>
            <li>It was implemented by utilizing industry-standard EDA tools with support from government semiconductor initiatives.</li>
            <li>The fabricated chip at SCL Chandigarh, validates the functional accuracy and manufacturability of the design.</li>
          </ul>
        </section>

        {/* Technical Significance */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Significance</h3>
          <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2 pl-4">
            <li>The project demonstrates scalable architecture applicable for both academic research and industry-grade implementations.</li>
            <li>It contributes to the domain of low-power and high-performance semiconductor design, an area of strategic importance.</li>
            <li>The chip has potential applications in IoT devices, embedded controllers, and specialized processors.</li>
          </ul>
        </section>

        {/* Patent & Publication Aspect */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Patent & Publication Aspect</h3>
          <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2 pl-4">
            <li>The chip design has been documented as a patentable innovation due to its novel architecture and optimized implementation.</li>
            <li>A technical paper detailing the methodology, design process, and simulation outcomes has been prepared for submission in reputed IEEE conferences/ journals.</li>
            <li>This achievement will also be included in the institute&apos;s Publication & Patent record, highlighting IET-DAVV&apos;s contribution to India&apos;s self-reliance in semiconductor technology.</li>
          </ul>
        </section>

        {/* Impact & Recognition */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Impact & Recognition</h3>
          <ul className="list-disc list-inside text-base text-gray-700 leading-relaxed space-y-2 pl-4">
            <li>Being recognized at Semicon India 2025, alongside designs from national R&D organizations, highlights the institute&apos;s leadership in VLSI research and semiconductor innovation.</li>
            <li>It fosters further collaboration and advancements within the Indian semiconductor ecosystem.</li>
            <li>This accomplishment sets a benchmark for academic-industry collaboration, proving that academic institutions can directly contribute to chip-level innovation at a national level.</li>
          </ul>
        </section>

      </main>
    </div>
  );
};

export default FundedProjectsPage;