'use client';

import AboutHeader from '../components/AboutHeader';
import ContactSection from '../components/ContactSection';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="bg-[#050505] min-h-screen overflow-x-hidden">
      <AboutHeader />
      <div className="bg-[#0b1526] pt-20">
        <ContactSection />
        <Contact />
      </div>
    </div>
  );
}
