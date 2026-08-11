import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, Globe, Activity, ChevronDown, Settings, Mail, Terminal, 
  ArrowRight, Shield, Zap, CheckCircle 
} from 'lucide-react';

import BackgroundCanvas from './components/BackgroundCanvas';

import ServiceCards from './components/ServiceCards';
import ServiceConfigurator from './components/ServiceConfigurator';
import Services from './components/Services';
import Hero from './components/Hero';
import CTA from './components/CTA';
import PortfolioSection from './components/portfolio/PortfolioSection';
import LoginPage from './components/LoginPage';
import { CanvasConfig, AccentColor } from './types';

export default function App() {
  const [accentColor, setAccentColor] = useState<AccentColor>('pure_mono');
  const [focusedService, setFocusedService] = useState<string>('');
  
  // Real-time digital clock state
  const [timeStr, setTimeStr] = useState<string>('');

  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [activePage, setActivePage] = useState<'login' | 'home' | 'services' | 'portfolio'>('login');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#services-section') {
        setActivePage('services');
      } else if (hash === '#portfolio') {
        setActivePage('portfolio');
      } else if (hash === '#home') {
        setActivePage('home');
      } else if (hash === '#login') {
        setActivePage('login');
      } else {
        // Default first page is login page
        setActivePage('login');
      }
    };
    
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // 3D Canvas Default Config
  const [canvasConfig, setCanvasConfig] = useState<CanvasConfig>({
    style: 'wireframe_3d',
    object3DType: 'topo_blob',
    object3DScale: 1.68,
    particleCount: 120,
    speed: 0.8,
    connectionDistance: 120,
    interactiveForce: 0.6,
    interactiveMode: 'repel',
    showLines: true,
    glowEffect: true,
  });

  // Contact Form State
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Sync clock time
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      try {
        const options: Intl.DateTimeFormatOptions = {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZoneName: 'short'
        };
        setTimeStr(now.toLocaleTimeString('en-US', options));
      } catch (err) {
        try {
          const options: Intl.DateTimeFormatOptions = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          };
          setTimeStr(now.toLocaleTimeString('en-US', options));
        } catch (innerErr) {
          setTimeStr(now.toTimeString().split(' ')[0]);
        }
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Card hover effect: gently increase speed to indicate UI connection to background
  const handleCardHover = (isHovering: boolean) => {
    setCanvasConfig(prev => ({
      ...prev,
      speed: isHovering ? 2.2 : 0.8,
      glowEffect: isHovering ? true : prev.glowEffect
    }));
  };

  // When user triggers service spec config
  const handleSelectService = (serviceTitle: string) => {
    setFocusedService(serviceTitle);
    const target = document.getElementById('project-configurator-container');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handler for transferring locked specification to Project Details form field
  const handleLockSpecification = (specSummaryText: string) => {
    setFormState(prev => {
      const existing = prev.message;
      if (!existing) {
        return { ...prev, message: specSummaryText };
      }
      if (existing.includes('=== SELECTED PACKAGE & PRICING SUMMARY ===')) {
        const parts = existing.split('=== SELECTED PACKAGE & PRICING SUMMARY ===');
        const userNotesBefore = parts[0].trim();
        const endSplit = parts[1] ? parts[1].split('===========================================') : [];
        const userNotesAfter = endSplit[1] ? endSplit[1].trim() : '';

        let result = specSummaryText;
        if (userNotesBefore) result = `${userNotesBefore}\n\n${result}`;
        if (userNotesAfter) result = `${result}\n\n${userNotesAfter}`;
        return { ...prev, message: result };
      }
      if (existing.includes('[SELECTED SPECIFICATION DETAILS]')) {
        const userNotesBefore = existing.split('[SELECTED SPECIFICATION DETAILS]')[0].trim();
        return {
          ...prev,
          message: userNotesBefore ? `${userNotesBefore}\n\n${specSummaryText}` : specSummaryText
        };
      }
      return {
        ...prev,
        message: `${existing}\n\n${specSummaryText}`
      };
    });
  };

  // Form Submission
  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;

    const recipient = 'onlywebb4@gmail.com';
    const subject = `ONLYWEBB Project Brief - ${formState.name}`;
    const body = `NAME: ${formState.name}\nEMAIL: ${formState.email}\n\nPROJECT BRIEF & REQUIREMENTS:\n${formState.message || 'No additional message provided.'}\n\n------------------------------\nSent via ONLYWEBB Digital Platform`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open Gmail web compose in a new tab or fall back to mailto:
    const gmailWin = window.open(gmailUrl, '_blank');
    if (!gmailWin || gmailWin.closed || typeof gmailWin.closed === 'undefined') {
      window.location.href = mailtoUrl;
    }

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  const getAccentText = () => {
    switch (accentColor) {
      case 'cyber_amber': return 'text-amber-500';
      case 'toxic_green': return 'text-emerald-500';
      case 'neon_cobalt': return 'text-blue-500';
      case 'pure_mono':
      default: return 'text-white';
    }
  };

  const getAccentBg = () => {
    switch (accentColor) {
      case 'cyber_amber': return 'bg-amber-500';
      case 'toxic_green': return 'bg-emerald-500';
      case 'neon_cobalt': return 'bg-blue-500';
      case 'pure_mono':
      default: return 'bg-white';
    }
  };

  const getAccentBorder = () => {
    switch (accentColor) {
      case 'cyber_amber': return 'border-amber-500/25';
      case 'toxic_green': return 'border-emerald-500/25';
      case 'neon_cobalt': return 'border-blue-500/25';
      case 'pure_mono':
      default: return 'border-white/10';
    }
  };

  const getAccentBgLight = () => {
    switch (accentColor) {
      case 'cyber_amber': return 'bg-amber-500/10 text-amber-300 border-amber-500/20';
      case 'toxic_green': return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20';
      case 'neon_cobalt': return 'bg-blue-500/10 text-blue-300 border-blue-500/20';
      case 'pure_mono':
      default: return 'bg-white/5 border-white/10 text-white';
    }
  };

  if (activePage === 'login') {
    return (
      <LoginPage 
        onLoginSuccess={(email) => {
          setCurrentUser(email);
          setTimeout(() => {
            setActivePage('home');
            window.location.hash = '#home';
          }, 600);
        }}
        onExploreGuest={() => {
          setActivePage('home');
          window.location.hash = '#home';
        }}
        currentUserEmail={currentUser}
      />
    );
  }

  return (
    <div id="main-landing-app" className="relative min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden scanline-overlay selection:bg-white selection:text-black">
      
      {/* 3D Interactive Vector Background Canvas */}
      <BackgroundCanvas config={canvasConfig} accentColor={accentColor} />

      {/* Core Layout Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Bar */}
        <div className="fixed top-0 left-0 right-0 w-full z-50 pt-4 px-4 pointer-events-none">
          <header id="app-header" className="pointer-events-auto flex items-center justify-between max-w-7xl mx-auto px-6 py-4 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-full shadow-lg">
            {/* Logo */}
            <a href="#home" onClick={() => setActivePage('home')} className="flex items-center">
              <span className="font-brand font-bold text-3xl tracking-wider text-white uppercase">
                ONLYWEBB
              </span>
            </a>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] font-semibold text-neutral-400 tracking-widest uppercase">
              <a href="#home" className={`relative flex flex-col items-center transition-colors ${activePage === 'home' ? 'text-white' : 'hover:text-white'}`}>
                HOME
                {activePage === 'home' && (
                  <>
                    <motion.span layoutId="nav-underline" className="absolute -bottom-1 w-full border-b-[1.5px] border-white"></motion.span>
                    <motion.span layoutId="nav-dot" className="absolute -bottom-2.5 w-[3px] h-[3px] bg-white rounded-full"></motion.span>
                  </>
                )}
              </a>
              <a href="#services-section" className={`relative flex flex-col items-center transition-colors ${activePage === 'services' ? 'text-white' : 'hover:text-white'}`}>
                SERVICES
                {activePage === 'services' && (
                  <>
                    <motion.span layoutId="nav-underline" className="absolute -bottom-1 w-full border-b-[1.5px] border-white"></motion.span>
                    <motion.span layoutId="nav-dot" className="absolute -bottom-2.5 w-[3px] h-[3px] bg-white rounded-full"></motion.span>
                  </>
                )}
              </a>
              <a href="#portfolio" className={`relative flex flex-col items-center transition-colors ${activePage === 'portfolio' ? 'text-white' : 'hover:text-white'}`}>
                PORTFOLIO
                {activePage === 'portfolio' && (
                  <>
                    <motion.span layoutId="nav-underline" className="absolute -bottom-1 w-full border-b-[1.5px] border-white"></motion.span>
                    <motion.span layoutId="nav-dot" className="absolute -bottom-2.5 w-[3px] h-[3px] bg-white rounded-full"></motion.span>
                  </>
                )}
              </a>
            </nav>

            {/* Right side: Time / Button */}
            <div className="flex items-center gap-6">
              {/* Server Clock */}
              <div className="hidden lg:flex items-center gap-2 font-mono text-[10px] text-neutral-500">
                <span className="block text-[8px] text-neutral-600 text-right">SERVER CLOCK</span>
                <span className="text-neutral-300 tracking-wide font-medium">{timeStr || '00:00:00 UTC'}</span>
              </div>
              
              {currentUser ? (
                <button 
                  onClick={() => {
                    setCurrentUser(null);
                    setActivePage('login');
                    window.location.hash = '#login';
                  }}
                  className="flex items-center gap-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 px-4 py-2 rounded-full font-mono text-[10px] font-bold tracking-widest uppercase transition-colors cursor-pointer"
                  title="Click to Logout"
                >
                  LOGOUT ({currentUser.split('@')[0]})
                </button>
              ) : (
                <a 
                  href="#login"
                  onClick={() => {
                    setActivePage('login');
                    window.location.hash = '#login';
                  }}
                  className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-mono text-[10px] font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  LOGIN
                  <ArrowRight className="w-3 h-3" />
                </a>
              )}
            </div>
          </header>
        </div>

        {activePage === 'portfolio' ? (
          <main className="flex-grow pt-32 pb-20 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <PortfolioSection />
          </main>
        ) : activePage === 'services' ? (
          <main className="flex-grow pt-32 relative z-10 w-full mx-auto bg-mesh text-on-background font-body-md">
            <Hero />
            <Services />
            <CTA />
          </main>
        ) : (
          <>
            {/* Hero Section */}
            <section id="hero-section" className="relative flex-1 flex flex-col justify-center items-center py-20 lg:py-32 max-w-7xl mx-auto px-4 md:px-8 text-center">
              
              {/* Animated decorative tag */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-mono font-medium uppercase tracking-widest ${getAccentBgLight()}`}>
                  <Terminal className="w-3 h-3" />
                  Creative Engineering Studio
                </span>
              </motion.div>

              {/* Large display typography heading */}
              <div className="space-y-4 max-w-4xl">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[0.9] text-white"
                >
                  ENGINEERING <br />
                  <span className="italic font-serif text-neutral-300 font-normal">Websites</span> <br />
                  THAT CONVERT
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="font-light text-neutral-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed pt-2"
                >
                  We design and build high-performance websites and web apps — custom code, immersive 3D interactions, and pixel-perfect design — for businesses across India and worldwide.
                </motion.p>
              </div>

              {/* Call to action CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mt-10 justify-center w-full max-w-md"
              >
                <a
                  href="#project-configurator-container"
                  className={`py-4 px-8 rounded-xl font-bold text-xs uppercase tracking-widest text-black shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2 cursor-pointer ${getAccentBg()}`}
                >
                  Configure Specifications
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#services-anchor"
                  className="py-4 px-8 rounded-xl font-bold text-xs uppercase tracking-widest text-white border border-zinc-800 bg-[#050505]/50 hover:bg-neutral-900/50 hover:border-zinc-700 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Explore Services
                  <ChevronDown className="w-4 h-4" />
                </a>
              </motion.div>


              {/* Arrow Indicator */}
              <div className="mt-12 animate-bounce">
                <ChevronDown className="w-5 h-5 text-neutral-600" />
              </div>
            </section>



            {/* Services Section */}
            <section id="services-anchor" className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-neutral-950/40 relative">
              <ServiceCards 
                accentColor={accentColor} 
                onCardHover={handleCardHover}
                onSelectService={handleSelectService}
              />
            </section>

            {/* Interactive Spec Configurator Section */}
            <section id="configurator-anchor" className="py-20 lg:py-32 bg-neutral-950/20 border-t border-white/5 relative">
              <ServiceConfigurator 
                accentColor={accentColor} 
                initialServiceFocus={focusedService}
                onLockSpecification={handleLockSpecification}
              />
            </section>

            {/* Contact/Brief Form Section */}
            <section id="contact-section" className="py-20 lg:py-32 max-w-4xl mx-auto px-4 md:px-8 space-y-12">
              
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <Mail className={`w-4 h-4 ${getAccentText()}`} />
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                    INITIATE INTERACTION
                  </span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
                  LET'S BUILD SOMETHING
                </h2>
                <p className="text-neutral-400 text-sm max-w-xl mx-auto leading-relaxed">
                  Have a website or app idea in mind? Fill out the form below and our team will get back to you within 12 hours — wherever you're based.
                </p>
              </div>

              {/* Submission Form */}
              <div className="bg-[#080808] border border-zinc-900 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-white/5 to-transparent pointer-events-none" />

                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form
                      id="contact-form-monolith"
                      key="contact-form"
                      onSubmit={handleSubmitContact}
                      className="space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="form-input-name" className="block font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                            YOUR NAME
                          </label>
                          <input
                            id="form-input-name"
                            type="text"
                            required
                            placeholder="Your Name"
                            value={formState.name}
                            onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full bg-[#0c0c0c] border border-zinc-900 focus:border-zinc-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="form-input-email" className="block font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                            EMAIL ADDRESS
                          </label>
                          <input
                            id="form-input-email"
                            type="email"
                            required
                            placeholder="Your Email ID"
                            value={formState.email}
                            onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                            className="w-full bg-[#0c0c0c] border border-zinc-900 focus:border-zinc-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label htmlFor="form-textarea-message" className="block font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                            PROJECT DETAILS & PACKAGE SPECIFICATION
                          </label>
                          <span className="font-mono text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            PACKAGE & PRICING SYNCED
                          </span>
                        </div>
                        <textarea
                          id="form-textarea-message"
                          rows={8}
                          placeholder="Selected package details, pricing, and project requirements will appear here..."
                          value={formState.message}
                          onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                          className="w-full bg-[#0c0c0c] border border-zinc-800 focus:border-zinc-600 rounded-xl px-4 py-3.5 text-xs font-mono leading-relaxed text-white placeholder-neutral-500 outline-none transition-colors resize-y"
                        />
                      </div>

                      {/* Send Button */}
                      <button
                        id="btn-contact-submit"
                        type="submit"
                        className={`w-full py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-widest text-black shadow-lg transition-all duration-300 hover:scale-[1.01] active:scale-95 cursor-pointer flex items-center justify-center gap-2 ${getAccentBg()}`}
                      >
                        SUBMIT PROJECT BRIEF
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      id="transmission-success-pane"
                      key="form-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-12 text-center space-y-4"
                    >
                      <CheckCircle className={`w-12 h-12 mx-auto animate-bounce ${getAccentText()}`} />
                      <div className="space-y-1">
                        <h4 className="font-display text-lg font-bold text-white">
                          TRANSMISSION RECEIVED SECURELY
                        </h4>
                        <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                          Transaction Hash: {Math.random().toString(36).substring(2, 10).toUpperCase()}
                        </p>
                      </div>
                      <p className="text-neutral-400 text-sm max-w-sm mx-auto leading-relaxed">
                        Thank you, <span className="text-white font-semibold">{formState.name}</span>. Your project specification briefing has been securely encoded and routed to the primary ONLYWEBB development core.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </section>
          </>
        )}

        {/* Footer */}
        <footer id="app-footer" className="mt-auto border-t border-zinc-900 bg-[#050505]/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left Column Logo */}
            <div className="flex flex-col items-center md:items-start gap-2.5">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full border border-zinc-800 flex items-center justify-center">
                  <div className={`h-2 w-2 rounded-full inline-block ${getAccentBg()}`} />
                </div>
                <span className="font-brand font-bold text-sm tracking-wider text-white uppercase">
                  ONLYWEBB
                </span>
              </div>
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                © {new Date().getFullYear()} ONLYWEBB. Creative Engineering and Architecture.
              </span>
            </div>



            {/* Right Column Links */}
            <div className="flex items-center gap-6 font-mono text-[10px] text-neutral-400">
              <a href="#services-anchor" className="hover:text-white transition-colors">[ CORE_SERVICES ]</a>
              <a href="#configurator-anchor" className="hover:text-white transition-colors">[ SPEC_CALCULATOR ]</a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
