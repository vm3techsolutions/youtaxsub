"use client"; // Add this line at the very top

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // useState is properly imported from React

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-[#E51D25] h-16">
      {/* White Bar Positioned Absolutely */}
      <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-6xl w-full flex items-center justify-between bg-white rounded-2xl px-6 py-2 shadow-md z-10">
        {/* Logo */}
        <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/assets/YouTaxLogo.png"
            alt="YouTax Logo"
            width={120}
            height={50}
          />
          </Link>
        </div>

        {/* Desktop Menu - Hidden on Mobile */}
        <nav className="hidden md:flex items-center space-x-10 text-gray-800 font-medium">
          <Link href="/">HOME</Link>
          <Link href="#about">ABOUT</Link>
          <Link href="#contact">CONTACT</Link>

          {/* Button */}
          <Link
            href="#contact"
            className="bg-[#E51D25] hover:bg-red-700 text-white px-5 py-2 rounded-xl transition font-semibold text-sm"
          >
            Talk To Us <span className="ml-1">»</span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#E51D25] text-4xl focus:outline-none"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Visible on Mobile */}
      {isMenuOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white w-full rounded-b-2xl shadow-lg md:hidden">
          <nav className="flex flex-col items-center py-4 text-gray-800 font-medium space-y-4 mt-8">
            <Link href="/" className="py-2">HOME</Link>
            <Link href="/#about" className="py-2">ABOUT</Link>
            <Link href="/#contact" className="py-2">CONTACT</Link>

            {/* Button */}
            <Link
              href="#contact"
              className="bg-[#E51D25] hover:bg-red-700 text-white px-5 py-2 rounded-full transition font-semibold text-sm mt-4"
            >
              Talk To Us <span className="ml-1">»</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
