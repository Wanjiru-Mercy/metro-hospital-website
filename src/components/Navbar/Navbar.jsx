import React, { useState } from "react";
import { NavbarMenu } from "../../mockData/data";
import ResponsiveMenu from "./ResponsiveMenu";
import { CiSearch } from "react-icons/ci";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-2 relative z-10">
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
            <ul className="flex items-center gap-6 text-white font-bold text-lg cursor-pointer">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      className="inline-block py-1 px-3 hover:text-white hover:bg-secondary rounded-full duration-200 font-black"
                      href={item.url}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Icons section */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-white text-2xl font-extrabold hover:bg-transparent hover:text-white rounded-full p-2 duration-200 bg-secondary">
              <CiSearch />
            </button>
          </div>

          {/* Hamburger menu section */}
          <div
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
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
