'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useBookSelection } from '../contexts/BookSelectionContext';

interface BookAbout2Props {
  className?: string;
}

export default function BookAbout2({ className = '' }: BookAbout2Props) {
  const { state } = useBookSelection();
  const { availableBooks } = state;

  const book2 = availableBooks.find((book) => book.id === 'book2') || availableBooks[1];

  return (
    <section
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
        </motion.div>

        <motion.div
          className="hidden lg:flex absolute top-0 h-full items-center -right-20"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div
            className={`relative transform rotate-6 drop-shadow-xl animate-float ${
              book2.id === 'book1' ? 'w-[600px] h-[600px]' : 'w-[500px] h-[500px]'
            }`}
          >
            <Image
              src={book2.aboutImage}
              alt={`3D view of the book ${book2.title}`}
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
            book2.id === 'book1' ? 'w-80 h-80' : 'w-64 h-64'
          }`}
        >
          <Image
            src={book2.aboutImage}
            alt={`3D view of the book ${book2.title}`}
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}
