import About from "@/components/about-page/About";
import History from "@/components/about-page/History";
import React from "react";
import Director from "@/components/about-page/Director";
import VC from "@/components/about-page/VC";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
const page = () => {
  return (
    <>
      <div className=" overflow-hidden bg-white">
        <About />
        <History />
        <div className="p-5 flex flex-col space-y-5">
          <Director />
          <VC />
        </div>
      </div>
    </>
  );
};

export default page;
