import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope, Bebas_Neue } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
});

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
});

export const metadata: Metadata = {
  title: 'Michael J. Smith | Between the 4 Lines',
  description:
    'Official website of Michael J. Smith — author of Between the 4 Lines. Basketball official, author, and speaker on youth basketball culture.',
  keywords:
    'Michael J. Smith, Between the 4 Lines, basketball, author, keynote speaker, youth basketball, NCAA official',
  authors: [{ name: 'Michael J. Smith' }],
  creator: 'Michael J. Smith',
  publisher: 'Michael J. Smith',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Michael J. Smith | Between the 4 Lines',
    description:
      'An unfiltered perspective on youth basketball, leadership, and accountability from the official\'s chair at center court.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Michael J. Smith | Between the 4 Lines',
    description:
      'An unfiltered perspective on youth basketball from Michael J. Smith, author of Between the 4 Lines.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} ${bebas.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
