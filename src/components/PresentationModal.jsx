import React from 'react';
import { X, Tv, Cpu, Package, Award, GraduationCap, Sun, Moon, BookOpen } from 'lucide-react';
import { AUTHOR_INFO } from '../data/portfolioData';

export default function PresentationModal({ isOpen, onClose, theme, onThemeChange }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[var(--bg-page)] theme-body p-4 sm:p-6 lg:p-8 font-sans overflow-hidden flex flex-col justify-center select-none animate-in fade-in duration-200">
      {/* Background Glow Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[var(--glow-orb)] rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[var(--glow-orb)] rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Controls (Positioned Absolute Top Right - Zero Extra Space) */}
      <div className="absolute top-3 right-4 sm:top-4 sm:right-6 z-30 flex items-center gap-2">
        {/* Light / Dark Mode Toggle */}
        <div className="flex items-center gap-0.5 p-0.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-main)] shadow-sm">
          <button
            onClick={() => onThemeChange('dark')}
            className={`p-1 rounded transition-all cursor-pointer ${theme === 'dark' ? 'bg-[var(--accent-crimson)] text-white shadow-xs' : 'theme-muted hover:text-[var(--accent-crimson)]'}`}
            title="Dark Presentation Mode"
          >
            <Moon size={13} />
          </button>
          <button
            onClick={() => onThemeChange('light')}
            className={`p-1 rounded transition-all cursor-pointer ${theme === 'light' ? 'bg-[var(--accent-crimson)] text-white shadow-xs' : 'theme-muted hover:text-[var(--accent-crimson)]'}`}
            title="Light Presentation Mode"
          >
            <Sun size={13} />
          </button>
          <button
            onClick={() => onThemeChange('sepia')}
            className={`p-1 rounded transition-all cursor-pointer ${theme === 'sepia' ? 'bg-[var(--accent-crimson)] text-white shadow-xs' : 'theme-muted hover:text-[var(--accent-crimson)]'}`}
            title="Sepia Academic Mode"
          >
            <BookOpen size={13} />
          </button>
        </div>

        <button
          onClick={onClose}
          className="px-3 py-1 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-input)] border border-[var(--border-main)] theme-title text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
          title="Exit Presentation (Esc)"
        >
          <X size={14} />
          <span>Exit Presentation</span>
        </button>
      </div>

      {/* Main Big-Screen Keynote Slide Content */}
      <div className="relative z-10 my-auto max-w-5xl mx-auto w-full flex flex-col justify-center space-y-4 sm:space-y-5">
        
        {/* Top Speaker Spotlight Banner (Speaker in Complete Focus) */}
        <div className="glass-card p-4 sm:p-5 rounded-3xl border-2 border-[var(--accent-crimson)]/50 bg-[var(--bg-card)]/90 backdrop-blur-xl shadow-2xl flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          {/* Speaker Avatar Frame */}
          <div className="relative shrink-0">
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[var(--accent-crimson)] via-purple-500 to-[var(--accent-gold)] opacity-70 blur-md animate-pulse-glow"></div>
            <img
              src={AUTHOR_INFO.avatarUrl}
              alt={AUTHOR_INFO.name}
              className="relative w-28 h-36 sm:w-32 sm:h-40 object-cover rounded-xl border-2 border-[var(--border-main)] shadow-xl"
              onError={(e) => { e.currentTarget.src = "/profile.jpg"; }}
            />
            <div className="absolute bottom-1.5 left-1.5 right-1.5 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/10 font-mono text-[9px] text-center text-white font-semibold shadow-md">
              Dept. of CSE
            </div>
          </div>

          {/* Speaker Title & Credentials */}
          <div className="space-y-1 flex-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--bg-tag)] border border-[var(--border-main)] theme-crimson font-mono text-[11px] font-bold shadow-xs">
              <Tv size={12} className="text-[var(--accent-gold)]" />
              <span>KEYNOTE SPEAKER & EDUCATOR</span>
            </div>
            <h1 className="font-['Cinzel'] font-extrabold text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-[var(--text-title)] via-[var(--accent-crimson)] to-[var(--accent-gold)] bg-clip-text text-transparent tracking-tight leading-tight drop-shadow-md">
              {AUTHOR_INFO.name}
            </h1>
            <p className="text-xs sm:text-sm font-semibold theme-crimson font-mono">
              {AUTHOR_INFO.role} · <span className="theme-heading font-medium">{AUTHOR_INFO.institution}</span>
            </p>
          </div>
        </div>

        {/* 4 Supporting Key Pillars Grid (Tidy & Balanced) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          <div className="glass-card p-4 rounded-2xl border border-[var(--border-main)] space-y-1 transition-all flex flex-col justify-start">
            <div className="font-mono text-xs sm:text-sm theme-gold uppercase tracking-wider font-bold flex items-center gap-2">
              <GraduationCap size={15} className="text-[var(--accent-crimson)] shrink-0" />
              <span>Academic Profile</span>
            </div>
            <p className="text-xs sm:text-sm theme-heading leading-snug font-medium">
              Assistant Professor in CSE with 4+ years of academic instruction across CSE & IT. Specializes in Python, DSA/DAA, Software Engineering, C Programming, and OBE curriculum design.
            </p>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-[var(--border-main)] space-y-1 transition-all flex flex-col justify-start">
            <div className="font-mono text-xs sm:text-sm theme-gold uppercase tracking-wider font-bold flex items-center gap-2">
              <Cpu size={15} className="text-[var(--accent-crimson)] shrink-0" />
              <span>Research Vision</span>
            </div>
            <p className="text-xs sm:text-sm theme-heading leading-snug font-medium">
              Scholarly focus at the intersection of High-Performance Computing, Parallel Algorithm Optimization, Applied AI in Financial Risk, and Edge IoT Telemetry.
            </p>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-[var(--border-main)] space-y-1 transition-all flex flex-col justify-start">
            <div className="font-mono text-xs sm:text-sm theme-gold uppercase tracking-wider font-bold flex items-center gap-2">
              <Package size={15} className="text-[var(--accent-crimson)] shrink-0" />
              <span>Open Source Tooling</span>
            </div>
            <p className="text-xs sm:text-sm theme-heading leading-snug font-medium">
              Creator and maintainer of official packages on CTAN (LaTeX) and Typst Universe (<span className="font-mono text-[var(--accent-crimson)] font-bold text-xs">modernclassnotes</span>, <span className="font-mono text-[var(--accent-crimson)] font-bold text-xs">modern-class-presentation</span>).
            </p>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-[var(--border-main)] space-y-1 transition-all flex flex-col justify-start">
            <div className="font-mono text-xs sm:text-sm theme-gold uppercase tracking-wider font-bold flex items-center gap-2">
              <Award size={15} className="text-[var(--accent-crimson)] shrink-0" />
              <span>Institutional Service</span>
            </div>
            <p className="text-xs sm:text-sm theme-heading leading-snug font-medium">
              Active member in IQAC and NAAC Criteria 2 accreditation committees, NVIDIA Jetson AI Lab facilitator, and faculty advisor for student developer communities.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
