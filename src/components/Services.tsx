export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop space-y-12 sm:space-y-16 md:space-y-section-gap">
      {/* Service 1: Web Development */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-gutter items-center">
        <div className="lg:col-span-6 lg:order-2">
          <div className="glass-panel rounded-xl p-5 sm:p-6 md:p-8 relative overflow-hidden group glow-effect">
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
            <a href="#contact-section" className="inline-flex items-center gap-2 text-label-sm text-primary uppercase hover:text-primary-fixed transition-colors">
              Get In Touch <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 lg:order-1 relative h-[260px] sm:h-[360px] md:h-[460px] lg:h-[500px] rounded-xl overflow-hidden glass-panel flex items-center justify-center p-2 bg-neutral-950/60 border border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2564&auto=format&fit=crop" 
            alt="A laptop computer with a bunch of different screens on top of it" 
            className="w-full h-full object-cover rounded-lg border border-neutral-800"
          />
        </div>
      </div>

      {/* Service 2: Lead Generation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-gutter items-center mt-12 sm:mt-16 md:mt-section-gap">
        <div className="lg:col-span-5">
          <div className="glass-panel rounded-xl p-5 sm:p-6 md:p-8 relative overflow-hidden group glow-effect border-l-4 border-l-secondary-container">
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
        <div className="lg:col-span-7 relative h-[260px] sm:h-[360px] md:h-[460px] lg:h-[500px] rounded-xl overflow-hidden glass-panel flex items-center justify-center p-2 bg-neutral-950/60 border border-white/10">
          <img 
            src="/social-engagement-telemetry.svg" 
            alt="Social Engagement Telemetry" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Service 3: Social Media Management */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-gutter items-center mt-12 sm:mt-16 md:mt-section-gap">
        <div className="lg:col-span-6 lg:order-2">
          <div className="glass-panel rounded-xl p-5 sm:p-6 md:p-8 relative overflow-hidden group glow-effect">
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
        <div className="lg:col-span-6 lg:order-1 relative min-h-[360px] sm:min-h-[420px] lg:h-[500px] rounded-xl overflow-hidden glass-panel flex items-center justify-center p-4 sm:p-6 bg-neutral-950/60 border border-white/10">
          <div className="w-full h-full rounded-lg bg-[#0a0a0e] border border-neutral-800 p-6 flex flex-col justify-between shadow-2xl relative">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 font-mono text-xs">
              <span className="text-neutral-300 font-semibold uppercase tracking-wider">SOCIAL MEDIA HUB</span>
              <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                CAMPAIGNS ACTIVE
              </span>
            </div>

            {/* Social Platform Metric Cards */}
            <div className="space-y-4 py-3 font-mono text-xs">
              
              {/* WhatsApp Item */}
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-white/5 flex items-center justify-between group hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.486 1.332 5.004L2 22l5.127-1.343c1.464.798 3.114 1.218 4.881 1.218h.004c5.503 0 9.987-4.479 9.988-9.984 0-2.667-1.038-5.174-2.924-7.06A9.923 9.923 0 0 0 12.012 2zm.004 18.172h-.003a8.31 8.31 0 0 1-4.24-1.164l-.304-.181-3.149.824.84-3.072-.199-.317a8.307 8.307 0 0 1-1.272-4.463c.002-4.582 3.73-8.31 8.314-8.31 2.22 0 4.307.865 5.875 2.435a8.27 8.27 0 0 1 2.433 5.874c-.002 4.583-3.73 8.311-8.312 8.311zm4.557-6.223c-.25-.125-1.478-.728-1.707-.811-.229-.084-.396-.125-.562.125-.166.25-.646.811-.791.978-.146.166-.292.187-.542.062-.25-.125-1.055-.389-2.01-1.24-.743-.663-1.245-1.48-1.39-1.73-.146-.25-.016-.385.109-.509.113-.112.25-.292.375-.438.125-.146.166-.25.25-.417.084-.167.042-.313-.021-.438-.063-.125-.562-1.353-.77-1.853-.203-.488-.41-.422-.562-.43-.145-.008-.312-.01-.479-.01-.167 0-.437.063-.666.313-.229.25-.875.854-.875 2.083s.895 2.417 1.02 2.583c.125.167 1.762 2.691 4.269 3.774.596.257 1.062.411 1.425.526.598.19 1.142.163 1.572.099.48-.071 1.478-.604 1.686-1.187.208-.584.208-1.084.146-1.188-.063-.104-.229-.167-.479-.292z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs">WhatsApp Business</div>
                    <div className="text-[10px] text-neutral-400">Direct Funnel & Support</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-400 font-bold text-xs">+340%</div>
                  <div className="text-[9px] text-neutral-500">Inbound Leads</div>
                </div>
              </div>

              {/* Instagram Item */}
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-white/5 flex items-center justify-between group hover:border-pink-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/20">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs">Instagram Growth</div>
                    <div className="text-[10px] text-neutral-400">Reels & Audience Reach</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-pink-400 font-bold text-xs">48.2K</div>
                  <div className="text-[9px] text-neutral-500">Monthly Reach</div>
                </div>
              </div>

              {/* Twitter / X Item */}
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-white/5 flex items-center justify-between group hover:border-sky-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs">Twitter (X) Velocity</div>
                    <div className="text-[10px] text-neutral-400">Brand Authority & Viral Posts</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sky-400 font-bold text-xs">12.8%</div>
                  <div className="text-[9px] text-neutral-500">Eng. Rate</div>
                </div>
              </div>

            </div>

            {/* Footer status */}
            <div className="pt-3 border-t border-neutral-800 flex items-center justify-between font-mono text-[10px] text-neutral-500">
              <span>MULTI-CHANNEL MANAGEMENT</span>
              <span className="text-white font-semibold uppercase">24/7 BRAND AUTOMATION</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
