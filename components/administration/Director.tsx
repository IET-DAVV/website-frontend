"use client";
import React from "react";
// Assuming directorData is a file exporting the DirectorProfile object
// containing the data for Dr. Vrinda Tokekar.
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

  // Helper function to render semantic lists
  const renderList = (items: string[]) => (
    <ul className="list-disc list-inside space-y-1 text-lg text-[#686868] pl-5">
      {items.map((item) => (
        <li key={item} className="marker:text-black">{item}</li> // Uses theme color for bullet points
      ))}
    </ul>
  );

  return (
    // Use a responsive container with max width and padding
    <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-10">
      
      {/* 1. Name, Designation, and Image Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-200 pb-8">
        
        {/* Designation Info */}
        <div className="order-2 md:order-1 flex-grow">
          <h2 className="mb-4 text-4xl font-semibold text-[#1D1D1D]">{name}</h2>
          <div className="flex flex-col text-lg text-[#686868] space-y-1">
            {designation.map((line, index) => (
              // Bolder for the primary role
              <p key={index} className={index === 0 ? "text-xl font-medium text-gray-800" : "text-lg text-gray-700"}>
                {line}
              </p>
            ))}
          </div>
        </div>
        
        {/* Image */}
        <div className="order-1 md:order-2">
            <Image
                // Removed width/height props for default behavior, keeping classes
                width={192} 
                height={192} 
                src={image}
                alt={name}
                className="border-4 border-black w-48 h-48 object-cover shadow-lg" // Using established theme color for border
            />
        </div>
      </div>

      {/* 2. Contact Details Section */}
      {/* Removed separate separator, using padding and border-b on sections for cleaner flow */}
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-black">Contacts</h2>
        <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-8">
          
          {contact.email && (
            <p className="text-xl">
              <strong className="font-semibold text-[#1D1D1D]">Email:</strong>{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-[#0077C2] hover:underline transition" // Using established blue theme color
              >
                {contact.email}
              </a>
            </p>
          )}
          {contact.phone && (
            <p className="text-xl">
              <strong className="font-semibold text-[#1D1D1D]">Phone:</strong>{" "}
              <a
                href={`tel:${contact.phone}`}
                className="text-[#0077C2] hover:underline transition" // Using established blue theme color
              >
                {contact.phone}
              </a>
            </p>
          )}
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-200 m-auto" /> {/* Visible Separator */}

      {/* 3. Educational Qualifications */}
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-black">
          Educational Qualifications
        </h2>
        {renderList(qualifications)}
      </div>
      <div className="h-[1px] w-full bg-gray-200 m-auto" />

      {/* 4. Experience */}
      <div className="space-y-4">
        <h3 className="text-3xl font-semibold text-black">
          Experience
        </h3>
        <p className="text-lg text-[#686868]">{experience}</p>
      </div>
      <div className="h-[1px] w-full bg-gray-200 m-auto" />

      {/* 5. Areas of Interest */}
      <div className="space-y-4">
        <h3 className="text-3xl font-semibold text-black">
          Areas of Interest
        </h3>
        {renderList(interests)}
      </div>
      <div className="h-[1px] w-full bg-gray-200 m-auto" />

      {/* 6. Research & Publication Profile */}
      <div className="space-y-4">
        <h3 className="text-3xl font-semibold text-black">
          Research & Publication Profile
        </h3>
        {renderList(publications)}
      </div>
      <div className="h-[1px] w-full bg-gray-200 m-auto" />

      {/* 7. Responsibilities Held */}
      <div className="space-y-4">
        <h3 className="text-3xl font-semibold text-black">
          Responsibilities Held
        </h3>
        {renderList(responsibilities)}
      </div>
    </div>
  );
};

export default Director;