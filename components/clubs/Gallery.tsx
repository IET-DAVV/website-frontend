import React from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 justify-items-center">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Club ${index}`}
          className="h-[400px] w-[400px] object-cover rounded-lg"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
