"use client"
import React from 'react';
import Masonry from "react-responsive-masonry";
import { imagesMap } from '@/constants/events/data';
import Image from 'next/image';

const Events: React.FC = () => {
  return (
    <div className='bg-black flex justify-between items-center h-screen overflow-hidden'>
      <div className='flex flex-col ml-40'> 
        <div className="text-[#6b6b6b] text-[100px] font-normal leading-[100px]">
          IET
        </div>
        <div className="text-[#f9f6ff] text-[150px] font-normal leading-[150px] ml-[73px]">
          Events
        </div>
      </div>
      
  
      <div className="w-full -mr-40 ml-20">
        <Masonry 
          columnsCount={3} 
          gutter="20px" 
        >  
          <div className="bg-light-gray h-[300px] rounded-lg w-full" />
          <div className="bg-light-gray h-[150px] rounded-lg w-full" />
          <div className="bg-light-gray h-[300px] rounded-lg w-full" />
          <Image src={imagesMap["image1"]} alt="Event 1" width={300} height={300} className="rounded-lg w-full h-[300px] object-cover" />
          <Image src={imagesMap["image2"]} alt="Event 2" width={300} height={300} className="rounded-lg w-full h-[300px] object-cover" />
          <div className="bg-light-gray h-[300px] rounded-lg w-full" />
          <div className="bg-light-gray h-[300px] rounded-lg w-full" />
          <Image src={imagesMap["image3"]} alt="Event 3" width={300} height={300} className="rounded-lg w-full h-[300px] object-cover" />
          <div className="bg-light-gray h-[300px] rounded-lg w-full" />
        </Masonry>
      </div>
    </div>
  );
};

export default Events;