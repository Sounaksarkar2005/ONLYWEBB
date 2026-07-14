export default function CTA() {
  return (
    <section className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop mt-section-gap text-center relative z-20 mb-section-gap">
      <div className="glass-panel rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-bright/20 via-transparent to-surface-container/20 mix-blend-overlay"></div>
        <h2 className="text-headline-lg text-on-surface mb-6 uppercase relative z-10">Ready to Initiate?</h2>
        <p className="text-body-md text-on-surface-variant mb-10 max-w-2xl mx-auto relative z-10">
          Partner with ONLYWEBB to architect your digital future. Our systems are built for those who demand excellence.
        </p>
        <button className="relative z-10 bg-primary rounded-full px-8 py-4 text-label-sm text-on-primary uppercase font-bold border border-white/20 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300">
          Start Your Project Now
        </button>
      </div>
    </section>
  );
}
