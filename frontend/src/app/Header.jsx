"use client"; // Add this line at the very top

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // useState is properly imported from React

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-[#003366] h-16">
      {/* White Bar Positioned Absolutely */}
      <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-6xl w-full flex items-center justify-between bg-white rounded-2xl px-6 py-2 shadow-md z-10">
        {/* Logo */}
        <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/assets/Logo.jpg"
            alt="Bookkeeping services Pune"
            width={120}
            height={50}
          />
          </Link>
        </div>

        {/* Desktop Menu - Hidden on Mobile */}
        <nav className="hidden md:flex items-center space-x-10 text-[#231f20] font-medium">
          <Link href="/">HOME</Link>
          <Link href="#about">ABOUT</Link>
          <Link href="#contact">CONTACT</Link>

          {/* Button */}
          <Link
            href="#contact"
            className="bg-[#ffbf00] hover:bg-[#003366] text-white px-5 py-2 rounded-xl transition font-semibold text-sm"
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
  <div className="fixed inset-0 z-50 bg-blend-multiply bg-opacity-70 md:hidden">
    <div className="fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white text-black shadow-lg transform transition-transform duration-300 ease-in-out translate-x-0">
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-black text-2xl font-bold"
        onClick={() => setIsMenuOpen(false)}
      >
        ×
      </button>

      {/* Navigation */}
      <nav className="flex flex-col items-start px-6 py-10 space-y-6 text-lg font-medium">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>HOME</Link>
        <Link href="/#about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
        <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>

        <Link
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
          className="bg-[#E51D25] hover:bg-red-700 text-white px-5 py-2 rounded-full transition font-semibold text-sm mt-4"
        >
          Talk To Us <span className="ml-1">»</span>
        </Link>
      </nav>
    </div>
  </div>
)}

    </header>
  );
}
