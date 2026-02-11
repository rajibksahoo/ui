import { Skill } from '@/types';

export function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    language: 'Languages',
    framework: 'Frameworks',
    database: 'Databases',
    messaging: 'Messaging & APIs',
    cloud: 'Cloud & Infrastructure',
    devops: 'DevOps & Monitoring',
    tool: 'Tools',
  };
  return labels[category] || category;
}

export function groupSkillsByCategory(skills: Skill[]): Record<string, Skill[]> {
  return skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>
  );
}

export function getLevelColor(level: string): string {
  const colors: Record<string, string> = {
    core: 'text-blue-400',
    strong: 'text-emerald-400',
    familiar: 'text-slate-400',
  };
  return colors[level] || 'text-slate-400';
}

export function getLevelBadgeColor(level: string): string {
  const colors: Record<string, string> = {
    core: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    strong: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    familiar: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
  };
  return colors[level] || 'bg-slate-500/20 text-slate-300 border-slate-500/30';
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateShort(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
