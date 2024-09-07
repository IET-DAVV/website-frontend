import React from "react";
import Piechart from "@/components/chart/Piechart";

function Chart() {
  return (
    <div className="flex justify-between items-center w-[1525px] h-[550px] top-[5310px] bg-[#f8f1e9] p-8">
      <div className="p-8">
        <div className="flex items-center mb-4">
          <div className="font-serif text-gray text-7xl">98%</div>
          <div className="text-gray text-4xl ml-4">Students placed</div>
        </div>

        <div className="flex items-center mt-8 mb-4">
          <div className="font-serif text-gray text-7xl">1500</div>
          <div className="text-gray text-4xl ml-4">No. of students</div>
        </div>

        <div className="flex items-center mt-8 mb-4">
          <div className="font-serif text-gray text-7xl">25+</div>
          <div className="text-gray text-4xl ml-4">Companies visited</div>
        </div>
      </div>

      {/* Center Dividing Line */}
      <div className="h-1/2 w-[2px] bg-black mx-8"></div>

      {/* right side part */}
      <div className="w-1/3 h-1/4 flex flex-col justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-gray-800 text-xl">Top Five Email Senders</h2>
          <Piechart />
        </div>
      </div>
    </div>
  );
}

export default Chart;
