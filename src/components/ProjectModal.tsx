'use client';

import React from 'react';
import { Project } from '@/types';
import { Badge } from './Badge';
import { Button } from './Button';
import { X, Github, ExternalLink, Play, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn">
        {/* Header */}
        <div className="sticky top-0 flex justify-between items-start p-6 border-b border-slate-800 bg-slate-900/95 backdrop-blur">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-2">{project.name}</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X size={24} className="text-slate-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Problem Statement */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-blue-400">01.</span> Problem Statement
            </h3>
            <p className="text-slate-400">{project.problemStatement}</p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-blue-400">02.</span> Solution
            </h3>
            <p className="text-slate-400">{project.solution}</p>
          </div>

          {/* Key Decisions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-blue-400">03.</span> Key Engineering Decisions
            </h3>
            <ul className="space-y-2">
              {project.keyDecisions.map((decision, i) => (
                <li key={i} className="flex gap-3 text-slate-400">
                  <CheckCircle2 size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Trade-offs */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-blue-400">04.</span> Trade-offs & Constraints
            </h3>
            <ul className="space-y-2">
              {project.tradeoffs.map((tradeoff, i) => (
                <li key={i} className="text-slate-400 text-sm pl-6 border-l border-slate-700">
                  {tradeoff}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="success">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Metrics */}
          {Object.keys(project.metrics).length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Impact & Metrics</h3>
              <div className="grid grid-cols-2 gap-4">
                {project.metrics.throughput && (
                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                    <div className="text-sm text-slate-500">Throughput</div>
                    <div className="text-lg font-bold text-blue-400">{project.metrics.throughput}</div>
                  </div>
                )}
                {project.metrics.latency && (
                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                    <div className="text-sm text-slate-500">Latency Improvement</div>
                    <div className="text-lg font-bold text-emerald-400">{project.metrics.latency}</div>
                  </div>
                )}
                {project.metrics.users && (
                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                    <div className="text-sm text-slate-500">Daily Active Users</div>
                    <div className="text-lg font-bold text-purple-400">{project.metrics.users}</div>
                  </div>
                )}
                {project.metrics.uptime && (
                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                    <div className="text-sm text-slate-500">Uptime</div>
                    <div className="text-lg font-bold text-blue-400">{project.metrics.uptime}</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* What's Next */}
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-slate-300 mb-2">What I&apos;d Improve Next</h4>
              <p className="text-slate-400 text-sm">{project.whatNext}</p>
          </div>

          {/* Links */}
          <div className="flex gap-3 flex-wrap pt-4 border-t border-slate-800">
            {project.links.github && (
              <Button
                href={project.links.github}
                variant="primary"
                external
                icon={<Github size={18} />}
              >
                View Code
              </Button>
            )}
            {project.links.article && (
              <Button
                href={project.links.article}
                variant="secondary"
                external
                icon={<ExternalLink size={18} />}
              >
                Read Article
              </Button>
            )}
            {project.links.video && (
              <Button
                href={project.links.video}
                variant="secondary"
                external
                icon={<Play size={18} />}
              >
                Watch Video
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
