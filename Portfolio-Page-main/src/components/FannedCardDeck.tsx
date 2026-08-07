import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
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
    <div className="relative w-full overflow-hidden pt-6 pb-0 flex flex-col items-center justify-end min-h-[220px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[380px]">
      {/* Hover Tooltip / Badge Indicator floating above the deck */}
      <div className="h-10 mb-2 flex items-center justify-center transition-all duration-300">
        <AnimatePresence mode="wait">
          {hoveredId ? (
            (() => {
              const activeProj = projects.find((p) => p.id === hoveredId);
              if (!activeProj) return null;
              return (
                <motion.div
                  key={activeProj.id}
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-white text-xs sm:text-sm font-medium shadow-2xl backdrop-blur-md cursor-pointer hover:border-white/40"
                  onClick={() => onSelectProject(activeProj)}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-neutral-300 font-normal">{activeProj.category}:</span>
                  <span className="text-white font-semibold">{activeProj.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 ml-0.5" />
                </motion.div>
              );
            })()
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400/80 font-medium tracking-wide uppercase"
            >
              <Sparkles className="w-3 h-3 text-neutral-400" />
              <span>Hover cards to peek • Click to view project</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Cards Container - Overlapping Fan Deck */}
      <div className="relative w-full max-w-6xl mx-auto flex justify-center items-end px-2 sm:px-4 md:px-8">
        <div className="relative flex items-end justify-center w-full min-h-[200px] sm:min-h-[260px] md:min-h-[320px] lg:min-h-[360px] overflow-visible">
          {projects.map((project, index) => {
            const isHovered = hoveredId === project.id;
            const total = projects.length;
            
            // Calculate base transform parameters for natural fan curvature
            const centerIndex = (total - 1) / 2;
            const offsetFromCenter = index - centerIndex;
            
            // Default rotation & tilt angles matching screenshot fan aesthetic
            const baseAngle = project.fanAngle ?? offsetFromCenter * 3.8;
            const baseOffsetY = project.fanOffsetY ?? Math.abs(offsetFromCenter) * 4;
            
            // Calculate horizontal offset spacing
            // Spacing gets tighter as cards overlap like playing cards
            const zIndex = isHovered ? 60 : 10 + index;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectProject(project)}
                initial={{ opacity: 0, y: 60 }}
                animate={{
                  opacity: 1,
                  y: isHovered ? -32 : baseOffsetY,
                  rotate: isHovered ? 0 : baseAngle,
                  scale: isHovered ? 1.08 : 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 24,
                  mass: 0.8,
                }}
                style={{
                  zIndex,
                  // Horizontal overlap calculation using negative margin or offset
                  marginLeft: index === 0 ? 0 : '-3.2rem',
                }}
                className={`
                  relative cursor-pointer group flex-shrink-0
                  w-[110px] sm:w-[150px] md:w-[190px] lg:w-[220px] xl:w-[240px]
                  h-[170px] sm:h-[230px] md:h-[280px] lg:h-[320px] xl:h-[340px]
                  rounded-t-xl sm:rounded-t-2xl
                  overflow-hidden
                  border-t border-x border-white/15
                  bg-neutral-900
                  shadow-[0_-10px_35px_rgba(0,0,0,0.85)]
                  transition-shadow duration-300
                  ${isHovered ? 'ring-2 ring-white/60 shadow-[0_-15px_45px_rgba(255,255,255,0.15)]' : ''}
                `}
              >
                {/* Background Artwork Image */}
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Gradient Overlay for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Optional Subtle Badge Text inside card (as in Illustrator / Centefields screenshots) */}
                {project.badgeText && (
                  <div className="absolute top-2 left-2 right-2 flex justify-start opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[9px] sm:text-[10px] font-mono text-neutral-300 border border-white/10 truncate max-w-full">
                      {project.badgeText}
                    </span>
                  </div>
                )}

                {/* Bottom Card Title Peek */}
                <div className="absolute bottom-0 inset-x-0 p-2 sm:p-3 flex flex-col justify-end bg-gradient-to-t from-black via-black/80 to-transparent">
                  <span className="text-[10px] sm:text-xs font-medium text-neutral-400 truncate">
                    {project.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold text-white truncate leading-tight group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h4>
                </div>

                {/* Glowing border highlight on hover */}
                <div
                  className={`absolute inset-0 border border-white/30 rounded-t-xl sm:rounded-t-2xl pointer-events-none transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Subtle fade overlay at the very bottom edge connecting to section boundary */}
      <div className="w-full h-4 bg-gradient-to-b from-transparent to-[#0a0a0c]" />
    </div>
  );
};
