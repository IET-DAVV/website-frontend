import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 w-full">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
          variants={variants}
          className="w-full"
        >
          <Image
            src={image}
            width={400}
            height={400}
            alt={`Club ${index}`}
            className="w-full aspect-square object-cover rounded-xl shadow-md"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGallery;
