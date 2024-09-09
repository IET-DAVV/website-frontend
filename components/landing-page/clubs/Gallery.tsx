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
    <div className="grid grid-cols-2 gap-10 place-items-center">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial="hidden"
          animate="visible"
          custom={index}
          variants={variants}
        >
          <Image
            key={index}
            src={image}
            width={400}
            height={400}
            alt={`Club ${index}`}
            className="h-96 w-96 object-cover rounded-lg"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGallery;
