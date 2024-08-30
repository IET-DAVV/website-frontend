import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Card = ({ branch, type, link }:any) => {
  console.log("this is from card" , branch)
  return (
    <div className="flex flex-col justify-between border border-solid border-black rounded-lg h-36 ">
      <div className="flex justify-between text-black items-center px-5 py-8  ">
        <h2>{branch}</h2>
        <BsArrowUpRightCircle className="h-full" />
      </div > 
      <div className="px-5 pb-2 ">
      <h2 className="border border-black rounded-full border-solid text-black text-center w-20 px-1" >{type}</h2>
      </div>
    </div>
  );
};

export default Card;
