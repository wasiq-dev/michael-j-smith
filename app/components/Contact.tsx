'use client';

import { FaAmazon, FaBookOpen, FaShoppingCart, FaGoogle } from 'react-icons/fa';

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
    <div className="bg-[#050505] pt-12 overflow-x-hidden">
      <footer className="bg-[#0b1526] rounded-t-[40px] text-[#d7dbe3] font-poppins border-t border-x border-[#c69a3c]/20">
        <div className="mx-auto max-w-7xl px-8 py-16 sm:px-12">
          <div className="grid grid-cols-1 gap-y-12 gap-x-8 md:grid-cols-2">
            {/* Column 1: Brand & Socials */}
            <div className="space-y-4">
              <h3 className="font-anton text-3xl font-bold uppercase text-gold-gradient tracking-wider">
                AUTHOR
              </h3>
              <p className="text-sm leading-relaxed text-[#aeb6c4] max-w-xs">
                Placeholder footer blurb. A sentence or two about the author and
                the books, with a friendly invitation to explore the catalogue
                and get in touch.
              </p>
              <div className="flex space-x-4 pt-2">
                <SocialIcon
                  href="#"
                  icon={FaAmazon}
                  bgColor="bg-gradient-to-br from-[#c69a3c] to-[#8a6a25]"
                  textColor="text-[#0b0b0b]"
                />
                <SocialIcon
                  href="#"
                  icon={FaBookOpen}
                  bgColor="bg-gradient-to-br from-[#13294d] to-[#0b1f3a]"
                  textColor="text-[#e8c877]"
                />
                <SocialIcon
                  href="#"
                  icon={FaShoppingCart}
                  bgColor="bg-gradient-to-br from-[#c69a3c] to-[#8a6a25]"
                  textColor="text-[#0b0b0b]"
                />
                <SocialIcon
                  href="#"
                  icon={FaGoogle}
                  bgColor="bg-gradient-to-br from-[#13294d] to-[#0b1f3a]"
                  textColor="text-[#e8c877]"
                />
              </div>
            </div>

            {/* Column 2: Message Form */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#e8c877]">
                Leave a Message
              </h4>
              <form className="space-y-4">
                <textarea
                  placeholder="ENTER YOUR MESSAGE"
                  rows={4}
                  className="w-full rounded-2xl border border-[#c69a3c]/25 bg-[#121216] p-4 text-sm text-[#f4efe3] placeholder-[#7c828f] focus:outline-none focus:ring-2 focus:ring-[#c69a3c]"
                ></textarea>
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-[#c69a3c] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#0b0b0b] transition-colors hover:bg-[#e8c877]"
                >
                  Enter
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#c69a3c]/15">
          <div className="mx-auto max-w-7xl px-8 py-5 text-center">
            <p className="text-xs text-[#8a919e]">
              Copyright © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
