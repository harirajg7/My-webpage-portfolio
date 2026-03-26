import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-2xl font-black text-white tracking-tighter">
            HARIRAJ<span className="text-accent-cyan">.G</span>
          </span>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">
            Data Analyst & Full Stack Developer
          </p>
        </div>

        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} Hariraj G. Crafted with <span className="text-accent-pink">♥</span> and precision.
        </p>

        <div className="flex gap-8">
          <a href="#" className="text-slate-500 hover:text-accent-cyan text-xs font-black uppercase tracking-widest transition-colors">Privacy</a>
          <a href="#" className="text-slate-500 hover:text-accent-cyan text-xs font-black uppercase tracking-widest transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
