'use client';

import { SITE } from '../lib/site-content';
import ButtonLink from './shared/ButtonLink';
import FadeIn from './shared/FadeIn';

interface BookAboutProps {
  className?: string;
}

export default function BookAbout({ className = '' }: BookAboutProps) {
  const { cta } = SITE;

  return (
    <section
      id="bookabout"
      className={`section-padding bg-surface ${className}`}
    >
      <div className="content-wrap">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="font-display display-md uppercase text-foreground">
            {cta.heading}
          </h2>

              <p className="font-display mt-6 text-2xl font-extrabold leading-tight text-foreground md:text-[1.75rem]">
            {cta.subheading.split('4').map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="four-motif-strong text-accent">4</span>
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </p>

          <p className="body-lg mx-auto mt-6 max-w-lg text-muted">{cta.description}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#">Buy on Amazon</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Request a Signed Copy
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Bulk Order Inquiry
            </ButtonLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
