'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
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

export const Projects = () => {
  const projects = [
    {
      title: 'Neon Pulse Dashboard',
      description: 'A data visualization platform for high-frequency trading analytics with real-time feedback and vibrant UI.',
      image: 'https://images.unsplash.com/photo-1676825666641-d5a916a00f5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2ViJTIwZGVzaWduJTIwVUklMjBtb2NrdXAlMjBsYXB0b3B8ZW58MXx8fHwxNzcxMDgyMzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stack: ['React', 'D3.js', 'Tailwind'],
      color: 'from-blue-500 to-cyan-400',
      link: '#',
      github: '#'
    },
    {
      title: 'Velvet E-Commerce',
      description: 'A luxury fashion marketplace focused on smooth scroll interactions and high-fidelity photography.',
      image: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxt2Rlcm4lMjBjbGVhbiUyMHdlYiUyMGFwcGxpY2F0aW9uJTIwaW50ZXJmYWNlJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MTA4MjM1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stack: ['Next.js', 'Framer Motion', 'Stripe'],
      color: 'from-purple-500 to-pink-500',
      link: '#',
      github: '#'
    },
    {
      title: 'Prism Mobile App',
      description: 'A mindfulness and meditation app that uses color theory to guide user emotions through daily exercises.',
      image: 'https://images.unsplash.com/photo-1623824204241-f851d3bcfaf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1pbmltYWwlMjBtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBzY3JlZW58ZW58MXx8fHwxNzcxMDgyMzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      stack: ['React Native', 'Expo', 'Reanimated'],
      color: 'from-orange-400 to-amber-500',
      link: '#',
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-32 px-8 md:px-24 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Case Studies</h2>
          <p className="text-stone-500 text-lg font-light max-w-2xl mx-auto">
            A deep dive into how I approach design problems with technical solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-black/40 backdrop-blur-sm border border-white/10 mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60`}></div>
                
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
                   <motion.h3
                     className="text-2xl font-bold text-white"
                     whileHover={{ color: '#00E5FF' }}
                     transition={{ duration: 0.25 }}
                   >
                     {project.title}
                   </motion.h3>
                   <motion.div
                     className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white"
                     whileHover={{
                       backgroundColor: '#00E5FF',
                       borderColor: '#00E5FF',
                       scale: 1.1
                     }}
                     transition={{ duration: 0.25 }}
                   >
                      <motion.div
                        whileHover={{ rotate: 0 }}
                        initial={{ rotate: -45 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                   </motion.div>
                </div>
                <p className="text-stone-500 font-light leading-relaxed line-clamp-2 text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
