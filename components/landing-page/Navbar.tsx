import React from "react";
import { ChevronDown } from "lucide-react"; // Using lucide-react for icons
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Assuming you've added dropdown-menu from shad-cn
import Image from "next/image";
const Navbar: React.FC = () => {
  return (
    <nav className="bg-blueShade-500 z-50 sticky top-0  shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            alt="Institute Logo"
            className="mr-3"
            src="/landing/logo.png"
            width="40"
            height="35"
          />{" "}
          {/* Placeholder image */}
          <div>
            <h1 className="text-xl font-bold text-white">
              Institute of Engineering
            </h1>
            <p className="text-sm text-gray-300">and Technology</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <a
            className="px-4 py-2 rounded-lg text-gray-200 hover:bg-white hover:bg-opacity-10 hover:text-white transition-colors duration-300"
            href="/about"
          >
            About us
          </a>

          {/* Academics Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-4 py-2 rounded-lg text-gray-200 hover:bg-white hover:bg-opacity-10 hover:text-white transition-colors duration-300 flex items-center">
                Academics <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-700 text-white p-1 rounded-md shadow-lg">
              <DropdownMenuItem className="hover:bg-gray-600 cursor-pointer">
                Programmes
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-600 cursor-pointer">
                Departments
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-600 cursor-pointer">
                Research
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Admission Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-4 py-2 rounded-lg text-gray-200 hover:bg-white hover:bg-opacity-10 hover:text-white transition-colors duration-300 flex items-center">
                Admission <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-700 text-white p-1 rounded-md shadow-lg">
              <DropdownMenuItem className="hover:bg-gray-600 cursor-pointer">
                Undergraduate
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-600 cursor-pointer">
                Postgraduate
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-600 cursor-pointer">
                PhD
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            className="px-4 py-2 rounded-lg text-gray-200 hover:bg-white hover:bg-opacity-10 hover:text-white transition-colors duration-300"
            href="#"
          >
            Infrastructure
          </a>

          {/* Examination Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-4 py-2 rounded-lg text-gray-200 hover:bg-white hover:bg-opacity-10 hover:text-white transition-colors duration-300 flex items-center">
                Examination <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-gray-700 text-white p-1 rounded-md shadow-lg">
              <DropdownMenuItem className="hover:bg-gray-600 cursor-pointer">
                Results
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-600 cursor-pointer">
                Schedule
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            className="px-4 py-2 rounded-lg text-gray-200 hover:bg-white hover:bg-opacity-10 hover:text-white transition-colors duration-300"
            href="#"
          >
            Contact us
          </a>
          <a
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium transition-colors duration-300"
            href="#"
          >
            Fresher&apos;s corner
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
