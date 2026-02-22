'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export const Hero = () => {
  const { personal } = portfolioData;
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-8 pt-20 overflow-hidden md:flex-row md:px-24 bg-[#0F111A]">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="flex-1 space-y-8 text-center md:text-left z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
            <Sparkles className="w-3 h-3" />
            <span>{personal.tagline}</span>
          </div>
          <h1 className="text-5xl font-bold leading-[1.1] md:text-8xl text-white">
            {personal.headline}
          </h1>
          <p className="max-w-md mt-8 text-lg font-light leading-relaxed text-stone-400">
            {personal.description}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col items-center gap-5 md:flex-row"
        >
          <a
            href="#projects"
            className="flex items-center px-10 py-4 space-x-2 text-white font-semibold transition-all rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:scale-105 active:scale-95 group"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="px-10 py-4 transition-all rounded-2xl border border-white/10 text-white font-medium hover:bg-white/5"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="relative mt-20 md:mt-0 md:ml-12"
      >
        <div className="relative z-10 w-72 h-96 md:w-96 md:h-[500px] overflow-hidden rounded-[2rem] border-4 border-white/5 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1635366898830-b5d48950e4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGp1bmlvciUyMGRldmVsb3BlciUyMHBvcnRyYWl0JTIwc29mdCUyMGxpZ2h0aW5nfGVufDF8fHx8MTc3MTA4MjM1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Maya"
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-500/30 rounded-full blur-2xl animate-pulse"></div>
      </motion.div>
    </section>
  );
};
