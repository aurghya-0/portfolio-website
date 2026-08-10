import React from 'react';
import { X, BookOpen, Layers, CheckCircle2, Cpu, Wrench } from 'lucide-react';

export default function CourseModal({ course, onClose }) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md transition-opacity animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[var(--bg-card)] border border-[var(--border-main)] rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[85vh] flex flex-col my-auto">
        {/* Modal Header */}
        <div className="p-6 border-b border-[var(--border-main)] bg-gradient-to-r from-[var(--bg-surface)] to-[var(--bg-card)] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 font-mono text-xs font-bold text-[var(--accent-gold)]">
              <span className="bg-[var(--bg-tag)] border border-[var(--border-main)] px-2 py-0.5 rounded">
                {course.code}
              </span>
              <span>{course.level || 'Core Course'}</span>
            </div>
            <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold theme-title tracking-tight">
              {course.name}
            </h3>
          </div>

          <button 
            onClick={onClose} 
            className="p-1.5 rounded-lg bg-[var(--bg-input)] border border-[var(--border-main)] theme-muted hover:text-[var(--accent-crimson)] transition-colors"
            aria-label="Close syllabus modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
          {/* Description */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--accent-crimson)] font-semibold mb-1.5 flex items-center gap-1.5">
              <BookOpen size={14} />
              <span>Course Description</span>
            </h4>
            <p className="theme-body leading-relaxed">
              {course.desc}
            </p>
          </div>

          {/* Prerequisites & Lab Tech Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {course.prerequisites && (
              <div className="p-3.5 rounded-xl bg-[var(--bg-input)] border border-[var(--border-main)]">
                <div className="font-mono text-[11px] uppercase theme-muted font-semibold mb-1 flex items-center gap-1.5">
                  <Cpu size={13} className="text-[var(--accent-gold)]" />
                  <span>Prerequisites</span>
                </div>
                <p className="theme-heading font-medium">{course.prerequisites}</p>
              </div>
            )}

            {course.labStack && (
              <div className="p-3.5 rounded-xl bg-[var(--bg-input)] border border-[var(--border-main)]">
                <div className="font-mono text-[11px] uppercase theme-muted font-semibold mb-1 flex items-center gap-1.5">
                  <Wrench size={13} className="text-[var(--accent-crimson)]" />
                  <span>Lab & Software Tools</span>
                </div>
                <p className="theme-heading font-medium">{course.labStack}</p>
              </div>
            )}
          </div>

          {/* Modules List */}
          {course.modules && course.modules.length > 0 && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--accent-crimson)] font-semibold mb-2.5 flex items-center gap-1.5">
                <Layers size={14} />
                <span>Syllabus Modules</span>
              </h4>
              <div className="space-y-2">
                {course.modules.map((mod, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[var(--bg-input)] border border-[var(--border-main)] theme-body flex items-start gap-2.5">
                    <span className="font-mono text-[10px] font-bold text-[var(--accent-gold)] bg-[var(--bg-tag)] px-2 py-0.5 rounded shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{mod}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Course Outcomes */}
          {course.outcomes && course.outcomes.length > 0 && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--accent-crimson)] font-semibold mb-2 flex items-center gap-1.5">
                <CheckCircle2 size={14} />
                <span>Course Learning Outcomes (CLOs)</span>
              </h4>
              <ul className="space-y-1.5 pl-1">
                {course.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2 theme-body">
                    <span className="text-[var(--accent-crimson)] font-bold">•</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[var(--border-main)] bg-[var(--bg-input)] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[var(--accent-crimson)] text-white font-mono text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            Close Syllabus
          </button>
        </div>
      </div>
    </div>
  );
}
