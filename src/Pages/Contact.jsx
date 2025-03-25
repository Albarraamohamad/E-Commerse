import React from 'react';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import NavBar from '../NavBar';
import {Link} from 'react-router-dom'
import Footer from '../Components/Footer';

const Contact = () => {
  return (
    <div>

  <NavBar/>
  <div className="flex gap-2 py-20 px-4 md:px-16">
        <Link to='/'>
          <button>Home</button>
        </Link>
        <button>/Contact</button>
      </div>
    <div className="flex flex-col md:flex-row gap-10 px-4 md:px-16 py-16">
      {/* Left Side: Contact Info */}
      <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6">
        {/* Call Us Section */}
        <div className="flex items-start gap-3">
          <FaPhoneAlt className="text-red-500 text-2xl mt-1" />
          <div>
            <h3 className="text-lg font-semibold">Call To Us</h3>
            <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
            <p className="text-gray-800 font-semibold mt-1">Phone: +8801611112222</p>
          </div>
        </div>
        <hr className="my-5 border-gray-300" />

        {/* Write to Us Section */}
        <div className="flex items-start gap-3">
          <FaEnvelope className="text-red-500 text-2xl mt-1" />
          <div>
            <h3 className="text-lg font-semibold">Write To Us</h3>
            <p className="text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
            <p className="text-gray-800 font-semibold mt-1">Emails: customer@exclusive.com</p>
            <p className="text-gray-800 font-semibold">Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg p-6">
        {/* Top Row: Name, Email, Phone */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Your Name *"
            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-red-500"
          />
          <input
            type="email"
            placeholder="Your Email *"
            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-red-500"
          />
          <input
            type="tel"
            placeholder="Your Phone *"
            className="w-full p-3 border border-gray-300 rounded-md outline-none focus:border-red-500"
          />
        </div>

        {/* Message Textarea */}
        <textarea
          placeholder="Your Message"
          className="w-full h-40 p-3 mt-4 border border-gray-300 rounded-md outline-none focus:border-red-500"
        ></textarea>

        {/* Send Message Button */}
        <button className="mt-4 bg-red-500 text-white py-3 px-6 rounded-md hover:bg-red-600 transition duration-300">
          Send Message
        </button>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
