"use client";
import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    position: "Founder, DivineTech",
    image: "/assets/Testimonial.png",
    description:
      "Their service was outstanding and the experience was very smooth. Highly recommended!",
  },
  {
    id: 2,
    name: "Priya Mehta",
    position: "Marketing Head, ZenAura",
    image: "/assets/Testimonial.png",
    description:
      "Professional team with excellent support. I will definitely work with them again.",
  },
  {
    id: 3,
    name: "Rohan Patel",
    position: "Product Manager, VedicVerse",
    image: "/assets/Testimonial.png",
    description:
      "From start to finish, everything was handled with professionalism and care.",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mx-auto bg-[#f5f4f4] px-5 sm:px-20 py-16 text-center relative">
      {/* Heading */}
      <div>
        <h1 className="bg-[#E51D25] text-white px-4 py-1 rounded-lg text-xl font-semibold mb-10 inline-block ml-6">
          Stories of Satisfaction
        </h1>
      </div>
      <div className="p-8 relative">
        {/* Arrows */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-lg py-1 px-1 text-white hover:text-[#E51D25]  bg-black rounded-full "
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>

        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-lg py-1 px-1 text-white hover:text-[#E51D25]  bg-black rounded-full "
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>

        {/* Slide Content */}
        <div className="flex flex-col items-center space-y-2">
          <Image
            width={100}
            height={100}
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-24 h-24 rounded-full object-cover "
          />
          <h3 className="text-2xl font-semibold">
            {testimonials[current].name}
          </h3>
          <p className="text-2xl font-semibold ">
            {testimonials[current].position}
          </p>
          {/* Description Section */}
          <div className="text-gray-700 max-w-xl text-sm sm:text-base min-h-[72px] sm:min-h-[64px] flex items-center justify-center transition-all duration-300">
            <p
              key={current}
              className="transition-opacity duration-300 ease-in-out"
            >
              {testimonials[current].description}
            </p>
          </div>{" "}
          <div className="flex justify-center gap-2 mt-2 text-[#e51d25] text-lg">
            {Array(5)
              .fill()
              .map((_, i) => (
                <FaStar key={i} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
