"use client";

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Copyright */}
          <p className="text-neutral-400 text-xs">
            © {currentYear} <span className="text-neutral-600 font-medium">Muhammad Umair Mumtaz</span>. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex gap-6">
            {[
              { label: 'GitHub', href: 'https://github.com/Umair617' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/umair-mumtaz-dev' },
              { label: 'Email', href: 'mailto:umumtaz617@gmail.com' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-900 transition-colors text-xs"
              >
                {label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 bg-neutral-900 border border-neutral-700 rounded-full flex items-center justify-center text-white hover:bg-neutral-700 transition-all duration-300 z-40 cursor-pointer"
        aria-label="Back to top"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
