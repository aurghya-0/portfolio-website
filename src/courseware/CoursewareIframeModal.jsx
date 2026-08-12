import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Globe, RefreshCw, Monitor } from 'lucide-react';

export default function CoursewareIframeModal({ site, onClose }) {
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!site) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Embedded Iframe Container */}
      <div className="relative w-full max-w-6xl h-[92vh] bg-[var(--bg-page)] border border-[var(--border-main)] rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-between z-10 font-sans">
        
        {/* Header Control Bar */}
        <div className="px-4 sm:px-6 py-3 bg-[var(--bg-sidebar)] backdrop-blur-xl border-b border-[var(--border-main)] flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="p-1.5 rounded-lg bg-[var(--bg-tag)] text-[var(--accent-crimson)] shrink-0">
              <Monitor size={16} />
            </div>
            <div className="truncate">
              <h3 className="font-['Cinzel'] font-bold text-sm sm:text-base theme-title truncate leading-tight">
                {site.title}
              </h3>
              <p className="text-[11px] font-mono text-[var(--accent-gold)] truncate">
                {site.courseCode} · {site.liveUrl}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={site.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[var(--accent-crimson)] to-rose-600 hover:opacity-90 text-white font-mono text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
            >
              <Globe size={13} />
              <span className="hidden sm:inline">Open in New Tab</span>
              <ExternalLink size={12} />
            </a>

            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[var(--accent-crimson)] theme-heading transition-all cursor-pointer"
              title="View GitHub Repository"
            >
              <Github size={16} />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-input)] border border-[var(--border-main)] theme-title transition-all cursor-pointer"
              title="Close (Esc)"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Embedded Responsive Live Iframe */}
        <div className="relative flex-1 bg-white w-full h-full overflow-hidden">
          <iframe
            src={site.liveUrl}
            title={site.title}
            className="w-full h-full border-0"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        </div>

        {/* Footer Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-[var(--bg-sidebar)] border-t border-[var(--border-main)] flex items-center justify-between font-mono text-xs theme-muted shrink-0">
          <span className="truncate">Interactive Live Preview — {site.liveUrl}</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg bg-[var(--bg-card)] border border-[var(--border-main)] theme-title font-bold transition-all cursor-pointer"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
}
