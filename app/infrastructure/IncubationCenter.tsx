import Image from "next/image";
import Head from "next/head";

export default function IncubationCentre() {
  return (
    <div className="bg-[#CCCCCC80] backdrop-blur-md py-16 px-8 font-sans">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="max-w-7xl mx-auto">
        {/* Top border line */}
        <div className="border-t border-black mb-12"></div>
        <h1
          className="text-center text-[80px] leading-[120px] font-manrope text-black mb-12"
          style={{ fontFamily: "NewYork, serif" }}
        >
          Incubation Centre
        </h1>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left content */}
          <div className="flex-1 text-black text-base leading-relaxed space-y-6 max-w-2xl">
            <p>
              Devi Ahilya Vishwavidyalaya, Incubation Centre (DAVV-IC) is a
              Section 8 company designed to foster a vibrant ecosystem of
              technology incubation and entrepreneurship. By aligning with
              national priorities, DAVV-IC aims to generate employment, create
              wealth, and build successful businesses. The center provides a
              nurturing environment for emerging startups, particularly those
              originating from academia, to help them transition from innovative
              ideas to scalable, sustainable businesses. DAVV-IC is registered
              under CIN No. U80901MP2022NPL063927 and has obtained 12A & 80G
              certificates for tax exemptions and CSR registration.
            </p>

            <p>
              The DAVV Incubation Forum aims to connect budding entrepreneurs,
              startups, and mentors by providing resources, networking
              opportunities, and a platform to showcase innovative ideas.
            </p>
          </div>

          {/* Right image and button */}
          <div className="flex flex-col items-center">
            <Image
              src="/infrastructure/incubation aerial.png"
              alt="DAVV Incubation Centre Building"
              width={745}
              height={371}
              className="rounded-lg shadow-md"
              priority
            />
            <button className="mt-6 bg-[#008ECC] text-white text-lg font-medium px-8 py-3 rounded-md hover:bg-[#007bb3] transition">
              Explore More
            </button>
          </div>
        </div>

        {/* Bottom border line */}
        <div className="border-t border-black mt-12"></div>
      </div>
    </div>
  );
}
