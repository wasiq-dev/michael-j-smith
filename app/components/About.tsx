'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="bg-[#050505] w-full overflow-x-hidden pb-8 sm:pb-12 md:pb-16">
      {/* Main Content Area */}
      <main className="max-w-screen-xl mx-auto pt-8 pb-2 sm:py-16 md:py-20 lg:pb-8 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 sm:gap-y-12 lg:gap-y-16 gap-x-8 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <h2 className="font-anton text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gold-gradient uppercase mb-4 sm:mb-6">
              MEET MICHAEL
            </h2>
            <h3 className="font-poppins text-xl sm:text-2xl md:text-3xl font-bold text-[#c69a3c] mb-6 sm:mb-8">
              Michael J. Smith
            </h3>
            <div className="space-y-4 sm:space-y-6 max-w-xl mx-auto lg:mx-0">
              <p className="font-poppins text-xs sm:text-sm md:text-base text-[#c7ccd6] leading-relaxed">
                Michael J. Smith has spent 30 years at the center of youth, high school and NCAA Division I women's basketball as an official - a vantage point almost no coach, parent or administrator ever gets to hold.
              </p>

              <p className="font-poppins text-xs sm:text-sm md:text-base text-[#c7ccd6] leading-relaxed">
                That floor-level view became the foundation for Between the 4 Lines and for a speaking career built on honest, hard-won lessons in leadership, communication and accountability.
              </p>

              <div className="mt-6 sm:mt-8 md:mt-10">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start">
                    <span className="font-poppins text-xs sm:text-sm md:text-base font-bold text-[#c69a3c] w-16 sm:w-20 flex-shrink-0">1995</span>
                    <p className="font-poppins text-xs sm:text-sm md:text-base text-[#c7ccd6]">Began officiating basketball</p>
                  </div>
                  <div className="flex items-start">
                    <span className="font-poppins text-xs sm:text-sm md:text-base font-bold text-[#c69a3c] w-16 sm:w-20 flex-shrink-0">—</span>
                    <p className="font-poppins text-xs sm:text-sm md:text-base text-[#c7ccd6]">NCAA Division I Women's Basketball official</p>
                  </div>
                  <div className="flex items-start">
                    <span className="font-poppins text-xs sm:text-sm md:text-base font-bold text-[#c69a3c] w-16 sm:w-20 flex-shrink-0">—</span>
                    <p className="font-poppins text-xs sm:text-sm md:text-base text-[#c7ccd6]">Founder, Tournament Sports Unlimited</p>
                  </div>
                  <div className="flex items-start">
                    <span className="font-poppins text-xs sm:text-sm md:text-base font-bold text-[#c69a3c] w-16 sm:w-20 flex-shrink-0">—</span>
                    <p className="font-poppins text-xs sm:text-sm md:text-base text-[#c7ccd6]">Founder, One Pivotal Move</p>
                  </div>
                  <div className="flex items-start">
                    <span className="font-poppins text-xs sm:text-sm md:text-base font-bold text-[#c69a3c] w-16 sm:w-20 flex-shrink-0">Today</span>
                    <p className="font-poppins text-xs sm:text-sm md:text-base text-[#c7ccd6]">Author & Keynote Speaker</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#0b1f3a] rounded-full w-[180px] h-[180px] sm:w-[230px] sm:h-[230px] md:w-[282px] md:h-[282px] lg:w-[358px] lg:h-[358px] xl:w-[460px] xl:h-[460px] ring-1 ring-[#c69a3c]/40"></div>
              <Image
                src="/images/author-hero.png"
                alt="Portrait of the author"
                width={600}
                height={600}
                className="relative z-10 object-cover w-[180px] h-[180px] sm:w-[230px] sm:h-[230px] md:w-[282px] md:h-[282px] lg:w-[358px] lg:h-[358px] xl:w-[460px] xl:h-[460px] rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </main>
    </section>
  );
}
