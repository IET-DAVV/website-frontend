import React from 'react'
import { antiRaggingDiscipline } from "@/constants/antiragging/data";

const Discipline
  = () => {
    return (
      <div className='px-36 pb-32'>
        <h2 className='w-[50%] mx-auto mt-20 text-2xl font-bold text-center text-[#3E3E3E]'>{antiRaggingDiscipline.subtitle}</h2>

        <h2 className='w-[50%] mx-auto my-10 mb-4 text-5xl font-bold text-center text-[#06779B]'>{antiRaggingDiscipline.title}</h2>

        <div className='max-w-5xl text-center font-bold text-lg w-full text-[#686868] mx-auto'>
          {antiRaggingDiscipline.orderDescription}
        </div>

        <h2 className='w-[50%] mx-auto my-20 text-2xl font-bold text-center text-[#06779B]'>{antiRaggingDiscipline
          .title2}</h2>
        <div className="border divide-y divide-[#959595] max-w-5xl w-full mx-auto border-[#959595] ">
          {antiRaggingDiscipline.section2.map((item, idx) => (
            <div
              key={idx}
              className=""
            >
              <span className='flex justify-between px-10 py-5 relative after:absolute after:w-[1px] after:bg-[#959595] after:top-0 after:right-[50%] after:h-full'>
                <div className='w-full flex justify-between'>
                  <div className="text-lg w-[45%] font-medium text-[#06779B]">
                    {item.label}
                  </div>
                  <div className="text-lg w-[45%] font-medium">
                    {item.subLabel}
                  </div>
                </div>
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

export default Discipline

