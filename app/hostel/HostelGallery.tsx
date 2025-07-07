'use client'
import Image from 'next/image';
import React, { useState } from 'react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title?: string;
}

const GalleryCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dummy gallery images - replace with actual image paths
  const galleryImages: GalleryImage[] = [
    { id: 1, src: '/gallery/image1.jpg', alt: 'Gallery Image 1', title: 'Campus View 1' },
    { id: 2, src: '/gallery/image2.jpg', alt: 'Gallery Image 2', title: 'Campus View 2' },
    { id: 3, src: '/gallery/image3.jpg', alt: 'Gallery Image 3', title: 'Campus View 3' },
    { id: 4, src: '/gallery/image4.jpg', alt: 'Gallery Image 4', title: 'Campus View 4' },
    { id: 5, src: '/gallery/image5.jpg', alt: 'Gallery Image 5', title: 'Campus View 5' },
    { id: 6, src: '/gallery/image6.jpg', alt: 'Gallery Image 6', title: 'Campus View 6' },
    { id: 7, src: '/gallery/image7.jpg', alt: 'Gallery Image 7', title: 'Campus View 7' },
    { id: 8, src: '/gallery/image8.jpg', alt: 'Gallery Image 8', title: 'Campus View 8' },
  ];

  const imagesPerSlide = 4;
  const totalSlides = Math.ceil(galleryImages.length / imagesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentImages = () => {
    const startIndex = currentSlide * imagesPerSlide;
    const endIndex = startIndex + imagesPerSlide;
    return galleryImages.slice(startIndex, endIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="text-center py-16">
        <h1 className="text-6xl font-light text-teal-600 tracking-wider">
          Gallery
        </h1>
      </div>

      {/* Carousel Container */}
      <div className="relative bg-green-200 py-16">
        <div className="max-w-7xl mx-auto px-8">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous images"
          >
            <svg 
              className="w-6 h-6 text-gray-700" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next images"
          >
            <svg 
              className="w-6 h-6 text-gray-700" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out">
            {getCurrentImages().map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden shadow-lg">
                  {/* Placeholder for actual images */}
                  <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                    <div className="text-gray-600 text-sm font-medium">
                      Image {image.id}
                    </div>
                  </div>
                  
                  {/* Uncomment below when you have actual images */}
                  {/* <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  /> */}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-teal-600 scale-125'
                    : 'bg-white bg-opacity-60 hover:bg-opacity-80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-gray-700 font-medium">
              {currentSlide + 1} of {totalSlides}
            </span>
          </div>
        </div>
      </div>

      {/* Optional: Keyboard Navigation */}
      <div className="sr-only">
        <button
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
          }}
          aria-label="Gallery navigation"
        />
      </div>
    </div>
  );
};

export default GalleryCarousel;