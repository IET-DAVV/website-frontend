"use client";

import React, { useState } from "react";
import { Manrope } from "next/font/google";
import { MdOutlineFileDownload } from "react-icons/md";
import Title from "../common/academics/Title";
import { EnrollmentPdfLink } from "@/constants/enrollment/data";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const EnrollmentComponent = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[0-9]{2}[a-z]{3}[0-9]{3}@ietdavv\.edu\.in$/i;
    return regex.test(email);
  };

  const handleSendOtp = async () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid IET DAVV college ID.");
      return;
    }
    setError("");
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        setOtpSent(true);
      } else {
        setError("Failed to send OTP. Try again.");
      }
    } catch (err) {
      setError("Error sending OTP. Try again.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();
      if (data.verified) {
        setVerified(true);
        setError("");
      } else {
        setError("Invalid OTP.");
      }
    } catch (err) {
      setError("Error verifying OTP.");
    }
  };

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

      {/* Email & OTP Section */}
      {!verified && (
        <div className="w-11/12 md:w-3/5 mx-auto flex flex-col gap-4">
          <input
            type="email"
            value={email}
            placeholder="Enter your IET DAVV email"
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 p-2 rounded"
          />
          {!otpSent ? (
            <button
              onClick={handleSendOtp}
              className="bg-black text-white px-4 py-2 rounded hover:scale-105 transition-all"
            >
              Send OTP
            </button>
          ) : (
            <>
              <input
                type="text"
                value={otp}
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
                className="border border-gray-400 p-2 rounded"
              />
              <button
                onClick={handleVerifyOtp}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:scale-105 transition-all"
              >
                Verify OTP
              </button>
            </>
          )}
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
      )}

      {/* PDF Section */}
      {verified && (
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
      )}
    </div>
  );
};

export default EnrollmentComponent;
