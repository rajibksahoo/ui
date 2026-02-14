'use client';

import React from 'react';
import { Accordion } from './Accordion';

export function About() {
  const aboutItems = [
    {
      id: 'career',
      title: 'Career Summary',
      content: (
        <div className="space-y-3">
          <p>
            With 7+ years of experience building production systems at scale, I specialize in
            designing and implementing backend architectures that support millions of users. My
            focus has been on distributed systems, microservices, and data infrastructure.
          </p>
          <p>
            Currently at Tech Giant Inc., leading architecture decisions for core backend services
            and mentoring engineers on system design principles.
          </p>
        </div>
      ),
    },
    {
      id: 'expertise',
      title: 'Areas of Expertise',
      content: (
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-slate-200 mb-2">Domains:</h4>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>Distributed Systems & Microservices</li>
              <li>High-Throughput Systems (1M+ req/sec)</li>
              <li>Data Platforms & Event Streaming</li>
              <li>API Design (REST, GraphQL, gRPC)</li>
              <li>System Observability & Monitoring</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-200 mb-2">Scale Handled:</h4>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>500K+ daily active users</li>
              <li>1.2M requests/second peak throughput</li>
              <li>Multi-region global deployments</li>
              <li>10M+ daily events</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'approach',
      title: 'How I Work',
      content: (
        <div className="space-y-3">
          <div className="flex gap-3 items-start">
            <span className="text-blue-400 font-bold">1.</span>
            <div>
              <h4 className="font-semibold text-slate-200">Architecture First</h4>
              <p className="text-slate-400">Every project starts with clear requirements, constraints, and architectural decisions documented upfront.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-emerald-400 font-bold">2.</span>
            <div>
              <h4 className="font-semibold text-slate-200">Performance & Reliability</h4>
              <p className="text-slate-400">Profiling, monitoring, and testing are built into the development cycle, not added later.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-blue-400 font-bold">3.</span>
            <div>
              <h4 className="font-semibold text-slate-200">Business-Driven</h4>
              <p className="text-slate-400">Technical decisions are justified by business impact. No premature optimization or over-engineering.</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-slate-400 text-lg">Senior Backend Engineer with focus on distributed systems and scalable architecture</p>
        </div>

        <Accordion items={aboutItems} />

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Years Experience', value: '7+' },
            { label: 'Projects Led', value: '20+' },
            { label: 'Engineers Mentored', value: '5' },
            { label: 'MTTR Improvement', value: '8x' },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
