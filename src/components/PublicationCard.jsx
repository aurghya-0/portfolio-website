import React, { useState } from 'react';
import { AlignLeft, Quote, Copy, Check, Calendar, Bookmark } from 'lucide-react';

export default function PublicationCard({ pub, onCopyBibtex }) {
  const [showAbstract, setShowAbstract] = useState(false);
  const [showBibtex, setShowBibtex] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pub.bibtex).then(() => {
      setCopied(true);
      if (onCopyBibtex) onCopyBibtex("BibTeX citation copied to clipboard!");
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <article className="glass-card p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 mb-4">
      {/* Venue & Year Badges */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
        <span className="font-mono text-xs font-bold text-[var(--accent-gold)] bg-[var(--bg-tag)] border border-[var(--border-main)] px-2.5 py-0.5 rounded-md flex items-center gap-1.5">
          <Calendar size={12} />
          {pub.year}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent-crimson)] bg-[var(--bg-tag)] border border-[var(--border-main)] px-2.5 py-0.5 rounded-md flex items-center gap-1.5 font-semibold">
          <Bookmark size={11} />
          {pub.venueTag}
        </span>
      </div>

      {/* Paper Title */}
      <h3 className="font-['Newsreader'] text-xl sm:text-2xl font-semibold theme-title mb-2 leading-snug">
        {pub.title}
      </h3>

      {/* Journal / Conference Name */}
      <div className="text-xs italic theme-muted mb-4">
        {pub.journal}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-[var(--border-main)]">
        <button 
          onClick={() => setShowAbstract(!showAbstract)}
          className={`
            px-3 py-1.5 rounded-lg font-mono text-xs flex items-center gap-1.5 transition-all duration-200 cursor-pointer
            ${showAbstract 
              ? 'bg-[var(--accent-crimson)] text-white font-semibold shadow-sm' 
              : 'bg-[var(--bg-input)] theme-body border border-[var(--border-main)] hover:border-[var(--accent-crimson)]'}
          `}
        >
          <AlignLeft size={13} />
          <span>Abstract</span>
        </button>

        <button 
          onClick={() => setShowBibtex(!showBibtex)}
          className={`
            px-3 py-1.5 rounded-lg font-mono text-xs flex items-center gap-1.5 transition-all duration-200 cursor-pointer
            ${showBibtex 
              ? 'bg-[var(--accent-crimson)] text-white font-semibold shadow-sm' 
              : 'bg-[var(--bg-input)] theme-body border border-[var(--border-main)] hover:border-[var(--accent-crimson)]'}
          `}
        >
          <Quote size={13} />
          <span>BibTeX</span>
        </button>

        <button 
          onClick={handleCopy}
          className="px-3 py-1.5 rounded-lg font-mono text-xs flex items-center gap-1.5 bg-[var(--bg-input)] theme-body border border-[var(--border-main)] hover:border-[var(--accent-crimson)] transition-all duration-200 cursor-pointer"
        >
          {copied ? <Check size={13} className="text-[var(--accent-crimson)] font-bold" /> : <Copy size={13} />}
          <span>{copied ? 'Copied!' : 'Copy Citation'}</span>
        </button>
      </div>

      {/* Abstract Drawer */}
      {showAbstract && (
        <div className="mt-4 p-4 rounded-xl bg-[var(--bg-input)] border-l-4 border-[var(--accent-crimson)] text-xs theme-body leading-relaxed shadow-inner">
          {pub.abstract}
        </div>
      )}

      {/* BibTeX Code Panel */}
      {showBibtex && (
        <pre className="mt-4 p-4 rounded-xl bg-[var(--bg-code)] text-[var(--accent-crimson)] font-mono text-[11px] overflow-x-auto border border-[var(--border-main)] shadow-inner whitespace-pre-wrap">
          <code>{pub.bibtex}</code>
        </pre>
      )}
    </article>
  );
}
