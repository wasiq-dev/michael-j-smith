# Project notes

Author portfolio site — a dark (black / gold / navy) marketing site adapted from the
layout of the sibling `../judy` project, with its e-commerce (cart, Stripe checkout) and
blog/admin features removed. Pages: Home, About, Books (showcase only), Contact.

## Stack

- **Next.js 15.5.20** (App Router, `app/` at the repo root — no `src/`), React 18,
  TypeScript, Tailwind CSS v4, Framer Motion, Embla Carousel, `react-fast-marquee`,
  `react-icons`. This is stable Next 15 — standard conventions apply.
- `npm run dev` / `npm run build` / `npm start`.

## Conventions

- Theme tokens live in `app/globals.css` (`--gold`, `--navy`, `--background`, …); most
  component colours are inline Tailwind arbitrary values (`bg-[#0b1f3a]`, `text-[#c69a3c]`).
- `AUTHOR` is a placeholder brand name used in the header, footer and metadata.
- Bio and book copy in `app/components/*` and `app/contexts/BookSelectionContext.tsx`
  is placeholder text. Images in `public/images/` are placeholders carried over from
  the reference project — replace keeping the same filenames.

> The previous "This is NOT the Next.js you know" block was written by a Next 16 canary
> that is no longer installed; it does not apply to this stable Next 15 setup.
