'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiChevronRight } from 'react-icons/bi';
import { BiChevronLeft } from 'react-icons/bi';

const Carousel = ({ children }) => {
  const [index, setIndex] = useState(0);
  const total = children.length;

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="hidden lg:block relative w-full max-w-screen-3xl">
     <AnimatePresence mode="wait">
      <motion.div
        key={index} // Esse key precisa ser único para cada item
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="w-full flex justify-center"
      >
        {children[index]}
      </motion.div>
    </AnimatePresence>



      
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#921818] bg-gradient-to-r from-[#c12c2c] to-transparent to-70% text-white p-2 rounded-full shadow-lg hover:bg-[#d52f2f]"
      >
        <BiChevronLeft size={32} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#921818] bg-gradient-to-r from-[#c12c2c] to-transparent to-70% text-white p-2 rounded-full shadow-lg hover:bg-[#d52f2f]"
      >
        <BiChevronRight size={32} />
      </button>
    </div>
  );
};

export default Carousel;
