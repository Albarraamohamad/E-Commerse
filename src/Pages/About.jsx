import React from 'react'
import NavBar from '../NavBar'
import { Link } from 'react-router-dom'
import img1 from '../assests/Screenshot 2025-03-20 182625.png'
import Footer from '../Components/Footer'
import { FaShop } from "react-icons/fa6";
import { IoBagCheck } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import img12 from '../assests/Screenshot 2025-03-20 185928.png'
import img2 from '../assests/Screenshot 2025-03-20 185946.png'
import img3 from '../assests/Screenshot 2025-03-20 190006.png'
import { CiTwitter, CiInstagram, CiLinkedin } from "react-icons/ci";
import img4 from '../assests/Screenshot 2025-03-20 123732.png'

const About = () => {
  return (
    <div>
      <NavBar />
      {/* Breadcrumb */}
      <div className="flex gap-2 py-20 px-4 md:px-16">
        <Link to='/'>
          <button>Home</button>
        </Link>
        <button>/About</button>
      </div>

      {/* Our Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-16">
        <div>
          <h1 className="text-5xl font-bold">Our Story</h1>
          <p className="text-[15px] mt-10">
            Launched in 2015, Exclusive is South Asia’s premier online shopping 
            marketplace with an active presence in Bangladesh. Supported 
            by a wide range of tailored marketing, data, and service solutions, 
            Exclusive has 10,500 sellers and 300 brands and serves 3 
            million customers across the region.
          </p>
          <p className="mt-5 text-[15px]">
            Exclusive has more than 1 Million products to offer, growing at a 
            very fast rate. Exclusive offers a diverse assortment in categories 
            ranging from consumer electronics to fashion and more.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={img1} alt="Our Story" className="w-full max-w-[600px]" />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-16 px-4 md:px-16">
        {[{ icon: FaShop, value: "10.5k", text: "Sellers active on our site" },
          { icon: CiDollar, value: "33k", text: "Monthly Product Sales" },
          { icon: IoBagCheck, value: "45.5k", text: "Customers active on our site" },
          { icon: FaSackDollar, value: "25k", text: "Annual Gross Sales" }].map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center cursor-pointer p-5 border border-gray-300 rounded-lg hover:bg-[#db4444] hover:text-white transition duration-300">
            <stat.icon className="text-5xl mb-3" />
            <h2 className="text-2xl font-bold">{stat.value}</h2>
            <p>{stat.text}</p>
          </div>
        ))}
      </div>

      {/* Team Members Section */}
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-16">
        {[{ img: img12, name: "Tom Cruise", role: "Founder & Chairman" },
          { img: img2, name: "Emma Watson", role: "Managing Director" },
          { img: img3, name: "Will Smith", role: "Product Designer" }].map((team, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img src={team.img} alt={team.name} className="w-full max-w-[300px]" />
            <h1 className="text-3xl mt-3">{team.name}</h1>
            <p>{team.role}</p>
            <div className="flex gap-3 mt-2">
              <CiTwitter className="text-3xl cursor-pointer" />
              <CiInstagram className="text-3xl cursor-pointer" />
              <CiLinkedin className="text-3xl cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      {/* Large Image Section */}
      <div className="flex justify-center py-10 px-4">
        <img src={img4} alt="About Image" className="w-full max-w-[800px]" />
      </div>

      <Footer />
    </div>
  )
}

export default About;
