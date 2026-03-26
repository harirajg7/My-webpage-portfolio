import React from 'react';
import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Data Analytics Intern',
    company: 'Cognifyz Technologies',
    period: 'Apr 6, 2025 – May 6, 2025',
    tasks: [
      'Gained hands-on experience in data visualization, data cleaning, and business reporting',
      'Worked on real-time datasets to create dashboards and reports for actionable insights',
      'Utilized Power BI and Python for analysis and reporting',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Professional <span className="gradient-text">Journey</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            My career path and the milestones I've achieved along the way.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent-cyan/50 to-transparent transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Side */}
                <div className="w-full md:w-1/2 px-0 md:px-12">
                  <div className={`glass-card p-8 md:p-10 relative group hover:border-accent-cyan/30 transition-all duration-500 ${index % 2 === 0 ? 'text-left md:text-right' : 'text-left'}`}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <span className="inline-block px-4 py-1.5 bg-accent-cyan/10 text-accent-cyan rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-accent-cyan/20">
                        {exp.period}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-2 group-hover:text-accent-cyan transition-colors">{exp.role}</h3>
                      <p className="text-lg font-bold text-slate-400 mb-6">{exp.company}</p>
                      
                      <ul className={`space-y-4 ${index % 2 === 0 ? 'md:items-end' : 'items-start'} flex flex-col`}>
                        {exp.tasks.map((task, i) => (
                          <li key={i} className={`flex items-start gap-3 text-slate-400 text-sm leading-relaxed ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Center Point */}
                <div className="relative z-20 flex items-center justify-center w-12 h-12">
                  <div className="absolute w-12 h-12 bg-accent-cyan/20 rounded-full blur-lg animate-pulse"></div>
                  <div className="w-4 h-4 bg-accent-cyan rounded-full border-4 border-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
                </div>

                {/* Empty Side for Spacing */}
                <div className="w-full md:w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
