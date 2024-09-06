"use client";
import React, { Component, useState } from "react";
import { achievements } from "@/constants/landing/achievements";
import CustomSlide from "./CustomSlide";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
// Dynamically import react-slick to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

function SampleNextArrow(props: any) {
  return (
    <IoArrowForward
      color="white"
      className="absolute top-1/2 right-1 z-10 transform -translate-y-1/2 cursor-pointer border-2 rounded-full p-2 w-10 h-10"
      onClick={props.onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  return (
    <IoArrowBack
      color="white"
      className="absolute top-1/2 left-1 z-10 transform -translate-y-1/2 cursor-pointer border-2 rounded-full p-2 w-10 h-10"
      onClick={props.onClick}
    />
  );
}

const Slides = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const [data, setData] = useState<object[]>(achievements);
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        {achievements.map((value: any, id) => {
          return (
            <CustomSlide
              key={id}
              title={value.title}
              year={value.year}
              imgAddress={value.imgAddress}
              description={value.description}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Slides;
