"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { OpenSeaMono2 } from "react-web3-icons";
import { FiX } from "react-icons/fi"; // Close icon

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 bg-transparent flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold title-font">
        <Link href="/">SUGAR</Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-lg">
        <Link href="/" className="link-color">
          HOME
        </Link>
        <Link href="/works" className="link-color">
          WORKS
        </Link>
        <Link href="/news" className="link-color">
          NEWS
        </Link>
        <Link href="/about" className="link-color">
          ABOUT
        </Link>
      </nav>

      {/* Hamburger Menu for Mobile */}
      <button
        className="block md:hidden text-3xl"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        {isSidebarOpen ? null : "☰"}
      </button>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed bottom-0 left-0 w-full h-3/4 bg-white shadow-md transition-transform duration-200 transform ${
          isSidebarOpen
            ? "translate-y-0 animate-slide-in-bottom"
            : "translate-y-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4">
          <button onClick={toggleSidebar} aria-label="Close menu">
            <FiX className="text-3xl text-gray-700 hover:text-gray-900" />
          </button>
        </div>

        {/* Navigation Links with Animation */}
        <nav className="flex flex-col items-center mt-16 space-y-8">
          {[
            { text: "HOME", path: "/" },
            { text: "WORKS", path: "/works" },
            { text: "NEWS", path: "/news" },
            { text: "ABOUT", path: "/about" },
          ].map((link, index) => (
            <Link
              key={link.text}
              href={link.path}
              className={`title-font text-3xl hover:text-gray-500 animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setIsSidebarOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-12">
          <a
            href="https://instagram.com/sugarchanxoxo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com/sugarchanxoxo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <OpenSeaMono2 style={{ fontSize: "24px" }} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
