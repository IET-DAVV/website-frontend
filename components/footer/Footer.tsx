import React from "react";
import Link from "next/link";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaYoutube, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 text-sm font-thin">
      <div className="flex justify-between px-12 py-4 gap-2">
        <div>
          <h2 className="text-lg font-medium">Reach Us</h2>
          <div className="py-4">
            <p className="flex items-start mb-4">
              <FiMapPin />
              <span className="px-3">
                {" "}
                Institute of Engineering and Technology
                <br />
                Devi Ahilya Vishwavidyalaya
                <br />
                Khandwa Road Indore-452017 (M.P)
              </span>
            </p>
            <p className="flex mb-4">
              <FiPhone />
              <span className="px-3">0731-2322678</span>
            </p>
            <p className="flex mb-4">
              <MdOutlineEmail />{" "}
              <span className="px-3">contactiet@ietdavv.edu.in</span>
            </p>
          </div>
        </div>
        <div className="h-120 w-0.5 bg-gray-600"></div>
        <div>
          <h2 className="text-lg font-medium">Quick Links</h2>
          <div className="flex flex-col py-4 gap-2">
            <Link href="/administration">Administration</Link>
            <Link href="/antiragging">Antiragging</Link>
            <Link href="/studentFeedback">Student Feedback</Link>
            <Link href="/spokenTutorial">Spoken Tutorial</Link>
            <Link href="/studentFeedback">Student Feedback</Link>
            <Link href="/eBook">E-Books</Link>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-medium">Information</h2>
          <div className="flex flex-col py-4 gap-2">
            <Link href="/#">University Website</Link>
            <Link href="/#">Contact Directory</Link>
            <Link href="/#">Forms</Link>
            <Link href="/#">Mandatory Disclosure</Link>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-medium">Site Map</h2>
          <div className="flex flex-col py-4 gap-2">
            <Link href="/#">About Us</Link>
            <Link href="/#">Academics</Link>
            <Link href="/#">Freshers Corner</Link>
            <Link href="/#">Lift Media</Link>
          </div>
        </div>
      </div>
      <div className="w-50 h-0.5 bg-gray-600 m-8"></div>
      <div className="flex justify-between px-12 pb-4">
        <div>
          <p>&copy; 2023 IET-DAVV All rizghts Reserved</p>
        </div>
        <div className="flex gap-5 justify-end">
          <Link href="./#">
            <BiLogoInstagramAlt />
          </Link>
          <Link href="./">
            <FaYoutube />
          </Link>
          <Link href="./">
            <FaLinkedin />
          </Link>
          <Link href="./">
            <FaFacebook />
          </Link>
          <Link href="./">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
