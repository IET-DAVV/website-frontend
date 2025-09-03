"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import EBooksModal from './EbookPopup';
import { motion } from 'framer-motion';

const LibraryPage = () => {
const [isModalOpen, setIsModalOpen] = useState(false);

const handleEBooksClick = () => setIsModalOpen(true);
const handleCloseModal = () => setIsModalOpen(false);

return (
<div className="bg-[#CCCCCC80] backdrop-blur-md py-16 px-8">
<div className="max-w-7xl mx-auto">
{/* Top border */}
<motion.div
className="border-t border-black mb-12"
initial={{ scaleX: 0 }}
whileInView={{ scaleX: 1 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
/>

    {/* Animated Title */}
    <motion.h1
      className="text-center text-[80px] font-newyork leading-[120px] font-manrope text-black mb-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      LIBRARY
    </motion.h1>

    {/* Main content */}
<motion.div
  className="flex flex-col lg:flex-row items-start gap-12"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
  viewport={{ once: true }}
>
  {/* Left (Image Section) */}
  <div className="flex flex-col items-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Image
  src="/infrastructure/library_aerial.png"
        alt="IET DAVV Central Library"
        width={745}
        height={371}
        className="rounded-lg shadow-md"
        priority
      />
    </motion.div>
    <motion.button
      onClick={handleEBooksClick}
      className="mt-6 bg-[#008ECC] text-white text-lg font-medium px-8 py-3 rounded-md hover:bg-[#007bb3] transition"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      E Books
    </motion.button>
    <EBooksModal isOpen={isModalOpen} onClose={handleCloseModal} />
  </div>

  {/* YEH CLOSING TAG YAHAN GALAT THA */}
  {/* </motion.div> */}

  {/* Right (Text Section) */}
  <div className="flex-1 text-black text-base leading-relaxed space-y-6 max-w-2xl">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      The IET DAVV Central Library is a newly renovated, state-of-the-art
      facility designed to support students&apos; academic and research endeavors.
      Relocated from its original 1997 space in A-Block, it now features modern
      interiors, comfortable reading areas, and individual study desks backed
      by high-speed Wi-Fi and digital access.
    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      With an expansive collection of physical and digital resources, the library
      ensures students have seamless access to scholarly materials. It also offers
      e-books, journals, and access to national digital libraries to enhance the
      academic journey of every student.
    </motion.p>
  </div>
</motion.div>
      </div>
    {/* Bottom border */}
    <motion.div
      className="border-t border-black mt-12"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    />
  </div>
);
};

export default LibraryPage;