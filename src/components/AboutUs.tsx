import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, Award, Cpu, Code2, Globe, ArrowUpRight, 
  Terminal, Sparkles, Calendar, BookOpen, ExternalLink, CheckCircle2 
} from 'lucide-react';
import { AccentColor } from '../types';

interface AboutUsProps {
  accentColor?: AccentColor;
  onNavigateContact?: () => void;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  image: string;
  experienceYears: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'm1',
    name: 'Sounak Sarkar',
    role: 'Founder & Systems Architect',
    bio: 'Pioneering high-speed digital infrastructure, full-stack React engines, and custom WebGL mathematical vector spaces.',
    skills: ['System Architecture', 'React 19', 'TypeScript', 'WebGL'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    experienceYears: '2+ YRS',
  },
  {
    id: 'm2',
    name: 'Vishal Tilak',
    role: 'Co-Founder & Social Media Manager',
    bio: 'Directing multi-platform content campaigns, audience engagement strategies, and the REACH social growth framework.',
    skills: ['Social Strategy', 'Content Direction', 'REACH Protocol', 'Growth Analytics'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    experienceYears: '2+ YRS',
  },
  {
    id: 'm3',
    name: 'Soham Bhattacharyya',
    role: 'Co-Founder & UI/UX Director',
    bio: 'Crafting intuitive user journeys, high-contrast dark mode design tokens, and converted brand experiences.',
    skills: ['UX Architecture', 'Figma Tokens', 'User Research', 'Design Systems'],
    image: '/img12.jpg',
    experienceYears: '2+ YRS',
  },
  {
    id: 'm4',
    name: 'Anasuya Chatterjee',
    role: 'Co-Founder & Growth Engineer',
    bio: 'Architecting precision lead generation funnels, automated marketing workflows, and multichannel telemetry.',
    skills: ['Conversion Funnels', 'Analytics Telemetry', 'SEO Architecture', 'REACH Protocol'],
    image: '/img11.jpg',
    experienceYears: '2+ YRS',
  },
];

const MILESTONES = [
  {
    year: '2025',
    title: 'Studio Foundation',
    desc: 'ONLYWEBB was established in Kolkata with a core mission: replacing generic web templates with bespoke, high-performance software engineering.',
  },
  {
    year: '2025',
    title: 'WebGL & Motion Engine Expansion',
    desc: 'Integrated interactive 3D physics solvers, fluid vector canvases, and enterprise single-page applications into our core tech stack.',
  },
  {
    year: '2025',
    title: 'Multichannel REACH & AI Bot Launch',
    desc: 'Expanded service offerings to include autonomous AI chatbots for customer support and the REACH social growth framework.',
  },
  {
    year: '2026',
    title: 'Global Client Infrastructure',
    desc: 'Now engineering robust digital platforms for clients worldwide with sub-second LCP scores and Lighthouse-compliant architectures.',
  },
];

export default function AboutUs({ accentColor = 'pure_mono', onNavigateContact }: AboutUsProps) {
  const getAccentText = () => {
    switch (accentColor) {
      case 'cyber_amber': return 'text-amber-400';
      case 'toxic_green': return 'text-emerald-400';
      case 'neon_cobalt': return 'text-blue-400';
      case 'pure_mono':
      default: return 'text-white';
    }
  };

  const getAccentBorder = () => {
    switch (accentColor) {
      case 'cyber_amber': return 'border-amber-500/40';
      case 'toxic_green': return 'border-emerald-500/40';
      case 'neon_cobalt': return 'border-blue-500/40';
      case 'pure_mono':
      default: return 'border-white/20';
    }
  };

  const getAccentBg = () => {
    switch (accentColor) {
      case 'cyber_amber': return 'bg-amber-500/10 text-amber-300 border-amber-500/20';
      case 'toxic_green': return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20';
      case 'neon_cobalt': return 'bg-blue-500/10 text-blue-300 border-blue-500/20';
      case 'pure_mono':
      default: return 'bg-white/10 text-white border-white/20';
    }
  };

  return (
    <div id="about-section" className="space-y-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10">
      
      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-neutral-400 uppercase tracking-widest">
          <Users className="w-3.5 h-3.5 text-white" />
          <span>MEET THE TEAM & ARCHITECTURE</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
          CRAFTED BY ENGINEERS FOR HIGH-GROWTH BRANDS
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
          We are a team of dedicated developers, visual designers, and system architects building resilient digital experiences with zero bloat.
        </p>
      </div>

      {/* Part 1: Team Flashcards (4 Workers / Members) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
              CORE TEAM MEMBERS
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
              OUR TEAM FLASHCARDS
            </h2>
          </div>
          <span className="font-mono text-xs text-white font-bold tracking-widest hidden sm:inline-block">
            04 CORE SPECIALISTS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-950/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/40 hover:-translate-y-1 shadow-xl overflow-hidden"
            >
              {/* Top Image Flashcard Avatar */}
              <div className="space-y-4">
                <div className="relative w-full h-48 rounded-xl overflow-hidden border border-zinc-800 bg-neutral-900">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-md font-mono text-[9px] text-white border border-white/20 font-bold">
                    {member.experienceYears}
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-1">
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-white transition-colors">
                    {member.name}
                  </h3>
                  <span className={`font-mono text-xs font-semibold block ${getAccentText()}`}>
                    {member.role}
                  </span>
                </div>

                <p className="text-zinc-400 text-xs leading-relaxed font-sans line-clamp-3">
                  {member.bio}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="mt-5 pt-4 border-t border-zinc-900 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="font-mono text-[9px] px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Part 2: Beneath Team — Our About Us */}
      <div className="space-y-6 pt-6">
        <div className="glass-panel rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-zinc-800/80 bg-zinc-950/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-neutral-400 uppercase tracking-widest">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                ABOUT OUR STUDIO
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
                ENGINEERING DRIVEN BY PRECISION, PERFORMANCE & PURPOSE
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                ONLYWEBB is a modern digital engineering firm based in Kolkata, India. We specialize in building fast single-page applications, custom WebGL visual matrices, lead generation funnels, and automated AI chat agents.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                Unlike generic web agencies that rely on drag-and-drop website builders or bloated themes, every ONLYWEBB project is handcrafted from line one with modern frameworks (React 19, TypeScript, Vite, Tailwind CSS, Motion). We prioritize sub-second page load times, strict zero-CLS visual stability, and seamless responsiveness across all screen sizes.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>No Template Bloat</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Sub-second Load Times</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Mobile & Tablet Optimized</span>
                </div>
                <div className="flex items-center gap-2.5 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Full Code Ownership</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4 bg-zinc-900/60 p-6 rounded-2xl border border-zinc-800">
              <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 font-mono text-xs text-white uppercase font-bold">
                <Terminal className="w-4 h-4 text-sky-400" />
                <span>STUDIO CORE METRICS</span>
              </div>
              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center py-2 border-b border-zinc-800/60">
                  <span className="text-zinc-400">AVERAGE LIGHTHOUSE SCORE</span>
                  <span className="text-emerald-400 font-bold">98/100</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-800/60">
                  <span className="text-zinc-400">FPS ANIMATION LOCK</span>
                  <span className="text-white font-bold">60 FPS</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-800/60">
                  <span className="text-zinc-400">FIRST CONTENTFUL PAINT</span>
                  <span className="text-sky-400 font-bold">&lt; 0.4s</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-zinc-400">PRIMARY TECH STACK</span>
                  <span className="text-white font-bold">REACT + VITE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Part 3: Beneath About Us — Our Journey & Experience */}
      <div className="space-y-6 pt-4">
        <div className="space-y-1 border-b border-zinc-900 pb-4">
          <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
            STUDIO TIMELINE & EVOLUTION
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-wide">
            OUR JOURNEY & EXPERIENCE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MILESTONES.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl border border-zinc-900 bg-zinc-950/40 backdrop-blur-xl flex flex-col justify-between space-y-4 hover:border-zinc-800 transition-colors group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl font-bold text-white bg-zinc-900 px-3 py-1 rounded-lg border border-zinc-800">
                    {item.year}
                  </span>
                  <Calendar className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                </div>
                <h3 className="font-display text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Part 4: Beneath Journey & Experience — More Details with Medium Logo */}
      <div className="space-y-6 pt-4">
        <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 via-zinc-900/60 to-zinc-950 p-6 sm:p-10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              {/* Official Medium Logo */}
              <div className="p-2.5 rounded-xl bg-white text-black flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42s-3.38-2.88-3.38-6.42 1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75s-1.19-2.58-1.19-5.75.53-5.75 1.19-5.75S24 8.83 24 12z"/>
                </svg>
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-300 font-bold">
                MORE DETAILS & MEDIUM ARTICLES
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-3xl font-bold text-white tracking-tight">
              READ OUR ENGINEERING INSIGHTS ON MEDIUM
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed font-sans">
              We regularly publish in-depth architectural breakdowns, performance optimization tutorials, and web development case studies on Medium. Explore our technical articles for deeper insights into how we engineer modern web applications.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors shadow-lg cursor-pointer"
              >
                <span>Read Articles on Medium</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              
              <a
                href="mailto:onlywebb4@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <span>Inquire About Engineering</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Preview Card for Medium */}
          <div className="w-full md:w-80 p-5 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-[10px] text-zinc-400">
              <span>MEDIUM PUBLICATION</span>
              <span className="text-emerald-400 font-bold">ACTIVE</span>
            </div>
            <div className="space-y-2 text-left">
              <div className="text-white font-bold text-xs leading-snug">
                "Architecting Sub-Second Single Page React Apps with Vite & Motion"
              </div>
              <p className="text-zinc-500 text-[10px] line-clamp-2">
                A deep dive into zero-CLS layout calculations, asset compression, and modern web rendering.
              </p>
            </div>
            <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-[10px] text-zinc-400">
              <span>By Sounak Sarkar</span>
              <span className="text-sky-400">5 min read</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
