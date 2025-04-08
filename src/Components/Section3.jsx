import React, { useEffect, useRef } from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiHeadphones } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const sectionRef = useRef(null);
  const categoryRefs = useRef([]);

  useEffect(() => {
    // ✅ Set initial visibility to prevent items from staying hidden if GSAP fails
    gsap.set(sectionRef.current, { opacity: 1 });
    gsap.set(categoryRefs.current, { opacity: 1 });

    // ✅ Section Fade-in Animation
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
        // markers: true,  // Uncomment for debugging
      },
    });

    // ✅ Category Icons Staggered Animation
    gsap.from(categoryRefs.current, {
      opacity: 0,
      y: 100, // Moves up from below
      duration: 1.5, // Smooth animation duration
      ease: "power4.out", // Smooth easing effect
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // When the section is 80% in view
        toggleActions: "play none none reverse",
        // markers: true, // Uncomment for debugging
      },
    });
  }, []);

  return (
    <div ref={sectionRef} className="px-3 sm:px-16">
      {/* 🔴 Section Title */}
      <div className="flex items-center gap-4">
        <div className="w-8 h-12 rounded-md bg-[#db4444]"></div>
        <h1 className="text-2xl text-[#db4444] font-bold">Categories</h1>
      </div>

      {/* ✅ Main Heading */}
      <h1 className="font-bold text-4xl flex mt-5">Browse By Category</h1>

      {/* ✅ Responsive Categories (Grid Layout) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-10">
        {[
          { icon: <IoIosPhonePortrait className="text-8xl" />, label: "Phones" },
          { icon: <RiComputerLine className="text-8xl" />, label: "Computer" },
          { icon: <BsSmartwatch className="text-8xl" />, label: "Smart Watch" },
          { icon: <CiCamera className="text-8xl" />, label: "Camera" },
          { icon: <CiHeadphones className="text-8xl" />, label: "HeadPhones" },
          { icon: <SiYoutubegaming className="text-8xl" />, label: "Gaming" },
        ].map((category, index) => (
          <div
            key={index}
            ref={(el) => (categoryRefs.current[index] = el)}
            className="border-2 py-5 px-9 border-[#d9d9d9] rounded-md hover:bg-[#db4444] duration-300 cursor-pointer flex flex-col items-center"
          >
            <div className="flex justify-center items-center">{category.icon}</div>
            <p className="flex justify-center p-2">{category.label}</p>
          </div>
        ))}
      </div>

      {/* ✅ Divider */}
      <div className="mt-20">
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
    </div>
  );
};

export default Section3;
