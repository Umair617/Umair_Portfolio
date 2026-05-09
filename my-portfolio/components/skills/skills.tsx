"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      ),
      skills: ["TypeScript", "JavaScript", "Python", "HTML5", "CSS3"],
    },
    {
      title: "Frontend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
      ),
      skills: ["React.js", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend & Database",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>
      ),
      skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Redis", "REST APIs", "RBAC"],
    },
    {
      title: "Tools & DevOps",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 13.73-4 6.93"/></svg>
      ),
      skills: ["Git", "GitHub", "VS Code", "Figma"],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-28 bg-white border-t border-neutral-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-neutral-300" />
          <span className="text-[10px] text-neutral-400 tracking-[0.25em] uppercase">Portfolio</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold text-neutral-900 mb-10 md:mb-16">Technical Skills</h2>

        {/* Skill categories as cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group p-6 rounded-2xl border border-neutral-200 bg-neutral-50 hover:bg-white hover:border-neutral-300 hover:shadow-sm transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-500 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-sm font-semibold text-neutral-900">{cat.title}</h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-neutral-200 text-neutral-500 bg-white text-xs hover:border-neutral-400 hover:text-neutral-900 transition-colors rounded-full px-3.5 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
