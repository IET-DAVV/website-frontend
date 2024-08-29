import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className=" p-12 grid grid-cols-2 w-screen h-full bg-[#3B7A9E]">
      <div className=" px-12">
        <h4 className="flex justify-start items-center">
          <svg
            width="100"
            height="4"
            viewBox="0 0 281 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2.31641"
              y1="1.99988"
              x2="278.109"
              y2="1.99988"
              stroke="#F9F6FF"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>{" "}
          Welcome to{" "}
        </h4>
        <h1 className="py-4 font-extrabold text-4xl">IET-DAVV</h1>
        <p className="font-extralight font-sans"> 
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.It has survived not only five centuries, remaining
          essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p className="flex  font-thin py-4">
          <span className="pt-1"> EXPLORE MORE </span>
          <button type="button" className=" px-4  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <span className="sr-only">Icon description</span>
          </button>{" "}
        </p>
      </div>
      <div className=" flex justify-center items-center px-24">
        <Image
          src={"/mblock.png"}
          alt="mblock-img"
          width={1000}
          height={1000}
          className="rounded-lg w-72 h-72"
        />
      </div>
    </div>
  );
};

export default About;
