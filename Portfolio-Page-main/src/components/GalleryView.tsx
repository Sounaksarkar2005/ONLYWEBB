import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project, ProjectCategory } from '../types';
import { Search, ArrowLeft, ArrowUpRight, Grid, Filter, Sparkles } from 'lucide-react';

interface GalleryViewProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onBackToHero: () => void;
}

const CATEGORIES: ProjectCategory[] = [
  'All',
  'UI/UX Design',
  'Graphic Design',
  'Architecture',
  'Web Apps',
  'Photography',
  'Brand Identity',
];

export const GalleryView: React.FC<GalleryViewProps> = ({
  projects,
  onSelectProject,
  onBackToHero,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-black text-white px-4 sm:px-8 py-8 sm:py-12"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Navigation Top Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
          <button
            onClick={onBackToHero}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-800 hover:border-neutral-700 transition-all text-sm font-medium cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Main Deck</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 text-xs text-neutral-400 border border-neutral-800 font-mono">
              <Grid className="w-3.5 h-3.5 text-emerald-400" />
              {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'}
            </span>
          </div>
        </div>

        {/* Gallery Title Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Interactive Archive</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Project Gallery
          </h2>
          <p className="text-neutral-400 max-w-2xl text-base sm:text-lg">
            Explore complete design case studies, architectural blueprints, UI systems, and visual artworks from the library collection.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-2">
          
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search by keyword, tool, client..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer
                    ${
                      active
                        ? 'bg-white text-black font-semibold shadow-lg'
                        : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                    }
                  `}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4"
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  onClick={() => onSelectProject(project)}
                  className="group relative bg-[#0d0d11] border border-neutral-800/80 rounded-2xl overflow-hidden cursor-pointer hover:border-neutral-600 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5 flex flex-col justify-between"
                >
                  {/* Cover Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d11] via-transparent to-transparent opacity-80" />
                    
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-medium text-neutral-300 border border-white/10">
                      {project.category}
                    </span>

                    <button className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-black">
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Info Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500">
                      <span>{project.fullDetails.year}</span>
                      <span className="text-neutral-400 group-hover:text-white font-medium flex items-center gap-1">
                        View Project →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center space-y-4"
            >
              <Filter className="w-10 h-10 text-neutral-600 mx-auto" />
              <h3 className="text-xl font-medium text-neutral-300">No matching projects found</h3>
              <p className="text-sm text-neutral-500">
                Try searching for another term or selecting a different category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2 rounded-full bg-neutral-800 text-white text-xs font-medium hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
