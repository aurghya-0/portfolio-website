import React from 'react';
import { EXPERIENCE } from '../data/portfolioData';
import { Briefcase, Building, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 lg:py-16 px-6 sm:px-10 lg:px-12 border-b border-[var(--border-main)]">
      {/* Eyebrow */}
      <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-crimson)] tracking-widest uppercase mb-3 font-semibold">
        <span className="w-2 h-2 rounded-full bg-[var(--accent-crimson)]"></span>
        <span>Career History</span>
      </div>

      <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold theme-title mb-10 tracking-tight">
        Academic Appointments & Industry Experience
      </h2>

      {/* Timeline */}
      <div className="relative pl-6 border-l-2 border-[var(--border-main)] space-y-9 ml-2">
        {EXPERIENCE.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Dot Node */}
            <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--bg-page)] border-2 border-[var(--accent-crimson)] group-hover:scale-125 group-hover:bg-[var(--accent-crimson)] transition-all duration-300 shadow-sm" />

            {/* Date Tag */}
            <div className="font-mono text-xs font-semibold text-[var(--accent-gold)] mb-1 flex items-center gap-1.5">
              <Briefcase size={12} />
              <span>{exp.period}</span>
            </div>

            {/* Role Title */}
            <h3 className="font-['Newsreader'] text-xl font-semibold theme-title mb-0.5 group-hover:text-[var(--accent-crimson)] transition-colors">
              {exp.role}
            </h3>

            {/* Institution */}
            <div className="text-xs sm:text-sm font-medium text-[var(--accent-crimson)] mb-3 flex items-center gap-1.5">
              <Building size={13} className="opacity-80 text-[var(--accent-gold)]" />
              <span>{exp.institution}</span>
            </div>

            {/* Bullets */}
            <ul className="space-y-1.5 text-xs sm:text-sm theme-body">
              {exp.bullets.map((bullet, bulletIdx) => (
                <li key={bulletIdx} className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-[var(--accent-crimson)] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
