import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 bg-transparent flex justify-between items-center">
      <div className="text-xl font-bold title-font">SUGAR</div>
      <nav className="space-x-6 text-gray-300 text-shadow-sub">
        <Link href="/">HOME</Link>
        <Link href="/works">WORKS</Link>
        <Link href="/news">NEWS</Link>
        <Link href="/about">ABOUT</Link>
      </nav>
    </header>
  );
};

export default Header;
