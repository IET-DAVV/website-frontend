import React from "react";

interface YearSelectorProps {
  years: string[];
  selectedYear: string;
  onSelect: (year: string) => void;
}

const YearSelector: React.FC<YearSelectorProps> = ({
  years,
  selectedYear,
  onSelect,
}) => (
  <div className="flex flex-col mb-14 px-4 sm:px-6 md:px-8">
    <h2 className="text-xl mb-6 sm:mb-8 font-semibold">Year</h2>

    <div className="mt-2 w-full border-b-2 border-[#D4D4D4] mb-6 sm:mb-8"></div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10 sm:w-full md:w-fit max-w-full">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onSelect(year)}
          className={`px-4 py-2 w-full rounded border-2 font-semibold text-sm sm:text-base transition-all duration-300 ease-in-out transform ${
            selectedYear === year
              ? "bg-[#06779B] text-white border-[#06779B] scale-105 shadow-md"
              : "text-black border-black hover:bg-[#06779B] hover:text-white hover:border-[#06779B] hover:scale-105"
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  </div>
);

export default YearSelector;
