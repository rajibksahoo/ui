'use client';

import React from 'react';
import { articles } from '@/data/content';
import { Badge } from './Badge';
import { Button } from './Button';
import { ExternalLink, Clock } from 'lucide-react';

export function Articles() {
  const featured = articles.filter((a) => a.featured);
  const others = articles.filter((a) => !a.featured);

  const getPlatformColor = (platform: string): 'default' | 'success' | 'warning' => {
    const colors: Record<string, 'default' | 'success' | 'warning'> = {
      medium: 'default',
      'dev.to': 'success',
      personal: 'warning',
      hashnode: 'default',
    };
    return colors[platform] || 'default';
  };

  return (
    <section id="articles" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Articles</h2>
          <p className="text-slate-400 text-lg">
            Deep dives into system design, backend optimization, and engineering decisions
          </p>
        </div>

        {/* Featured Articles */}
        {featured.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-6">Featured</h3>
            <div className="space-y-4">
              {featured.map((article) => (
                <div
                  key={article.id}
                  className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                        {article.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-3">{article.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="muted">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          {article.readingTime} min read
                        </div>
                        <Badge variant={getPlatformColor(article.platform)}>
                          {article.platform}
                        </Badge>
                      </div>
                    </div>
                    <Button
                      href={article.url}
                      variant="ghost"
                      external
                      icon={<ExternalLink size={18} />}
                    >
                      Read
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Articles */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">
            {featured.length > 0 ? 'More Articles' : 'All Articles'}
          </h3>
          <div className="space-y-3">
            {others.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-slate-900/30 border border-slate-800 rounded-lg hover:border-slate-700 hover:bg-slate-900/50 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                      {article.title}
                    </h4>
                    <div className="flex gap-3 flex-wrap items-center">
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock size={14} />
                        {article.readingTime} min
                      </span>
                      <Badge variant={getPlatformColor(article.platform)}>
                        {article.platform}
                      </Badge>
                    </div>
                  </div>
                  <ExternalLink size={18} className="text-slate-600 group-hover:text-slate-400 flex-shrink-0 mt-1 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
