'use client';

import React, { useState } from 'react';
import { Button } from './Button';
import { personalInfo } from '@/data/content';
import { Mail, Github, Linkedin, Check } from 'lucide-react';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-slate-400 text-lg mb-8">
          Open to opportunities, collaborations, and technical discussions. Let&apos;s connect.
        </p>

        {/* Contact Methods */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={copyEmail}
            variant={copied ? 'primary' : 'secondary'}
            size="lg"
            icon={copied ? <Check size={20} /> : <Mail size={20} />}
          >
            {copied ? 'Email Copied!' : 'Copy Email'}
          </Button>
          <Button
            href={personalInfo.linkedin}
            variant="secondary"
            size="lg"
            external
            icon={<Linkedin size={20} />}
          >
            LinkedIn
          </Button>
          <Button
            href={personalInfo.github}
            variant="secondary"
            size="lg"
            external
            icon={<Github size={20} />}
          >
            GitHub
          </Button>
        </div>

        {/* Availability Status */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-emerald-400 font-semibold">Open to Opportunities</span>
          </div>
          <p className="text-slate-400 text-sm">
            Available for full-time roles, consulting, or technical discussions.
          </p>
        </div>
      </div>
    </section>
  );
}
