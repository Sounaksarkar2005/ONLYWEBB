import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'dashboard-analytics',
    title: 'Centefields Digital Dashboard',
    subtitle: 'Financial analytics & team management platform',
    category: 'UI/UX Design',
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'A comprehensive Web app dashboard built for enterprise financial forecasting, real-time analytics, and operational metrics visualization.',
    fullDetails: {
      overview: 'Centefields Digital commissioned a full overhaul of their legacy data platform to provide real-time transaction telemetry, predictive revenue modeling, and multi-tenant workspace permissions.',
      challenge: 'Managing over 250 data points simultaneously without inducing visual fatigue or slowing browser performance on lower-tier hardware.',
      solution: 'Designed a modular grid system with customized high-contrast data cards, dark mode optimized charts, and progressive disclosure for complex sub-metrics.',
      deliverables: ['UI/UX Design System', 'Interactive Prototype', 'React Component Library', 'Design Tokens'],
      year: '2025',
      client: 'Centefields Ltd.',
      role: 'Lead Product Designer & Frontend Developer',
      tools: ['Figma', 'React', 'Tailwind CSS', 'Recharts'],
      liveUrl: 'https://example.com/centefields'
    },
    featuredInHero: true,
    fanAngle: -14,
    fanOffsetY: 28,
    badgeText: 'Analytics Platform'
  },
  {
    id: 'plant-workspace-design',
    title: 'Botanical Workspace & Studio',
    subtitle: 'Sustainable interior architecture and biophilic study',
    category: 'Architecture',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Biophilic studio spatial design created to foster creative deep focus and natural air filtration for high-performance design teams.',
    fullDetails: {
      overview: 'An experimental 3,500 sq ft creative studio space built in Stockholm, integrating living plant ecosystems, sound-dampening acoustic panels, and natural sunlight routing.',
      challenge: 'Balancing high-density working space needs with natural lighting angles and humidity preservation for indoor fauna.',
      solution: 'Custom modular wooden desks paired with vertical garden partitions that provide privacy while maintaining open air movement.',
      deliverables: ['3D Spatial Renderings', 'Material Specification', 'Lighting Plan'],
      year: '2024',
      client: 'Nordic Creative Guild',
      role: 'Spatial Designer',
      tools: ['Rhino', 'V-Ray', 'Sketchup']
    },
    featuredInHero: true,
    fanAngle: -10,
    fanOffsetY: 18,
    badgeText: 'Studio Design'
  },
  {
    id: 'code-editor-theme',
    title: 'Obsidian Developer Environment',
    subtitle: 'Next-gen code IDE interface & developer tools',
    category: 'Web Apps',
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Minimalist code interface tailored for full-stack engineers with intelligent syntax highlight contrast and embedded AI assistance.',
    fullDetails: {
      overview: 'Obsidian IDE reimagines the modern coding environment with distraction-free typography, context-aware command palettes, and instant compiler diagnostics.',
      challenge: 'Reducing screen clutter and tab fatigue for developers working with large microservice repositories.',
      solution: 'Implemented collapsible sidebar trees, semantic color palettes, and single-click split panel view management.',
      deliverables: ['IDE Theme Package', 'UI Toolkit', 'VS Code Extension'],
      year: '2025',
      client: 'Open Source Community',
      role: 'UI/UX Engineer',
      tools: ['TypeScript', 'Electron', 'Tailwind CSS']
    },
    featuredInHero: true,
    fanAngle: -6,
    fanOffsetY: 10,
    badgeText: 'IDE Platform'
  },
  {
    id: 'minimal-chair-furniture',
    title: 'Form & Function Lounge Series',
    subtitle: 'Ergonomic seating collection for modern interiors',
    category: 'Architecture',
    coverImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Precision engineered lounge seating crafted from recycled aluminum and Scandinavian oak wood.',
    fullDetails: {
      overview: 'A sustainable furniture design project exploring minimal line profiles without compromising lumbar support or durability.',
      challenge: 'Achieving structural stability with ultrathin 12mm metal profiles.',
      solution: 'Internal tension rod geometry reinforced with aerospace-grade joinery.',
      deliverables: ['Industrial Design Prototypes', 'Manufacturing CAD Files', 'Product Catalog'],
      year: '2024',
      client: 'Studio Malmö',
      role: 'Industrial Product Designer',
      tools: ['SolidWorks', 'KeyShot']
    },
    featuredInHero: true,
    fanAngle: -2,
    fanOffsetY: 4,
    badgeText: 'Minimal Form'
  },
  {
    id: 'illustrator-typography-poster',
    title: 'Illustrator Scalable Typography',
    subtitle: 'Brand identity & vector graphics poster campaign',
    category: 'Graphic Design',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Vector artwork and typography poster design celebrating vector precision: "Illustrator is all around you. Drawings, Logos, Type. All perfectly scalable."',
    fullDetails: {
      overview: 'A visual celebration of typographic structure, vector curves, and color gradients designed for creative studios and design exhibitions worldwide.',
      challenge: 'Creating a high-impact artwork that remains crisp at billboard dimensions while maintaining subtle paper texture details.',
      solution: 'Custom mathematical Bézier curve grid combined with bespoke serif display typeface design.',
      deliverables: ['Exhibition Posters', 'Digital Brand Assets', 'Motion Design Vignettes'],
      year: '2025',
      client: 'Creative Type Foundry',
      role: 'Art Director & Typographer',
      tools: ['Adobe Illustrator', 'InDesign', 'After Effects']
    },
    featuredInHero: true,
    fanAngle: 2,
    fanOffsetY: 0,
    badgeText: 'Drawings. Logos. Type.'
  },
  {
    id: 'pink-art-direction',
    title: 'Magenta Expressionism & Editorial',
    subtitle: 'Visual art direction and editorial fashion photography',
    category: 'Photography',
    coverImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Vibrant studio photo series exploring tactile human interaction, color contrast, and bold backdrop compositions.',
    fullDetails: {
      overview: 'Commissioned editorial shoot featuring monochrome pink palettes, gesture photography, and sculptural studio lighting.',
      challenge: 'Capturing precise skin tone fidelity under saturated monochromatic lighting gels.',
      solution: 'Custom color grading profiles and dual-source continuous strobe balancing.',
      deliverables: ['Print Lookbook', 'Editorial Magazine Spread', 'Social Media Campaign'],
      year: '2025',
      client: 'Vogue Culture Magazine',
      role: 'Creative Director & Photographer',
      tools: ['Hasselblad H6D', 'Capture One', 'Photoshop']
    },
    featuredInHero: true,
    fanAngle: 6,
    fanOffsetY: 8,
    badgeText: 'Editorial Photo'
  },
  {
    id: 'urban-staircase-architecture',
    title: 'Monolithic Urban Geometry',
    subtitle: 'Architectural study of concrete and steel forms',
    category: 'Architecture',
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Dramatic architectural photography documenting structural stairways, industrial facades, and shadow play in urban capitals.',
    fullDetails: {
      overview: 'A photographic journey through modern European architecture, capturing the interplay between brutalist concrete and human scale.',
      challenge: 'Executing long-exposure shots in public spaces without intrusive tourist crowds.',
      solution: 'Dawn scouting combined with neutral density filter long exposures.',
      deliverables: ['Fine Art Print Edition', 'Architectural Monograph'],
      year: '2024',
      client: 'Architectural Digest Series',
      role: 'Architectural Photographer',
      tools: ['Leica SL2', 'Lightroom Classic']
    },
    featuredInHero: true,
    fanAngle: 10,
    fanOffsetY: 16,
    badgeText: 'Urban Geometry'
  },
  {
    id: 'wood-interior-workspace',
    title: 'Minimalist Loft & Craft Setup',
    subtitle: 'Natural timber interiors and focus workspace',
    category: 'Architecture',
    coverImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Warm timber paneling and clean workspace aesthetics designed for focus, reflection, and analog craftsmanship.',
    fullDetails: {
      overview: 'An interior restoration project converting an 1890s industrial grain warehouse into a contemporary living studio.',
      challenge: 'Preserving historical brick walls while installing modern insulation and concealed wiring.',
      solution: 'Custom cedar wood wall cladding with integrated ambient LED channels.',
      deliverables: ['Architectural Layout', 'Lighting Diagram', 'Custom Woodwork Sketches'],
      year: '2024',
      client: 'Private Residence',
      role: 'Interior Architect',
      tools: ['Autocad', 'Sketchup']
    },
    featuredInHero: true,
    fanAngle: 14,
    fanOffsetY: 24,
    badgeText: 'Loft Interior'
  },
  {
    id: 'blue-typography-brand',
    title: 'Azure Scalable Systems',
    subtitle: 'Brand design system and typographic scale',
    category: 'Brand Identity',
    coverImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Deep indigo and cyan visual language exploring digital brand guidelines and geometric layout systems.',
    fullDetails: {
      overview: 'Complete visual identity reboot for Azure Cloud Labs, establishing a clean typographic hierarchy and cohesive design language across physical and digital mediums.',
      challenge: 'Ensuring seamless visual consistency across 40+ global web applications and marketing collateral.',
      solution: 'A unified design system with tokens for spacing, typography, colors, and motion patterns.',
      deliverables: ['Brand Guidelines Book', 'Figma UI Library', 'Design Tokens Schema'],
      year: '2025',
      client: 'Azure Cloud Labs',
      role: 'Design System Architect',
      tools: ['Figma', 'Style Dictionary', 'Storybook']
    },
    featuredInHero: true,
    fanAngle: 18,
    fanOffsetY: 32,
    badgeText: 'Design System'
  },
  {
    id: 'mobile-fintech-app',
    title: 'Vanguard Mobile Pay',
    subtitle: 'Next-gen seamless mobile payment experience',
    category: 'UI/UX Design',
    coverImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'An intuitive mobile wallet and peer-to-peer payment app focusing on instant card tap actions and transparent fee breakdowns.',
    fullDetails: {
      overview: 'Reimagining mobile banking with micro-interactions, biometrics auth, and smart spending categorization.',
      challenge: 'Making complex international cross-currency wire transfers feel instant and effortless.',
      solution: 'Streamlined 3-step checkout flow with real-time exchange rate visualizer.',
      deliverables: ['iOS App Design', 'Android Material Guidelines', 'Motion Specs'],
      year: '2025',
      client: 'Vanguard Pay',
      role: 'Lead Mobile UI Designer',
      tools: ['Figma', 'Protopie']
    },
    featuredInHero: false
  },
  {
    id: '3d-abstract-sculpture',
    title: 'Chromasphere 3D Motion',
    subtitle: 'Generative 3D shaders and fluid motion graphics',
    category: 'Graphic Design',
    coverImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Experimental 3D fluid simulations and procedural shader textures created for tech keynotes and digital billboards.',
    fullDetails: {
      overview: '3D abstract motion artwork rendered in high dynamic range for multi-screen ambient installations.',
      challenge: 'Real-time ray tracing rendering constraints for 60fps ambient displays.',
      solution: 'Optimized Octane render pipelines and custom displacement maps.',
      deliverables: ['Looping 4K Videos', 'High-Res Print Artwork'],
      year: '2025',
      client: 'Neo Arts Festival',
      role: '3D Motion Designer',
      tools: ['Cinema 4D', 'Octane Render', 'After Effects']
    },
    featuredInHero: false
  },
  {
    id: 'neomorphic-audio-suite',
    title: 'Aura Sound Synthesizer',
    subtitle: 'Audio workstation interface and digital instrument',
    category: 'Web Apps',
    coverImage: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'In-browser WebAudio synthesizer with real-time waveform visualizer, tactile rotary knobs, and MIDI support.',
    fullDetails: {
      overview: 'A digital audio workstation built for browser-native music production without external plugin requirements.',
      challenge: 'Achieving low-latency WebAudio processing alongside 60fps canvas visualizer animations.',
      solution: 'Offloaded audio synthesis to Web Workers and utilized WebGL for hardware-accelerated spectrum rendering.',
      deliverables: ['Web App Architecture', 'UI/UX Specs', 'WebAudio Engine'],
      year: '2025',
      client: 'Aura Audio Tech',
      role: 'Full Stack UI Developer',
      tools: ['React', 'WebAudio API', 'Three.js']
    },
    featuredInHero: false
  }
];

export const HERO_PROJECTS = PROJECTS.filter(p => p.featuredInHero);
