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
    <div className="container mx-auto mt-20 px-4 py-16">
      {/* Contact Us Heading */}
      <h1
        className={`${playfair.className} text-4xl font-semibold text-center text-light-blue`}
      >
        Contact us
      </h1>
      <p className="text-center text-light-blue mt-2">
        Do you have any questions? Don’t hesitate to contact us
      </p>

      <div
        className={`${playfair.className} grid grid-cols-1 md:grid-cols-2 gap-8 mt-12`}
      >
        {/* Get in Touch Section */}
        <div className="space-y-6">
          <div>
            <h2 className={`${playfair.className} text-4xl`}>Get in Touch</h2>
          </div>

          {/* Address Section */}
          <div className="text-gray-700">
            <div className="flex items-center text-light-blue">
              <FaMapMarkerAlt className="mr-2" size={20} />
              <h3 className={`${manrope.className} text-l font-medium`}>
                Address
              </h3>
            </div>
            <p className={`${manrope.className} ml-8 text-gray-800 mt-2`}>
              Institute of Engineering and Technology, Devi Ahilya
              Vishwavidyalaya, <br />
              Khandwa Road Indore-452017 (M.P)
            </p>
          </div>

          {/* Email Section */}
          <div className="text-gray-700">
            <div className="flex items-center text-light-blue">
              <FaEnvelope className="mr-2" size={20} />
              <h3 className={`${manrope.className} text-l font-medium`}>
                Email
              </h3>
            </div>
            <p className={`${manrope.className} ml-8 text-gray-800 mt-2`}>
              contactiet@ietdavv.edu.in
            </p>
          </div>

          {/* Phone Section */}
          <div className="text-gray-700">
            <div className="flex items-center text-light-blue">
              <FaPhoneAlt className="mr-2" size={20} />
              <h3 className={`${manrope.className} text-l font-medium`}>
                Call Us
              </h3>
            </div>
            <p className={`${manrope.className} ml-8 text-gray-800 mt-2`}>
              0731-2352678
            </p>
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
        <div className="space-y-6">
          <h2 className={`${playfair.className} text-4xl`}>
            Send us a message
          </h2>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </div>
            <div>
              <textarea
                placeholder="Type your message here"
                rows="13"
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-dark-blue text-white text-center w-full text-xl px-32 py-6 rounded-md hover:bg-sky-700"
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
