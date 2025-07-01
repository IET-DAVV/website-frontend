import React from "react";
<<<<<<< HEAD
import "@/styles/fonts.css"; // 👈 Import your font definitions
import "@/app/globals.css";

interface TitleProps {
  title: string;
  className?: string;
=======
import { Playfair } from "next/font/google";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

interface TitleProps {
  title: string;
>>>>>>> origin/main
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1
<<<<<<< HEAD
      className={`font-newyork text-[80px] leading-[120px] font-normal mb-4 text-center text-[#06779B]`}
=======
      className={`${playfair.className} text-6xl leading-[150px] font-bold mb-4 text-center text-[#06779B]`}
>>>>>>> origin/main
    >
      {title}
    </h1>
  );
};

export default Title;
