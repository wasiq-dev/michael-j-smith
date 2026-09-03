'use client';

import Image from 'next/image';
import Header from './Header';
import BookHero from './BookHero';
import BookAbout from './BookAbout';
import BookHands from './BookHands';
import BookFeatures from './BookFeatures';
import Contact from './Contact';
import {
  BookSelectionProvider,
  useBookSelection,
} from '../contexts/BookSelectionContext';

interface BookPageProps {
  className?: string;
}

// Book Selection Buttons
function BookSelectionButtons() {
  const { state, selectBook } = useBookSelection();

  return (
    <div className="fixed bottom-4 right-3 lg:bottom-auto lg:top-28 lg:right-4 z-50 bg-[#0c0c0e]/95 backdrop-blur border border-[#c69a3c]/30 rounded-xl shadow-2xl p-3 lg:p-4">
      <h3 className="font-poppins text-xs lg:text-sm font-bold text-[#c69a3c] mb-2 lg:mb-3">
        Select Book:
      </h3>
      <div className="flex flex-row lg:flex-col gap-2 lg:gap-3">
        {state.availableBooks.map((book) => (
          <button
            key={book.id}
            onClick={() => selectBook(book.id)}
            className={`relative w-12 h-16 lg:w-16 lg:h-20 rounded-md overflow-hidden transition-all duration-200 ${
              state.selectedBook.id === book.id
                ? 'ring-2 ring-[#c69a3c] shadow-lg'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <Image src={book.heroImage} alt={book.title} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function BookPageContent({ className = '' }: BookPageProps) {
  return (
    <div className={`bg-[#050505] min-h-screen overflow-x-hidden ${className}`}>
      <Header />
      <BookSelectionButtons />
      <BookHero />
      <BookAbout />
      <BookHands />
      <BookFeatures />
      <Contact />
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
