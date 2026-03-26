import React from 'react';
import { motion } from 'motion/react';
import { Code, Database, Globe, Palette, Cpu, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: <Code className="text-accent-cyan" />,
    skills: ['Python', 'Java', 'R', 'SQL'],
  },
  {
    title: 'Tools',
    icon: <Database className="text-accent-purple" />,
    skills: ['Ms Office', 'Power BI', 'VS Code', 'Pycharm'],
  },
  {
    title: 'Web Technologies',
    icon: <Globe className="text-accent-cyan" />,
    skills: ['HTML', 'CSS', 'JavaScript', 'GitHub'],
  },
  {
    title: 'Design Tools',
    icon: <Palette className="text-accent-purple" />,
    skills: ['Figma', 'Canva'],
  },
  {
    title: 'AI Tools',
    icon: <Cpu className="text-accent-cyan" />,
    skills: ['AI-assisted development', 'Prompt Engineering'],
  },
  {
    title: 'Core Concepts',
    icon: <Brain className="text-accent-purple" />,
    skills: ['Data Analysis', 'Data Visualization', 'Problem Solving', 'Logical Thinking'],
  },
  {
    title: 'Soft Skills',
    icon: <Brain className="text-accent-cyan" />,
    skills: ['Time Management', 'Creative Thinking', 'Coordination', 'Adaptability'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full glow-bg opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Technical <span className="gradient-text">Arsenal</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A comprehensive suite of tools and technologies I use to bring data to life and build modern digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent-cyan/5 rounded-full blur-3xl group-hover:bg-accent-cyan/20 transition-colors duration-500"></div>
              
              <div className="flex items-center gap-5 mb-8">
                <div className="p-4 bg-white/5 rounded-2xl text-accent-cyan group-hover:scale-110 transition-transform duration-500">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1, color: '#fff' }}
                    className="px-4 py-2 bg-white/5 text-slate-400 rounded-xl text-sm font-medium border border-white/5 hover:border-accent-cyan/30 hover:bg-accent-cyan/5 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
