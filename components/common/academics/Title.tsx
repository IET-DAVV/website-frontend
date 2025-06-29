import React from "react";
import "@/styles/fonts.css"; // 👈 Font definitions
import "@/app/globals.css";

interface TitleProps {
  title: string;
  className?: string; // 👈 Optional prop for custom styles
}

const Title: React.FC<TitleProps> = ({ title, className = "" }) => {
  return (
    <h1
      className={`font-NewYork font-normal  text-center text-[#06779B] ${className}`}
    >
      {title}
    </h1>
  );
};

export default Title;
