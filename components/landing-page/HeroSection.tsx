"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import NewsAnnouncement from "./NewsAnnouncement";
import {
  slides,
  fetchAnnouncements,
  Item,
  newsItems as defaultNews,
  announcementItems as defaultAnnouncements,
} from "@/constants/HeroSection/data";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [newsItems, setNewsItems] = useState<Item[]>(defaultNews);
  const [announcementItems, setAnnouncementItems] =
    useState<Item[]>(defaultAnnouncements);

  // Client-side fetch for news and announcements
  useEffect(() => {
    fetchAnnouncements().then(({ news, announcements }) => {
      setNewsItems(news || []);
      setAnnouncementItems(announcements || []);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-32 sm:pt-42 md:pt-48 pb-42 sm:py-6 lg:py-32">
      {/* Mobile Layout */}
      <div className="block lg:hidden space-y-4 sm:space-y-6">
        <div className="w-full">
          <div className="carousel-container relative overflow-hidden rounded-lg w-full h-[250px] sm:h-[350px] md:h-[400px] mx-auto bg-gray-200">
            {slides.map((src, index) => (
              <div
                key={index}
                className={`carousel-slide absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  alt={`Slide ${index + 1}`}
                  src={src}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
                />
              </div>
            ))}

            <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 pointer-events-none">
              <button
                type="button"
                onClick={handlePrevSlide}
                className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 sm:p-3 rounded-full pointer-events-auto"
                aria-label="Previous slide"
              >
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6"
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
              <button
                type="button"
                onClick={handleNextSlide}
                className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 sm:p-3 rounded-full pointer-events-auto"
                aria-label="Next slide"
              >
                <svg
                  className="w-4 h-4 sm:w-6 sm:h-6"
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

            <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black bg-opacity-50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <NewsAnnouncement title="Notices" items={newsItems} />
          <NewsAnnouncement title="Announcements" items={announcementItems} />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-6 xl:gap-8 items-start min-h-[600px]">
        <div className="lg:col-span-1">
          <NewsAnnouncement title="Notices
          " items={newsItems} />
        </div>

        <div className="lg:col-span-3">
          <div className="carousel-container relative overflow-hidden rounded-lg w-full h-[500px] xl:h-[555px] mx-auto bg-gray-200">
            {slides.map((src, index) => (
              <div
                key={index}
                className={`carousel-slide absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  alt={`Slide ${index + 1}`}
                  src={src}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 1200px) 60vw, 40vw"
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
                />
              </div>
            ))}

            <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
              <button
                type="button"
                onClick={handlePrevSlide}
                className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full pointer-events-auto"
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
              <button
                type="button"
                onClick={handleNextSlide}
                className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full pointer-events-auto"
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

            <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <NewsAnnouncement title="Announcements" items={announcementItems} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
