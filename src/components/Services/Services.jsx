import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, Button } from "antd";
import Topbar from "../Topbar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import servicesHeader from "../../assets/services_header.jpg"

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("Outpatient");
  const [visibleCards, setVisibleCards] = useState(6);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

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

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCards(6);
  };

  const renderServiceCard = (service, index) => (
    <motion.div
      key={`${activeCategory}-${index}`}
      className="h-full"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <Card
        hoverable
        className="h-full shadow-md hover:shadow-lg transition-all duration-300"
      >
        <h3 className="text-xl font-semibold text-primary mb-4">{service}</h3>
        <p className="text-gray-600 mb-4">
          Learn more about our {service.toLowerCase()} offerings and how we can
          assist you.
        </p>
        <Button type="default" className="text-secondary border-secondary hover:bg-secondary hover:text-white">
          Read More
        </Button>
      </Card>
    </motion.div>
  );

  return (
    <div className="overflow-x-hidden font-sans">
      <Topbar />
      <header
        className="relative bg-cover bg-center h-[400px] md:h-[500px]"
       
        style={{ backgroundImage: `url(${servicesHeader})` }}



      >
        <Navbar />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Caring for You, Every Step of the Way
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Explore our wide range of healthcare services tailored to your needs.
          </p>
          <Button
            type="primary"
            size="large"
            className="mt-6 bg-secondary hover:bg-[#a31519] border-none"
          >
            Contact Us
          </Button>
        </div>
      </header>

      {/* Tabs Section with Button Styling */}
      <section className="container mx-auto py-12 px-4">
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {Object.keys(serviceCategories).map((category) => (
            <Button
              key={category}
              shape="round"
              size="large"
              className={`px-6 py-2 text-lg font-medium ${
                activeCategory === category
                  ? "bg-secondary text-white border-secondary"
                  : "bg-gray-200 text-gray-700 border-gray-200 hover:bg-secondary hover:text-white hover:border-secondary"
              } transition-all duration-300`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Service Cards */}
        {isMounted && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            key={activeCategory}
          >
            {serviceCategories[activeCategory]
              ?.slice(0, visibleCards)
              .map(renderServiceCard)}
          </motion.div>
        )}

        {/* Load More Button */}
        {visibleCards < (serviceCategories[activeCategory]?.length || 0) && (
          <div className="flex justify-center mt-8">
            <Button
              shape="round"
              onClick={() => setVisibleCards((prev) => prev + 6)}
              className="border-secondary text-secondary hover:bg-secondary hover:text-white"
            >
              See More Services
            </Button>
          </div>
        )}
      </section>

      {/* Images Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="/src/assets/services_image1.jpg"
            alt="Healthcare Service"
            className="rounded-lg shadow-lg"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-primary">
              Excellence in Healthcare
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Metropolitan Hospital, we are committed to providing top-notch
              medical care with state-of-the-art facilities and a compassionate
              team of professionals.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;