'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-8 md:px-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase rounded-lg bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">
              Get in touch
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Ready to <span className="text-[#00E5FF] italic">ignite</span> your next idea?
            </h2>
            <p className="text-stone-400 text-lg font-light max-w-md mb-12">
              Whether you have a specific project in mind or just want to explore possibilities, my inbox is always open for vibrant conversations.
            </p>
            
            <div className="flex flex-col gap-6">
              <a href="mailto:hello@maya.dev" className="group flex items-center gap-4 text-2xl font-bold text-white hover:text-[#00E5FF] transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#00E5FF]/20 group-hover:border-[#00E5FF]/50 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <span>hello@maya.dev</span>
              </a>
            </div>

            <div className="flex gap-5 mt-16">
              {[
                { icon: <Linkedin className="w-5 h-5" />, href: '#' },
                { icon: <Github className="w-5 h-5" />, href: '#' },
                { icon: <Twitter className="w-5 h-5" />, href: '#' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-stone-400"
                  whileHover={{
                    color: '#ffffff',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    scale: 1.1,
                    y: -2
                  }}
                  transition={{ duration: 0.25 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="p-[1px] rounded-[2.5rem] bg-gradient-to-br from-[#00E5FF]/30 via-purple-500/20 to-transparent shadow-2xl"
          >
            <div className="bg-black/40 backdrop-blur-sm p-10 md:p-14 rounded-[2.45rem] shadow-inner">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 ml-1">Name</label>
                    <motion.input
                      type="text"
                      className="w-full bg-white/5 border border-white/5 rounded-xl px-6 py-4 text-white placeholder:text-stone-600 focus:ring-2 focus:ring-[#00E5FF]/50 focus:bg-white/10 transition-all outline-none"
                      placeholder="Jane Doe"
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 ml-1">Email</label>
                    <motion.input
                      type="email"
                      className="w-full bg-white/5 border border-white/5 rounded-xl px-6 py-4 text-white placeholder:text-stone-600 focus:ring-2 focus:ring-[#00E5FF]/50 focus:bg-white/10 transition-all outline-none"
                      placeholder="jane@example.com"
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500 ml-1">Message</label>
                  <motion.textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-6 py-4 text-white placeholder:text-stone-600 focus:ring-2 focus:ring-[#00E5FF]/50 focus:bg-white/10 transition-all outline-none resize-none"
                    placeholder="Tell me about your vision..."
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                <motion.button
                  className="w-full bg-white text-black py-5 rounded-2xl font-bold flex items-center justify-center gap-3 group overflow-hidden relative"
                  whileHover={{
                    boxShadow: '0 10px 30px -10px rgba(0, 229, 255, 0.5)',
                    backgroundColor: '#00E5FF',
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="relative z-10 flex items-center gap-2">Send Message <Send className="w-4 h-4" /></span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
