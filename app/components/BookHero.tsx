'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useBookSelection } from '../contexts/BookSelectionContext';

interface BookHeroProps {
  className?: string;
}

export default function BookHero({ className = '' }: BookHeroProps) {
  const { state } = useBookSelection();
  const { selectedBook } = state;

  return (
    <section
      className={`bg-[#050505] pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28 overflow-x-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-center">
          {/* Left Column: Book Cover with decorative circle */}
          <motion.div
            className="order-1 lg:order-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <div className="relative flex items-center justify-center lg:w-[420px] lg:h-[550px] transform translate-x-16 -translate-y-6">
              <div
                className="absolute bg-[#0b1f3a] ring-1 ring-[#c69a3c]/40 rounded-full shadow-lg
                           w-64 h-64
                           sm:w-72 sm:h-72
                           md:w-80 md:h-80
                           lg:w-96 lg:h-96
                           transform -translate-x-32 sm:-translate-x-36 md:-translate-x-40 lg:-translate-x-44 translate-y-8"
              />

              {selectedBook.id === 'book1' ? (
                <div
                  className="relative w-52 h-72 sm:w-64 sm:h-80 md:w-72 md:h-[430px] transform -translate-x-28 -translate-y-2 animate-float"
                  style={{
                    boxShadow:
                      '0 0 15px rgba(198,154,60,0.35), 0 0 40px rgba(198,154,60,0.18), 0 15px 30px -8px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  <Image
                    src={selectedBook.heroImage}
                    alt={`Book Cover - ${selectedBook.title}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <div
                  className="relative w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 transform -translate-x-28 -translate-y-2 animate-float"
                  style={{
                    boxShadow:
                      '0 0 20px rgba(198,154,60,0.35), 0 0 45px rgba(198,154,60,0.18), 0 20px 40px -10px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  <Image
                    src={selectedBook.heroImage}
                    alt={`Book Cover - ${selectedBook.title}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Column: Book Details */}
          <motion.div
            className="order-2 lg:order-2 text-center lg:text-left"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gold-gradient uppercase tracking-wide font-bold mb-3 drop-shadow-sm">
              {selectedBook.title}
            </h1>

            <p className="font-poppins text-lg sm:text-xl text-[#c69a3c] mb-6 font-bold opacity-90">
              By {selectedBook.author}
            </p>

            <p className="font-poppins text-base sm:text-lg text-[#c7ccd6] leading-relaxed max-w-lg mx-auto lg:mx-0">
              {selectedBook.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
