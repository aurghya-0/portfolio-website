import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, X, BookOpen, Scroll, Package, Award, Briefcase, 
  ArrowRight, Command, CornerDownLeft, Globe 
} from 'lucide-react';
import { PUBLICATIONS, COURSES, OPEN_SOURCE, EXPERIENCE, SKILL_GROUPS, COURSEWARE_SITES } from '../data/portfolioData';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Build searchable items index
  const items = [];

  COURSEWARE_SITES.forEach((site) => {
    items.push({
      id: `courseware-${site.id}`,
      type: 'Courseware Portal',
      title: site.title,
      subtitle: `${site.courseCode} · ${site.subtitle}`,
      url: site.liveUrl,
      targetId: 'courseware',
      icon: Globe
    });
  });

  PUBLICATIONS.forEach((pub) => {
    items.push({
      id: `pub-${pub.id}`,
      type: 'Publication',
      title: pub.title,
      subtitle: `${pub.venueTag} (${pub.year})`,
      targetId: 'publications',
      icon: Scroll
    });
  });

  COURSES.forEach((course) => {
    items.push({
      id: `course-${course.code}`,
      type: 'Course',
      title: `${course.code}: ${course.name}`,
      subtitle: course.desc,
      targetId: 'teaching',
      icon: BookOpen
    });
  });

  OPEN_SOURCE.forEach((item) => {
    items.push({
      id: `os-${item.name}`,
      type: 'Open Source',
      title: item.name,
      subtitle: `${item.platform} · ${item.role}`,
      url: item.url,
      targetId: 'opensource',
      icon: Package
    });
  });

  EXPERIENCE.forEach((exp, idx) => {
    items.push({
      id: `exp-${idx}`,
      type: 'Experience',
      title: exp.role,
      subtitle: exp.institution,
      targetId: 'experience',
      icon: Briefcase
    });
  });

  SKILL_GROUPS.forEach((group) => {
    group.skills.forEach((skill) => {
      items.push({
        id: `skill-${skill.name}`,
        type: 'Skill',
        title: skill.name,
        subtitle: `Skill Category: ${group.title}`,
        targetId: 'toolkit',
        icon: Award
      });
    });
  });

  const filteredItems = items.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q) || item.type.toLowerCase().includes(q);
  }).slice(0, 8);

  const handleSelect = (item) => {
    onClose();
    if (item.url) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else if (item.targetId) {
      const el = document.getElementById(item.targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-md transition-opacity">
      {/* Click backdrop to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-[var(--bg-card)] border border-[var(--border-main)] rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 border-b border-[var(--border-main)] bg-[var(--bg-input)]">
          <Search size={18} className="theme-muted shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            className="w-full py-4 bg-transparent theme-title text-sm sm:text-base placeholder:text-[var(--text-subtle)] focus:outline-none font-sans"
            placeholder="Search papers, courses, repos, skills... (Type 'Python', 'CUDA', 'NASL')"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
          />
          {query ? (
            <button onClick={() => setQuery('')} className="p-1 theme-muted hover:text-[var(--text-title)]" aria-label="Clear search">
              <X size={16} />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] bg-[var(--bg-tag)] border border-[var(--border-main)] text-[var(--accent-crimson)] px-2 py-0.5 rounded font-semibold">
              ESC
            </kbd>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-[var(--border-main)]">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`
                    flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-150
                    ${isSelected 
                      ? 'bg-[var(--accent-crimson)] text-white shadow-sm' 
                      : 'hover:bg-[var(--bg-card-hover)]'}
                  `}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-white/20 text-white' : 'bg-[var(--bg-input)] theme-crimson'}`}>
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-[10px] uppercase font-bold px-1.5 py-0.2 rounded border ${isSelected ? 'bg-white/20 border-white/30 text-white' : 'bg-[var(--bg-tag)] border-[var(--border-main)] text-[var(--accent-gold)]'}`}>
                          {item.type}
                        </span>
                        <h4 className={`text-xs sm:text-sm font-semibold truncate ${isSelected ? 'text-white' : 'theme-title'}`}>
                          {item.title}
                        </h4>
                      </div>
                      <p className={`text-xs truncate ${isSelected ? 'text-white/80' : 'theme-muted'}`}>
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <ArrowRight size={14} className={`shrink-0 ml-2 ${isSelected ? 'text-white opacity-100' : 'opacity-0'}`} />
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center theme-muted font-mono text-xs">
              No results found matching "{query}".
            </div>
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="px-4 py-2.5 bg-[var(--bg-input)] border-t border-[var(--border-main)] font-mono text-[10px] theme-muted flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-main)]">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-main)]">↓</kbd>
              <span>Navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-main)] flex items-center gap-0.5">
                <CornerDownLeft size={10} />
              </kbd>
              <span>Select</span>
            </span>
          </div>
          <span className="flex items-center gap-1">
            <Command size={11} className="text-[var(--accent-crimson)]" />
            <span>Spotlight Search</span>
          </span>
        </div>
      </div>
    </div>
  );
}
