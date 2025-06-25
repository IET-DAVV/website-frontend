"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { landmarks } from "@/constants/about-page/landmarks";
import Customslide from "./Customslide";
const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});
function Landmarks() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
  };
  return (
    <div className="slider-container my-20">
      <Slider {...settings}>
        {landmarks.map((value: any, id) => {
          return (
            <Customslide
              key={id}
              id={value.id}
              heading={value.heading}
              paragraph={value.paragraph}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default Landmarks;
