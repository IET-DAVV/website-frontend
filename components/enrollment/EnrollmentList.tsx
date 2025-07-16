import React from "react";
import { Manrope } from "next/font/google";
import { MdOutlineFileDownload } from "react-icons/md";
import Title from "../common/academics/Title";
import { EnrollmentPdfLink } from "@/constants/enrollment/data";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const EnrollmentComponent = () => {
  return (
    <div className="text-black">
      <Title title="Enrollment List" />

      <div className="border border-black rounded-xl px-6 py-4 mx-auto w-11/12 md:w-3/5 my-6">
        <p className="font-semibold mb-2">IMPORTANT NOTE</p>
        <ul className="list-disc pl-4 space-y-1 text-sm">
          <li>
            All students who are admitted in year 2021 compulsorily required to
            check their data as uploaded on MP-online.
          </li>
          <li>
            Contact Admn. Officer for corrections (if any), failing which, no
            corrections will be entertained later and enrollment data will be
            sent to all corresponding departments of IET and DAVV.
          </li>
        </ul>
      </div>

      <div
        className={`flex flex-col gap-4 w-11/12 md:w-3/5 mx-auto my-10 ${manrope.className}`}
      >
        <div className="flex justify-end items-center">
          <a
            href={EnrollmentPdfLink}
            className="bg-black rounded-full p-2 ml-auto hover:scale-105 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineFileDownload className="text-white text-lg" />
          </a>
        </div>
        <iframe
          src={EnrollmentPdfLink}
          title="Enrollment PDF"
          className="border-2 border-blue-500 h-[500px] w-full rounded-md"
        ></iframe>
      </div>
    </div>
  );
};

export default EnrollmentComponent;
