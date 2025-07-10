"use client";
import Image from "next/image";
import he from 'he';
import React, { useState } from "react";

const HeroInfra = () => {
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);

  const campusBlocks = [
  {
    id: 1,
    name: "M BLOCK",
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
    name: "A BLOCK",
    image: "/infrastructure/blocks/ablock aerial.png",
    alt: "A Block aerial view",
    description: `Academic Core + Civil &amp; Mechanical Base
A-Block is one of the oldest academic blocks at IET DAVV, historically used for Civil and Mechanical Engineering classes. It includes core lecture halls, shared classrooms, and labs that support interdisciplinary academic activities. Its central position makes it a vital learning space across departments, fostering collaborative teaching environments.`,
  },
  {
    id: 3,
    name: "B BLOCK",
    image: "/infrastructure/blocks/bBlock aerial.jpg",
    alt: "B Block aerial view",
    description: `Computer Science + Cyber &amp; IT Infrastructure Hub
B-Block is dedicated to the Computer Science and Information Technology departments. In addition to smart classrooms and coding labs, this block handles several technical backend responsibilities such as the institute&#8217;s website management, Wi-Fi ID generation, and cyber systems coordination. It plays a key role in digital administration and student tech access.`,
  },
  {
    id: 4,
    name: "D BLOCK",
    image: "/infrastructure/blocks/dblock aerial.png",
    alt: "D Block aerial view",
    description: `Electronics &amp; Instrumentation Lab Complex
D-Block serves as the practical zone for Electronics and Communication Engineering (ECE). It houses various electronic instruments and specialized labs for circuit design, embedded systems, signal processing, and instrumentation. This block is critical for ECE lab courses and minor hardware project development.`,
  },
  {
    id: 5,
    name: "E BLOCK",
    image: "/infrastructure/blocks/eblock aerial.png",
    alt: "E Block aerial view",
    description: `Mechanical/Civil Support + E-Cell &amp; Innovation Space
E-Block supports both Mechanical and Civil Engineering departments with project labs and design facilities. It also houses spaces related to the Entrepreneurship Cell (E-Cell) and student innovation clubs, encouraging ideation, prototyping, and teamwork.`,
  },
  {
    id: 6,
    name: "F BLOCK",
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
    <div className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-newyork sm:text-5xl lg:text-6xl font-light text-light-blue mb-4 tracking-wide">
            INFRASTRUCTURE
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8 col-span-1">
            <div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-black mb-6 leading-tight font-newyork transition-all duration-300">
                {displayContent.heading}
              </h2>
              {displayContent.subheading && (
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-black mb-8 leading-tight font-newyork transition-all duration-300">
                  {displayContent.subheading}
                </h2>
              )}
            </div>

            <div className="max-w-md">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed transition-all duration-300">
                {he.decode(displayContent.description)}
              </p>
            </div>
          </div>

          {/* Right Column - Campus Blocks Grid */}
          <div className="w-full col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {campusBlocks.map((block) => (
                <div
                  key={block.id}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredBlock(block.id)}
                  onMouseLeave={() => setHoveredBlock(null)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                    <div className="aspect-[4/3] bg-gray-200">
                      <Image
                        src={block.image}
                        alt={block.alt}
                        className="w-full h-full object-cover"
                        width={500}
                        height={300}
                      />
                    </div>
                    {/* Block Name Overlay */}
                    <div className="absolute h-12 text-center bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                      <h3 className="text-lg font-newyork font-semibold text-center tracking-wide">
                        {block.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroInfra;
