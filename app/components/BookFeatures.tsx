'use client';

import { SITE } from '../lib/site-content';
import FadeIn from './shared/FadeIn';

export default function BookFeatures() {
  return (
    <section className="section-padding bg-background">
      <div className="content-wrap">
        <FadeIn className="mb-11 max-w-xl md:mb-14">
          <h2 className="font-display display-md uppercase text-foreground">
            What Readers Will Take Away
          </h2>
          <div className="editorial-rule-accent mt-5 max-w-[3rem]" aria-hidden="true" />
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {SITE.features.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <article className="h-full border border-[var(--hairline)] bg-surface/40 p-7 transition-colors hover:border-[var(--hairline-accent)]">
                <span className="font-body text-[0.7rem] uppercase tracking-[0.18em] text-accent">
                  {item.number}
                </span>
                <h3 className="font-display mt-3.5 text-[1.35rem] font-bold text-foreground md:text-[1.5rem]">
                  {item.title}
                </h3>
                <p className="body-sm mt-3.5 text-muted">{item.description}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
