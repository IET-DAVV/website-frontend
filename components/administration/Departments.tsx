import React from "react";
import { departments } from "@/constants/administration/data";
import Image from "next/image";

const Departments = () => {
  return (
    <div className="space-y-12 px-4 md:px-16 py-6">
      {departments.map((departments, index) => (
        <div key={departments.email}>
          <div className="mx-0 md:mx-40 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="mb-5 text-3xl font-semibold text-[#1D1D1D]">
                {departments.name}
              </h2>
              <div className="flex flex-col gap-3 text-lg text-[#686868]">
                <p className="text-gray-700">
                  <span className="font-semibold text-[#3E3E3E]">
                    Designation :-{" "}
                  </span>
                  {departments.designation}
                </p>
                <p>
                  <span className="font-semibold text-[#3E3E3E]">
                    Background:-{" "}
                  </span>
                  {departments.background}
                </p>
                <p>
                  {" "}
                  <span className="font-semibold text-[#3E3E3E]">
                    Research Interests:-{" "}
                  </span>
                  {departments.researchInterests}
                </p>
                <p className="flex gap-4">
                  {" "}
                  <span className="font-semibold text-[#3E3E3E]">
                    Research Interests:-{" "}
                  </span>
                  <div>
                    <p className="text-gray-700">
                      <span className="font-normal text-[#3E3E3E]">
                        Email:-{" "}
                      </span>
                      <a
                        href={`mailto:${departments.email}`}
                        className="text-[#067798] text-lg underline"
                      >
                        {departments.email}
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <span className="font-normal text-[#3E3E3E]">
                        Phone:-{" "}
                      </span>
                      <a
                        href={`tel:${departments.phone}`}
                        className="text-[#067798] text-lg  underline"
                      >
                        {departments.phone}
                      </a>
                    </p>
                  </div>
                </p>
              </div>
            </div>
            <Image
              src={departments.image}
              alt={departments.name}
              className="border-4 border-[#686868] w-48 h-48 object-cover"
            />
          </div>
          <div className="w-[95%] h-[0.5px] bg-light-gray m-auto my-6" />
        </div>
      ))}
    </div>
  );
};

export default Departments;
