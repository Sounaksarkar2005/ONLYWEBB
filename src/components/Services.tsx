export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop space-y-section-gap">
      {/* Service 1: Web Development */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-6 lg:order-2">
          <div className="glass-panel rounded-xl p-8 relative overflow-hidden group glow-effect">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 group-hover:bg-primary/10 transition-colors duration-500"></div>
            <span className="inline-block bg-surface-variant text-on-surface text-label-sm px-3 py-1 rounded-full mb-6 uppercase border border-outline-variant">01 / Engineering</span>
            <h2 className="text-headline-lg text-on-surface mb-4">Web Development</h2>
            <p className="text-body-md text-on-surface-variant mb-6">
              High-performance, scalable architectures built with modern frameworks. We construct robust digital platforms that are secure, lightning-fast, and optimized for seamless user experiences across all devices.
            </p>
            <ul className="space-y-3 mb-8 text-label-sm text-on-surface">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                React & Next.js Ecosystems
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                Headless CMS Integration
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                WebGL & Motion Engine Experiences
              </li>
            </ul>
            <a href="#configurator-anchor" className="inline-flex items-center gap-2 text-label-sm text-primary uppercase hover:text-primary-fixed transition-colors">
              Explore Technical Specs <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 lg:order-1 relative h-[500px] rounded-xl overflow-hidden glass-panel flex items-center justify-center p-6 bg-neutral-950/60 border border-white/10">
          {/* Sleek Dark Developer Code & Architecture Terminal Card */}
          <div className="w-full h-full rounded-lg bg-[#0a0a0e] border border-neutral-800 p-6 font-mono text-xs text-neutral-300 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="text-neutral-500 text-[11px] ml-2">architecture.config.ts</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">LIVE ENGINE</span>
            </div>

            <div className="space-y-2 py-4 text-[11px] leading-relaxed text-neutral-400">
              <p><span className="text-purple-400">import</span> &#123; <span className="text-blue-300">createHighPerformanceEngine</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'@onlywebb/core'</span>;</p>
              <p className="pt-2"><span className="text-purple-400">export const</span> <span className="text-yellow-300">pipelineConfig</span> = &#123;</p>
              <p className="pl-4">framework: <span className="text-emerald-300">'React 19 / TypeScript'</span>,</p>
              <p className="pl-4">rendering: <span className="text-emerald-300">'SSR + Edge Hydration'</span>,</p>
              <p className="pl-4">lighthouseScore: <span className="text-amber-400">100</span>,</p>
              <p className="pl-4">securityLevel: <span className="text-emerald-300">'Enterprise Grade'</span>,</p>
              <p>&#125;;</p>
            </div>

            <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-[10px] text-neutral-500">
              <span>BUNDLED IN 0.24s</span>
              <span className="text-white font-semibold">60 FPS LOCKED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service 2: Lead Generation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center mt-section-gap">
        <div className="lg:col-span-5">
          <div className="glass-panel rounded-xl p-8 relative overflow-hidden group glow-effect border-l-4 border-l-secondary-container">
            <span className="inline-block bg-surface-variant text-on-surface text-label-sm px-3 py-1 rounded-full mb-6 uppercase border border-outline-variant">02 / Growth</span>
            <h2 className="text-headline-lg text-on-surface mb-4">Lead Generation</h2>
            <p className="text-body-md text-on-surface-variant mb-6">
              Data-driven acquisition funnels designed to convert. We leverage behavioral psychology and precision targeting to fill your pipeline with high-intent prospects, maximizing ROI on every campaign.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-surface-container p-4 rounded-lg border border-white/5">
                <div className="text-secondary text-headline-lg mb-1">3x</div>
                <div className="text-label-sm text-on-surface-variant">Avg. Conversion Lift</div>
              </div>
              <div className="bg-surface-container p-4 rounded-lg border border-white/5">
                <div className="text-secondary text-headline-lg mb-1">-40%</div>
                <div className="text-label-sm text-on-surface-variant">Cost Per Acq.</div>
              </div>
            </div>
            <a href="#contact-section" className="inline-flex items-center gap-2 text-label-sm text-secondary uppercase hover:text-secondary-fixed transition-colors">
              Initiate Project Brief <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-7 relative h-[500px] rounded-xl overflow-hidden glass-panel flex items-center justify-center p-6 bg-neutral-950/60 border border-white/10">
          {/* Conversion Telemetry & Growth Visualizer Panel */}
          <div className="w-full h-full rounded-lg bg-[#0a0a0e] border border-neutral-800 p-6 flex flex-col justify-between shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 font-mono text-xs">
              <span className="text-neutral-300 font-semibold uppercase">LEAD FUNNEL TELEMETRY</span>
              <span className="text-emerald-400 font-mono text-[11px]">+248% CONVERSION RATE</span>
            </div>

            {/* Visual Analytics Bars */}
            <div className="space-y-4 py-4">
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                  <span>HIGH-INTENT PROSPECTS</span>
                  <span className="text-white font-bold">8,490 / MO</span>
                </div>
                <div className="w-full h-2 rounded-full bg-neutral-900 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[88%]" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                  <span>QUALIFIED BRIEF TRANSMISSIONS</span>
                  <span className="text-white font-bold">1,820 / MO</span>
                </div>
                <div className="w-full h-2 rounded-full bg-neutral-900 overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full w-[65%]" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                  <span>ACQUISITION COST OPTIMIZATION</span>
                  <span className="text-white font-bold">99.4% OPTIMAL</span>
                </div>
                <div className="w-full h-2 rounded-full bg-neutral-900 overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full w-[94%]" />
                </div>
              </div>
            </div>

            <div className="p-3 rounded bg-neutral-900/80 border border-white/5 font-mono text-[10px] text-neutral-400 flex items-center justify-between">
              <span>REAL-TIME ATTRIBUTION SOLVER</span>
              <span className="text-emerald-400">ACTIVE Sync</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service 3: Social Media Management */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center mt-section-gap">
        <div className="lg:col-span-6 lg:order-2">
          <div className="glass-panel rounded-xl p-8 relative overflow-hidden group glow-effect">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 group-hover:bg-primary/10 transition-colors duration-500"></div>
            <span className="inline-block bg-surface-variant text-on-surface text-label-sm px-3 py-1 rounded-full mb-6 uppercase border border-outline-variant">03 / Engagement</span>
            <h2 className="text-headline-lg text-on-surface mb-4">Social Media Management</h2>
            <p className="text-body-md text-on-surface-variant mb-6">
              Strategic brand positioning across all major social platforms. We build hyper-engaged communities through viral content creation, algorithmic optimization, and authentic audience interaction.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-surface-container p-4 rounded-lg border border-white/5">
                <div className="text-primary text-headline-lg mb-1">+150%</div>
                <div className="text-label-sm text-on-surface-variant">Engagement Rate</div>
              </div>
              <div className="bg-surface-container p-4 rounded-lg border border-white/5">
                <div className="text-primary text-headline-lg mb-1">24/7</div>
                <div className="text-label-sm text-on-surface-variant">Brand Monitoring</div>
              </div>
            </div>
            <a href="#contact-section" className="inline-flex items-center gap-2 text-label-sm text-primary uppercase hover:text-primary-fixed transition-colors">
              Explore Campaigns <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 lg:order-1 relative h-[500px] rounded-xl overflow-hidden glass-panel flex items-center justify-center p-6 bg-neutral-950/60 border border-white/10">
          <div 
            className="w-full h-full rounded-lg bg-cover bg-center mix-blend-screen opacity-90 border border-neutral-800" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
