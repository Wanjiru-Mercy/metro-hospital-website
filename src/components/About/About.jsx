import React from "react";
import Topbar from "../Topbar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div className="overflow-x-hidden font-sans">
      {/* Topbar and Navbar */}
      <Topbar />
      <header
				className="relative bg-cover bg-center h-[400px] md:h-[500px]"
				style={{
					backgroundImage: `url('/src/assets/about_header.jpg')`,
				}}
			>
				<Navbar />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="text-lg md:text-xl mt-4">
            Discover our journey, values, and commitment to your health.
          </p>
        </div>
      </header>

      {/* History Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
          Our History
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 leading-relaxed">
              Metropolitan Hospital is a 160-bed level 5 facility located in the
              greater Eastlands Nairobi. Established in 1994, it began with a
              vision from young professionals, primarily doctors, aiming to
              provide mid-cost healthcare to the underserved Eastlands
              community. Over the years, the hospital has grown into Eastlands'
              medical hub, providing ultra-modern facilities and specialized
              care.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              With 435 staff, over 206 doctors and consultants, and a commitment
              to quality and cost-effective healthcare, we are proud to be
              accredited by COHSASA for maintaining the highest standards.
            </p>
          </div>
          <div className="relative">
            <img
              src="/src/assets/metro_image2.jpg"
              alt="Hospital History"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-primary bg-opacity-20 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Core Values */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="container mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                Mission
              </h3>
              <p className="text-gray-700">
                To offer quality, cost-effective, and affordable healthcare
                services.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                Vision
              </h3>
              <p className="text-gray-700">
                To be the leading hospital in Nairobi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
          Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Innovation", description: "Breaking into the market with originality and new ideas." },
            { title: "Integrity", description: "Honesty and harmony in thoughts, words, and actions." },
            { title: "Teamwork", description: "Cooperation and leveraging individual strengths for the collective good." },
            { title: "Quality", description: "Meeting customer expectations with reliable, durable, and valuable services." },
            { title: "Professionalism", description: "Performing tasks with genuine interest, sincerity, and ethics." },
            { title: "Empathy", description: "Mutual understanding and care for others' thoughts and emotions." },
          ].map((value, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="relative bg-cover bg-center py-12"
        style={{ backgroundImage: `url('/src/assets/team_bg.jpg')` }}
      >
       
        {/* <div className="relative container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold">Join Our Family</h2>
          <p className="text-lg mt-4">
            Become part of a community dedicated to better healthcare.
          </p>
          <button className="mt-6 px-8 py-3 bg-secondary text-white font-medium rounded-full hover:bg-[#a31519] duration-300">
            Learn More
          </button>
        </div> */}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
