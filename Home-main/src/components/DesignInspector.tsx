import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sliders, BookOpen, Sparkles, Cpu, Eye, Check, X, Info, Activity, Globe, MousePointer } from 'lucide-react';
import { CanvasConfig, AccentColor, VisualStyle } from '../types';

interface DesignInspectorProps {
  config: CanvasConfig;
  setConfig: React.Dispatch<React.SetStateAction<CanvasConfig>>;
  accentColor: AccentColor;
  setAccentColor: (color: AccentColor) => void;
}

export default function DesignInspector({ config, setConfig, accentColor, setAccentColor }: DesignInspectorProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'concept' | 'controls' | 'integration'>('concept');

  const updateConfig = <K extends keyof CanvasConfig>(key: K, value: CanvasConfig[K]) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const getAccentLabel = (color: AccentColor) => {
    switch (color) {
      case 'cyber_amber': return 'Cyber Amber';
      case 'toxic_green': return 'Toxic Green';
      case 'neon_cobalt': return 'Neon Cobalt';
      case 'pure_mono':
      default: return 'Pure Monochrome';
    }
  };

  const accentClasses = {
    pure_mono: 'bg-white text-black ring-white',
    cyber_amber: 'bg-amber-500 text-black ring-amber-500',
    toxic_green: 'bg-emerald-500 text-black ring-emerald-500',
    neon_cobalt: 'bg-blue-500 text-black ring-blue-500',
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          id="btn-toggle-design-inspector"
          onClick={() => setIsOpen(prev => !prev)}
          className={`flex items-center gap-2 px-4 py-3 rounded-full border bg-neutral-900/90 text-white shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
            accentColor === 'cyber_amber' ? 'border-amber-500/30 hover:border-amber-500' :
            accentColor === 'toxic_green' ? 'border-emerald-500/30 hover:border-emerald-500' :
            accentColor === 'neon_cobalt' ? 'border-blue-500/30 hover:border-blue-500' :
            'border-white/10 hover:border-white/30'
          }`}
        >
          {isOpen ? <X className="w-4 h-4" /> : <Sliders className="w-4 h-4" />}
          <span className="font-mono text-xs uppercase tracking-widest font-medium">
            {isOpen ? 'Close Console' : 'Design Concept Console'}
          </span>
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              accentColor === 'cyber_amber' ? 'bg-amber-400' :
              accentColor === 'toxic_green' ? 'bg-emerald-400' :
              accentColor === 'neon_cobalt' ? 'bg-blue-400' :
              'bg-white'
            }`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${
              accentColor === 'cyber_amber' ? 'bg-amber-500' :
              accentColor === 'toxic_green' ? 'bg-emerald-500' :
              accentColor === 'neon_cobalt' ? 'bg-blue-500' :
              'bg-white'
            }`}></span>
          </span>
        </button>
      </div>

      {/* Main Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="panel-design-inspector"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/95 shadow-2xl backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 px-6 py-4 bg-neutral-900/40">
              <div className="flex items-center gap-3">
                <div className={`p-1.5 rounded-lg border ${
                  accentColor === 'cyber_amber' ? 'bg-amber-950/30 border-amber-500/20 text-amber-500' :
                  accentColor === 'toxic_green' ? 'bg-emerald-950/30 border-emerald-500/20 text-emerald-500' :
                  accentColor === 'neon_cobalt' ? 'bg-blue-950/30 border-blue-500/20 text-blue-500' :
                  'bg-white/5 border-white/10 text-white'
                }`}>
                  <Sliders className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-white tracking-wide">
                    DESIGN CONCEPT CONSOLE
                  </h3>
                  <p className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">
                    Interactive Showcase Inspector
                  </p>
                </div>
              </div>
              <button
                id="btn-close-console-header"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-white/5 px-4 bg-neutral-900/20 font-mono text-xs">
              <button
                id="tab-btn-concept"
                onClick={() => setActiveTab('concept')}
                className={`flex items-center gap-1.5 px-4 py-3 border-b-2 font-medium tracking-wider transition-colors cursor-pointer ${
                  activeTab === 'concept'
                    ? accentColor === 'cyber_amber' ? 'border-amber-500 text-amber-500' :
                      accentColor === 'toxic_green' ? 'border-emerald-500 text-emerald-500' :
                      accentColor === 'neon_cobalt' ? 'border-blue-500 text-blue-500' :
                      'border-white text-white'
                    : 'border-transparent text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                CONCEPT LOOK
              </button>
              <button
                id="tab-btn-integration"
                onClick={() => setActiveTab('integration')}
                className={`flex items-center gap-1.5 px-4 py-3 border-b-2 font-medium tracking-wider transition-colors cursor-pointer ${
                  activeTab === 'integration'
                    ? accentColor === 'cyber_amber' ? 'border-amber-500 text-amber-500' :
                      accentColor === 'toxic_green' ? 'border-emerald-500 text-emerald-500' :
                      accentColor === 'neon_cobalt' ? 'border-blue-500 text-blue-500' :
                      'border-white text-white'
                    : 'border-transparent text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                INTEGRATION
              </button>
              <button
                id="tab-btn-controls"
                onClick={() => setActiveTab('controls')}
                className={`flex items-center gap-1.5 px-4 py-3 border-b-2 font-medium tracking-wider transition-colors cursor-pointer ${
                  activeTab === 'controls'
                    ? accentColor === 'cyber_amber' ? 'border-amber-500 text-amber-500' :
                      accentColor === 'toxic_green' ? 'border-emerald-500 text-emerald-500' :
                      accentColor === 'neon_cobalt' ? 'border-blue-500 text-blue-500' :
                      'border-white text-white'
                    : 'border-transparent text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                SIMULATOR
              </button>
            </div>

            {/* Scrollable Tab Content */}
            <div className="max-h-[380px] overflow-y-auto p-6 space-y-5">
              
              {/* Tab: Concept */}
              {activeTab === 'concept' && (
                <div id="inspector-tab-concept" className="space-y-4 animate-fade-in text-neutral-300">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 text-neutral-400" />
                      Sleek Grayscale Visual Design
                    </div>
                    <p className="text-sm leading-relaxed">
                      The visual direction implements a commanding, minimalist monochrome aesthetics. By confining the layout to strict black, deep charcoals, pure whites, and clinical grays, the app invokes an atmosphere of hyper-professionalism, engineering accuracy, and digital craftsmanship. This avoids cheap, over-saturated gradients, establishing maturity and confidence.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                      <Activity className="w-3 h-3 text-neutral-400" />
                      Dynamic Vector 3D Particles
                    </div>
                    <p className="text-sm leading-relaxed">
                      The background animation runs on a custom 3D projection mathematical system. It transforms 3D Cartesian coordinates <code className="text-xs bg-white/5 px-1 py-0.5 rounded text-neutral-200 font-mono">[X, Y, Z]</code> onto a fluid 2D canvas dynamically, implementing matrix rotations. These particles act as an abstract metaphor for interconnected servers, distributed nodes, and neural pathways.
                    </p>
                  </div>

                  <div className="bg-neutral-900/60 p-4 rounded-xl border border-white/5 flex gap-3">
                    <Info className="w-4 h-4 shrink-0 text-neutral-400 mt-0.5" />
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] uppercase font-bold text-neutral-200 tracking-wider block">
                        CHOOSE A ACCENT HIGHLIGHT
                      </span>
                      <p className="text-xs text-neutral-400 leading-normal mb-3">
                        Test how a concentrated neon accent color transforms a solid monochrome layout.
                      </p>
                      
                      {/* Swatches */}
                      <div className="flex flex-wrap gap-2">
                        {(['pure_mono', 'cyber_amber', 'toxic_green', 'neon_cobalt'] as AccentColor[]).map((col) => (
                          <button
                            id={`swatch-${col}`}
                            key={col}
                            onClick={() => setAccentColor(col)}
                            className={`flex items-center gap-1 px-2.5 py-1 rounded-full font-mono text-[10px] border transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
                              accentColor === col
                                ? 'bg-white/10 border-white text-white'
                                : 'bg-neutral-950 border-white/10 text-neutral-400 hover:border-white/20'
                            }`}
                          >
                            <span className={`w-2 h-2 rounded-full ${
                              col === 'pure_mono' ? 'bg-white' :
                              col === 'cyber_amber' ? 'bg-amber-500' :
                              col === 'toxic_green' ? 'bg-emerald-500' :
                              'bg-blue-500'
                            }`} />
                            {col === 'pure_mono' ? 'Mono' : col === 'cyber_amber' ? 'Amber' : col === 'toxic_green' ? 'Green' : 'Blue'}
                            {accentColor === col && <Check className="w-2.5 h-2.5 ml-0.5" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab: Integration */}
              {activeTab === 'integration' && (
                <div id="inspector-tab-integration" className="space-y-4 animate-fade-in text-neutral-300">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                      <MousePointer className="w-3.5 h-3.5" />
                      Seamless UI Integration
                    </div>
                    <p className="text-sm leading-relaxed">
                      Rather than placing a disjointed video or a heavy WebGL file in the background, our custom-programmed background integrates directly into the UI layers. Structural container lines are drawn with matching grid dimensions <code className="text-xs bg-white/5 px-1 py-0.5 rounded text-neutral-200 font-mono">40px</code>, blending grid overlays with physical canvas particles.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                      <Sliders className="w-3.5 h-3.5" />
                      Interactivity and Attention Guiding
                    </div>
                    <p className="text-sm leading-relaxed">
                      Moving the cursor creates physical gravity disturbances in the network. If set to <strong className="text-neutral-100">Repel</strong>, nodes slide elegantly away from the cursor to guarantee perfect typography legibility. If set to <strong className="text-neutral-100">Attract</strong> or <strong className="text-neutral-100">Gravity Wave</strong>, the network forms magnetic vortexes behind your movements, drawing visual focus to key call-to-actions.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                      <Globe className="w-3.5 h-3.5" />
                      Micro-animations Synchronized
                    </div>
                    <p className="text-sm leading-relaxed text-xs text-neutral-400">
                      Exploring different section features (such as hovering service cards) increases the global physics kinetic simulation multiplier on the canvas, delivering instant, cohesive tactile feedback across structural layers.
                    </p>
                  </div>
                </div>
              )}

              {/* Tab: Simulator Controls */}
              {activeTab === 'controls' && (
                <div id="inspector-tab-controls" className="space-y-5 animate-fade-in">
                  <div className="space-y-2">
                    <label className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                      <span>Background Space Flow</span>
                      <span className={`px-2 py-0.5 rounded text-white font-semibold text-[8px] uppercase ${
                        accentColor === 'cyber_amber' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                        accentColor === 'toxic_green' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                        accentColor === 'neon_cobalt' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                        'bg-white/5 text-white border border-white/10'
                      }`}>
                        {config.style.replace('_', ' ')}
                      </span>
                    </label>
                    <div className="grid grid-cols-4 gap-1.5">
                      {(['constellation', 'quantum_field', 'hyper_helix', 'wireframe_3d'] as VisualStyle[]).map(style => (
                        <button
                          id={`btn-geometry-${style}`}
                          key={style}
                          onClick={() => updateConfig('style', style)}
                          className={`py-2 px-1 rounded-lg border text-center font-mono text-[8px] uppercase tracking-wider transition-all cursor-pointer ${
                            config.style === style
                              ? accentColor === 'cyber_amber' ? 'bg-amber-500/10 border-amber-500 text-amber-400' :
                                accentColor === 'toxic_green' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' :
                                accentColor === 'neon_cobalt' ? 'bg-blue-500/10 border-blue-500 text-blue-400' :
                                'bg-white/10 border-white text-white'
                              : 'bg-neutral-900/40 border-white/5 text-neutral-500 hover:border-white/10 hover:text-neutral-300'
                          }`}
                        >
                          {style.replace('_', ' ')}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3D Hologram Object Controls */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <label className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                      <span>3D Hologram Shape</span>
                      <span className={`px-2 py-0.5 rounded text-white font-semibold text-[8px] uppercase ${
                        accentColor === 'cyber_amber' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                        accentColor === 'toxic_green' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                        accentColor === 'neon_cobalt' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                        'bg-white/5 text-white border border-white/10'
                      }`}>
                        {config.object3DType}
                      </span>
                    </label>
                    <div className="grid grid-cols-5 gap-1">
                      {([ 'none', 'icosahedron', 'dodecahedron', 'tesseract', 'topo_blob' ] as const).map(shape => (
                        <button
                          id={`btn-shape-${shape}`}
                          key={shape}
                          onClick={() => updateConfig('object3DType', shape)}
                          className={`py-1.5 px-0.5 rounded-lg border text-center font-mono text-[7px] uppercase tracking-wider transition-all cursor-pointer ${
                            config.object3DType === shape
                              ? accentColor === 'cyber_amber' ? 'bg-amber-500/10 border-amber-500 text-amber-400' :
                                accentColor === 'toxic_green' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' :
                                accentColor === 'neon_cobalt' ? 'bg-blue-500/10 border-blue-500 text-blue-400' :
                                'bg-white/10 border-white text-white'
                              : 'bg-neutral-900/40 border-white/5 text-neutral-500 hover:border-white/10 hover:text-neutral-300'
                          }`}
                        >
                          {shape === 'topo_blob' ? 'blob' : shape}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Range Slider: Hologram Scale */}
                  {config.object3DType !== 'none' && (
                    <div className="space-y-1.5 animate-fade-in">
                      <div className="flex justify-between font-mono text-[10px] text-neutral-400">
                        <span>HOLOGRAM SCALE</span>
                        <span className="text-white font-mono">{config.object3DScale.toFixed(2)}x</span>
                      </div>
                      <input
                        id="range-object3d-scale"
                        type="range"
                        min="0.4"
                        max="2.0"
                        step="0.1"
                        value={config.object3DScale}
                        onChange={(e) => updateConfig('object3DScale', parseFloat(e.target.value))}
                        className="w-full accent-white bg-neutral-800 rounded-lg appearance-none h-1 cursor-pointer"
                      />
                    </div>
                  )}

                  {/* Range Slider: Node Count */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between font-mono text-[10px] text-neutral-400">
                      <span>PARTICLE DENSITY</span>
                      <span className="text-white font-mono">{config.particleCount} nodes</span>
                    </div>
                    <input
                      id="range-particle-count"
                      type="range"
                      min={config.style === 'quantum_field' ? 60 : 30}
                      max={config.style === 'quantum_field' ? 300 : 250}
                      value={config.particleCount}
                      onChange={(e) => updateConfig('particleCount', parseInt(e.target.value))}
                      className="w-full accent-white bg-neutral-800 rounded-lg appearance-none h-1 cursor-pointer"
                    />
                  </div>

                  {/* Range Slider: Speed */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between font-mono text-[10px] text-neutral-400">
                      <span>SIMULATION SPEED</span>
                      <span className="text-white font-mono">{config.speed.toFixed(1)}x</span>
                    </div>
                    <input
                      id="range-simulation-speed"
                      type="range"
                      min="0.1"
                      max="3"
                      step="0.1"
                      value={config.speed}
                      onChange={(e) => updateConfig('speed', parseFloat(e.target.value))}
                      className="w-full accent-white bg-neutral-800 rounded-lg appearance-none h-1 cursor-pointer"
                    />
                  </div>

                  {/* Range Slider: Connection Distance */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between font-mono text-[10px] text-neutral-400">
                      <span>CONNECT RANGE</span>
                      <span className="text-white font-mono">{config.connectionDistance}px</span>
                    </div>
                    <input
                      id="range-connect-distance"
                      type="range"
                      min="30"
                      max="200"
                      value={config.connectionDistance}
                      onChange={(e) => updateConfig('connectionDistance', parseInt(e.target.value))}
                      className="w-full accent-white bg-neutral-800 rounded-lg appearance-none h-1 cursor-pointer"
                    />
                  </div>

                  {/* Physics Mode Interaction */}
                  <div className="space-y-2">
                    <span className="block font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                      CURSOR PHYSICS GRAVITY
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {(['repel', 'attract', 'gravity_wave'] as ('repel' | 'attract' | 'gravity_wave')[]).map(mode => (
                        <button
                          id={`btn-physics-mode-${mode}`}
                          key={mode}
                          onClick={() => updateConfig('interactiveMode', mode)}
                          className={`py-1.5 rounded-lg border text-center font-mono text-[9px] uppercase tracking-wider transition-all cursor-pointer ${
                            config.interactiveMode === mode
                              ? 'bg-white/10 border-white text-white'
                              : 'bg-neutral-900/40 border-white/5 text-neutral-500 hover:border-white/10'
                          }`}
                        >
                          {mode.replace('_', ' ')}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Toggle Controls: lines and glow */}
                  <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/5">
                    <label className="flex items-center justify-between cursor-pointer select-none">
                      <span className="font-mono text-[10px] text-neutral-400 uppercase">SHOW COUPLINGS</span>
                      <input
                        id="checkbox-show-lines"
                        type="checkbox"
                        checked={config.showLines}
                        onChange={(e) => updateConfig('showLines', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="relative w-9 h-5 bg-neutral-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-400 peer-checked:after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-600"></div>
                    </label>

                    <label className="flex items-center justify-between cursor-pointer select-none">
                      <span className="font-mono text-[10px] text-neutral-400 uppercase">GLOW FLUX</span>
                      <input
                        id="checkbox-glow-flux"
                        type="checkbox"
                        checked={config.glowEffect}
                        onChange={(e) => updateConfig('glowEffect', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="relative w-9 h-5 bg-neutral-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-neutral-400 peer-checked:after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-600"></div>
                    </label>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Metrics */}
            <div className="border-t border-white/5 bg-neutral-950 px-6 py-4 flex items-center justify-between text-[10px] font-mono text-neutral-400">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span>SYSTEM STATE: RECEPTIVE</span>
              </div>
              <div>
                <span>ACCENT_MODE: {getAccentLabel(accentColor).toUpperCase()}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
