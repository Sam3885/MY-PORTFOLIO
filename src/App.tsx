/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Award, 
  ChevronRight,
  Terminal,
  Cpu,
  Globe,
  Database
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  SKILLS, 
  PROJECTS, 
  TRAINING, 
  CERTIFICATES, 
  ACHIEVEMENTS, 
  EDUCATION 
} from './constants';

const SectionTitle = ({ children, icon: Icon }: { children: React.ReactNode, icon: any }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-3 mb-12"
  >
    <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-display font-bold tracking-tight">{children}</h2>
    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent ml-4" />
  </motion.div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'experience', 'education', 'resume'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Resume', id: 'resume' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-display font-bold tracking-tighter"
          >
            ST<span className="text-orange-500">.</span>
          </motion.span>
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className={`nav-link ${activeSection === link.id ? 'text-white after:w-full' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-orange-500 hover:text-white transition-colors"
          >
            Hire Me
          </motion.a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section id="about" className="mb-32">
          <div className="grid lg:grid-template-columns-[1.2fr_0.8fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold uppercase tracking-widest mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Available for opportunities
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-8">
                I'm <span className="text-gradient">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
                A passionate Full-Stack Developer specializing in building scalable web applications 
                and AI-integrated platforms. Currently pursuing B.Tech in CSE at LPU.
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex gap-4">
                  <motion.a whileHover={{ y: -3 }} href={PERSONAL_INFO.github} target="_blank" className="p-3 glass-card hover:bg-white/10 transition-colors">
                    <Github size={20} />
                  </motion.a>
                  <motion.a whileHover={{ y: -3 }} href={PERSONAL_INFO.linkedin} target="_blank" className="p-3 glass-card hover:bg-white/10 transition-colors">
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a whileHover={{ y: -3 }} href={`mailto:${PERSONAL_INFO.email}`} className="p-3 glass-card hover:bg-white/10 transition-colors">
                    <Mail size={20} />
                  </motion.a>
                </div>
                <div className="h-10 w-px bg-white/10 hidden sm:block" />
                <div className="flex items-center gap-2 text-white/40 text-sm font-mono">
                  <Phone size={14} />
                  {PERSONAL_INFO.mobile}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square glass-card overflow-hidden relative group">
                <img 
                  src={`https://picsum.photos/seed/tech/800/800`} 
                  alt="Profile Placeholder" 
                  className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <div className="text-4xl font-display font-bold">CSE</div>
                  <div className="text-white/40 font-mono">Undergraduate</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-orange-500/30" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-orange-500/30" />
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-40">
          <SectionTitle icon={Code2}>Technical Arsenal</SectionTitle>
          <div className="grid md:grid-template-columns-repeat(2,1fr) lg:grid-template-columns-repeat(4,1fr) gap-6">
            {[
              { title: 'Languages', items: SKILLS.languages, icon: Terminal },
              { title: 'Web Tech', items: SKILLS.web, icon: Globe },
              { title: 'Databases & Tools', items: SKILLS.databases, icon: Database },
              { title: 'Core Concepts', items: SKILLS.core, icon: Cpu },
            ].map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: idx * 0.15,
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
                className="glass-card p-8 hover:border-orange-500/30 transition-colors group"
              >
                <skillGroup.icon className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-500" size={32} />
                <h3 className="text-xl font-bold mb-4">{skillGroup.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <motion.span 
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (idx * 0.15) + (i * 0.05) + 0.3 }}
                      className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white/60"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-40">
          <SectionTitle icon={Briefcase}>Featured Work</SectionTitle>
          <div className="grid gap-12">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid lg:grid-template-columns-[1fr_1.2fr] gap-12 items-start"
              >
                <div className="order-2 lg:order-1">
                  <div className="text-orange-500 font-mono text-sm mb-2">{project.period}</div>
                  <h3 className="text-3xl font-display font-bold mb-6">{project.title}</h3>
                  <ul className="space-y-4 mb-8">
                    {project.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-white/60 leading-relaxed">
                        <ChevronRight className="text-orange-500 shrink-0 mt-1" size={18} />
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-md text-xs font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.a 
                    href={project.link}
                    target="_blank"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-sm font-bold text-white group w-fit"
                  >
                    View Project <ExternalLink size={16} className="group-hover:text-orange-500 transition-colors" />
                  </motion.a>
                </div>
                <motion.a 
                  href={project.link}
                  target="_blank"
                  className="order-1 lg:order-2 aspect-video glass-card overflow-hidden group relative transition-all duration-500 hover:ring-2 hover:ring-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]"
                >
                  <img 
                    src={`https://picsum.photos/seed/${project.title}/1200/800`} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-4 bg-white text-black rounded-full">
                      <ExternalLink size={24} />
                    </div>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience & Training */}
        <section id="experience" className="mb-40">
          <div className="grid lg:grid-template-columns-repeat(2,1fr) gap-20">
            <div>
              <SectionTitle icon={Award}>Training & Internships</SectionTitle>
              <div className="space-y-12">
                {TRAINING.map((item, idx) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l border-white/10"
                  >
                    <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-orange-500" />
                    <div className="text-white/40 font-mono text-xs mb-1">{item.period}</div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-sm text-white/60 leading-relaxed">• {desc}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <SectionTitle icon={Award}>Achievements</SectionTitle>
              <div className="space-y-6">
                {ACHIEVEMENTS.map((achievement, idx) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-6"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-orange-400">{achievement.title}</h3>
                      <span className="text-xs font-mono text-white/40">{achievement.date}</span>
                    </div>
                    <p className="text-sm text-white/60">{achievement.description}</p>
                  </motion.div>
                ))}
                <div className="mt-12">
                  <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                    Certifications <div className="h-px flex-1 bg-white/5" />
                  </h3>
                  <div className="grid gap-4">
                    {CERTIFICATES.map(cert => (
                      <a 
                        key={cert.title}
                        href={cert.link}
                        target="_blank"
                        className="flex items-center justify-between p-4 glass-card hover:bg-white/5 transition-colors group"
                      >
                        <div>
                          <div className="text-sm font-bold group-hover:text-orange-400 transition-colors">{cert.title}</div>
                          <div className="text-xs text-white/40">{cert.issuer} • {cert.date}</div>
                        </div>
                        <ExternalLink size={14} className="text-white/20 group-hover:text-white transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-40">
          <SectionTitle icon={GraduationCap}>Education</SectionTitle>
          <div className="grid md:grid-template-columns-repeat(3,1fr) gap-6">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.institution + edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8"
              >
                <div className="text-orange-500 font-mono text-xs mb-2">{edu.period}</div>
                <h3 className="text-lg font-bold mb-2 leading-tight">{edu.institution}</h3>
                <p className="text-sm text-white/60 mb-4">{edu.degree}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                  <span className="text-xs text-white/40">{edu.location}</span>
                  <span className="text-sm font-bold text-orange-400">{edu.score}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="mb-40">
          <SectionTitle icon={Briefcase}>Resume</SectionTitle>
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-rose-500" />
            <h3 className="text-3xl font-display font-bold mb-6">Ready to work together?</h3>
            <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
              Download my full resume to see a detailed breakdown of my experience, 
              technical skills, and academic background.
            </p>
            <motion.a
              href="/Saksham_Thakur_CV.pdf"
              download="Saksham_Thakur_CV.pdf"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(249,115,22,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-orange-500 text-white font-bold rounded-full text-lg transition-all"
            >
              Download Resume <ChevronRight size={22} />
            </motion.a>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-20 border-t border-white/5 text-center">
  <h2 className="text-4xl font-display font-bold mb-8">
    Let's build something <span className="text-gradient">extraordinary</span>.
  </h2>

  <div className="flex justify-center gap-8 mb-12">
    <a href={PERSONAL_INFO.github} target="_blank" className="text-white/40 hover:text-white transition-colors">
      <Github size={24} />
    </a>
    <a href={PERSONAL_INFO.linkedin} target="_blank" className="text-white/40 hover:text-white transition-colors">
      <Linkedin size={24} />
    </a>
    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white/40 hover:text-white transition-colors">
      <Mail size={24} />
    </a>
  </div>

  <p className="text-white/20 text-xs font-mono">
    © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React & Tailwind.
  </p>
</footer>
      </main>
    </div>
  );
}
