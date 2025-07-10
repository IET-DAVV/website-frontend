"use client";
import React from "react";
import { FaTrophy, FaAward, FaMedal } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Important!

const data = [
  {
    icon: <FaTrophy size={40} />,
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. aEtiam eu turpis molestie",
  },
  {
    icon: <FaAward size={40} />,
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. aEtiam eu turpis molestie",
  },
  {
    icon: <FaMedal size={40} />,
    title: "Lorem ipsum",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. aEtiam eu turpis molestie",
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
      >
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border-2 border-gray-300 rounded-xl px-6 py-10 mx-4 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="text-blue-600 mb-4 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Achievements;
