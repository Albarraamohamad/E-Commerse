import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import gsap from 'gsap';

import img1 from '../assests/Screenshot 2025-03-20 100010.png';
import img2 from '../assests/8d093143-4aa4-4533-96b4-8ea8ada56e97.jpg';
import img3 from '../assests/9777703.jpg';

import '../styles.css';

export default function Slider() {
  const sliderRef = useRef(null);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  useEffect(() => {
    // GSAP Animation for right-to-left entry
    gsap.from(sliderRef.current, {
      x: "100vw", // Start from outside the screen (right side)
      opacity: 0,
      duration: 1.5, // Adjust speed
      ease: "power3.out", // Smooth easing
    });
  }, []);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div ref={sliderRef} className="relative w-full">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        effect="fade"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px]" // Responsive height
      >
        <SwiperSlide>
          <div className="w-full h-full flex justify-center items-center">
            <img src={img1} alt="Slide 1" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex justify-center items-center">
            <img src={img2} alt="Slide 2" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex justify-center items-center">
            <img src={img3} alt="Slide 3" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        </SwiperSlide>

        {/* Autoplay Progress Indicator */}
        <div className="absolute bottom-4 right-4 text-white text-xs bg-black bg-opacity-50 p-2 rounded-md flex items-center">
          <svg viewBox="0 0 48 48" ref={progressCircle} className="w-6 h-6">
            <circle cx="24" cy="24" r="20" className="stroke-current text-white" />
          </svg>
          <span ref={progressContent} className="ml-2"></span>
        </div>
      </Swiper>
    </div>
  );
}
