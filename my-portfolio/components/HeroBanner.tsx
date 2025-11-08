import React from "react";
import Image from "next/image";
import Circle from '@/components/languagesCircle/Circle'

const HeroBanner = () => {
  const profileData = [
    {
      name: "Umair Mumtaz",
      role: "Front-End Developer",
      skills: ["React.js", "Next.js", "TypeScript"],
      focus: [
        "Creating exceptional digital experiences",
        "Fast performance",
        "Accessibility",
        "Visual appeal",
        "Responsive design",
      ],
      experience: "1 year",
      description: "Passionate developer crafting modern web applications with cutting-edge technologies",
      location: "Lahore, Pakistan",
      availability: "Available for new projects",
      image: "/profile.png",
    },
  ];

  const profile = profileData[0];
   const handleDownloadResume = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Umair_Mumtaz_Resume.pdf'; // Custom filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

  };


  return (
    <section className="hero-banner min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 py-16 md:px-8 md:py-24 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 justify-between w-full">
          {/* Left Content */}
          <div className="flex flex-col w-full md:w-[55%] gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm w-fit mb-4">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              {profile.availability}
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Hello, I'm{" "}<br/>
                <span className=" text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {profile.name}
                </span>
              </h1>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                  {profile.role}
                </h2>
              </div>
            </div>

            {/* Description */}
            {profile?.description && (
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                {profile.description}
              </p>
            )}

            {/* Experience & Location */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 dark:text-orange-400">⚡</span>
                </div>
                <span>{profile.experience} Experience</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400">📍</span>
                </div>
                <span>{profile.location}</span>
              </div>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {profile.skills.map((skill, index) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-full text-sm text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button onClick={() => scrollToSection('#contact')} className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-8 py-4 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button onClick={handleDownloadResume} className="group border-2 border-gray-300 dark:border-slate-600 hover:border-orange-500 dark:hover:border-orange-500 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 rounded-full px-8 py-4 font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  View Resume
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Circle Component */}
          <div className="flex justify-center w-full md:w-[45%]">
            <div className="relative">
              <Circle />
              {/* Floating elements around the circle */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;