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
  <div className="flex flex-col  mb-14  px-8">
    <h2 className="text-xl mb-8 font-semibold">Year</h2>

    <div className="mt-2 w-full border-b-2 border-[#D4D4D4] mb-8"></div>

    <div className="grid grid-cols-4 gap-14 w-fit">
      {years.map((year) => (
        <button
          key={year}
          onClick={() => onSelect(year)}
          className={`px-4 w-fit py-2 rounded border-2 font-semibold ${
            selectedYear === year
              ? "bg-[#06779B] text-white border-[#06779B] rounded-lg"
              : " text-black border-black hover:bg-[#06779B] hover:text-white hover:border-[#06779B] rounded-lg"
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  </div>
);

export default YearSelector;
