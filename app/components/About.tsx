'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

export default function About() {
  return (
    <section className="bg-[#050505] w-full overflow-x-hidden pb-8 sm:pb-12 md:pb-16">
      {/* Top Bar: Animated marquee with the author's name */}
      <div className="w-full py-3 sm:py-4 border-y border-[#c69a3c]/25 overflow-hidden bg-[#0a0a0c]">
        <Marquee
          speed={50}
          gradient={false}
          className="font-poppins text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#c69a3c]"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span className="mx-8" key={i}>
              AUTHOR
            </span>
          ))}
        </Marquee>
      </div>

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
            <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gold-gradient uppercase mb-4 sm:mb-6">
              ABOUT ME
            </h2>
            <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
              <p className="font-poppins text-sm sm:text-base text-[#c7ccd6] leading-relaxed">
                This is placeholder biography copy. Introduce the author here in
                a warm, first-person or third-person voice: where they are from,
                what drew them to writing, and the themes that run through their
                work. Keep it roughly this length so the layout stays balanced.
              </p>

              <p className="font-poppins text-sm sm:text-base text-[#c7ccd6] leading-relaxed">
                Add a second paragraph about the author&apos;s path to
                publication and the stories they most want to tell. Mention
                influences, a signature style, or the questions their books keep
                returning to.
              </p>

              <p className="font-poppins text-sm sm:text-base text-[#c7ccd6] leading-relaxed">
                A final paragraph can speak to what readers can expect next, any
                recognition the work has received, and how to follow along. Swap
                all of this text for the real bio when it is ready.
              </p>
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
              <div className="absolute inset-0 bg-[#0b1f3a] rounded-full w-[288px] h-[288px] sm:w-[352px] sm:h-[352px] md:w-[448px] md:h-[448px] lg:w-[576px] lg:h-[576px] ring-1 ring-[#c69a3c]/40"></div>
              <Image
                src="/images/judy.png"
                alt="Portrait of the author"
                width={600}
                height={600}
                className="relative z-10 object-cover w-[288px] h-[288px] sm:w-[352px] sm:h-[352px] md:w-[448px] md:h-[448px] lg:w-[576px] lg:h-[576px] rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </main>
    </section>
  );
}
