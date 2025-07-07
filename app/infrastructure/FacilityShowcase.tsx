'use client'
import React, { useState } from 'react';
import Image from 'next/image';
interface Facility {
  title: string;
  image: string;
  alt: string;
}

// Facilities collection interface
interface Facilities {
  [key: string]: Facility;
}
const FacilityShowcase = () => {
  const [selectedFacility, setSelectedFacility] = useState('COMPUTER LAB');

  const facilities:Facilities = {
    'COMPUTER LAB': {
      title: 'Computer Lab',
      image: '/infrastructure/computer-lab.jpg',
      alt: 'Students working in computer lab with desktop computers'
    },
    'VLSI LAB': {
      title: 'VLSI Lab',
      image: '/vlsi-lab.jpg',
      alt: 'VLSI laboratory with electronic equipment and workstations'
    },
    'AUDITORIUM': {
      title: 'Auditorium',
      image: '/auditorium.jpg',
      alt: 'Large auditorium with seating and presentation screen'
    },
    'ELECTRONICS LAB': {
      title: 'Electronics Lab',
      image: '/electronics-lab.jpg',
      alt: 'Electronics laboratory with circuit boards and testing equipment'
    },
    'WORKSHOP': {
      title: 'Workshop',
      image: '/workshop.jpg',
      alt: 'Workshop area with tools and workbenches'
    },
    'AIML LAB': {
      title: 'AIML Lab',
      image: '/aiml-lab.jpg',
      alt: 'AI/ML laboratory with high-performance computing systems'
    },
    'CANTEEN': {
      title: 'Canteen',
      image: '/canteen.jpg',
      alt: 'Student canteen with dining tables and food service area'
    }
  };

  const facilityList = Object.keys(facilities);

  return (
    <div className="flex bg-gray-100 h-full max-w-8xl mx-auto">
      {/* Main Content Area */}
      <div className="flex-1 relative h-screen">
        {/* Image Container */}
        <div className="relative aspect-auto w-full h-full">
          <Image
            src={facilities[selectedFacility].image}
            alt={facilities[selectedFacility].alt}
            fill
            className="object-cover"
            priority
          />
          
          {/* Overlay Title */}
          <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg">
            <h1 className="text-3xl font-light text-gray-800 tracking-wide">
              {facilities[selectedFacility].title}
            </h1>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-72 bg-white border-l border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800 tracking-wide">
            FACILITIES
          </h2>
        </div>

        {/* Facility List */}
        <div className="flex-1 overflow-y-auto">
          {facilityList.map((facility, index) => (
            <button
              key={facility}
              onClick={() => setSelectedFacility(facility)}
              className={`w-full text-left px-6 py-4 border-b border-gray-100 transition-all duration-200 hover:bg-gray-50 ${
                selectedFacility === facility
                  ? 'bg-blue-50 border-l-4 border-l-blue-500 text-blue-700'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium tracking-wide text-sm">
                  {facility}
                </span>
                {selectedFacility === facility && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilityShowcase;