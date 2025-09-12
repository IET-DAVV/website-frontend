"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../common/academics/Title";

interface HostelData {
  id: number;
  name: string;
  description: string;
  filled: number;
  vacant: number;
  managerName: string;
  managerImage: string;
  managerInformation: string;
  wardenName: string;
  wardenImage: string;
  wardenInformation: string;
}

const HostelComponent = () => {
  const [selectedTab, setSelectedTab] = useState<"boys" | "girls">("boys");
  const [selectedHostel, setSelectedHostel] = useState<number>(1);

  const BoyshostelsData: HostelData[] = [
    {
      id: 1,
      name: "Visvesvaraya (Boys)",
      description:
        "Hostel 1 is assigned to first year (freshman) students. It features double or triple occupancy rooms. Like the other hostels it has study furniture, Wi-Fi, and access to the common mess.",
      filled: 80,
      vacant: 20,
      managerName: "Mr xyz",
      managerImage: "/placeholder.jpg",
      managerInformation: "lourem-46",
      wardenName: "Mr xyz",
      wardenImage: "/placeholder.jpg",
      wardenInformation: "lourem-46",
    },
    {
      id: 2,
      name: "Satvendra Nath Bose (Boys)",
      description:
        "Hostel 3 houses second year undergraduate students. Its nearly identical layout and facilities to Hostel 1 with two students per room and furnished.",
      filled: 90,
      vacant: 10,
      managerName: "Mr xyz",
      managerImage: "/placeholder.jpg",
      managerInformation: "lourem-46",
      wardenName: "Mr xyz",
      wardenImage: "/placeholder.jpg",
      wardenInformation: "lourem-46",
    },
    {
      id: 3,
      name: "Ramanujan (Boys)",
      description:
        "Hostel 2 is reserved for third year students. Its rooms also accommodate two students each. In all other respects (furnishings, water supply, Wi-Fi, recreation and laundry facilities) it matches the others.",
      filled: 80,
      vacant: 20,
      managerName: "Mr xyz",
      managerImage: "/placeholder.jpg",
      managerInformation: "lourem-46",
      wardenName: "Mr xyz",
      wardenImage: "/placeholder.jpg",
      wardenInformation: "lourem-46",
    },
    {
      id: 4,
      name: "Vikram Sarabhai (Boys)",
      description:
        "Hostel 4 is set aside for fourth year students. Unlike the other hostels, Hostel 4 provides single occupancy rooms (one student per room). This offers seniors more privacy and study comfort.",
      filled: 80,
      vacant: 20,
      managerName: "Mr xyz",
      managerImage: "/placeholder.jpg",
      managerInformation: "lourem-46",
      wardenName: "Mr xyz",
      wardenImage: "/placeholder.jpg",
      wardenInformation: "lourem-46",
    },
  ];

  const girlsHostelData: HostelData[] = [
    {
      id: 5,
      name: "A-Block (Girls)",
      description:
        "Well-Maintained with Security & Warden Presence. Designed for comfort and safety, this hostel has clean washrooms, CCTV surveillance, and in-hostel laundry.",
      filled: 80,
      vacant: 20,
      managerName: "Mr xyz",
      managerImage: "/placeholder.jpg",
      managerInformation: "lourem-46",
      wardenName: "Mr xyz",
      wardenImage: "/placeholder.jpg",
      wardenInformation: "lourem-46",
    },
    {
      id: 6,
      name: "B-Block (Girls)",
      description:
        "Similar to A-Block with all modern facilities. Provides a secure, peaceful, and study-friendly environment for girl students.",
      filled: 80,
      vacant: 20,
      managerName: "Mr xyz",
      managerImage: "/placeholder.jpg",
      managerInformation: "lourem-46",
      wardenName: "Mr xyz",
      wardenImage: "/placeholder.jpg",
      wardenInformation: "lourem-46",
    },
  ];

  const currentHostelData =
    selectedTab === "boys" ? BoyshostelsData : girlsHostelData;
  const currentHostel =
    currentHostelData.find((hostel) => hostel.id === selectedHostel) ||
    currentHostelData[0];

  const handleTabChange = (tab: "boys" | "girls") => {
    setSelectedTab(tab);
    const firstHostelId =
      tab === "boys" ? BoyshostelsData[0].id : girlsHostelData[0].id;
    setSelectedHostel(firstHostelId);
  };

  const getHostelButtonText = (hostel: HostelData) => {
    const hostelMap: { [key: number]: string } =
      selectedTab === "boys"
        ? { 1: "Hostel A", 2: "Hostel B", 3: "Hostel C", 4: "Hostel D" }
        : { 5: "Hostel A", 6: "Hostel B" };
    return hostelMap[hostel.id] || "Hostel";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-newyork font-light text-center mb-12 text-light-blue tracking-widest"
        >
          <Title title="HOSTEL" className="text-7xl leading-tight font-newyork" />
        </motion.h1>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex">
            {["boys", "girls"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab as "boys" | "girls")}
                className={`px-8 py-3 font-medium text-lg tracking-wide transition-colors ${
                  selectedTab === tab
                    ? "text-dark-blue font-semibold border-b-2 border-dark-blue"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Hostel Selection Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {currentHostelData.map((hostel) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={hostel.id}
              onClick={() => setSelectedHostel(hostel.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedHostel === hostel.id
                  ? "bg-dark-blue text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-teal-300 hover:bg-teal-50"
              }`}
            >
              {getHostelButtonText(hostel)}
            </motion.button>
          ))}
        </div>

        {/* Warden Section - with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHostel.id + "-warden"}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.4 }}
            className="mt-12 bg-white rounded-3xl shadow-sm border border-gray-200 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-8"
          >
            {/* Image */}
            <div className="flex-shrink-1">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={currentHostel.wardenImage || "/placeholder.jpg"}
                  alt={currentHostel.wardenName}
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-gray-800 tracking-wide">
                Warden Information
              </h2>
              <p className="text-base text-gray-500 mt-1">
                Responsible for hostel administration, student welfare, and
                discipline.
              </p>

              <div className="mt-4">
                <p className="text-lg font-medium text-gray-800">
                  {currentHostel.wardenName}
                </p>
                <p className="text-gray-600 mt-1">
                  {currentHostel.wardenInformation}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Hostel Description - with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHostel.id + "-desc"}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {currentHostel.name}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {currentHostel.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default HostelComponent;
