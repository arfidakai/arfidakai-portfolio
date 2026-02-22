'use client';

import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-16 px-8 md:px-24 bg-[#0A0C14] border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-2xl font-bold text-white">
            Arfidakai<span className="text-indigo-500">.</span>
          </div>
          <p className="text-stone-500 text-sm font-light text-center md:text-left">
            Crafting digital experiences with precision and passion.<br/>
            Based in the creative ether.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-10">
            <a href="#" className="text-sm font-bold text-stone-400 hover:text-white transition-colors uppercase tracking-widest">Resume</a>
            <a href="#" className="text-sm font-bold text-stone-400 hover:text-white transition-colors uppercase tracking-widest">Process</a>
            <a href="#" className="text-sm font-bold text-stone-400 hover:text-white transition-colors uppercase tracking-widest">Blog</a>
          </div>
          <div className="text-stone-600 text-xs font-medium tracking-widest uppercase">
            © 2026 Designed & Developed by Maya
          </div>
        </div>
      </div>
    </footer>
  );
};
