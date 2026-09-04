'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SITE } from '../lib/site-content';
import ButtonLink from './shared/ButtonLink';

interface SiteHeaderProps {
  className?: string;
  variant?: 'overlay' | 'solid';
}

export default function SiteHeader({
  className = '',
  variant = 'overlay',
}: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const headerBg =
    variant === 'solid' || isScrolled ? 'header-scrolled' : 'bg-transparent';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${headerBg} ${className}`}
    >
      <div className="content-wrap">
        <nav
          className="flex h-[var(--header-height)] items-center justify-between"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            aria-label="Michael J. Smith homepage"
            className="transition-opacity hover:opacity-80"
          >
            <Image
              src="/images/new-logo.png"
              alt="Michael J. Smith"
              width={160}
              height={44}
              className="h-11 w-auto sm:h-12"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-7 md:flex lg:gap-9">
            {SITE.nav.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-body text-[0.68rem] uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="!px-4 !py-2 !text-[0.62rem]"
            >
              Contact Michael
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-px bg-foreground transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
              />
              <span
                className={`block h-px bg-foreground transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-px bg-foreground transition-transform duration-300 ${isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
              />
            </div>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-0 top-[var(--header-height)] z-50 border-b border-[var(--hairline)] bg-background md:hidden"
            >
              <ul className="content-wrap flex flex-col py-5">
                {SITE.nav.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-3 font-body text-sm uppercase tracking-[0.16em] text-foreground"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <li className="mt-3 border-t border-[var(--hairline)] pt-5">
                  <ButtonLink href="/contact" variant="secondary" className="w-full">
                    Contact Michael
                  </ButtonLink>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
