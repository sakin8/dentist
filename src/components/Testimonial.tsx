"use client";

import React, { useEffect, useState, useRef } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The best dental experience I've ever had. The staff is incredibly professional and caring. My smile has never looked better!",
    name: "Sarah Johnson",
    role: "Marketing Manager",
  },
  {
    quote:
      "Amazing service! The dentists are friendly, professional, and truly care about your comfort.",
    name: "Michael Lee",
    role: "Product Designer",
  },
  {
    quote:
      "I finally love my smile again. Their attention to detail made all the difference!",
    name: "Emily Carter",
    role: "Software Engineer",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
  };

  useEffect(() => {
    startAutoPlay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <div id="testimonial" className="w-full flex flex-col items-center bg-[#EEF2F6] py-20 px-4">
      <h2 className="text-4xl font-bold text-center">Patient Testimonials</h2>
      <p className="text-gray-600 text-center mt-2">Hear from our satisfied patients</p>

      <div className="relative w-full max-w-4xl mt-10">
        <div className="bg-white shadow-xl rounded-3xl p-10 flex flex-col items-center text-center">
          <div className="flex space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-green-500 text-xl">★</span>
            ))}
          </div>

          <p className="text-lg text-gray-700 max-w-2xl leading-relaxed transition-all duration-500">
            "{testimonials[current].quote}"
          </p>

          <div className="mt-6">
            <p className="font-semibold text-gray-900 text-lg">{testimonials[current].name}</p>
            <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-6 mt-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow cursor-pointer"
          >
            ←
          </button>

          <div className="flex space-x-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === i ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow cursor-pointer"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
