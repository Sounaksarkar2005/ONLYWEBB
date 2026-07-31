import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Rocket, TrendingUp, Bot, Share2, Target, MessageCircle, Crown, Info, Sliders, Timer, CreditCard, CheckCircle, Plus, Check, X } from 'lucide-react';
import { AccentColor, ProjectScope, VisualFidelity, AddOn } from '../types';

interface ServiceConfiguratorProps {
  accentColor: AccentColor;
  initialServiceFocus?: string;
}

const ADD_ONS: AddOn[] = [
  {
    id: 'api_gateway',
    name: 'Secure API Gateways & Proxy Layer',
    description: 'Enables safe server-side API proxy connections, hiding API keys and preventing front-end injection.',
    price: 1800,
  },
  {
    id: 'vector_math',
    name: 'Custom Vector Math Simulation Physics',
    description: 'High-performance math modules mapping custom coordinate physics directly inside responsive HTML5 canvases.',
    price: 3200,
  },
  {
    id: 'edge_cache',
    name: 'Multi-Region Edge Routing Optimization',
    description: 'Redistributes site asset files using robust CDN rules for zero-CLS immediate visual responses.',
    price: 1400,
  },
  {
    id: 'auth_db',
    name: 'Bespoke Auth & Persistent Room State',
    description: 'Connects standard secure authentication and document databases (like Firestore) for multi-user session storage.',
    price: 2500,
  },
];

