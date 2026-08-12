import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Globe, Sparkles, BookOpen, Layers, CheckCircle2, Cpu } from 'lucide-react';

export default function CoursewareModal({ site, onClose }) {
  // Lock background scroll when modal is open
  useEffect(() => {
    if (site) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [site]);

  // Press ESC to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!site) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-200">
      {/* Backdrop Overlay */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Card Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--bg-page)] border border-[var(--border-main)] rounded-3xl shadow-2xl overflow-y-auto flex flex-col justify-between z-10 text-left font-sans">
        
        {/* Modal Top Control Bar */}
        <div className="sticky top-0 z-20 px-6 sm:px-8 py-4 bg-[var(--bg-sidebar)] backdrop-blur-xl border-b border-[var(--border-main)] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-[var(--bg-tag)] border border-[var(--border-main)] text-[var(--accent-crimson)] font-mono text-xs font-bold uppercase tracking-wider">
              {site.courseCode}
            </span>
            <span className="font-mono text-xs text-[var(--accent-gold)] font-semibold hidden sm:inline-block">
              {site.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-input)] border border-[var(--border-main)] theme-title transition-all cursor-pointer shadow-xs"
            title="Close (Esc)"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Main Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Header Title Block */}
          <div>
            <span className="text-xs font-mono text-[var(--accent-crimson)] font-bold uppercase tracking-widest block mb-1">
              {site.badge}
            </span>
            <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold theme-title leading-tight mb-2">
              {site.title}
            </h2>
            <p className="text-sm font-mono text-[var(--accent-gold)] font-semibold">
              {site.subtitle}
            </p>
          </div>

          {/* Quick Action Links Bar */}
          <div className="p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-main)] flex flex-wrap items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-2">
              <Globe size={18} className="text-[var(--accent-crimson)]" />
              <span className="font-mono text-xs theme-heading font-semibold">Live GitHub Pages Mini-Website</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={site.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--accent-crimson)] to-rose-600 hover:opacity-90 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <span>Launch Live Site</span>
                <ExternalLink size={14} />
              </a>

              <a
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[var(--bg-tag)] hover:bg-[var(--bg-input)] border border-[var(--border-main)] theme-title font-mono text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
              >
                <Github size={15} />
                <span>Source Code</span>
              </a>
            </div>
          </div>

          {/* Overview Description */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--accent-gold)] font-bold flex items-center gap-2">
              <BookOpen size={15} className="text-[var(--accent-crimson)]" />
              <span>Courseware Overview & Pedagogy</span>
            </h3>
            <p className="text-xs sm:text-sm theme-body leading-relaxed font-sans">
              {site.desc}
            </p>
          </div>

          {/* Key Features Breakdown */}
          <div className="space-y-3 pt-4 border-t border-[var(--border-main)]">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--accent-gold)] font-bold flex items-center gap-2">
              <Sparkles size={15} className="text-[var(--accent-crimson)]" />
              <span>Interactive Modules & Laboratory Codebase</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {site.features.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-main)] text-xs flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[var(--accent-crimson)] shrink-0 mt-0.5" />
                  <span className="theme-heading font-medium leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights & Impact */}
          <div className="space-y-3 pt-4 border-t border-[var(--border-main)]">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--accent-gold)] font-bold flex items-center gap-2">
              <Layers size={15} className="text-[var(--accent-crimson)]" />
              <span>Pedagogy & Curriculum Highlights</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {site.highlights.map((hl, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-[var(--bg-tag)] border border-[var(--border-main)] font-mono text-xs text-[var(--accent-crimson)] font-semibold flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-crimson)]"></span>
                  <span>{hl}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-2 pt-4 border-t border-[var(--border-main)]">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--accent-gold)] font-bold flex items-center gap-2">
              <Cpu size={15} className="text-[var(--accent-crimson)]" />
              <span>Technology & Tooling Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {site.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-[var(--bg-card)] border border-[var(--border-main)] font-mono text-xs theme-heading font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-20 px-6 sm:px-8 py-4 bg-[var(--bg-sidebar)] backdrop-blur-xl border-t border-[var(--border-main)] flex items-center justify-between font-mono text-xs theme-muted">
          <span>{site.title}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-input)] border border-[var(--border-main)] theme-title font-bold transition-all cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
