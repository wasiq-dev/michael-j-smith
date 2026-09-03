# AUTHOR — Portfolio Website

A dark-themed (black / gold / navy) author portfolio built with Next.js 15, React 18,
Tailwind CSS v4 and Framer Motion. Adapted from the layout of the `judy` project, with
the e-commerce (cart / checkout / Stripe) and blog features removed.

## Pages

- `/` — Home (hero, about, book showcase carousel, "about the book" sections)
- `/about` — About the author + publishing platforms
- `/books` — Book showcase (covers, descriptions, highlights — no purchasing)
- `/contact` — Contact form

## Placeholders to replace

- **Brand name:** the wordmark reads `AUTHOR` in the header, footer and page metadata
  (`app/layout.tsx`, `app/components/Header.tsx`, `app/components/AboutHeader.tsx`,
  `app/components/Contact.tsx`).
- **Bio & book copy:** placeholder text in `app/components/About.tsx`,
  `app/components/AboutAbout.tsx`, `app/contexts/BookSelectionContext.tsx`,
  `app/components/BookFeatures.tsx`, `app/components/Books.tsx`.
- **Images:** the files under `public/images/` are placeholders carried over from the
  reference project. Replace them keeping the same filenames.
- **Footer links:** social icons in `app/components/Contact.tsx` point to `#`.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```
