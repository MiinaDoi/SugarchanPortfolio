"use client"; // Add this line at the top

import React, { useState } from "react";
import Image from "next/image";

const images = [
  "/images/hero-image.png", // Replace with your image paths
];

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
        className="absolute left-4 text-2xl text-white z-10"
        onClick={handlePrevious}
      >
        &lt;
      </button>
      <div className="text-center">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width={800}
          height={600}
          className="object-cover opacity-70"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-white opacity-70">
          SUGAR
        </h1>
      </div>
      <button
        className="absolute right-4 text-2xl text-white z-10"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default Hero;
