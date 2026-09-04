'use client';

import Header from './Header';
import HeroContent from './HeroContent';

interface HeroProps {
  className?: string;
}

export default function Hero({ className = '' }: HeroProps) {
  return (
    <section
      className={`relative flex min-h-[100dvh] flex-col overflow-hidden pb-0 mb-0 bg-[radial-gradient(ellipse_at_center_80%,_#16294d_0%,_#0a1122_45%,_#050505_100%)] lg:h-[100vh] lg:items-center lg:justify-center xl:h-[100vh] ${className}`}
    >
      <Header />
      <HeroContent />
    </section>
  );
}
