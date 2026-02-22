'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Layout, Palette, Terminal, Server, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';

const iconMap = {
  Layout: <Layout className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Terminal: <Terminal className="w-6 h-6" />,
  Server: <Server className="w-6 h-6" />,
};

export const Skills = () => {
  const { skills: skillsData } = portfolioData;
  const skills = skillsData.categories.map(cat => ({
    ...cat,
    icon: iconMap[cat.icon as keyof typeof iconMap]
  }));

  return (
    <section id="skills" className="py-32 px-8 md:px-24 bg-[#0A0C14]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] uppercase rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Sparkles className="w-3 h-3" /> Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Arsenal</h2>
            <p className="text-stone-500 text-lg font-light leading-relaxed">
              A blend of logic and aesthetics, using the best modern tools to build high-performance applications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-[#161924] p-10 rounded-[2.5rem] border border-white/5 relative group overflow-hidden"
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
        </div>
      </div>
    </section>
  );
};
