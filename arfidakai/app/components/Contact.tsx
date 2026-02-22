'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';

const socialIconMap = {
  Linkedin: <Linkedin className="w-5 h-5" />,
  Github: <Github className="w-5 h-5" />,
  Twitter: <Twitter className="w-5 h-5" />,
};

export const Contact = () => {
  const { contact } = portfolioData;
  
  return (
    <section id="contact" className="py-32 px-8 md:px-24 bg-[#0A0C14] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {contact.label}
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              {contact.title}
            </h2>
            <p className="text-stone-400 text-lg font-light max-w-md mb-12">
              {contact.description}
            </p>
            
            <div className="flex flex-col gap-6">
              <a href={`mailto:${contact.email}`} className="group flex items-center gap-4 text-2xl font-bold text-white hover:text-indigo-400 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <span>{contact.email}</span>
              </a>
            </div>

            <div className="flex gap-5 mt-16">
              {contact.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-stone-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialIconMap[social.platform as keyof typeof socialIconMap]}
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-[1px] rounded-[2.5rem] bg-gradient-to-br from-indigo-500/50 via-purple-500/20 to-transparent shadow-2xl"
          >
            <div className="bg-[#161924] p-10 md:p-14 rounded-[2.45rem] shadow-inner">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 ml-1">Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/5 rounded-xl px-6 py-4 text-white placeholder:text-stone-600 focus:ring-2 focus:ring-indigo-500/50 focus:bg-white/10 transition-all outline-none"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 ml-1">Email</label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/5 rounded-xl px-6 py-4 text-white placeholder:text-stone-600 focus:ring-2 focus:ring-indigo-500/50 focus:bg-white/10 transition-all outline-none"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 ml-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-6 py-4 text-white placeholder:text-stone-600 focus:ring-2 focus:ring-indigo-500/50 focus:bg-white/10 transition-all outline-none resize-none"
                    placeholder="Tell me about your vision..."
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-5 rounded-2xl font-bold hover:shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] transition-all flex items-center justify-center gap-3 group overflow-hidden relative">
                  <span className="relative z-10 flex items-center gap-2">Send Message <Send className="w-4 h-4" /></span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
