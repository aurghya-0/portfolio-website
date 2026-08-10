import React, { useState } from 'react';
import { LEADERSHIP } from '../data/portfolioData';
import { Users, Code, Cpu, Award, ShieldCheck, FileCheck, Building2 } from 'lucide-react';

export default function LeadershipSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services & Committees' },
    { id: 'Accreditation & Quality Assurance', label: 'Accreditation & IQAC/NAAC' },
    { id: 'Research & Lab Facilities', label: 'Research & Lab Facilities' },
    { id: 'Student Innovation & Coding Clubs', label: 'Student Clubs & Mentorship' }
  ];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'award': return <Award size={15} className="text-[var(--accent-crimson)]" />;
      case 'file-check': return <FileCheck size={15} className="text-[var(--accent-crimson)]" />;
      case 'shield-check': return <ShieldCheck size={15} className="text-[var(--accent-crimson)]" />;
      case 'cpu': return <Cpu size={15} className="text-[var(--accent-crimson)]" />;
      case 'users': return <Users size={15} className="text-[var(--accent-crimson)]" />;
      case 'code': return <Code size={15} className="text-[var(--accent-crimson)]" />;
      case 'google': return <i className="fa-brands fa-google text-[14px] text-[var(--accent-crimson)]" />;
      default: return <Award size={15} className="text-[var(--accent-crimson)]" />;
    }
  };

  const filteredItems = LEADERSHIP.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <section id="leadership" className="py-12 lg:py-16 px-6 sm:px-10 lg:px-12 border-b border-[var(--border-main)]">
      {/* Eyebrow */}
      <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-crimson)] tracking-widest uppercase mb-3 font-semibold">
        <span className="w-2 h-2 rounded-full bg-[var(--accent-crimson)]"></span>
        <span>Institutional Governance & Service</span>
      </div>

      <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold theme-title mb-6 tracking-tight">
        Academic Committees & Service Leadership
      </h2>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`
              px-3.5 py-1.5 rounded-full font-mono text-xs transition-all duration-200 cursor-pointer
              ${selectedCategory === cat.id
                ? 'bg-[var(--accent-crimson)] text-white font-semibold shadow-sm'
                : 'bg-[var(--bg-input)] theme-body border border-[var(--border-main)] hover:border-[var(--accent-crimson)] hover:text-[var(--accent-crimson)]'}
            `}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Governance & Leadership Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {filteredItems.map((item, idx) => (
          <div 
            key={idx}
            className="glass-card p-5 rounded-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider theme-crimson flex items-center gap-1.5">
                  {getIcon(item.icon)}
                  <span>{item.type}</span>
                </span>
                <span className="font-mono text-[10px] text-[var(--accent-gold)] bg-[var(--bg-tag)] px-2 py-0.5 rounded border border-[var(--border-main)] font-semibold">
                  {item.category.split('&')[0].trim()}
                </span>
              </div>

              <h3 className="font-['Newsreader'] text-xl font-semibold theme-title mb-1 group-hover:text-[var(--accent-crimson)] transition-colors">
                {item.title}
              </h3>

              <div className="text-xs font-medium theme-muted mb-3 flex items-center gap-1.5">
                <Building2 size={13} className="text-[var(--accent-gold)] shrink-0" />
                <span>{item.institution}</span>
              </div>

              <p className="text-xs theme-body leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
