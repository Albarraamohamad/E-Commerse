import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { CartContext } from "./CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../App.css';

const ApiProducts = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.title} added to cart! 🛒`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <div className="bg-transparent text-white p-5 md:p-10 cursor-pointer xs:px-3">
  <ToastContainer />

  {loading ? (
    <p className="text-center text-lg">Loading...</p>
  ) : (
    <div className="relative">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide py-4">
        {products.slice(0, 12).map((product) => (
          <div
            key={product.id}
            className="relative bg-transparent min-w-[200px] max-w-[250px] group hover:-translate-y-2 duration-500"
          >
            <FaHeart
              className={`absolute top-3 right-3 z-10 text-xl cursor-pointer transition-all ${
                favorites[product.id] ? "text-red-500" : "text-gray-500"
              }`}
              onClick={() => toggleFavorite(product.id)}
            />

            <div className="relative">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-40 object-cover"
              />
            </div>

            <h2 className="text-lg font-semibold mt-3 text-black">
              {product.title}
            </h2>

            {/* ✅ السعر والتقييم دائمًا ظاهرين */}
            <p className="text-yellow-400 mt-2">${product.price}</p>
            <p className="text-yellow-300 mt-1 mb-12">
              {"★".repeat(Math.round(product.rating || 4))}
              {"☆".repeat(5 - Math.round(product.rating || 4))}
            </p>

            {/* ✅ زر Add to Cart ظاهر دائمًا في الشاشات الصغيرة */}
            <div
              className="absolute bottom-0 left-0 w-full flex justify-center 
                        opacity-100 translate-y-0 
                        md:opacity-0 md:translate-y-5 
                        group-hover:opacity-100 group-hover:translate-y-0 
                        transition-all duration-300 "
            >
              <button
                className="addtocart text-white font-bold w-full py-3 text-sm bg-black duration-300 "
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )}
</div>
  );
};

export default ApiProducts;
