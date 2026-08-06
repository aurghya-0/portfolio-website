import React from 'react';
import { OPEN_SOURCE, PROJECTS } from '../data/portfolioData';
import { Package, ExternalLink, FolderGit2 } from 'lucide-react';

export default function OpenSourceSection() {
  return (
    <section id="opensource" className="py-12 lg:py-16 px-6 sm:px-10 lg:px-12 border-b border-[var(--border-main)]">
      <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-crimson)] tracking-widest uppercase mb-3 font-semibold">
        <span className="w-2 h-2 rounded-full bg-[var(--accent-crimson)]"></span>
        <span>Open Source & Projects</span>
      </div>

      <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold theme-title mb-8 tracking-tight">
        Open Source Contributions & Personal Projects
      </h2>

      <div className="mb-10">
        <div className="font-mono text-xs tracking-wider uppercase text-[var(--accent-gold)] pb-2 mb-4 border-b border-[var(--border-main)] flex items-center gap-2 font-semibold">
          <Package size={15} className="text-[var(--accent-crimson)]" />
          <span>Open Source Contributions</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {OPEN_SOURCE.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 group block"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent-crimson)] mb-1 font-semibold">
                    {item.platform} · {item.year}
                  </div>
                  <h3 className="font-['Newsreader'] text-lg font-semibold theme-title group-hover:text-[var(--accent-crimson)] transition-colors">
                    {item.name}
                  </h3>
                </div>
                <ExternalLink size={14} className="text-[var(--accent-gold)] shrink-0 mt-1 opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-[11px] theme-muted mb-2 font-medium">{item.role}</p>
              <p className="text-xs theme-body leading-relaxed">{item.desc}</p>
            </a>
          ))}
        </div>
      </div>

      <div>
        <div className="font-mono text-xs tracking-wider uppercase text-[var(--accent-gold)] pb-2 mb-4 border-b border-[var(--border-main)] flex items-center gap-2 font-semibold">
          <FolderGit2 size={15} className="text-[var(--accent-crimson)]" />
          <span>Projects</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROJECTS.map((project, idx) => {
            const CardWrapper = project.url ? 'a' : 'div';
            const linkProps = project.url
              ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
              : {};

            return (
              <CardWrapper
                key={idx}
                {...linkProps}
                className="glass-card p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 group block"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent-crimson)] mb-1 font-semibold">
                      {project.period}
                    </div>
                    <h3 className="font-['Newsreader'] text-lg font-semibold theme-title group-hover:text-[var(--accent-crimson)] transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  {project.url && (
                    <ExternalLink size={14} className="text-[var(--accent-gold)] shrink-0 mt-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
                <p className="text-[11px] theme-muted mb-2 font-medium">{project.type}</p>
                <p className="text-xs theme-body leading-relaxed">{project.desc}</p>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
