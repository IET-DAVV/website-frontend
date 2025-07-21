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

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onSelect(year)}
          // This className is from your Timetable component's Year Selector
          className={`px-5 py-2 rounded-md border transition-all duration-300 ease-in-out font-medium ${
            selectedYear === year
              ? "bg-teal-600 text-white" // Selected style
              : "bg-white text-black hover:bg-teal-100 hover:shadow-md hover:scale-105" // Unselected style
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  </div>
);

export default YearSelector;