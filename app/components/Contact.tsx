'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaAmazon, FaBookOpen, FaShoppingCart, FaGoogle } from 'react-icons/fa';

const NextImage = Image;

const SocialIcon = ({
  href,
  icon: Icon,
  bgColor,
  textColor,
}: {
  href: string;
  icon: React.ElementType;
  bgColor: string;
  textColor: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${bgColor} ${textColor}`}
  >
    <Icon className="h-6 w-6" />
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-[#0b1526] text-[#d7dbe3] font-poppins py-4">
      <div className="mx-auto max-w-7xl px-8 text-center">
        <p className="text-xs text-[#8a919e]">
          Copyright © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
