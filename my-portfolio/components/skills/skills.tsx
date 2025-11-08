"use client";

import React, { useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";

const Skills = () => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);

  const skillsData = [
    { 
      name: "HTML", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      level: "Advanced",
      color: "from-orange-500 to-red-500"
    },
    { 
      name: "CSS", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      level: "Advanced",
      color: "from-blue-500 to-blue-700"
    },
    { 
      name: "Tailwind CSS", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      level: "Expert",
      color: "from-cyan-500 to-blue-500"
    },
    { 
      name: "JavaScript", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      level: "Advanced",
      color: "from-yellow-400 to-yellow-600"
    },
    { 
      name: "React.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: "Expert",
      color: "from-cyan-400 to-blue-500"
    },
    { 
      name: "Next.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      level: "Expert",
      color: "from-gray-800 to-black"
    },
    { 
      name: "Node.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      level: "Advanced",
      color: "from-green-500 to-green-700"
    },
    { 
      name: "Express.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      level: "Advanced",
      color: "from-gray-600 to-gray-800"
    },
    { 
      name: "MongoDB", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      level: "Intermediate",
      color: "from-green-600 to-green-800"
    },
    { 
      name: "TypeScript", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      level: "Advanced",
      color: "from-blue-600 to-blue-800"
    },
    { 
      name: "Git", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      level: "Advanced",
      color: "from-orange-600 to-red-600"
    },
    { 
      name: "AWS", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      level: "Intermediate",
      color: "from-orange-400 to-yellow-500"
    },
  ];

  return (
    <section className="skills py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200 dark:bg-yellow-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Navigation and Info */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Showing {skillsData.length} technologies
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              className="p-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 hover:shadow-lg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              className="p-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-700 hover:shadow-lg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-105 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
              1280: { slidesPerView: 7 },
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="skills-swiper"
          >
            {skillsData.map((skill, index) => (
              <SwiperSlide key={skill.name}>
                <div className="group relative">
                  {/* Main Card */}
                  <div className="flex flex-col items-center gap-4 p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white dark:hover:bg-slate-800 hover:border-transparent">
                    
                    {/* Skill Level Badge */}
                    <div className="absolute -top-2 -right-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        skill.level === 'Expert' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                        skill.level === 'Advanced' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                        'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    
                    {/* Logo Container with Gradient Border */}
                    <div className={`relative p-4 bg-gradient-to-r ${skill.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <div className="bg-white dark:bg-slate-800 rounded-xl p-3">
                        <img 
                          src={skill.logo} 
                          alt={skill.name} 
                          className="w-12 h-12 object-contain filter group-hover:scale-110 transition-transform duration-300" 
                        />
                      </div>
                    </div>
                    
                    {/* Skill Name */}
                    <h3 className="text-center font-semibold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {skill.name}
                    </h3>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Floating Animation */}
                  <div 
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-md -z-10 transition-all duration-500 group-hover:scale-110"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Gradient Overlays for Scroll Indicators */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50/80 dark:from-slate-900/80 to-transparent pointer-events-none z-20"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50/80 dark:from-slate-900/80 to-transparent pointer-events-none z-20"></div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(Math.ceil(skillsData.length / 7))].map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef.current?.slideTo(index * 7)}
              className="w-2 h-2 rounded-full bg-gray-300 dark:bg-slate-600 hover:bg-gray-400 dark:hover:bg-slate-400 transition-colors"
            ></button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interested in working together?
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;