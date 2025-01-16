import React from "react";
import { FaAmbulance, FaUserMd, FaBaby, FaParking } from "react-icons/fa";
import { GiHealthCapsule } from "react-icons/gi";

const Amenities = () => {
  const amenities = [
    {
      title: "Ambulance Services",
      icon: <FaAmbulance size={40} className="text-secondary" />,
    },
    {
      title: "HCA Course",
      icon: <GiHealthCapsule size={40} className="text-secondary" />,
    },
    {
      title: "Consultants Plaza",
      icon: <FaUserMd size={40} className="text-secondary" />,
    },
    {
      title: "Maternity Unit",
      icon: <FaBaby size={40} className="text-secondary" />,
    },
    {
      title: "Ample Parking",
      icon: <FaParking size={40} className="text-secondary" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
  <div className="container mx-auto text-center">
    {/* Section Heading */}
    <h2 className="text-3xl font-bold text-primary mb-6 font-sans uppercase">
      World-Class Amenities
    </h2>
    <p className="text-gray-600 mb-12 font-sans">
      Discover the facilities that set us apart in healthcare.
    </p>

    {/* Grid of Amenities */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
      {amenities.map((amenity, index) => (
        <div
          key={index}
          className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center space-y-4 hover:shadow-xl transition-shadow duration-300 font-sans"
        >
          <div className="bg-gray-100 p-4 rounded-full">{amenity.icon}</div>
          <h3 className="text-lg font-semibold text-primary font-sans">{amenity.title}</h3>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Amenities;
