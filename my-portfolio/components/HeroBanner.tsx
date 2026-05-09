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
      <div className="container mx-auto px-6 md:px-12 lg:px-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-8 w-full py-20 lg:py-0">

          {/* Left — text content */}
          <div className="space-y-6 max-w-xl z-10 order-last lg:order-first">
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-neutral-900 leading-[0.95] tracking-tight">
              Muhammad<br />Umair Mumtaz
            </h1>

            {/* Rotating roles */}
            <div className="h-8">
              <Swiper
                modules={[EffectFade, Autoplay]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                loop
                speed={800}
                className="h-8"
              >
                {roles.map((role) => (
                  <SwiperSlide key={role}>
                    <h2 className="text-lg md:text-xl text-neutral-600 font-light tracking-wide">
                      {role}
                    </h2>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desc */}
            <p className="text-neutral-500 text-[15px] leading-relaxed max-w-md">
              I&apos;m a Full Stack Developer from Pakistan specializing in building modern web
              applications with React, Next.js, TypeScript, and Node.js.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-neutral-900 text-white hover:bg-neutral-700 rounded-full px-7 py-5 text-sm font-medium cursor-pointer"
              >
                Get in Touch
              </Button>
              <Button
                onClick={() => scrollToSection("#projects")}
                variant="outline"
                className="border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300 rounded-full px-7 py-5 text-sm cursor-pointer"
              >
                View My Work
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-6 sm:gap-10 pt-6">
              {[
                { value: "1+", label: "Years Exp." },
                { value: "2", label: "Companies" },
                { value: "5+", label: "Projects" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-neutral-900">{value}</p>
                  <p className="text-[11px] text-neutral-500 uppercase tracking-[0.2em] mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5 pt-4">
              {[
                { label: "GitHub", href: "https://github.com/umairmumtaz" },
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

          {/* Right — profile image */}
          <div className="relative flex justify-center lg:justify-end items-center order-first lg:order-last">
            <div className="relative">
              <div className="w-[320px] sm:w-[360px] md:w-[400px] lg:w-[440px] aspect-square rounded-full bg-neutral-200 overflow-hidden">
                <Image
                  src="/-profile.png"
                  alt="Muhammad Umair Mumtaz"
                  width={500}
                  height={500}
                  priority
                  className="w-full h-full object-cover scale-150 translate-y-36"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-4 right-0 sm:bottom-6 sm:right-0 z-20 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] text-neutral-600 font-medium">Available for Work</span>
                </div>
              </div>
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
