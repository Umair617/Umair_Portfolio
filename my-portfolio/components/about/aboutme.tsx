import React from "react";
import Image from "next/image";

const Aboutme = () => {
  const aboutData = {
    image: "/-profile.png", 
    title: "About Me",
    description: `
      I'm Umair Mumtaz, a passionate Full Stack Developer specializing in 
      React.js and Next.js. I love creating elegant, efficient, and responsive 
      web applications that provide exceptional user experiences. 
      Over the years, I've worked on a variety of projects — from small business 
      websites to enterprise-level applications — and I continue to learn and 
      evolve with every new challenge.
    `,
    highlights: [
      "1+ years of experience in full-stack development",
      "Strong expertise in React.js, Next.js, and Node.js",
      "Dedicated to writing clean, maintainable code",
      "Focused on performance, accessibility, and responsive design",
    ],
    stats: [
      { number: "5+", label: "Projects Completed" },
      { number: "1+", label: "Years Experience" },
      { number: "99%", label: "Client Satisfaction" },
    ],
  };

  return (
    <section className="aboutme min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background decorative elements - Same as HeroBanner */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 py-16 md:px-8 md:py-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {aboutData.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group">
              {/* Gradient Border Container */}
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl">
                {/* Main Image Container */}
                <div className="relative bg-white dark:bg-slate-800 rounded-full p-2">
                  <Image
                    src={aboutData.image}
                    alt="Umair Mumtaz - Full Stack Developer"
                    width={400}
                    height={400}
                    className="rounded-2xl object-cover w-full h-auto  scale-105 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='18' fill='%236b7280'%3EProfile Image%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>
              
              {/* Floating background elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-30 blur-lg transition-all duration-500 -z-10"></div>
              
              {/* Decorative border animation */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 -z-20"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-3/5 space-y-8">
            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {aboutData.description}
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">
                What I Bring
              </h4>
              <div className="grid gap-3">
                {aboutData.highlights.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-slate-700 group hover:translate-x-2"
                  >
                    <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
              {aboutData.stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-slate-700 group hover:scale-105"
                >
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="pt-6">
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <span>Let's Work Together</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Skills Badges - Optional additional section */}
        <div className="mt-20 text-center">
          <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Technologies I Work With
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React.js", "Next.js", "TypeScript", "Node.js", 
              "Tailwind CSS", "MongoDB", "PostgreSQL", "AWS"
            ].map((tech, index) => (
              <span 
                key={tech}
                className="px-6 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;