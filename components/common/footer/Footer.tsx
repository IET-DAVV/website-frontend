"use client";
import { information, quickLinks, sitemap } from "@/constants/footer/footer";
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
} from "react-icons/ci";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div className="bg-black p-10 overflow-hidden">
      <div className="grid grid-cols-6 p-10 gap-10">
        {/* Reach Us */}
        <div className="col-span-2 flex flex-col items-start p-5 border-r border-[#D9D9D9] justify-start space-y-5">
          <h1 className="font-medium text-white text-lg">Reach Us</h1>
          <div className="flex items-center justify-start space-x-3">
            <CiLocationOn className="text-white" size={30} />
            <p className="font-light text-light-gray text-xs">
              Institute of Engineering and Technology, Devi Ahilya Vishwavidhyalaya,
              Khandwa Road, Indore, Madhya Pradesh 452010
            </p>
          </div>
          <div className="flex items-center justify-start space-x-3">
            <CiPhone className="text-white" size={20} />
            <p className="font-light text-light-gray text-sm hover:text-light-blue">
              +91 731 403 0303
            </p>
          </div>
          <div className="flex items-center justify-start space-x-3">
            <CiMail className="text-white" size={20} />
            <p className="font-light text-light-gray text-sm hover:text-light-blue">
              iet@dauniv.ac.in
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start justify-start space-y-5 p-5">
          <h1 className="font-medium text-white text-lg">Quick Links</h1>
          <motion.div className="flex flex-col items-start justify-start space-y-2">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <Link
                  href={link.url}
                  className="font-light text-light-gray text-sm hover:text-light-blue"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Information */}
        <div className="flex flex-col items-start justify-start space-y-5 p-5">
          <h1 className="font-medium text-white text-lg">Information</h1>
          <motion.div className="flex flex-col items-start justify-start space-y-2">
            {information.map((info, index) => (
              <motion.div
                key={info.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <Link
                  href={info.value}
                  className="font-light text-light-gray text-sm hover:text-light-blue"
                >
                  {info.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Sitemap */}
        <div className="flex flex-col items-start justify-start space-y-5 p-5">
          <h1 className="font-medium text-white text-lg">Sitemap</h1>
          <div className="flex flex-col items-start justify-start space-y-2">
            {sitemap.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <Link
                  href={link.url}
                  className="font-light text-light-gray text-sm hover:text-light-blue"
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

      {/* Footer bottom */}
      <div className="flex w-full justify-between items-center border-t border-[#D9D9D9] pt-5 mt-10">
        <p className="font-light text-white text-xs">
          Copyright © 2024 IET-DAVV. All rights reserved.
        </p>
        <div className="flex items-center justify-start space-x-3">
          <Link href={"/"}>
            <CiFacebook className="text-white border border-[#D9D9D9] p-1 rounded-full" size={30} />
          </Link>
          <Link href={"/"}>
            <CiInstagram className="text-white border border-[#D9D9D9] p-1 rounded-full" size={30} />
          </Link>
          <Link href={"/"}>
            <CiTwitter className="text-white border border-[#D9D9D9] p-1 rounded-full" size={30} />
          </Link>
          <Link href={"/"}>
            <CiLinkedin className="text-white border border-[#D9D9D9] p-1 rounded-full" size={30} />
          </Link>
          <Link href={"/"}>
            <CiYoutube className="text-white border border-[#D9D9D9] p-1 rounded-full" size={30} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;