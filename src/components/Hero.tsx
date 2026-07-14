export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap relative">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-[614px]">
        <div className="lg:col-span-7 z-10">
          <span className="text-label-sm text-primary uppercase tracking-widest mb-4 block">Digital Alchemy</span>
          <h1 className="text-display-lg text-on-surface mb-6 uppercase">
            Our <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</span>
          </h1>
          <p className="text-body-md text-on-surface-variant max-w-xl mb-8">
            We don't just build websites; we engineer digital ecosystems designed for explosive growth and sustained dominance in the modern landscape.
          </p>
        </div>
        <div className="lg:col-span-5 relative h-full min-h-[400px]">
          <div 
            className="absolute inset-0 w-full h-full mix-blend-screen opacity-80 grayscale bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCfBFhlbKxHR3fXFRAOy3TZF0GerdZ_jake-9xZv18AO3wHNmA49AwqZ4rMyG_935TUKOVIyWPa59kK0OLs6SpBzusKy0a4GlFW9AYW3dMy_L7gNQoEihXtB-9fQlu3m_fWYP38TJa4eZUn_OnX1CdNmMQBQzEDPwlFuI5dcR2ac6FVu71lVqnZrJ8avfYAUP4v_pl8seI5G1hO1RuGiBYpgq72bkiqbpGKJn2I7K4dOtg6LddUGmKBqQ')" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
