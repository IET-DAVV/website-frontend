"use client";
import Image from "next/image";
import he from "he";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Computer } from "lucide-react";
import Title from "../common/academics/Title";

const HeroInfra = () => {
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);

const campusBlocks = [
  {
    id: 1,
    name: "M Block",
    image: "/infrastructure/blocks/mblock aerial.jpg",
    alt: "M Block aerial view",
    description: `Administrative &amp; Institutional Backbone
M - Block is the central administrative and utility block of IET DAVV. It includes:

The main auditorium for events, inductions, and seminars

Head offices such as the Director's Office, Exam Section, Scholarship Section, and Placement Cell

The IT server room, which handles all networking, online systems, and college-wide infrastructure

A hub for official documentation, academic records, and student services
It is the nerve center of campus operations, leadership, and large gatherings.`,
  },
  {
    id: 2,
    name: "A Block",
    image: "/infrastructure/blocks/ablock aerial.png",
    alt: "A Block aerial view",
    description: `Academic Core + Civil &amp; Mechanical Base
A-Block is one of the oldest academic blocks at IET DAVV, historically used for Civil and Mechanical Engineering classes. It includes core lecture halls, shared classrooms, and labs that support interdisciplinary academic activities. Its central position makes it a vital learning space across departments, fostering collaborative teaching environments.`,
  },
  {
    id: 3,
    name: "B Block",
  image: "/infrastructure/blocks/Bblock_aerial.jpg",
    alt: "B Block aerial view",
    description: `Computer Science + Cyber &amp; IT Infrastructure Hub
B-Block is dedicated to the Computer Science and Information Technology departments. In addition to smart classrooms and coding labs, this block handles several technical backend responsibilities such as the institute&#8217;s website management, Wi-Fi ID generation, and cyber systems coordination. It plays a key role in digital administration and student tech access.`,
  },
  {
    id: 4,
    name: "D Block",
    image: "/infrastructure/blocks/dblock aerial.png",
    alt: "D Block aerial view",
    description: `Electronics &amp; Instrumentation Lab Complex
D-Block serves as the practical zone for Electronics and Communication Engineering (ECE). It houses various electronic instruments and specialized labs for circuit design, embedded systems, signal processing, and instrumentation. This block is critical for ECE lab courses and minor hardware project development.`,
  },
  {
    id: 5,
    name: "E Block",
    image: "/infrastructure/blocks/eblock aerial.png",
    alt: "E Block aerial view",
    description: `Mechanical/Civil Support + E-Cell &amp; Innovation Space
E-Block supports both Mechanical and Civil Engineering departments with project labs and design facilities. It also houses spaces related to the Entrepreneurship Cell (E-Cell) and student innovation clubs, encouraging ideation, prototyping, and teamwork.`,
  },
  {
    id: 6,
    name: "F Block",
    image: "/infrastructure/blocks/fblock aerial.png",
    alt: "F Block aerial view",
    description: `IT Block with Modern Infrastructure
F-Block is one of the newest and most technologically advanced blocks on campus. It supports the Information Technology department and features modern labs, high-speed network setups, and upgraded classrooms equipped with the latest smart learning tools. It represents the forward-looking infrastructure development at IET DAVV.`,
  },
];


  const getDisplayContent = () => {
    if (hoveredBlock !== null) {
      const block = campusBlocks.find((b) => b.id === hoveredBlock);
      return {
        heading: block?.name || "Campus",
        subheading: "",
        description:
          block?.description ||
          "IET's overall academics part takes place in this 6 blocks. Have a glimpse to each one of them",
      };
    }
    return {
      heading: "Campus",
      subheading: "Blocks",
      description:
        "IET's overall academics part takes place in this 6 blocks. Have a glimpse to each one of them",
    };
  };

  const displayContent = getDisplayContent();

  return (
    <div className="min-h-screen bg-white px-4 py-8 sm:py-12 md:py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <Title title="FACILITIES" className=" leading-tight font-newyork" />
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 col-span-1 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={displayContent.heading}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black mb-4 sm:mb-6 leading-tight font-newyork"
                >
                  {displayContent.heading}
                </motion.h2>
                {displayContent.subheading && (
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black mb-6 sm:mb-8 leading-tight font-newyork"
                  >
                    {displayContent.subheading}
                  </motion.h2>
                )}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed"
                >
                  {he.decode(displayContent.description)}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Blocks */}
          <div className="w-full col-span-1 lg:col-span-2">
            <motion.div
              className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {campusBlocks.map((block) => (
                <motion.div
                  key={block.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredBlock(block.id)}
                  onMouseLeave={() => setHoveredBlock(null)}
                  onTouchStart={() => setHoveredBlock(block.id)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                    <div className="aspect-[4/3] bg-gray-200">
                      <Image
                        src={block.image}
                        alt={block.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        width={500}
                        height={300}
                      />
                    </div>
                    {/* Overlay with Text Animation */}
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center"
                      whileHover={{ backgroundColor: "rgba(75, 74, 74, 0.5)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-white font-newyork font-semibold tracking-wide text-center"
                      >
                        {block.name}
                      </motion.h3>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroInfra;
