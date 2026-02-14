'use client';

import React from 'react';
import { videos } from '@/data/content';
import { Badge } from './Badge';
import { Play } from 'lucide-react';

export function Videos() {
  const categorizedVideos = {
    'system-design': videos.filter((v) => v.category === 'system-design'),
    'code-walkthrough': videos.filter((v) => v.category === 'code-walkthrough'),
    performance: videos.filter((v) => v.category === 'performance'),
    fundamentals: videos.filter((v) => v.category === 'fundamentals'),
  };

  const categoryLabels: Record<string, string> = {
    'system-design': 'System Design',
    'code-walkthrough': 'Code Walkthroughs',
    performance: 'Performance Optimization',
    fundamentals: 'Backend Fundamentals',
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Technical Videos</h2>
          <p className="text-slate-400 text-lg">
            Detailed walkthroughs, system design explanations, and performance optimization deep dives
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(categorizedVideos).map(([category, categoryVideos]) => {
            if (categoryVideos.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="text-2xl font-bold text-white mb-6">
                  {categoryLabels[category] || category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categoryVideos.map((video) => (
                    <a
                      key={video.id}
                      href={`https://youtu.be/${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="relative overflow-hidden rounded-lg mb-4 bg-slate-800 aspect-video border border-slate-800 hover:border-slate-700 transition-colors">
                        {/* Thumbnail placeholder */}
                        <img
                          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                        />
                        <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                          <div className="bg-red-600 rounded-full p-3 group-hover:scale-110 transition-transform">
                            <Play size={24} className="text-white fill-white" />
                          </div>
                        </div>
                        <div className="absolute top-3 right-3">
                          <Badge variant="default">{video.duration}</Badge>
                        </div>
                      </div>

                      <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                        {video.title}
                      </h4>
                      <p className="text-slate-400 text-sm mb-3 line-clamp-2">
                        {video.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {video.tags.map((tag) => (
                          <Badge key={tag} variant="muted">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
