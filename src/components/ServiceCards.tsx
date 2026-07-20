import React from 'react';
import { motion } from 'motion/react';
import { Globe, Activity, Cpu, ArrowUpRight, ShieldCheck, Zap, Layers } from 'lucide-react';
import { AccentColor } from '../types';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techSpecs: string[];
  metrics: { label: string; value: string };
  icon: React.ComponentType<{ className?: string }>;
}

interface ServiceCardsProps {
  accentColor: AccentColor;
  onCardHover: (isHovering: boolean) => void;
  onSelectService: (serviceTitle: string) => void;
}

const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Bespoke Frontend Engineering',
    subtitle: 'Microscopic Precision & Motion',
    description: 'We build high-fidelity, tailored React and TypeScript single-page experiences and full-stack systems. Every layout undergoes exhaustive pixel-level alignments and motion synchronization to match premium high-fashion or deep tech branding.',
    techSpecs: ['React 19', 'TypeScript', 'Vite', 'Motion Engine', 'Tailwind CSS'],
    metrics: { label: 'Interactive Frame Rate', value: '60 FPS' },
    icon: Globe,
  },
  {
    id: 's2',
    title: 'Sensory 3D Interactions',
    subtitle: 'Dynamic Mathematical Matrices',
    description: 'Immersive digital products implementing custom projective 3D vector canvases, fluid physics solvers, and vector gravity systems. We translate static, conventional layouts into responsive, interactive landscapes.',
    techSpecs: ['HTML5 Canvas 2D/3D', 'Perspective Projection', 'Custom Solvers', 'Linear Algebra'],
    metrics: { label: 'Animation Overhead', value: '< 2.5ms' },
    icon: Activity,
  },
  {
    id: 's3',
    title: 'High-Performance Architecture',
    subtitle: 'Lighthouse Compliant Core',
    description: 'A structural emphasis on performance. We bundle using ultra-aggressive compression matrices, serverless edge networks, and optimal caching protocols to ensure flawless, immediate visual loads anywhere in the world.',
    techSpecs: ['esbuild bundling', 'Edge Gateways', 'Zero-CLS layouts', 'Asset Pipeling'],
    metrics: { label: 'Average LCP Speed', value: '0.4s' },
    icon: Cpu,
  },
];

export default function ServiceCards({ accentColor, onCardHover, onSelectService }: ServiceCardsProps) {
  
  const getAccentBorder = (hovered: boolean) => {
    if (!hovered) return 'border-zinc-900';
    switch (accentColor) {
      case 'cyber_amber': return 'border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.15)]';
      case 'toxic_green': return 'border-emerald-500/50 shadow-[0_0_15px_rgba(34,197,94,0.15)]';
      case 'neon_cobalt': return 'border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.15)]';
      case 'pure_mono':
      default: return 'border-zinc-700 shadow-[0_0_15px_rgba(255,255,255,0.05)]';
    }
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
      case 'cyber_amber': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'toxic_green': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'neon_cobalt': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'pure_mono':
      default: return 'bg-white/5 text-neutral-200 border-white/15';
    }
  };

  return (
    <div id="services-section" className="space-y-12 max-w-7xl mx-auto px-4 md:px-8">
      {/* Services Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-900 pb-8">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className={`h-1.5 w-1.5 rounded-full ${
              accentColor === 'cyber_amber' ? 'bg-amber-500' :
              accentColor === 'toxic_green' ? 'bg-emerald-500' :
              accentColor === 'neon_cobalt' ? 'bg-blue-500' :
              'bg-white'
            }`} />
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
              CORE CAPABILITIES
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            ENGINEERING SPECTACLES
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            We operate at the narrow intersection of visual art and technical precision. We reject templates, off-the-shelf component frameworks, and bloated libraries, crafting all components custom.
          </p>
        </div>
        
        {/* Decorative Grid Indicator */}
        <div className="hidden lg:flex items-center gap-6 font-mono text-[10px] text-neutral-500 border-l border-zinc-900 pl-6 py-2">
          <div className="space-y-1">
            <span className="block text-neutral-400">MATRIX STATE</span>
            <span className="block font-bold text-white uppercase">{accentColor.replace('_', ' ')}</span>
          </div>
          <div className="space-y-1">
            <span className="block text-neutral-400">FRAME RATIO</span>
            <span className="block font-bold text-white">60 HZ LOCKED</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              id={`service-card-${service.id}`}
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onMouseEnter={() => {
                onCardHover(true);
              }}
              onMouseLeave={() => {
                onCardHover(false);
              }}
              className="group relative flex flex-col justify-between rounded-2xl border border-zinc-900 bg-zinc-950/20 p-8 backdrop-blur-xl transition-all duration-500 hover:border-zinc-800 hover:bg-zinc-900/10 hover:-translate-y-1"
              style={{
                borderWidth: '1px',
              }}
            >
              {/* Card Glow Marker */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-6">
                {/* Icon & Anchor Link */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl border border-zinc-900 bg-zinc-950 text-neutral-300 group-hover:text-white transition-colors duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <button
                    id={`btn-select-service-${service.id}`}
                    onClick={() => onSelectService(service.title)}
                    className="p-1.5 rounded-lg border border-zinc-900 bg-zinc-950/40 text-neutral-500 hover:text-white hover:bg-zinc-950 transition-all duration-300 group-hover:border-zinc-800 cursor-pointer"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Service Header Text */}
                <div className="space-y-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                    {service.subtitle}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Service Description */}
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Technical Specifications Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.techSpecs.map(tech => (
                    <span
                      key={tech}
                      className="font-mono text-[9px] px-2.5 py-1 rounded-full border border-zinc-900 bg-zinc-950/80 text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service Footer Metrics */}
              <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center justify-between text-xs font-mono">
                <div className="space-y-0.5">
                  <span className="block text-[9px] text-neutral-500 uppercase">
                    {service.metrics.label}
                  </span>
                  <span className="block font-bold text-white">
                    {service.metrics.value}
                  </span>
                </div>

                <button
                  id={`btn-configurator-direct-${service.id}`}
                  onClick={() => onSelectService(service.title)}
                  className={`px-3 py-1.5 rounded-lg border text-[10px] uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${getAccentBg()}`}
                >
                  Configure Spec
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-zinc-900">
        <div className="flex items-center gap-3.5 bg-zinc-950/30 p-5 rounded-xl border border-zinc-900">
          <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-900 text-neutral-400">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
              Performance Standard
            </h4>
            <p className="text-sm font-semibold text-white">
              Lighthouse score guaranteed 95+
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3.5 bg-zinc-950/30 p-5 rounded-xl border border-zinc-900">
          <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-900 text-neutral-400">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
              Design Authenticity
            </h4>
            <p className="text-sm font-semibold text-white">
              Zero template libraries used
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3.5 bg-zinc-950/30 p-5 rounded-xl border border-zinc-900">
          <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-900 text-neutral-400">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
              Engineering Delivery
            </h4>
            <p className="text-sm font-semibold text-white">
              Complete, audited typescript core
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
