'use client'
import Image from 'next/image';
import React, { useState } from 'react';

interface HostelData {
  id: number;
  name: string;
  description: string;
  filled: number;
  vacant: number;
  managerName: string;
  managerImage: string;
  managerInformation: string;
  wardenName: string;
  wardenImage: string;
  wardenInformation: string;
}

const HostelComponent = () => {
  const [selectedTab, setSelectedTab] = useState<'boys' | 'girls'>('boys');
  const [selectedHostel, setSelectedHostel] = useState<number>(1);

  const BoyshostelsData: HostelData[] = [
    {
      id: 1,
      name: 'Visvesvaraya (Boys)',
      description: 'Hostel 1 is assigned to first year (freshman) students. It features double or triple occupancy rooms. Like the other hostels it has study furniture, Wi-Fi, and access to the common mess. It is part of',
      filled: 80,
      vacant: 20,
      managerName: "Mr xyz",
      managerImage: "sudo image.jpg",
      managerInformation: "lourem-46",
      wardenName: "Mr xyz",
      wardenImage: "sudo image.jpg",
      wardenInformation: "lourem-46"
    },
    {
      id: 2,
      name: 'Satvendra Nath Bose (Boys)',
      description: 'Hostel 3 houses second year undergraduate students. Its nearly identical layout and facilities to Hostel 1 with two students per room and furnished',
      filled: 90,
      vacant: 10,
      managerName: "Mr xyz",
      managerImage: "sudo image.jpg",
      managerInformation: "lourem-46",
      wardenName: "Mr xyz",
      wardenImage: "sudo image.jpg",
      wardenInformation: "lourem-46"
    },
    {
      id: 3,
      name: 'Ramanujan (Boys)',
      description: 'Hostel 2 is reserved for third year students. Its rooms also accommodate two students each. In all other respects (furnishings, water supply, Wi-Fi, recreation and laundry facilities) it',
      filled: 80,
      vacant: 20,
      managerName: "Mr xyz",
      managerImage: "sudo image.jpg",
      managerInformation: "lourem-46",
      wardenName: "Mr xyz",
      wardenImage: "sudo image.jpg",
      wardenInformation: "lourem-46"
    },
    {
      id: 4,
      name: 'Vikram Sarabhai (Boys)',
      description: 'Hostel 4 is set aside for fourth year students. Unlike the other hostels, Hostel 4 provides single occupancy rooms (one student per room). This offers seniors',
      filled: 80,
      vacant: 20,
      managerName: "Mr xyz",
      managerImage: "sudo image.jpg",
      managerInformation: "lourem-46",
      wardenName: "Mr xyz",
      wardenImage: "sudo image.jpg",
      wardenInformation: "lourem-46"
    }
  ];

  const girlsHostelData: HostelData[] = [
    {
      id: 5,
      name: 'A-Block (Girls)',
      description: 'Well-Maintained with Security & Warden Presence. Designed for comfort and safety, this hostel has clean washrooms, CCTV surveillance, and in-hostel laundry. Ideal',
      filled: 80,
      vacant: 20,
      managerName: "Mr xyz",
      managerImage: "sudo image.jpg",
      managerInformation: "lourem-46",
      wardenName: "Mr xyz",
      wardenImage: "sudo image.jpg",
      wardenInformation: "lourem-46"
    },
    {
      id: 6,
      name: 'B-Block (Girls)',
      description: 'Well-Maintained with Security & Warden Presence. Designed for comfort and safety, this hostel has clean washrooms, CCTV surveillance, and in-hostel laundry. Ideal',
      filled: 80,
      vacant: 20,
      managerName: "Mr xyz",
      managerImage: "sudo image.jpg",
      managerInformation: "lourem-46",
      wardenName: "Mr xyz",
      wardenImage: "sudo image.jpg",
      wardenInformation: "lourem-46"
    }
  ];

  const currentHostelData = selectedTab === 'boys' ? BoyshostelsData : girlsHostelData;
  const currentHostel = currentHostelData.find(hostel => hostel.id === selectedHostel) || currentHostelData[0];

  const handleTabChange = (tab: 'boys' | 'girls') => {
    setSelectedTab(tab);
    // Reset to first hostel when changing tabs
    const firstHostelId = tab === 'boys' ? BoyshostelsData[0].id : girlsHostelData[0].id;
    setSelectedHostel(firstHostelId);
  };

  const getHostelButtonText = (hostel: HostelData) => {
    if (selectedTab === 'boys') {
      const hostelMap: { [key: number]: string } = {
        1: 'Hostel A',
        2: 'Hostel B', 
        3: 'Hostel C',
        4: 'Hostel D'
      };
      return hostelMap[hostel.id] || 'Hostel';
    } else {
      const hostelMap: { [key: number]: string } = {
        5: 'Hostel A',
        6: 'Hostel B'
      };
      return hostelMap[hostel.id] || 'Hostel';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-light text-center mb-12 text-teal-600 tracking-widest">
          HOSTEL
        </h1>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex border-b border-gray-300">
            <button
              onClick={() => handleTabChange('boys')}
              className={`px-8 py-3 font-medium text-lg tracking-wide transition-colors ${
                selectedTab === 'boys'
                  ? 'text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              BOYS
            </button>
            <button
              onClick={() => handleTabChange('girls')}
              className={`px-8 py-3 font-medium text-lg tracking-wide transition-colors ${
                selectedTab === 'girls'
                  ? 'text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              GIRLS
            </button>
          </div>
        </div>

        {/* Hostel Selection Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {currentHostelData.map((hostel) => (
            <button
              key={hostel.id}
              onClick={() => setSelectedHostel(hostel.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedHostel === hostel.id
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-teal-300 hover:bg-teal-50'
              }`}
            >
              {getHostelButtonText(hostel)}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Manager and Warden Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">
                Manager and Warden Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Manager */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-500 rounded-full"></div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Manager</h3>
                  <p className="text-gray-600">{currentHostel.managerName}</p>
                  <p className="text-sm text-gray-500 mt-2">{currentHostel.managerInformation}</p>
                </div>

                {/* Warden */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-500 rounded-full"></div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Warden</h3>
                  <p className="text-gray-600">{currentHostel.wardenName}</p>
                  <p className="text-sm text-gray-500 mt-2">{currentHostel.wardenInformation}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Intake Capacity Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">
                Intake Capacity Information
              </h2>
              
              <div className="flex justify-center mb-6">
                <div className="relative w-40 h-40">
                  {/* Pie Chart */}
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="35"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="35"
                      fill="none"
                      stroke="#9ca3af"
                      strokeWidth="8"
                      strokeDasharray={`${(currentHostel.filled / 100) * 220} 220`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-800">
                      {currentHostel.filled}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-500 rounded-sm"></div>
                  <span className="text-sm text-gray-600">Filled</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                  <span className="text-sm text-gray-600">Vacant</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hostel Description */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            {currentHostel.name}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {currentHostel.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HostelComponent;