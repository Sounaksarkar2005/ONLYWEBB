export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mb-12 sm:mb-16 md:mb-section-gap relative">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-[300px] md:min-h-[420px]">
        <div className="lg:col-span-12 z-10 space-y-6">
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
      </div>
    </section>
  );
}
