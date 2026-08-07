import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, Code2, Compass, Sparkles } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <div className="fixed inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0d0d12] border border-neutral-800 rounded-3xl p-6 sm:p-8 text-white shadow-2xl z-10 space-y-6"
        >
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-bold">About the Library</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
            <p>
              Welcome to my curated project library. I am a lead product designer, creative technologist, and digital architect specializing in high-fidelity user interfaces, brand identities, and interactive web applications.
            </p>
            <p>
              My design philosophy centers on extreme precision, mathematical spatial balance, typography hierarchy, and effortless interactive delight.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800/80 space-y-2">
                <Compass className="w-5 h-5 text-emerald-400" />
                <h4 className="font-semibold text-white text-sm">Product Strategy</h4>
                <p className="text-xs text-neutral-400">Design systems, user research, product roadmap execution.</p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800/80 space-y-2">
                <Code2 className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold text-white text-sm">Frontend Engineering</h4>
                <p className="text-xs text-neutral-400">React, TypeScript, Tailwind CSS, Motion framer graphics.</p>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800/80 space-y-2">
                <Award className="w-5 h-5 text-purple-400" />
                <h4 className="font-semibold text-white text-sm">Art Direction</h4>
                <p className="text-xs text-neutral-400">Typography, editorial imagery, spatial 3D visualization.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
