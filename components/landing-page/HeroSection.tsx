"use client";

import React, { useState, useEffect } from "react";
import NewsAnnouncement from "./NewsAnnouncement";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsItems = [
    "Mid-sem Exams start from 15th July 2025.",
    "Timetable coming soon.",
    'Hackathon "CodeSprint 2025" registrations open till 10th July.',
    "AI/ML Workshop on 6-7 July. Limited seats.",
    "Internship applications open on the Placement Cell Portal.",
    'Tech Fest "Innovatia 2025" scheduled for 20-22 August.',
    "Convocation registration deadline: 12th July.",
  ];

  const announcementItems = [
    "Mid-sem Exams start from 15th July 2025.",
    "Timetable coming soon.",
    'Hackathon "CodeSprint 2025" registrations open till 10th July.',
    "AI/ML Workshop on 6-7 July. Limited seats.",
    "Internship applications open on the Placement Cell Portal.",
    'Tech Fest "Innovatia 2025" scheduled for 20-22 August.',
    "Convocation registration deadline: 12th July.",
  ];

  const slides = [
    "landing/mblock.png",
    "HeroSection/IMG-20250312-WA0003.jpg",
    "HeroSection/IMG-20250112-WA0334 (1).jpg",
    "HeroSection/Screenshot_2025-06-29-14-52-08-27_1c337646f29875672b5a61192b9010f9.jpg",
    "HeroSection/IMG-20250705-WA0009.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide(
      (prevSlide) => {
        const newSlide = (prevSlide - 1 + slides.length) % slides.length;
        console.log("Moving to slide:", newSlide);
        return newSlide;
      }
    );
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prevSlide) => {
      const newSlide = (prevSlide + 1) % slides.length;
      console.log("Moving to slide:", newSlide);
      return newSlide;
    });
  };

  return (
    <div className="w-full top-32 px-4 sm:px-6 lg:px-8 h-full relative ">
      <div className="grid h-screen grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* News Section */}
        <NewsAnnouncement title="News" items={newsItems} />

        {/* Carousel Section */}
        <div className="lg:col-span-3">
          <div className="carousel-container relative overflow-hidden rounded-lg w-full h-[455px] sm:h-[555px] mx-auto bg-gray-200" style={{ isolation: 'isolate' }}>
            {slides.map((src, index) => (
              <div
                key={index}
                className={`carousel-slide absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                  src={src}
                />
              </div>
            ))}
            
            {/* Navigation Buttons Container */}
            <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none" style={{ zIndex: 100 }}>
              {/* Previous Button */}
              <button
                type="button"
                onClick={handlePrevSlide}
                onMouseEnter={() => console.log("Mouse enter previous")}
                onMouseLeave={() => console.log("Mouse leave previous")}
                className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-all duration-200 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label="Previous slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNextSlide}
                onMouseEnter={() => console.log("Mouse enter next")}
                onMouseLeave={() => console.log("Mouse leave next")}
                className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-all duration-200 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label="Next slide"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Slide Counter */}
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm z-20">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>

        {/* Announcement Section */}
        <NewsAnnouncement title="Announcement" items={announcementItems} />
      </div>
    </div>
  );
};

export default HeroSection;