import React from 'react';
import img5 from '../assests/Screenshot 2025-03-20 123732.png';
import { BiSolidToTop } from "react-icons/bi";

const Section7 = () => {
  // Function to scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='flex justify-center py-16 relative '>
      <img src={img5} alt="" className='w-[800px]' />
      <div className='absolute bottom-10 right-24'>  
        <button onClick={scrollToTop}>
          <BiSolidToTop className='text-5xl' />
        </button>
      </div>
    </div>
  );
};

export default Section7;
