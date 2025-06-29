import React from "react";
import "@/styles/fonts.css"; // 👈 Import your font definitions
import "@/app/globals.css";

interface TitleProps {
  title: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1
      className={`font-newyork text-[80px] leading-[120px] font-normal mb-4 text-center text-[#06779B]`}
    >
      {title}
    </h1>
  );
};

export default Title;
