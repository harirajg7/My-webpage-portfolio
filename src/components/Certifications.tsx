import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  { name: 'AI, Data Science & Power BI', issuer: 'Christ University, Bangalore' },
  { name: 'Power BI', issuer: 'One Data Software Solutions' },
  { name: 'UI/UX Design', issuer: 'Sprouts Organization, Coimbatore' },
  { name: 'Database and SQL', issuer: 'Infosys Springboard' },
  { name: 'Aptitude & Communication Skills', issuer: 'iGenuine Learning, Coimbatore' },
  { name: 'Skills development program', issuer: 'Infosys, Sankara College' },
];

const achievements = [
  'Team member in organizing a Datathon during an inter-college event',
  'Student Coordinator for Agaram Students initiative (2 years)',
  'Developed a Vision Puzzle Solver project for college showcase',
];

export default function Certifications() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 relative z-10">
        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Professional <span className="gradient-text">Certifications</span></h2>
            <p className="text-slate-500 text-lg">Validated expertise across data, design, and development.</p>
          </motion.div>

          <div className="grid sm:grid-cols-1 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple/20 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="glass-card p-5 flex items-center gap-6 relative z-10 border-white/5 group-hover:border-accent-purple/30 transition-all duration-300">
                  <div className="p-3 bg-accent-purple/10 rounded-xl border border-accent-purple/20 group-hover:scale-110 transition-transform duration-500">
                    <Award size={28} className="text-accent-purple" />
                  </div>
                  <div>
                    <h3 className="font-black text-white text-lg group-hover:text-accent-purple transition-colors">{cert.name}</h3>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{cert.issuer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Key <span className="gradient-text">Achievements</span></h2>
            <p className="text-slate-500 text-lg">Milestones and contributions beyond the classroom.</p>
          </motion.div>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan/20 to-transparent rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="glass-card p-8 flex items-start gap-6 relative z-10 border-white/5 group-hover:border-accent-cyan/30 transition-all duration-300">
                  <div className="mt-1 p-3 bg-accent-cyan/10 rounded-full border border-accent-cyan/20 group-hover:rotate-12 transition-transform duration-500">
                    <CheckCircle size={24} className="text-accent-cyan" />
                  </div>
                  <p className="text-xl font-bold text-slate-200 leading-relaxed group-hover:text-white transition-colors">
                    {achievement}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Decorative Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-[2.5rem] bg-gradient-to-br from-accent-cyan/10 via-accent-purple/10 to-accent-pink/10 border border-white/10 flex items-center justify-around text-center"
          >
            <div>
              <div className="text-3xl font-black text-white">2+</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Years Leadership</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <div className="text-3xl font-black text-white">10+</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Certifications</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <div className="text-3xl font-black text-white">5+</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Major Projects</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
