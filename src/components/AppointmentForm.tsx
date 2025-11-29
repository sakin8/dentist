"use client";

import React from "react";

export default function AppointmentForm() {
  return (
    <div className="min-h-screen bg-[#EEF3F8] flex flex-col items-center justify-start py-16 px-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Book Your Appointment</h1>
        <p className="text-gray-500 mt-2 text-lg">Take the first step towards your perfect smile</p>
      </div>

      <form
        className="w-full max-w-3xl mt-10 bg-white rounded-3xl p-8 shadow-[0_18px_30px_rgba(14,30,37,0.08)]"
        onSubmit={(e) => {
          e.preventDefault();
          // placeholder - send to API or show success message
          alert("Appointment submitted (demo)");
        }}
      >
        {/* Full Name */}
        <div className="mb-6">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <svg className="w-4 h-4 mr-2 text-blue-600" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" fill="#0B73F9" />
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6v1H4v-1z" fill="#E6F0FF" />
            </svg>
            Full Name
          </label>
          <input
            aria-label="Full name"
            name="name"
            type="text"
            placeholder="John Doe"
            required
            className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white"
          />
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <svg className="w-4 h-4 mr-2 text-blue-600" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 6.5L12 13 21 6.5" stroke="#0B73F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#E6EEF9" fill="#fff" />
              </svg>
              Email
            </label>
            <input
              aria-label="Email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white"
            />
          </div>

          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
              <svg className="w-4 h-4 mr-2 text-blue-600" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M21 15.46a16 16 0 0 1-7-7L21 2" stroke="#0B73F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 11.5c0-1 .2-2 .6-2.9l3.3 3.3" stroke="#0B73F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Phone
            </label>
            <input
              aria-label="Phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white"
            />
          </div>
        </div>

        {/* Preferred Date */}
        <div className="mb-6">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <svg className="w-4 h-4 mr-2 text-blue-600" viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="#0B73F9" strokeWidth="1.2" />
              <path d="M16 2v4M8 2v4" stroke="#0B73F9" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            Preferred Date
          </label>
          <input
            aria-label="Preferred date"
            name="date"
            type="date"
            className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white"
          />
        </div>

        {/* Additional Information */}
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-700 mb-2 block">Additional Information</label>
          <textarea
            aria-label="Additional information"
            name="info"
            placeholder="Tell us about your dental needs..."
            className="w-full p-4 rounded-lg min-h-[120px] border border-gray-200 resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white"
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full h-12 rounded-lg bg-linear-to-b from-[#178BFF] to-[#0B73F9] text-white font-semibold shadow-md hover:from-[#1a94ff] hover:to-[#0a66d6] transition-colors"
          >
            Schedule Appointment
          </button>
        </div>
      </form>

      {/* small footer spacing */}
      <div className="h-10" />
    </div>
  );
}
