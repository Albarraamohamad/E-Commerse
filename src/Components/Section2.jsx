import React, { useEffect, useRef, useContext } from "react";
import CountdownTimer from "./CountdownTimer";
import ApiProducts from "./ApiProducts";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CartContext } from "./CartContext"; // ✅ Import Cart Context
import Swal from "sweetalert2"; // ✅ Import SweetAlert2

// ✅ Register GSAP ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const sectionRef = useRef(null);
  const { addToCart } = useContext(CartContext); // ✅ Access addToCart function

  useEffect(() => {
    // ✅ Apply GSAP Animation
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 100, // Moves up from below
      duration: 1.5, // Smooth animation duration
      ease: "power4.out", // Smooth easing effect
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // When the section is 80% in view
        toggleActions: "play none none reverse", // Play animation when scrolled into view, reverse when scrolling back
      },
    });
  }, []);

  // ✅ Function to handle adding to cart & show alert
  const handleAddToCart = (product) => {
    if (!addToCart) {
      console.error("addToCart function is not available.");
      return;
    }

    addToCart(product); // ✅ Add product to cart

    // ✅ Show SweetAlert2 success notification
    Swal.fire({
         title: "Added to Cart! 🛒",
         text: `${product.title} has been added to your cart.`,
         icon: "success",
         toast: true,
         position: "top-end",
         showConfirmButton: false,
         timer: 1500,
       });
  };

  return (
    <div ref={sectionRef} className="px-4 sm:px-8 lg:px-16 py-10 sm:py-20 xs:px-3">
      {/* 🔴 Title Section */}
      <div className="flex items-center gap-4">
        <div className="w-6 h-10 sm:w-8 sm:h-12 rounded-md bg-[#db4444]"></div>
        <h1 className="text-lg sm:text-2xl text-[#db4444] font-bold">Today's</h1>
      </div>

      {/* 🔥 Flash Sale & Countdown Timer */}
      <div className="flex flex-col sm:flex-row gap-8 mt-6 sm:mt-12 justify-between">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-9">
          <h1 className="font-bold text-3xl sm:text-4xl">Flash Sale</h1>
          <CountdownTimer />
        </div>

        {/* 🔘 Navigation Buttons */}
        <div className="flex gap-2">
          <button className="w-10 h-10 bg-gray-200 rounded-full"></button>
          <button className="w-10 h-10 bg-gray-200 rounded-full"></button>
        </div>
      </div>

      {/* 🛍️ Products Section */}
      <div className="mt-6 sm:mt-12">
        <ApiProducts onAddToCart={handleAddToCart} /> {/* ✅ Pass function */}
      </div>

      {/* 📌 View All Products Button */}
      <div className="flex justify-center py-6 sm:py-10">
        <Link to="/AllProducts">
          <button className="bg-[#db4444] py-3 px-8 sm:px-11 rounded-md text-white">
            View All Products
          </button>
        </Link>
      </div>

      {/* 📏 Horizontal Lines */}
      <hr className="border-t border-gray-300 my-2" />
      <hr className="border-t border-gray-300 my-2" />
      <hr className="border-t border-gray-300 my-2" />
    </div>
  );
};

export default Section2;
