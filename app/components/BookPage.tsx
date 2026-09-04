'use client';

import SiteHeader from './SiteHeader';
import BookHero from './BookHero';
import BookAbout from './BookAbout';
import BookFeatures from './BookFeatures';
import Footer from './Contact';
import {
  BookSelectionProvider,
} from '../contexts/BookSelectionContext';

interface BookPageProps {
  className?: string;
}

function BookPageContent({ className = '' }: BookPageProps) {
  return (
    <div className={`min-h-screen overflow-x-hidden bg-background ${className}`}>
      <SiteHeader variant="solid" />
      <main id="main-content">
        <BookHero />
        <BookFeatures />
        <BookAbout />
      </main>
      <Footer />
    </div>
  );
}

export default function BookPage({ className = '' }: BookPageProps) {
  return (
    <BookSelectionProvider>
      <BookPageContent className={className} />
    </BookSelectionProvider>
  );
}
