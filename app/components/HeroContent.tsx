'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import type { CSSProperties } from 'react';

interface HeroContentProps {
  className?: string;
}

const goldText: CSSProperties = {
  display: 'inline-block',
  letterSpacing: '0.02em',
  backgroundImage:
    'linear-gradient(180deg, #f3e2b6 0%, #e8c877 45%, #c69a3c 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  paddingRight: '0.15em',
};

export default function HeroContent({ className = '' }: HeroContentProps) {
  const shouldReduceMotion = useReducedMotion();

  const textMotion = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: 'easeOut' },
          viewport: { once: true },
        };

  return (
    <section
      className={`relative w-full flex-1 flex flex-col bg-[#050a1d] overflow-hidden lg:min-h-screen ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-100px] hidden h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-blue-900/20 blur-[100px] lg:block"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-6 lg:h-screen lg:flex-row lg:items-center lg:justify-between lg:px-16">
        {/* TEXT — centered above image on mobile/tablet */}
        <div className="relative z-20 w-full shrink-0 pt-24 text-center max-lg:translate-y-14 sm:max-lg:translate-y-16 md:max-lg:translate-y-20 sm:pt-26 md:pt-28 lg:flex-1 lg:translate-y-0 lg:pt-0 lg:text-left">
          {/* Mobile: 3 lines */}
          <h1
            className="font-serif uppercase leading-[0.88] sm:hidden"
            style={{ fontSize: 'clamp(2.25rem, 10.5vw, 3.25rem)' }}
          >
            <motion.span {...textMotion(0)} style={goldText} className="block">
              Michael
            </motion.span>
            <motion.span {...textMotion(0.1)} style={goldText} className="block">
              J.
            </motion.span>
            <motion.span {...textMotion(0.2)} style={goldText} className="block">
              Smith
            </motion.span>
          </h1>

          {/* Tablet / iPad: 2 lines */}
          <h1
            className="hidden font-serif uppercase leading-[0.85] sm:block lg:hidden"
            style={{ fontSize: 'clamp(3rem, 7.5vw, 4.75rem)' }}
          >
            <motion.span {...textMotion(0)} style={goldText} className="block">
              Michael J.
            </motion.span>
            <motion.span {...textMotion(0.2)} style={goldText} className="block">
              Smith
            </motion.span>
          </h1>

          {/* Desktop: unchanged side layout */}
          <h1
            className="hidden font-serif uppercase leading-[0.85] lg:block"
            style={{ fontSize: 'clamp(2.8rem, 12vw, 6.875rem)' }}
          >
            <motion.span {...textMotion(0)} style={goldText} className="block">
              Michael
            </motion.span>
            <motion.span {...textMotion(0.2)} style={goldText} className="block">
              J. Smith
            </motion.span>
          </h1>
        </div>

        {/* IMAGE — bottom-anchored on mobile/tablet, side-by-side on desktop */}
        <div className="flex h-[62dvh] items-end justify-center max-lg:absolute max-lg:inset-x-0 max-lg:bottom-0 max-lg:-translate-y-8 sm:h-[66dvh] sm:max-lg:-translate-y-10 md:h-[68dvh] md:max-lg:-translate-y-12 lg:relative lg:mt-0 lg:h-auto lg:translate-y-0 lg:flex-1">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 50 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-full w-full max-w-[min(92vw,380px)] sm:max-w-[min(75vw,440px)] md:max-w-[min(65vw,500px)] lg:aspect-[3/4] lg:h-auto lg:w-full lg:max-w-[550px]"
          >
            <Image
              src="/images/author-hero.png"
              alt="Michael J. Smith"
              fill
              priority
              className="object-contain object-bottom"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
