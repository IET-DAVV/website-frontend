'use client'; // This directive is necessary for client-side interactivity in Next.js 13+

import React, { useState, useEffect } from 'react';
import NewsAnnouncement from './NewsAnnouncement';


const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const newsItems = [
    'Mid-sem Exams start from 15th July 2025.',
    'Timetable coming soon.',
    'Hackathon "CodeSprint 2025" registrations open till 10th July.',
    'AI/ML Workshop on 6-7 July. Limited seats.',
    'Internship applications open on the Placement Cell Portal.',
    'Tech Fest "Innovatia 2025" scheduled for 20-22 August.',
    'Convocation registration deadline: 12th July.',
  ];

  const announcementItems = [
    'Mid-sem Exams start from 15th July 2025.',
    'Timetable coming soon.',
    'Hackathon "CodeSprint 2025" registrations open till 10th July.',
    'AI/ML Workshop on 6-7 July. Limited seats.',
    'Internship applications open on the Placement Cell Portal.',
    'Tech Fest "Innovatia 2025" scheduled for 20-22 August.',
    'Convocation registration deadline: 12th July.',
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
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full top-32 px-4 sm:px-6 lg:px-8 h-full relative -z-10">
      <div className="grid h-screen grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* News Section */}
        <NewsAnnouncement title="News" items={newsItems} />

        {/* Carousel Section */}
        <div className="lg:col-span-3">
          <div className="carousel-container relative overflow-hidden rounded-lg w-full h-[455px] sm:h-[555px] mx-auto">
            {slides.map((src, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                style={{ display: index === currentSlide ? 'block' : 'none', transition: 'opacity 0.5s ease-in-out' }}
              >
                <img
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                  src={src}
                />
              </div>
            ))}
            <div className="carousel-dots absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`carousel-dot w-2 h-2 rounded-full bg-white bg-opacity-50 cursor-pointer ${
                    index === currentSlide ? 'active bg-white' : ''
                  }`}
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
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