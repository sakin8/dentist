"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DoctorSection() {
  return (
    <section id="about" className="w-full bg-[#f4f8fc] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Meet Dr. James Mitchell</h2>
        <p className="text-gray-600 mt-3 md:text-lg">Leading the way in modern dental care</p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* IMAGE WITH ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="shadow-xl rounded-2xl overflow-hidden bg-white p-2">
            <Image
              src="/doctor.jpeg"
              alt="Doctor"
              width={450}
              height={500}
              className="rounded-xl object-cover"
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 leading-relaxed mb-6">
            Dr. James Mitchell has been transforming smiles and changing lives for over 15 years. With a passion for excellence and a
            commitment to patient care, he has established himself as one of the leading dental professionals in the USA.
          </p>

          <p className="text-gray-700 leading-relaxed mb-10">
            Specializing in cosmetic dentistry and implantology, Dr. Mitchell combines cutting-edge technology with personalized care to
            deliver exceptional results for every patient.
          </p>

          {/* ICON LIST */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl text-2xl">🎓</div>
              <div>
                <h4 className="font-semibold text-gray-900">Education</h4>
                <p className="text-gray-600">DDS from Harvard School of Dental Medicine</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl text-2xl">📜</div>
              <div>
                <h4 className="font-semibold text-gray-900">Certifications</h4>
                <p className="text-gray-600">Board Certified by the American Board of Cosmetic Dentistry</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl text-2xl">👨‍⚕️</div>
              <div>
                <h4 className="font-semibold text-gray-900">Experience</h4>
                <p className="text-gray-600">Over 10,000+ successful treatments and counting</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
