'use client';

import AboutHeader from '../components/AboutHeader';
import Books from '../components/Books';
import BookAbout from '../components/BookAbout';
import BookHands from '../components/BookHands';
import ContactSection from '../components/ContactSection';
import Contact from '../components/Contact';
import { BookSelectionProvider } from '../contexts/BookSelectionContext';

export default function Book() {
  return (
    <BookSelectionProvider>
      <div className="bg-[#050505] min-h-screen overflow-x-hidden">
        <AboutHeader />
        <main className="bg-[#050505] pt-20">
          <Books />
          <BookAbout />
        </main>
        <BookHands />
        <div className="bg-[#0b1526]">
          <ContactSection />
          <Contact />
        </div>
      </div>
    </BookSelectionProvider>
  );
}
