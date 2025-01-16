import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
    {/* Top Half */}
    <div
      className="relative bg-cover bg-center h-[180px] md:h-[250px]"
      style={{ backgroundImage: `url('/src/assets/metro_image.jpeg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4 space-y-3">
        <h3 className="text-lg md:text-xl font-semibold font-sans">Discover Quality Healthcare</h3>
        <p className="text-xs md:text-sm max-w-[500px] leading-snug font-sans">
          Learn more about our facilities, team, and services dedicated to your well-being.
        </p>
        <button className="font-sans px-5 py-2 bg-secondary text-white font-medium rounded-full hover:bg-[#a31519] duration-300 text-sm">
          Learn More
        </button>
      </div>
    </div>
  
    {/* Bottom Half */}
    <div className="bg-primary text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Logo and About */}
        <div className="space-y-2">
          <img src="/metro_logo.png" alt="Logo" className="h-12" />
          <p className="text-xs leading-snug font-sans">
            Delivering compassionate and quality healthcare for over 20 years.
          </p>
        </div>
  
        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-xs">
            <li>
              <a href="#services" className="hover:text-secondary">Our Services</a>
            </li>
            <li>
              <a href="#about-us" className="hover:text-secondary">About Us</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-secondary">Contact Us</a>
            </li>
            <li>
              <a href="#appointments" className="hover:text-secondary">Book an Appointment</a>
            </li>
          </ul>
        </div>
  
        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-base font-semibold mb-2">Subscribe to Our Newsletter</h3>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 flex-1 rounded-md text-black text-xs"
            />
            <button type="submit" className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-[#a31519] duration-300 text-xs">
              Subscribe
            </button>
          </form>
        </div>
      </div>
  
      {/* Social Media Links */}
      <div className="mt-4 flex justify-center gap-4">
        <a href="#" className="hover:text-secondary">
          <FaFacebook className="text-sm" />
        </a>
        <a href="#" className="hover:text-secondary">
          <FaTwitter className="text-sm" />
        </a>
        <a href="#" className="hover:text-secondary">
          <FaInstagram className="text-sm" />
        </a>
      </div>
  
      {/* Bottom Bar */}
      <div className="text-center mt-4 text-xs">
        &copy; 2025 Metropolitan Hospital. All rights reserved.
      </div>
    </div>
  </footer>
  
  
  );
};

export default Footer;
