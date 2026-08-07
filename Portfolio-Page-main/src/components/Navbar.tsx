import React from 'react';
import { ViewMode } from '../types';
import { Layers, User, Mail, Grid } from 'lucide-react';

interface NavbarProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <header className="fixed top-0 inset-x-0 z-40 p-4 sm:p-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <div
          onClick={() => onNavigate('hero')}
          className="pointer-events-auto flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/80 backdrop-blur-md border border-neutral-800 text-white font-medium text-xs sm:text-sm shadow-xl cursor-pointer hover:border-neutral-700 transition-all"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
          <span className="tracking-wide font-semibold">LIBRARY</span>
          <span className="text-neutral-500 font-mono text-[11px]">v2.5</span>
        </div>

        {/* Right Navigation Menu */}
        <nav className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md border border-neutral-800 shadow-xl">
          <button
            onClick={() => onNavigate('hero')}
            className={`
              flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer
              ${
                currentView === 'hero'
                  ? 'bg-white text-black font-semibold'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }
            `}
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Deck</span>
          </button>

          <button
            onClick={() => onNavigate('gallery')}
            className={`
              flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer
              ${
                currentView === 'gallery'
                  ? 'bg-white text-black font-semibold'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }
            `}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Gallery</span>
          </button>

          <button
            onClick={() => onNavigate('about')}
            className={`
              flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer
              ${
                currentView === 'about'
                  ? 'bg-white text-black font-semibold'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }
            `}
          >
            <User className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">About</span>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className={`
              flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer
              ${
                currentView === 'contact'
                  ? 'bg-white text-black font-semibold'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
              }
            `}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
