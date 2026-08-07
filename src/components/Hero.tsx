export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap relative">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-[450px]">
        <div className="lg:col-span-7 z-10 space-y-6">
          <span className="text-label-sm text-primary uppercase tracking-widest block font-mono">
            Digital Engineering Studio
          </span>
          <h1 className="text-display-lg text-on-surface uppercase leading-tight font-display">
            OUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
              SERVICES
            </span>
          </h1>
          <p className="text-body-md text-on-surface-variant max-w-xl leading-relaxed">
            We don't just build websites; we engineer digital ecosystems designed for explosive growth, pixel precision, and sustained dominance in the modern web landscape.
          </p>
        </div>

        {/* Visual Engine Display Card */}
        <div className="lg:col-span-5 relative h-full min-h-[320px] flex items-center justify-center">
          <div className="w-full h-full rounded-2xl bg-[#09090d] border border-neutral-800/90 p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-xl">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 font-mono text-xs">
              <span className="text-neutral-400 font-medium uppercase tracking-wider">CAPABILITIES SYSTEM</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="space-y-3 py-6 font-mono text-xs text-neutral-300">
              <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/80 border border-white/5">
                <span>01. Bespoke Frontend</span>
                <span className="text-white font-bold">React 19</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/80 border border-white/5">
                <span>02. Lead Generation</span>
                <span className="text-emerald-400 font-bold">3x Conversion</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/80 border border-white/5">
                <span>03. Growth Marketing</span>
                <span className="text-blue-400 font-bold">24/7 Scale</span>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-800 flex items-center justify-between font-mono text-[10px] text-neutral-500 uppercase">
              <span>ONLYWEBB CORE ARCHITECTURE</span>
              <span>v2.4 ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
