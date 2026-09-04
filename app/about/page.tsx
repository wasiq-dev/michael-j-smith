'use client';

import SiteHeader from '../components/SiteHeader';
import About from '../components/About';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Contact';

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader variant="solid" />
      <main id="main-content" className="pt-[var(--header-height)]">
        <About />
      </main>
      <ContactSection />
      <Footer />
    </div>
  );
}
