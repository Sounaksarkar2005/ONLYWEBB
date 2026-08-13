import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, Globe, Activity, ChevronDown, Settings, Mail, Terminal, 
  ArrowRight, Shield, Zap, CheckCircle, Menu, X 
} from 'lucide-react';

import BackgroundCanvas from './components/BackgroundCanvas';

import ServiceCards from './components/ServiceCards';
import ServiceConfigurator from './components/ServiceConfigurator';
import Services from './components/Services';
import Hero from './components/Hero';
import CTA from './components/CTA';
import PortfolioSection from './components/portfolio/PortfolioSection';
import LoginPage from './components/LoginPage';
import LegalModal from './components/LegalModal';
import { CanvasConfig, AccentColor } from './types';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default function App() {
  const [accentColor, setAccentColor] = useState<AccentColor>('pure_mono');
  const [focusedService, setFocusedService] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Real-time digital clock state
  const [timeStr, setTimeStr] = useState<string>('');

  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [activePage, setActivePage] = useState<'login' | 'home' | 'services' | 'portfolio'>('login');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user.email || 'Authenticated User');
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#services-section') {
        setActivePage('services');
      } else if (hash === '#portfolio') {
        setActivePage('portfolio');
      } else if (hash === '#login') {
        setActivePage('login');
      } else if (hash) {
        // Any section anchor on the main page (#home, #configurator-anchor, #packages-anchor, #contact-section, etc.)
        setActivePage('home');
      } else {
        // Default initial entry without hash
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

            {/* Right side: Time / Button / Mobile Toggle */}
            <div className="flex items-center gap-3 sm:gap-6">
              {/* Server Clock */}
              <div className="hidden lg:flex items-center gap-2 font-mono text-[10px] text-neutral-500">
                <span className="block text-[8px] text-neutral-600 text-right">SERVER CLOCK</span>
                <span className="text-neutral-300 tracking-wide font-medium">{timeStr || '00:00:00 UTC'}</span>
              </div>
              
              {currentUser ? (
                <button 
                  onClick={async () => {
                    await signOut(auth);
                    setCurrentUser(null);
                    setActivePage('login');
                    window.location.hash = '#login';
                  }}
                  className="flex items-center gap-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/30 px-3 sm:px-4 py-2 rounded-full font-mono text-[10px] font-bold tracking-widest uppercase transition-colors cursor-pointer"
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
                  className="flex items-center gap-2 bg-white text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-mono text-[10px] font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  LOGIN
                  <ArrowRight className="w-3 h-3" />
                </a>
              )}

              {/* Mobile Menu Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full text-neutral-300 hover:text-white bg-white/5 border border-white/10 cursor-pointer"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </header>

          {/* Mobile Navigation Dropdown Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="md:hidden pointer-events-auto mt-2 max-w-7xl mx-auto p-3 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl space-y-2 font-mono text-xs uppercase tracking-widest"
              >
                <a 
                  href="#home" 
                  onClick={() => { setActivePage('home'); setMobileMenuOpen(false); }}
                  className={`flex items-center justify-between p-3 rounded-xl transition-colors ${activePage === 'home' ? 'bg-white/10 text-white font-bold' : 'text-neutral-400 hover:bg-white/5 hover:text-white'}`}
                >
                  <span>HOME</span>
                  {activePage === 'home' && <span className="w-2 h-2 rounded-full bg-white" />}
                </a>
                <a 
                  href="#services-section" 
                  onClick={() => { setActivePage('services'); setMobileMenuOpen(false); }}
                  className={`flex items-center justify-between p-3 rounded-xl transition-colors ${activePage === 'services' ? 'bg-white/10 text-white font-bold' : 'text-neutral-400 hover:bg-white/5 hover:text-white'}`}
                >
                  <span>SERVICES</span>
                  {activePage === 'services' && <span className="w-2 h-2 rounded-full bg-white" />}
                </a>
                <a 
                  href="#portfolio" 
                  onClick={() => { setActivePage('portfolio'); setMobileMenuOpen(false); }}
                  className={`flex items-center justify-between p-3 rounded-xl transition-colors ${activePage === 'portfolio' ? 'bg-white/10 text-white font-bold' : 'text-neutral-400 hover:bg-white/5 hover:text-white'}`}
                >
                  <span>PORTFOLIO</span>
                  {activePage === 'portfolio' && <span className="w-2 h-2 rounded-full bg-white" />}
                </a>
              </motion.div>
            )}
          </AnimatePresence>
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
            </section>



            {/* Services Section */}
            <section id="services-anchor" className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-neutral-950/40 relative">
              <ServiceCards 
                accentColor={accentColor} 
                onCardHover={handleCardHover}
                onSelectService={handleSelectService}
              />
            </section>

            {/* Interactive Spec Configurator / Package Section */}
            <section id="configurator-anchor" className="py-20 lg:py-32 bg-neutral-950/20 border-t border-white/5 relative">
              <div id="packages-anchor" className="absolute -top-24" />
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
                <span className="font-brand font-bold text-sm tracking-wider text-white uppercase">
                  ONLYWEBB
                </span>
              </div>
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                © 2025-{new Date().getFullYear()} ONLYWEBB. Creative Engineering and Architecture.
              </span>
            </div>

            {/* Middle Column: Legal Buttons */}
            <div className="flex items-center gap-4 sm:gap-6 font-mono text-xs">
              <button 
                onClick={() => setLegalModalType('privacy')}
                className="text-zinc-400 hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Privacy Policy
              </button>
              <span className="text-zinc-700">•</span>
              <button 
                onClick={() => setLegalModalType('terms')}
                className="text-zinc-400 hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                Terms & Conditions
              </button>
            </div>

            {/* Right Column: Contact Us & Social Links */}
            <div className="flex flex-col items-center md:items-end gap-2 font-mono">
              <span className="text-xs font-bold tracking-wider text-white uppercase">CONTACT US</span>
              <div className="flex items-center gap-4 text-neutral-400">
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/8334063412" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp: 8334063412"
                  className="hover:text-emerald-400 transition-colors p-1"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.486 1.332 5.004L2 22l5.127-1.343c1.464.798 3.114 1.218 4.881 1.218h.004c5.503 0 9.987-4.479 9.988-9.984 0-2.667-1.038-5.174-2.924-7.06A9.923 9.923 0 0 0 12.012 2zm.004 18.172h-.003a8.31 8.31 0 0 1-4.24-1.164l-.304-.181-3.149.824.84-3.072-.199-.317a8.307 8.307 0 0 1-1.272-4.463c.002-4.582 3.73-8.31 8.314-8.31 2.22 0 4.307.865 5.875 2.435a8.27 8.27 0 0 1 2.433 5.874c-.002 4.583-3.73 8.311-8.312 8.311zm4.557-6.223c-.25-.125-1.478-.728-1.707-.811-.229-.084-.396-.125-.562.125-.166.25-.646.811-.791.978-.146.166-.292.187-.542.062-.25-.125-1.055-.389-2.01-1.24-.743-.663-1.245-1.48-1.39-1.73-.146-.25-.016-.385.109-.509.113-.112.25-.292.375-.438.125-.146.166-.25.25-.417.084-.167.042-.313-.021-.438-.063-.125-.562-1.353-.77-1.853-.203-.488-.41-.422-.562-.43-.145-.008-.312-.01-.479-.01-.167 0-.437.063-.666.313-.229.25-.875.854-.875 2.083s.895 2.417 1.02 2.583c.125.167 1.762 2.691 4.269 3.774.596.257 1.062.411 1.425.526.598.19 1.142.163 1.572.099.48-.071 1.478-.604 1.686-1.187.208-.584.208-1.084.146-1.188-.063-.104-.229-.167-.479-.292z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/onlywebb_team?igsh=MWpqbjRncHIwZ284cA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-pink-400 transition-colors p-1"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Twitter / X */}
                <a 
                  href="https://x.com/ONLYWEBB_4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="hover:text-sky-400 transition-colors p-1"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* Legal Modal Dialog */}
        <LegalModal
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />

      </div>
    </div>
  );
}
