import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero/Hero";
import BgVideo from "./assets/bg_video.mp4";
import HealthLibrary from "./components/HealthLibrary/HealthLibrary";
import Amenities from "./components/Amenities/Amenities";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
      <div className="overflow-x-hidden font-sans">
        {/* Topbar */}
        <Topbar />
  
        {/* Navbar */}
        <Navbar />
  
        {/* Main Content */}
        <div className="relative">
          {/* Video Background */}
          <video
            src={BgVideo}
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
          />
  
          {/* Hero Section */}
          <Hero />
  
          {/* Other Sections */}
          <Amenities />
          <HealthLibrary />
          <Footer />
        </div>
      </div>
    );
  };
  

export default App;
