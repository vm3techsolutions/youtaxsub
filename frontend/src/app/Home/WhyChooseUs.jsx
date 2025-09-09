"use client";
import React from "react";

export default function WhyChooseUs() {
  return (
    <div className="mx-auto px-4 sm:px-10 lg:px-20 py-16 text-center">
      {/* Heading */}
      <div>
        <h1 className="bg-[#003366] text-white px-4 py-1 rounded-lg text-xl font-semibold mb-12 inline-block">
          Why Choose Us?
        </h1>
      </div>

      {/* Step Boxes */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Step 01 */}
        <div className="flex flex-col items-center">
          <span className="bg-white border-2 border-black text-[#003366] w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full text-lg font-semibold sm:text-xl mb-4">
            01
          </span>
          <h3 className="text-black text-base sm:text-lg font-semibold max-w-[150px]">
            Proven Expertise
          </h3>
        </div>

        {/* Step 02 */}
        <div className="flex flex-col items-center">
          <span className="bg-white border-2 border-black text-[#003366] w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full text-lg font-semibold sm:text-xl mb-4">
            02
          </span>
          <h3 className="text-black text-base sm:text-lg font-semibold max-w-[150px]">
            Personalized Strategies
          </h3>
        </div>

        {/* Step 03 */}
        <div className="flex flex-col items-center">
          <span className="bg-white border-2 border-black text-[#003366] w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full text-lg font-semibold sm:text-xl mb-4">
            03
          </span>
          <h3 className="text-black text-base sm:text-lg font-semibold max-w-[150px]">
            Proactive Planning
          </h3>
        </div>

        {/* Step 04 */}
        <div className="flex flex-col items-center">
          <span className="bg-white border-2 border-black text-[#003366] w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full text-lg font-semibold sm:text-xl mb-4">
            04
          </span>
          <h3 className="text-black text-base sm:text-lg font-semibold max-w-[150px]">
            Technology + Human Touch
          </h3>
        </div>
      </div>
    </div>
  );
}
