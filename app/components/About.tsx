'use client';

import Image from 'next/image';
import { SITE } from '../lib/site-content';
import FadeIn from './shared/FadeIn';

export default function About() {
  const { author } = SITE;

  return (
    <section id="about" className="section-padding bg-background">
      <div className="content-wrap">
        <div className="grid grid-cols-1 items-center gap-11 lg:grid-cols-2 lg:gap-[4.5rem]">
          {/* Text */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <FadeIn>
              <h2 className="font-display display-md uppercase text-foreground">
                {author.heading}
              </h2>
              <p className="mt-4 font-display text-2xl font-extrabold leading-tight text-foreground md:text-[1.75rem]">
                {author.name}
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-9 space-y-6">
                {author.bio.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 28)}
                    className="body-lg mx-auto max-w-xl text-muted lg:mx-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Portrait */}
          <FadeIn delay={0.05} className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-surface ring-1 ring-[var(--hairline)]"
              />
              <Image
                src={author.portrait}
                alt="Portrait of Michael J. Smith"
                width={400}
                height={400}
                className="relative z-10 h-[200px] w-[200px] rounded-full object-cover sm:h-[240px] sm:w-[240px] md:h-[260px] md:w-[260px]"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
