import React, { useState } from "react";
import { NavbarMenu } from "../../mockData/data";
import ResponsiveMenu from "./ResponsiveMenu";
import { CiSearch } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  // Get the current page URL path
  const currentPath = window.location.pathname;

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-4 relative z-10">
          {/* Logo section */}
          <div className="flex items-center text-lg font-extrabold gap-2">
            <img
              src="/metro_logo.png"
              className="h-16 mr-2 bg-white rounded-full"
              alt="Metro Logo"
            />
          </div>

          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-white font-bold text-lg">
              {NavbarMenu.map((item) => (
                <li key={item.id} className="relative group">
                  <a
                    href={item.url}
                    className={`inline-block py-2 px-4 rounded-full duration-200 font-black ${
                      currentPath === item.url
                        ? "text-white bg-secondary"
                        : "hover:text-white hover:bg-secondary"
                    }`}
                  >
                    {item.title}
                  </a>
                  {item.submenu && (
                    <ul
                      className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white text-black rounded shadow-lg z-20"
                      onMouseEnter={(e) => e.stopPropagation()}
                      onMouseLeave={(e) => e.stopPropagation()}
                    >
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
            <button className="text-white text-2xl font-extrabold hover:bg-transparent hover:text-white rounded-full p-2 duration-200 bg-secondary">
              <CiSearch />
            </button>
          </div>

          {/* Hamburger menu section */}
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <TiThMenu className="text-3xl text-primary" />
          </div>
        </div>
      </nav>

      {/* Mobile sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
