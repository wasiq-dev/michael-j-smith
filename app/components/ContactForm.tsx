'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section className="bg-[#050505] pt-24 pb-8 sm:pt-28 sm:pb-8 md:pt-32 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Hand Image */}
          <motion.div
            className="order-1 lg:order-1 flex justify-start lg:justify-start -ml-16 lg:-ml-42"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <div className="relative w-[640px] h-[768px] sm:w-[768px] sm:h-[1000px]">
              <Image
                src="/images/hand-left.png"
                alt="Hand reaching out"
                fill
                className="object-contain animate-float"
              />
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            className="order-2 lg:order-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <div className="bg-[#0b1526] border border-[#c69a3c]/20 p-8 rounded-2xl relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-30"
                style={{ backgroundImage: 'url(/images/about-book-dark.svg)', backgroundSize: 'cover' }}
              />
              <div className="relative z-10">
                <h2 className="font-anton text-4xl sm:text-5xl md:text-6xl font-bold text-gold-gradient uppercase mb-6">
                  Get In Touch
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="block font-poppins font-semibold text-[#c7ccd6] mb-2 text-sm">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className={`w-full h-12 px-4 py-3 bg-[#121216] border rounded-lg text-[#f4efe3] text-lg placeholder-[#7c828f] focus:outline-none focus:ring-2 focus:ring-[#c69a3c] ${
                        errors.name ? 'border-red-500' : 'border-[#c69a3c]/25'
                      }`}
                      required
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block font-poppins font-semibold text-[#c7ccd6] mb-2 text-sm">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className={`w-full h-12 px-4 py-3 bg-[#121216] border rounded-lg text-[#f4efe3] text-lg placeholder-[#7c828f] focus:outline-none focus:ring-2 focus:ring-[#c69a3c] ${
                        errors.email ? 'border-red-500' : 'border-[#c69a3c]/25'
                      }`}
                      required
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block font-poppins font-semibold text-[#c7ccd6] mb-2 text-sm">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      className={`w-full h-12 px-4 py-3 bg-[#121216] border rounded-lg text-[#f4efe3] text-lg placeholder-[#7c828f] focus:outline-none focus:ring-2 focus:ring-[#c69a3c] ${
                        errors.subject ? 'border-red-500' : 'border-[#c69a3c]/25'
                      }`}
                      required
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block font-poppins font-semibold text-[#c7ccd6] mb-2 text-sm">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message..."
                      rows={5}
                      className={`w-full px-4 py-3 bg-[#121216] border rounded-lg text-[#f4efe3] text-lg placeholder-[#7c828f] focus:outline-none focus:ring-2 focus:ring-[#c69a3c] resize-none ${
                        errors.message ? 'border-red-500' : 'border-[#c69a3c]/25'
                      }`}
                      required
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#c69a3c] text-[#0b0b0b] py-3 px-6 rounded-lg font-poppins font-semibold hover:bg-[#e8c877] transition-colors text-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
