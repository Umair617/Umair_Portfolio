"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/effect-fade";

const HeroBanner = () => {
  const roles = [
    "Software Engineer",
    "MERN Stack Developer",
    "Next.js Developer",
    "TypeScript Specialist",
  ];

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Umair_Mumtaz_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 lg:gap-8 w-full pt-2 md:pt-16 pb-2 md:pb-12 sm:py-14 md:py-16 lg:py-0">

          {/* Top on mobile — profile image + badge inline */}
          <div className="relative flex flex-col items-center lg:items-end order-first lg:order-last">
            <div className="relative">
              <div className="w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[340px] md:h-[340px] lg:w-full lg:max-w-[440px] lg:h-auto lg:aspect-square rounded-full bg-neutral-200 overflow-hidden ring-4 ring-neutral-100 sm:ring-0">
                <Image
                  src="/-profile.png"
                  alt="Muhammad Umair Mumtaz"
                  width={500}
                  height={500}
                  priority
                  className="w-full h-full object-cover scale-[1.65] translate-y-14 sm:scale-[1.3] sm:translate-y-18 md:scale-[1.35] md:translate-y-26 lg:scale-150 lg:translate-y-36"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-2 right-0 sm:bottom-4 sm:right-0 z-20 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-full sm:rounded-xl px-3 py-1.5 sm:px-4 sm:py-2.5 shadow-sm">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] sm:text-[11px] text-neutral-600 font-medium whitespace-nowrap">Available for Work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-4 sm:space-y-6 max-w-xl z-10 order-last lg:order-first text-center lg:text-left">
            {/* Name */}
            <h1 className="text-[1.7rem] sm:text-4xl md:text-5xl lg:text-7xl font-black text-neutral-900 leading-[0.95] tracking-tight">
              Muhammad<br />Umair Mumtaz
            </h1>

            {/* Rotating roles */}
            <div className="h-7 sm:h-8">
              <Swiper
                modules={[EffectFade, Autoplay]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop
                speed={800}
                className="h-7 sm:h-8"
              >
                {roles.map((role) => (
                  <SwiperSlide key={role}>
                    <h2 className="text-base sm:text-lg md:text-xl text-neutral-500 font-light tracking-wide">
                      {role}
                    </h2>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desc */}
            <p className="text-neutral-500 text-sm sm:text-[15px] leading-relaxed max-w-md mx-auto lg:mx-0">
              I&apos;m a Full Stack Developer from Pakistan specializing in building modern web
              applications with React, Next.js, TypeScript, and Node.js.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-1">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-neutral-900 text-white hover:bg-neutral-700 rounded-full px-6 py-4 sm:px-7 sm:py-5 text-sm font-medium cursor-pointer"
              >
                Get in Touch
              </Button>
              <Button
                onClick={() => scrollToSection("#projects")}
                variant="outline"
                className="border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300 rounded-full px-6 py-4 sm:px-7 sm:py-5 text-sm cursor-pointer"
              >
                View My Work
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-6 sm:gap-10 pt-4 sm:pt-6">
              {[
                { value: "1+", label: "Years Exp." },
                { value: "2", label: "Companies" },
                { value: "5+", label: "Projects" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-xl sm:text-2xl font-bold text-neutral-900">{value}</p>
                  <p className="text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-[0.2em] mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-5 pt-2 sm:pt-4">
              {[
                { label: "GitHub", href: "https://github.com/Umair617" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/umair-mumtaz-dev" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section label */}
      <div className="absolute bottom-8 left-6 md:left-12 lg:left-20 z-10 hidden sm:block">
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-neutral-300" />
          <span className="text-[9px] text-neutral-400 tracking-[0.25em] uppercase">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
