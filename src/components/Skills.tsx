'use client';

import React from 'react';
import { skills } from '@/data/content';
import { groupSkillsByCategory, getCategoryLabel, getLevelBadgeColor } from '@/lib/utils';
import { Badge } from './Badge';

export function Skills() {
  const groupedSkills = groupSkillsByCategory(skills);

  // Order categories
  const categoryOrder = [
    'language',
    'framework',
    'database',
    'messaging',
    'cloud',
    'devops',
    'tool',
  ];

  const orderedCategories = categoryOrder.filter((cat) => groupedSkills[cat]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Tech Stack</h2>
          <p className="text-slate-400 text-lg">
            Technologies and tools I work with across different proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {orderedCategories.map((category) => (
            <div key={category} className="bg-slate-950 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">
                {getCategoryLabel(category)}
              </h3>

              <div className="space-y-3">
                {groupedSkills[category]
                  .sort((a, b) => {
                    const levelOrder: Record<string, number> = {
                      core: 1,
                      strong: 2,
                      familiar: 3,
                    };
                    return levelOrder[a.level] - levelOrder[b.level];
                  })
                  .map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <Badge
                        variant={
                          skill.level === 'core'
                            ? 'default'
                            : skill.level === 'strong'
                              ? 'success'
                              : 'muted'
                        }
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 bg-slate-900/50 border border-slate-800 rounded-lg p-6">
          <h3 className="text-sm font-semibold text-slate-300 mb-4">Proficiency Levels</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Badge variant="default">core</Badge>
              <span className="text-slate-400 text-sm">Expert level, use daily</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="success">strong</Badge>
              <span className="text-slate-400 text-sm">Proficient, production ready</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="muted">familiar</Badge>
              <span className="text-slate-400 text-sm">Solid knowledge, growing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
