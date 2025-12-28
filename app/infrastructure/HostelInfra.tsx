"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Title from '@/components/common/academics/Title';

const HostelsPage = () => {
  const hostelsData = [
    {
      id: 1,
      name: 'Visvesvaraya (Boys)',
      image: '/infrastructure/hostels/b1.jpg',
      description: 'Hostel 1 is assigned to first year students. Features double/triple occupancy.'
    },
    {
      id: 2,
      name: 'Satvendra Nath Bose (Boys)',
      image: '/infrastructure/hostels/b2.jpg',
      description: 'Houses second year students. Nearly identical layout to Hostel 1.'
    },
    {
      id: 3,
      name: 'Ramanujan (Boys)',
      image: '/infrastructure/hostels/b3.jpg',
      description: 'Reserved for third year students. Rooms accommodate two students each.'
    },
    {
      id: 4,
      name: 'Vikram Sarabhai (Boys)',
      image: '/infrastructure/hostels/b4.jpg',
      description: 'Set aside for fourth year students. Provides single occupancy rooms.'
    }
  ];

  const girlsHostelData = [
    {
      id: 5,
      name: 'A-Block (Girls)',
      image: '/infrastructure/hostels/b5.png',
      description: 'Well-Maintained with Security & Warden Presence. CCTV surveillance.'
    },
    {
      id: 6,
      name: 'A-Block (Girls)',
      image: '/infrastructure/hostels/b5.png',
      description: 'Designed for comfort and safety. Includes in-hostel laundry.'
    }
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <Title title="HOSTELS" className="text-7xl leading-tight font-newyork" />
        
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* BOYS SECTION */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 uppercase border-l-4 border-[#3B7A9E] pl-4">Boys Hostels</h3>
            <div className="grid grid-cols-2 gap-4">
              {hostelsData.map((hostel) => (
                <Link href="/hostel/boyshostel" key={hostel.id} className="block group">
                  <div className="relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]">
                    <Image
                      alt={hostel.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      src={hostel.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                      <h2 className="text-lg font-bold leading-tight">{hostel.name}</h2>
                      <p className="text-[10px] mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {hostel.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* GIRLS SECTION */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 uppercase border-l-4 border-[#3B7A9E] pl-4">Girls Hostels</h3>
            <div className="grid grid-cols-2 gap-4">
              {girlsHostelData.map((hostel) => (
                <Link href="/hostel" key={hostel.id} className="block group">
                  <div className="relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]">
                    <Image
                      alt={hostel.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      src={hostel.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                      <h2 className="text-lg font-bold leading-tight">{hostel.name}</h2>
                      <p className="text-[10px] mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {hostel.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div className="text-center mt-16">
          <Link href="/hostel">
            <button className="bg-[#3B7A9E] text-white font-bold py-4 px-10 rounded-full hover:bg-[#2C5A75] shadow-lg transition-all active:scale-95">
              EXPLORE HOSTEL LIFE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HostelsPage;