import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <div className="w-full h-full">
      <Image
        src={"/landing/landing.png"}
        className="w-screen h-full"
        width={1000}
        height={1000}
        alt=""
      />
    </div>
  );
};

export default Landing;
