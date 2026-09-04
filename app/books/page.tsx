'use client';

import SiteHeader from '../components/SiteHeader';
import Books from '../components/Books';
import BookFeatures from '../components/BookFeatures';
import BookAbout from '../components/BookAbout';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Contact';

export default function Book() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader variant="solid" />
      <main id="main-content" className="pt-[var(--header-height)]">
        <Books />
        <BookFeatures />
        <BookAbout />
      </main>
      <ContactSection />
      <Footer />
    </div>
  );
}
