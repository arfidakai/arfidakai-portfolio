'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';

export const Projects = () => {
  const { projects: projectsData } = portfolioData;
  const projects = projectsData.items;

  return (
    <section id="projects" className="py-32 px-8 md:px-24 bg-[#0F111A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Case Studies</h2>
          <p className="text-stone-500 text-lg font-light max-w-2xl mx-auto">
            A deep dive into how I approach design problems with technical solutions.
          </p>
        </div>

        <div className="space-y-10">
          {/* Row 1: Portrait cards (2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.slice(0, 2).map((project, idx) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="group cursor-pointer"
                >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-[#161924] border border-white/5 mb-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#0F111A] via-transparent to-transparent opacity-40`}></div>
                  
                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold text-white border border-white/10 uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 px-2">
                  <div className="flex justify-between items-center">
                     <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                     <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all">
                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                     </div>
                  </div>
                  <p className="text-stone-500 font-light leading-relaxed line-clamp-2 text-sm">
                    {project.description}
                  </p>
                </div>
              </motion.div>
              </a>
            ))}
          </div>

          {/* Row 2: Landscape cards (2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.slice(2, 4).map((project, idx) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: (idx + 2) * 0.1 }}
                  className="group cursor-pointer"
                >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-[#161924] border border-white/5 mb-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#0F111A] via-transparent to-transparent opacity-40`}></div>
                  
                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold text-white border border-white/10 uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 px-2">
                  <div className="flex justify-between items-center">
                     <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                     <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all">
                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" />
                     </div>
                  </div>
                  <p className="text-stone-500 font-light leading-relaxed line-clamp-2 text-sm">
                    {project.description}
                  </p>
                </div>
              </motion.div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
