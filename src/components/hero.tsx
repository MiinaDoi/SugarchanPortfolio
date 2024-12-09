"use client";

import React, { useState } from "react";
import Image from "next/image";

const images = ["/images/hero-image.png", "/images/hero-image2.JPEG"];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-900">
      <button
        className="absolute left-4 text-2xl text-white z-10 hover:scale-150 hover:bg-gray-300 hover:text-gray-100 transition-transform duration-300 rounded-full p-2"
        onClick={handlePrevious}
      >
        &lt;
      </button>

      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <h1
          className="
            absolute inset-0 
            flex items-center justify-center 
            text-[5rem] sm:text-[10rem] md:text-[15rem] lg:text-[20rem] 
            font-bold text-white opacity-70 title-font text-shadow"
        >
          {["S", "U", "G", "A", "R"].map((letter, index) => (
            <span key={index} className={`fade-in-letter delay-${index}`}>
              {letter}
            </span>
          ))}
        </h1>
      </div>

      <button
        className="absolute right-4 text-2xl text-white z-10 hover:scale-150 hover:bg-gray-300 hover:text-gray-100 transition-transform duration-300 rounded-full p-2"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default Hero;
