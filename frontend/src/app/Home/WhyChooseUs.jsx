"use client";
import React from "react";

export default function WhyChooseUs() {
  return (
    <div className="mx-auto px-5 sm:px-20 py-16  text-center">
      {/* Heading */}
      <div>
        <h1 className="bg-[#E51D25] text-white px-4 py-1 rounded-lg text-xl font-semibold mb-10 inline-block ml-6">
          Why Choose Us?
        </h1>
      </div>

      {/* Step Boxes */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {/* Step 01 */}
        <div className="flex flex-col items-center">
          <span className="bg-white border-2 border-black text-[#e51d25] w-24 h-24 flex items-center justify-center rounded-full text-lg font-semibold sm:text-xl mb-2">
            01
          </span>
          <h3 className="text-black px-14 text-lg font-semibold">Proven 
          Expertise</h3>
        </div>

        {/* Step 02 */}
        <div className="flex flex-col items-center">
          <span className="bg-white border-2 border-black text-[#e51d25] w-24 h-24 flex items-center justify-center rounded-full text-lg font-semibold sm:text-xl mb-2">
            02
          </span>
          <h3 className="text-black px-14 text-lg font-semibold">
          Personalized 
          Strategies
          </h3>
        </div>

        {/* Step 03 */}
        <div className="flex flex-col items-center">
          <span className="bg-white border-2 border-black text-[#e51d25] w-24 h-24 flex items-center justify-center rounded-full text-lg font-semibold sm:text-xl mb-2">
            03
          </span>
          <h3 className="text-black px-14 text-lg font-semibold">Proactive 
          Planning</h3>
        </div>

        {/* Step 04 */}
        <div className="flex flex-col items-center">
          <span className="bg-white border-2 border-black text-[#e51d25] w-24 h-24 flex items-center justify-center rounded-full text-lg font-semibold sm:text-xl mb-2">
            04
          </span>
          <h3 className="text-black px-14 text-lg font-semibold">Technology + 
          Human Touch   </h3>
        </div>
      </div>
    </div>
  );
}
