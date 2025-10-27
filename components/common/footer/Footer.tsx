"use client";
import { quickFindings, importantLinks, moreInformation } from "@/constants/footer/footer";
import Link from "next/link";
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMap,
  FaImage,
} from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/davv.iet?mibextid=rS40aB7S9Ucbxw6v", icon: FaFacebook },
  { label: "Instagram", href: "https://www.instagram.com/ietdavvofficial?igsh=MWVsdHI3d2E3ZXppNw==", icon: FaInstagram },
  { label: "Twitter", href: "https://x.com/ietdavv?s=08", icon: FaTwitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/school/ietdavv/", icon: FaLinkedin },
];

const Footer = () => {
  return (
    <motion.div className="bg-black px-5 py-10 overflow-hidden">
      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Reach Us */}
        <div className="col-span-1 lg:col-span-2 flex flex-col items-start p-5 border-b lg:border-b-0 lg:border-r border-[#D9D9D9] space-y-5">
          <h1 className="font-bold text-white text-2xl">Reach Us</h1>

          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-white" size={30} />
            <p className="font-medium text-[#F1F1F1] text-[15px] max-w-sm">
              Institute of Engineering and Technology<br />
              Devi Ahilya Vishwavidyalaya<br />
              Khandwa Road, Indore-452017 (M.P.)
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-white" size={20} />
            <p className="font-medium text-[#F1F1F1] text-[15px] hover:text-light-blue">
              
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-white" size={20} />
            <p className="font-medium text-[#F1F1F1] text-[15px] hover:text-light-blue">
              ao@ietdavv.edu.in
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <FaMap className="text-white" size={20} />
            <p className="font-medium text-[#F1F1F1] text-[15px] hover:text-light-blue">
              Campus Map
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <FaImage className="text-white" size={20} />
            <p className="font-medium text-[#F1F1F1] text-[15px] hover:text-light-blue">
              Photo Gallery
            </p>
          </div>
        </div>

        {/* Important Links */}
        <div className="flex flex-col items-start space-y-5 p-5">
          <h1 className="font-bold text-white text-2xl">Important Links</h1>
          <div className="flex flex-col space-y-2">
            {importantLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <Link
                  href={link.url}
                  className="font-medium text-[#F1F1F1] text-[15px] hover:text-light-blue"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Findings */}
        <div className="flex flex-col items-start space-y-5 p-5">
          <h1 className="font-bold text-white text-2xl">Quick Findings</h1>
          <div className="flex flex-col space-y-2">
            {quickFindings.map((info, index) => (
              <motion.div
                key={info.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <Link
                  href={info.value}
                  className="font-medium text-[#F1F1F1] text-[15px] hover:text-light-blue"
                >
                  {info.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div> {/* Grid ends */}

      {/* Bottom Strip */}
      <div className="border-t border-[#D9D9D9] pt-5 mt-8 space-y-4">

        {/* Policy Links — above copyright & social icons */}
        <div className="flex flex-wrap justify-center items-center gap-3 text-xs">
          {moreInformation.map((link, index) => (
            <React.Fragment key={link.name}>
              <Link
                href={link.url}
                className="text-[#D9D9D9] hover:text-light-blue transition"
              >
                {link.name}
              </Link>
              {index < moreInformation.length - 1 && (
                <span className="h-3 w-px bg-[#D9D9D9]"></span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Copyright & Social Icons */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full md:w-auto space-y-2 md:space-y-0 md:space-x-3 mt-3">
          <p className="font-medium text-white text-xs text-center md:text-left">
            © 2025 IET-DAVV. All rights reserved.
          </p>
          <div className="flex items-center space-x-3">
            {socialLinks.map(({ label, href, icon: Icon }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full transition transform hover:scale-110"
                style={{
                  color:
                    label === "Facebook"
                      ? "#1877F2"
                      : label === "Instagram"
                      ? "#E4405F"
                      : label === "Twitter"
                      ? "#1DA1F2"
                      : label === "LinkedIn"
                      ? "#0A66C2"
                      : "#ffffff",
                  backgroundColor: "white",
                }}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
