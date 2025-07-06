import Image from 'next/image';

export default function IncubationCentre() {
  return (
    <div className="bg-gray-200 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top border line */}
        <div className="border-t border-black mb-12"></div>
        
        {/* Main content container */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left content section */}
          <div className="flex-1 space-y-8">
            {/* Title */}
            <h1 className="font-newyork text-4xl lg:text-5xl text-black mb-8">
              Incubation Centre
            </h1>
            
            {/* Description paragraphs */}
            <div className="space-y-6 text-black text-base leading-relaxed max-w-2xl">
              <p>
                Devi Anilya Vishwavidyalaya, Incubation Centre (DAVV-IC) is a Section 8 
                company designed to foster a vibrant ecosystem of technology incubation and 
                entrepreneurship. By aligning with national priorities, DAVV-IC aims to generate 
                employment, create wealth, and build successful businesses. The center 
                provides a nurturing environment for emerging startups, particularly those 
                originating from academia, to help them transition from innovative ideas to 
                scalable, sustainable businesses. DAVV-IC is registered under CIN No. 
                U80901MP2022NPL063927 and has obtained 12A & 80G certificates for tax 
                exemptions and CSR registration.
              </p>
              
              <p>
                The DAVV Incubation Forum aims to connect budding entrepreneurs, startups, 
                and mentors by providing resources, networking opportunities, and a platform 
                to showcase innovative ideas.
              </p>
            </div>
          </div>
          
          {/* Right image section */}
          <div className="flex-shrink-0 relative">
            <div className="relative">
              {/* Building image */}
              <Image
                src="/api/placeholder/400/300"
                alt="DAVV Incubation Centre Building"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
                priority
              />
              
              {/* Explore More button positioned over the image */}
              <div className="absolute bottom-6 left-6">
                <button className="bg-light-blue hover:bg-dark-blue text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom border line */}
        <div className="border-t border-black mt-12"></div>
      </div>
    </div>
  );
}