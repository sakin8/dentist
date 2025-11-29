"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="relative w-full min-h-screen bg-white text-gray-900">
      
      {/* HERO */}
      <section className="relative w-full min-h-screen flex items-center">
        <Image
          src="/hero-bg.jpeg"
          alt="Dental Clinic"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-white/50" />

        <div className="relative w-full max-w-7xl mx-auto px-6 mt-24 flex flex-col items-start text-left">

          {/* LEFT TEXT ONLY */}
          <div className="max-w-2xl">
            <div className="text-sky-600 text-7xl mb-4">😊</div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Premium Dental Care<br />in the USA
            </h1>

            <p className="mt-6 text-gray-700 text-lg md:text-xl max-w-xl">
              Experience world-class dental treatment with certified specialists.  
              Your smile deserves the very best care.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button className="px-7 py-4 bg-sky-600 text-white text-lg rounded-lg flex items-center gap-2 hover:bg-sky-700 transition">
                <svg width="22" height="22" fill="none" stroke="currentColor">
                  <path strokeWidth="2" d="M4 4h12v12H4zM8 2v4M12 2v4" />
                </svg>
                Book Appointment
              </button>

              <button className="px-7 py-4 border border-sky-500 text-sky-600 text-lg rounded-lg flex items-center gap-2 hover:bg-sky-50 transition">
                <svg width="22" height="22" fill="none" stroke="currentColor">
                  <path strokeWidth="2" d="M4 5h2l3 7 3-7h2" />
                </svg>
                Call Now
              </button>
            </div>

            <div className="mt-10 flex flex-wrap text-gray-700 gap-8 text-base md:text-lg">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                10+ Years Experience
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Certified US Dentists
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Modern Equipment
              </span>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
