'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaAmazon, FaBookOpen, FaShoppingCart, FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
    className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${bgColor} ${textColor}`}
  >
    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
  </a>
);

export default function ContactSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Contact Info & Socials */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <Link
                href="/"
                aria-label="Homepage"
                className="inline-block hover:opacity-80 transition-opacity duration-200 mb-6"
              >
                <Image
                  src="/images/new-logo.png"
                  alt="Michael J.Smith"
                  width={360}
                  height={100}
                  className="w-auto h-20 sm:h-24 md:h-28 lg:h-32 mx-auto lg:mx-0"
                />
              </Link>
            </div>
            <div>
              <h2 className="font-anton text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gold-gradient uppercase mb-4">
                Get In Touch
              </h2>
              <p className="font-poppins text-sm sm:text-base md:text-lg text-[#d7dbe3] leading-relaxed">
                Have questions about the book? Want to request a signed copy or discuss bulk orders? 
                Reach out and I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-poppins text-base sm:text-lg md:text-xl font-bold text-[#e8c877] uppercase tracking-wider">
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-4">
                <SocialIcon
                  href="#"
                  icon={FaAmazon}
                  bgColor="bg-gradient-to-br from-[#c69a3c] to-[#8a6a25]"
                  textColor="text-[#0b0b0b]"
                />
                <SocialIcon
                  href="#"
                  icon={FaTwitter}
                  bgColor="bg-gradient-to-br from-[#1da1f2] to-[#0c85d0]"
                  textColor="text-white"
                />
                <SocialIcon
                  href="#"
                  icon={FaInstagram}
                  bgColor="bg-gradient-to-br from-[#e1306c] to-[#c13584]"
                  textColor="text-white"
                />
                <SocialIcon
                  href="#"
                  icon={FaLinkedin}
                  bgColor="bg-gradient-to-br from-[#0077b5] to-[#005885]"
                  textColor="text-white"
                />
                <SocialIcon
                  href="#"
                  icon={FaBookOpen}
                  bgColor="bg-gradient-to-br from-[#13294d] to-[#0b1f3a]"
                  textColor="text-[#e8c877]"
                />
                <SocialIcon
                  href="#"
                  icon={FaGoogle}
                  bgColor="bg-gradient-to-br from-[#4285f4] to-[#3367d6]"
                  textColor="text-white"
                />
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-[#121216] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#c69a3c]/20 shadow-2xl">
            <h3 className="font-anton text-xl sm:text-2xl md:text-3xl font-bold text-[#f4efe3] uppercase mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block font-poppins text-sm font-semibold text-[#e8c877] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-[#c69a3c]/25 bg-[#0a0a0c] p-3 sm:p-4 text-sm sm:text-base text-[#f4efe3] placeholder-[#7c828f] focus:outline-none focus:ring-2 focus:ring-[#c69a3c]"
                />
              </div>
              <div>
                <label className="block font-poppins text-sm font-semibold text-[#e8c877] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-[#c69a3c]/25 bg-[#0a0a0c] p-3 sm:p-4 text-sm sm:text-base text-[#f4efe3] placeholder-[#7c828f] focus:outline-none focus:ring-2 focus:ring-[#c69a3c]"
                />
              </div>
              <div>
                <label className="block font-poppins text-sm font-semibold text-[#e8c877] mb-2">
                  Your Message
                </label>
                <textarea
                  placeholder="Enter your message"
                  rows={4}
                  className="w-full rounded-xl border border-[#c69a3c]/25 bg-[#0a0a0c] p-3 sm:p-4 text-sm sm:text-base text-[#f4efe3] placeholder-[#7c828f] focus:outline-none focus:ring-2 focus:ring-[#c69a3c] resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-[#c69a3c] to-[#e8c877] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-[#0b0b0b] transition-all hover:shadow-lg hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
