import React from 'react';
import Image from 'next/image';

const LibraryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="text-center pt-16 pb-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-black tracking-wide font-newyork">
          Library
        </h1>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Library Image with Overlay */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <div className="relative h-96 sm:h-[500px] lg:h-[600px]">
              <Image
                src="/api/placeholder/1200/600"
                alt="IET DAVV Central Library aerial view"
                fill
                className="object-cover"
                priority
              />
              
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-end">
                <div className="w-full p-6 sm:p-8 lg:p-12">
                  <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
                    {/* Text content */}
                    <div className="lg:col-span-2">
                      <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed font-light">
                        The IET DAVV Central Library is a newly renovated, state-of-the-art facility 
                        designed to support students' academic and research endeavors. Relocated 
                        from its original 1997 space in A-Block, it now features modern interiors, 
                        comfortable reading areas, and individual study desks backed by high-speed 
                        Wi-Fi and digital access.
                      </p>
                    </div>
                    
                    {/* E Books button */}
                    <div className="lg:col-span-1 flex justify-start lg:justify-end">
                      <button className="bg-light-blue hover:bg-dark-blue text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg shadow-lg">
                        E Books
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;