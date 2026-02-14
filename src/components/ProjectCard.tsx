'use client';

import React from 'react';
import { Project } from '@/types';
import { Badge } from './Badge';
import { Button } from './Button';
import { Github, ExternalLink, Play } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <div
      className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 cursor-pointer group"
      onClick={() => onViewDetails(project)}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="mb-3">
          <Badge variant="success">Featured</Badge>
        </div>
      )}

      {/* Project Name */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
        {project.name}
      </h3>

      {/* Problem Statement */}
      <p className="text-slate-400 text-sm mb-4 line-clamp-2">
        {project.shortDescription}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="px-2 py-1 text-xs bg-slate-800 text-slate-400 rounded border border-slate-700">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="muted">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Metrics */}
      {Object.keys(project.metrics).length > 0 && (
        <div className="mb-4 pb-4 border-b border-slate-800">
          <div className="grid grid-cols-2 gap-3 text-sm">
            {project.metrics.throughput && (
              <div>
                <span className="text-slate-500">Throughput</span>
                <p className="text-slate-300 font-semibold">{project.metrics.throughput}</p>
              </div>
            )}
            {project.metrics.latency && (
              <div>
                <span className="text-slate-500">Latency</span>
                <p className="text-slate-300 font-semibold">{project.metrics.latency}</p>
              </div>
            )}
            {project.metrics.users && (
              <div>
                <span className="text-slate-500">Users</span>
                <p className="text-slate-300 font-semibold">{project.metrics.users}</p>
              </div>
            )}
            {project.metrics.uptime && (
              <div>
                <span className="text-slate-500">Uptime</span>
                <p className="text-slate-300 font-semibold">{project.metrics.uptime}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Links */}
      <div className="flex gap-3 flex-wrap">
        {project.links.github && (
          <Button
            href={project.links.github}
            variant="ghost"
            size="sm"
            external
            icon={<Github size={16} />}
          >
            Code
          </Button>
        )}
        {project.links.article && (
          <Button
            href={project.links.article}
            variant="ghost"
            size="sm"
            external
            icon={<ExternalLink size={16} />}
          >
            Article
          </Button>
        )}
        {project.links.video && (
          <Button
            href={project.links.video}
            variant="ghost"
            size="sm"
            external
            icon={<Play size={16} />}
          >
            Video
          </Button>
        )}
        <Button variant="ghost" size="sm" onClick={() => onViewDetails(project)}>
          Details →
        </Button>
      </div>
    </div>
  );
}
