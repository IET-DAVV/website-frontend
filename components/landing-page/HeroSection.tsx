// components/HeroSection.tsx
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
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDA9Ru6GvCvc4r2A6ijbZtUjmUmdwiVy3040bgKWKf4W0EIKrEBKA2zWVUN1gGlQRSROzFDUXVhlKKrezB9TzhCyHeuvVkCWQ0UszpHYBaxCtWHojrJ63T1emx2dM1_TNs8iu_PAWzcI576wPfySJdHa8xgBmpf4A7NrUEHM0WEuXaRCiJ8SwrFovHkrdSU0nOse5ERK1XScTUTXa2MAeqlKS4aFL54Q3sK54A7xbns-VCJ00AzMx9wAZ6SULlwXoHy7oXf5-YfV5Ft",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAiZaq0vXQ8-eg7kOPMjhcJ4QpSwImeBrMGpdWAatqoyklbTIwiXh1n7ez8JwxsSkwEV9XQ6DUFCKATXLjn1iPb40VquZbnHb2bsmzNT8oYFuY7bMlGM0dAQTwWVEGCYHwWPzTz0_fNrIWru-vAqtQMI8p9xOLv177f_ot4L-x2Bgm4hv-0GjFfySitTUygnFt7kGDN0ZxP8QTKh5LZz7ekl1jvVAuukZvW5korEjI6gdvF3f48Hp-lJur4xAwebl_RKUtJz0RI7mON",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDo8Th9n46sWQTc3QJEzC9my0tA673pOvn9CSTiZFcJ34DxuY8LGalSSKhlooDU_A6c0o8GiYyXdrM3rEBva3_LvQGkCWhvdOODp5HNoiQXXA5lSuJtB3DpknWMe_MESwzn5WkGcQIau7V0D_tkhG0Vy3cWgVzntpM7nhvjxAWD-kTR2gt5-Kx0VNtWzoQn_R9FYr7bOWpd4Fu9uUkRrGgDFcelqCZ-A-Ox8QJFQwFMRSbYbplegkWgELMS-3u7WQa5a5PNTRtCip5E",
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
    <div className="container top-32 mx-auto px-12 h-full relative -z-10">
      <div className="grid h-screen grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* News Section */}
        <NewsAnnouncement title="News" items={newsItems} />

        {/* Carousel Section */}
        <div className="lg:col-span-2">
          <div className="carousel-container relative overflow-hidden rounded-lg">
            {slides.map((src, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                style={{ display: index === currentSlide ? 'block' : 'none', transition: 'opacity 0.5s ease-in-out' }}
              >
                <img
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg"
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