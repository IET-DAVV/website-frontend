'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import EBooksModal from './EbookPopup';

const LibraryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleEBooksClick = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#CCCCCC80] backdrop-blur-md py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top border line */}
        <div className="border-t border-black mb-12"></div>

        {/* Title */}
        <h1 className="text-center text-[80px] font-newyork leading-[120px] font-manrope text-black mb-12">
          LIBRARY
        </h1>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left content */}
          <div className="flex-1 text-black text-base leading-relaxed space-y-6 max-w-2xl">
            <p>
              The IET DAVV Central Library is a newly renovated, state-of-the-art
              facility designed to support students' academic and research endeavors.
              Relocated from its original 1997 space in A-Block, it now features modern
              interiors, comfortable reading areas, and individual study desks backed
              by high-speed Wi-Fi and digital access.
            </p>
            <p>
              With an expansive collection of physical and digital resources, the library
              ensures students have seamless access to scholarly materials. It also offers
              e-books, journals, and access to national digital libraries to enhance the
              academic journey of every student.
            </p>
          </div>

          {/* Right image and button */}
          <div className="flex flex-col items-center">
            <Image
              src="/infrastructure/library aerial.png"
              alt="IET DAVV Central Library"
              width={745}
              height={371}
              className="rounded-lg shadow-md"
              priority
            />
            <button
              onClick={handleEBooksClick}
              className="mt-6 bg-[#008ECC] text-white text-lg font-medium px-8 py-3 rounded-md hover:bg-[#007bb3] transition"
            >
              E Books
            </button>
            <EBooksModal isOpen={isModalOpen} onClose={handleCloseModal} />
          </div>
        </div>

        {/* Bottom border line */}
        <div className="border-t border-black mt-12"></div>
      </div>
    </div>
  );
};

export default LibraryPage;
