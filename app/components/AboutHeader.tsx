'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface AboutHeaderProps {
  className?: string;
}

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT THE AUTHOR' },
  { href: '/books', label: 'ALL BOOKS' },
  { href: '/contact', label: 'CONTACT US' },
];

export default function AboutHeader({ className = '' }: AboutHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`absolute -top-2 left-0 right-0 z-30 px-4 sm:px-6 md:px-8 bg-[#050505] border-b border-[#c69a3c]/20 ${className}`}
    >
      <nav
        className="flex justify-between items-center max-w-screen-xl mx-auto py-4"
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        <Link
          href="/"
          aria-label="Homepage"
          className="font-anton text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.14em] text-gold-gradient hover:opacity-80 transition-opacity duration-200"
        >
          AUTHOR
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-base font-semibold tracking-wider text-[#e7e2d5] hover:text-[#e8c877] transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="bg-[#c69a3c] hover:bg-[#e8c877] text-[#0b0b0b] font-poppins font-semibold py-2 px-5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-sm"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-white/5 transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block w-5 h-0.5 bg-[#e8c877] transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-[#e8c877] transition-all duration-300 mt-1 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-[#e8c877] transition-all duration-300 mt-1 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`}
            ></span>
          </div>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#0c0c0e] shadow-lg border-t border-[#c69a3c]/20"
        >
          <ul className="px-4 py-4 space-y-4">
            {[...navLinks, { href: '/contact', label: 'CONTACT' }].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block text-base font-semibold tracking-wider text-[#e7e2d5] hover:text-[#e8c877] transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
