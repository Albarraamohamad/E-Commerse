import React from "react";
import img1 from '../assests/Screenshot 2025-03-20 133210.png';
import NavBar from "../NavBar";
import Footer from "../Components/Footer";

const Login = () => {
  return (
    <div>
      <NavBar />

      {/* ✅ Login Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen px-4">
        
        {/* ✅ Image Section (Hidden on Small Screens) */}
        <div className="hidden lg:block">
          <img src={img1} alt="Login" className="w-[500px] lg:w-[600px]" />
        </div>

        {/* ✅ Login Form */}
        <div className="bg-transparent p-8 w-full max-w-[400px] rounded-lg">
          {/* ✅ Title */}
          <h2 className="text-2xl font-bold text-center lg:text-left">
            Log in to <span className="text-black">Exclusive</span>
          </h2>
          <p className="text-gray-500 text-center lg:text-left mt-1">
            Enter your details below
          </p>

          {/* ✅ Input Fields */}
          <div className="mt-5 space-y-4">
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* ✅ Buttons & Forgot Password */}
          <div className="flex flex-col lg:flex-row justify-between items-center mt-6">
            <button className="w-full lg:w-auto bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600">
              Log In
            </button>
            <a href="#" className="text-red-500 hover:underline mt-3 lg:mt-0">
              Forget Password?
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
