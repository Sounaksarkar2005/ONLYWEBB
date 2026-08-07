import React, { useState } from 'react';
import { Project, ViewMode } from '../../types/portfolio';
import { HERO_PROJECTS, PROJECTS } from '../../data/projects';
import { HeroSection } from './HeroSection';
import { GalleryView } from './GalleryView';
import { ProjectDetailModal } from './ProjectDetailModal';

export const PortfolioSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      {viewMode === 'gallery' ? (
        <GalleryView
          projects={PROJECTS}
          onSelectProject={handleSelectProject}
          onBackToHero={() => setViewMode('hero')}
        />
      ) : (
        <HeroSection
          projects={HERO_PROJECTS}
          onSelectProject={handleSelectProject}
          onOpenGallery={() => setViewMode('gallery')}
        />
      )}

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default PortfolioSection;
