"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // Auto-close drawer on resize past md breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#home')}
              className="text-neutral-900 font-black text-xl tracking-tight hover:text-neutral-500 transition-colors"
            >
              UM<span className="text-neutral-300">.</span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors duration-300 tracking-widest uppercase"
                >
                  {item.name}
                </button>
              ))}
              <a
                href="https://www.linkedin.com/in/umair-mumtaz-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="ml-4 bg-neutral-900 text-white hover:bg-neutral-700 rounded-full px-6 h-8 text-xs font-semibold tracking-wide cursor-pointer"
                >
                  Hire Me
                </Button>
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-[18px] h-[14px] relative">
                <span className={`absolute left-0 w-full h-[1.5px] bg-neutral-800 rounded-full transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
                }`} />
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-neutral-800 rounded-full transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'w-0 opacity-0' : 'w-3/4'
                }`} />
                <span className={`absolute left-0 w-full h-[1.5px] bg-neutral-800 rounded-full transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0 top-auto'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile slide-in drawer */}
      <nav
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-neutral-100">
          <span className="text-neutral-900 font-black text-xl tracking-tight">
            UM<span className="text-neutral-300">.</span>
          </span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-neutral-400 hover:text-neutral-900 transition-colors p-1"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        {/* Drawer nav items */}
        <div className="flex flex-col gap-1 px-4 py-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-left text-sm text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors tracking-widest uppercase px-3 py-3 rounded-lg"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Drawer footer */}
        <div className="px-6 mt-auto absolute bottom-8 left-0 right-0">
          <a
            href="https://www.linkedin.com/in/umair-mumtaz-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button
              className="w-full bg-neutral-900 text-white hover:bg-neutral-700 rounded-full text-sm h-11 font-semibold cursor-pointer"
            >
              Hire Me
            </Button>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
