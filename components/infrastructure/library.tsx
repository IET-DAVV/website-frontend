"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import EBooksModal from './EbookPopup';

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }
  })
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, rotate: -1 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0, 
    transition: { duration: 1, ease: "easeOut" } 
  }
};

const lineExpand: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1, ease: "easeInOut" } }
};

const InfrastructureSection = ({ 
  title, children, imageSrc, imageAlt, reverse = false, showLine = true 
}: { 
  title: string, children: React.ReactNode, imageSrc: string, imageAlt: string, reverse?: boolean, showLine?: boolean 
}) => (
  <section className="max-w-7xl mx-auto mb-24 px-4 overflow-hidden">
    {showLine && (
      <motion.div 
        className="border-t border-black mb-12 origin-left" 
        variants={lineExpand} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
      />
    )}
    
    <motion.h2 
      className="text-center text-[50px] md:text-[80px] font-newyork leading-tight md:leading-[120px] text-black mb-12 uppercase"
      variants={fadeInUp} initial="hidden" whileInView="visible" custom={0.1} viewport={{ once: true }}
    >
      {title}
    </motion.h2>

    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center lg:items-start gap-12`}>
      <motion.div 
        className="flex-1 space-y-6 text-black text-base leading-relaxed max-w-2xl"
        variants={fadeInUp} initial="hidden" whileInView="visible" custom={0.3} viewport={{ once: true }}
      >
        {children}
      </motion.div>

      <div className="flex flex-col items-center mx-auto lg:mx-0">
        <motion.div 
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
          className="relative overflow-hidden rounded-lg shadow-xl cursor-pointer"
        >
          {/* Subtle Overlay Shine Effect on Hover */}
          <motion.div 
            className="absolute inset-0 bg-white/10 z-10 opacity-0"
            whileHover={{ opacity: 1, x: ['-100%', '100%'] }}
            transition={{ duration: 0.8 }}
          />
          <Image 
            src={imageSrc} 
            alt={imageAlt} 
            width={745} 
            height={371} 
            className="object-cover" 
            priority 
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const UnifiedInfrastructurePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#CCCCCC80] backdrop-blur-md py-16 min-h-screen">
      
      {/* 1. Library Section */}
      <InfrastructureSection 
        title="Library" 
        imageSrc="/infrastructure/library/library_aerial.png" 
        imageAlt="IET DAVV Central Library"
        showLine={true}
      >
        <p>
          The IET DAVV Central Library is a newly renovated, state-of-the-art
          facility designed to support students&apos; academic and research endeavors.
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
        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 bg-[#008ECC] text-white text-lg font-medium px-8 py-3 rounded-md shadow-md hover:bg-[#007bb3] transition"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          E Books
        </motion.button>
      </InfrastructureSection>

      <EBooksModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* 2. Incubation Centre Section */}
      <InfrastructureSection 
        title="Incubation Center" 
        imageSrc="/infrastructure/incubation/incubation aerial.jpg" 
        imageAlt="DAVV Incubation Centre Building"
        reverse={true}
        showLine={false}
      >
        <p>
          Devi Ahilya Vishwavidyalaya, Incubation Centre (DAVV-IC) is a
          Section 8 company designed to foster a vibrant ecosystem of
          technology incubation and entrepreneurship. By aligning with
          national priorities, DAVV-IC aims to generate employment, create
          wealth, and build successful businesses. The center provides a
          nurturing environment for emerging startups, particularly those
          originating from academia, to help them transition from innovative
          ideas to scalable, sustainable businesses. DAVV-IC is registered
          under CIN No. U80901MP2022NPL063927 and has obtained 12A & 80G
          certificates for tax exemptions and CSR registration.
        </p>
        <p>
          The DAVV Incubation Forum aims to connect budding entrepreneurs,
          startups, and mentors by providing resources, networking
          opportunities, and a platform to showcase innovative ideas.
        </p>
        <Link href="https://davvincubationcentre.com/" target="_blank" rel="noopener noreferrer">
          <motion.button 
            className="mt-6 bg-[#008ECC] text-white text-lg font-medium px-8 py-3 rounded-md shadow-md hover:bg-[#007bb3] transition"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore More
          </motion.button>
        </Link>
      </InfrastructureSection>

      <motion.div 
        className="max-w-7xl mx-auto border-t border-black mt-12" 
        variants={lineExpand} initial="hidden" whileInView="visible" viewport={{ once: true }} 
      />
    </div>
  );
};

export default UnifiedInfrastructurePage;