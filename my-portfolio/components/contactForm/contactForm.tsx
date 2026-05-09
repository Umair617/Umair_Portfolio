"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  const contactInfo = [
    { label: "Email", value: "umumtaz617@gmail.com", href: "mailto:umumtaz617@gmail.com" },
    { label: "Phone", value: "+92 315 6580388", href: "tel:+923156580388" },
    { label: "Location", value: "Lahore, Pakistan", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 bg-neutral-50 border-t border-neutral-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs text-neutral-400 tracking-widest uppercase mb-3">04. Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">Let's Work Together</h2>
          <p className="text-neutral-400 mt-4 max-w-lg text-sm">
            Have a project in mind? I'd love to discuss how we can bring it to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

          {/* Left: Contact info */}
          <div className="lg:col-span-2 space-y-10">
            <div className="space-y-7">
              {contactInfo.map(({ label, value, href }) => (
                <div key={label}>
                  <p className="text-[10px] text-neutral-400 tracking-widest uppercase mb-1">{label}</p>
                  <a href={href} className="text-neutral-900 hover:text-neutral-500 transition-colors text-sm font-medium">
                    {value}
                  </a>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-neutral-200">
              <p className="text-[10px] text-neutral-400 tracking-widest uppercase mb-4">Follow</p>
              <div className="flex gap-5">
                {[
                  { name: 'GitHub', href: 'https://github.com' },
                  { name: 'LinkedIn', href: 'https://linkedin.com' },
                  { name: 'Twitter', href: 'https://twitter.com' },
                ].map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 transition-colors text-sm font-medium"
                  >
                    {name} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20 gap-4">
                <div className="w-14 h-14 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                  <svg className="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900">Message Sent!</h3>
                <p className="text-neutral-400 text-sm">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[10px] text-neutral-500 tracking-widest uppercase">Name</Label>
                    <Input
                      id="name" name="name" value={formData.name} onChange={handleChange} required
                      placeholder="Your name"
                      className="bg-neutral-50 border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus-visible:border-neutral-500 focus-visible:ring-0 rounded-lg h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[10px] text-neutral-500 tracking-widest uppercase">Email</Label>
                    <Input
                      id="email" name="email" type="email" value={formData.email} onChange={handleChange} required
                      placeholder="your@email.com"
                      className="bg-neutral-50 border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus-visible:border-neutral-500 focus-visible:ring-0 rounded-lg h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-[10px] text-neutral-500 tracking-widest uppercase">Subject</Label>
                  <Input
                    id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                    placeholder="What's this about?"
                    className="bg-neutral-50 border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus-visible:border-neutral-500 focus-visible:ring-0 rounded-lg h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[10px] text-neutral-500 tracking-widest uppercase">Message</Label>
                  <Textarea
                    id="message" name="message" value={formData.message} onChange={handleChange} required
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="bg-neutral-50 border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus-visible:border-neutral-500 focus-visible:ring-0 rounded-lg resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neutral-900 text-white hover:bg-neutral-700 rounded-lg h-12 font-semibold text-sm tracking-wide disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message →'
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
