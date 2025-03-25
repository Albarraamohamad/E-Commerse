import React from "react";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="bg-transparent p-8 w-full max-w-[400px] rounded-lg">

        {/* ✅ Title */}
        <h2 className="text-2xl font-bold text-center">Create an account</h2>
        <p className="text-gray-500 text-center mt-1">Enter your details below</p>

        {/* ✅ Input Fields */}
        <div className="mt-5 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
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

        {/* ✅ Create Account Button */}
        <Link to="/">
          <button className="w-full bg-red-500 text-white py-3 rounded-md mt-6 hover:bg-red-600">
            Create Account
          </button>
        </Link>

        {/* ✅ Google Sign-Up Button */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-md mt-4 hover:bg-gray-100">
          <FcGoogle className="text-xl" />
          Sign up with Google
        </button>

        {/* ✅ Already have an account? */}
        <p className="text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <Link to="/Login" className="text-black font-semibold hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
