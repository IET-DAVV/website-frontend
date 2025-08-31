import React from "react";
import Image from "next/image";
import Link from "next/link";

const HostelsPage = () => {
  const hostelsData = [
    {
      id: 1,
      name: "Visvesvaraya (Boys)",
      image: "/infrastructure/hostels/b1.jpg",
      description:
        "First-year hostel with double/triple occupancy, study furniture, Wi-Fi, and access to the common mess.",
    },
    {
      id: 2,
      name: "Satvendra Nath Bose (Boys)",
      image: "/infrastructure/hostels/b2.jpg",
      description:
        "Second-year hostel with twin-sharing rooms, furnished interiors, and common amenities.",
    },
    {
      id: 3,
      name: "Ramanujan (Boys)",
      image: "/infrastructure/hostels/b3.jpg",
      description:
        "Third-year hostel with two-student rooms, Wi-Fi, laundry, and recreation facilities.",
    },
    {
      id: 4,
      name: "Vikram Sarabhai (Boys)",
      image: "/infrastructure/hostels/b4.jpg",
      description:
        "Final-year hostel offering single occupancy rooms for added privacy and comfort.",
    },
  ];

  const girlsHostelData = [
    {
      id: 5,
      name: "A-Block (Girls)",
      image: "/infrastructure/hostels/b5.png",
      description:
        "Spacious rooms with security, warden presence, CCTV surveillance, and in-hostel laundry.",
    },
    {
      id: 6,
      name: "B-Block (Girls)",
      image: "/infrastructure/hostels/b6.png",
      description:
        "Comfortable rooms with modern amenities, dedicated study areas, and mess facilities.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-7xl font-newyork text-center text-gray-800 mb-12">
          HOSTELS
        </h1>
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Boys Hostels */}
          <div className="grid m-2 grid-cols-2">
            {hostelsData.map((hostel) => (
              <div
                key={hostel.id}
                className="relative rounded-lg overflow-hidden group m-1 shadow-lg hover:shadow-xl transition duration-300"
              >
                <Image
                  alt={`${hostel.name} Hostel`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  src={hostel.image}
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 text-white transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-2">{hostel.name}</h2>
                  <p className="text-sm max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-in-out">
                    {hostel.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Girls Hostels */}
          <div className="grid grid-cols-2 m-2">
            {girlsHostelData.map((hostel) => (
              <div
                key={hostel.id}
                className="relative rounded-lg overflow-hidden group m-1 shadow-lg hover:shadow-xl transition duration-300"
              >
                <Image
                  alt={`${hostel.name} Hostel`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  src={hostel.image}
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 text-white transition-all duration-300">
                  <h2 className="text-2xl font-bold mb-2">{hostel.name}</h2>
                  <p className="text-sm max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-in-out">
                    {hostel.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link href="/hostel">
            <button className="bg-light-blue text-white font-semibold py-3 px-8 rounded-lg hover:bg-dark-blue transition-colors duration-300">
              View More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HostelsPage;
