import React from 'react';
import { motion } from 'motion/react';
import { Download, Send, Github, Linkedin, BarChart2, Code } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 glow-bg pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 glow-bg pointer-events-none" style={{ background: 'radial-gradient(circle at center, var(--color-accent-purple) 0%, transparent 70%)' }}></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-4 tracking-tight leading-none">
            Hariraj <span className="gradient-text">G</span>
          </h1>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8">
            Fresher
          </h3>
          <p className="text-xl text-slate-400 max-w-xl mb-12 leading-relaxed">
            Turning data into actionable insights through analytics and visualization. 
            Passionate about building scalable web applications and data-driven solutions.
          </p>

          <div className="flex flex-wrap gap-6 mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300 font-bold"
            >
              <Download size={20} />
              Download CV
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="flex items-center gap-2 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink text-white px-8 py-4 rounded-2xl hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 font-bold cursor-pointer"
              >
                <Send size={20} />
                Let's Talk
              </Link>
            </motion.div>
          </div>

          <div className="flex gap-6 items-center">
            <span className="text-sm text-slate-500 font-medium uppercase tracking-widest">Connect</span>
            <div className="h-px w-12 bg-slate-800"></div>
            <a href="https://github.com/harirajg7" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent-cyan transition-all hover:-translate-y-1">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/harirajg7" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent-cyan transition-all hover:-translate-y-1">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink rounded-[2.5rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink rounded-[2.5rem] opacity-20 group-hover:opacity-100 blur transition duration-500"></div>
            
            <div className="relative w-full h-full bg-slate-900 rounded-[2.5rem] p-2 overflow-hidden">
              <img
                src="/my-photo.png"
                alt="Hariraj G"
                className="w-full h-full object-cover rounded-[2rem] grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/hariraj/600/600';
                }}
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-card p-4 flex items-center gap-3 shadow-2xl"
            >
              <div className="p-2 bg-accent-cyan/10 rounded-lg text-accent-cyan">
                <BarChart2 size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase">Specialization</p>
                <p className="text-xs text-white font-bold">Data Analytics</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 glass-card p-4 flex items-center gap-3 shadow-2xl"
            >
              <div className="p-2 bg-accent-purple/10 rounded-lg text-accent-purple">
                <Code size={20} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase">Development</p>
                <p className="text-xs text-white font-bold">Full Stack</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
