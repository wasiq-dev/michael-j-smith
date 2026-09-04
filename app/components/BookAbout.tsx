'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useBookSelection } from '../contexts/BookSelectionContext';

interface BookAboutProps {
  className?: string;
}

export default function BookAbout({ className = '' }: BookAboutProps) {
  const { state } = useBookSelection();
  const { selectedBook } = state;

  return (
    <section
      id="bookabout"
      className={`bg-[#0b1526] py-12 sm:py-16 md:py-20 lg:py-24 relative bg-cover bg-center overflow-hidden overflow-x-hidden ${className}`}
      style={{ backgroundImage: 'url(/images/about-book-dark.svg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          <div className="space-y-6">
            <h2 className="font-anton text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gold-gradient uppercase font-bold drop-shadow-md">
              READY TO CHANGE THE GAME?
            </h2>

            <p className="font-poppins text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#f4efe3] leading-relaxed max-w-2xl mx-auto">
              Get Your Copy of<br />Between the 4 Lines
            </p>

            <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl text-[#d7dbe3] leading-relaxed max-w-2xl mx-auto">
              Be part of the conversation about bringing youth basketball culture back to what truly matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <a
                href="#"
                className="inline-block bg-[#c69a3c] hover:bg-[#e8c877] text-[#0b0b0b] font-poppins font-semibold py-3 px-8 rounded-full transition-colors duration-300 text-center"
              >
                BUY ON AMAZON →
              </a>
              <a
                href="#"
                className="inline-block border-2 border-[#c69a3c] hover:bg-[#c69a3c]/10 text-[#c69a3c] font-poppins font-semibold py-3 px-8 rounded-full transition-colors duration-300 text-center"
              >
                REQUEST A SIGNED COPY
              </a>
              <a
                href="#"
                className="inline-block border-2 border-[#c69a3c] hover:bg-[#c69a3c]/10 text-[#c69a3c] font-poppins font-semibold py-3 px-8 rounded-full transition-colors duration-300 text-center"
              >
                BULK ORDER INQUIRY
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:flex absolute -top-20 h-full items-center -right-20"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div
            className={`relative transform rotate-6 drop-shadow-xl animate-float ${
              selectedBook.id === 'book1'
                ? 'w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[400px] xl:h-[400px]'
                : 'w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-[350px] xl:h-[350px]'
            }`}
          >
            <Image
              src={selectedBook.aboutImage}
              alt={`3D view of the book ${selectedBook.title}`}
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="lg:hidden flex justify-center mt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div
          className={`relative transform rotate-6 drop-shadow-xl animate-float ${
            selectedBook.id === 'book1' ? 'w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56' : 'w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52'
          }`}
        >
          <Image
            src={selectedBook.aboutImage}
            alt={`3D view of the book ${selectedBook.title}`}
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}
