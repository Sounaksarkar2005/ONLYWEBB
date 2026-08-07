/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Project, ViewMode } from './types';
import { HERO_PROJECTS, PROJECTS } from './data/projects';
import { HeroSection } from './components/HeroSection';
import { GalleryView } from './components/GalleryView';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AboutModal } from './components/AboutModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
      {/* Main View Area */}
      <main className="relative">
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
      </main>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* About Modal */}
      <AboutModal
        isOpen={viewMode === 'about'}
        onClose={() => setViewMode('hero')}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={viewMode === 'contact'}
        onClose={() => setViewMode('hero')}
      />
    </div>
  );
}

