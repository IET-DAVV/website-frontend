"use client";

import React from "react";
import { Manrope } from "next/font/google";
import { MdOutlineFileDownload } from "react-icons/md";
import Title from "../common/academics/Title";
import { EnrollmentPdfLink } from "@/constants/enrollment/data";
import { useSession, signIn, signOut } from "next-auth/react"; // Import hooks

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const EnrollmentComponent = () => {
  // useSession hook provides session data and authentication status
  const { data: session, status } = useSession();

  // 'status' can be 'loading', 'authenticated', or 'unauthenticated'
  if (status === "loading") {
    return (
      <div className="text-center p-10">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="text-black">
      <Title title="Enrollment List" />

      {/* Show Sign-In button if user is not authenticated */}
      {status === "unauthenticated" && (
        <div className="text-center my-10 flex flex-col items-center gap-4">
          <p className="font-semibold">Please sign in to view the enrollment list.</p>
          <p className="text-sm text-gray-600">Only @ietdavv.edu.in accounts are permitted.</p>
          <button
            onClick={() => signIn("google")} // This triggers the Google sign-in flow
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all"
          >
            Continue with College ID
          </button>
        </div>
      )}

      {/* Show protected content if user is authenticated */}
      {status === "authenticated" && (
        <>
          <div className="border border-black rounded-xl px-6 py-4 mx-auto w-11/12 md:w-3/5 my-6">
            <p className="font-semibold mb-2">IMPORTANT NOTE</p>
            <ul className="list-disc pl-4 space-y-1 text-sm">
              <li>
                All students who are admitted in year 2021 compulsorily required to
                check their data as uploaded on MP-online.
              </li>
              <li>
                Contact Admn. Officer for corrections (if any), failing which, no
                corrections will be entertained later.
              </li>
            </ul>
          </div>

          <div
            className={`flex flex-col gap-4 w-11/12 md:w-3/5 mx-auto my-10 ${manrope.className}`}
          >
            <div className="flex justify-between items-center">
               <p className="text-sm">Signed in as: <strong>{session.user?.email}</strong></p>
               <button
                  onClick={() => signOut()}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
                >
                  Sign Out
                </button>
            </div>
            
            <div className="flex justify-end items-center mt-4">
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
        </>
      )}
    </div>
  );
};

export default EnrollmentComponent;