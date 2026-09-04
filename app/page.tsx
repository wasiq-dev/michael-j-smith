import Hero from './components/Hero';
import About from './components/About';
import Books from './components/Books';
import BookFeatures from './components/BookFeatures';
import BookAbout from './components/BookAbout';
import ContactSection from './components/ContactSection';
import Footer from './components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Hero />
      <main id="main-content">
        <About />
        <Books />
        <BookFeatures />
        <BookAbout />
      </main>
      <ContactSection />
      <Footer />
    </div>
  );
}
