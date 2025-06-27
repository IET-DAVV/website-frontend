import React from "react";

// You might want to pass children here if you intend for this to be a layout component
interface HeroSectionProps {
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('image-campus-aerial-view.jpg')" }}
    >
      {/* The image-campus-aerial-view.jpg should be in your public folder or imported correctly */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      {/* Children will be rendered here, which in App.tsx will be the grid layout */}
      {children}
    </div>
  );
};

export default HeroSection;
