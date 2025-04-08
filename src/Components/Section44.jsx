import React, { useEffect, useState, useContext, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CartContext } from "./CartContext";
import img1 from "../assests/Screenshot 2025-03-19 203413.png";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Section44 = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleButtons, setVisibleButtons] = useState({});
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const productRefs = useRef([]);

  // ✅ Fetch Products from API
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        setProducts(response.data.slice(0, 4));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  // ✅ GSAP Scroll Animations
  useEffect(() => {
    if (products.length === 0) return;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: "power2.out" }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 0.5, ease: "back.out(1.7)" }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        delay: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    productRefs.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, [products]);

  // ✅ Handle Click to Show "Add to Cart" Button
  const handleShowButton = (productId) => {
    setVisibleButtons((prevState) => ({
      ...prevState,
      [productId]: true,
    }));
  };

  // ✅ Handle Add to Cart
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
    <div>
      <div ref={sectionRef} className="px-3 sm:px-16 py-16">
        {/* 🔴 Section Header */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-12 rounded-md bg-[#db4444]"></div>
          <h1 className="text-2xl text-[#db4444] font-bold">This Month</h1>
        </div>

        <div className="flex justify-between mt-5">
          <h1 ref={titleRef} className="text-4xl font-bold sm:w-20 sm:px-2">
            Best Selling Products
          </h1>
          <Link to="/AllProducts">
            <button
              ref={buttonRef}
              className="bg-[#db4444] py-3 px-11 rounded-md text-white text-sm"
            >
              View All
            </button>
          </Link>
        </div>

        {/* ✅ Products List */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {loading ? (
            <p className="text-center text-lg">Loading...</p>
          ) : (
            products.map((product, index) => (
              <div
                key={product.id}
                ref={(el) => (productRefs.current[index] = el)}
                className="bg-transparent p-4 rounded-lg relative group hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-48 cursor-pointer"
                  onClick={() => handleShowButton(product.id)}
                />

                <h2 className="text-lg font-semibold mt-3 text-black">
                  {product.title}
                </h2>
                <p className="text-yellow-400 mt-2">${product.price}</p>

                <p className="text-yellow-300 mt-1 mb-5">
                  {"★".repeat(Math.round(product.rating || 4))}
                  {"☆".repeat(5 - Math.round(product.rating || 4))}
                </p>

                <div
                  className={`bg-black absolute bottom-0 left-0 right-0 transition-transform duration-500 ${
                    visibleButtons[product.id]
                      ? "translate-y-0 opacity-0 addtocart"
                      : "translate-y-5 opacity-100 addtocart"
                  }`}
                >
                  <button
                    className="addtocart text-white font-bold w-full justify-center py-3 items-center text-sm flex bg-black duration-300"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 📌 Bottom Image */}
        <div className="mt-28 flex justify-center">
          <img ref={imageRef} src={img1} alt="Promo" />
        </div>
      </div>
    </div>
  );
};

export default Section44;
