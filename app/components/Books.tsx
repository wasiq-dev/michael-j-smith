'use client';

import Image from 'next/image';
import { SITE } from '../lib/site-content';
import ButtonLink from './shared/ButtonLink';
import FadeIn from './shared/FadeIn';

export default function Books() {
  const { book } = SITE;

  return (
    <section id="books" className="section-padding bg-surface">
      <div className="content-wrap">
        <div className="grid grid-cols-1 items-center gap-11 md:grid-cols-2 md:gap-16">
          {/* Book cover */}
          <FadeIn className="flex justify-center md:justify-start">
            <div className="relative w-[220px] sm:w-[250px] md:w-[270px]">
              <div className="relative aspect-[2/3] shadow-[0_20px_48px_-16px_rgba(0,0,0,0.75)]">
                <Image
                  src={book.cover}
                  alt={`Cover of ${book.title}`}
                  fill
                  className="object-cover"
                  sizes="270px"
                />
              </div>
            </div>
          </FadeIn>

          {/* Book details */}
          <div className="text-center md:text-left">
            <FadeIn>
              <h2 className="font-display display-md uppercase text-foreground">
                Between the{' '}
                <span className="four-motif-strong italic text-accent">4</span>{' '}
                Lines
              </h2>
              <p className="mt-3 font-body text-sm uppercase tracking-[0.14em] text-accent">
                By {book.author}
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="body-lg mt-7 max-w-xl text-muted">
                <span className="font-medium text-foreground">{book.hook}</span>{' '}
                {book.fullDescription}
              </p>
              <p className="body-sm mt-5 max-w-xl text-muted">{book.audience}</p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <ButtonLink href="/books">Learn More</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Contact Author
                </ButtonLink>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
