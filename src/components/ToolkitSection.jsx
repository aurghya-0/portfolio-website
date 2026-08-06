import React from 'react';
import { EDUCATION, SKILL_GROUPS, INTERESTS } from '../data/portfolioData';
import { GraduationCap, Wrench, Award, Heart } from 'lucide-react';

export default function ToolkitSection() {
  return (
    <section id="toolkit" className="py-12 lg:py-16 px-6 sm:px-10 lg:px-12 border-b border-[var(--border-main)]">
      {/* Eyebrow */}
      <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-crimson)] tracking-widest uppercase mb-3 font-semibold">
        <span className="w-2 h-2 rounded-full bg-[var(--accent-crimson)]"></span>
        <span>Qualifications & Toolkit</span>
      </div>

      <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold theme-title mb-8 tracking-tight">
        Academic Degrees & Technical Stack
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
        {/* Education Column */}
        <div>
          <div className="font-mono text-xs tracking-wider uppercase text-[var(--accent-gold)] pb-2 mb-4 border-b border-[var(--border-main)] flex items-center gap-2 font-semibold">
            <GraduationCap size={15} className="text-[var(--accent-crimson)]" />
            <span>Degrees & Credentials</span>
          </div>

          <div className="space-y-3">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="glass-card p-4 rounded-xl">
                <h4 className="font-['Newsreader'] text-base font-semibold theme-title mb-1">
                  {edu.degree}
                </h4>
                <div className="text-xs theme-muted flex items-center gap-1.5 mb-1">
                  <Award size={12} className="text-[var(--accent-gold)]" />
                  <span>{edu.institution}</span>
                </div>
                <div className="text-[11px] theme-muted font-mono mb-1">{edu.period}</div>
                <div className="text-xs font-semibold text-[var(--accent-crimson)] mb-1">{edu.gpa}</div>
                <p className="text-[11px] theme-body leading-relaxed">{edu.courses}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Matrix Column */}
        <div>
          <div className="font-mono text-xs tracking-wider uppercase text-[var(--accent-gold)] pb-2 mb-4 border-b border-[var(--border-main)] flex items-center gap-2 font-semibold">
            <Wrench size={15} className="text-[var(--accent-crimson)]" />
            <span>Technical & Research Stack</span>
          </div>

          <div className="space-y-5">
            {SKILL_GROUPS.map((group, idx) => (
              <div key={idx}>
                <div className="text-xs theme-muted font-medium mb-2">
                  {group.title}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx}
                      className={`
                        font-sans text-xs px-2.5 py-1 rounded-lg border transition-all duration-200
                        ${skill.highlight 
                          ? 'bg-[var(--bg-tag)] border-[var(--accent-crimson)] text-[var(--accent-crimson)] font-semibold shadow-sm' 
                          : 'bg-[var(--bg-input)] theme-body border-[var(--border-main)] hover:border-[var(--accent-crimson)]'}
                      `}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="text-xs theme-muted font-medium mb-2 flex items-center gap-1.5">
              <Heart size={12} className="text-[var(--accent-crimson)]" />
              <span>Interests</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {INTERESTS.map((interest, idx) => (
                <span
                  key={idx}
                  className="font-sans text-xs px-2.5 py-1 rounded-lg border bg-[var(--bg-input)] theme-body border-[var(--border-main)]"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
