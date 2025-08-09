'use client'
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import anime from "animejs/lib/anime.es.js";
import EBooksModal from "./EbookPopup";

const LibraryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  // Refs for animation trigger
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headingRef.current) {
              anime({
                targets: entry.target,
                translateY: [-50, 0],
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1000
              });
            }
            if (entry.target === contentRef.current) {
              anime({
                targets: entry.target.children,
                translateY: [50, 0],
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1000,
                delay: anime.stagger(200, { start: 300 })
              });
            }
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% visible
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  const handleEBooksClick = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="text-center pt-16 pb-8">
        <h1
          ref={headingRef}
          className="text-5xl sm:text-6xl lg:text-7xl font-light text-black tracking-wide font-newyork opacity-0"
        >
          LIBRARY
        </h1>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Library Image with Overlay */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <div className="relative h-96 sm:h-[500px] lg:h-[600px]">
              <Image
                src="/infrastructure/library/library aerial.jpg"
                alt="IET DAVV Central Library aerial view"
                fill
                className="object-cover"
                priority
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  ref={contentRef}
                  className="w-full px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center space-y-6 opacity-0"
                >
                  {/* Text content */}
                  <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed font-light max-w-4xl">
                    The IET DAVV Central Library is a newly renovated, state-of-the-art
                    facility designed to support students' academic and research endeavors.
                    Relocated from its original 1997 space in A-Block, it now features modern
                    interiors, comfortable reading areas, and individual study desks backed by
                    high-speed Wi-Fi and digital access.
                  </p>

                  {/* E Books button */}
                  <button
                    onClick={handleEBooksClick}
                    className="bg-light-blue hover:bg-dark-blue text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg shadow-lg"
                  >
                    E Books
                  </button>

                  <EBooksModal isOpen={isModalOpen} onClose={handleCloseModal} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
