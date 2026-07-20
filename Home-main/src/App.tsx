import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, Globe, Activity, ChevronDown, Settings, Mail, Terminal, 
  ArrowRight, Shield, Zap, CheckCircle, Info, Heart 
} from 'lucide-react';

import BackgroundCanvas from './components/BackgroundCanvas';
import DesignInspector from './components/DesignInspector';
import ServiceCards from './components/ServiceCards';
import ServiceConfigurator from './components/ServiceConfigurator';
import { CanvasConfig, AccentColor } from './types';

export default function App() {
  const [accentColor, setAccentColor] = useState<AccentColor>('pure_mono');
  const [focusedService, setFocusedService] = useState<string>('');
  
  // Real-time digital clock state
  const [timeStr, setTimeStr] = useState<string>('');

  // 3D Canvas Default Config
  const [canvasConfig, setCanvasConfig] = useState<CanvasConfig>({
    style: 'wireframe_3d',
    object3DType: 'topo_blob',
    object3DScale: 1.4,
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

  // Form Submission
  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
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

  return (
    <div id="main-landing-app" className="relative min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden scanline-overlay selection:bg-white selection:text-black">
      
      {/* 3D Interactive Vector Background Canvas */}
      <BackgroundCanvas config={canvasConfig} accentColor={accentColor} />

      {/* Floating Design Inspector / Explanation Panel */}
      <DesignInspector 
        config={canvasConfig} 
        setConfig={setCanvasConfig} 
        accentColor={accentColor} 
        setAccentColor={setAccentColor} 
      />

      {/* Core Layout Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Bar */}
        <header id="app-header" className="sticky top-0 z-40 w-full border-b border-zinc-900 bg-[#050505]/70 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="flex items-center gap-2.5">
                <div className="h-6 w-6 rounded-full border border-zinc-700 flex items-center justify-center">
                  <div className={`h-2.5 w-2.5 rounded-full inline-block ${
                    accentColor === 'cyber_amber' ? 'bg-amber-500 shadow-[0_0_8px_#f59e0b]' :
                    accentColor === 'toxic_green' ? 'bg-emerald-500 shadow-[0_0_8px_#22c55e]' :
                    accentColor === 'neon_cobalt' ? 'bg-blue-500 shadow-[0_0_8px_#3b82f6]' :
                    'bg-white'
                  }`} />
                </div>
                <span className="font-display font-bold text-lg tracking-wider text-white uppercase">
                  ONLYWEBB
                </span>
              </div>
              <span className="hidden sm:inline font-mono text-[9px] text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded-md">
                v2.6_ENGINE
              </span>
            </a>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-neutral-400">
              <a href="#services-section" className="hover:text-white transition-colors">
                [ SERVICES ]
              </a>
              <a href="#project-configurator-container" className="hover:text-white transition-colors">
                [ ARCHITECTURE_CONFIG ]
              </a>
              <a href="#contact-section" className="hover:text-white transition-colors">
                [ GET_IN_TOUCH ]
              </a>
            </nav>

            {/* Time / System Status Display */}
            <div className="flex items-center gap-4 font-mono text-[10px] text-neutral-500">
              <span className="hidden lg:inline border-r border-white/15 pr-4 text-right">
                <span className="block text-[8px] text-neutral-600">CLIENT CONNECTION</span>
                <span className="text-emerald-500 font-bold uppercase">● SECURE_EDGE</span>
              </span>
              <div>
                <span className="block text-[8px] text-neutral-600 text-right">SERVER CLOCK</span>
                <span className="text-neutral-300 tracking-wide font-medium">{timeStr || '00:00:00 UTC'}</span>
              </div>
            </div>
          </div>
        </header>

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
              CRAFTING <br />
              <span className="italic font-serif text-neutral-300 font-normal">Digital</span> <br />
              MONOLITHS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-light text-neutral-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed pt-2"
            >
              Building bespoke digital monoliths with extreme performance ratios, fluid 3D mathematics, and pristine monochrome artistry.
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
              href="#services-section"
              className="py-4 px-8 rounded-xl font-bold text-xs uppercase tracking-widest text-white border border-zinc-800 bg-[#050505]/50 hover:bg-neutral-900/50 hover:border-zinc-700 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Explore Services
              <ChevronDown className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Design Accent Sandbox Selector inside Hero to quickly demonstrate integration */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 bg-neutral-950/40 border border-zinc-900 p-4 rounded-xl max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md"
          >
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-neutral-500" />
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider text-left">
                SANDBOX: SWITCH DESIGN ACCENT
              </span>
            </div>
            <div className="flex gap-1.5">
              {(['pure_mono', 'cyber_amber', 'toxic_green', 'neon_cobalt'] as AccentColor[]).map((col) => (
                <button
                  id={`hero-swatch-${col}`}
                  key={col}
                  onClick={() => setAccentColor(col)}
                  className={`w-5 h-5 rounded-full border transition-all duration-300 hover:scale-110 active:scale-90 cursor-pointer ${
                    accentColor === col ? 'ring-2 ring-white scale-105 border-transparent' : 'border-white/10'
                  } ${
                    col === 'pure_mono' ? 'bg-white' :
                    col === 'cyber_amber' ? 'bg-amber-500' :
                    col === 'toxic_green' ? 'bg-emerald-500' :
                    'bg-blue-500'
                  }`}
                  title={col.replace('_', ' ')}
                />
              ))}
            </div>
          </motion.div>

          {/* Arrow Indicator */}
          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-5 h-5 text-neutral-600" />
          </div>
        </section>

        {/* Decorative Separator / Stats Strip */}
        <section className="border-y border-white/5 bg-[#0a0a0a]/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 grid grid-cols-2 lg:grid-cols-4 gap-8 font-mono text-center lg:text-left">
            <div className="space-y-1">
              <span className="block text-[9px] text-neutral-500 uppercase tracking-widest">Lighthouse Core</span>
              <span className="block text-xl font-bold text-white">99 / 100 SPEED</span>
            </div>
            <div className="space-y-1 border-l border-white/5 pl-0 lg:pl-8">
              <span className="block text-[9px] text-neutral-500 uppercase tracking-widest">Engineering Mode</span>
              <span className="block text-xl font-bold text-white">TYPED TYPESCRIPT</span>
            </div>
            <div className="space-y-1 border-l border-white/5 pl-0 lg:pl-8">
              <span className="block text-[9px] text-neutral-500 uppercase tracking-widest">Layout Method</span>
              <span className="block text-xl font-bold text-white">ZERO BLURRED LAYOUTS</span>
            </div>
            <div className="space-y-1 border-l border-white/5 pl-0 lg:pl-8">
              <span className="block text-[9px] text-neutral-500 uppercase tracking-widest">Visual Theme</span>
              <span className="block text-xl font-bold text-white">HIGH-CONTRAST MONO</span>
            </div>
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
              COMMISSION A DIGITAL MONOLITH
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto leading-relaxed">
              Have an architectural draft or immersive interface project in mind? Complete the transmission below, and our engineering desk will respond in under 12 hours.
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
                        Your Identity (Name)
                      </label>
                      <input
                        id="form-input-name"
                        type="text"
                        required
                        placeholder="e.g. Satoshi Nakamoto"
                        value={formState.name}
                        onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full bg-[#0c0c0c] border border-zinc-900 focus:border-zinc-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="form-input-email" className="block font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                        Communication Node (Email)
                      </label>
                      <input
                        id="form-input-email"
                        type="email"
                        required
                        placeholder="e.g. satoshi@bitcoin.org"
                        value={formState.email}
                        onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-[#0c0c0c] border border-zinc-900 focus:border-zinc-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="form-textarea-message" className="block font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                      Project Specification Draft / Brief
                    </label>
                    <textarea
                      id="form-textarea-message"
                      rows={5}
                      placeholder="Describe your visual concept, tech requirements, or ideal interactions..."
                      value={formState.message}
                      onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full bg-[#0c0c0c] border border-zinc-900 focus:border-zinc-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Send Button */}
                  <button
                    id="btn-contact-submit"
                    type="submit"
                    className={`w-full py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-widest text-black shadow-lg transition-all duration-300 hover:scale-[1.01] active:scale-95 cursor-pointer flex items-center justify-center gap-2 ${getAccentBg()}`}
                  >
                    Transmit Specification Brief
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

        {/* Footer */}
        <footer id="app-footer" className="mt-auto border-t border-zinc-900 bg-[#050505]/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left Column Logo */}
            <div className="flex flex-col items-center md:items-start gap-2.5">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full border border-zinc-800 flex items-center justify-center">
                  <div className={`h-2 w-2 rounded-full inline-block ${getAccentBg()}`} />
                </div>
                <span className="font-display font-bold text-sm tracking-wider text-white uppercase">
                  ONLYWEBB
                </span>
              </div>
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                © {new Date().getFullYear()} ONLYWEBB. Creative Engineering and Architecture.
              </span>
            </div>

            {/* Middle Credits */}
            <div className="flex items-center gap-1 font-mono text-[10px] text-neutral-500">
              <span>Programmed with</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              <span>in AI Studio Workspace</span>
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
