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
                WebGL & Three.js Experiences
              </li>
            </ul>
            <a href="#" className="inline-flex items-center gap-2 text-label-sm text-primary uppercase hover:text-primary-fixed transition-colors">
              Explore Technical Specs <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 lg:order-1 relative h-[500px] rounded-xl overflow-hidden glass-panel flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-radial from-secondary/5 to-transparent"></div>
          <div 
            className="w-full h-full grayscale bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBIhcWLXpDGsnzOu8Hun7BxFqhlni6Z6oa1Jc7udN6m7ttgJiU2oU1ZCc9AO6yfXvuvccmAQKLJPIQWcTX6NFPykB-F4oYTaSvdjZBkpD7A0WXJ-xPiXmPU5Idf9V5rARx-w4oTRstb2W4-8wsVxspWiQ74ItefTfOlFDvR_OJd6YD5uPaFNpj9no4kgYTxUd6bjdxhacEtPFndrRabvdHtrMLiNx21Ld1uOmioKx2j_vAsXVTRQedL_Q')" }}
          ></div>
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
            <a href="#" className="inline-flex items-center gap-2 text-label-sm text-secondary uppercase hover:text-secondary-fixed transition-colors">
              View Case Studies <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-7 relative h-[500px] rounded-xl overflow-hidden glass-panel flex items-center justify-center p-8">
          <div 
            className="w-full h-full rounded-lg grayscale bg-cover bg-center" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_blCcSoEFuj2CMxNEXNM-6hdo2ZKJAqUALySADAW-obIYUHaFFWSq9pEDDw5s6FVJEfoZDzCk15GwJZcz0lCJuMrt7UeCEXiZSmatz7-JeMS47yx0bWvHjqjsDYFiihTJuElCaePunFfo9uaio1qCPmc7Aso8-r8XhxISqNq22N5h631w4RxJZaFcNomO9ipgECbniBA9bCh81_56EotamDxOTaUINPmKq9xzi4VDNqr2Tw24xUqTmA')" }}
          ></div>
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
            <a href="#" className="inline-flex items-center gap-2 text-label-sm text-primary uppercase hover:text-primary-fixed transition-colors">
              Explore Campaigns <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 lg:order-1 relative h-[500px] rounded-xl overflow-hidden glass-panel flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-radial from-secondary/5 to-transparent"></div>
          {/* Using an abstract image representing social/network/engagement in the same aesthetic */}
          <div 
            className="w-full h-full grayscale bg-cover bg-center mix-blend-screen opacity-90" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')" }}
          ></div>
        </div>
      </div>
    </section>
  );
}
