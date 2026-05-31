'use client';

import React from 'react';
import { motion } from 'motion/react';

export const Navbar = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18
      }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-4xl w-[calc(100%-2rem)]"
    >
      <div className="flex items-center justify-between px-6 py-3 bg-black/40 backdrop-blur-2xl rounded-full border border-white/10 shadow-xl">
        <div className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#00E5FF] to-purple-500 flex items-center justify-center text-xs">M</div>
          <span className="hidden sm:inline">Maya<span className="text-[#00E5FF]">.</span></span>
        </div>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-stone-300 relative group"
              whileHover={{ color: '#00E5FF' }}
              transition={{ duration: 0.2 }}
            >
              {item.name}
              <motion.span
                className="absolute left-0 bottom-0 h-[1px] bg-[#00E5FF]"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </motion.a>
          ))}
        </div>
        <motion.button
          className="hidden md:block px-5 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white"
          whileHover={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            scale: 1.02
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          Hire Me
        </motion.button>
        <div className="md:hidden">
          <div className="w-5 h-0.5 bg-white mb-1"></div>
          <div className="w-5 h-0.5 bg-white"></div>
        </div>
      </div>
    </motion.nav>
  );
};
