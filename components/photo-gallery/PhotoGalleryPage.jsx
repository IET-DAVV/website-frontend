"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react"; 
// ⚠️ Ensure this path is correct
import { galleryImages, galleryCategories } from "@/constants/gallery/galleryData";
import "@/styles/fonts.css";
import Title from "../common/academics/Title";

const PhotoGalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-7xl mx-auto px-4 py-12"
    >
      {/* Page Headings */}
      <Title
        title="Our Photo Gallery"
        className="text-5xl leading-tight font-newyork mb-0 text-center text-[#0077C2]"
      />
      <Title
        title="(Moments & Memories)"
        className="text-3xl font-newyork leading-tight mb-10 text-center text-gray-600"
      />

      {/* Category Filter Buttons (Uses Maroon Accent) */}
      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
            selectedCategory === "All"
              ? "bg-[#0077C2] text-white shadow-md"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          All
        </button>
        {galleryCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              selectedCategory === category
                ? "bg-[#0077C2] text-white shadow-md"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Image Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredImages.map((image) => (
          <motion.div
            key={image.id}
            variants={itemVariants}
            layout
            // Main card container
            className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform hover:scale-[1.01] transition-transform duration-300 ease-out"
          >
            {/* Image section */}
            <div className="relative w-full h-56 md:h-64 overflow-hidden rounded-t-xl">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              
              {/* Tag (Uses Primary Blue Accent) */}
              {image.tag && (
                <div 
                  className="absolute top-4 left-4 bg-[#0077C2] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-md"
                >
                  <Award size={14} /> {image.tag}
                </div>
              )}

              {/* Date */}
              {image.date && (
                <div className="absolute top-4 right-4 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {image.date}
                </div>
              )}
            </div>

            {/* Text Content Area - Light Gray Background (Matches the less-intrusive theme) */}
            <div className="p-5 bg-gray-50"> 
              <h3 className="text-xl font-bold text-[#000000] mb-2 leading-tight"> {/* Uses Maroon for prominence */}
                {image.title}
              </h3>
              <p className="text-gray-700 text-sm line-clamp-3">
                {image.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PhotoGalleryPage;