import React from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';

export default function ThemeToggle({ theme, onThemeChange }) {
  const options = [
    { id: 'dark', label: 'Dark', icon: Moon },
    { id: 'light', label: 'Light', icon: Sun },
    { id: 'system', label: 'System', icon: Laptop },
  ];

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg bg-[var(--bg-input)] border border-[var(--border-main)] shadow-sm">
      {options.map((option) => {
        const Icon = option.icon;
        const isActive = theme === option.id;
        return (
          <button
            key={option.id}
            onClick={() => onThemeChange(option.id)}
            title={`Switch to ${option.label} theme`}
            className={`
              px-2 py-1 rounded-md text-xs font-mono flex items-center gap-1 transition-all duration-200 cursor-pointer
              ${isActive 
                ? 'bg-[var(--accent-crimson)] text-white font-semibold shadow-sm' 
                : 'text-[var(--text-muted)] hover:text-[var(--accent-crimson)] hover:bg-[var(--bg-tag)]'}
            `}
          >
            <Icon size={12} />
            <span className="hidden sm:inline text-[11px]">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
