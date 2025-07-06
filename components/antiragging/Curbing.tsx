import React from 'react'
import { antiRaggingCurbing } from "@/constants/antiragging/data";

const Curbing = () => {
  return (
    <div className='px-36 pb-32'>
      <h2 className='w-[50%] mx-auto my-20 text-2xl font-bold text-center text-[#06779B]'>{antiRaggingCurbing.title}</h2>

      <div className='border divide-y divide-[#959595] max-w-5xl w-full mx-auto border-[#959595]'>
        <div className="flex justify-between px-10 py-5 relative after:absolute after:w-[1px] after:bg-[#959595] after:top-0 after:right-[23%] after:h-full"
        >
          <span className="text-lg font-medium">
            {antiRaggingCurbing.sectino1.label}
            <span className="text-[#06779B] text-lg font-medium">
              {antiRaggingCurbing.sectino1.extralabel}
            </span>
          </span>
          <a
            href={antiRaggingCurbing.sectino1.file}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#06779B] text-white px-10 py-2 rounded-[6px] inline-flex items-center gap-1 text-sm"
          >
            Download
          </a>
        </div>
      </div>

      <h2 className='w-[50%] mx-auto my-20 text-2xl font-bold text-center text-[#06779B]'>{antiRaggingCurbing.title2}</h2>
      <div className="border divide-y divide-[#959595] max-w-5xl w-full mx-auto border-[#959595] ">
        {antiRaggingCurbing.section2.map((item, idx) => (
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
                  {item.subLabel}<span className='text-[#F51C1C]'>{item.Highlight}</span>
                </div>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Curbing
