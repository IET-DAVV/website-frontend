"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

// The Subject interface
interface Subject {
  code: string;
  name: string;
  credits: string;
  pdfLink: string;
}

interface AccordionProps {
  subject: Subject;
  isOpen: boolean;
  onToggle: () => void;
}

const SyllabusAccordion: React.FC<AccordionProps> = ({ subject, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-800 hover:bg-gray-100 focus:outline-none transition-colors duration-300"
      >
        {/* Left side: Subject Code, Name, and Credits */}
        <div className="flex items-center text-base md:text-lg">
          <span className="text-blue-600 font-bold mr-4 w-20 md:w-24 flex-shrink-0">{subject.code}</span>
          {/* UPDATED LINE: Added credits next to the subject name */}
          <span className="text-gray-800">{`${subject.name} (Credits: ${subject.credits})`}</span>
        </div>
        
        {/* Right side: Icon only */}
        <div className="flex items-center pl-4">
          {isOpen ? <FaMinus className="text-blue-600" /> : <FaPlus className="text-gray-500" />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-5 bg-blue-50/50 flex flex-col items-center gap-4">
              <a
                href={subject.pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="self-end bg-black text-white p-2 rounded-full hover:scale-110 transition-transform"
                aria-label={`Download syllabus for ${subject.name}`}
              >
                <MdOutlineFileDownload size={24} />
              </a>
              <iframe
                src={subject.pdfLink}
                title={`Syllabus for ${subject.name}`}
                className="w-full h-[600px] border-2 border-gray-300 rounded-lg shadow-xl"
              ></iframe>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SyllabusAccordion;