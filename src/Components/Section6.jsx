import React, { useRef, useLayoutEffect } from "react";
import img1 from "../assests/Screenshot 2025-03-20 123616.png";
import img2 from "../assests/Screenshot 2025-03-20 123638.png";
import img3 from "../assests/Screenshot 2025-03-20 123700.png";
import img4 from "../assests/Screenshot 2025-03-20 123715.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ✅ Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]); // ✅ Store image refs

  useLayoutEffect(() => {
    if (imagesRef.current.length > 0) {
      gsap.from(imagesRef.current, {
        opacity: 0,
        y: 100, // Moves up from below
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.3, // ✅ Each image appears one after another
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // ✅ Animates when 80% of the section is visible
          toggleActions: "play none none reverse",
          // markers: true, // Uncomment for debugging
        },
      });
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-16 xs:px-3 "
    >
      {/* First Column */}
      <div className="w-full md:w-auto">
        <img
          ref={(el) => (imagesRef.current[0] = el)} // ✅ Store ref
          src={img1}
          alt=""
          className="w-full max-w-[444px] mx-auto"
        />
      </div>

      {/* Second Column */}
      <div className="w-full md:w-auto">
        <div className="mb-10 mt-10 xs:mt-1">
          <img
            ref={(el) => (imagesRef.current[1] = el)} // ✅ Store ref
            src={img2}
            alt=""
            className="w-full max-w-[420px] mx-auto"
          />
        </div>
        <div className="flex  mb-10 gap-5 justify-between md:justify-start xs:flex">
  <img
    ref={(el) => (imagesRef.current[2] = el)} // ✅ Store ref
    src={img3}
    alt=""
    className="w-[48%] md:w-[200px] xs:w-[48%]"
  />
  <img
    ref={(el) => (imagesRef.current[3] = el)} // ✅ Store ref
    src={img4}
    alt=""
    className="w-[48%] md:w-[200px] xs:w-[48%]"
  />
</div>
      </div>
    </div>
  );
};

export default Section6;
