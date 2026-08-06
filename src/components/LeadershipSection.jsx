import React from 'react';
import { LEADERSHIP } from '../data/portfolioData';
import { Users, Code, Cpu, BookOpen } from 'lucide-react';

export default function LeadershipSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'users': return <Users size={14} className="text-[var(--accent-crimson)]" />;
      case 'code': return <Code size={14} className="text-[var(--accent-crimson)]" />;
      case 'cpu': return <Cpu size={14} className="text-[var(--accent-crimson)]" />;
      case 'book-open': return <BookOpen size={14} className="text-[var(--accent-crimson)]" />;
      case 'google': return <i className="fa-brands fa-google text-[13px] text-[var(--accent-crimson)]" />;
      default: return <Users size={14} className="text-[var(--accent-crimson)]" />;
    }
  };

  return (
    <section id="leadership" className="py-12 lg:py-16 px-6 sm:px-10 lg:px-12 border-b border-[var(--border-main)]">
      {/* Eyebrow */}
      <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-crimson)] tracking-widest uppercase mb-3 font-semibold">
        <span className="w-2 h-2 rounded-full bg-[var(--accent-crimson)]"></span>
        <span>Academic Leadership</span>
      </div>

      <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold theme-title mb-8 tracking-tight">
        Institutional Service & Community Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {LEADERSHIP.map((item, idx) => (
          <div 
            key={idx}
            className="glass-card p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent-crimson)] mb-1.5 flex items-center gap-1.5 font-semibold">
              {getIcon(item.icon)}
              <span>{item.type}</span>
            </div>

            <h3 className="font-['Newsreader'] text-lg font-semibold theme-title mb-1.5 group-hover:text-[var(--accent-crimson)] transition-colors">
              {item.title}
            </h3>

            <p className="text-xs theme-body leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
