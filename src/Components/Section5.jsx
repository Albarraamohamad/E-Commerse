import React, { useEffect, useState, useContext, useRef, useLayoutEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import Swal from "sweetalert2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // ✅ Register ScrollTrigger

const Section5 = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);
  const productRefs = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products.slice(0, 8));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  useLayoutEffect(() => {
    // ✅ Animate the entire section when scrolling into view
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Starts when 80% of the section is visible
          toggleActions: "play none none none",
        },
      }
    );

    // ✅ Animate each product card on scroll
    productRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.8, y: 50 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%", // Starts when 85% of each product card is visible
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // ✅ Animate the "View More Products" button when it enters view
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%", // Starts when button is 90% visible
          toggleActions: "play none none none",
        },
      }
    );
  }, [products]);

  const handleAddToCart = (product) => {
    if (!addToCart) {
      console.error("addToCart function is not available.");
      return;
    }

    addToCart(product);

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
    <div ref={sectionRef} className="px-16 py-28 xs:px-3">
      <div className="flex items-center gap-4">
        <div className="w-8 h-12 rounded-md bg-[#db4444]"></div>
        <h1 className="text-2xl text-[#db4444] font-bold">Our Products</h1>
      </div>

      <h1 className="font-bold text-4xl mt-5">Explore Our Products</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {loading ? (
          <p className="text-center text-lg">Loading...</p>
        ) : (
          products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (productRefs.current[index] = el)}
              className="bg-transparent p-4 relative group hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md"
              />

              <div
                className="absolute inset-0 flex items-end justify-center bg-transparent bg-opacity-50 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                onClick={() => handleAddToCart(product)}
              >
                <span className="addtocart text-white font-bold w-full justify-center py-3 items-center text-sm flex bg-black duration-300">
                  Add to Cart
                </span>
              </div>

              <h2 className="text-lg font-semibold mt-3">{product.title}</h2>
              <p className="text-yellow-400 mt-2">${product.price}</p>
              <p className="text-yellow-300 mt-1 mb-8">
                {"★".repeat(Math.round(product.rating || 4))}
                {"☆".repeat(5 - Math.round(product.rating || 4))}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="mt-8 text-center">
        <Link to="/AllProducts">
          <button ref={buttonRef} className="bg-[#db4444] text-white px-6 py-2 rounded-md text-lg font-semibold xs:mt-10">
            View More Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Section5;
