"use client";
import { quickFindings, importantLinks, moreInformation } from "@/constants/footer/footer";
import Link from "next/link";
import React from "react";
import {
  CiLocationOn,
  CiPhone,
  CiMail,
  CiFacebook,
  CiInstagram,
  CiTwitter,
  CiLinkedin,
  CiYoutube,
  CiMap,
  CiImageOn,
} from "react-icons/ci";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div className="bg-black px-5 py-10 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Reach Us */}
        <div className="col-span-1 lg:col-span-2 flex flex-col items-start p-5 border-b lg:border-b-0 lg:border-r border-[#D9D9D9] space-y-5">
          <h1 className="font-bold text-white text-2xl">Reach Us</h1>
          <div className="flex items-start space-x-3">
            <CiLocationOn className="text-white" size={30} />
            <p className="font-medium text-[#F1F1F1] font-xl text-[15px] max-w-sm">
              Institute of Engineering and Technology
              Devi Ahilya Vishwavidyalaya
              Khandwa Road Indore-452017 (M.P.)
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <CiPhone className="text-white" size={20} />
            <p className="font-medium text-[#F1F1F1] font-xl text-[15px] hover:text-light-blue">
              +91 0731-2322678
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <CiMail className="text-white" size={20} />
            <p className="font-medium text-[#F1F1F1] font-xl text-[15px] hover:text-light-blue">
              contactiet@ietdavv.edu.in
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <CiMap className="text-white" size={20} />
            <p className="font-medium text-[#F1F1F1] font-xl text-[15px] hover:text-light-blue">
              Campus Map
            </p>
          </div> <div className="flex items-center space-x-3">
            < CiImageOn className="text-white" size={20} />
            <p className="font-medium text-[#F1F1F1] font-xl text-[15px] hover:text-light-blue">
              Photo Gallery
            </p>
          </div>
        </div>

        {/* Quick Links */}
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
                  className="font-medium text-[#F1F1F1] font-xl text-[15px] hover:text-light-blue"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Information */}
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
                  className="font-medium text-[#F1F1F1] font-xl text-[15px] hover:text-light-blue"
                >
                  {info.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sitemap */}
        <div className="flex flex-col items-start space-y-5 p-5">
          <h1 className="font-bold text-white text-2xl">More Information</h1>
          <div className="flex flex-col space-y-2">
            {moreInformation.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <Link
                  href={link.url}
                  className="font-medium text-[#F1F1F1] font-xl text-[15px] hover:text-light-blue"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Miscellaneous */}
        <div className="flex flex-col items-start justify-start space-y-5 p-5">
          <h1 className="font-medium text-white text-lg">Miscellaneous</h1>
          <Link
            href="/grievance"
            className="font-light text-light-gray text-sm hover:text-light-blue"
          >
            Grievance
          </Link>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#D9D9D9] pt-5 mt-8 space-y-4 md:space-y-0">
        <p className="font-medium text-white text-xs text-center md:text-left">
          © 2024 IET-DAVV. All rights reserved.
        </p>
        <div className="flex items-center space-x-3">
          {[CiFacebook, CiInstagram, CiTwitter, CiLinkedin, CiYoutube].map(
            (Icon, idx) => (
              <Link href="/" key={idx}>
                <Icon
                  className="text-white border border-[#D9D9D9] p-1 rounded-full hover:text-light-blue hover:border-light-blue transition"
                  size={30}
                />
              </Link>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
