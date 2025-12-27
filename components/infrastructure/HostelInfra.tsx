"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HostelsPage = () => {
  const hostelsData = [
    {
      id: 1,
      name: "Visvesvaraya (Boys)",
      image: "/infrastructure/hostels/b1.jpg",
      description: "First-year hostel with double/triple occupancy, study furniture, Wi-Fi, and access to the common mess.",
    },
    {
      id: 2,
      name: "Satvendra Nath Bose (Boys)",
      image: "/infrastructure/hostels/b2.jpg",
      description: "Second-year hostel with twin-sharing rooms, furnished interiors, and common amenities.",
    },
    {
      id: 3,
      name: "Ramanujan (Boys)",
      image: "/infrastructure/hostels/b3.jpg",
      description: "Third-year hostel with two-student rooms, Wi-Fi, laundry, and recreation facilities.",
    },
    {
      id: 4,
      name: "Vikram Sarabhai (Boys)",
      image: "/infrastructure/hostels/b4.jpg",
      description: "Final-year hostel offering single occupancy rooms for added privacy and comfort.",
    },
  ];

  const girlsHostelData = [
    {
      id: 5,
      name: "A-Block (Girls)",
      image: "/infrastructure/hostels/b5.png",
      description: "Spacious rooms with security, warden presence, CCTV surveillance, and in-hostel laundry.",
    },
    {
      id: 6,
      name: "B-Block (Girls)",
      image: "/infrastructure/hostels/b5.png",
      description: "Comfortable rooms with modern amenities, dedicated study areas, and mess facilities.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-7xl font-newyork text-center text-gray-800 mb-12 uppercase"
        >
          HOSTELS
        </motion.h1>

        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Left Column: Boys Hostels (2x2 Grid) */}
          <div className="grid grid-cols-2 gap-2 m-2">
            {hostelsData.map((hostel) => (
              <Link href="/hostel" key={hostel.id} className="block group">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                >
                  <Image
                    alt={`${hostel.name} Hostel`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    src={hostel.image}
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 text-white transition-all duration-300">
                    <h2 className="text-xl font-bold mb-2">{hostel.name}</h2>
                    <p className="text-sm max-h-0 opacity-0 overflow-hidden group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                      {hostel.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Right Column: Girls Hostels (Stacked) */}
          <div className="grid grid-cols-1 gap-2 m-2">
            {girlsHostelData.map((hostel) => (
              <Link href="/hostel" key={hostel.id} className="block group">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                >
                  <Image
                    alt={`${hostel.name} Hostel`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                    src={hostel.image}
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 text-white transition-all duration-300">
                    <h2 className="text-2xl font-bold mb-2">{hostel.name}</h2>
                    <p className="text-sm max-h-0 opacity-0 overflow-hidden group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                      {hostel.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HostelsPage;