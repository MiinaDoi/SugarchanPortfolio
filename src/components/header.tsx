import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-transparent absolute w-full z-10">
      <div className="text-xl font-bold">SUGAR</div>
      <nav className="space-x-6 text-gray-300">
        <Link href="/">HOME</Link>
        <Link href="/works">WORKS</Link>
        <Link href="/news">NEWS</Link>
        <Link href="/about">ABOUT</Link>
      </nav>
    </header>
  );
};

export default Header;
