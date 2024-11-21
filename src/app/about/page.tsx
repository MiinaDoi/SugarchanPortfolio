import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black px-8 py-12 pt-24">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-12 title-font">ABOUT</h1>
      </header>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 animate-fade-in">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image
            src="/images/hero-image.png" // Ensure this image is in your public/images directory
            alt="Sugarchan"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Text Section */}
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold mb-4 title-font">Sugarchan</h2>
          <p className="text-lg mb-8 leading-relaxed border-l-2 border-gray-300 pl-4">
            A contemporary artist based in Tokyo, Japan. I began my journey in
            January 2022. My artwork is symbolic, surreal, cometic, and
            occasionally sarcastic. Through my pieces, I aim to convey my
            feelings and intuitions about society today, inviting you to engage
            and reflect. I hope you enjoy experiencing my work.
          </p>
          <h3 className="text-2xl font-semibold mt-8 mb-4 title-font">
            Total Volume
          </h3>
          <p className="text-lg border-l-2 border-gray-300 pl-4 mb-8">
            0.273 ETH
          </p>
          <h3 className="text-2xl font-semibold mt-8 mb-4 title-font">
            Exhibitions
          </h3>
          <p className="text-lg border-l-2 border-gray-300 pl-4">
            Coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
