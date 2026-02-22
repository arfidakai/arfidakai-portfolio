'use client';

import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '@/data/portfolio-data';

export const About = () => {
  const { about } = portfolioData;
  
  return (
    <section id="about" className="py-32 px-8 md:px-24 bg-[#0F111A] relative overflow-hidden">
      <div className="absolute left-0 top-0 w-1 h-32 bg-gradient-to-b from-indigo-500 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-xs mb-4 block">{about.label}</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
              {about.title}
            </h2>
            <div className="space-y-6 text-stone-400 text-lg leading-relaxed font-light">
              {about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            
            <div className="flex gap-8 mt-12">
              {about.stats.map((stat, idx) => (
                <React.Fragment key={stat.label}>
                  {idx > 0 && <div className="w-px h-12 bg-white/5"></div>}
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs uppercase tracking-widest text-stone-500 font-bold">{stat.label}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-indigo-600/20 to-purple-600/10 p-1">
              <div className="w-full h-full rounded-[2.9rem] bg-[#161924] border border-white/5 flex items-center justify-center p-12 overflow-hidden group">
                <div className="grid grid-cols-2 gap-4 w-full">
                  {[
                    { label: 'UI/UX', color: 'bg-indigo-500' },
                    { label: 'Frontend', color: 'bg-purple-500' },
                    { label: 'Animation', color: 'bg-pink-500' },
                    { label: 'Logic', color: 'bg-teal-500' }
                  ].map((val, i) => (
                    <div key={i} className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-3 transition-transform group-hover:scale-105 duration-500">
                       <div className={`w-8 h-1 ${val.color} rounded-full`}></div>
                       <span className="text-xs font-bold text-stone-300 tracking-widest uppercase">{val.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
