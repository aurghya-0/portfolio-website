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

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
        {/* Bio & Research Pillars */}
        <div className="space-y-5">
          <p className="font-['Newsreader'] text-lg sm:text-xl theme-heading leading-relaxed">
            I am an Assistant Professor in the Department of Computer Science & Engineering at NSHM Knowledge Campus, Durgapur. My academic journey combines a rigorous foundation in Computer Science with a passion for modern software engineering, data analytics, and high-performance execution frameworks.
          </p>
          <p className="text-xs sm:text-sm theme-body leading-relaxed font-sans">
            Beyond the classroom, I contribute actively to institutional governance (IQAC Core Committee Member, NAAC Criteria 2 Coordinator) and lead student innovation initiatives such as CodeNEST and the Open Source Student Developers Club.
          </p>

          {/* 4 Core Research Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {RESEARCH_PILLARS.map((pillar) => (
              <div 
                key={pillar.id}
                className="glass-card p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                {getPillarIcon(pillar.icon)}
                <h3 className="font-semibold theme-title text-sm mb-1 group-hover:text-[var(--accent-crimson)] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs theme-muted leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics Facts Table Card */}
        <div>
          <div className="glass-card p-5 rounded-xl border border-[var(--border-main)]">
            <div className="font-mono text-xs tracking-wider uppercase text-[var(--accent-gold)] pb-2.5 mb-3 border-b border-[var(--border-main)] flex items-center gap-2 font-semibold">
              <Contact size={15} className="text-[var(--accent-crimson)]" />
              <span>Key Academic Metrics</span>
            </div>

            <div className="divide-y divide-[var(--border-main)]">
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
