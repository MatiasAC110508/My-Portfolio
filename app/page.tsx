'use client';

import BentoWidget from '@/components/BentoWidget';
import { motion } from 'framer-motion';
import {
  ExternalLink, Code2, Database, Dumbbell,
  Music, Camera, MapPin, Layout, Moon, Sun, Terminal
} from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import {
  SiTypescript, SiJavascript, SiPython, SiNodedotjs, SiExpress,
  SiReact, SiNextdotjs, SiMysql, SiMongodb, SiHtml5,
  SiCss, SiGit, SiGithub, SiTailwindcss, SiPostgresql, SiWhatsapp,
} from 'react-icons/si';
import { VscGithubInverted } from 'react-icons/vsc';
import { IoMailOutline } from 'react-icons/io5';

const techStack = [
  { name: 'TypeScript',   icon: SiTypescript,  color: '#3178C6' },
  { name: 'JavaScript',   icon: SiJavascript,  color: '#EAB308' },
  { name: 'Python',       icon: SiPython,      color: '#3776AB' },
  { name: 'Node.js',      icon: SiNodedotjs,   color: '#22C55E' },
  { name: 'Express',      icon: SiExpress,     color: '#888' },
  { name: 'React',        icon: SiReact,       color: '#38BDF8' },
  { name: 'Next.js',      icon: SiNextdotjs,   color: '#888' },
  { name: 'PostgreSQL',   icon: SiPostgresql,  color: '#4169E1' },
  { name: 'MySQL',        icon: SiMysql,       color: '#4479A1' },
  { name: 'MongoDB',      icon: SiMongodb,     color: '#22C55E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'HTML5',        icon: SiHtml5,       color: '#F97316' },
  { name: 'CSS',          icon: SiCss,         color: '#3B82F6' },
  { name: 'Git',          icon: SiGit,         color: '#F97316' },
  { name: 'GitHub',       icon: SiGithub,      color: '#888' },
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [heroHovered, setHeroHovered] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <main className={`min-h-screen font-sans selection:bg-purple-400/30 pb-24 relative
      ${isDark ? 'text-neutral-100' : 'text-neutral-800'}`}>

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-[#07070f]" />
            <div className="absolute w-[110vw] h-[70vh] top-[-30vh] left-1/2 -translate-x-1/2 rounded-full"
              style={{ background: 'radial-gradient(ellipse, rgba(139,92,246,0.52) 0%, rgba(99,60,200,0.18) 45%, transparent 70%)', filter: 'blur(64px)' }} />
            <div className="absolute w-[50vw] h-[55vh] top-[-8vh] right-[-8vw] rounded-full"
              style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.42) 0%, transparent 65%)', filter: 'blur(72px)' }} />
            <div className="absolute w-[55vw] h-[55vh] bottom-[-12vh] left-[-8vw] rounded-full"
              style={{ background: 'radial-gradient(ellipse, rgba(109,40,217,0.38) 0%, transparent 65%)', filter: 'blur(80px)' }} />
            <div className="absolute w-[35vw] h-[35vh] top-[45%] left-[32%] rounded-full"
              style={{ background: 'radial-gradient(ellipse, rgba(192,38,211,0.14) 0%, transparent 65%)', filter: 'blur(90px)' }} />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-[#fafafa]" />
            <div className="absolute w-[100vw] h-[55vh] top-[-25vh] left-1/2 -translate-x-1/2 rounded-full"
              style={{ background: 'radial-gradient(ellipse, rgba(167,139,250,0.38) 0%, rgba(139,92,246,0.12) 50%, transparent 70%)', filter: 'blur(56px)' }} />
            <div className="absolute w-[45vw] h-[45vh] top-[-5vh] right-[-5vw] rounded-full"
              style={{ background: 'radial-gradient(ellipse, rgba(129,140,248,0.28) 0%, transparent 65%)', filter: 'blur(70px)' }} />
            <div className="absolute w-[50vw] h-[50vh] bottom-[-10vh] left-[-8vw] rounded-full"
              style={{ background: 'radial-gradient(ellipse, rgba(167,139,250,0.22) 0%, transparent 65%)', filter: 'blur(80px)' }} />
          </>
        )}
      </div>

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-5 px-4">
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="rounded-full px-3 py-2 flex items-center justify-between w-full max-w-4xl relative overflow-hidden"
          style={{
            background: isDark ? 'rgb(10,10,18)' : 'rgb(255,255,255)',
            border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(220,215,255,0.9)',
            boxShadow: isDark
              ? '0 4px 20px rgba(0,0,0,0.3)'
              : '0 4px 20px rgba(139,92,246,0.08)',
          }}
        >
          <h1 className="text-xl font-bold tracking-tighter pl-3">
            Matias<span className="text-purple-500">.dev</span>
          </h1>
          <div className="flex items-center gap-2">
            <a href="mailto:matiasaguirrecorrea@gmail.com"
              className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all
                ${isDark
                  ? 'text-neutral-300 hover:text-white hover:bg-white/8'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-black/5'}`}>
              <IoMailOutline className="w-4.5 h-4.5" />
              <span className="hidden sm:block">Contact Me</span>
            </a>
            <a href="https://github.com/MatiasAC110508" target="_blank" rel="noreferrer"
              className={`flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full shadow-md transition-all
                ${isDark
                  ? 'bg-white text-neutral-950 hover:bg-neutral-100'
                  : 'bg-neutral-900 text-white hover:bg-neutral-700'}`}>
              <VscGithubInverted className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </motion.nav>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto pt-36 px-4 md:px-10">

        {/* MARQUEE */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full overflow-hidden flex whitespace-nowrap py-4 mb-10 relative rounded-2xl backdrop-blur-xl"
          style={{
            background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.55)',
            border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(255,255,255,0.75)',
            boxShadow: isDark ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(139,92,246,0.07)',
          }}
        >
          <div className="absolute left-0 top-0 w-20 h-full z-10 rounded-l-2xl pointer-events-none"
            style={{ background: `linear-gradient(to right, ${isDark ? '#07070f' : '#fafafa'}, transparent)` }} />
          <div className="absolute right-0 top-0 w-20 h-full z-10 rounded-r-2xl pointer-events-none"
            style={{ background: `linear-gradient(to left, ${isDark ? '#07070f' : '#fafafa'}, transparent)` }} />
          <div className="animate-marquee flex gap-8 items-center w-max px-4">
            {[...techStack, ...techStack, ...techStack].map((tech, i) => (
              <div key={i} className={`flex items-center gap-2.5 px-4 py-2 rounded-full group transition-colors
                ${isDark
                  ? 'bg-white/5 border border-white/6 hover:border-purple-400/25'
                  : 'bg-white/60 border border-neutral-200/70 hover:border-purple-300/60'}`}>
                <tech.icon className="w-5 h-5 transition-transform group-hover:scale-110 duration-200" style={{ color: tech.color }} />
                <span className={`font-semibold tracking-tight text-sm ${isDark ? 'text-neutral-200' : 'text-neutral-700'}`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">

          {/* HERO (2x2)
              - onMouseEnter/Leave on BentoWidget track hover across the full card
              - The gradient overlay and text use pointer-events-none so they
                don't intercept mouse events and break the zoom detection */}
          <BentoWidget
            isDark={isDark}
            className="md:col-span-2 md:row-span-2 flex flex-col justify-end relative overflow-hidden !p-0"
            delay={0.1}
            onMouseEnter={() => setHeroHovered(true)}
            onMouseLeave={() => setHeroHovered(false)}
          >
            <motion.div
              className="absolute inset-0"
              animate={{ scale: heroHovered ? 1.08 : 1 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Image
                src="/images/MyPhoto.JPG"
                alt="Matias Aguirre"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[center_15%]"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            <div className="pointer-events-none relative z-20 p-7">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white">Hi, I'm Matias</h2>
              <p className="text-neutral-300 text-base leading-relaxed max-w-sm">
                Bilingual Full-Stack Developer focused on building intuitive and scalable Frontends.
              </p>
            </div>
          </BentoWidget>

          {/* PROJECTS (2x2) */}
          <BentoWidget isDark={isDark} className="md:col-span-2 md:row-span-2 flex flex-col" delay={0.15}>
            <div className="flex items-center gap-2 mb-5">
              <Code2 className={`w-5 h-5 ${isDark ? 'text-purple-400' : 'text-purple-500'}`} />
              <h3 className="font-bold text-xl tracking-tight">Featured Projects</h3>
            </div>
            <div className="flex flex-col gap-3 overflow-y-auto pr-1 custom-scrollbar">
              {[
                { href: 'https://github.com/Riwi-io-Medellin/lummia-integrative-project-thompson', img: '/assets/proyects/Lummia.png',      name: 'Lummia',      desc: 'AI & Gamified Educational Platform' },
                { href: 'https://github.com/MatiasAC110508/MatchFlow.git', img: '/assets/proyects/CRUDTask.png',    name: 'MatchFlow',    desc: 'Daily Task Workflow Web App' },
                { href: 'https://github.com/MatiasAC110508/Atenea-Game', img: '/assets/proyects/ATENEA_GAME.png', name: 'Atenea-Game', desc: 'Interactive Greek mythology web game' },
                { href: 'https://github.com/MatiasAC110508/EmbeddingAndTransformerTranslator', img: '/assets/proyects/EAndT.png', name: 'Embedding and Transformer Transaltor', desc: 'AI implementation to translate text to a machine understandable vector and transformer' },
                { href: 'https://github.com/MatiasAC110508/PackagementManager.git',                          img: '/assets/proyects/IronHaul.png', name: 'IronHaul', desc: 'Secure packege managment program },
              ].map(p => (
                <a key={p.name} href={p.href} target="_blank" rel="noreferrer"
                  className={`group flex items-center gap-3 p-3 rounded-xl border transition-all duration-200
                    ${isDark
                      ? 'bg-white/[0.04] border-white/[0.07] hover:bg-purple-500/10 hover:border-purple-400/30'
                      : 'bg-neutral-50/70 border-neutral-200/60 hover:bg-purple-50 hover:border-purple-300/50'}`}>
                  <div className="relative w-20 h-14 rounded-lg overflow-hidden shrink-0">
                    <Image src={p.img} alt={p.name} fill sizes="80px" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-semibold text-base leading-tight group-hover:text-purple-500 transition-colors
                      ${isDark ? 'text-neutral-100' : 'text-neutral-800'}`}>{p.name}</h4>
                    <p className={`text-sm mt-0.5 truncate ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>{p.desc}</p>
                  </div>
                  <ExternalLink className={`w-4 h-4 shrink-0 transition-colors
                    ${isDark ? 'text-neutral-600 group-hover:text-purple-400' : 'text-neutral-400 group-hover:text-purple-500'}`} />
                </a>
              ))}
            </div>
          </BentoWidget>

          {/* BACKEND (2x1) */}
          <BentoWidget isDark={isDark} className="md:col-span-2 md:row-span-1 flex flex-col justify-center" delay={0.2}>
            <div className="flex items-center gap-2 mb-2">
              <Database className={`w-5 h-5 ${isDark ? 'text-purple-400' : 'text-purple-500'}`} />
              <h3 className="font-bold text-lg tracking-tight">Backend Architecture</h3>
            </div>
            <p className={`text-sm leading-relaxed mb-3 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Scalable systems and robust databases. Complex business logic into efficient{' '}
              <strong className={isDark ? 'text-neutral-100' : 'text-neutral-800'}>relational and non-relational data models</strong>.
            </p>
            <div className="flex gap-2 flex-wrap">
              {['SQL / NoSQL', 'System Design'].map(tag => (
                <span key={tag} className={`text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-lg
                  ${isDark ? 'bg-white/8 text-neutral-400' : 'bg-neutral-100 text-neutral-500 border border-neutral-200'}`}>{tag}</span>
              ))}
            </div>
          </BentoWidget>

          {/* FRONTEND (2x1) */}
          <BentoWidget isDark={isDark} className="md:col-span-2 md:row-span-1 flex flex-col justify-center" delay={0.25}>
            <div className="flex items-center gap-2 mb-2">
              <Layout className={`w-5 h-5 ${isDark ? 'text-purple-400' : 'text-purple-500'}`} />
              <h3 className="font-bold text-lg tracking-tight">Frontend Engineering</h3>
            </div>
            <p className={`text-sm leading-relaxed mb-3 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
              Responsive, accessible, and highly interactive user interfaces. Pixel-perfect experiences with modern frameworks and libraries.
            </p>
            <div className="flex gap-2 flex-wrap">
              {['React / Next.js', 'Tailwind CSS', 'UI / UX'].map(tag => (
                <span key={tag} className={`text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-lg
                  ${isDark ? 'bg-white/8 text-neutral-400' : 'bg-neutral-100 text-neutral-500 border border-neutral-200'}`}>{tag}</span>
              ))}
            </div>
          </BentoWidget>

          {/* HOBBIES */}
          {[
            { icon: Music,    title: 'Musician',   desc: 'I play, produce, and listen to all genres.' },
            { icon: Camera,   title: 'Creator',    desc: 'Content creation and audiovisual photography.' },
            { icon: Dumbbell, title: 'Discipline', desc: 'Hypertrophy training. Consistency = code.' },
            { icon: Terminal, title: 'Developer',  desc: 'Always learning, building, and teaching.' },
          ].map(({ icon: Icon, title, desc }, i) => (
            <BentoWidget key={title} isDark={isDark} delay={0.3 + i * 0.05}
              className="md:col-span-1 md:row-span-1 flex flex-col items-center justify-center text-center group">
              <div className={`p-3.5 rounded-2xl mb-3 transition-colors
                ${isDark ? 'bg-white/6 group-hover:bg-purple-500/15' : 'bg-neutral-100 group-hover:bg-purple-100'}`}>
                <Icon className={`w-6 h-6 transition-colors
                  ${isDark ? 'text-neutral-400 group-hover:text-purple-400' : 'text-neutral-500 group-hover:text-purple-600'}`} />
              </div>
              <h3 className="font-semibold text-base mb-1">{title}</h3>
              <p className={`text-xs leading-relaxed px-2 ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>{desc}</p>
            </BentoWidget>
          ))}

          {/* EMAIL */}
          <BentoWidget isDark={isDark} delay={0.5} className="md:col-span-1 md:row-span-1 !p-0 group cursor-pointer">
            <a href="mailto:matiasaguirrecorrea@gmail.com?subject=Contact from Portfolio"
              className="w-full h-full flex flex-col items-center justify-center gap-1.5 p-4">
              <div className={`p-3.5 rounded-2xl mb-1 transition-colors
                ${isDark ? 'bg-purple-500/15 group-hover:bg-purple-500/25' : 'bg-purple-50 group-hover:bg-purple-100'}`}>
                <IoMailOutline className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
              </div>
              <span className="font-semibold text-base">Email Me</span>
              <span className={`text-[10px] truncate w-full text-center px-2 ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
                matiasaguirrecorrea@gmail.com
              </span>
            </a>
          </BentoWidget>

          {/* WHATSAPP */}
          <BentoWidget isDark={isDark} delay={0.52} className="md:col-span-1 md:row-span-1 !p-0 group cursor-pointer">
            <a href="https://wa.me/573026777660" target="_blank" rel="noreferrer"
              className="w-full h-full flex flex-col items-center justify-center gap-1.5 p-4">
              <div className={`p-3.5 rounded-2xl mb-1 transition-colors
                ${isDark ? 'bg-green-500/12 group-hover:bg-green-500/22' : 'bg-green-50 group-hover:bg-green-100'}`}>
                <SiWhatsapp className={`w-6 h-6 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
              </div>
              <span className="font-semibold text-base">WhatsApp</span>
              <span className={`text-[10px] ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>+57 302 6777660</span>
            </a>
          </BentoWidget>

          {/* LOCATION */}
          <BentoWidget isDark={isDark} delay={0.54} className="md:col-span-1 md:row-span-1 flex flex-col items-center justify-center text-center group">
            <div className={`p-3.5 rounded-2xl mb-3 transition-colors
              ${isDark ? 'bg-white/6 group-hover:bg-purple-500/15' : 'bg-neutral-100 group-hover:bg-purple-100'}`}>
              <MapPin className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-500'}`} />
            </div>
            <h3 className="font-semibold text-base mb-1">Location</h3>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
              Medellín, Colombia.<br />Available worldwide.
            </p>
          </BentoWidget>

          {/* THEME TOGGLE */}
          <BentoWidget isDark={isDark} delay={0.56} className="md:col-span-1 md:row-span-1 !p-0 group cursor-pointer">
            <button onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="w-full h-full flex flex-col items-center justify-center gap-1.5 p-4">
              <div className={`p-3.5 rounded-2xl mb-1 transition-colors
                ${isDark ? 'bg-white/6 group-hover:bg-purple-500/15' : 'bg-neutral-100 group-hover:bg-amber-100'}`}>
                {isDark
                  ? <Moon className="w-6 h-6 text-purple-400" />
                  : <Sun className="w-6 h-6 text-amber-500" />}
              </div>
              <h3 className="font-semibold text-base">Theme</h3>
              <span className={`text-[10px] font-semibold px-3 py-0.5 rounded-full
                ${isDark
                  ? 'text-purple-300 bg-purple-500/18'
                  : 'text-amber-700 bg-amber-100 border border-amber-200'}`}>
                {isDark ? 'Dark Mode' : 'Light Mode'}
              </span>
            </button>
          </BentoWidget>

        </div>
      </div>
    </main>
  );
}
