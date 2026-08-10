import React, { useState, useEffect } from 'react';
import MobileHeader from './components/MobileHeader';
import SidebarNav from './components/SidebarNav';
import HeroSection from './components/HeroSection';
import OrientationSection from './components/OrientationSection';
import PublicationsSection from './components/PublicationsSection';
import TeachingSection from './components/TeachingSection';
import ExperienceSection from './components/ExperienceSection';
import LeadershipSection from './components/LeadershipSection';
import OpenSourceSection from './components/OpenSourceSection';
import ToolkitSection from './components/ToolkitSection';
import ContactSection from './components/ContactSection';
import Toast from './components/Toast';
import CommandPalette from './components/CommandPalette';
import ScrollProgress from './components/ScrollProgress';
import CourseModal from './components/CourseModal';
import CvModal from './components/CvModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('orientation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'system';
  });

  // Apply Theme & Listen to System Color Scheme Changes
  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = () => {
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
    };

    applyTheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = () => {
      if (theme === 'system') {
        applyTheme();
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [theme]);

  // Keyboard shortcut listener for Spotlight Search (Cmd + K / Ctrl + K)
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

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['orientation', 'publications', 'teaching', 'experience', 'leadership', 'opensource', 'toolkit', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container relative">
      <ScrollProgress />
      <div className="bg-grid-pattern fixed inset-0 pointer-events-none"></div>

      <MobileHeader 
        isOpen={isMenuOpen} 
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)} 
        theme={theme}
        onThemeChange={handleThemeChange}
      />

      <div className="shell">
        <SidebarNav 
          activeSection={activeSection} 
          isOpen={isMenuOpen} 
          closeMenu={() => setIsMenuOpen(false)} 
          theme={theme}
          onThemeChange={handleThemeChange}
          onOpenCv={() => setIsCvOpen(true)}
        />

        <main>
          <HeroSection 
            onOpenSearch={() => setIsSearchOpen(true)} 
            onOpenCv={() => setIsCvOpen(true)}
          />
          <OrientationSection />
          <PublicationsSection onCopyBibtex={triggerToast} />
          <TeachingSection onSelectCourse={(course) => setSelectedCourse(course)} />
          <ExperienceSection />
          <LeadershipSection />
          <OpenSourceSection />
          <ToolkitSection />
          <ContactSection onToast={triggerToast} />
        </main>
      </div>

      <Toast message={toastMessage} />
      <CommandPalette isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </div>
  );
}
