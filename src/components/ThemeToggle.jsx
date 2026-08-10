import React from 'react';
import { Sun, Moon, Laptop, BookOpen } from 'lucide-react';

export default function ThemeToggle({ theme, onThemeChange }) {
  const options = [
    { id: 'dark', label: 'Dark', icon: Moon },
    { id: 'light', label: 'Light', icon: Sun },
    { id: 'sepia', label: 'Sepia', icon: BookOpen },
    { id: 'system', label: 'System', icon: Laptop },
  ];

  return (
    <div className="w-full flex items-center justify-between p-1 rounded-xl bg-[var(--bg-input)] border border-[var(--border-main)] shadow-sm">
      {options.map((option) => {
        const Icon = option.icon;
        const isActive = theme === option.id;
        return (
          <button
            key={option.id}
            onClick={() => onThemeChange(option.id)}
            title={`Switch to ${option.label} theme`}
            aria-label={`Switch to ${option.label} theme`}
            className={`
              flex-1 px-1.5 py-1 rounded-lg text-xs font-mono flex items-center justify-center gap-1 transition-all duration-200 cursor-pointer min-w-0
              ${isActive 
                ? 'bg-[var(--accent-crimson)] text-white font-semibold shadow-sm' 
                : 'text-[var(--text-muted)] hover:text-[var(--accent-crimson)] hover:bg-[var(--bg-tag)]'}
            `}
          >
            <Icon size={12} className="shrink-0" />
            <span className="hidden sm:inline text-[10px] truncate">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
