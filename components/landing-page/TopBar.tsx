import React from "react";
import { ChevronDown, Mail, Phone, Search } from "lucide-react"; // Using lucide-react for icons

const TopBar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-gray-300 text-sm py-2 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <Mail className="h-4 w-4 mr-1" />
          <span>1234@ietdavv.edu.in</span>
        </div>
        <div className="flex items-center">
          <Phone className="h-4 w-4 mr-1" />
          <span>+0731-2455856</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <a className="hover:text-white" href="#">
          Placement
        </a>

        {/* Courses Dropdown - Consider Shad-CN DropdownMenu */}
        <div className="relative group">
          <button className="hover:text-white flex items-center">
            Courses <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          <div className="absolute hidden group-hover:block bg-gray-700 min-w-[160px] shadow-lg z-10 mt-2 rounded-md py-1">
            <a href="#" className="block px-4 py-2 hover:bg-gray-600">
              Course 1
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-600">
              Course 2
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-600">
              Course 3
            </a>
          </div>
        </div>

        {/* Notice Dropdown - Consider Shad-CN DropdownMenu */}
        <div className="relative group">
          <button className="hover:text-white flex items-center">
            Notice <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          <div className="absolute hidden group-hover:block bg-gray-700 min-w-[160px] shadow-lg z-10 mt-2 rounded-md py-1">
            <a href="#" className="block px-4 py-2 hover:bg-gray-600">
              Notice 1
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-600">
              Notice 2
            </a>
          </div>
        </div>

        <a className="hover:text-white" href="#">
          Alumni
        </a>
        <div className="relative">
          <input
            className="bg-white bg-opacity-20 border-none rounded-md py-1 px-3 text-sm w-40 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Search"
            type="text"
          />
          <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
