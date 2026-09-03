'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

interface PublishingPlatformsProps {
  className?: string;
}

const platforms = [
  { src: '/images/publishing-platforms/amazon-logo.png', alt: 'Amazon', w: 100, h: 50 },
  { src: '/images/publishing-platforms/amazon-kindle-logo.png', alt: 'Amazon Kindle', w: 100, h: 50 },
  { src: '/images/publishing-platforms/apple-books-logo.png', alt: 'Apple Books', w: 100, h: 50 },
  { src: '/images/publishing-platforms/barnes-noble-logo.png', alt: 'Barnes & Noble', w: 100, h: 50 },
  { src: '/images/publishing-platforms/kobo-logo.png', alt: 'Kobo', w: 100, h: 50 },
  { src: '/images/publishing-platforms/Booktopia-logo.png', alt: 'Booktopia', w: 120, h: 60 },
  { src: '/images/publishing-platforms/indigo-logo.png', alt: 'Indigo', w: 120, h: 60 },
  { src: '/images/publishing-platforms/Lulu-logo.png', alt: 'Lulu', w: 100, h: 50 },
];

export default function PublishingPlatforms({ className = '' }: PublishingPlatformsProps) {
  return (
    <motion.div
      className={`mt-16 sm:mt-20 md:mt-24 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false }}
    >
      <h3 className="font-anton text-2xl sm:text-3xl md:text-4xl font-bold text-gold-gradient uppercase text-center mb-8 sm:mb-12">
        THE BOOKS ARE AVAILABLE ON
      </h3>

      <div className="w-full py-6 sm:py-8 overflow-hidden">
        <Marquee speed={40} gradient={false} className="flex items-center">
          {[...platforms, ...platforms].map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-12 sm:h-14 mx-6 px-5 rounded-xl bg-white/90"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                className="object-contain h-full w-auto"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </motion.div>
  );
}
