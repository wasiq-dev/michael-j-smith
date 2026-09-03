'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';

const books = [
  { title: 'The First Title', author: 'By AUTHOR', cover: '/images/book1.png' },
  { title: 'The Second Title', author: 'By AUTHOR', cover: '/images/book2.png' },
  { title: 'The Third Title', author: 'By AUTHOR', cover: '/images/book3.png' },
];

export default function Books() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
    containScroll: 'trimSnaps',
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateCarouselState = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateCarouselState();
    emblaApi.on('select', updateCarouselState);
    emblaApi.on('reInit', updateCarouselState);
    emblaApi.on('resize', updateCarouselState);
    return () => {
      emblaApi.off('select', updateCarouselState);
      emblaApi.off('reInit', updateCarouselState);
      emblaApi.off('resize', updateCarouselState);
    };
  }, [emblaApi, updateCarouselState]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section id="books" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gold-gradient uppercase mb-8 sm:mb-12 md:mb-16 text-center px-4">
          ALL BOOKS
        </h2>

        <div className="relative w-full">
          <div className="w-full overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {books.map((book, index) => (
                <div
                  className="relative flex-[0_0_75%] sm:flex-[0_0_55%] md:flex-[0_0_45%] lg:flex-[0_0_35%] px-1"
                  key={index}
                >
                  <div
                    className={`transform transition-transform duration-500 ease-out w-full ${
                      index === selectedIndex
                        ? 'scale-100 opacity-100'
                        : 'scale-85 opacity-40'
                    }`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-48 h-60 sm:w-56 sm:h-70 md:w-64 md:h-80 rounded-md shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] ring-1 ring-[#c69a3c]/30 animate-float">
                        <Image
                          src={book.cover}
                          alt={`Cover of the book ${book.title}`}
                          width={256}
                          height={320}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div
                        className={`transition-opacity duration-500 mt-4 sm:mt-6 ${
                          index === selectedIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <h3 className="font-poppins text-lg sm:text-xl font-bold text-[#f4efe3]">
                          {book.title}
                        </h3>
                        <p className="font-poppins text-sm sm:text-base text-[#c69a3c]">
                          {book.author}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-[#c69a3c]/80 hover:bg-[#e8c877] transition-all z-10 disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Previous book"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#0b0b0b]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-[#c69a3c]/80 hover:bg-[#e8c877] transition-all z-10 disabled:opacity-20 disabled:cursor-not-allowed"
            aria-label="Next book"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#0b0b0b]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/books"
            className="inline-block bg-[#c69a3c] hover:bg-[#e8c877] text-[#0b0b0b] font-poppins font-semibold py-3 px-8 rounded-full transition-colors duration-300"
          >
            Explore the Books
          </Link>
        </div>
      </div>
    </section>
  );
}
