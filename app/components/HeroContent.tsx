-'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroContentProps {
  className?: string;
}

// Gold gradient applied directly to each animated span. It must live on the
// element that gets the transform (inline-block), otherwise `background-clip: text`
// is painted in the parent's coordinate space and the letters go invisible while
// they slide in.
const goldText: React.CSSProperties = {
  display: 'inline-block',
  letterSpacing: '0.05em',
  backgroundImage:
    'linear-gradient(180deg, #f3e2b6 0%, #e8c877 45%, #c69a3c 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
};

export default function HeroContent({ className = '' }: HeroContentProps) {
  return (
    <div
      className={`relative w-full flex items-center justify-center pt-12 sm:pt-16 md:pt-20 lg:pt-30 ${className}`}
    >
      <h1
        className="absolute inset-0 flex items-center justify-center font-medium select-none pointer-events-none font-anton"
        style={{
          fontSize: 'clamp(70px, 22vw, 400px)',
          lineHeight: '0.8',
        }}
      >
        <motion.span
          initial={{ opacity: 0, x: -140 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          viewport={{ once: false }}
          style={goldText}
        >
          MIC
        </motion.span>

        <span style={{ letterSpacing: '0.2em', marginLeft: '0.4em' }}></span>

        <motion.span
          initial={{ opacity: 0, x: 140 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          viewport={{ once: false }}
          style={goldText}
        >
          HAEL
        </motion.span>
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: false }}
        className="relative z-10 w-[220px] h-[293px] sm:w-[308px] sm:h-[411px] md:w-[396px] md:h-[528px] lg:w-[484px] lg:h-[645px] xl:w-[660px] xl:h-[880px] mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-16"
      >
        <Image
          src="/images/author-hero.png"
          alt="Portrait of the author"
          fill
          className="object-contain"
          priority
          quality={100}
        />
      </motion.div>
    </div>
  );
}
