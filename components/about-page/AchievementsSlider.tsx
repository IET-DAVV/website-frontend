"use client";
import React from "react";
import { FaTrophy, FaAward, FaMedal } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Important!

const data = [
  {
    icon: <FaTrophy size={40} />,
    title: "National Tech Fest Winner",
    desc: "Secured 1st position among 150+ colleges across India at the prestigious TechStorm 2024.",
  },
  {
    icon: <FaAward size={40} />,
    title: "Best Innovation Award",
    desc: "Recognized for outstanding innovation in the Smart India Hackathon 2023.",
  },
  {
    icon: <FaMedal size={40} />,
    title: "Runner-up in Chess Nationals",
    desc: "Team IET secured 2nd place in National Level Chess Tournament, showcasing focus and strategy.",
  },
];

const Achievements = () => {
  return (
    <div className="bg-white py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">Achievements</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={3000}
        centerMode
        centerSlidePercentage={33}
        className="w-full max-w-6xl mx-auto"
      >
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-300 rounded-xl px-6 py-8 mx-4 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-[300px] max-w-sm mx-auto"
          >
            <div className="text-blue-600 mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Achievements;
