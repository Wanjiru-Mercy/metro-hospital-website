import React from "react";
import { motion } from "framer-motion";
import { FaBookMedical, FaStethoscope, FaPills, FaMicroscope, FaVials, FaHeart } from "react-icons/fa";

const HealthLibrary = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Health Library Title Card */}
        <motion.div
          className="bg-primary text-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center space-y-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[#e57384] text-5xl">
            <FaBookMedical />
          </div>
          <h2 className="text-4xl font-extrabold text-[#e57384]">Health Library</h2>
          <p className="text-lg text-gray-100 text-center">
            Explore reliable health information to stay informed and empowered.
          </p>
        </motion.div>

        {/* Menu Items Card */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-primary mb-6">
            Explore Topics
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <FaStethoscope className="text-[#e57384] text-2xl" />
              <a
                href="/diseases"
                className="text-lg text-primary font-medium hover:text-secondary duration-300"
              >
                Diseases & Conditions
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FaHeart className="text-[#e57384] text-2xl" />
              <a
                href="#"
                className="text-lg text-primary font-medium hover:text-secondary duration-300"
              >
                Procedures
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FaPills className="text-[#e57384] text-2xl" />
              <a
                href="#"
                className="text-lg text-primary font-medium hover:text-secondary duration-300"
              >
                Drugs, Devices & Supplements
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FaMicroscope className="text-[#e57384] text-2xl" />
              <a
                href="#"
                className="text-lg text-primary font-medium hover:text-secondary duration-300"
              >
                Diagnostics & Testing
              </a>
            </li>
            <li className="flex items-center gap-4">
              <FaVials className="text-[#e57384] text-2xl" />
              <a
                href="#"
                className="text-lg text-primary font-medium hover:text-secondary duration-300"
              >
                Symptoms
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default HealthLibrary;
