import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: "B.Sc Computer Science with Data Analytics",
      school: "Sankara College of Science and Commerce",
      period: "2023 – 2026",
      score: "81%",
      color: "accent-cyan",
      icon: <GraduationCap size={40} className="text-accent-cyan" />
    },
    {
      degree: "Higher Secondary (HSC)",
      school: "D.B.T.R National Higher Secondary School",
      period: "Mayiladuthurai",
      score: "76%",
      color: "accent-purple",
      icon: <GraduationCap size={40} className="text-accent-purple" />
    }
  ];

  return (
    <section id="education" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Academic <span className="gradient-text">Foundation</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            My educational background and the knowledge base I've built.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative"
            >
              <div className={`absolute -inset-2 bg-gradient-to-r ${edu.color === 'accent-cyan' ? 'from-accent-cyan/20' : 'from-accent-purple/20'} to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="glass-card p-10 h-full flex flex-col relative z-10 border-white/10 group-hover:border-white/20 transition-colors">
                <div className="flex items-start justify-between mb-8">
                  <div className="p-5 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    {edu.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-500 block mb-1">Score</span>
                    <span className={`text-2xl font-black ${edu.color === 'accent-cyan' ? 'text-accent-cyan' : 'text-accent-purple'}`}>{edu.score}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-black text-white mb-3 leading-tight group-hover:text-accent-cyan transition-colors">
                    {edu.degree}
                  </h3>
                  <p className={`text-lg font-bold ${edu.color === 'accent-cyan' ? 'text-accent-cyan/80' : 'text-accent-purple/80'} mb-6`}>
                    {edu.school}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{edu.period}</span>
                  <div className={`w-2 h-2 rounded-full ${edu.color === 'accent-cyan' ? 'bg-accent-cyan shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'bg-accent-purple shadow-[0_0_8px_rgba(168,85,247,0.8)]'}`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
