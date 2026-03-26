import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    // Note: You need to replace these with your actual EmailJS credentials
    // serviceID, templateID, publicKey
    emailjs.sendForm('service_id', 'template_id', formRef.current!, 'public_key')
      .then(() => {
        setLoading(false);
        setSuccess(true);
        formRef.current?.reset();
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setError(true);
        setTimeout(() => setError(false), 5000);
      });
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Get In <span className="gradient-text">Touch</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <h3 className="text-3xl font-black text-white mb-6">Contact Information</h3>
              <p className="text-xl text-slate-400 leading-relaxed max-w-md">
                I'm currently looking for new opportunities as a Data Analyst or Full Stack Developer. 
                Let's build something amazing together!
              </p>
            </div>

            <div className="space-y-8">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group"
              >
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-accent-cyan group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan/30 transition-all duration-300">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Email Me</p>
                  <a href="mailto:hr42327@gmail.com" className="text-xl font-bold text-white hover:text-accent-cyan transition-colors">
                    hr42327@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group"
              >
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-accent-purple group-hover:bg-accent-purple/10 group-hover:border-accent-purple/30 transition-all duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Call Me</p>
                  <a href="tel:9514335515" className="text-xl font-bold text-white hover:text-accent-cyan transition-colors">
                    +91 95143 35515
                  </a>
                </div>
              </motion.div>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 mb-6">Social Connection</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin size={24} />, url: "https://www.linkedin.com/in/harirajg7", color: "hover:text-accent-cyan" },
                  { icon: <Github size={24} />, url: "https://github.com/harirajg7", color: "hover:text-white" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`p-4 bg-white/5 rounded-2xl border border-white/10 text-slate-400 ${social.color} hover:bg-white/10 transition-all duration-300`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-accent-cyan/10 via-accent-purple/10 to-accent-pink/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="glass-card p-10 md:p-16 relative z-10 border-white/10 group-hover:border-white/20 transition-colors">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Your Name</label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-cyan focus:ring-4 focus:ring-accent-cyan/10 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Your Email</label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-cyan focus:ring-4 focus:ring-accent-cyan/10 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-cyan focus:ring-4 focus:ring-accent-cyan/10 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink text-white font-black py-5 rounded-2xl hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-500 disabled:opacity-50 uppercase tracking-[0.2em] text-sm"
                >
                  {loading ? 'Processing...' : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {success && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }
                    }}
                    className="p-4 bg-accent-cyan/10 border border-accent-cyan/20 rounded-xl text-accent-cyan text-center font-bold shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, repeat: 1 }}
                      className="inline-block mr-2"
                    >
                      ✨
                    </motion.span>
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {error && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }
                    }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-center font-bold shadow-[0_0_20px_rgba(239,68,68,0.2)]"
                  >
                    <motion.span
                      animate={{ x: [-2, 2, -2, 2, 0] }}
                      transition={{ duration: 0.4 }}
                      className="inline-block mr-2"
                    >
                      ⚠️
                    </motion.span>
                    Something went wrong. Please try again later.
                  </motion.div>
                )}
              </form>
            </div>

            {/* Anime Character Decorative Element */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50 }}
              whileInView={{ opacity: 0.4, x: 0, y: 0 }}
              viewport={{ once: true }}
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 2, 0, -2, 0]
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 1 }
              }}
              className="absolute -right-24 -bottom-12 w-[300px] h-[450px] pointer-events-none hidden xl:block z-0"
            >
              <img 
                src="https://www.pngmart.com/files/13/One-Piece-Luffy-PNG-Transparent-Image.png" 
                alt="Anime Character" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
