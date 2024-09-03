import Image from "next/image";
import React from "react";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="grid grid-cols-2 gap-10 place-items-center">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          width={400}
          height={400}
          alt={`Club ${index}`}
          className="h-96 w-96 object-cover rounded-lg"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
