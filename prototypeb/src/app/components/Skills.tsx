'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Layout, Palette, Terminal, Server, Sparkles } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export const Skills = () => {
  const skills = [
    { name: 'Frontend Arch', items: ['React', 'Next.js', 'Tailwind', 'TS'], icon: <Layout className="w-6 h-6" />, color: 'from-blue-500 to-indigo-600' },
    { name: 'Visual Design', items: ['Figma', 'UI Systems', 'Motion', 'Aesthetics'], icon: <Palette className="w-6 h-6" />, color: 'from-purple-500 to-pink-600' },
    { name: 'Development', items: ['Git', 'Vite', 'pnpm', 'Performance'], icon: <Terminal className="w-6 h-6" />, color: 'from-orange-400 to-red-500' },
    { name: 'Systems', items: ['Node.js', 'PostgreSQL', 'APIs', 'Supabase'], icon: <Server className="w-6 h-6" />, color: 'from-teal-400 to-emerald-600' },
  ];

  return (
    <section id="skills" className="py-32 px-8 md:px-24 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] uppercase rounded-lg bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">
              <Sparkles className="w-3 h-3" /> Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Arsenal</h2>
            <p className="text-stone-500 text-lg font-light leading-relaxed">
              A blend of logic and aesthetics, using the best modern tools to build high-performance applications.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0, 229, 255, 0.15)'
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-black/40 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 relative group overflow-hidden"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white mb-8 shadow-lg shadow-indigo-500/20`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{skill.name}</h3>
              <ul className="space-y-4">
                {skill.items.map((item) => (
                  <li key={item} className="text-sm font-medium text-stone-400 flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${skill.color}`}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
