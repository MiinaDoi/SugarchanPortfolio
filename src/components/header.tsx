import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6 bg-transparent flex justify-between items-center">
      <nav className="text-xl font-bold title-font">
        <Link href="/">SUGAR</Link>
      </nav>
      <nav className="space-x-6 text-shadow-sub">
        <Link href="/" className="link-color">HOME</Link>
        <Link href="/works" className="link-color">WORKS</Link>
        <Link href="/news" className="link-color">NEWS</Link>
        <Link href="/about" className="link-color">ABOUT</Link>
      </nav>
    </header>
  );
};

export default Header;
