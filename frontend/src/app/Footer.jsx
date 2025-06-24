"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#f5f4f4] mx-auto px-5 sm:px-20 py-16 " id="contact">
      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 sm:gap-16 gap-10">
        {/* About YouTax */}
        <div>
          <h3 className="text-2xl font-semibold text-[#E51D25] mb-3">About YouTax</h3>
          <p className="text-lg font-medium mb-2">Trusted End-To-End Business Consultant in Pune For Your Business Success.</p>
          <p className="text-lg font-medium mb-4">You Are a Call Away From Business Consultant and Right Solutions.</p>
          <div className="flex gap-3">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-black p-1 hover:text-[#E51D25] transition-all">
    <FaFacebookF className="text-white text-lg" />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-black p-1 hover:text-[#E51D25] transition-all">
    <FaInstagram className="text-white text-lg" />
  </a>
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-black p-1 hover:text-[#E51D25] transition-all">
    <FaYoutube className="text-white text-lg" />
  </a>
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-black p-1 hover:text-[#E51D25] transition-all">
    <FaLinkedinIn className="text-white text-lg" />
  </a>
</div>

        </div>

        {/* Top Services */}
        <div>
          <h3 className="text-2xl font-semibold text-[#E51D25] mb-3">Top Services</h3>
          <ul className="text-lg font-medium space-y-2">
            <li>• Hire Accountant</li>
            <li>• End-To-End Business Consultant</li>
          </ul>
          <h3 className="text-2xl font-semibold text-[#E51D25] mt-6 mb-3">Branches</h3>
          <ul className="text-lg font-medium space-y-2">
            <li>• Pune</li>
            <li>• Baramati</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#E51D25] mb-3">Legal</h3>
          <ul className="text-lg font-medium space-y-2">
            <li><a href="/terms-and-conditions">• Terms & Conditions</a></li>
            <li><a href="/privacy-policy">• Privacy Policy</a></li>
            <li><a href="/cancellation-refund-policy">• Cancellation/Refund Policy</a></li>
          </ul>
        </div>

<div className="grid">
        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold text-[#E51D25] mb-3">Get In Touch</h3>
          <p className="text-lg font-medium mb-2">Phone: +(91) 9610456254</p>
          <p className="text-lg font-medium">Email: info@youtax.in</p>
        </div>

        {/* Newsletter */}
        <div >
          <h3 className="text-2xl font-semibold text-[#E51D25] mb-3">Subscribe Newsletter</h3>
          <p className="text-lg font-medium mb-4">Get E-mail updates</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 px-3 py-2 border-2 border-gray-400 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#E51D25] text-white px-4 py-2 rounded-r-md text-sm font-semibold"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
        </div>
      </div>
    </footer>

    <div className="bg-[#1A474A] px-16 py-3 mx-auto">
  <p className="text-center text-white text-sm">
    &copy; {new Date().getFullYear()} | Design & Developed By <a href="https://vm3techsolution.com" target="_blank" className="text-red-500">VM3 TechSolutions LLP</a>
  </p>
</div>

    </>
    
  );
}
