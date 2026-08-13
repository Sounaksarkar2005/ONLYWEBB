import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Grid, Sparkles } from 'lucide-react';
import { Project } from '../../types/portfolio';
import { FannedCardDeck } from './FannedCardDeck';

interface HeroSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenGallery: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  projects,
  onSelectProject,
  onOpenGallery,
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center select-none py-8 md:py-12">
      {/* Outer Rounded Hero Card Frame matching reference layout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-7xl bg-[#09090b] border border-neutral-800/90 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] overflow-hidden flex flex-col justify-between shadow-[0_0_80px_rgba(0,0,0,0.9)]"
      >
        {/* Subtle Ambient Radial Glow in Header background */}
        <div className="relative z-10 pt-10 sm:pt-14 md:pt-16 px-4 text-center flex flex-col items-center">
          {/* Main Title: Browse my library */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.08] max-w-4xl"
          >
            Browse my library
          </motion.h1>

          <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto mt-4 leading-relaxed font-sans">
            Explore our curated gallery of web apps, UI/UX systems, architectural concepts, and visual branding.
          </p>

          {/* Centered White Pill Button: View gallery → */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 sm:mt-8"
          >
            <button
              onClick={onOpenGallery}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-white text-black font-semibold text-base sm:text-lg hover:bg-neutral-200 active:scale-95 transition-all duration-200 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-white/10 group"
            >
              <Grid className="w-4 h-4 text-black" />
              <span>View full gallery</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Overlapping Fanned Card Deck */}
        <div className="relative z-10 mt-8 sm:mt-12 md:mt-16">
          <FannedCardDeck
            projects={projects}
            onSelectProject={onSelectProject}
            onOpenGallery={onOpenGallery}
          />
        </div>
      </motion.div>
    </div>
  );
};
