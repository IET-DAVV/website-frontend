'use client';
import React from "react";
import { motion, Variants } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Manrope, Playfair } from "next/font/google";
import Title from "../common/academics/Title";
import { useEffect, useState } from "react";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const underlineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 10,
      delay: 0.5,
    },
  },
};



// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};


const ContactUs = () => {
  return (
    <div className="flex flex-col space-y-10 mx-auto p-16">
      {/* Title Section */}
      <motion.div
        className="flex flex-col"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Title title="CONTACT US" />
        <p className="text-center text-light-blue">
          Do you have any questions? Don&apos;t hesitate to contact us
        </p>
      </motion.div>

      {/* Grid Section */}
      <motion.div
        className={`${playfair.className} grid grid-cols-1 md:grid-cols-2 gap-20 h-full`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Contact Info */}
        <motion.div className="space-y-6" variants={fadeUp}>
          <h2 className="text-4xl text-black">Get in Touch</h2>

          {/* Address */}
          <motion.div className="text-black flex flex-col space-y-2" variants={fadeUp}>
            <div className="flex items-center text-light-blue">
              <FaMapMarkerAlt className="mr-2" size={20} />
              <div className="flex flex-col">
                <h3 className={`${manrope.className} font-medium`}>Address </h3>
                <motion.div
                  className="h-[2px] bg-light-blue w-full"
                  style={{ transformOrigin: "left" }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={underlineVariants}
                />

              </div>

            </div>
            <p className={`${manrope.className}`}>
              Institute of Engineering & Technology,
              <br /> 
              Vikramshila Parisar,
              <br />
              Devi Ahilya Vishwavidyalaya,
              <br />
              Khandwa Road Indore-452017 (M.P.)
            </p>
          </motion.div>

          {/* Email */}
          <motion.div className="text-black flex flex-col space-y-2" variants={fadeUp}>
            <div className="flex items-center text-light-blue">
              <FaEnvelope className="mr-2" size={20} />
              <div className="flex flex-col">
                <h3 className={`${manrope.className} font-medium`}>Email </h3>
                <motion.div
                  className="h-[3px] bg-light-blue w-full"
                  style={{ transformOrigin: "left" }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={underlineVariants}
                />

              </div>

            </div>
            <a href="mailto:ao@ietdavv.edu.in"
              className={`${manrope.className} transition-colors duration-200 hover:text-light-blue hover:underline`}
            >
              ao@ietdavv.edu.in
            </a>
          </motion.div>

          {/* Phone */}
          {/* <motion.div className="text-black flex flex-col space-y-2" variants={fadeUp}>
            <div className="flex items-center text-light-blue">
              <FaPhoneAlt className="mr-2" size={20} />
              <div className="flex flex-col">
                <h3 className={`${manrope.className} font-medium`}>Call Us </h3>
                <motion.div
                  className="h-[2px] bg-light-blue w-full"
                  style={{ transformOrigin: "left" }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={underlineVariants}
                />

              </div>

            </div>
            <p className={`${manrope.className}`}></p>
          </motion.div> */}
          {/* un comment only when we get the number  */}

          {/* Map */}
          <motion.div variants={fadeUp}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.6346805629755!2d75.87664765623428!3d22.681014494832198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcc03e36712d%3A0xb6f3c2bf734a7c!2sInstitute%20of%20Engineering%20%26%20Technology%2C%20DAVV!5e0!3m2!1sen!2sin!4v1752181961945!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              title="Map Location"
            ></iframe>
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.div className="space-y-6 h-full" variants={fadeUp}>
          <h2 className="text-4xl text-black">Send us a message</h2>
          <motion.form className={`${manrope.className} space-y-7`} variants={fadeUp}>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border text-black text-sans border-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
            <input
              type="email"
              placeholder="Email (e.g., name@example.com)"
              className="w-full border text-black text-sans border-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              required
            />
            <input
            type="tel"
            placeholder="Contact Number (e.g., 9876543210)"
            className="w-full border text-black text-sans border-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
            pattern="[0-9]{10}"
            title="Please enter a 10-digit contact number"
            required
          />
            <textarea
              placeholder="Type your message here"
              rows={13}
              className="w-full border text-black text-sans border-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-dark-blue text-white text-center w-full text-xl py-2 transition duration-300 ease-in-out rounded-md hover:bg-sky-700"
            >
              Submit
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
