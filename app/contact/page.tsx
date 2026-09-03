'use client';

import AboutHeader from '../components/AboutHeader';
import ContactForm from '../components/ContactForm';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="bg-[#050505] min-h-screen overflow-x-hidden">
      <AboutHeader />
      <ContactForm />
      <Contact />
    </div>
  );
}
