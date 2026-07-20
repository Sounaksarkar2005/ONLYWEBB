import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Info, Server, Sparkles, Database, Code, Sliders, Timer, Compass, CreditCard, CheckCircle } from 'lucide-react';
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
    complexityContribution: 15,
  },
  {
    id: 'vector_math',
    name: 'Custom Vector Math Simulation Physics',
    description: 'High-performance math modules mapping custom coordinate physics directly inside responsive HTML5 canvases.',
    price: 3200,
    complexityContribution: 25,
  },
  {
    id: 'edge_cache',
    name: 'Multi-Region Edge Routing Optimization',
    description: 'Redistributes site asset files using robust CDN rules for zero-CLS immediate visual responses.',
    price: 1400,
    complexityContribution: 10,
  },
  {
    id: 'auth_db',
    name: 'Bespoke Auth & Persistent Room State',
    description: 'Connects standard secure authentication and document databases (like Firestore) for multi-user session storage.',
    price: 2500,
    complexityContribution: 20,
  },
];

export default function ServiceConfigurator({ accentColor, initialServiceFocus }: ServiceConfiguratorProps) {
  const [scope, setScope] = useState<ProjectScope>('immersive_spa');
  const [fidelity, setFidelity] = useState<VisualFidelity>('interactive_3d');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['vector_math']);
  const [specLocked, setSpecLocked] = useState(false);

  // If initialServiceFocus matches something, we can adapt the settings
  useEffect(() => {
    if (initialServiceFocus) {
      if (initialServiceFocus.includes('Frontend')) {
        setScope('immersive_spa');
        setFidelity('minimalist');
      } else if (initialServiceFocus.includes('3D')) {
        setScope('immersive_spa');
        setFidelity('interactive_3d');
        if (!selectedAddOns.includes('vector_math')) {
          setSelectedAddOns(prev => [...prev, 'vector_math']);
        }
      } else if (initialServiceFocus.includes('Performance') || initialServiceFocus.includes('Architecture')) {
        setScope('fullstack_portal');
        setFidelity('brutalist_cyber');
        if (!selectedAddOns.includes('edge_cache')) {
          setSelectedAddOns(prev => [...prev, 'edge_cache']);
        }
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
    let baseComplexity = 30;
    let baseWeeks = 4;

    switch (scope) {
      case 'monolith':
        basePrice = 4500;
        baseComplexity = 20;
        baseWeeks = 3;
        break;
      case 'immersive_spa':
        basePrice = 8200;
        baseComplexity = 45;
        baseWeeks = 6;
        break;
      case 'fullstack_portal':
        basePrice = 12500;
        baseComplexity = 65;
        baseWeeks = 9;
        break;
    }

    switch (fidelity) {
      case 'minimalist':
        basePrice += 1000;
        baseComplexity += 5;
        baseWeeks += 1;
        break;
      case 'interactive_3d':
        basePrice += 4000;
        baseComplexity += 25;
        baseWeeks += 3;
        break;
      case 'brutalist_cyber':
        basePrice += 2500;
        baseComplexity += 15;
        baseWeeks += 2;
        break;
    }

    // Addons contribution
    const addOnsCost = ADD_ONS.filter(a => selectedAddOns.includes(a.id)).reduce((sum, a) => sum + a.price, 0);
    const addOnsComplexity = ADD_ONS.filter(a => selectedAddOns.includes(a.id)).reduce((sum, a) => sum + a.complexityContribution, 0);

    const totalCost = basePrice + addOnsCost;
    const totalComplexity = Math.min(100, baseComplexity + addOnsComplexity);
    const totalWeeks = baseWeeks + Math.round(addOnsComplexity / 10);

    // Tech stack mapping based on selections
    const techStack = ['React 19', 'TypeScript', 'Tailwind CSS'];
    if (scope === 'fullstack_portal' || selectedAddOns.includes('api_gateway') || selectedAddOns.includes('auth_db')) {
      techStack.push('Express Server');
    }
    if (fidelity === 'interactive_3d' || selectedAddOns.includes('vector_math')) {
      techStack.push('HTML5 Canvas');
      techStack.push('Vector Math Matrix');
    }
    if (selectedAddOns.includes('edge_cache')) {
      techStack.push('Edge CDN CD');
    }
    if (selectedAddOns.includes('auth_db')) {
      techStack.push('Firebase Admin');
    }

    return {
      price: totalCost,
      complexity: totalComplexity,
      weeks: totalWeeks,
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
          Tweak the operational parameters, select visual fidelities, and stack additional modules. Our specification engine automatically estimates structural complexity, ideal technical integrations, and development scopes in real-time.
        </p>
      </div>

      {/* Main Grid: Options on left, Output Stats on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Parameters Inputs */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Step 1: Project Scope */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-neutral-700 bg-neutral-900 text-white font-bold text-[9px]">
                01
              </span>
              <span>Project Scope & Base Architecture</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  id: 'monolith' as ProjectScope,
                  name: 'Standard Monolith',
                  desc: 'Perfect for landing portfolios or localized services.',
                  priceLabel: 'Base $4,500',
                  icon: Code,
                },
                {
                  id: 'immersive_spa' as ProjectScope,
                  name: 'Immersive App',
                  desc: 'Bespoke reactive canvas elements and micro-motion.',
                  priceLabel: 'Base $8,200',
                  icon: Sparkles,
                },
                {
                  id: 'fullstack_portal' as ProjectScope,
                  name: 'Full-Stack Portal',
                  desc: 'High-concurrency servers, document databases and proxies.',
                  priceLabel: 'Base $12,500',
                  icon: Server,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    id={`btn-scope-${item.id}`}
                    key={item.id}
                    onClick={() => {
                      setScope(item.id);
                      setSpecLocked(false);
                    }}
                    className={`flex flex-col justify-between text-left p-5 rounded-xl border bg-zinc-950/20 hover:bg-zinc-900/10 transition-all duration-300 h-full relative group cursor-pointer ${
                      scope === item.id
                        ? accentColor === 'cyber_amber' ? 'border-amber-500 bg-amber-500/5' :
                          accentColor === 'toxic_green' ? 'border-emerald-500 bg-emerald-500/5' :
                          accentColor === 'neon_cobalt' ? 'border-blue-500 bg-blue-500/5' :
                          'border-zinc-300 bg-white/5'
                        : 'border-zinc-900 text-neutral-400'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Icon className={`w-4 h-4 ${scope === item.id ? getAccentText() : 'text-neutral-500'}`} />
                        {scope === item.id && (
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

          {/* Step 2: Visual Fidelity */}
          <div className="space-y-4 pt-4 border-t border-zinc-900">
            <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-neutral-700 bg-neutral-900 text-white font-bold text-[9px]">
                02
              </span>
              <span>Visual Fidelity & Art Direction</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  id: 'minimalist' as VisualFidelity,
                  name: 'Neo-Minimalist',
                  desc: 'Clinical spacing, fine wireframes, off-white text focus.',
                  priceLabel: '+$1,000',
                },
                {
                  id: 'interactive_3d' as VisualFidelity,
                  name: 'Vector Canvas 3D',
                  desc: 'Dynamic rotating mathematical canvas matrix background.',
                  priceLabel: '+$4,000',
                },
                {
                  id: 'brutalist_cyber' as VisualFidelity,
                  name: 'Brutalist Cyber',
                  desc: 'Solid structural borders, monospace logs, high-contrast overlay.',
                  priceLabel: '+$2,500',
                },
              ].map((item) => (
                <button
                  id={`btn-fidelity-${item.id}`}
                  key={item.id}
                  onClick={() => {
                    setFidelity(item.id);
                    setSpecLocked(false);
                  }}
                  className={`flex flex-col justify-between text-left p-5 rounded-xl border bg-zinc-950/20 hover:bg-zinc-900/10 transition-all duration-300 h-full relative cursor-pointer ${
                    fidelity === item.id
                      ? accentColor === 'cyber_amber' ? 'border-amber-500 bg-amber-500/5' :
                        accentColor === 'toxic_green' ? 'border-emerald-500 bg-emerald-500/5' :
                        accentColor === 'neon_cobalt' ? 'border-blue-500 bg-blue-500/5' :
                        'border-zinc-300 bg-white/5'
                      : 'border-zinc-900 text-neutral-400'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-white">{item.name}</h4>
                      {fidelity === item.id && (
                        <div className={`w-2.5 h-2.5 rounded-full ${getAccentBg()}`} />
                      )}
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-zinc-900 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                    {item.priceLabel}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Addon integrations */}
          <div className="space-y-4 pt-4 border-t border-zinc-900">
            <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-neutral-700 bg-neutral-900 text-white font-bold text-[9px]">
                03
              </span>
              <span>Additional Systems Integration</span>
            </div>

            <div className="space-y-3">
              {ADD_ONS.map((addon) => {
                const isSelected = selectedAddOns.includes(addon.id);
                return (
                  <button
                    id={`btn-addon-toggle-${addon.id}`}
                    key={addon.id}
                    onClick={() => {
                      toggleAddOn(addon.id);
                      setSpecLocked(false);
                    }}
                    className={`flex items-center justify-between text-left p-4 rounded-xl border transition-all duration-300 w-full group cursor-pointer ${
                      isSelected
                        ? accentColor === 'cyber_amber' ? 'border-amber-500/30 bg-amber-500/5' :
                          accentColor === 'toxic_green' ? 'border-emerald-500/30 bg-emerald-500/5' :
                          accentColor === 'neon_cobalt' ? 'border-blue-500/30 bg-blue-500/5' :
                          'border-zinc-300 bg-white/5'
                        : 'border-zinc-900 bg-zinc-950/20 text-neutral-400 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-start gap-3.5 pr-4">
                      <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? getAccentBg() + ' border-transparent text-black'
                          : 'border-neutral-700 bg-neutral-950'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-bold text-sm text-white group-hover:text-white transition-colors">
                          {addon.name}
                        </h4>
                        <p className="text-xs text-neutral-400 max-w-xl leading-normal">
                          {addon.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right shrink-0">
                      <span className="block font-mono text-xs text-white font-semibold">
                        +${addon.price.toLocaleString()}
                      </span>
                      <span className="block font-mono text-[9px] text-neutral-500 uppercase tracking-widest mt-0.5">
                        +{addon.complexityContribution}% Complexity
                      </span>
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
                        ${stats.price.toLocaleString()}
                      </span>
                      <span className="font-mono text-xs text-neutral-500 font-semibold uppercase">
                        USD BASE
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-normal pt-1.5 border-t border-zinc-900">
                      Includes absolute visual ownership, bespoke asset setups, and rigorous edge testing.
                    </p>
                  </div>

                  {/* Duration & Complexity Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-neutral-900/30 rounded-xl p-4 border border-zinc-900 space-y-1">
                      <div className="flex items-center gap-1.5 font-mono text-[9px] text-neutral-500 uppercase">
                        <Timer className="w-3.5 h-3.5" />
                        <span>Duration</span>
                      </div>
                      <span className="block text-2xl font-bold text-white tracking-tight">
                        {stats.weeks} Weeks
                      </span>
                      <span className="block text-[10px] text-neutral-400">
                        Agile sprints cycle
                      </span>
                    </div>

                    <div className="bg-neutral-900/30 rounded-xl p-4 border border-zinc-900 space-y-1">
                      <div className="flex items-center gap-1.5 font-mono text-[9px] text-neutral-500 uppercase">
                        <Compass className="w-3.5 h-3.5" />
                        <span>Complexity</span>
                      </div>
                      <span className="block text-2xl font-bold text-white tracking-tight">
                        {stats.complexity}%
                      </span>
                      {/* Micro complexity bar */}
                      <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden mt-1">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${getAccentBg()}`}
                          style={{ width: `${stats.complexity}%` }}
                        />
                      </div>
                    </div>
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
                      <span className="text-zinc-500">BASE ARCHITECTURE</span>
                      <span className="text-white font-bold uppercase">{scope.replace('_', ' ')}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                      <span className="text-zinc-500">VISUAL STYLE</span>
                      <span className="text-white font-bold uppercase">{fidelity.replace('_', ' ')}</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                      <span className="text-zinc-500">ADDITIONAL PLUGINS</span>
                      <span className="text-white font-bold">{selectedAddOns.length} MODULES</span>
                    </div>
                    <div className="flex justify-between text-white font-bold text-xs pt-1">
                      <span className={getAccentText()}>ESTIMATED BUDGET</span>
                      <span className="text-sm">${stats.price.toLocaleString()} USD</span>
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
