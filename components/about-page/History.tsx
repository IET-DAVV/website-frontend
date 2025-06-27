import { history, timeline } from "@/constants/about-page/about";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import React from "react";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const History = () => {
  return (
    <div>
      <div className="flex flex-col space-y-20 h-full p-20 w-full bg-[#3B799E]">
        <div className="text-center text-5xl font-light">
          <h1 className={`${playfair.className} text-white font-extralight`}>
            IET HISTORY
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-10 mx-20">
          {history.map((item: any) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              <h1 className="text-white font-extralight">{item.title}</h1>
            </div>
          ))}
          <div className="col-span-4 mx-auto md:px-20">
            <Image
              src={timeline}
              alt="history"
              width={1000}
              height={1000}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
