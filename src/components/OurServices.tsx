"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Teeth Whitening",
    desc: "Professional whitening treatments for a brighter, more confident smile.",
    icon: "/img-1.svg",
  },
  {
    title: "Dental Implants",
    desc: "Permanent solution for missing teeth with natural-looking results.",
    icon: "/img-2.svg",
  },
  {
    title: "Cosmetic Dentistry",
    desc: "Transform your smile with veneers, bonding, and smile makeovers.",
    icon: "/img-3.svg",
  },
  {
    title: "Emergency Care",
    desc: "24/7 emergency dental services for urgent dental needs.",
    icon: "/img-4.svg",
  },
  {
    title: "Preventive Care",
    desc: "Regular checkups and cleanings to maintain optimal oral health.",
    icon: "/img-5.svg",
  },
  {
    title: "Orthodontics",
    desc: "Modern braces and Invisalign for perfectly aligned teeth.",
    icon: "/img-6.svg",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#F7FAFC]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        <p className="text-gray-600 mt-2">
          Comprehensive dental care tailored to your needs
        </p>

        {/* SERVICES GRID */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:border-sky-300 transition-all duration-300 cursor-pointer"
            >
              {/* ICON CONTAINER */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-4 
                transition-all duration-300 group-hover:shadow-[0_0_12px_#c3e8ff]"
              >
                <Image
                  src={service.icon}
                  width={38}
                  height={38}
                  alt={service.title}
                  className="transition-all duration-300 
                  brightness-0 invert-[50%] sepia-[20%] saturate-[500%] hue-rotate-[170deg] 
                  group-hover:brightness-0 group-hover:invert-[40%] group-hover:saturate-[600%]"
                />
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
