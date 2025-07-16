"use client";
import React from "react";
import Image from "next/image";
import { FaMedal, FaTrophy, FaAward } from "react-icons/fa";

const achievements = [
  {
    icon: <FaMedal className="text-blue-500 text-4xl mb-4" />,
    title: "National Finalist",
    description:
      "Secured top 5 position at a prestigious tech event, competing with 500+ teams.",
  },
  {
    icon: <FaTrophy className="text-blue-500 text-4xl mb-4" />,
    title: "Hackathon Winner",
    description:
      "Won first place in a national hackathon with an AI-based smart solution.",
  },
  {
    icon: <FaAward className="text-blue-500 text-4xl mb-4" />,
    title: "Research Recognition",
    description:
      "Our project paper was selected in the top IEEE research publications.",
  },
];

const AchievementsSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-black mb-4">
        Achievements
      </h2>
      <div className="w-24 h-1 bg-blue-500 mx-auto mb-12 rounded-full"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300"
          >
            {item.icon}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
