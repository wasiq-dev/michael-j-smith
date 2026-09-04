'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const book = {
  title: 'Between the 4 Lines',
  author: 'By Michael J.Smith',
  cover: '/images/book.png',
  description: 'A powerful exploration of leadership, communication, and accountability from the unique perspective of a basketball official with 30 years of experience.',
  fullDescription: 'Between the 4 Lines pulls back the curtain on youth and grassroots basketball from a vantage point almost no one else has held for 30 years: the official\'s chair at center court. It explores the love, frustration and hope surrounding the game, and offers a clear call to return it to the young people who play it.',
};

export default function Books() {
  return (
    <section id="books" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4">
          {/* Book Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-80 lg:h-[420px] rounded-lg shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)]">
              <Image
                src={book.cover}
                alt={`Cover of the book ${book.title}`}
                width={320}
                height={420}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Book Details */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <h3 className="font-anton text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#f4efe3] mb-4">
              Between the <span className="text-[#ff6b35]">4</span> Lines
            </h3>
            <p className="font-poppins text-base sm:text-lg md:text-xl text-[#c69a3c] mb-6 font-semibold">
              {book.author}
            </p>
            <p className="font-poppins text-xs sm:text-sm md:text-base text-[#c7ccd6] leading-relaxed mb-6">
              <span className="font-bold">A Game. A System. A Broken Path.</span> {book.fullDescription}
            </p>

            <div className="mb-6 sm:mb-8">
              <h4 className="font-anton text-lg sm:text-xl md:text-2xl font-bold text-gold-gradient uppercase mb-4">
                What readers will take away
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <span className="text-xl text-[#c69a3c]">◈</span>
                  <div>
                    <h5 className="font-poppins font-bold text-[#f4efe3] text-sm">Uncensored</h5>
                    <p className="font-poppins text-xs text-[#c7ccd6]">Real stories from inside the game, told without the usual filters.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xl text-[#c69a3c]">◎</span>
                  <div>
                    <h5 className="font-poppins font-bold text-[#f4efe3] text-sm">Eye-Opening</h5>
                    <p className="font-poppins text-xs text-[#c7ccd6]">A direct look at the system shaping young athletes' experience.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xl text-[#c69a3c]">♙</span>
                  <div>
                    <h5 className="font-poppins font-bold text-[#f4efe3] text-sm">Accountable</h5>
                    <p className="font-poppins text-xs text-[#c7ccd6]">A leadership lens on admission, entitlement and communication breakdowns.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xl text-[#c69a3c]">⌖</span>
                  <div>
                    <h5 className="font-poppins font-bold text-[#f4efe3] text-sm">Action-Driven</h5>
                    <p className="font-poppins text-xs text-[#c7ccd6]">Practical direction for coaches, parents, officials and administrators.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/books"
                className="inline-block bg-[#c69a3c] hover:bg-[#e8c877] text-[#0b0b0b] font-poppins font-semibold py-3 px-8 rounded-full transition-colors duration-300 text-center"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-[#c69a3c] hover:bg-[#c69a3c]/10 text-[#c69a3c] font-poppins font-semibold py-3 px-8 rounded-full transition-colors duration-300 text-center"
              >
                Contact Author
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
