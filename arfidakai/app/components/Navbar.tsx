'use client';

import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '@/data/portfolio';

export const Navbar = () => {
  const { personal, navigation } = portfolioData;

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-[#0F111A]/60 backdrop-blur-xl md:px-24 border-b border-white/5"
    >
      <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-400 flex items-center justify-center text-xs">
          {personal.name.charAt(0)}
        </div>
        <span>{personal.name}<span className="text-indigo-400">.</span></span>
      </div>
      <div className="hidden md:flex space-x-12">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-medium transition-colors hover:text-indigo-300 text-stone-300"
          >
            {item.name}
          </a>
        ))}
      </div>
      <button className="hidden md:block px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white hover:bg-white/10 transition-all">
        Hire Me
      </button>
      <div className="md:hidden">
        <div className="w-6 h-0.5 bg-white mb-1.5"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>
    </motion.nav>
  );
};
