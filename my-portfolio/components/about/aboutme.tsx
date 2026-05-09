"use client";

import React, { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
// @ts-ignore
import "swiper/css";

const Aboutme = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const stats = [
    { number: "5+", label: "Projects" },
    { number: "1+", label: "Years Exp." },
    { number: "2", label: "Companies" },
  ];

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 8 4 4-4 4"/></svg>
      ),
      title: "Web Development",
      desc: "Scalable, production-ready web applications with modern frameworks and best practices.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
      ),
      title: "Responsive Design",
      desc: "Pixel-perfect, mobile-first interfaces that look great across every screen and device.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
      ),
      title: "API Integration",
      desc: "RESTful API design and integration with secure, efficient data flow between services.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
      ),
      title: "Backend Development",
      desc: "Scalable server-side solutions with Node.js, Express.js, Redis caching, and robust database integrations.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
      ),
      title: "SaaS Tools & RBAC",
      desc: "Multi-tenant SaaS applications with subscription management, role-based access control, and Redis caching.",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-28 bg-neutral-50 border-t border-neutral-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-neutral-300" />
          <span className="text-[10px] text-neutral-400 tracking-[0.25em] uppercase">About Me</span>
        </div>

        {/* Heading + bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-neutral-900 leading-tight">
            Software Engineer &<br />Full Stack Developer
          </h2>
          <div className="flex flex-col justify-center">
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
              I&apos;m a Full Stack Developer from Pakistan specializing in building modern web
              applications with React, Next.js, TypeScript, and Node.js. Currently an Associate Software Engineer at <span className="text-neutral-900 font-medium">LogicWise.co</span>. I hold a BS in Software Engineering from <span className="text-neutral-900 font-medium">University Of Central Punjab</span>.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-8 sm:gap-12 mb-12 md:mb-20 pb-10 border-b border-neutral-200">
          {stats.map(({ number, label }) => (
            <div key={label}>
              <p className="text-3xl md:text-4xl font-bold text-neutral-900">{number}</p>
              <p className="text-[10px] text-neutral-500 uppercase tracking-[0.2em] mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Expertise label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-px bg-neutral-300" />
          <span className="text-[10px] text-neutral-400 tracking-[0.25em] uppercase">Expertise</span>
        </div>

        {/* Services — Swiper on mobile, grid on desktop */}
        <div className="block sm:hidden">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            onSlideChange={(swiper) => setActiveIdx(swiper.activeIndex)}
            spaceBetween={16}
            slidesPerView={1.15}
            className="!overflow-visible"
          >
            {services.map((svc) => (
              <SwiperSlide key={svc.title}>
                <div className="group p-6 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-500 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300 mb-5">
                    {svc.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-900 mb-2">{svc.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{svc.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Slide indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => swiperRef.current?.slideTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${activeIdx === i ? 'w-5 bg-neutral-900' : 'w-1.5 bg-neutral-300'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hidden sm:grid grid-cols-2 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group p-6 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-500 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300 mb-5">
                {svc.icon}
              </div>
              <h3 className="text-sm font-semibold text-neutral-900 mb-2">{svc.title}</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
