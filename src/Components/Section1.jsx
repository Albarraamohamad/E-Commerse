import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext, MdMenu, MdClose } from "react-icons/md";
import Swiper1 from "./Swiper1";
import "../App.css";

const Section1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking outside
  const handleOutsideClick = (e) => {
    if (!e.target.closest(".menu-container")) {
      setMenuOpen(false);
    }
  };

  return (
    <div className="relative bg-white" onClick={handleOutsideClick}>
      {/* Vertical Line (Hidden on Small Screens) */}
      <div className="hidden md:block h-[360px] w-[2px] z-[55] ml-80 bg-gray-400 absolute"></div>

      {/* ✅ Mobile Menu Button */}
      <button
        className="md:hidden p-3 text-gray-700 absolute top-5 left-5 z-50"
        onClick={(e) => {
          e.stopPropagation(); // Prevent closing when clicking the button
          setMenuOpen(!menuOpen);
        }}
      >
        {menuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
      </button>

      <div className={`flex flex-col md:flex-row justify-between z-20 px-6 md:px-16 py-10 transition-all duration-300 ${menuOpen ? "ml-[260px]" : "ml-0"}`}>
        {/* ✅ Sidebar (Mobile: Collapsible, Desktop: Fixed) */}
        <div
          className={`menu-container absolute md:relative top-0 left-0 w-[250px] h-full md:h-auto bg-white shadow-md md:shadow-none md:block transition-transform z-50 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 p-5 md:p-0`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
        >
          <ul className="space-y-3">
            <li className="links">
              <Link to="/" className="flex items-center gap-4 text-lg">
                Women's Fashion <MdOutlineNavigateNext className="text-2xl" />
              </Link>
              <Link to="/" className="flex items-center gap-4 text-lg">
                Men's Fashion <MdOutlineNavigateNext className="text-2xl" />
              </Link>
              <Link to="/" className="text-lg block">Electronics</Link>
              <Link to="/" className="text-lg block">Home & Lifestyle</Link>
              <Link to="/" className="text-lg block">Medicine</Link>
              <Link to="/" className="text-lg block">Sports & Outdoor</Link>
              <Link to="/" className="text-lg block">Baby’s & Toys</Link>
              <Link to="/" className="text-lg block">Groceries & Pets</Link>
              <Link to="/" className="text-lg block">Health & Beauty</Link>
            </li>
          </ul>
        </div>

        {/* ✅ Swiper (Takes Full Width on Small Screens) */}
        <div className="w-full md:w-auto mt-6 md:mt-0">
          <Swiper1 />
        </div>
      </div>
    </div>
  );
};

export default Section1;
