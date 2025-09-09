"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"

export default function Footer() {
  return (
    <>
      <footer className="bg-[#f5f4f4] mx-auto px-4 sm:px-10 md:px-20 pt-12 pb-10" id="contact">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About YouTax */}
          <div>
            <h3 className="text-2xl font-semibold text-[#003366] mb-3">
              About YouTax
            </h3>
            <p className="text-base font-medium mb-2 text-[#231f20]">
              Trusted End-To-End Business Consultant in Pune For Your Business Success.
            </p>
            <p className="text-base font-medium mb-4 text-[#231f20]">
              You Are a Call Away From Business Consultant and Right Solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/YOUTAXINDIACPL/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#003366] p-2 hover:text-[#003366] transition-all"
              >
                <FaFacebookF className="text-white text-lg" />
              </a>
              <a
                href="https://www.instagram.com/youtaxindia"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#003366] p-2 hover:text-[#003366] transition-all"
              >
                <FaInstagram className="text-white text-lg" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCrWVJcAlVVU1Gdzp_DmpuUQ"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#003366] p-2 hover:text-[#003366] transition-all"
              >
                <FaYoutube className="text-white text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/company/youtax-india-consulting-pvt-ltd/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#003366] p-2 hover:text-[#003366] transition-all"
              >
                <FaLinkedinIn className="text-white text-lg" />
              </a>
              <a
                href="https://x.com/YoutaxIndia"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#003366] p-2 hover:text-[#003366] transition-all"
              >
                <FaXTwitter className="text-white text-lg" />
              </a>
            </div>
          </div>

          {/* Top Services */}
          <div>
            <h3 className="text-2xl font-semibold text-[#003366] mb-3">Top Services</h3>
            <ul className="text-base font-medium text-[#231f20] space-y-2">
              <li>• Hire Accountant</li>
              <li>• End-To-End Business Consultant</li>
            </ul>
            <h3 className="text-2xl font-semibold text-[#003366] mt-6 mb-3">Branches</h3>
            <ul className="text-base font-medium text-[#231f20] space-y-2">
              <li>• Pune</li>
              <li>• Baramati</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-2xl font-semibold text-[#003366] mb-3">Legal</h3>
            <ul className="text-base font-medium text-[#231f20] space-y-2">
              <li><a href="/terms-and-conditions">• Terms & Conditions</a></li>
              <li><a href="/privacy-policy">• Privacy Policy</a></li>
              <li><a href="/cancellation-refund-policy">• Cancellation/Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#003366] mb-3">Get In Touch</h3>
              <p className="text-base font-medium text-[#231f20] mb-2">
                <strong>Location:</strong><br />
                <span>
                  Office No 1, Savli Building, DP Rd, Hadapsar, Pune,<br />
                  Maharashtra - 411028, India.
                </span>
              </p>
              <p className="text-base font-medium text-[#231f20] mb-2">
                <strong>Phone:</strong>{" "}
                <a href="tel:9610456254" className="hover:text-[#003366]">+(91) 9610456254</a>
              </p>
              <p className="text-base font-medium text-[#231f20]">
                <strong>Email:</strong>{" "}
                <a href="mailto:info@youtax.in" className="hover:text-[#003366]">info@youtax.in</a>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#003366] mb-3">Subscribe Newsletter</h3>
              <p className="text-base font-medium text-[#231f20] mb-3">Get E-mail updates</p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 border-2 border-gray-400 rounded-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#003366] text-white px-4 py-2 rounded-md text-sm font-semibold"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-[#003366] text-white text-center text-sm py-3 px-4">
        &copy; {new Date().getFullYear()} | Design & Developed By{" "}
        <a
          href="https://vm3techsolution.com"
          target="_blank"
          className="text-[#ffbf00] hover:text-white"
        >
          VM3 Tech Solutions LLP
        </a>
      </div>
    </>
  );
}
