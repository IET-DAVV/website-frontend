'use client'
import React, { useState } from "react";
import EBooksModal from "./EbookPopup";

const LibraryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-black tracking-wide font-newyork">
          LIBRARY
        </h1>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
         {/* Image as background */}
            <div
              className="relative h-[90vh] bg-cover bg-center"
              style={{
                backgroundImage: `url("/infrastructure/library/library aerial.jpg")`,
              }}
            >
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
           
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black bg-opacity-40" />

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full px-6 sm:px-8 lg:px-12 flex flex-col items-center text-center space-y-6">
                  <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed font-light max-w-4xl">
                    The IET DAVV Central Library is a newly renovated,
                    state-of-the-art facility designed to support students'
                    academic and research endeavors. Relocated from its original
                    1997 space in A-Block, it now features modern interiors,
                    comfortable reading areas, and individual study desks backed
                    by high-speed Wi-Fi and digital access.
                  </p>

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
