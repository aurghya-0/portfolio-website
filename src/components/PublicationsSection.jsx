import React, { useState } from 'react';
import { PUBLICATIONS } from '../data/portfolioData';
import PublicationCard from './PublicationCard';
import { Search, X, FileText } from 'lucide-react';

export default function PublicationsSection({ onCopyBibtex }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Papers' },
    { id: 'ai', label: 'AI & Risk Optimisation' },
    { id: 'healthcare', label: 'IoT & Healthcare' },
    { id: 'se', label: 'Software Engineering' }
  ];

  const filteredPubs = PUBLICATIONS.filter((pub) => {
    const matchesCategory = selectedCategory === 'all' || pub.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      pub.title.toLowerCase().includes(query) ||
      pub.journal.toLowerCase().includes(query) ||
      pub.venueTag.toLowerCase().includes(query) ||
      pub.abstract.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="publications" className="py-12 lg:py-16 px-6 sm:px-10 lg:px-12 border-b border-[var(--border-main)]">
      {/* Eyebrow */}
      <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent-crimson)] tracking-widest uppercase mb-3 font-semibold">
        <span className="w-2 h-2 rounded-full bg-[var(--accent-crimson)]"></span>
        <span>Scholarly Output & Research</span>
      </div>

      <h2 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold theme-title mb-6 tracking-tight">
        Research Publications & Preprints
      </h2>

      {/* Toolbar: Search & Filter Tabs */}
      <div className="space-y-3.5 mb-6">
        {/* Live Search Input */}
        <div className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 theme-muted" size={15} />
          <input
            type="text"
            className="w-full bg-[var(--bg-input)] border border-[var(--border-main)] focus:border-[var(--accent-crimson)] rounded-xl py-2.5 pl-10 pr-9 theme-title text-xs sm:text-sm placeholder:text-[var(--text-subtle)] focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all shadow-sm"
            placeholder="Search papers by keyword, title, conference, or algorithm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 theme-muted hover:text-[var(--text-title)] p-1"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`
                px-3.5 py-1 rounded-full font-mono text-xs transition-all duration-200 cursor-pointer
                ${selectedCategory === cat.id
                  ? 'bg-[var(--accent-crimson)] text-white font-semibold shadow-sm'
                  : 'bg-[var(--bg-input)] theme-body border border-[var(--border-main)] hover:border-[var(--accent-crimson)] hover:text-[var(--accent-crimson)]'}
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-4">
        {filteredPubs.length > 0 ? (
          filteredPubs.map((pub) => (
            <PublicationCard 
              key={pub.id} 
              pub={pub} 
              onCopyBibtex={onCopyBibtex} 
            />
          ))
        ) : (
          <div className="p-10 text-center glass-card rounded-xl border border-dashed border-[var(--border-main)] theme-muted font-mono text-xs">
            <FileText size={28} className="mx-auto mb-2 opacity-60" />
            <p>No publication records found matching "{searchQuery}".</p>
          </div>
        )}
      </div>
    </section>
  );
}
