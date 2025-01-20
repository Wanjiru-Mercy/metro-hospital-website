import React, { useState } from "react";
import { motion } from "framer-motion";
import Topbar from "../Topbar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("Outpatient");

  const serviceCategories = {
    Outpatient: [
      "Renal Unit (Dialysis)",
      "Pharmacy",
      "Dental",
      "Ambulance",
      "Trauma and Emergency",
      "Diagnostic Imaging (CT-Scan, X-Ray & Ultrasound)",
      "Laboratory",
    ],
    Inpatient: [
      "Operating Theatres",
      "Adult Ward",
      "Critical Care",
      "Maternity",
      "Paediatric",
    ],
    "Specialist Clinics": [
      "Gynaecology",
      "Gastrology",
      "Psychiatry",
      "Midwife Clinic",
      "Physiotherapy",
      "Urology",
      "MOPC",
      "Plastic Surgery",
      "Cardiology",
      "Oncology",
      "Ear, Nose, and Throat",
      "Family Planning",
      "Nutrition",
      "Endoscopy",
    ],
  };

  const renderCards = (services) =>
    services.map((service, index) => (
      <motion.div
        key={index}
        className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <h3 className="text-xl font-semibold text-primary mb-4">{service}</h3>
        <p className="text-gray-600 mb-4">
          Learn more about our {service.toLowerCase()} offerings and how we can
          assist you.
        </p>
        <button className="px-4 py-1.5 bg-[#f28b8c] text-white text-sm font-medium rounded-md hover:bg-[#e57384] duration-300 self-start">
          Read More
        </button>
      </motion.div>
    ));

  return (
    <div className="overflow-x-hidden font-sans">
      {/* Topbar and Navbar */}
      <Topbar />
      <Navbar />

      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center h-[400px] md:h-[500px]"
        style={{ backgroundImage: `url('/src/assets/services_header.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Caring for You, Every Step of the Way
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Explore our wide range of healthcare services tailored to your
            needs.
          </p>
          <button className="mt-6 px-8 py-3 bg-secondary text-white font-medium rounded-full hover:bg-[#a31519] duration-300">
            Contact Us
          </button>
        </div>
      </header>

      {/* Tabs Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="flex justify-center space-x-4 mb-8">
          {Object.keys(serviceCategories).map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-lg font-medium ${
                activeCategory === category
                  ? "bg-secondary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-secondary hover:text-white"
              } transition duration-300`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {renderCards(serviceCategories[activeCategory])}
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
