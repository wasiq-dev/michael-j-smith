import type { Metadata } from "next";
import { Anton, Inter, Poppins, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-anton',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-barlow',
});

export const metadata: Metadata = {
  title: "AUTHOR | Official Website",
  description:
    "The official website of AUTHOR. Explore the books, read about the author's journey, and get in touch.",
  keywords: "AUTHOR, author, books, writer, novels, literature, storytelling",
  authors: [{ name: "AUTHOR" }],
  creator: "AUTHOR",
  publisher: "AUTHOR",
  openGraph: {
    title: "AUTHOR | Official Website",
    description:
      "The official website of AUTHOR. Explore the books, read about the author's journey, and get in touch.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AUTHOR | Official Website",
    description: "The official website of AUTHOR. Explore the books and get in touch.",
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
      className={`${anton.variable} ${inter.variable} ${poppins.variable} ${barlow.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
