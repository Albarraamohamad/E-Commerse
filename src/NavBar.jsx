import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Components/Input";
import { GrFavorite } from "react-icons/gr";
import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaUserCircle, FaBoxOpen, FaTimesCircle, FaStar, FaSignOutAlt } from "react-icons/fa"; // Icons

const links = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Contact", url: "/Contact" },
  { id: 3, name: "About", url: "/About" },
  { id: 4, name: "Sign Up", url: "/Signup" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(true); // User is signed in for testing
  const [showDropdown, setShowDropdown] = useState(false); // Controls profile dropdown
  const navigate = useNavigate(); // Navigation hook

  // Simulate Sign-Out
  const handleLogout = () => {
    setIsSignedIn(false);
    navigate("/"); // Redirect to Home after logging out
  };

  return (
    <div>
      <div className="flex justify-between items-center px-8 sm:px-16  bg-white relative z-[60]">
        
        {/* ✅ Menu Button (Mobile) */}
        <button className="text-3xl sm:hidden z-50" onClick={() => setMenuOpen(true)}>
          <AiOutlineMenu />
        </button>

        {/* ✅ Logo */}
        <div className="text-3xl font-bold sm:flex hidden cursor-pointer">
          Exclusive
        </div>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden sm:flex gap-5 items-center">
          <ul className="flex gap-9 items-center">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.url}
                  className="text-black hover:text-orange-400 duration-300 text-lg"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ✅ Icons Section */}
        <div className="flex gap-5 sm:gap-7 items-center relative">
          <Input />
          <GrFavorite className="text-2xl" />
          <Link to="/cart">
            <CiShoppingCart className="text-3xl" />
          </Link>

          {/* ✅ Profile Button & Dropdown */}
          {isSignedIn && (
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              {/* Profile Button */}
              <button className="p-2 rounded-full">
                <CgProfile className="text-3xl cursor-pointer" />
              </button>

              {/* Profile Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-64 bg-white/30 backdrop-blur-lg shadow-lg rounded-lg p-3 flex flex-col gap-3 border border-gray-200 z-50">
                  
                  <Link to="" className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-lg">
                    <FaUserCircle className="text-xl" />
                    <span>Manage My Account</span>
                  </Link>

                  <Link to="" className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-lg">
                    <FaBoxOpen className="text-xl" />
                    <span>My Orders</span>
                  </Link>

                  <Link to="" className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-lg">
                    <FaTimesCircle className="text-xl" />
                    <span>My Cancellations</span>
                  </Link>

                  <Link to="" className="flex items-center gap-3 p-2 hover:bg-gray-200 rounded-lg">
                    <FaStar className="text-xl" />
                    <span>My Reviews</span>
                  </Link>

                  <button  className="flex items-center gap-3 p-2 text-red-500 hover:bg-gray-200 rounded-lg">
                    <FaSignOutAlt className="text-xl" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ✅ Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden" onClick={() => setMenuOpen(false)}></div>
        )}

        {/* ✅ Mobile Menu (Slide-In Sidebar) */}
        <div
          className={`fixed top-0 z-50 left-0 w-64 h-screen bg-white shadow-lg transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 sm:hidden flex flex-col p-6 gap-6`}
        >
          {/* ✅ Close Button */}
          <button className="text-3xl absolute top-4 left-4" onClick={() => setMenuOpen(false)}>
            <AiOutlineClose />
          </button>

          {/* ✅ Mobile Logo */}
          <h1 className="text-3xl font-bold mt-10">Exclusive</h1>

          {/* ✅ Mobile Links */}
          <ul className="flex flex-col gap-6 mt-10">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.url}
                  className="text-black hover:text-orange-400 duration-300 text-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
    </div>
  );
};

export default NavBar;
