"use client";

import Title from "../common/academics/Title";
import { CONTACT, PDF_LINK } from "@/constants/process";
import Link from "next/link";

export default function AdmissionBox() {
  return (
    <div className="text-black">
      <Title title="Admission Process" />
      <section className="border-2 border-gray-300 rounded-xl p-6 bg-white mb-10 shadow-sm">
        {/* Top: Two-column layout with vertical line */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0">
          {/* Left: Heading */}
          <div className="md:w-1/2 pr-6">
          <h2 className="text-2xl font-bold">ADMISSION 2025–26</h2>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px h-12 bg-gray-300 mx-4" />

        {/* Right: Buttons */}
        <div className="md:w-1/2 flex flex-col sm:flex-row sm:items-center gap-4 pl-6">
          <Link
            href="#"
            className="bg-[#06779B] text-white px-4 py-2 text-sm rounded-md font-medium hover:bg-blue-700 transition"
          >
            Click Here
          </Link>

          <a
            href={PDF_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-700 border border-blue-700 px-4 py-2 text-sm rounded-md hover:bg-blue-50 transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Download PDF
          </a>
        </div>
      </div>

      {/* Horizontal Divider */}
      <hr className="my-4 border-gray-300" />

      {/* Contact Info */}
      <p className="text-lg">
        For More Information Regarding Admissions:&nbsp;
        <span className="text-[#06779B] font-semibold text-lg">
          Contact: {CONTACT.name} (M) {CONTACT.phone}
        </span>
      </p>
    </section>
  </div>
);
}