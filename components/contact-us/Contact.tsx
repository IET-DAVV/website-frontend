import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Manrope, Playfair } from "next/font/google";

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ContactUs = () => {
  return (
    <div className="flex flex-col space-y-10 mx-auto p-16">
      <div className="flex flex-col space-y-2">
        <h1
          className={`${playfair.className} text-6xl font-semibold text-center text-light-blue`}
        >
          Contact us
        </h1>
        <p className="text-center text-light-blue mt-2">
          Do you have any questions? Don&apos;t hesitate to contact us
        </p>
      </div>
      <div
        className={`${playfair.className} grid grid-cols-1 md:grid-cols-2 gap-20 h-full `}
      >
        <div className="space-y-6">
          <div>
            <h2 className={`${playfair.className} text-4xl text-black`}>
              Get in Touch
            </h2>
          </div>

          {/* Address Section */}
          <div className="text-black flex flex-col space-y-2">
            <div className="flex items-center text-light-blue">
              <FaMapMarkerAlt className="mr-2" size={20} />
              <h3 className={`${manrope.className} font-medium`}>Address</h3>
            </div>
            <p className={`${manrope.className}  text-black`}>
              Institute of Engineering and Technology, Devi Ahilya
              Vishwavidyalaya, <br />
              Khandwa Road Indore-452017 (M.P)
            </p>
          </div>

          {/* Email Section */}
          <div className="text-black flex flex-col space-y-2">
            <div className="flex items-center text-light-blue">
              <FaEnvelope className="mr-2" size={20} />
              <h3 className={`${manrope.className} font-medium`}>Email</h3>
            </div>
            <p className={`${manrope.className} text-black `}>
              contactiet@ietdavv.edu.in
            </p>
          </div>

          {/* Phone Section */}
          <div className="text-black flex flex-col space-y-2">
            <div className="flex items-center text-light-blue">
              <FaPhoneAlt className="mr-2" size={20} />
              <h3 className={`${manrope.className} font-medium`}>Call Us</h3>
            </div>
            <p className={`${manrope.className} text-black`}>0731-2352678</p>
          </div>

          {/* Map Section */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.603071302143!2d-74.0119439240958!3d40.70783364844964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3ad17959fa90d3d0!2zNDAuNzA3ODMzLCAtNzQuMDExOTQz!5e0!3m2!1sen!2sus!4v1694183935048!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              title="Map Location"
            ></iframe>
          </div>
        </div>

        {/* Send Message Section */}
        <div className="space-y-6 h-full">
          <h2 className={`${playfair.className} text-4xl text-black`}>
            Send us a message
          </h2>
          <form className={`${manrope.className} space-y-7`}>
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border text-black text-sans border-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border text-black text-sans border-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </div>
            <div>
              <textarea
                placeholder="Type your message here"
                rows={13}
                className="w-full border text-black text-sans border-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-dark-blue text-white text-center w-full text-xl py-2 hover:bg-light-blue transition duration-300 ease-linear rounded-md hover:bg-sky-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
