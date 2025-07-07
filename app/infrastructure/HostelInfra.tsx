import React from 'react';
import Image from 'next/image';

const HostelsPage = () => {
  const hostelsData = [
    {
      id: 1,
      name: 'Visvesvaraya (Boys)',
      image: '/infrastructure/hostels/b1.jpg',
      description: 'Hostel 1 is assigned to first year (freshman) students. It features double or triple occupancy rooms. Like the other hostels it has study furniture, Wi-Fi, and access to the common mess. It is part of'
    },
    {
      id: 2,
      name: 'Satvendra Nath Bose (Boys)',
      image: '/infrastructure/hostels/b2.jpg',
      description: 'Hostel 3 houses second year undergraduate students. Its nearly identical layout and facilities to Hostel 1 with two students per room and furnished'
    },
    {
      id: 3,
      name: 'Ramanujan (Boys)',
      image: '/infrastructure/hostels/b3.jpg',
      description: 'Hostel 2 is reserved for third year students. Its rooms also accommodate two students each. In all other respects (furnishings, water supply, Wi-Fi, recreation and laundry facilities) it'
    },
    {
      id: 4,
      name: 'Vikram Sarabhai (Boys)',
      image: '/infrastructure/hostels/b4.jpg',
      description: 'Hostel 4 is set aside for fourth year students. Unlike the other hostels, Hostel 4 provides single occupancy rooms (one student per room). This offers seniors'
    }
  ];

  const girlsHostelData = [
    {
      id: 5,
      name: 'A-Block (Girls)',
      image: '/infrastructure/hostels/b5.png',
      description: 'Well-Maintained with Security & Warden Presence. Designed for comfort and safety, this hostel has clean washrooms, CCTV surveillance, and in-hostel laundry. Ideal'
    },
    {
      id: 6,
      name: 'A-Block (Girls)',
      image: '/infrastructure/hostels/b5.png',
      description: 'Well-Maintained with Security & Warden Presence. Designed for comfort and safety, this hostel has clean washrooms, CCTV surveillance, and in-hostel laundry. Ideal'
    }
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-7xl font-newyork text-center text-gray-800 mb-12" >
          Hostels
        </h1>
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="grid m-2 grid-cols-2">
            {hostelsData.map((hostel) => (
              <div key={hostel.id} className="relative rounded-lg overflow-hidden group m-1">
                <Image
                  alt={`${hostel.name} Hostel`}
                  className="w-full h-full object-cover"
                  src={hostel.image}
                  width={400}
                  height={300}
                  
                />
                <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-end p-6 text-white transition-opacity duration-300">
                  <h2 className="text-2xl font-bold mb-2">{hostel.name}</h2>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {hostel.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 m-2">
            {girlsHostelData.map((hostel) => (
              <div key={hostel.id} className="relative rounded-lg overflow-hidden group m-1">
                <Image
                  alt={`${hostel.name} Hostel`}
                  className="w-full h-full object-cover"
                  src={hostel.image}
                  width={400}
                  height={300}
                  
                />
                <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-end p-6 text-white transition-opacity duration-300">
                  <h2 className="text-2xl font-bold mb-2">{hostel.name}</h2>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {hostel.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-teal-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-teal-600 transition-colors duration-300">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HostelsPage;