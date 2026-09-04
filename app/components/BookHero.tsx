'use client';

import Image from 'next/image';
import { useBookSelection } from '../contexts/BookSelectionContext';
import FadeIn from './shared/FadeIn';

interface BookHeroProps {
  className?: string;
}

export default function BookHero({ className = '' }: BookHeroProps) {
  const { state } = useBookSelection();
  const { selectedBook } = state;

  return (
    <section
      className={`section-padding bg-background pt-[calc(var(--header-height)+1.5rem)] ${className}`}
    >
      <div className="content-wrap">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">
          <FadeIn className="flex justify-center md:justify-start">
            <div className="relative w-[220px] sm:w-[250px] md:w-[270px]">
              <div className="relative aspect-[2/3] shadow-[0_20px_48px_-16px_rgba(0,0,0,0.75)]">
                <Image
                  src={selectedBook.heroImage}
                  alt={`Cover of ${selectedBook.title}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="270px"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display display-md uppercase text-foreground">
              {selectedBook.title.split('4').map((part, i, arr) =>
                i < arr.length - 1 ? (
                  <span key={i}>
                    {part}
                    <span className="four-motif-strong italic text-accent">4</span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </h1>
            <p className="mt-3 font-body text-sm uppercase tracking-[0.14em] text-accent">
              By {selectedBook.author}
            </p>
            <p className="body-lg mt-7 max-w-xl text-muted">{selectedBook.description}</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
