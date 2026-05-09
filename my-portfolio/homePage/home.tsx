"use client";

import React, { useRef, useState } from "react";
import Header from "@/components/header";
import HeroBanner from "@/components/HeroBanner";
import Aboutme from "@/components/about/aboutme";
import Skills from "@/components/skills/skills";
import Footer from "@/components/footer/footer";
import { Badge } from "@/components/ui/badge";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/effect-fade";

const Experience = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeExp, setActiveExp] = useState(0);

  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "LogicWise.co",
      period: "Nov 2025 – Present",
      location: "Lahore, Punjab, Pakistan",
      stack: ["React.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
      bullets: [
        "Building and maintaining scalable web applications using React, Next.js, and TypeScript.",
        "Developing RESTful APIs with Node.js and Express.js, integrated with PostgreSQL databases.",
        "Built SaaS tools with multi-tenant architecture, subscription management, and role-based access control.",
        "Implemented Redis caching and RBAC (Role-Based Access Control) for secure, performant applications.",
        "Collaborating with cross-functional teams to deliver production-ready features on time.",
        "Participating in code reviews, Agile sprints, and Git-based version control workflows.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "ApplyDreams",
      period: "Sept 2025 – Nov 2025",
      location: "Lahore, Punjab, Pakistan",
      stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      bullets: [
        "Built and maintained interactive web applications using React, Next.js, TypeScript, and Tailwind CSS.",
        "Implemented reusable and type-safe UI components for scalable development.",
        "Translated Figma designs into fully responsive, production-ready pages.",
        "Enhanced website performance, accessibility, and SEO through clean, optimized code.",
      ],
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-28 bg-neutral-50 border-t border-neutral-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-neutral-300" />
          <span className="text-[10px] text-neutral-400 tracking-[0.25em] uppercase">Career</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-neutral-900 mb-10 md:mb-16">Work Experience</h2>

        {/* Swiper card slider */}
        <Swiper
          modules={[EffectFade, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          onSlideChange={(swiper) => setActiveExp(swiper.activeIndex)}
          spaceBetween={0}
          slidesPerView={1}
          allowTouchMove={true}
          className="!overflow-visible"
        >
          {experiences.map((exp, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-8 md:p-10 shadow-sm">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900">{exp.role}</h3>
                    <p className="text-neutral-600 text-sm mt-1">{exp.company}</p>
                  </div>
                  <div className="text-left md:text-right shrink-0">
                    <p className="text-xs text-neutral-500 font-medium">{exp.period}</p>
                    <p className="text-[11px] text-neutral-500 mt-0.5">{exp.location}</p>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {exp.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-neutral-200 text-neutral-500 bg-neutral-50 text-[11px] rounded-full px-3 py-0.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-neutral-100 mb-6" />

                {/* Bullets */}
                <ul className="space-y-3 max-h-48 overflow-y-auto">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-neutral-600 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10">
          {/* Slide indicator */}
          <div className="flex items-center gap-3">
            {experiences.map((_, i) => (
              <button
                key={i}
                onClick={() => swiperRef.current?.slideTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${activeExp === i ? 'w-6 bg-neutral-900' : 'w-2 bg-neutral-300'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Prev/Next buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const eduSwiperRef = useRef<SwiperType | null>(null);
  const [activeEdu, setActiveEdu] = useState(0);

  const education = [
    {
      degree: "Bachelor's degree, Computer Software Engineering",
      school: "University Of Central Punjab",
      period: "October 2020 — July 2025",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
      ),
      highlights: [
        "Software development, algorithms & data structures",
        "Database systems & modern web technologies",
        "Final Year Project with distinction",
      ],
    },
    {
      degree: "FSc (Pre-Engineering)",
      school: "Punjab College",
      period: "2018 — 2022",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>
      ),
      highlights: [
        "Mathematics, physics & engineering principles",
        "Strong analytical foundation",
      ],
    },
  ];

  return (
    <section id="education" className="py-16 md:py-28 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-neutral-300" />
          <span className="text-[10px] text-neutral-400 tracking-[0.25em] uppercase">Education</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-neutral-900 mb-10 md:mb-16">Education</h2>

        {/* Swiper card slider */}
        <Swiper
          modules={[EffectFade, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          onSwiper={(swiper) => { eduSwiperRef.current = swiper; }}
          onSlideChange={(swiper) => setActiveEdu(swiper.activeIndex)}
          spaceBetween={0}
          slidesPerView={1}
          allowTouchMove={true}
          className="!overflow-visible"
        >
          {education.map((edu, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 sm:p-8 md:p-10">
                {/* Icon + Header */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 shrink-0">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-900">{edu.degree}</h3>
                        <p className="text-neutral-600 text-sm mt-1">{edu.school}</p>
                      </div>
                      <p className="text-xs text-neutral-500 font-medium shrink-0">{edu.period}</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-neutral-200 mb-6" />

                {/* Highlights */}
                <ul className="space-y-3 max-h-32 overflow-y-auto">
                  {edu.highlights.map((item, j) => (
                    <li key={j} className="flex gap-3 text-neutral-600 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center gap-3">
            {education.map((_, i) => (
              <button
                key={i}
                onClick={() => eduSwiperRef.current?.slideTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${activeEdu === i ? 'w-6 bg-neutral-900' : 'w-2 bg-neutral-300'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => eduSwiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button
              onClick={() => eduSwiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-neutral-900 hover:text-neutral-900 transition-colors"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const links = [
    {
      label: "EMAIL",
      value: "umumtaz617@gmail.com",
      href: "mailto:umumtaz617@gmail.com",
    },
    {
      label: "LINKEDIN",
      value: "linkedin.com/in/umair-mumtaz-dev",
      href: "https://www.linkedin.com/in/umair-mumtaz-dev",
    },
    {
      label: "GITHUB",
      value: "github.com/Umair617",
      href: "https://github.com/Umair617",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-28 bg-neutral-50 border-t border-neutral-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-neutral-300" />
          <span className="text-[10px] text-neutral-400 tracking-[0.25em] uppercase">Get in Touch</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-neutral-900 mb-6">Let&apos;s Work Together</h2>
        <p className="text-neutral-500 text-base max-w-lg mb-10 md:mb-14">
          Have a project in mind? I&apos;m available for freelance work and always open to discussing new opportunities.
        </p>

        {/* Contact links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10 md:mb-14">
          {links.map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              target={label !== "EMAIL" ? "_blank" : undefined}
              rel={label !== "EMAIL" ? "noopener noreferrer" : undefined}
              className="group p-6 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm transition-all duration-300"
            >
              <p className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] mb-2">{label}</p>
              <p className="text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors">{value}</p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:umumtaz617@gmail.com"
          className="inline-flex items-center gap-2 bg-neutral-900 text-white hover:bg-neutral-700 rounded-full px-8 py-3.5 text-sm font-medium transition-colors"
        >
          Send me an email
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section id="home">
        <HeroBanner />
      </section>
      <section id="about">
        <Aboutme />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
