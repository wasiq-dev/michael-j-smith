'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const NextImage = Image;

interface HeaderProps {
  className?: string;
}

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/books', label: 'BOOKS' },
  { href: '/#bookabout', label: 'GET YOUR COPY' },
];

export default function Header({ className = '' }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`absolute -top-2 left-0 right-0 z-30 px-4 sm:px-6 md:px-8 ${className}`}
    >
      <nav
        className="flex justify-between items-center max-w-screen-xl mx-auto py-4"
        style={{ fontFamily: 'var(--font-poppins)' }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          aria-label="Homepage"
          className="hover:opacity-80 transition-opacity duration-200"
        >
          <NextImage
            src="/images/new-logo.png"
            alt="Michael J.Smith"
            width={180}
            height={50}
            className="w-auto h-14 sm:h-16 md:h-20"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 lg:space-x-10 -mt-6">
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

        {/* Contact button (desktop) */}
        <div className="hidden md:flex items-center -mt-1">
          <Link
            href="/contact"
            className="bg-[#c69a3c] hover:bg-[#e8c877] text-[#0b0b0b] font-poppins font-semibold py-2 px-5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-sm"
          >
            Contact Michael
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-white/5 transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6 text-[#e8c877]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />

<motion.div
  initial={{ opacity: 0, y: -20, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: -20, scale: 0.95 }}
  transition={{
    duration: 0.4,
    ease: [0.4, 0.0, 0.2, 1],
    type: 'spring',
    stiffness: 300,
    damping: 30,
  }}
  className="md:hidden fixed top-16 left-0 right-0 z-50 bg-[#0c0c0e] shadow-2xl border border-[#c69a3c]/30 overflow-hidden"
  style={{
    boxShadow:
      '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(198, 154, 60, 0.12)',
  }}
>
  <div className="p-2">
    <ul className="space-y-1">
      {navLinks.map(
        (link, index) => (
          <motion.li
            key={link.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: 'easeOut',
            }}
          >
            <Link
              href={link.href}
              className="block px-6 py-4 text-lg font-semibold tracking-wider text-[#e7e2d5] hover:text-[#e8c877] hover:bg-white/5 rounded-xl transition-all duration-300 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          </motion.li>
        )
      )}
      <motion.li
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.4,
          ease: 'easeOut',
        }}
      >
        <Link
          href="/contact"
          className="block px-6 py-4 text-lg font-semibold tracking-wider bg-[#c69a3c] hover:bg-[#e8c877] text-[#0b0b0b] rounded-xl transition-all duration-300 text-center"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact Michael
        </Link>
      </motion.li>
    </ul>
  </div>
</motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
