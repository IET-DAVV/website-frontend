"use client";
import React, { Component, useEffect, useRef, useState } from "react";
import { achievements } from "@/constants/landing/achievements";
import CustomSlide from "./CustomSlide";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
// Dynamically import react-slick to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});
const NextArrow = ({ onClick, className }: { onClick?: () => void; className?: string }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 right-2 sm:right-4 z-20 transform -translate-y-1/2 
                 bg-white bg-opacity-80 hover:bg-opacity-100 text-blue-600 
                 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 
                 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center ${className}`}
      aria-label="Next slide"
    >
      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
};

const PrevArrow = ({ onClick, className }: { onClick?: () => void; className?: string }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 left-2 sm:left-4 z-20 transform -translate-y-1/2 
                 bg-white bg-opacity-80 hover:bg-opacity-100 text-blue-600 
                 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 
                 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 
                 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center ${className}`}
      aria-label="Previous slide"
    >
      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
};

// Slides Component (Custom Carousel)
const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const slideRef = useRef<HTMLDivElement>(null);

  // Update slides to show based on screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width >= 1280) { // xl
        setSlidesToShow(3);
      } else if (width >= 1024) { // lg
        setSlidesToShow(2);
      } else if (width >= 640) { // sm
        setSlidesToShow(1);
      } else {
        setSlidesToShow(1);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => 
        prev >= achievements.length - slidesToShow ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [slidesToShow]);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev >= achievements.length - slidesToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev <= 0 ? achievements.length - slidesToShow : prev - 1
    );
  };

  const maxSlide = Math.max(0, achievements.length - slidesToShow);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-lg">
        <div
          ref={slideRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentSlide * 100) / slidesToShow}%)`,
            width: `${(achievements.length * 100) / slidesToShow}%`
          }}
        >
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2 sm:px-3 md:px-4"
              style={{ width: `${100 / achievements.length}%` }}
            >
              <CustomSlide
                title={achievement.title}
                year={achievement.year}
                imgAddress={achievement.imgAddress}
                description={achievement.description}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {achievements.length > slidesToShow && (
        <>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </>
      )}

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
        {Array.from({ length: maxSlide + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 
                       ${currentSlide === index 
                         ? 'bg-white scale-125' 
                         : 'bg-white bg-opacity-50 hover:bg-opacity-75'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slides;
