"use client";
import React from "react";
import { directorData } from "@/constants/administration/data";
import Image from "next/image";

const Director: React.FC = () => {
  const {
    name,
    image,
    designation,
    contact,
    qualifications,
    experience,
    interests,
    publications,
    responsibilities,
  } = directorData;

  return (
    <div className="mt-20 space-y-4 flex flex-col gap-6">
      <div className="mx-40 flex justify-between items-center">
        <div>
          <h2 className="mb-5 text-3xl font-semibold text-[#1D1D1D]">{name}</h2>
          <div className="flex flex-col text-lg text-[#686868]">
            {designation.map((line, index) => (
              <p key={index} className="text-gray-700 ">
                {line}
              </p>
            ))}
          </div>
        </div>
        <Image
          width={48}
          height={48}
          src={image}
          alt={name}
          className=" border-4 border-[#686868] w-48 h-48 object-cover"
        />
      </div>

      <div className="h-[0.5px] w-[85%] bg-light-gray m-auto" />

      <div className="mx-40 flex justify-start items-center gap-20">
        <h2 className="text-3xl font-semibold text-[#1D1D1D]">Contacts :-</h2>
        {contact.email && (
          <p>
            <strong className="text-xl font-normal text-[#1D1D1D] ">
              Email:
            </strong>{" "}
            <a
              href={`mailto:${contact.email}`}
              className="text-[#067798] text-lg underline"
            >
              {contact.email}
            </a>
          </p>
        )}
        {contact.phone && (
          <p>
            <strong className="text-xl font-normal text-[#1D1D1D] ">
              Phone:
            </strong>{" "}
            <a
              href={`tel:${contact.phone}`}
              className="text-[#067798] text-lg  underline"
            >
              {contact.phone}
            </a>
          </p>
        )}
      </div>
      <div className="h-[0.5px] w-[85%] bg-light-gray m-auto" />

      <div className="mx-40">
        <h2 className="text-3xl mb-5 font-semibold text-[#1D1D1D]">
          Educational Qualifications
        </h2>
        <div className="flex flex-col text-lg text-[#686868]">
          {qualifications.map((q) => (
            <p key={q}>{q}</p>
          ))}
        </div>
      </div>
      <div className="h-[0.5px] w-[85%] bg-light-gray m-auto" />

      <div className="mx-40">
        <h3 className="text-3xl mb-5 font-semibold text-[#1D1D1D]">
          Experience
        </h3>
        <p className=" text-lg text-[#686868]">{experience}</p>
      </div>
      <div className="h-[0.5px] w-[85%] bg-light-gray m-auto" />
      <div className="mx-40">
        <h3 className="text-3xl mb-5 font-semibold text-[#1D1D1D]">
          Areas of Interest:
        </h3>
        <div className="text-lg text-[#686868]">
          {interests.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
      <div className="h-[0.5px] w-[85%] bg-light-gray m-auto" />

      <div className="mx-40">
        <h3 className="text-3xl mb-5 font-semibold text-[#1D1D1D]">
          Research & Publication Profile
        </h3>
        <div className="text-lg text-[#686868]">
          {publications.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
      <div className="h-[0.5px] w-[85%] bg-light-gray m-auto" />
      <div className="mx-40">
        <h3 className="text-3xl mb-5 font-semibold text-[#1D1D1D]">
          Responsibilities Held:
        </h3>
        <div className="text-lg text-[#686868]">
          {responsibilities.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
      <div className="h-[0.5px] w-[85%] bg-light-gray m-auto" />
    </div>
  );
};

export default Director;
