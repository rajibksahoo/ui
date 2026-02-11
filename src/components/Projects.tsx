'use client';

import React, { useState } from 'react';
import { projects } from '@/data/content';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Project } from '@/types';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Real-world systems demonstrating architecture thinking, engineering decisions, and
            measurable impact at scale.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={setSelectedProject}
            />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={setSelectedProject}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
