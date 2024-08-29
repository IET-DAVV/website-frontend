import Navbar from "@/containers/navbar/Navbar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[100vh]  bg-white text-black ">
           <div className="h-[70vh] w-full flex justify-center relative">
            <div className="w-[80vh] h-[80vw] py-14 left-24 absolute"><Image  src="/aboutietimg.png" width={1500} height={20} alt=""/></div>
            <div className="flex flex-row items-center  mt-36 px-28 overflow-hidden w-[90%] h-3/4 border-[#3B799E] border-4">
                <div className="w-3/4 h-1/2 pl-28 bg-black"></div>
                <div className="flex flex-col ml-56 pl-8 ml-auto">
                <h1 className="text-5xl pb-10 ">About-IET</h1>
                <p className=" break-words">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae non natus blanditiis voluptate suscipit! Eligendi mollitia laudantium deserunt tempora error illum obcaecati libero enim, veniam quo, expedita vel magni excepturi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim aut at iure consequatur. Pariatur libero repellendus voluptates beatae consequuntur, off
                 </p>
                </div>
            </div>
           </div>
      </div>

       {/* About IET  */}
      <div className="flex flex-col h-[80vh] w-full bg-[#3B799E]">
        <div className="text-center h-1/6 text-5xl p-10 pt-14 font-light"><h1>IET HISTORY</h1></div>

        <div className="flex pt-20 px-10 " >
          <div className="w-1/4 px-10 flex flex-col relative"><p className="h-48 text-center">Devi Ahilya University within the framework of its UTD opened aself-financing engineering Institute named Institute of Engineering & Technology (IET) that started its academic journey with glorious dreams on04 September 1996</p>
             <div className="flex justify-center">
             <div className="flex  justify-center items-center text-[#3B799E] text-4xl font-bold w-16 h-16 bg-white rounded-full font-color-[#3B799E] mt-14">1
             </div>
             </div>
             <div className="h-[1px] w-48 bg-white bottom-7 ml-44  absolute" > </div>
          </div>
          <div className="w-1/4 px-10 relative"><p className="h-48 text-center">IET was started with a total intake of 90 students in three branches of Bachelor of Engineering (BE) - Mechanical Engineering, Computer Engineering and Electronics & Instrumentation Engineering having 30 students each.</p>
          <div className="flex justify-center ">
             <div className="flex  justify-center items-center text-[#3B799E] text-4xl font-bold w-16 h-16 bg-white rounded-full font-color-[#3B799E] mt-14 mx-4">2
             </div>
             </div>
             <div className="h-[1px] w-48 bg-white bottom-7 ml-44  absolute" > </div>
             <div className="h-[1px] w-28 bg-white bottom-7 absolute" > </div> 
          </div>
            <div className="w-1/4 px-10 relative"><p className="h-48 text-center">IET is academically autonomous with flexible and modern curriculum in all  six branches of engineering. AICTE has approved 180 additional seats making total intake of 540 students per year.</p>
            <div className="flex justify-center ">
             <div className="flex  justify-center items-center text-[#3B799E] text-4xl font-bold w-16 h-16 bg-white rounded-full font-color-[#3B799E] mt-14">3
             </div>
             </div>
             <div className="h-[1px] w-48 bg-white bottom-7 ml-44  absolute" > </div>
             <div className="h-[1px] w-28 bg-white bottom-7 absolute" > </div>
            </div>
          <div className="w-1/4 px-10 relative"><p className="h-48 text-center">IET became PG Institute in 2002 and presently it is conducting ME Programmes with six specializations. In year 2006, MSc program in Applied Mathematics was also started.</p>
          <div className="flex justify-center ">
             <div className="flex  justify-center items-center text-[#3B799E] text-4xl font-bold w-16 h-16 bg-white rounded-full font-color-[#3B799E] mt-14">4
             </div>
             </div>
             <div className="h-[1px] w-28 bg-white bottom-7 absolute" > </div>
          </div>
        </div>


        <div className="w-full flex items-center justify-between container" >
          
         
          
         
          
         
          
        </div>
        


      </div>

      
      
    </div>
  );
};

export default page;
