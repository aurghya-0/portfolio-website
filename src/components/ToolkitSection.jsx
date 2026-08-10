import React, { useState } from 'react';
import { EDUCATION, SKILL_GROUPS, INTERESTS } from '../data/portfolioData';
import { GraduationCap, Wrench, Award, Heart, Filter } from 'lucide-react';

export default function ToolkitSection() {
  const [selectedGroup, setSelectedGroup] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stack' },
    ...SKILL_GROUPS.map((group) => ({ id: group.title, label: group.title }))
  ];

  const filteredGroups = SKILL_GROUPS.filter(
    (group) => selectedGroup === 'all' || group.title === selectedGroup
  );

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

      <div className="space-y-12">
        {/* Top Block: Degrees & Credentials (Horizontal 2-Card Grid) */}
        <div>
          <div className="font-mono text-xs tracking-wider uppercase text-[var(--accent-gold)] pb-2.5 mb-6 border-b border-[var(--border-main)] flex items-center gap-2 font-semibold">
            <GraduationCap size={15} className="text-[var(--accent-crimson)]" />
            <span>Degrees & Academic Credentials</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border-l-4 border-l-[var(--accent-crimson)] flex flex-col justify-between space-y-3.5 transition-all hover:-translate-y-1">
                <div className="space-y-2">
                  <h3 className="font-semibold text-base sm:text-lg theme-title leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="text-xs theme-crimson font-medium flex items-center gap-1.5">
                    <Award size={14} className="text-[var(--accent-gold)] shrink-0" />
                    <span>{edu.institution}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <span className="font-mono text-xs theme-muted bg-[var(--bg-input)] px-3 py-1 rounded-md border border-[var(--border-main)] font-medium">
                    {edu.period}
                  </span>
                  <span className="font-mono text-xs font-bold text-[var(--accent-crimson)] bg-[var(--bg-tag)] px-3 py-1 rounded-md border border-[var(--border-main)]">
                    {edu.gpa}
                  </span>
                </div>

                <p className="text-xs theme-body leading-relaxed pt-2 border-t border-[var(--border-main)]/60">
                  <span className="font-semibold theme-title">Relevant Coursework:</span> {edu.courses}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Block: Technical & Research Stack (Full Width) */}
        <div>
          <div className="font-mono text-xs tracking-wider uppercase text-[var(--accent-gold)] pb-2.5 mb-6 border-b border-[var(--border-main)] flex items-center justify-between font-semibold">
            <div className="flex items-center gap-2">
              <Wrench size={15} className="text-[var(--accent-crimson)]" />
              <span>Technical & Research Stack</span>
            </div>
            <Filter size={13} className="theme-muted" />
          </div>

          {/* Skill Matrix Filter Pills */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedGroup(cat.id)}
                className={`
                  px-3.5 py-1.5 rounded-xl font-mono text-xs transition-all duration-200 cursor-pointer shadow-sm
                  ${selectedGroup === cat.id
                    ? 'bg-gradient-to-r from-[var(--accent-crimson)] to-purple-600 text-white font-bold'
                    : 'bg-[var(--bg-card)] theme-body border border-[var(--border-main)] hover:border-[var(--accent-crimson)] hover:text-[var(--accent-crimson)]'}
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Distinct Glass Cards for Skill Groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredGroups.map((group, idx) => (
              <div 
                key={idx} 
                className="glass-card p-5 rounded-2xl border border-[var(--border-main)] hover:border-[var(--accent-crimson)] transition-all duration-300 flex flex-col justify-start space-y-3"
              >
                <div className="text-xs font-mono font-bold theme-crimson uppercase tracking-wider flex items-center justify-between pb-2 border-b border-[var(--border-main)] shrink-0">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-crimson)]"></span>
                    <span>{group.title}</span>
                  </span>
                  <span className="text-[10px] theme-muted font-mono bg-[var(--bg-input)] px-2 py-0.5 rounded border border-[var(--border-main)]">
                    {group.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap items-start content-start gap-2">
                  {group.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx}
                      className={`
                        font-sans text-xs px-3 py-1.5 rounded-xl border transition-all duration-200
                        ${skill.highlight 
                          ? 'bg-[var(--bg-tag)] border-[var(--accent-crimson)] text-[var(--accent-crimson)] font-semibold shadow-sm hover:scale-105' 
                          : 'bg-[var(--bg-input)] theme-body border-[var(--border-main)] hover:border-[var(--accent-crimson)] hover:text-[var(--accent-crimson)]'}
                      `}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Academic & Personal Interests Card */}
          <div className="glass-card p-5 rounded-2xl border border-[var(--border-main)] mt-6">
            <div className="text-xs font-mono font-bold theme-gold uppercase tracking-wider mb-3 flex items-center gap-2 pb-2 border-b border-[var(--border-main)]">
              <Heart size={14} className="text-[var(--accent-crimson)]" />
              <span>Academic & Personal Interests</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {INTERESTS.map((interest, idx) => (
                <span
                  key={idx}
                  className="font-sans text-xs px-3 py-1.5 rounded-xl border bg-[var(--bg-input)] theme-body border-[var(--border-main)]"
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
