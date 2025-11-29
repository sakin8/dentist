"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BeforeAfter() {
  return (
    <section id="gallery" className="py-20 bg-[#F7FAFC]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900">Before & After</h2>
        <p className="text-gray-600 mt-2">
          Real results from real patients
        </p>

        {/* GRID SECTION */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* TEETH WHITENING */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Teeth Whitening
            </h3>

            <div className="flex justify-center gap-6 flex-wrap">
              {/* BEFORE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="text-gray-500 text-sm block mb-1">Before</span>
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/before-1.jpeg"
                      alt="Before Whitening"
                      width={260}
                      height={200}
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* AFTER */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="text-green-600 text-sm block mb-1">After</span>
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/after-1.jpeg"
                      alt="After Whitening"
                        width={260}
                        height={200}
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* SMILE MAKEOVER */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Smile Makeover
            </h3>

            <div className="flex justify-center gap-6 flex-wrap">
              {/* BEFORE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="text-gray-500 text-sm block mb-1">Before</span>
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/before-2.jpeg"
                      alt="Before Smile"
                      width={260}
                      height={200}
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* AFTER */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="text-green-600 text-sm block mb-1">After</span>
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/after-2.jpeg"
                      alt="After Smile"
                      width={260}
                      height={200}
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
