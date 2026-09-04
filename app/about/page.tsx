'use client';

import AboutHeader from '../components/AboutHeader';
import About from '../components/About';
import ContactSection from '../components/ContactSection';
import Contact from '../components/Contact';

export default function AboutPage() {
  return (
    <div className="bg-[#050505] min-h-screen overflow-x-hidden">
      <AboutHeader />
      <div className="pt-32">
        <About />
      </div>
      <div className="bg-[#0b1526]">
        <ContactSection />
        <Contact />
      </div>
    </div>
  );
}
