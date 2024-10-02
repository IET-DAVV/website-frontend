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
    <div className="mt-20">
      <div className="flex justify-center mb-2">
        <button
          className="bg-[#06779B] text-white px-4 py-2 rounded flex items-center font-semibold hover:scale-105 focus:outline-none focus:ring-[#06779B] transition-all duration-200"
          onClick={() => setShowSections(!showSections)}
        >
          {showSections ? "Hide" : "Show"}
          <FaRegArrowAltCircleRight className="ml-2" />
        </button>
      </div>

      <div className="mt-20 flex flex-col gap-8">
        {showSections &&
          sections.map(({ sectionName, PdfLink }, index) => (
            <div key={sectionName} className="w-1/2 mx-auto mb-4">
              <h2 className="text-xl font-semibold mb-2 flex justify-between items-center">
                {showName && (!hideIfShortName || sectionsCount >= 2) ? (
                  <h3>{sectionName}</h3>
                ) : (
                  <span></span>
                )}
                {PdfLink && (
                  <a
                    href={PdfLink}
                    className="bg-black rounded-full p-1 ml-auto hover:scale-105 focus:outline-none transition-all duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdOutlineFileDownload className="text-white" />
                  </a>
                )}
              </h2>

              {PdfLink ? (
                <iframe
                  src={PdfLink}
                  title={`PDF Viewer for ${sectionName}`}
                  className="border-2 border-blue-500 h-[500px] w-full"
                ></iframe>
              ) : (
                <div className="border-2 border-blue-500 h-[500px] bg-gray-200 flex items-center justify-center">
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
