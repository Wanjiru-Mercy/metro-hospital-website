import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Topbar from "../Topbar"
const doctors = [
  {
    name: "Dr. Sarah Johnson",
    position: "Consultant Cardiologist",
    qualifications: "MBBS, MD, FACC",
    rating: 4.5,
    image: "/src/assets/doctor1.jpg",
    bio: "Dr. Sarah Johnson has over 20 years of experience in cardiology, specializing in interventional procedures and patient care.",
  },
  {
    name: "Dr. Michael Lee",
    position: "Orthopedic Surgeon",
    qualifications: "MBBS, MS (Ortho)",
    rating: 4,
    image: "/src/assets/doctor2.jpg",
    bio: "A leading orthopedic surgeon, Dr. Michael Lee focuses on minimally invasive techniques and sports injury recovery.",
  },
  {
    name: "Dr. Emily Davis",
    position: "Pediatrician",
    qualifications: "MBBS, DCH, MD",
    rating: 5,
    image: "/src/assets/doctor3.jpg",
    bio: "Dr. Emily Davis is passionate about child health and development, offering exceptional pediatric care.",
  },
  {
    name: "Dr. David Brown",
    position: "General Physician",
    qualifications: "MBBS, MD",
    rating: 3.5,
    image: "/src/assets/doctor4.jpg",
    bio: "Dr. David Brown provides comprehensive primary care, with a focus on preventive health and chronic disease management.",
  },
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {Array(fullStars)
        .fill(null)
        .map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-400" />
        ))}
      {halfStar && <FaStarHalfAlt className="text-yellow-400" />}
      {Array(emptyStars)
        .fill(null)
        .map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-yellow-400" />
        ))}
    </>
  );
};

const OurDoctors = () => {
  return (
    <div className="overflow-x-hidden font-sans bg-gradient-to-b from-blue-50 to-white">
        <Topbar/>
      {/* Header with Navbar */}
      <header
        className="relative bg-cover bg-center h-[400px] md:h-[500px]"
        style={{ backgroundImage: `url('/src/assets/doctors_header2.jpg')` }}
      >
        <Navbar />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Meet Our Experienced Doctors
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Dedicated to providing compassionate and quality healthcare.
          </p>
        </div>
      </header>

      {/* Doctors Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
          Our Doctors
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          Meet the highly skilled and compassionate professionals behind our exceptional healthcare services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-tr from-blue-50 to-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="relative w-full h-[300px] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-primary">
                  {doctor.name}
                </h3>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <p className="text-sm text-gray-200 italic">{doctor.position}</p>
                <div className="flex items-center mt-3">{renderStars(doctor.rating)}</div>
                <p className="text-sm text-gray-300 mt-4">{doctor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      <br/>


      <section className="container mx-auto py-12 px-4">
      

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-tr from-blue-50 to-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="relative w-full h-[300px] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-primary">
                  {doctor.name}
                </h3>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <p className="text-sm text-gray-200 italic">{doctor.position}</p>
                <div className="flex items-center mt-3">{renderStars(doctor.rating)}</div>
                <p className="text-sm text-gray-300 mt-4">{doctor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OurDoctors;
