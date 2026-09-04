'use client';

import { SITE } from '../lib/site-content';
import FadeIn from './shared/FadeIn';
import SectionLabel from './shared/SectionLabel';
import FourMotif from './shared/FourMotif';

export default function ExperienceSection() {
  const { experience, author } = SITE;

  return (
    <section className="section-padding relative overflow-hidden bg-surface court-lines">
      <FourMotif
        size="xl"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]"
      />

      <div className="content-wrap relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <FadeIn className="lg:col-span-5">
            <SectionLabel>Experience</SectionLabel>
            <div className="mt-6 flex items-end gap-4">
              <span className="font-accent text-[clamp(5rem,12vw,8rem)] leading-none text-accent">
                {experience.stat}
              </span>
              <span className="font-display mb-3 text-3xl uppercase text-foreground md:text-4xl">
                {experience.label}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-7">
            <p className="body-lg max-w-lg text-muted">{experience.description}</p>

            <div className="mt-10 grid grid-cols-1 gap-px bg-[var(--hairline)] sm:grid-cols-3">
              {author.timeline.slice(0, 3).map((item) => (
                <div key={item.label} className="bg-surface px-5 py-6">
                  <span className="font-accent text-sm text-accent">{item.year}</span>
                  <p className="body-sm mt-2 text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
