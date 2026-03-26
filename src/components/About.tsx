import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  const focusAreas = [
    { title: "Data Analytics", desc: "Extracting meaning from complex datasets" },
    { title: "Full Stack Dev", desc: "Building robust end-to-end applications" },
    { title: "Visualization", desc: "Creating impactful visual narratives" }
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Crafting <span className="gradient-text">Digital</span> <br />
              Experiences with <span className="text-accent-cyan">Data</span>
            </h2>
            <div className="space-y-6 text-xl text-slate-400 leading-relaxed">
              <p>
                I am a dedicated Data Analytics student and Full Stack Developer, 
                passionate about bridging the gap between complex data and actionable business strategies.
              </p>
              <p>
                With a strong foundation in Python, SQL, and modern web technologies, 
                I focus on building applications that are not just functional, but data-driven and user-centric.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {focusAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-cyan/30 transition-colors"
                >
                  <h4 className="text-accent-cyan font-bold text-sm mb-1 uppercase tracking-wider">{area.title}</h4>
                  <p className="text-xs text-slate-500">{area.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-accent-cyan/20 via-accent-purple/20 to-accent-pink/20 p-px">
              <div className="w-full h-full rounded-[3rem] bg-slate-950 flex items-center justify-center p-12 relative overflow-hidden group">
                {/* Abstract Data Visualization Graphic */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-accent-cyan/20"></div>
                  <div className="grid grid-cols-8 gap-4 p-8">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          height: [20, Math.random() * 60 + 20, 20],
                          opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{ 
                          duration: Math.random() * 3 + 2, 
                          repeat: Infinity,
                          delay: Math.random() * 2
                        }}
                        className="w-full bg-accent-cyan/30 rounded-full"
                      />
                    ))}
                  </div>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="text-7xl font-black text-white mb-2">01</div>
                  <div className="text-sm font-bold uppercase tracking-[0.4em] text-accent-cyan">Mission</div>
                  <p className="mt-6 text-slate-400 max-w-xs mx-auto italic">
                    "To transform raw data into a narrative that drives innovation and growth."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-8 -right-8 p-6 glass-card rounded-3xl border-accent-cyan/20"
            >
              <div className="text-2xl font-black text-accent-cyan">100%</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500">Dedication</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
