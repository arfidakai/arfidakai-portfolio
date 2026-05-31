'use client';

import React from 'react';
import { motion } from 'motion/react';

export const Footer = () => {
  return (
    <footer className="py-16 px-8 md:px-24 bg-[#050505] border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-2xl font-bold text-white">
            Maya<span className="text-[#00E5FF]">.</span>
          </div>
          <p className="text-stone-500 text-sm font-light text-center md:text-left">
            Crafting digital experiences with precision and passion.<br/>
            Based in the creative ether.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-10">
            <motion.a
              href="#"
              className="text-sm font-bold text-stone-400 uppercase tracking-widest"
              whileHover={{ color: '#ffffff', y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Resume
            </motion.a>
            <motion.a
              href="#"
              className="text-sm font-bold text-stone-400 uppercase tracking-widest"
              whileHover={{ color: '#ffffff', y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Process
            </motion.a>
            <motion.a
              href="#"
              className="text-sm font-bold text-stone-400 uppercase tracking-widest"
              whileHover={{ color: '#ffffff', y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Blog
            </motion.a>
          </div>
          <div className="text-stone-600 text-xs font-medium tracking-widest uppercase">
            © 2026 Designed & Developed by Maya
          </div>
        </div>
      </div>
    </footer>
  );
};
