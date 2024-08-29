import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
      <div className="w-full h-[100vh]  bg-white text-black ">
        <div className="h-[70vh] w-full flex justify-center relative">
          <div className="w-[80vh] h-[80vw] py-14 left-24 absolute">
            <Image src="/aboutietimg.png" width={1500} height={20} alt="" />
          </div>
          <div className="flex flex-row items-center  mt-36 px-28 overflow-hidden w-[90%] h-3/4 border-[#3B799E] border-4">
            <div className="w-3/4 h-1/2 pl-28 bg-black"></div>
            <div className="flex flex-col pl-8 ml-56">
              <h1 className="text-5xl pb-10 ">About-IET</h1>
              <p className=" break-words">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                non natus blanditiis voluptate suscipit! Eligendi mollitia
                laudantium deserunt tempora error illum obcaecati libero enim,
                veniam quo, expedita vel magni excepturi? Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Enim aut at iure
                consequatur. Pariatur libero repellendus voluptates beatae
                consequuntur, off
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About