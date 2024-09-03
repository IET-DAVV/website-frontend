import React from "react";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import Link from "next/link";
import { GrAnnounce } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import logo from "@/public/landing/logo.png";
import Marquee from "react-fast-marquee";

export const Header = () => {
  return (
    <header>
      <div className="bg-black text-white flex justify-between px-12 text-sm font-sans py-2 items-center">
        <div className="flex gap-10">
          <div className="flex items-center gap-3">
            <MdEmail /> <span>1234@ietdavv.edu.in </span>
          </div>
          <div className="flex items-center gap-3">
            <FiPhone />
            <span>+0731-2455856</span>
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <Link href="./">Placement</Link>
          <div>
            <Link href="./" className="flex items-center gap-2">
              Courses{" "}
              <span>
                <FaChevronDown />
              </span>
            </Link>
          </div>
          <div>
            {" "}
            <Link href="./" className="flex items-center gap-2">
              Notice{" "}
              <span>
                <FaChevronDown />
              </span>
            </Link>
          </div>
          <Link href="./">Alumini</Link>
          <div>
            <input
              type="Search"
              placeholder="  Search"
              className="rounded-full p-1"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between px-12 bg-transparent items-center mt-2">
        <div className="font-bold flex items-center gap-4">
          <Image
            src={logo}
            alt="IET-DAVV"
            className="size-[60px] bg-transparent"
          />
          <h2>
            Institute of Engineering <br /> and Technology
          </h2>
        </div>
        <div>
          <ul className="flex items-center gap-5">
            <li className="underline-offset-4">
              <Link href="./home" className="hover:underline">
                Home
              </Link>
            </li>
            <li className="underline-offset-4">
              <Link href="./about" className="hover:underline">
                About us
              </Link>
            </li>
            <li className="underline-offset-4">
              <Link
                href="./academics"
                className="flex items-center gap-2 hover:underline"
              >
                Academics{" "}
                <span>
                  <FaChevronDown />
                </span>
              </Link>
            </li>
            <li className="underline-offset-4">
              <Link
                href="./admission"
                className="flex items-center gap-2 hover:underline"
              >
                Admission{" "}
                <span>
                  <FaChevronDown />
                </span>
              </Link>
            </li>
            <li className="underline-offset-4">
              <Link
                href="./hostel"
                className="flex items-center gap-2 hover:underline"
              >
                Hostel{" "}
                <span>
                  <FaChevronDown />
                </span>
              </Link>
            </li>
            <li className="underline-offset-4">
              <Link href="./contact" className="hover:underline">
                Contact us
              </Link>
            </li>
            <li className="underline-offset-4">
              <Link href="./fresher" className="hover:underline">
                Fresher's corner
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between px-12 gap-4 mt-5 bg-slate-300 items-center p-2">
        <div className="bg-black text-white p-2 flex items-center gap-2 rounded-full">
          <span>
            <GrAnnounce />
          </span>
          Announcements
        </div>
        <div>
        <Marquee speed={40} gradient={false}>
          <p>
            Practical exam time table | Enrollment data update | Practical exam
            time table | Enrollment data update | Practical exam time table
          </p>
          </Marquee>
        </div>
        <div>
          <GiHamburgerMenu />
        </div>
      </div>
    </header>
  );
};