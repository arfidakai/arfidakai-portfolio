'use client';

import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-32 px-8 md:px-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute left-0 top-0 w-1 h-32 bg-gradient-to-b from-[#00E5FF] to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[#00E5FF] font-bold tracking-widest uppercase text-xs mb-4 block">Background</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
              Bridging the gap between <span className="text-[#00E5FF]">code</span> and <span className="text-purple-400">creativity</span>.
            </h2>
            <div className="space-y-6 text-stone-400 text-lg leading-relaxed font-light">
              <p>
                My journey began with a simple question: How can we make the web feel more human? This curiosity led me down the path of development, where I found my passion in crafting vivid, accessible, and delightful digital interfaces.
              </p>
              <p>
                I thrive in the intersection of design systems and frontend logic. As a junior dev, I'm not just writing code; I'm building experiences that resonate with people on a colorful, emotional level.
              </p>
            </div>
            
            <motion.div
              className="flex gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            >
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-white mb-1">12+</div>
                <div className="text-xs uppercase tracking-widest text-stone-500 font-bold">Projects Built</div>
              </motion.div>
              <div className="w-px h-12 bg-white/5"></div>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-white mb-1">2</div>
                <div className="text-xs uppercase tracking-widest text-stone-500 font-bold">Years Coding</div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-[#00E5FF]/10 to-purple-600/10 p-1">
              <div className="w-full h-full rounded-[2.9rem] bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center p-12 overflow-hidden group">
                <div className="grid grid-cols-2 gap-4 w-full">
                  {[
                    { label: 'UI/UX', color: 'bg-indigo-500' },
                    { label: 'Frontend', color: 'bg-purple-500' },
                    { label: 'Animation', color: 'bg-pink-500' },
                    { label: 'Logic', color: 'bg-teal-500' }
                  ].map((val, i) => (
                    <motion.div
                      key={i}
                      className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-3"
                      whileHover={{
                        scale: 1.05,
                        y: -4,
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                      }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                       <div className={`w-8 h-1 ${val.color} rounded-full`}></div>
                       <span className="text-xs font-bold text-stone-300 tracking-widest uppercase">{val.label}</span>
                    </motion.div>
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
