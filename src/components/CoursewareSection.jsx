import React, { useState } from 'react';
import { COURSEWARE_SITES } from '../data/portfolioData';
import { ExternalLink, Github, Globe, BookOpen, Layers, Sparkles, ChevronRight, Terminal, Cpu } from 'lucide-react';

export default function CoursewareSection({ onSelectSite }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Operating Systems', 'Python & Data Science', 'Python & Data Mining', 'C & Systems Programming', 'Java & OOP'];

  const filteredSites = selectedCategory === 'All'
    ? COURSEWARE_SITES
    : COURSEWARE_SITES.filter(site => site.category === selectedCategory);

  return (
    <section id="courseware" className="py-12 lg:py-16 px-6 sm:px-10 lg:px-12 border-b border-[var(--border-main)]">
      {/* Section Header Eyebrow */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-crimson)] tracking-widest uppercase font-semibold">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-crimson)]"></span>
          <span>CSE-420 · Interactive Courseware Portals</span>
        </div>

        <div className="flex items-center gap-3">
          <a 
            href="/courseware/"
            className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[var(--accent-crimson)] to-rose-600 hover:opacity-90 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
          >
            <span>Open Standalone Showcase Page</span>
            <ExternalLink size={12} />
          </a>
          <span className="font-mono text-xs text-[var(--accent-gold)] font-semibold px-3 py-1 rounded-full bg-[var(--bg-tag)] border border-[var(--border-main)] hidden sm:inline-block">
            {COURSEWARE_SITES.length} Dedicated Mini-Websites
          </span>
        </div>
      </div>

      <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold theme-title mb-3 tracking-tight">
        Coursework Mini-Websites & Laboratory Portals
      </h2>

      <p className="text-xs sm:text-sm theme-muted max-w-3xl mb-8 leading-relaxed font-sans">
        Bespoke academic mini-websites, interactive laboratory visualizers, courseware documentation portals, and open-source codebases authored specifically to support undergraduate CSE & IT instruction under the MAKAUT curriculum.
      </p>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`
              px-3.5 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all duration-200 cursor-pointer border
              ${selectedCategory === cat
                ? 'bg-[var(--accent-crimson)] text-white border-[var(--accent-crimson)] shadow-md shadow-purple-900/20'
                : 'bg-[var(--bg-card)] theme-muted border-[var(--border-main)] hover:border-[var(--accent-crimson)] hover:text-[var(--accent-crimson)]'}
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Courseware Mini-Websites Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {filteredSites.map((site) => (
          <div
            key={site.id}
            className="glass-card p-6 rounded-2xl border border-[var(--border-main)] hover:border-[var(--accent-crimson)]/50 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
          >
            <div>
              {/* Header Badge Row */}
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-[var(--bg-tag)] border border-[var(--border-main)] text-[var(--accent-crimson)] font-mono text-[10px] font-bold uppercase tracking-wider">
                  {site.badge}
                </span>
                <span className="font-mono text-xs font-bold theme-gold bg-purple-500/10 px-2.5 py-0.5 rounded border border-purple-500/20">
                  {site.courseCode}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-['Cinzel'] font-bold text-lg sm:text-xl theme-title mb-1 group-hover:text-[var(--accent-crimson)] transition-colors leading-tight">
                {site.title}
              </h3>
              <p className="text-xs font-mono text-[var(--accent-crimson)] mb-3 font-semibold">
                {site.subtitle}
              </p>

              <p className="text-xs sm:text-sm theme-body leading-relaxed mb-4 font-sans">
                {site.desc}
              </p>

              {/* Key Features List */}
              <div className="space-y-1.5 mb-5 pt-3 border-t border-[var(--border-main)]">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent-gold)] font-bold mb-1 flex items-center gap-1.5">
                  <Sparkles size={13} className="text-[var(--accent-crimson)]" />
                  <span>Key Portal Features</span>
                </div>
                {site.features.slice(0, 3).map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2 text-xs theme-muted">
                    <span className="text-[var(--accent-crimson)] font-bold shrink-0 mt-0.5">•</span>
                    <span className="leading-snug">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {site.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded bg-[var(--bg-tag)] border border-[var(--border-main)] font-mono text-[10px] theme-heading font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Footer Buttons */}
            <div className="pt-4 border-t border-[var(--border-main)] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={site.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[var(--accent-crimson)] to-rose-600 hover:opacity-90 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <Globe size={14} />
                  <span>Visit Mini-Website</span>
                  <ExternalLink size={12} className="opacity-80" />
                </a>

                <a
                  href={site.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[var(--accent-crimson)] theme-heading hover:text-[var(--accent-crimson)] transition-all cursor-pointer shadow-xs"
                  title="View GitHub Repository"
                >
                  <Github size={15} />
                </a>
              </div>

              <button
                onClick={() => onSelectSite(site)}
                className="px-3 py-1.5 rounded-xl bg-[var(--bg-tag)] hover:bg-[var(--bg-input)] border border-[var(--border-main)] theme-title text-xs font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer group/btn"
              >
                <span>Details</span>
                <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform text-[var(--accent-crimson)]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
