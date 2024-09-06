import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

interface CardProps {
  branch: string;
  type: string;
  link: string;
}

const Card = ({ branch, type, link }: CardProps) => {
  console.log("this is from card", branch);
  return (
    <div className="flex flex-col justify-between border-[1.508px] border-solid border-[#110909] rounded-lg h-48">
      <div className="flex justify-between text-black items-center px-5 py-8  ">
        <h2 className="text-2xl ">{branch}</h2>
        <BsArrowUpRightCircle size={24} />
      </div>
      <div className="px-5 pb-2">
        <h2 className="border border-[#110909] rounded-full border-solid text-black text-center w-fit px-2">
          {type}
        </h2>
      </div>
    </div>
  );
};

export default Card;
