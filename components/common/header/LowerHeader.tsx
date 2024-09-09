import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { CiBullhorn } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";

const LowerHeader = () => {
  return (
    <div className="bg-[#F6EEEE] bg-opacity-40 w-full h-10 flex items-center justify-start">
      <div className="relative flex items-center justify-center h-full">
        <Image
          src="/landing/marquee.svg"
          alt="marquee"
          width={300}
          height={64}
          className="w-48"
        />
        <div className="absolute flex items-center justify-center text-sm space-x-3 left-2">
          <CiBullhorn className="text-white text-xl" strokeWidth={1} />
          <p className="font-sans text-white font-medium">Announcements</p>
        </div>
      </div>
      <div className="flex items-center justify-center h-full w-fit select-none">
        <Marquee pauseOnHover={true}>
          <div className="flex items-center justify-center space-x-3">
            <p className="font-sans text-black font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit,
              tempora itaque repudiandae dolores fuga consectetur cupiditate
              laborum odit dolorem, repellendus praesentium iure rem, nesciunt
              alias illum autem dolore asperiores eligendi natus. Culpa sunt
              quibusdam natus, maiores minus necessitatibus obcaecati accusamus
              eius quos magnam ad, sint iste repudiandae quidem asperiores.
              Reiciendis eos assumenda voluptatibus aut voluptates dolor. Autem
              corporis quidem suscipit voluptatum nesciunt? Saepe dolores
              quisquam nemo quam sint ut, eaque dicta sunt illum maxime maiores
              qui explicabo nobis non! Nemo ut dolorum non veniam repellat atque
              incidunt, ipsa mollitia
            </p>
          </div>
        </Marquee>
      </div>
      <IoMenu className="text-black text-xl m-2" />
    </div>
  );
};

export default LowerHeader;
