"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#024873] text-white pt-16 pb-8 px-6 md:px-12">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <Image
            src="/logo-rmv.png"
            alt="Dental Logo"
            width={100}
            height={100}
            className="object-contain rounded-lg shadow-sm transition-all duration-300 hover:scale-105"
          />
          <p className="mt-4 text-gray-200 leading-relaxed">
            Your trusted partner for exceptional dental care in the USA.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Gallery</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-200">

            <li className="flex items-start">
              {/* Location Icon */}
              <svg className="w-5 h-5 mr-3 mt-1 text-blue-200" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z" />
                <circle cx="12" cy="11" r="2.5" fill="currentColor" />
              </svg>

              <span>
                123 Dental Street, Suite 100<br />
                New York, NY 10001
              </span>
            </li>

            <li className="flex items-center">
              {/* Phone Icon */}
              <svg className="w-5 h-5 mr-3 text-blue-200" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.12.81.39 1.59.8 2.3a2 2 0 01-.45 2.3L9.1 10.9a16 16 0 007 7l1.6-1.25a2 2 0 012.3-.45c.71.41 1.49.68 2.3.8A2 2 0 0122 16.92z" />
              </svg>

              +1 (555) 123-4567
            </li>

            <li className="flex items-center">
              {/* Email Icon */}
              <svg className="w-5 h-5 mr-3 text-blue-200" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 4h16v16H4z" />
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 4l8 6 8-6" />
              </svg>

              info@premiumdental.com
            </li>
          </ul>
        </div>

        {/* Office Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Monday – Friday: 8:00 AM – 6:00 PM</li>
            <li>Saturday: 9:00 AM – 4:00 PM</li>
            <li>Sunday: Closed</li>
            <li className="text-green-400 font-semibold mt-2">Emergency: 24/7</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-white/20 pt-8">

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-6 mb-6">

          {/* Facebook */}
          <a href="#" className="w-10 h-10 rounded-full bg-[#035784] flex items-center justify-center hover:bg-[#04699e] transition">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.3.2 2.3.2v2.6H15c-1.4 0-1.8.9-1.8 1.8V12H17l-.5 3h-2.3v7A10 10 0 0022 12z" />
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" className="w-10 h-10 rounded-full bg-[#035784] flex items-center justify-center hover:bg-[#04699e] transition">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6-2a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </a>

          {/* Twitter */}
          <a href="#" className="w-10 h-10 rounded-full bg-[#035784] flex items-center justify-center hover:bg-[#04699e] transition">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 5.8a8.38 8.38 0 01-2.4.7 4.19 4.19 0 001.8-2.3 8.42 8.42 0 01-2.6 1A4.16 4.16 0 0015.3 4c-2.3 0-4.2 2-4.2 4.3 0 .3 0 .7.1 1A11.9 11.9 0 013 5.1a4.35 4.35 0 00-.6 2.1c0 1.5.7 2.8 1.8 3.6a4.1 4.1 0 01-2-.6v.1c0 2.1 1.4 3.8 3.3 4.2a4 4 0 01-1.9.1c.6 1.9 2.4 3.3 4.5 3.3A8.34 8.34 0 012 19.5a11.93 11.93 0 006.6 1.9c7.9 0 12.3-6.7 12.3-12.4v-.6A8.9 8.9 0 0022 5.8z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-200 text-sm">
          © 2024 Premium Dental. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
