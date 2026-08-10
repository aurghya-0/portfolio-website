import React from 'react';
import { X, BookOpen, GraduationCap, Briefcase, Scroll, Package, Award } from 'lucide-react';
import { AUTHOR_INFO, EDUCATION, EXPERIENCE, PUBLICATIONS, COURSES, OPEN_SOURCE, LEADERSHIP, SKILL_GROUPS } from '../data/portfolioData';

export default function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[var(--bg-card)] border border-[var(--border-main)] rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto border-t-4 border-t-[var(--accent-crimson)]">
        {/* Top Control Bar */}
        <div className="px-6 py-3.5 border-b border-[var(--border-main)] bg-[var(--bg-input)] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold theme-title">
            <BookOpen size={15} className="text-[var(--accent-crimson)]" />
            <span>Academic Curriculum Vitae</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-main)] theme-muted hover:text-[var(--accent-crimson)] transition-colors cursor-pointer"
            aria-label="Close CV Preview"
          >
            <X size={18} />
          </button>
        </div>

        {/* CV Document Container */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 theme-body font-sans text-xs sm:text-sm leading-relaxed cv-print-container">
          {/* Header */}
          <div className="border-b-2 border-[var(--border-main)] pb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="flex items-center gap-4 sm:gap-5">
              <img 
                src={AUTHOR_INFO.avatarUrl} 
                alt={`Portrait of ${AUTHOR_INFO.name}`} 
                className="w-20 h-24 sm:w-24 sm:h-28 object-cover rounded-xl border border-[var(--border-main)] shadow-md shrink-0 print:w-20 print:h-24 print:rounded-md print:shadow-none print:border-none"
                onError={(e) => { e.currentTarget.src = "/profile.jpg"; }}
              />
              <div>
                <h1 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold theme-title mb-1 tracking-tight">
                  {AUTHOR_INFO.name}
                </h1>
                <p className="font-['Newsreader'] italic text-base theme-crimson font-medium mb-1">
                  {AUTHOR_INFO.role} · {AUTHOR_INFO.department}
                </p>
                <p className="theme-muted font-medium text-xs">
                  {AUTHOR_INFO.institution} · {AUTHOR_INFO.location}
                </p>
              </div>
            </div>

            <div className="font-mono text-xs space-y-1 theme-muted sm:text-right shrink-0">
              <div>Email: <a href={`mailto:${AUTHOR_INFO.email}`} className="theme-title underline">{AUTHOR_INFO.email}</a></div>
              <div>Phone: <span className="theme-title">{AUTHOR_INFO.phone}</span></div>
              <div>GitHub: <a href={AUTHOR_INFO.github} target="_blank" rel="noopener noreferrer" className="theme-title underline">aurghya-0</a></div>
              <div>LinkedIn: <a href={AUTHOR_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="theme-title underline">aurghyadip-kundu</a></div>
            </div>
          </div>

          {/* Research Vision & Bio */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--accent-crimson)] font-bold mb-2 flex items-center gap-2 border-b border-[var(--border-main)] pb-1">
              <BookOpen size={14} />
              <span>Academic Profile & Executive Summary</span>
            </h2>
            <p className="theme-body leading-relaxed">
              {AUTHOR_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--accent-crimson)] font-bold mb-3 flex items-center gap-2 border-b border-[var(--border-main)] pb-1">
              <GraduationCap size={14} />
              <span>Education & Academic Degrees</span>
            </h2>
            <div className="space-y-3">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:justify-between items-start gap-1">
                  <div>
                    <h3 className="font-semibold theme-title text-sm">{edu.degree}</h3>
                    <p className="theme-muted text-xs">{edu.institution}</p>
                    <p className="text-[11px] theme-body mt-0.5"><span className="font-medium">Relevant Coursework:</span> {edu.courses}</p>
                  </div>
                  <div className="font-mono text-xs theme-crimson font-bold shrink-0 sm:text-right">
                    <div>{edu.period}</div>
                    <div className="text-[var(--accent-gold)]">{edu.gpa}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Experience */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--accent-crimson)] font-bold mb-3 flex items-center gap-2 border-b border-[var(--border-main)] pb-1">
              <Briefcase size={14} />
              <span>Academic Appointments & Professional Experience</span>
            </h2>
            <div className="space-y-4">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start">
                    <h3 className="font-semibold theme-title text-sm">{exp.role}</h3>
                    <span className="font-mono text-xs theme-gold font-semibold">{exp.period}</span>
                  </div>
                  <p className="theme-crimson font-medium text-xs">{exp.institution}</p>
                  <ul className="list-disc list-inside space-y-0.5 text-xs theme-body pl-1">
                    {exp.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Research Publications */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--accent-crimson)] font-bold mb-3 flex items-center gap-2 border-b border-[var(--border-main)] pb-1">
              <Scroll size={14} />
              <span>Peer-Reviewed Research Publications</span>
            </h2>
            <div className="space-y-3">
              {PUBLICATIONS.map((pub) => (
                <div key={pub.id} className="space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold theme-title text-sm">{pub.title}</h3>
                    <span className="font-mono text-xs font-bold theme-gold bg-[var(--bg-tag)] px-2 py-0.5 rounded shrink-0">{pub.year}</span>
                  </div>
                  <p className="text-xs italic theme-muted">{pub.journal}</p>
                  <p className="text-[11px] theme-body leading-relaxed">{pub.abstract}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Source Contributions */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--accent-crimson)] font-bold mb-3 flex items-center gap-2 border-b border-[var(--border-main)] pb-1">
              <Package size={14} />
              <span>Open Source Contributions & Software Packages</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {OPEN_SOURCE.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[var(--bg-input)] border border-[var(--border-main)]">
                  <div className="font-semibold theme-title text-xs flex items-center justify-between">
                    <span>{item.name}</span>
                    <span className="font-mono text-[10px] theme-crimson">{item.platform}</span>
                  </div>
                  <p className="text-[11px] theme-muted font-medium mb-1">{item.role}</p>
                  <p className="text-[11px] theme-body leading-tight">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Institutional Governance */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--accent-crimson)] font-bold mb-3 flex items-center gap-2 border-b border-[var(--border-main)] pb-1">
              <Award size={14} />
              <span>Institutional Governance & Committee Appointments</span>
            </h2>
            <div className="space-y-2">
              {LEADERSHIP.map((item, idx) => (
                <div key={idx} className="flex items-start justify-between gap-2 text-xs">
                  <div>
                    <span className="font-semibold theme-title">{item.title}</span> — <span className="theme-muted">{item.institution}</span>
                    <p className="text-[11px] theme-body">{item.desc}</p>
                  </div>
                  <span className="font-mono text-[10px] theme-gold shrink-0 font-medium">{item.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-[var(--border-main)] bg-[var(--bg-input)] flex justify-between items-center print:hidden font-mono text-xs theme-muted">
          <span>Aurghyadip Kundu — Curriculum Vitae 2026</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[var(--accent-crimson)] text-white font-mono text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
