'use client';

import { FaTwitter, FaInstagram, FaLinkedin, FaAmazon } from 'react-icons/fa';
import { SITE } from '../lib/site-content';
import FadeIn from './shared/FadeIn';

const socialLinks = [
  { href: '#', icon: FaAmazon, label: 'Amazon' },
  { href: '#', icon: FaTwitter, label: 'Twitter' },
  { href: '#', icon: FaInstagram, label: 'Instagram' },
  { href: '#', icon: FaLinkedin, label: 'LinkedIn' },
];

export default function ContactSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="content-wrap">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          <FadeIn className="lg:col-span-5">
            <p className="font-body text-[0.65rem] uppercase tracking-[0.28em] text-muted">
              Contact
            </p>
            <h2 className="font-display display-md mt-1 uppercase text-foreground">
              {SITE.contact.heading}
            </h2>
            <p className="body-lg mt-7 max-w-md text-muted">{SITE.contact.description}</p>

            <div className="mt-10">
              <p className="font-body text-[0.65rem] uppercase tracking-[0.22em] text-muted-dark">
                Connect
              </p>
              <div className="mt-4 flex gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center border border-[var(--hairline)] text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7">
            <div className="border border-[var(--hairline)] bg-background p-6 sm:p-10">
              <h3 className="font-display text-[1.35rem] uppercase text-foreground">
                Send a Message
              </h3>
              <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="contact-name" className="body-sm mb-2 block text-muted">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Enter your name"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="body-sm mb-2 block text-muted">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Enter your email"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="body-sm mb-2 block text-muted">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="Enter your message"
                    rows={4}
                    className="form-input resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-sm bg-accent px-6 py-3 font-body text-xs uppercase tracking-[0.16em] text-[#080808] transition-colors hover:bg-accent/90"
                >
                  Send Message
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
