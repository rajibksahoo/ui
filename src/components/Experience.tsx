'use client';

import React from 'react';
import { experience } from '@/data/content';
import { Badge } from './Badge';
import { CheckCircle2 } from 'lucide-react';

export function Experience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience</h2>
          <p className="text-slate-400 text-lg">
            7+ years building systems at scale
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline connector */}
              {index !== experience.length - 1 && (
                <div className="absolute left-5 top-20 w-0.5 h-20 bg-gradient-to-b from-blue-500 to-slate-800" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-12 h-12 bg-slate-900 border-2 border-blue-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full" />
              </div>

              {/* Content */}
              <div className="ml-20 bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-sm text-slate-500">
                    {exp.startDate} {exp.endDate ? `− ${exp.endDate}` : '− Present'}
                  </div>
                </div>

                <p className="text-slate-400 mb-4">{exp.description}</p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-300 mb-2">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2 text-slate-400 text-sm">
                        <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-300 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="success">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
