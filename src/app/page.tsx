import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Articles } from '@/components/Articles';
import { Videos } from '@/components/Videos';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Articles />
      <Videos />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
