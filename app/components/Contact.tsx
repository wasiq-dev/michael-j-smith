'use client';

import Link from 'next/link';
import { SITE } from '../lib/site-content';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--hairline)] bg-background py-10">
      <div className="content-wrap">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <Link
              href="/"
              className="font-display text-sm uppercase tracking-[0.18em] text-foreground"
            >
              Michael <span className="text-accent">J.</span> Smith
            </Link>
            <p className="body-sm mt-1 text-muted">{SITE.footer.book}</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {SITE.nav.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="body-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="body-sm text-muted-dark">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
