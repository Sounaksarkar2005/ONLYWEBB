import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../../types/portfolio';
import { X, ExternalLink, Calendar, User, Wrench, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!project) return null;

  const images = project.galleryImages.length > 0 ? project.galleryImages : [project.coverImage];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        {/* Backdrop click */}
        <div
          className="fixed inset-0"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#0d0d12] border border-neutral-800 rounded-2xl sm:rounded-3xl overflow-hidden text-white shadow-2xl my-auto max-h-[92vh] flex flex-col z-10"
        >
          {/* Top Bar with Close Button */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0d0d12]/90 backdrop-blur-md border-b border-neutral-800/80">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-neutral-800 text-xs text-neutral-300 font-medium border border-neutral-700">
                {project.category}
              </span>

            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            
            {/* Header Title Section */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
                {project.title}
              </h2>
              <p className="text-neutral-400 text-base sm:text-lg">
                {project.subtitle}
              </p>
            </div>

            {/* Gallery Image Display Slider */}
            <div className="relative rounded-2xl overflow-hidden bg-neutral-900 aspect-[16/9] border border-neutral-800 group">
              <img
                src={images[activeImageIdx]}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-300"
                referrerPolicy="no-referrer"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all cursor-pointer opacity-80 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all cursor-pointer opacity-80 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md">
                    {images.map((_, i) => (
                      <span
                        key={i}
                        onClick={() => setActiveImageIdx(i)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                          i === activeImageIdx ? 'bg-white w-4' : 'bg-neutral-500'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="text-neutral-500 flex items-center gap-1.5 font-medium">
                  <User className="w-3.5 h-3.5" /> Client
                </span>
                <p className="font-semibold text-neutral-200">{project.fullDetails.client}</p>
              </div>

              <div className="space-y-1">
                <span className="text-neutral-500 flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5" /> Year
                </span>
                <p className="font-semibold text-neutral-200">{project.fullDetails.year}</p>
              </div>

              <div className="space-y-1">
                <span className="text-neutral-500 flex items-center gap-1.5 font-medium">
                  Role
                </span>
                <p className="font-semibold text-neutral-200">{project.fullDetails.role}</p>
              </div>

              <div className="space-y-1">
                <span className="text-neutral-500 flex items-center gap-1.5 font-medium">
                  <Wrench className="w-3.5 h-3.5" /> Stack
                </span>
                <p className="font-semibold text-neutral-200 truncate">
                  {project.fullDetails.tools.join(', ')}
                </p>
              </div>
            </div>

            {/* Description & Narrative */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                    Project Overview
                  </h3>
                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {project.fullDetails.overview}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                    The Challenge
                  </h3>
                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {project.fullDetails.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                    The Solution
                  </h3>
                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {project.fullDetails.solution}
                  </p>
                </div>
              </div>

              {/* Sidebar Deliverables & Action */}
              <div className="space-y-6 border-t md:border-t-0 md:border-l border-neutral-800 pt-6 md:pt-0 md:pl-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                    Deliverables
                  </h3>
                  <ul className="space-y-2">
                    {project.fullDetails.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Used Tags */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.fullDetails.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-300 text-xs font-mono border border-neutral-700/60"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Link */}
                {project.fullDetails.liveUrl && (
                  <a
                    href={project.fullDetails.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors cursor-pointer"
                  >
                    <span>Website Link</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
