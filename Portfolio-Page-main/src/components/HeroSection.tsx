import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Project } from '../types';
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
    <div className="w-full min-h-screen bg-black flex flex-col justify-center items-center p-3 sm:p-5 md:p-8 select-none">
      {/* Outer Rounded Hero Card Frame matching exact reference layout */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-7xl bg-[#09090b] border border-neutral-800/90 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] overflow-hidden flex flex-col justify-between shadow-[0_0_80px_rgba(0,0,0,0.9)]"
      >
        {/* Subtle Ambient Radial Glow in Header background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-gradient-to-b from-neutral-800/20 via-neutral-900/10 to-transparent blur-3xl pointer-events-none" />

        {/* Hero Header Content (Title & Button) */}
        <div className="relative z-10 pt-16 sm:pt-20 md:pt-28 lg:pt-36 px-4 sm:px-8 text-center flex flex-col items-center">
          
          {/* Main Title: Browse my library */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.08] max-w-4xl"
          >
            Browse my library
          </motion.h1>

          {/* Centered White Pill Button: View gallery → */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 sm:mt-10"
          >
            <button
              onClick={onOpenGallery}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-white text-black font-medium text-base sm:text-lg hover:bg-neutral-200 active:scale-95 transition-all duration-200 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-white/10 group"
            >
              <span>View gallery</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>

        {/* Bottom Overlapping Fanned Card Deck */}
        <div className="relative z-10 mt-12 sm:mt-16 md:mt-20">
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
