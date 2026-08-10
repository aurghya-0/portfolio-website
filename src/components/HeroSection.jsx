import React, { useState } from 'react';
import { AUTHOR_INFO, QUICK_STATS } from '../data/portfolioData';
import { Scroll, Mail, ExternalLink, Search, Command, BookOpen, Package, Briefcase, Award } from 'lucide-react';

export default function HeroSection({ onOpenSearch, onOpenCv }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 15, y: -x * 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const getStatIcon = (idx) => {
    switch (idx) {
      case 0: return <Scroll size={16} className="text-[var(--accent-crimson)]" />;
      case 1: return <Package size={16} className="text-[var(--accent-gold)]" />;
      case 2: return <Briefcase size={16} className="text-[var(--accent-crimson)]" />;
      case 3: return <Award size={16} className="text-[var(--accent-gold)]" />;
      default: return <Award size={16} className="text-[var(--accent-crimson)]" />;
    }
  };

  const AvatarCard = () => (
    <div 
      className="relative group mx-auto md:mx-0 w-48 sm:w-56 md:w-52 perspective-1000 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Outer Shimmer Glow */}
      <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[var(--accent-crimson)] via-purple-500 to-[var(--accent-gold)] opacity-35 group-hover:opacity-80 blur-xl transition duration-500" />
      
      {/* 3D Tilt Card Frame */}
      <div 
        className="relative rounded-2xl p-1.5 bg-[var(--bg-card)] border border-[var(--border-main)] overflow-hidden shadow-2xl transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
        }}
      >
        <img 
          src={AUTHOR_INFO.avatarUrl} 
          alt={`Portrait of ${AUTHOR_INFO.name}`} 
          className="w-full aspect-[4/5] object-cover rounded-xl transition duration-300 group-hover:scale-105 shadow-md"
          onError={(e) => { e.currentTarget.src = "/profile.jpg"; }}
        />

        {/* Overlay Glass Badge */}
        <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 font-mono text-[10px] text-center text-white font-medium tracking-wide shadow-md flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-crimson)] animate-ping"></span>
          <span>Dept. of CSE · NSHM</span>
        </div>
      </div>
    </div>
  );

  return (
    <header className="relative pt-12 lg:pt-16 pb-12 px-6 sm:px-10 lg:px-12 border-b border-[var(--border-main)] bg-gradient-to-b from-[var(--bg-surface)] to-[var(--bg-page)] overflow-hidden" id="orientation">
      {/* Background Decorative Glow Orbs */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[var(--glow-orb)] rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-[var(--glow-orb)] rounded-full blur-3xl pointer-events-none" />

      {/* Floating Math & CS Ambient Overlay Icons */}
      <div className="absolute top-6 right-60 font-mono text-xs text-[var(--accent-crimson)] opacity-30 pointer-events-none select-none animate-float-math hidden sm:block">
        O(N log N)
      </div>
      <div className="absolute top-32 left-2/3 font-serif italic text-sm text-[var(--accent-gold)] opacity-30 pointer-events-none select-none animate-float-math hidden lg:block" style={{ animationDelay: '2s' }}>
        ∫ f(x) dx
      </div>

      <div className="relative z-10 flex flex-col md:grid md:grid-cols-[1fr_210px] gap-8 items-start">
        {/* Main Text Content & Buttons Column */}
        <div className="flex flex-col">
          {/* Status Badge & Search Trigger */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-tag)] border border-[var(--border-main)] text-[var(--accent-crimson)] font-mono text-xs shadow-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-crimson)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-crimson)]"></span>
              </span>
              <span>{AUTHOR_INFO.role} @ {AUTHOR_INFO.institution.split(',')[0]}</span>
            </div>

            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[var(--accent-crimson)] theme-body hover:text-[var(--accent-crimson)] font-mono text-xs flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-sm group"
                title="Open Spotlight Search (Cmd + K)"
              >
                <Search size={13} className="text-[var(--accent-crimson)] group-hover:scale-110 transition-transform" />
                <span>Search Portfolio</span>
                <kbd className="hidden sm:inline-flex items-center gap-0.5 text-[10px] bg-[var(--bg-tag)] px-1.5 py-0.2 rounded font-semibold theme-crimson border border-[var(--border-main)]">
                  <Command size={9} /> K
                </kbd>
              </button>
            )}
          </div>

          {/* Name & Title */}
          <h1 className="font-['Cinzel'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight theme-title mb-2 bg-gradient-to-r from-[var(--text-title)] via-[var(--accent-crimson)] to-[var(--accent-gold)] bg-clip-text text-transparent drop-shadow-sm leading-tight">
            {AUTHOR_INFO.name}
          </h1>

          <p className="font-['Newsreader'] italic text-lg sm:text-xl text-[var(--accent-crimson)] font-medium mb-5 leading-snug">
            {AUTHOR_INFO.tagline}
          </p>

          {/* MOBILE ONLY: Hero Avatar Card rendered BEFORE short bio section */}
          <div className="block md:hidden my-4 self-center sm:self-start">
            <AvatarCard />
          </div>

          {/* Short Bio */}
          <p className="theme-body text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
            {AUTHOR_INFO.bio}
          </p>

          {/* Action Buttons Section */}
          <div className="space-y-3">
            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button 
                onClick={() => scrollTo('publications')}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[var(--accent-crimson)] to-rose-600 hover:opacity-90 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <Scroll size={15} />
                <span>Research Publications</span>
              </button>

              <button 
                onClick={() => scrollTo('contact')}
                className="px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[var(--accent-crimson)] theme-heading hover:text-[var(--accent-crimson)] font-mono text-xs font-medium flex items-center gap-2 transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
              >
                <Mail size={15} />
                <span>Contact & Office Hours</span>
              </button>
            </div>

            {/* Social Media Link Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a 
                href={AUTHOR_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[var(--accent-crimson)] theme-body hover:text-[var(--accent-crimson)] font-mono text-xs flex items-center gap-1.5 transition-all duration-200 shadow-sm"
              >
                <i className="fa-brands fa-github text-xs"></i>
                <span>GitHub</span>
                <ExternalLink size={10} className="opacity-50" />
              </a>

              <a 
                href={AUTHOR_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[var(--accent-crimson)] theme-body hover:text-[var(--accent-crimson)] font-mono text-xs flex items-center gap-1.5 transition-all duration-200 shadow-sm"
              >
                <i className="fa-brands fa-linkedin text-xs text-[var(--accent-gold)]"></i>
                <span>LinkedIn</span>
                <ExternalLink size={10} className="opacity-50" />
              </a>

              <a 
                href={AUTHOR_INFO.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[var(--accent-crimson)] theme-body hover:text-[var(--accent-crimson)] font-mono text-xs flex items-center gap-1.5 transition-all duration-200 shadow-sm"
              >
                <i className="fa-brands fa-x-twitter text-xs"></i>
                <span>Twitter</span>
                <ExternalLink size={10} className="opacity-50" />
              </a>

              <a 
                href={AUTHOR_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[var(--accent-crimson)] theme-body hover:text-[var(--accent-crimson)] font-mono text-xs flex items-center gap-1.5 transition-all duration-200 shadow-sm"
              >
                <i className="fa-brands fa-instagram text-xs text-[var(--accent-crimson)]"></i>
                <span>Instagram</span>
                <ExternalLink size={10} className="opacity-50" />
              </a>
            </div>
          </div>
        </div>

        {/* DESKTOP / TABLET ONLY (>= md): Hero Avatar Card rendered in right column */}
        <div className="hidden md:block self-center pt-2">
          <AvatarCard />
        </div>
      </div>

      {/* Quick Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[var(--border-main)]">
        {QUICK_STATS.map((stat, idx) => (
          <div 
            key={idx} 
            className="glass-card p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <div className="font-mono text-xl sm:text-2xl font-bold text-[var(--accent-gold)]">
                {stat.value}
              </div>
              <div className="p-1.5 rounded-lg bg-[var(--bg-input)] border border-[var(--border-main)] group-hover:border-[var(--accent-crimson)] transition-colors">
                {getStatIcon(idx)}
              </div>
            </div>

            <div className="text-xs theme-muted font-medium leading-snug">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}
