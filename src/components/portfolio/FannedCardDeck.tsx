import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../../types/portfolio';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface FannedCardDeckProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenGallery: () => void;
}

export const FannedCardDeck: React.FC<FannedCardDeckProps> = ({
  projects,
  onSelectProject,
  onOpenGallery,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative w-full overflow-visible pt-8 pb-0 flex flex-col items-center justify-end min-h-[260px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px]">
      
      {/* Floating Header Tooltip Indicator */}
      <div className="h-12 mb-3 flex items-center justify-center transition-all duration-300">
        <AnimatePresence mode="wait">
          {hoveredId ? (
            (() => {
              const activeProj = projects.find((p) => p.id === hoveredId);
              if (!activeProj) return null;
              return (
                <motion.div
                  key={activeProj.id}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-neutral-900/95 border border-white/20 text-white text-xs sm:text-sm font-medium shadow-2xl backdrop-blur-xl cursor-pointer hover:border-white/50"
                  onClick={() => onSelectProject(activeProj)}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-neutral-400 font-mono uppercase text-[11px]">{activeProj.category}:</span>
                  <span className="text-white font-semibold">{activeProj.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-300 ml-1" />
                </motion.div>
              );
            })()
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-400 font-mono tracking-wider uppercase"
            >
              <span>HOVER FLASHCARDS TO POP UP • CLICK TO VIEW</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Cards Container - Fanned Deck */}
      <div className="relative w-full max-w-7xl mx-auto flex justify-center items-end px-2 sm:px-4 md:px-8">
        <div className="relative flex items-end justify-center w-full min-h-[220px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[380px] overflow-visible">
          {projects.map((project, index) => {
            const isHovered = hoveredId === project.id;
            const total = projects.length;
            
            // Center calculation for fan arch
            const centerIndex = (total - 1) / 2;
            const offsetFromCenter = index - centerIndex;
            
            // Tilt and vertical offset calculations matching exact fan aesthetic
            const baseAngle = project.fanAngle ?? offsetFromCenter * 4.2;
            const baseOffsetY = project.fanOffsetY ?? Math.abs(offsetFromCenter) * 5;
            
            // Dynamic zIndex: hovered card gets highest zIndex (100)
            const zIndex = isHovered ? 100 : 10 + index;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectProject(project)}
                initial={{ opacity: 0, y: 80 }}
                animate={{
                  opacity: 1,
                  // When cursor comes over a flashcard, it pops up straight up
                  y: isHovered ? -75 : baseOffsetY,
                  rotate: isHovered ? 0 : baseAngle,
                  scale: isHovered ? 1.12 : 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 24,
                  mass: 0.7,
                }}
                style={{
                  zIndex,
                }}
                className={`
                  relative cursor-pointer group flex-shrink-0
                  ${index === 0 ? 'ml-0' : '-ml-5 sm:-ml-8 md:-ml-14'}
                  w-[110px] sm:w-[160px] md:w-[200px] lg:w-[230px] xl:w-[250px]
                  h-[170px] sm:h-[240px] md:h-[290px] lg:h-[330px] xl:h-[350px]
                  rounded-t-2xl sm:rounded-t-3xl
                  overflow-hidden
                  border-t-2 border-x border-white/20
                  bg-neutral-950
                  shadow-[0_-12px_40px_rgba(0,0,0,0.9)]
                  transition-all duration-300
                  ${
                    isHovered
                      ? 'ring-2 ring-white shadow-[0_-25px_60px_rgba(255,255,255,0.25)] border-white/40'
                      : 'hover:border-white/30'
                  }
                `}
              >
                {/* Background Image / Screenshot Artwork */}
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle top dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 opacity-60 group-hover:opacity-40 transition-opacity" />



                {/* Bottom Title Bar on Hover / Peek */}
                <div className="absolute bottom-0 inset-x-0 p-3 flex flex-col justify-end bg-gradient-to-t from-black via-black/90 to-transparent">
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-neutral-400 truncate">
                    {project.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-white truncate leading-tight group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h4>
                </div>

                {/* Bright Top Edge Highlight Ring on Hover */}
                <div
                  className={`absolute inset-0 border-t-2 border-white rounded-t-2xl sm:rounded-t-3xl pointer-events-none transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom connecting background bar */}
      <div className="w-full h-3 bg-gradient-to-b from-transparent to-[#050505]" />
    </div>
  );
};
