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
    <div className="w-full px-4 sm:px-6 lg:px-8 py-48 sm:py-6 lg:py-32">
      {/* Mobile Layout - Stack vertically */}
      <div className="block lg:hidden space-y-4 sm:space-y-6">
        {/* Carousel Section - Full width on mobile */}
        <div className="w-full">
          <div className="carousel-container relative overflow-hidden rounded-lg w-full 
                         h-[250px] sm:h-[350px] md:h-[400px] mx-auto bg-gray-200">
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
            
            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 pointer-events-none">
              <button
                type="button"
                onClick={handlePrevSlide}
                className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white 
                          p-2 sm:p-3 rounded-full transition-all duration-200 pointer-events-auto 
                          focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label="Previous slide"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNextSlide}
                className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white 
                          p-2 sm:p-3 rounded-full transition-all duration-200 pointer-events-auto 
                          focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label="Next slide"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Slide Counter */}
            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black bg-opacity-50 
                           text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>

        {/* News and Announcements - Two columns on tablets, single column on phones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <NewsAnnouncement title="News" items={newsItems} />
          <NewsAnnouncement title="Announcement" items={announcementItems} />
        </div>
      </div>

      {/* Desktop Layout - Original 3-column layout */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-6 xl:gap-8 items-start min-h-[600px]">
        {/* News Section */}
        <div className="lg:col-span-1">
          <NewsAnnouncement title="News" items={newsItems} />
        </div>

        {/* Carousel Section */}
        <div className="lg:col-span-3">
          <div className="carousel-container relative overflow-hidden rounded-lg w-full 
                         h-[500px] xl:h-[555px] mx-auto bg-gray-200">
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
            
            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
              <button
                type="button"
                onClick={handlePrevSlide}
                className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full 
                          transition-all duration-200 pointer-events-auto focus:outline-none 
                          focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNextSlide}
                className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full 
                          transition-all duration-200 pointer-events-auto focus:outline-none 
                          focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Slide Counter */}
            <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>

        {/* Announcement Section */}
        <div className="lg:col-span-1">
          <NewsAnnouncement title="Announcement" items={announcementItems} />
        </div>
      </div>
    </div>
  );
};


export default HeroSection;