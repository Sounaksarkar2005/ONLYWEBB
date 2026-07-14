export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 rounded-full mt-4 flex justify-between items-center max-w-7xl mx-auto px-gutter py-4 bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-primary/10 shadow-lg">
      <div className="text-headline-lg font-bold tracking-tighter text-on-surface ml-4">
        ONLYWEBB
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 uppercase">Home</a>
        <a href="#" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 uppercase">About</a>
        <a href="#" className="text-label-sm text-primary font-bold border-b-2 border-primary pb-1 uppercase relative">
          Services
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_#ffffff]"></span>
        </a>
        <a href="#" className="text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 uppercase">Portfolio</a>
      </nav>
      <button className="hidden md:flex items-center gap-2 bg-primary rounded-full px-6 py-3 text-label-sm text-on-primary uppercase font-bold border border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 mr-2">
        Start A Project
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
      </button>
      <button className="md:hidden text-on-surface p-2 mr-2">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
}
