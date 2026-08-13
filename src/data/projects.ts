import { Project } from '../types/portfolio';

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
    featuredInHero: false,
    badgeText: 'Analytics Platform'
  },
  {
    id: 'plant-workspace-design',
    title: 'Botanical Workspace & Studio',
    subtitle: 'Sustainable interior architecture and biophilic study',
    category: 'Lifestyle',
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
    featuredInHero: false,
    badgeText: 'Studio Design'
  },
  {
    id: 'code-editor-theme',
    title: 'E-Commerce Website',
    subtitle: 'High-conversion online store & digital marketplace',
    category: 'Web Apps',
    coverImage: '/img6.png',
    galleryImages: [
      '/img6.png'
    ],
    description: 'Minimalist code interface tailored for full-stack engineers with intelligent syntax highlight contrast and embedded AI assistance.',
    fullDetails: {
      overview: 'This Project reimagines the modern e-commerce storefront with distraction-free typography, fast shopping cart flows, and responsive UI components.',
      challenge: 'Reducing screen clutter and tab fatigue for developers working with large microservice repositories.',
      solution: 'Implemented collapsible sidebar trees, semantic color palettes, and single-click split panel view management.',
      deliverables: ['IDE Theme Package', 'UI Toolkit', 'VS Code Extension'],
      year: '2025',
      client: 'ResiNova',
      role: 'UI/UX Engineer',
      tools: ['TypeScript', 'Tailwind CSS', 'React'],
      liveUrl: 'https://resinovabyasmita.vercel.app/'
    },
    featuredInHero: true,
    fanAngle: -10,
    fanOffsetY: 16,
    badgeText: 'IDE Platform'
  },
  {
    id: 'minimal-chair-furniture',
    title: 'Industrial Website',
    subtitle: 'Robust digital platform for manufacturing & industrial enterprises',
    category: 'Lifestyle',
    coverImage: '/img7.png',
    galleryImages: [
      '/img7.png'
    ],
    description: 'An automated resume analysis and ATS optimization system designed to help professionals craft high-impact resumes with clear feedback and bullet critiques.',
    fullDetails: {
      overview: 'An AI-assisted resume reviewing and ATS alignment platform designed around professional minimalism, focused critique flows, and keyword coverage.',
      challenge: 'Parsing complex resume formatting structures while providing instant, actionable ATS feedback without noisy visual clutter.',
      solution: 'Engineered a streamlined review interface featuring automated keyword coverage analysis, XYZ bullet critique scoring, and parser-safe formatting guidelines.',
      deliverables: ['ATS Audit Engine', 'Resume Reviewer Dashboard', 'Impact Analysis Tool'],
      year: '2025',
      client: 'Hackathon',
      role: 'Full-Stack Developer & UI/UX Designer',
      tools: ['React', 'TypeScript', 'Tailwind CSS', 'NLP Parser'],
      liveUrl: 'https://resume-reviewer-ecru.vercel.app/'
    },
    featuredInHero: true,
    fanAngle: -5,
    fanOffsetY: 5,
    badgeText: 'Minimal Form'
  },
  {
    id: 'illustrator-typography-poster',
    title: 'Bakery Website',
    subtitle: 'Bespoke artisanal bakery online ordering & menu experience',
    category: 'Webpage Design',
    coverImage: '/img8.png',
    galleryImages: [
      '/img8.png'
    ],
    description: 'An elegant digital storefront and online ordering platform for an artisanal bakery, featuring interactive menus, sweet treat showcases, and seamless ordering.',
    fullDetails: {
      overview: 'A warm, handcrafted digital experience celebrating sweet delicacies, freshly baked goods, custom dessert orders, and seamless customer interactions.',
      challenge: 'Capturing the warm, artisanal aesthetic of hand-crafted baking while maintaining sub-second mobile page loads and smooth online order routing.',
      solution: 'Designed a warm typographic layout with high-contrast food imagery, an interactive digital menu, and streamlined online dessert reservation flows.',
      deliverables: ['E-Commerce Bakery Storefront', 'Interactive Menu System', 'Online Ordering Flow'],
      year: '2025',
      client: 'Sweet Delights Bakery',
      role: 'Full-Stack Developer & UI/UX Designer',
      tools: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://bakery-demo-ten.vercel.app/'
    },
    featuredInHero: true,
    fanAngle: 0,
    fanOffsetY: 0,
    badgeText: 'Drawings. Logos. Type.'
  },
  {
    id: 'pink-art-direction',
    title: 'E-Commerce Website',
    subtitle: 'Natural herbal beauty care & handmade e-commerce storefront',
    category: 'Web Apps',
    coverImage: '/img9.png',
    galleryImages: [
      '/img9.png'
    ],
    description: 'An organic herbal beauty and skincare e-commerce platform bringing 100% handmade and natural beauty care products directly from nature to your skin.',
    fullDetails: {
      overview: 'A natural herbal beauty storefront designed for Aarthi Herbalz, presenting handmade, chemical-free skin care remedies with seamless product discovery and checkout.',
      challenge: 'Creating a clean, trustworthy botanical visual identity that highlights pure ingredients while maintaining high-converting e-commerce purchase flows.',
      solution: 'Engineered a vibrant green botanical layout with high-resolution herbal product displays, custom product filtering, and instant checkout integration.',
      deliverables: ['E-Commerce Skincare Storefront', 'Product Catalog', 'Checkout System'],
      year: '2025',
      client: 'Aarthi Herbalz',
      role: 'Full-Stack Developer & UI/UX Designer',
      tools: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://aarthiherbalz.vercel.app/'
    },
    featuredInHero: true,
    fanAngle: 5,
    fanOffsetY: 5,
    badgeText: 'Editorial Photo'
  },
  {
    id: 'urban-staircase-architecture',
    title: 'Fitness Web',
    subtitle: 'Personal training programs & high-performance fitness platform',
    category: 'Web Apps',
    coverImage: '/img10.png',
    galleryImages: [
      '/img10.png'
    ],
    description: 'A high-performance personal training and fitness coaching website featuring custom workout programs, session booking, and client transformation tracking.',
    fullDetails: {
      overview: 'A dynamic fitness coaching platform built around personalized training goals, free consultation scheduling, and interactive program exploration.',
      challenge: 'Creating a high-energy, motivational UI with smooth session booking and instant program discovery for personal training clients.',
      solution: 'Engineered a high-contrast dark theme with vibrant neon highlights, interactive program cards, and seamless session booking integration.',
      deliverables: ['Fitness Coach Platform', 'Program Booking System', 'Client Transformation Portal'],
      year: '2025',
      client: 'Apex Performance Coaching',
      role: 'Full-Stack Developer & UI/UX Designer',
      tools: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://trainer-demo-eight.vercel.app/'
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
    category: 'Lifestyle',
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
    featuredInHero: false,
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
    featuredInHero: false,
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
    category: 'Webpage Design',
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
