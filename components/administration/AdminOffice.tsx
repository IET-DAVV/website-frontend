"use client";
import React from "react";
import { admindata } from "@/constants/administration/data";
import Image from "next/image";

const AdminOffice = () => {
  const {
    name,
    image,
    designation,
    contact,
    AcademicDetails,
    AdministrativeExperience,
    TeachingExperience,
    PapersPresented,
  } = admindata;
  return (
    <div className="mt-20 space-y-4 flex flex-col gap-6">
      <div className="mx-40 flex justify-between items-center">
        <div>
          <h2 className="mb-5 text-3xl font-semibold text-[#1D1D1D]">{name}</h2>
          <div className="flex flex-col text-lg text-[#686868]">
            <p className="text-gray-700 w-[90%] ">{designation}</p>
          </div>
        </div>
        <div className=" relative w-[50%] h-48">
          <Image
            src={image}
            fill
            alt={name}
            className="border-4 border-[#686868] object-cover"
          />
        </div>
      </div>
      <div className="h-[0.5px] w-[85%] bg-light-gray m-auto" />

      <div className="mx-40">
        <h2 className="text-3xl mb-5 font-semibold text-[#1D1D1D]">
          Academic Details
        </h2>
        <div className="flex flex-col text-lg text-[#686868]">
          {AcademicDetails.map((q) => (
            <p key={q}>{q}</p>
          ))}
        </div>
      </div>
      <div className="h-[0.5px] w-[85%] bg-light-gray m-auto" />

      <div className="mx-40">
        <h3 className="text-3xl mb-5 font-semibold text-[#1D1D1D]">
          Administrative Experience:{" "}
          <span className="text-[#067798]">(15 + years)</span>
        </h3>
        <p className=" text-lg text-[#686868]">{AdministrativeExperience}</p>
      </div>
      <div className="h-[0.5px] w-[85%] bg-light-gray m-auto" />

      <div className="mx-40">
        <h2 className="text-3xl mb-5 font-semibold text-[#1D1D1D]">
          Teaching Experience:
          <span className="text-[#067798]">
            (as visiting faculty) (15 + years)
          </span>
        </h2>
        <div className="flex flex-col text-lg text-[#686868]">
          {TeachingExperience.map((q) => (
            <p key={q}>{q}</p>
          ))}
        </div>
      </div>
      <div className="h-[0.5px] w-[85%] bg-light-gray m-auto" />

      <div className="mx-40">
        <h2 className="text-3xl mb-5 font-semibold text-[#1D1D1D]">
          Papers Presented
        </h2>
        <div className="flex flex-col text-lg text-[#686868]">
          {PapersPresented.map((q) => (
            <p key={q}>{q}</p>
          ))}
        </div>
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
        {contact.mobile && (
          <p>
            <strong className="text-xl font-normal text-[#1D1D1D] ">
              Mobile:
            </strong>{" "}
            <a
              href={`tel:${contact.mobile}`}
              className="text-[#067798] text-lg  underline"
            >
              {contact.mobile}
            </a>
          </p>
        )}
      </div>
      <div className="h-[0.5px] w-[85%] bg-light-gray m-auto" />
    </div>
  );
};

export default AdminOffice;
