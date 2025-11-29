"use client";
import Image from "next/image";

export default function Header() {
  return (
    <main className="">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md border-b border-gray-200/40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo-rmv.png"
              alt="Dental Logo"
              width={70}
              height={70}
              className="object-contain rounded-lg shadow-sm transition-all duration-300 hover:scale-105"
            />
            {/* <h2 className="text-xl font-semibold text-gray-800 tracking-wide">
              SmileCare
            </h2> */}
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700 text-[15px]">
            <a href="#" className="hover:text-sky-600 transition">Home</a>
            <a href="#services" className="hover:text-sky-600 transition">Services</a>
            <a href="#gallery" className="hover:text-sky-600 transition">Gallery</a>
            <a href="#about" className="hover:text-sky-600 transition">About</a>
            <a href="#testimonial" className="hover:text-sky-600 transition">Testimonials</a>
          </nav>

          {/* CTA BUTTON */}
          <button className="hidden md:block px-5 py-2 bg-sky-600 text-white rounded-md font-medium shadow-sm hover:bg-sky-700 hover:shadow-md transition">
            Book Appointment
          </button>

          {/* MOBILE MENU ICON */}
          <button className="md:hidden">
            <svg width="28" height="28" fill="none" stroke="currentColor">
              <path strokeWidth="2" d="M4 6h20M4 14h20M4 22h20" />
            </svg>
          </button>

        </div>
      </header>
    </main>
  );
}
