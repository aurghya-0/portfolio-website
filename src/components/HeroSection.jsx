import React from 'react';
import { AUTHOR_INFO, QUICK_STATS } from '../data/portfolioData';
import { Scroll, Mail, ExternalLink } from 'lucide-react';

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const AvatarCard = () => (
    <div className="relative group mx-auto md:mx-0 w-44 sm:w-48 md:w-44">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[var(--accent-crimson)] to-[var(--accent-gold)] opacity-30 group-hover:opacity-60 blur-lg transition duration-500" />
      <div className="relative rounded-2xl p-1 bg-[var(--bg-card)] border border-[var(--border-main)] overflow-hidden shadow-2xl">
        <img 
          src={AUTHOR_INFO.avatarUrl} 
          alt={`Portrait of ${AUTHOR_INFO.name}`} 
          className="w-full h-52 object-cover rounded-xl transition duration-300 group-hover:scale-105"
          onError={(e) => { e.currentTarget.src = "/profile.jpg"; }}
        />
      </div>
    </div>
  );

  return (
    <header className="relative pt-12 lg:pt-16 pb-12 px-6 sm:px-10 lg:px-12 border-b border-[var(--border-main)] bg-gradient-to-b from-[var(--bg-surface)] to-[var(--bg-page)] overflow-hidden" id="orientation">
      {/* Background Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[var(--glow-orb)] rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-[var(--glow-orb)] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:grid md:grid-cols-[1fr_180px] gap-8 items-start">
        {/* Main Text Content & Buttons Column */}
        <div className="flex flex-col">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-tag)] border border-[var(--border-main)] text-[var(--accent-crimson)] font-mono text-xs mb-5 shadow-sm font-medium self-start">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-crimson)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-crimson)]"></span>
            </span>
            <span>{AUTHOR_INFO.role} @ {AUTHOR_INFO.institution.split(',')[0]}</span>
          </div>

          {/* Name & Title */}
          <h1 className="font-['Cinzel'] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight theme-title mb-3 bg-gradient-to-r from-[var(--text-title)] via-[var(--accent-crimson)] to-[var(--accent-gold)] bg-clip-text text-transparent drop-shadow-sm">
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
          <p className="theme-body text-sm sm:text-base leading-relaxed max-w-2xl mb-5 md:mb-7">
            {AUTHOR_INFO.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-1">
            <button 
              onClick={() => scrollTo('publications')}
              className="px-4 py-2.5 rounded-lg bg-[var(--accent-crimson)] hover:opacity-90 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <Scroll size={14} />
              <span>Research Publications</span>
            </button>

            <button 
              onClick={() => scrollTo('contact')}
              className="px-4 py-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[var(--accent-crimson)] theme-heading hover:text-[var(--accent-crimson)] font-mono text-xs font-medium flex items-center gap-2 transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
            >
              <Mail size={14} />
              <span>Contact & Office Hours</span>
            </button>

            <a 
              href={AUTHOR_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[var(--accent-crimson)] theme-body hover:text-[var(--accent-crimson)] font-mono text-xs flex items-center gap-1.5 transition-all duration-200 shadow-sm"
            >
              <i className="fa-brands fa-github text-sm"></i>
              <span>GitHub</span>
              <ExternalLink size={11} className="opacity-60" />
            </a>

            <a 
              href={AUTHOR_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[var(--accent-crimson)] theme-body hover:text-[var(--accent-crimson)] font-mono text-xs flex items-center gap-1.5 transition-all duration-200 shadow-sm"
            >
              <i className="fa-brands fa-linkedin text-sm text-[var(--accent-gold)]"></i>
              <span>LinkedIn</span>
              <ExternalLink size={11} className="opacity-60" />
            </a>

            <a 
              href={AUTHOR_INFO.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[var(--accent-crimson)] theme-body hover:text-[var(--accent-crimson)] font-mono text-xs flex items-center gap-1.5 transition-all duration-200 shadow-sm"
            >
              <i className="fa-brands fa-x-twitter text-sm"></i>
              <span>Twitter</span>
              <ExternalLink size={11} className="opacity-60" />
            </a>

            <a 
              href={AUTHOR_INFO.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3.5 py-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[var(--accent-crimson)] theme-body hover:text-[var(--accent-crimson)] font-mono text-xs flex items-center gap-1.5 transition-all duration-200 shadow-sm"
            >
              <i className="fa-brands fa-instagram text-sm text-[var(--accent-crimson)]"></i>
              <span>Instagram</span>
              <ExternalLink size={11} className="opacity-60" />
            </a>
          </div>
        </div>

        {/* DESKTOP / TABLET ONLY (>= md): Hero Avatar Card rendered in right column */}
        <div className="hidden md:block">
          <AvatarCard />
        </div>
      </div>

      {/* Quick Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-12 pt-8 border-t border-[var(--border-main)]">
        {QUICK_STATS.map((stat, idx) => (
          <div 
            key={idx} 
            className="glass-card p-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="font-mono text-xl sm:text-2xl font-bold text-[var(--accent-gold)] mb-0.5">
              {stat.value}
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
