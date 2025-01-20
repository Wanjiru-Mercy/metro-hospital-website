import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero/Hero";
import BgVideo from "./assets/bg_video.mp4";
import HealthLibrary from "./components/HealthLibrary/HealthLibrary";
import Amenities from "./components/Amenities/Amenities";
import Footer from "./components/Footer/Footer";
import Highlights from "./components/Highlights/Highlights";

const App = () => {
    return (
      <div className="overflow-x-hidden font-sans">
        <Topbar />
        <div className="relative">
          {/* Video Background Section */}
          <div className="absolute top-0 left-0 w-full h-screen">
            <video
              src={BgVideo}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          </div>
  
          {/* Foreground Content */}
          <div className="relative z-10">
            <Navbar />
            <Hero />
            <Highlights />
            <HealthLibrary />
            <Amenities />
            <Footer />
          </div>
        </div>
      </div>
    );
  };
  
  

  

export default App;