export default function ServiceConfigurator({ accentColor, initialServiceFocus }: ServiceConfiguratorProps) {
  // Base package selection (customer chooses exactly 1 from launch, growth, smart)
  const [scope, setScope] = useState<ProjectScope>('growth');
  
  // Reach module (customer can add or remove)
  const [reachEnabled, setReachEnabled] = useState<boolean>(true);
  const [fidelity, setFidelity] = useState<VisualFidelity>('complete');

  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [specLocked, setSpecLocked] = useState(false);

  useEffect(() => {
    if (initialServiceFocus) {
      const lower = initialServiceFocus.toLowerCase();
      if (lower.includes('launch') || lower.includes('frontend')) {
        setScope('launch');
      } else if (lower.includes('growth') || lower.includes('multi')) {
        setScope('growth');
      } else if (lower.includes('smart') || lower.includes('ai')) {
        setScope('smart');
      } else if (lower.includes('reach') || lower.includes('social')) {
        setReachEnabled(true);
        setFidelity('complete');
      }
    }
  }, [initialServiceFocus]);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Compute stats
  const calculateStats = () => {
    let basePrice = 0;
    let baseWeeks = 1;

    // Base package price & duration
    switch (scope) {
      case 'launch':
        basePrice = 5499;
        baseWeeks = 1;
        break;
      case 'growth':
        basePrice = 10999;
        baseWeeks = 2;
        break;
      case 'smart':
        basePrice = 9999;
        baseWeeks = 3;
        break;
    }

    // Add Reach plan price if Reach module is enabled
    if (reachEnabled) {
      switch (fidelity) {
        case 'basic':
          basePrice += 10000;
          break;
        case 'standard':
          basePrice += 9000;
          break;
        case 'complete':
          basePrice += 18000;
          break;
      }
    }

    const addOnsCost = ADD_ONS.filter(a => selectedAddOns.includes(a.id)).reduce((sum, a) => sum + a.price, 0);

    const totalCost = basePrice + addOnsCost;

    const techStack = ['React 19', 'TypeScript', 'Tailwind CSS'];
    if (scope === 'launch' || scope === 'growth') {
      techStack.push('WhatsApp API');
    }
    if (scope === 'growth') {
      techStack.push('Payment Gateway');
      techStack.push('SEO Engine');
    }
    if (scope === 'smart') {
      techStack.push('AI Chatbot Model');
    }
    if (reachEnabled) {
      techStack.push('Social Growth Suite');
      techStack.push('Analytics Engine');
    }

    return {
      price: totalCost,
      weeks: baseWeeks,
      techStack,
    };
  };

  const stats = calculateStats();

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
      case 'cyber_amber': return 'bg-amber-500/5 border-amber-500/20 text-amber-300';
      case 'toxic_green': return 'bg-emerald-500/5 border-emerald-500/20 text-emerald-300';
      case 'neon_cobalt': return 'bg-blue-500/5 border-blue-500/20 text-blue-300';
      case 'pure_mono':
      default: return 'bg-white/5 border-white/15 text-white';
    }
  };

  const handleSelectReachPlan = (planId: VisualFidelity) => {
    setSpecLocked(false);
    if (!reachEnabled) {
      // Turn reach on and select clicked plan
      setReachEnabled(true);
      setFidelity(planId);
    } else if (fidelity === planId) {
      // Toggle reach off if clicking already selected plan
      setReachEnabled(false);
    } else {
      // Switch to new reach plan
      setFidelity(planId);
    }
  };

  return (
    <div id="project-configurator-container" className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
      {/* Configurator Header */}
      <div className="space-y-2 border-b border-zinc-900 pb-8">
        <div className="flex items-center gap-2">
          <Sliders className={`w-4 h-4 ${getAccentText()}`} />
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            SPECIFICATION ENGINE
          </span>
        </div>
        <h2 className="font-display text-3xl font-bold text-white tracking-tight">
          PROJECT ARCHITECTURE CONFIGURATOR
        </h2>
        <p className="text-neutral-400 text-sm leading-relaxed max-w-3xl">
          Tweak the operational parameters, select visual fidelities, and stack additional modules. Our specification engine automatically estimates ideal technical integrations and development scopes in real-time.
        </p>
      </div>

      {/* Main Grid: Options on left, Output Stats on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Parameters Inputs */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Step 1: Choose Your Package (Select 1 only) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full border border-neutral-600 bg-neutral-900 text-white font-bold font-mono text-xs shadow-sm">
                  01
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                  CHOOSE YOUR PACKAGE
                </span>
              </div>
              <span className="text-xs text-neutral-400 font-sans normal-case">(Select 1 package)</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  id: 'launch' as ProjectScope,
                  name: 'Launch',
                  desc: 'A clean single-page website with WhatsApp integration built in — perfect for individuals, freelancers, and small local businesses who need a fast, professional presence.',
                  priceLabel: 'BASE ₹5499',
                  icon: Rocket,
                },
                {
                  id: 'growth' as ProjectScope,
                  name: 'Growth',
                  desc: 'A full multi-page website with WhatsApp integration, secure payment gateway, and on-page SEO — built for businesses ready to scale and get discovered online.',
                  priceLabel: 'BASE ₹10999 (+ ₹1000/mo maintenance)',
                  icon: TrendingUp,
                },
                {
                  id: 'smart' as ProjectScope,
                  name: 'Smart',
                  desc: 'AI-powered chatbots for both customer support and internal business management — automate conversations, capture leads, and run operations smarter.',
                  priceLabel: 'BASE ₹9999 (+ ₹1000/mo maintenance)',
                  icon: Bot,
                },
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = scope === item.id;
                return (
                  <button
                    id={`btn-scope-${item.id}`}
                    key={item.id}
                    onClick={() => {
                      setScope(item.id);
                      setSpecLocked(false);
                    }}
                    className={`flex flex-col justify-between text-left p-5 rounded-xl border bg-zinc-950/20 hover:bg-zinc-900/10 transition-all duration-300 h-full relative group cursor-pointer ${
                      isSelected
                        ? accentColor === 'cyber_amber' ? 'border-amber-500 bg-amber-500/5' :
                          accentColor === 'toxic_green' ? 'border-emerald-500 bg-emerald-500/5' :
                          accentColor === 'neon_cobalt' ? 'border-blue-500 bg-blue-500/5' :
                          'border-zinc-300 bg-white/5'
                        : 'border-zinc-900 text-neutral-400'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Icon className={`w-4 h-4 ${isSelected ? getAccentText() : 'text-neutral-500'}`} />
                        {isSelected && (
                          <div className={`w-2.5 h-2.5 rounded-full ${getAccentBg()}`} />
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white">{item.name}</h4>
                        <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-zinc-900 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                      {item.priceLabel}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Reach - Optional Add-on (Add or Remove) */}
          <div className="space-y-4 pt-4 border-t border-zinc-900">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full border border-neutral-600 bg-neutral-900 text-white font-bold font-mono text-xs shadow-sm">
                  02
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                  REACH — CHOOSE YOUR PLAN (OPTIONAL)
                </span>
              </div>

              {/* Toggle to Add or Remove Reach Module */}
              <button
                id="btn-toggle-reach"
                onClick={() => {
                  setReachEnabled(!reachEnabled);
                  setSpecLocked(false);
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer self-start sm:self-auto ${
                  reachEnabled
                    ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 font-semibold'
                    : 'border-zinc-800 bg-zinc-900/80 text-neutral-400 hover:border-zinc-700 hover:text-white'
                }`}
              >
                {reachEnabled ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>REACH ADDED</span>
                    <span className="text-[10px] text-neutral-400 hover:text-red-400 pl-1 border-l border-zinc-700 ml-1">(Remove)</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5 text-neutral-400" />
                    <span>+ ADD REACH</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Your complete social media growth engine — covering Facebook, Instagram, Twitter, LinkedIn, and WhatsApp.
              {!reachEnabled && <span className="text-amber-400 ml-1 font-mono text-[11px]">(Click any plan below or press "+ ADD REACH" to include)</span>}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  id: 'basic' as VisualFidelity,
                  name: 'Basic',
                  desc: 'Paid ad campaign setup and management across social platforms to drive targeted traffic and leads.',
                  priceLabel: '+₹10000 / monthly ad',
                  icon: Target,
                },
                {
                  id: 'standard' as VisualFidelity,
                  name: 'Standard',
                  desc: 'Daily posting and active community engagement across Facebook, Instagram.',
                  priceLabel: '+₹9000 / monthly ad',
                  icon: MessageCircle,
                },
                {
                  id: 'complete' as VisualFidelity,
                  name: 'Complete',
                  desc: 'Full-service social media management — content calendar, creative design, ad campaigns, engagement, and monthly performance reporting, all in one.',
                  priceLabel: '+₹18000 / monthly ad',
                  icon: Crown,
                },
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = reachEnabled && fidelity === item.id;
                return (
                  <button
                    id={`btn-fidelity-${item.id}`}
                    key={item.id}
                    onClick={() => handleSelectReachPlan(item.id)}
                    className={`flex flex-col justify-between text-left p-5 rounded-xl border transition-all duration-300 h-full relative cursor-pointer ${
                      isSelected
                        ? accentColor === 'cyber_amber' ? 'border-amber-500 bg-amber-500/5' :
                          accentColor === 'toxic_green' ? 'border-emerald-500 bg-emerald-500/5' :
                          accentColor === 'neon_cobalt' ? 'border-blue-500 bg-blue-500/5' :
                          'border-zinc-300 bg-white/5'
                        : reachEnabled
                          ? 'border-zinc-900 bg-zinc-950/20 text-neutral-400 hover:border-zinc-800'
                          : 'border-zinc-900/60 bg-zinc-950/10 text-neutral-500 opacity-70 hover:opacity-100 hover:border-zinc-800'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Icon className={`w-4 h-4 ${isSelected ? getAccentText() : 'text-neutral-500'}`} />
                        {isSelected && (
                          <div className={`w-2.5 h-2.5 rounded-full ${getAccentBg()}`} />
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white flex items-center justify-between">
                          <span>{item.name}</span>
                          {!reachEnabled && <span className="text-[9px] font-mono text-neutral-500 font-normal uppercase">+ Add</span>}
                        </h4>
                        <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-zinc-900 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                      {item.priceLabel}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Side: Estimated Outputs & Statistics */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="rounded-2xl border border-zinc-800 bg-[#080808] p-6 md:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-white/5 to-transparent pointer-events-none" />

            <AnimatePresence mode="wait">
              {!specLocked ? (
                <motion.div
                  key="calc-form-metrics"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 block">
                      ENGINE_ESTIMATE_OUTPUT
                    </span>
                    <h3 className="font-display text-xl font-bold text-white">
                      PROJECT SPECIFICATION MATRIX
                    </h3>
                  </div>

                  {/* Pricing Section */}
                  <div className="bg-neutral-900/50 rounded-xl p-6 border border-zinc-900 space-y-1.5 text-center md:text-left">
                    <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider block">
                      PROJECTED INVESTMENT
                    </span>
                    <div className="flex items-baseline justify-center md:justify-start gap-2">
                      <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        ₹{stats.price.toLocaleString('en-IN')}
                      </span>
                      <span className="font-mono text-xs text-neutral-500 font-semibold uppercase">
                        INR ESTIMATE
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-normal pt-1.5 border-t border-zinc-900">
                      Includes complete integration, responsive architecture, and dedicated setup.
                    </p>
                  </div>

                  {/* Duration Metric */}
                  <div className="bg-neutral-900/30 rounded-xl p-4 border border-zinc-900 space-y-1">
                    <div className="flex items-center gap-1.5 font-mono text-[9px] text-neutral-500 uppercase">
                      <Timer className="w-3.5 h-3.5" />
                      <span>Estimated Duration</span>
                    </div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="block text-2xl font-bold text-white tracking-tight">
                        {stats.weeks} {stats.weeks === 1 ? 'Week' : 'Weeks'}
                      </span>
                      {(scope === 'growth' || scope === 'smart') && (
                        <span className="text-[11px] font-mono text-amber-400 font-medium">
                          + ₹1000/mo maintenance fee
                        </span>
                      )}
                    </div>
                    <span className="block text-[10px] text-neutral-400">
                      Agile sprint delivery timeline
                    </span>
                  </div>

                  {/* Recommended Tech Stack */}
                  <div className="space-y-2.5">
                    <span className="font-mono text-[10px] uppercase text-neutral-500 tracking-wider block">
                      COMPILATION TARGET STACK
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {stats.techStack.map(tech => (
                        <span
                          key={tech}
                          className={`font-mono text-[10px] px-2.5 py-1 rounded-lg border font-medium ${getAccentBgLight()}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Submit / Call To Action CTA */}
                  <button
                    id="btn-configurator-submit"
                    onClick={() => {
                      setSpecLocked(true);
                    }}
                    className={`w-full py-4 px-6 rounded-xl text-center font-bold text-xs uppercase tracking-widest text-black shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center justify-center gap-2 ${getAccentBg()}`}
                  >
                    <CreditCard className="w-4 h-4" />
                    LOCK SPECIFICATION
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="calc-success-matrix"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-center py-4"
                >
                  <CheckCircle className={`w-12 h-12 mx-auto ${getAccentText()} animate-pulse`} />
                  <div className="space-y-1">
                    <h4 className="font-display text-lg font-bold text-white">
                      SPECIFICATION LOCKED
                    </h4>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">
                      SECURED TRANSMISSION MATRIX
                    </span>
                  </div>

                  <div className="bg-[#050505] p-5 rounded-xl border border-zinc-900 text-left space-y-3 font-mono text-[11px]">
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                      <span className="text-zinc-500">SELECTED PACKAGE</span>
                      <span className="text-white font-bold uppercase">{scope}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                      <span className="text-zinc-500">REACH MODULE</span>
                      <span className="text-white font-bold uppercase">
                        {reachEnabled ? fidelity : 'NOT INCLUDED'}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                      <span className="text-zinc-500">ESTIMATED DURATION</span>
                      <span className="text-white font-bold uppercase">
                        {stats.weeks} {stats.weeks === 1 ? 'Week' : 'Weeks'}
                        {(scope === 'growth' || scope === 'smart') ? ' (+ ₹1000/mo maintenance)' : ''}
                      </span>
                    </div>

                    <div className="flex justify-between text-white font-bold text-xs pt-1">
                      <span className={getAccentText()}>ESTIMATED BUDGET</span>
                      <span className="text-sm">₹{stats.price.toLocaleString('en-IN')} INR</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed px-2">
                    Our engineering desk has synchronized this architecture blueprint. Enter your name in the transmitter below to complete commission routes.
                  </p>

                  <div className="flex gap-3">
                    <button
                      id="btn-unlock-spec"
                      onClick={() => setSpecLocked(false)}
                      className="flex-1 py-3 px-4 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white rounded-xl text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Modify Parameters
                    </button>
                    <a
                      href="#contact-section"
                      className={`flex-1 py-3 px-4 text-center rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider text-black transition-transform duration-300 hover:scale-[1.03] flex items-center justify-center gap-1.5 ${getAccentBg()}`}
                    >
                      Transmit Now
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-center items-center gap-1.5 font-mono text-[9px] text-neutral-500 uppercase">
              <Info className="w-3 h-3" />
              <span>Specs can be modified during kick-off</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
