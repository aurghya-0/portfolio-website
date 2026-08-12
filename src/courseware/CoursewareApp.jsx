import React, { useState, useEffect } from 'react';
import { COURSEWARE_SITES, AUTHOR_INFO } from '../data/portfolioData';
import CoursewareIframeModal from './CoursewareIframeModal';
import CoursewareModal from '../components/CoursewareModal';
import ThemeToggle from '../components/ThemeToggle';
import CommandPalette from '../components/CommandPalette';
import PageTransitionCurtain, { navigateWithTransition } from '../components/PageTransitionCurtain';
import { 
  ArrowLeft, Search, Globe, Github, ExternalLink, Sparkles, 
  BookOpen, Layers, CheckCircle2, Cpu, Monitor, Tv, Command
} from 'lucide-react';

export default function CoursewareApp() {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [previewSite, setPreviewSite] = useState(null);
  const [detailSite, setDetailSite] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [transitionState, setTransitionState] = useState({ active: false, message: '' });
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'system';
  });

  // Apply Theme
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light', 'sepia');

    if (theme === 'sepia') {
      root.classList.add('sepia');
    } else if (theme === 'light') {
      root.classList.add('light');
    } else if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.add(isSystemDark ? 'dark' : 'light');
    }
  }, [theme]);

  // Keyboard listener for Cmd+K search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleBackToPortfolio = (e) => {
    e.preventDefault();
    navigateWithTransition('/', setTransitionState, 'Returning to Academic Portfolio...');
  };

  const categories = ['All', 'Operating Systems', 'Python & Data Science', 'Python & Data Mining', 'C & Systems Programming', 'Java & OOP'];

  // Filter sites by category and search query
  const filteredSites = COURSEWARE_SITES.filter(site => {
    const matchesCategory = selectedCategory === 'All' || site.category === selectedCategory;
    const matchesQuery = query.trim() === '' || 
      site.title.toLowerCase().includes(query.toLowerCase()) ||
      site.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      site.courseCode.toLowerCase().includes(query.toLowerCase()) ||
      site.techStack.some(t => t.toLowerCase().includes(query.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[var(--bg-page)] theme-body font-sans text-left relative selection:bg-[var(--accent-crimson)] selection:text-white animate-in fade-in duration-300">
      <PageTransitionCurtain isTransitioning={transitionState.active} message={transitionState.message} />

      {/* Background Grid Pattern */}
      <div className="bg-grid-pattern fixed inset-0 pointer-events-none"></div>

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[var(--bg-sidebar)] backdrop-blur-xl border-b border-[var(--border-main)] px-6 sm:px-10 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Back to Portfolio Link */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleBackToPortfolio}
              className="px-3.5 py-2 rounded-xl bg-[var(--bg-card)] hover:bg-[var(--bg-input)] border border-[var(--border-main)] theme-title font-mono text-xs font-bold flex items-center gap-2 transition-all shadow-xs cursor-pointer group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform text-[var(--accent-crimson)]" />
              <span>Back to Main Portfolio</span>
            </button>

            <span className="hidden sm:inline-block font-mono text-xs text-[var(--accent-gold)] font-bold px-3 py-1 rounded-full bg-[var(--bg-tag)] border border-[var(--border-main)]">
              CSE-420 · Courseware Showcase
            </span>
          </div>

          {/* Controls: Search, Theme Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[var(--accent-crimson)] theme-muted text-xs font-mono flex items-center gap-2 transition-all cursor-pointer shadow-xs"
              title="Spotlight Search (Cmd + K)"
            >
              <Search size={14} className="text-[var(--accent-crimson)]" />
              <span className="hidden md:inline">Search Portals...</span>
              <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-tag)] border border-[var(--border-main)] text-[10px] font-mono">⌘K</kbd>
            </button>

            <ThemeToggle theme={theme} onThemeChange={handleThemeChange} />
          </div>

        </div>
      </header>

      {/* Main Page Showcase Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 py-10 space-y-10 relative z-10">
        
        {/* Page Hero Title Banner */}
        <div className="glass-card p-8 sm:p-10 rounded-3xl border border-[var(--border-main)] shadow-xl relative overflow-hidden bg-[var(--bg-card)]/70 backdrop-blur-xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-[var(--glow-orb)] rounded-full blur-3xl pointer-events-none opacity-40"></div>

          <div className="relative z-10 space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-tag)] border border-[var(--border-main)] theme-crimson font-mono text-xs font-bold shadow-xs">
              <Globe size={14} className="text-[var(--accent-gold)]" />
              <span>ACADEMIC COURSEWARE & LABORATORY PORTALS</span>
            </div>

            <h1 className="font-['Cinzel'] font-extrabold text-3xl sm:text-4xl lg:text-5xl theme-title tracking-tight leading-tight">
              Coursework Mini-Websites & Interactive Labs
            </h1>

            <p className="text-sm sm:text-base theme-heading leading-relaxed font-sans font-medium">
              A curated directory of dedicated mini-websites, interactive laboratory visualizers, courseware documentation portals, and open-source codebases developed by <span className="theme-title font-bold">{AUTHOR_INFO.name}</span> for undergraduate Computer Science & Engineering instruction under the MAKAUT curriculum.
            </p>

            {/* Showcase Quick Stats Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <div className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-tag)] border border-[var(--border-main)] font-mono text-xs theme-title font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-crimson)]"></span>
                <span>{COURSEWARE_SITES.length} Dedicated Mini-Websites</span>
              </div>

              <div className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-tag)] border border-[var(--border-main)] font-mono text-xs theme-title font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>100% GitHub Pages Hosted</span>
              </div>

              <div className="px-3.5 py-1.5 rounded-xl bg-[var(--bg-tag)] border border-[var(--border-main)] font-mono text-xs theme-title font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                <span>Interactive Visualizers & Codebases</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Category Filter Controls Bar */}
        <div className="glass-card p-4 sm:p-5 rounded-2xl border border-[var(--border-main)] space-y-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Search Input Box */}
            <div className="relative w-full lg:w-96">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--accent-crimson)]" />
              <input
                type="text"
                placeholder="Search portal, course code, tech..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-14 py-2.5 rounded-xl bg-[var(--bg-tag)] border border-[var(--border-main)] focus:border-[var(--accent-crimson)] theme-title text-xs font-mono outline-none transition-all shadow-xs"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[11px] text-[var(--accent-crimson)] hover:underline font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills (Clean Wrapping & No Scrollbars) */}
            <div className="flex flex-wrap items-center gap-2 max-w-full no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    px-3.5 py-2 rounded-xl font-mono text-xs font-semibold transition-all duration-200 cursor-pointer border whitespace-nowrap shrink-0
                    ${selectedCategory === cat
                      ? 'bg-[var(--accent-crimson)] text-white border-[var(--accent-crimson)] shadow-md shadow-purple-900/20'
                      : 'bg-[var(--bg-tag)] theme-muted border-[var(--border-main)] hover:border-[var(--accent-crimson)] hover:text-[var(--accent-crimson)]'}
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Courseware Mini-Websites Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredSites.map((site) => (
            <div
              key={site.id}
              className="glass-card p-6 sm:p-7 rounded-3xl border border-[var(--border-main)] hover:border-[var(--accent-crimson)]/60 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-2xl bg-[var(--bg-card)]/60 backdrop-blur-md"
            >
              <div>
                {/* Card Top Badge Row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-md bg-[var(--bg-tag)] border border-[var(--border-main)] text-[var(--accent-crimson)] font-mono text-xs font-bold uppercase tracking-wider">
                    {site.badge}
                  </span>
                  <span className="font-mono text-xs font-bold theme-gold bg-purple-500/10 px-3 py-1 rounded border border-purple-500/20">
                    {site.courseCode}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h2 className="font-['Cinzel'] font-bold text-xl sm:text-2xl theme-title mb-1.5 group-hover:text-[var(--accent-crimson)] transition-colors leading-tight">
                  {site.title}
                </h2>
                <p className="text-xs sm:text-sm font-mono text-[var(--accent-crimson)] mb-4 font-semibold">
                  {site.subtitle}
                </p>

                <p className="text-xs sm:text-sm theme-body leading-relaxed mb-5 font-sans">
                  {site.desc}
                </p>

                {/* Features Bullet Points */}
                <div className="space-y-2 mb-6 pt-4 border-t border-[var(--border-main)]">
                  <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent-gold)] font-bold mb-1 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-[var(--accent-crimson)]" />
                    <span>Interactive Features & Codebase</span>
                  </div>
                  {site.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs theme-heading font-medium">
                      <CheckCircle2 size={14} className="text-[var(--accent-crimson)] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {site.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-[var(--bg-tag)] border border-[var(--border-main)] font-mono text-xs theme-title font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer Bar */}
              <div className="pt-4 border-t border-[var(--border-main)] space-y-3">
                
                {/* Primary Button: Live Preview Inside Modal */}
                <button
                  onClick={() => setPreviewSite(site)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[var(--bg-tag)] hover:bg-[var(--bg-input)] border border-[var(--border-main)] hover:border-[var(--accent-crimson)] theme-crimson font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer group/btn"
                >
                  <Monitor size={15} />
                  <span>Interactive Live Preview (In-Page)</span>
                </button>

                {/* Secondary External Links Bar */}
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={site.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-[var(--accent-crimson)] to-rose-600 hover:opacity-90 text-white font-mono text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <Globe size={14} />
                    <span>Open Live Site</span>
                    <ExternalLink size={12} />
                  </a>

                  <a
                    href={site.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[var(--accent-crimson)] theme-title font-mono text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Github size={14} />
                    <span>Repository</span>
                  </a>

                  <button
                    onClick={() => setDetailSite(site)}
                    className="py-2 px-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-main)] hover:border-[var(--accent-crimson)] theme-title font-mono text-xs font-semibold transition-all cursor-pointer"
                    title="View Full Syllabus Details"
                  >
                    Details
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </main>

      {/* Page Footer */}
      <footer className="mt-16 py-8 px-6 border-t border-[var(--border-main)] text-center font-mono text-xs theme-muted">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>{AUTHOR_INFO.name} — Academic Courseware Directory</span>
          <button onClick={handleBackToPortfolio} className="theme-crimson hover:underline font-bold cursor-pointer">← Back to Academic Portfolio</button>
        </div>
      </footer>

      {/* Modals */}
      <CoursewareIframeModal site={previewSite} onClose={() => setPreviewSite(null)} />
      <CoursewareModal site={detailSite} onClose={() => setDetailSite(null)} />
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}
