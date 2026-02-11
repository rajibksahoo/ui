'use client';

import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from './Button';
import { personalInfo } from '@/data/content';

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-32 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-4xl mx-auto text-center animate-fadeIn">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          {personalInfo.name}
        </h1>

        {/* Title Badge */}
        <div className="flex justify-center mb-6">
          <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <p className="text-blue-300 font-medium text-sm sm:text-base">
              {personalInfo.title}
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          {personalInfo.tagline}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            'Java',
            'Spring Boot',
            'Kafka',
            'PostgreSQL',
            'AWS',
            'Kubernetes',
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs sm:text-sm bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 hover:border-slate-600 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button variant="primary" size="lg" href="#projects">
            View Projects
          </Button>
          <Button variant="secondary" size="lg" href={personalInfo.github} external>
            GitHub
          </Button>
          <Button variant="secondary" size="lg" href={`mailto:${personalInfo.email}`}>
            Contact
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-16">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-all duration-200"
          >
            <Github size={24} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-all duration-200"
          >
            <Linkedin size={24} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-all duration-200"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown size={24} className="mx-auto text-slate-500" />
        </div>
      </div>
    </section>
  );
}
