import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setShowTopBtn(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 z-50 bg-gradient-to-r from-[var(--accent-crimson)] via-rose-500 to-[var(--accent-gold)] transition-all duration-150 origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Floating Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Scroll to top of page"
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-[var(--bg-card)] border border-[var(--border-main)] text-[var(--accent-crimson)] shadow-xl backdrop-blur-md hover:border-[var(--accent-crimson)] hover:scale-110 active:scale-95 transition-all duration-200 group cursor-pointer"
        >
          <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </>
  );
}
