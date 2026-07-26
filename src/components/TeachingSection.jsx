import React from 'react';
import { COURSES } from '../data/portfolioData';
import { BookOpenCheck } from 'lucide-react';

export default function TeachingSection() {
  return (
    <section id="teaching" className="py-12 lg:py-16 px-6 sm:px-10 lg:px-12 border-b border-[var(--border-main)]">
      {/* Eyebrow */}
      <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-crimson)] tracking-widest uppercase mb-3 font-semibold">
        <span className="w-2 h-2 rounded-full bg-[var(--accent-crimson)]"></span>
        <span>Teaching & Pedagogy</span>
      </div>

      <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold theme-title mb-8 tracking-tight">
        Course Offerings & Curriculum Design
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {COURSES.map((course, idx) => (
          <div 
            key={idx}
            className="glass-card p-5 rounded-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <h3 className="font-['Newsreader'] text-lg sm:text-xl font-semibold theme-title group-hover:text-[var(--accent-crimson)] transition-colors">
                  {course.name}
                </h3>
                <BookOpenCheck size={16} className="theme-muted shrink-0 group-hover:text-[var(--accent-crimson)] transition-colors" />
              </div>

              <p className="text-xs theme-body leading-relaxed mb-5">
                {course.desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-main)] mt-auto">
              {course.tags.map((tag, tagIdx) => (
                <span 
                  key={tagIdx}
                  className="font-mono text-[10px] sm:text-[11px] bg-[var(--bg-input)] theme-body px-2 py-0.5 rounded border border-[var(--border-main)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
