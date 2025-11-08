"use client"
import React from 'react'
import Header from '@/components/header'
import HeroBanner from '@/components/HeroBanner'
import Aboutme from '@/components/about/aboutme'
import Skills from '@/components/skills/skills'
import Footer from '@/components/footer/footer'
import ContactForm from '@/components/contactForm/contactForm'



// Sample Projects component (you can replace this with your actual Projects component)
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Expirence
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards would go here */}
          <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 shadow-lg">

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2"> Frontend Intern(React JS  Next  JS)</h3>
            <h4 className="text-md font-semibold text-gray-900 dark:text-white">Apply Dreams (Sept 2025 - Present)</h4>
            <div className='mt-5'>
            <ul className="text-gray-600 dark:text-gray-300 gap-4 ">


 <li className='pb-2'>Built and maintained interactive web applications using React, Next.js,
 TypeScript, and Tailwind CSS.</li>
 <li className='pb-2'>Implemented reusable and type-safe UI components for scalable
 development.</li>
<li className='pb-2'> Translated Figma designs into fully responsive, production-ready
 pages. </li>
 <li className='pb-2'>Enhanced website performance, accessibility, and SEO through clean,
 optimized code.</li>
 <li className='pb-2'>Collaborated in Agile sprints, participated in code reviews, and
 contributed to Git-based version control</li>
 </ul>
 </div>
          </div>
          <div className="hidden bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Project 2</h3>
            <p className="text-gray-600 dark:text-gray-300">Project description goes here</p>
          </div>
          <div className="hidden bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Project 3</h3>
            <p className="text-gray-600 dark:text-gray-300">Project description goes here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section id="home">
        <HeroBanner />
      </section>
      
      {/* About Section */}
      <section id="about">
        <Aboutme />
      </section>
      
      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>
      
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section */}
      <section id="contact">
        <ContactForm />
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}