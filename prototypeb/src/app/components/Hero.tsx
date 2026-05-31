'use client';

import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Terminal, Code2, Cpu } from 'lucide-react';

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 150,
    damping: 20
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 150,
    damping: 20
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-8 pt-32 overflow-hidden md:flex-row md:px-24 bg-[#050505]">
      {/* Cinematic Ambient Glow - Animated */}
      <motion.div
        className="absolute top-[20%] right-[10%] w-[800px] h-[800px] bg-[#00E5FF]/5 rounded-full blur-[150px] -z-10"
        animate={{
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[15%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[150px] -z-10"
        animate={{
          opacity: [0.05, 0.2, 0.05],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />

      <div className="flex-1 space-y-8 text-center md:text-left z-10">
        {/* Staggered Content Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold leading-[1.1] md:text-7xl text-white max-w-2xl">
            Building strategic interfaces & whispering to AIs.
          </h1>
        </motion.div>

        {/* Terminal Box */}
        <motion.div
          className="mt-8 inline-block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-black/60 backdrop-blur-sm border border-[#00E5FF]/20 rounded-lg px-6 py-4 font-mono text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#00E5FF]" />
              <span className="text-[#00E5FF]">&gt; Status: Debugging human logic...</span>
              <motion.span
                className="inline-block w-2 h-4 bg-[#00E5FF] ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-5 md:flex-row"
        >
          <motion.a
            href="#projects"
            className="flex items-center px-10 py-4 space-x-2 text-black font-semibold rounded-xl bg-white group relative overflow-hidden"
            whileHover={{
              scale: 1.02,
              boxShadow: '0 0 30px rgba(0, 229, 255, 0.5)',
              backgroundColor: '#00E5FF'
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <span>Initialize Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#contact"
            className="px-10 py-4 rounded-xl border border-white/10 text-white font-medium"
            whileHover={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderColor: 'rgba(0, 229, 255, 0.3)'
            }}
            transition={{ duration: 0.25 }}
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>

      {/* Futuristic Code Editor / AI Dashboard - Floating & 3D Tilt */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        className="relative mt-20 md:mt-0 md:ml-12 w-full max-w-md"
      >
        <motion.div
          animate={{
            y: [-8, 8, -8]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d'
          }}
          whileHover={{ scale: 1.01 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
        <div className="relative z-10 bg-black/40 backdrop-blur-xl rounded-2xl border border-[#00E5FF]/20 shadow-2xl overflow-hidden">
          {/* Window Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-black/60 border-b border-white/10">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs text-stone-400 font-mono">neural_network.py</span>
            </div>
            <Code2 className="w-4 h-4 text-[#00E5FF]" />
          </div>

          {/* Code Editor Content */}
          <div className="p-6 font-mono text-sm space-y-2">
            <div className="flex gap-4">
              <span className="text-stone-600 select-none">1</span>
              <span className="text-purple-400">import</span>
              <span className="text-stone-300">torch</span>
            </div>
            <div className="flex gap-4">
              <span className="text-stone-600 select-none">2</span>
              <span className="text-purple-400">from</span>
              <span className="text-stone-300">transformers</span>
              <span className="text-purple-400">import</span>
              <span className="text-[#00E5FF]">AutoModel</span>
            </div>
            <div className="flex gap-4">
              <span className="text-stone-600 select-none">3</span>
              <span className="text-stone-600"># Initialize AI model</span>
            </div>
            <div className="flex gap-4">
              <span className="text-stone-600 select-none">4</span>
              <span className="text-purple-400">def</span>
              <span className="text-yellow-400">process_intelligence</span>
              <span className="text-stone-300">(</span>
              <span className="text-orange-400">data</span>
              <span className="text-stone-300">):</span>
            </div>
            <div className="flex gap-4 pl-8">
              <span className="text-stone-600 select-none">5</span>
              <span className="text-stone-300">model</span>
              <span className="text-purple-400">=</span>
              <span className="text-[#00E5FF]">AutoModel</span>
              <span className="text-stone-300">.</span>
              <span className="text-yellow-400">from_pretrained</span>
              <span className="text-stone-300">(</span>
            </div>
            <div className="flex gap-4 pl-12">
              <span className="text-stone-600 select-none">6</span>
              <span className="text-green-400">"claude-sonnet-4"</span>
            </div>
            <div className="flex gap-4 pl-8">
              <span className="text-stone-600 select-none">7</span>
              <span className="text-stone-300">)</span>
            </div>
            <div className="flex gap-4 pl-8">
              <span className="text-stone-600 select-none">8</span>
              <span className="text-purple-400">return</span>
              <span className="text-stone-300">model</span>
              <span className="text-stone-300">.</span>
              <span className="text-yellow-400">generate</span>
              <span className="text-stone-300">(</span>
              <span className="text-orange-400">data</span>
              <span className="text-stone-300">)</span>
            </div>
          </div>

          {/* Status Bar */}
          <div className="flex items-center justify-between px-4 py-2 bg-black/60 border-t border-white/10 text-xs">
            <div className="flex items-center gap-3">
              <Cpu className="w-3 h-3 text-[#00E5FF]" />
              <span className="text-[#00E5FF]">AI Active</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse"></div>
              <span className="text-stone-500">Connected</span>
            </div>
          </div>
        </div>

        {/* Ambient Glows - Animated */}
        <motion.div
          className="absolute -top-8 -right-8 w-32 h-32 bg-[#00E5FF]/20 rounded-full blur-3xl"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            opacity: [0.2, 0.35, 0.2],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5
          }}
        />
        </motion.div>
      </motion.div>
    </section>
  );
};
