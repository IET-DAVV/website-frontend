import React from "react";
import { Playfair } from "next/font/google";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1
      className={`${playfair.className} text-6xl leading-[150px] font-bold mb-4 text-center text-[#06779B]`}
    >
      {title}
    </h1>
  );
};

export default Title;
