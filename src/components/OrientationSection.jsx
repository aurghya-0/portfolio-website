import React from 'react';
import { RESEARCH_PILLARS, KEY_METRICS } from '../data/portfolioData';
import { Cpu, TrendingUp, Activity, GitBranch, Contact } from 'lucide-react';

export default function OrientationSection() {
  const getPillarIcon = (iconName) => {
    switch (iconName) {
      case 'microchip': return <Cpu className="w-5 h-5 text-[var(--accent-crimson)] mb-2" />;
      case 'trending-up': return <TrendingUp className="w-5 h-5 text-[var(--accent-crimson)] mb-2" />;
      case 'activity': return <Activity className="w-5 h-5 text-[var(--accent-crimson)] mb-2" />;
      case 'git-branch': return <GitBranch className="w-5 h-5 text-[var(--accent-crimson)] mb-2" />;
      default: return <Cpu className="w-5 h-5 text-[var(--accent-crimson)] mb-2" />;
    }
  };

  return (
    <section className="py-12 lg:py-16 px-6 sm:px-10 lg:px-12 border-b border-[var(--border-main)]">
      {/* Section Eyebrow */}
      <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-crimson)] tracking-widest uppercase mb-3 font-semibold">
        <span className="w-2 h-2 rounded-full bg-[var(--accent-crimson)]"></span>
        <span>Orientation & Overview</span>
      </div>

      <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold theme-title mb-8 tracking-tight">
        Academic Profile & Research Pillars
      </h2>

      {/* Academic Mission & Vision Statements */}
      <div className="max-w-3xl space-y-4 mb-10">
        <p className="font-['Newsreader'] text-xl sm:text-2xl theme-heading leading-relaxed font-medium">
          My academic mission sits at the intersection of high-performance computing, open-source software engineering, and applied artificial intelligence—bridging theoretical computer science with maintainable, real-world systems.
        </p>
        <p className="text-xs sm:text-sm theme-body leading-relaxed font-sans">
          Through rigorous course instruction, Outcome-Based Education (OBE) curriculum design, and student innovation club advisorship, I focus on building production-grade computational skills. My research spans parallel algorithm optimization, financial risk modeling, edge IoT telemetry, and open-source academic tools.
        </p>
      </div>

      {/* Balanced 2-Column Grid: Research Pillars (Left) vs Key Metrics (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* 4 Core Research Pillars Grid */}
        <div className="flex flex-col justify-between space-y-3.5">
          <div className="font-mono text-xs tracking-wider uppercase text-[var(--accent-gold)] pb-2 border-b border-[var(--border-main)] flex items-center gap-2 font-semibold">
            <Cpu size={15} className="text-[var(--accent-crimson)]" />
            <span>Research Pillars</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 h-full">
            {RESEARCH_PILLARS.map((pillar) => (
              <div 
                key={pillar.id}
                className="glass-card p-4 rounded-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  {getPillarIcon(pillar.icon)}
                  <h3 className="font-semibold theme-title text-sm mb-1 group-hover:text-[var(--accent-crimson)] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs theme-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics Facts Table Card */}
        <div className="flex flex-col justify-between">
          <div className="font-mono text-xs tracking-wider uppercase text-[var(--accent-gold)] pb-2 border-b border-[var(--border-main)] flex items-center gap-2 font-semibold">
            <Contact size={15} className="text-[var(--accent-crimson)]" />
            <span>Key Academic Metrics</span>
          </div>

          <div className="glass-card p-5 rounded-xl border border-[var(--border-main)] h-full flex flex-col justify-between">
            <div className="divide-y divide-[var(--border-main)] my-auto">
              {KEY_METRICS.map((fact, idx) => (
                <div key={idx} className="py-2.5 flex justify-between items-center gap-3 text-xs">
                  <span className="theme-muted">{fact.key}</span>
                  <span className={`font-medium text-right ${fact.highlight ? 'font-mono text-[var(--accent-crimson)] font-bold bg-[var(--bg-tag)] px-2 py-0.5 rounded border border-[var(--border-main)]' : 'theme-heading'}`}>
                    {fact.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
