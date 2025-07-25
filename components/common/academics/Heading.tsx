import React from "react";
import "@/app/globals.css"; // ensure this includes font-newyork, etc.

interface HeadingProps {
  title: string;
  className?: string; // allows user to override styles like alignment, size, etc.
}

const Heading: React.FC<HeadingProps> = ({ title, className = "" }) => {
  return (
    <h1
      className={`
        text-black font-newyork font-extralight
        text-4xl sm:text-7xl
        font-mono
        ${className}
      `}
    >
      {title}
    </h1>
  );
};

export default Heading;
