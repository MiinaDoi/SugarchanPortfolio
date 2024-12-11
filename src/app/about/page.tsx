import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black px-4 sm:px-8 py-12 pt-24">
      <header className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 sm:mb-12 title-font">
          ABOUT
        </h1>
      </header>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 animate-fade-in">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image
            src="/images/hero-image.png"
            alt="Sugarchan"
            width={250}
            height={250}
            className="rounded-lg shadow-lg sm:w-300 sm:h-300"
          />
        </div>
        {/* Text Section */}
        <div className="max-w-md sm:max-w-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 title-font">
            Sugarchan
          </h2>
          <p className="text-base sm:text-lg mb-6 leading-relaxed border-l-2 border-gray-300 pl-4">
            A contemporary artist based in Tokyo, Japan. I began my journey in
            January 2022. My artwork is symbolic, surreal, cometic, and
            occasionally sarcastic...
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 title-font">
            Total Volume
          </h3>
          <p className="text-base sm:text-lg border-l-2 border-gray-300 pl-4 mb-8">
            0.273 ETH
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 title-font">
            Exhibitions
          </h3>
          <p className="text-base sm:text-lg border-l-2 border-gray-300 pl-4">
            Coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
