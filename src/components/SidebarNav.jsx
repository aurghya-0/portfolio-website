import React from 'react';
import { AUTHOR_INFO, SYLLABUS_NAV } from '../data/portfolioData';
import { BookOpen, MapPin, Award } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function SidebarNav({ activeSection, isOpen, closeMenu, theme, onThemeChange, onOpenCv }) {
  const handleNavClick = (id) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Overlay backdrop for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity" 
          onClick={closeMenu} 
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:sticky top-0 left-0 z-50 h-screen w-70 lg:w-full 
          bg-[var(--bg-sidebar)] backdrop-blur-xl border-r border-[var(--border-main)]
          p-6 lg:p-7 flex flex-col justify-between
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        aria-label="Academic Index Navigation"
      >
        <div>
          {/* Header Branding */}
          <div className="mb-6 pb-4 border-b border-[var(--border-main)] flex items-center justify-between gap-2">
            <div>
              <span className="block font-mono text-[11px] tracking-widest uppercase theme-gold font-semibold mb-1 flex items-center gap-1.5">
                <BookOpen size={13} className="text-[var(--accent-crimson)]" />
                {AUTHOR_INFO.department}
              </span>
              <h2 className="font-['Cinzel'] text-xl font-bold theme-title tracking-tight">
                {AUTHOR_INFO.name}
              </h2>
            </div>
          </div>

          {/* Navigation Links (CSE-xxx codes removed) */}
          <ul className="space-y-1">
            {SYLLABUS_NAV.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`
                      group flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border-l-2 text-xs sm:text-sm transition-all duration-200
                      ${isActive 
                        ? 'bg-[var(--bg-tag)] border-[var(--accent-crimson)] text-[var(--accent-crimson)] font-semibold shadow-sm' 
                        : 'border-transparent theme-muted hover:text-[var(--accent-crimson)] hover:bg-[var(--bg-tag)]'}
                    `}
                  >
                    <span className="truncate font-medium">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Sidebar Footer with Theme Switcher */}
        <div className="pt-4 border-t border-[var(--border-main)] font-mono text-[11px] theme-muted space-y-3">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] uppercase tracking-wider theme-muted font-semibold">Theme</span>
            <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
          </div>

          <div className="space-y-1 pt-1">
            <div className="flex items-center gap-1.5 theme-body">
              <MapPin size={12} className="text-[var(--accent-gold)]" />
              <span>{AUTHOR_INFO.location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[var(--accent-crimson)] font-semibold pt-0.5">
              <Award size={12} />
              <span>Faculty Portfolio 2026</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
