import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, BarChart2, Puzzle } from 'lucide-react';

const projects = [
  {
    title: 'Student Drug Recovery Analytics',
    description: 'A data-driven decision-support system for student drug prevention, risk assessment, and recovery planning in educational institutions.',
    tags: ['Python', 'Power BI', 'Data Cleaning', 'Analytics'],
    highlights: [
      'Analyzed student drug exposure and risk levels for early intervention',
      'Built interactive dashboards in Power BI to visualize recovery needs',
      'Performed data cleaning and analysis using Python to identify risk indicators',
      'Bridge the gap between complex data and prevention strategies',
    ],
    icon: <BarChart2 className="text-accent-cyan" size={40} />,
    github: 'https://github.com/harirajg7/student-drug-recovery-support-analy',
    live: 'https://student-drug-recovery-support-analy.vercel.app/',
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Selected <span className="gradient-text">Works</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A showcase of my technical projects where data meets development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-cyan/10 via-accent-purple/10 to-accent-pink/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="glass-card overflow-hidden grid lg:grid-cols-12 gap-0 relative z-10 border-white/10 group-hover:border-accent-cyan/30 transition-colors duration-500">
                <div className="lg:col-span-5 bg-slate-900/80 flex items-center justify-center p-16 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5 opacity-50"></div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10"
                  >
                    <div className="p-8 bg-white/5 rounded-[2.5rem] backdrop-blur-xl border border-white/10 shadow-2xl">
                      {project.icon}
                    </div>
                  </motion.div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-accent-cyan/20 rounded-tl-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-accent-purple/20 rounded-br-3xl"></div>
                  </div>
                </div>

                <div className="lg:col-span-7 p-10 md:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-accent-cyan">Featured Case Study</span>
                    <div className="h-px flex-1 bg-slate-800"></div>
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight group-hover:text-accent-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {project.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                        <p className="text-sm text-slate-300 font-medium">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mb-12">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-white/5 text-accent-cyan rounded-xl text-xs font-bold border border-accent-cyan/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-8">
                    <motion.a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-white font-bold hover:text-accent-cyan transition-colors group/btn"
                    >
                      <Github size={22} className="group-hover/btn:scale-110 transition-transform" />
                      View Source
                    </motion.a>
                    <motion.a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-white font-bold hover:text-accent-cyan transition-colors group/btn"
                    >
                      <ExternalLink size={22} className="group-hover/btn:scale-110 transition-transform" />
                      Live Experience
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
