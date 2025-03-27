import React, { useState } from "react";
import { NavbarMenu } from "../../mockData/data";
import ResponsiveMenu from "./ResponsiveMenu";
import { CiSearch } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";

// Configuration object for special page styles
const PAGE_STYLES = {
  '/diseases': {
    textColor: 'primary',
    logoBg: 'white',
    hoverEffect: 'secondary'
  },
  '/other-page': {
    textColor: 'primary',
    logoBg: 'white',
    hoverEffect: 'primary'
  },
  // Add more pages as needed
  default: {
    textColor: 'white',
    logoBg: 'white',
    hoverEffect: 'secondary'
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = window.location.pathname;

  // Get styles for current page or use defaults
  const pageStyle = PAGE_STYLES[currentPath] || PAGE_STYLES.default;
  const textColorClass = `text-${pageStyle.textColor}`;
  const hoverEffectClass = `hover:bg-${pageStyle.hoverEffect} hover:text-white`;

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-4 relative z-10">
          {/* Logo section */}
          <div className="flex items-center text-lg font-extrabold gap-2">
            <img
              src="/metro_logo.png"
              className={`h-16 mr-2 bg-${pageStyle.logoBg} rounded-full`}
              alt="Metro Logo"
            />
          </div>

          {/* Menu section */}
          <div className="hidden md:block">
            <ul className={`flex items-center gap-6 font-bold text-lg ${textColorClass}`}>
              {NavbarMenu.map((item) => (
                <li key={item.id} className="relative group">
                  <a
                    href={item.url}
                    className={`inline-block py-2 px-4 rounded-full duration-200 font-black ${
                      currentPath === item.url
                        ? "text-white bg-secondary"
                        : hoverEffectClass
                    }`}
                  >
                    {item.title}
                  </a>
                  {item.submenu && (
                    <ul className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white text-black rounded shadow-lg z-20">
                      {item.submenu.map((subitem) => (
                        <li key={subitem.id}>
                          <a
                            href={subitem.url}
                            className="block px-6 py-2 hover:bg-gray-100"
                          >
                            {subitem.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Icons section */}
          <div className="hidden md:flex items-center gap-6">
            <button className={`text-2xl font-extrabold rounded-full p-2 duration-200 bg-secondary ${
              pageStyle.textColor === 'primary' 
                ? 'text-primary hover:text-white' 
                : 'text-white hover:text-white'
            }`}>
              <CiSearch />
            </button>
          </div>

          {/* Hamburger menu section */}
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <TiThMenu className={`text-3xl ${textColorClass}`} />
          </div>
        </div>
      </nav>

      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;