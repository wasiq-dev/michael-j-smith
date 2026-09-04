'use client';

import SiteHeader from '../components/SiteHeader';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader variant="solid" />
      <main id="main-content" className="pt-[var(--header-height)]">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
