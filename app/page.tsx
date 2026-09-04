import Hero from './components/Hero';
import About from './components/About';
import Books from './components/Books';
import Contact from './components/Contact';
import BookAbout from './components/BookAbout';
import BookHands from './components/BookHands';
import ContactSection from './components/ContactSection';
import { BookSelectionProvider } from './contexts/BookSelectionContext';

export default function Home() {
  return (
    <BookSelectionProvider>
      <div className="min-h-screen overflow-x-hidden bg-[#050505]">
        <Hero />
        <main className="bg-[#050505]">
          <About />
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
