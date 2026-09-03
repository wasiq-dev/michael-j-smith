'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useBookSelection } from '../contexts/BookSelectionContext';

interface BookFeaturesProps {
  className?: string;
}

export default function BookFeatures({ className = '' }: BookFeaturesProps) {
  const { state } = useBookSelection();
  const { selectedBook } = state;

  const getFeatures = (bookId: string) => {
    if (bookId === 'book1') {
      return [
        'Placeholder highlight about the heart of the story and why it matters.',
        'Placeholder note on the central characters and the world they move through.',
        'Placeholder line about the themes readers will find woven through the book.',
        'Placeholder point about tone, pace, and what the reading experience feels like.',
        'Placeholder closing note about who this book is for.',
      ];
    } else if (bookId === 'book2') {
      return [
        'Placeholder highlight about the premise and the change that sets it in motion.',
        'Placeholder note about the setting and the mood it creates.',
        'Placeholder line about the relationships at the centre of the book.',
        'Placeholder point about the questions the story keeps asking.',
        'Placeholder closing note about the feeling readers are left with.',
      ];
    }
    return [];
  };

  const features = getFeatures(selectedBook.id);

  const books = [0, 1, 2, 3];
  const offsetPerBook = 32;
  const scaleDecrement = 0.08;

  return (
    <div className={`bg-[#050505] pt-20 overflow-x-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          className="relative z-10 -mt-20 bg-[#0b1f3a] border border-[#c69a3c]/25 rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 overflow-hidden"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 items-center">
            {/* Left Column: Key Things List */}
            <div>
              <h2 className="font-anton text-5xl sm:text-6xl text-gold-gradient uppercase font-bold drop-shadow-md mb-8">
                KEY THINGS
              </h2>

              <ul className="space-y-5">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                    viewport={{ once: false }}
                  >
                    <div className="w-1.5 h-1.5 bg-[#c69a3c] rounded-full mt-2.5 mr-4 flex-shrink-0" />
                    <p className="font-poppins text-base text-[#c7ccd6] leading-relaxed">
                      {feature}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right Column: Book Stack */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: false }}
            >
              <div className="bg-[#081324] border border-[#c69a3c]/20 p-6 sm:p-8 rounded-2xl w-full max-w-lg">
                <div className="relative w-full h-80 sm:h-[420px]">
                  {books.map((book, index) => {
                    const booksInFront = books.length - 1 - index;
                    const scale = 1 - booksInFront * scaleDecrement;
                    const translateX = index * offsetPerBook;

                    return (
                      <div
                        key={index}
                        className="absolute inset-0"
                        style={{
                          transformOrigin: 'center left',
                          transform: `translateX(${translateX}px) scale(${scale})`,
                          zIndex: index,
                        }}
                      >
                        <Image
                          src={selectedBook.featuresImage}
                          alt={`A copy of the book '${selectedBook.title}'`}
                          fill
                          className="object-contain animate-float"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
