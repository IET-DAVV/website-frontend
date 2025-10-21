import RIPage from "@/components/Research_&_Innovation/R&IPage";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const InnovationCell: React.FC = () => {
  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* ===== Header ===== */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="flex justify-between items-center px-6 py-3 text-sm text-gray-600">
          <div className="flex gap-5">
            <span>📧 1234@ietdavv.edu.in</span>
            <span>📞 +0731-2455856</span>
          </div>
          <div>Placement | Courses | Notice | Alumni</div>
        </div>

        {/* Navbar */}
        <nav className="flex justify-between items-center px-10 py-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-semibold text-green-800"
          >
            Institute of Engineering and Technology
          </motion.div>

          <ul className="flex gap-8 text-sm font-medium text-gray-700">
            {["Home", "About us", "Academics", "Admission", "Hostel", "Contact us", "Fresher’s Corner"].map(
              (item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.1, color: "#1e40af" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="cursor-pointer"
                >
                  {item}
                </motion.li>
              )
            )}
          </ul>

          <input
            type="text"
            placeholder="🔍 Search"
            className="border border-gray-300 rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </nav>
      </header>

      {/* ===== Title Section ===== */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-900 tracking-wide"
        >
          RESEARCH AND INNOVATION
        </motion.h1>

        <motion.div
          className="mt-6 flex justify-center flex-wrap gap-6 text-gray-700 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            "Research Labs & Centres",
            "Funded Projects",
            "Publications & Patents",
            "Consultancy & MoUs",
            "Innovation Cell / IIC",
          ].map((tab, i) => (
            <a
              key={i}
              href="#"
              className={`hover:text-blue-800 ${
                tab === "Innovation Cell / IIC" ? "font-semibold underline text-blue-800" : ""
              }`}
            >
              {tab}
            </a>
          ))}
        </motion.div>
      </section>

      {/* ===== Main Content ===== */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 leading-relaxed space-y-5"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Incubation Centre</h2>
          <p>
            Devi Ahilya Vishwavidyalaya, Incubation Centre (DAVV-IC) is a Section 8 company designed to foster
            a vibrant ecosystem of technology incubation and entrepreneurship. By aligning with national
            priorities, DAVV-IC aims to generate employment, create wealth, and build successful businesses.
          </p>
          <p>
            The center provides a nurturing environment for emerging startups, particularly those originating
            from academia, to help them transition from innovative ideas to scalable, sustainable businesses.
            DAVV-IC is registered under CIN No.{" "}
            <strong>U80901MP2022NPL063927</strong> and has obtained <strong>12A & 80G</strong> certificates for
            tax exemptions and CSR registration.
          </p>
          <p>
            The DAVV Incubation Forum aims to connect budding entrepreneurs, startups, and mentors by providing
            resources, networking opportunities, and a platform to showcase innovative ideas.
          </p>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button className="bg-blue-700 hover:bg-blue-800 text-white rounded-full px-6 py-2 mt-4 shadow-md transition">
              Explore More
            </Button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/images/davv-incubation-centre.jpg"
            alt="DAVV Incubation Centre"
            className="rounded-2xl shadow-lg w-full max-w-md hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-[#111] text-gray-300 pt-12 pb-8 mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6 text-sm">
          {/* Reach Us */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Reach Us</h4>
            <p className="flex items-start gap-2">
              <MapPin size={16} /> Institute of Engineering and Technology<br />Devi Ahilya Vishwavidyalaya<br />
              Khandwa Road, Indore - 452017 (M.P.)
            </p>
            <p className="mt-3 flex items-center gap-2">
              <Phone size={16} /> 0731-2366826
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> contact@ietdavv.edu.in
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
            <ul className="space-y-1">
              <li>Administration</li>
              <li>Antiragging</li>
              <li>Student Feedback</li>
              <li>Spoken Tutorial</li>
              <li>E-Books</li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Information</h4>
            <ul className="space-y-1">
              <li>University Website</li>
              <li>Contact Directory</li>
              <li>Forms</li>
              <li>Mandatory Disclosure</li>
            </ul>
          </div>

          {/* Site Map */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Site Map</h4>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Academics</li>
              <li>Freshers Corner</li>
              <li>Lift Media</li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2, color: "#fff" }}
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-700 pt-4">
          ©2025 IET-DAVV. All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default InnovationCell;
