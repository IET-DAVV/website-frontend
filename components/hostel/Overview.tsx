// components/hostel/Overview.tsx
'use client';
import React from "react";

export default function Overview() {
  return (
    <section className="w-full bg-white text-left px-8 md:px-16 py-12">
      <div className="max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-900">
          Overview of the Hostel
        </h2>
        <p className="text-gray-600 leading-relaxed mt-4">
          The Girls Hostel at the Institute of Engineering and Technology (IET)
          provides a secure, comfortable, and inclusive living environment for
          female students. Located within the main campus, it comprises{" "}
          <strong>four blocks — A, B, C, and D — along with a Warden House and Kitchen House.</strong>{" "}
          Each block is designed to support different academic years, ensuring a
          balanced community for residents.
        </p>
      </div>
    </section>
  );
}
