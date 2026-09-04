'use client';

import { SITE } from '../lib/site-content';
import ButtonLink from './shared/ButtonLink';
import FadeIn from './shared/FadeIn';
import SectionLabel from './shared/SectionLabel';

export default function SpeakingSection() {
  const { speaking } = SITE;

  return (
    <section id="speaking" className="section-padding bg-background">
      <div className="content-wrap">
        <div className="grid grid-cols-1 gap-12 border border-[var(--hairline)] lg:grid-cols-12">
          <FadeIn className="border-b border-[var(--hairline)] p-8 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-12">
            <SectionLabel>Speaking</SectionLabel>
            <h2 className="font-display display-md mt-4 uppercase text-foreground">
              {speaking.heading}
            </h2>
            <p className="body-lg mt-6 text-muted">{speaking.description}</p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="secondary">
                Book Michael
              </ButtonLink>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="p-8 lg:col-span-7 lg:p-12">
            <p className="font-body text-[0.65rem] uppercase tracking-[0.22em] text-muted-dark">
              Topics
            </p>
            <ul className="mt-6 space-y-0">
              {speaking.topics.map((topic, i) => (
                <li
                  key={topic}
                  className={`flex items-center gap-4 border-b border-[var(--hairline)] py-5 ${
                    i === 0 ? 'border-t' : ''
                  }`}
                >
                  <span className="font-accent text-2xl text-accent/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-xl text-foreground">{topic}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
