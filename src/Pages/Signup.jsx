import React from 'react';
import NavBar from '../NavBar';
import img1 from '../assests/Screenshot 2025-03-20 133210.png';
import SignupForm from '../Components/SignupForm';
import Footer from '../Components/Footer';

const Signup = () => {
  return (
    <div>
      <NavBar />

      {/* Container with Responsive Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-10 gap-10">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={img1} alt="Signup" className="w-full max-w-[600px]" />
        </div>

        {/* Right Side: Signup Form */}
        <div className="w-full md:w-1/2">
          <SignupForm />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Signup;
