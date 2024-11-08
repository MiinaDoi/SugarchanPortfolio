import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black px-8 py-12">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-12">ABOUT</h1>
      </header>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
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
          <h2 className="text-3xl font-bold mb-4">Sugarchan</h2>
          <p className="text-lg mb-8 leading-relaxed border-l-2 border-gray-300 pl-4">
            Hi, I am Sugarchan, known as a contemporary artist. I have started
            working in January 2022. My characteristics of the artwork are
            symbolic, surreal, cometic, and yet, sometimes could be sarcastic. I
            try to integrate my feeling and intuition about today's society to
            communicate with the audience. I hope you enjoy my artwork!
          </p>
          <h3 className="text-2xl font-semibold mt-8 mb-4">
            Awards & Exhibitions
          </h3>
          <p className="text-lg border-l-2 border-gray-300 pl-4 mb-8">
            Coming soon...
          </p>
          <h3 className="text-2xl font-semibold mt-8 mb-4">Selected Press</h3>
          <p className="text-lg border-l-2 border-gray-300 pl-4">
            Coming soon...
          </p>
        </div>
      </div>
      <footer className="mt-16 text-center text-gray-500">
        © Sugarchan 2022
      </footer>
    </div>
  );
};

export default About;
