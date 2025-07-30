import React from "react";
import "@/app/globals.css";

interface TitleProps {
  title: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1
      className={`mt-2 font-newyork font-normal text-[#3B7A9E] text-center mb-4
        text-4xl leading-[44px]
        sm:text-5xl sm:leading-[60px]
        md:text-6xl md:leading-[80px]
        lg:text-[80px] lg:leading-[120px]`}
    >
      {title}
    </h1>
  );
};

export default Title;
