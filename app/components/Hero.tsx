'use client';

import Header from './Header';
import HeroContent from './HeroContent';

interface HeroProps {
  className?: string;
}

export default function Hero({ className = '' }: HeroProps) {
  return (
    <section
      className={`relative h-[38vh] sm:h-[65vh] md:h-[85vh] lg:h-[100vh] xl:h-[100vh] flex items-center justify-center overflow-hidden pb-0 mb-0 bg-[radial-gradient(ellipse_at_center_80%,_#16294d_0%,_#0a1122_45%,_#050505_100%)] ${className}`}
    >
      <Header />
      <HeroContent />
    </section>
  );
}
