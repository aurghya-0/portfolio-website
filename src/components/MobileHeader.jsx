import React from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function MobileHeader({ isOpen, toggleMenu, theme, onThemeChange }) {
  return (
    <header className="lg:hidden sticky top-0 z-50 bg-[var(--bg-header)] backdrop-blur-md border-b border-[var(--border-main)] px-4 py-3 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-crimson)] shadow-[0_0_8px_var(--accent-crimson)] animate-pulse"></div>
        <span className="font-['Cinzel'] font-bold theme-title text-sm sm:text-base tracking-wide">
          Aurghyadip Kundu
        </span>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
        
        <button 
          onClick={toggleMenu} 
          aria-label="Toggle Navigation Menu"
          className="bg-[var(--bg-card)] border border-[var(--border-main)] text-[var(--accent-crimson)] px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-xs font-mono transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
        >
          {isOpen ? <X size={14} /> : <Menu size={14} />}
          <span>{isOpen ? 'Close' : 'Syllabus'}</span>
        </button>
      </div>
    </header>
  );
}
