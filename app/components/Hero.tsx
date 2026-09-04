'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { SITE } from '../lib/site-content';
import SiteHeader from './SiteHeader';
import FadeIn from './shared/FadeIn';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const textMotion = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
          viewport: { once: true },
        };

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-background lg:min-h-screen">
      <SiteHeader variant="overlay" />

      <div className="content-wrap relative z-10 flex min-h-[100dvh] flex-col justify-center pt-[var(--header-height)] pb-10 lg:min-h-screen lg:pb-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Name + intro */}
          <div className="text-center lg:text-left">
            <FadeIn>
              <p className="font-body mb-5 text-[0.7rem] uppercase tracking-[0.22em] text-muted">
                {SITE.hero.subtitle.split('4').map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <span className="text-accent italic">4</span>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </p>
            </FadeIn>

            {/* Mobile / tablet name */}
            <motion.h1
              {...textMotion(0.05)}
              className="font-display display-xl uppercase text-foreground sm:hidden"
            >
              <span className="block">Michael</span>
              <span className="block">J.</span>
              <span className="block">Smith</span>
            </motion.h1>
            <motion.h1
              {...textMotion(0.05)}
              className="font-display display-xl hidden uppercase text-foreground sm:block lg:hidden"
            >
              <span className="block">Michael J.</span>
              <span className="block">Smith</span>
            </motion.h1>
            <motion.h1
              {...textMotion(0.05)}
              className="font-display display-xl hidden uppercase text-foreground lg:block"
            >
              <span className="block">Michael</span>
              <span className="block">J. Smith</span>
            </motion.h1>

            <FadeIn delay={0.15}>
              <p className="body-lg mx-auto mt-7 max-w-md text-muted lg:mx-0">
                {SITE.hero.description}
              </p>
            </FadeIn>
          </div>

          {/* Portrait */}
          <FadeIn delay={0.1} className="relative mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:mx-0 lg:ml-auto lg:max-w-[340px]">
            <motion.div
              className="relative aspect-[3/4] overflow-hidden"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <Image
                src={SITE.author.portrait}
                alt="Michael J. Smith"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 300px, 340px"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 ring-1 ring-inset ring-[var(--hairline)]"
              />
            </motion.div>
          </FadeIn>
        </div>
      </div>

      <div className="editorial-rule absolute inset-x-0 bottom-0" />
    </section>
  );
}
