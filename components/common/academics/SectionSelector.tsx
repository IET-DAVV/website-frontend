import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

interface SectionSelectorProps {
  sections: { sectionName: string; PdfLink: string | null }[];
  showName: boolean;
  hideIfShortName?: boolean;
}

const SectionSelector: React.FC<SectionSelectorProps> = ({
  sections,
  showName,
  hideIfShortName = false,
}) => {
  const [showSections, setShowSections] = useState<boolean>(false);
  const sectionsCount = sections.length;

  return (
    <div className="mt-16 px-4 sm:px-6 md:px-10">
      {/* Toggle Button */}
      <div className="flex justify-center mb-6">
        <button
          className="bg-[#06779B] text-white px-4 py-2 rounded-[10px] flex items-center font-semibold hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#06779B] transition-all duration-200"
          onClick={() => setShowSections(!showSections)}
        >
          {showSections ? "Hide" : "Show"}
          <FaRegArrowAltCircleRight className="ml-2" />
        </button>
      </div>

      {/* PDF Sections */}
      <div className="mt-10 flex flex-col gap-10">
        {showSections &&
          sections.map(({ sectionName, PdfLink }, index) => (
            <div
              key={sectionName}
              className="w-full md:w-4/5 lg:w-3/5 mx-auto flex flex-col gap-4"
            >
              <div className="flex justify-between items-center">
                {showName && (!hideIfShortName || sectionsCount >= 2) ? (
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {sectionName}
                  </h3>
                ) : (
                  <span></span>
                )}

                {PdfLink && (
                  <a
                    href={PdfLink}
                    className="bg-black rounded-full p-2 hover:scale-105 transition-transform duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdOutlineFileDownload className="text-white text-xl" />
                  </a>
                )}
              </div>

              {PdfLink ? (
                <iframe
                  src={PdfLink}
                  title={`PDF Viewer for ${sectionName}`}
                  className="border-2 border-blue-500 h-[400px] sm:h-[450px] md:h-[500px] w-full"
                ></iframe>
              ) : (
                <div className="border-2 border-blue-500 h-[400px] sm:h-[450px] md:h-[500px] bg-gray-200 flex items-center justify-center text-sm sm:text-base">
                  No PDF Available
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SectionSelector;
