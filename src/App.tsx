import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SoftwareStackSection } from './components/SoftwareStackSection';
import { VideoGrid } from './components/VideoGrid';
import { GraphicSection } from './components/GraphicSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { HtmlExportModal } from './components/HtmlExportModal';
import { SpotlightSearchModal } from './components/SpotlightSearchModal';
import { CursorGlow } from './components/CursorGlow';
import { ClickSparkleEffect } from './components/ClickSparkleEffect';
import { FixedBackgroundPortrait } from './components/FixedBackgroundPortrait';
import { USER_INFO, FEATURED_VIDEO, PORTFOLIO_VIDEOS, GRAPHIC_WORKS } from './data';
import { GraphicItem, Language } from './types';
import { STANDALONE_HTML } from './portfolioHtmlString';

export default function App() {
  // Language state: English & Bengali bilingual support
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_lang');
      if (saved === 'bn' || saved === 'en') return saved;
    }
    return 'bn'; // Default to Bengali as requested by user, easily switchable to English
  });

  const handleToggleLang = () => {
    setLang((prev) => {
      const nextLang: Language = prev === 'en' ? 'bn' : 'en';
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio_lang', nextLang);
      }
      return nextLang;
    });
  };

  const handleSelectLang = (selectedLang: Language) => {
    setLang(selectedLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_lang', selectedLang);
    }
  };

  // Theme state: dark mode by default on load with black & gold palette
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light') return false;
      return true; // Default to dark mode
    }
    return true;
  });

  // Lightbox state
  const [selectedGraphic, setSelectedGraphic] = useState<GraphicItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  // Standalone HTML export modal state
  const [isHtmlModalOpen, setIsHtmlModalOpen] = useState<boolean>(false);

  // Instant Spotlight Search modal state
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Global keyboard shortcut: Ctrl+K or Cmd+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Sync theme with document element and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      document.body.style.backgroundColor = '#07080a';
      document.body.style.color = '#fef9c3';
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      document.body.style.backgroundColor = '#fafaf9';
      document.body.style.color = '#1c1917';
    }
  }, [darkMode]);

  const handleToggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const handleOpenLightbox = (graphic: GraphicItem) => {
    setSelectedGraphic(graphic);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div
      id="portfolio-root"
      className={`min-h-screen transition-colors duration-200 relative selection:bg-yellow-400 selection:text-black ${
        darkMode ? 'bg-[#07080a] text-slate-100' : 'bg-[#fafaf9] text-slate-900'
      }`}
    >
      {/* 1. FIXED BACKGROUND PORTRAIT (Floating ambient minimalist photo pinned to viewport behind creative works) */}
      <FixedBackgroundPortrait darkMode={darkMode} />

      {/* 2. INTERACTIVE DYNAMIC CURSOR GLOW (Soft gold ambient spotlight & magnetic follower ring) */}
      <CursorGlow darkMode={darkMode} />

      {/* 3. INTERACTIVE CLICK SPARKLE & SHOCKWAVE BURST ON ANY CLICK */}
      <ClickSparkleEffect darkMode={darkMode} />

      {/* A. NAVIGATION BAR */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={handleToggleTheme}
        onOpenSearch={() => setIsSearchOpen(true)}
        name={USER_INFO.name}
        lang={lang}
        onToggleLang={handleToggleLang}
        onSelectLang={handleSelectLang}
      />

      {/* MAIN CONTENT (Strict Top to Bottom Structure as Requested) */}
      <main id="top" className="relative z-10">
        {/* 1. HERO SECTION (Profile Card FIRST at top, then Featured Trailer) */}
        <HeroSection
          darkMode={darkMode}
          featuredVideo={FEATURED_VIDEO}
          name={USER_INFO.name}
          lang={lang}
        />

        {/* 2. GRAPHIC & POSTER DESIGNS (Graphics & Designs right after Profile) */}
        <GraphicSection
          darkMode={darkMode}
          graphics={GRAPHIC_WORKS}
          onOpenLightbox={handleOpenLightbox}
          lang={lang}
        />

        {/* 3. VIDEO EDITING PORTFOLIO GRID (7 selected video editing showcases) */}
        <VideoGrid
          darkMode={darkMode}
          videos={PORTFOLIO_VIDEOS}
          lang={lang}
        />

        {/* 4. CREATIVE TOOLS & SKILLS SECTION (Software Stack & Skills) */}
        <SoftwareStackSection
          darkMode={darkMode}
          lang={lang}
        />

        {/* 5. DETAILED ABOUT ME SECTION */}
        <AboutSection
          darkMode={darkMode}
          lang={lang}
        />

        {/* 6. GET IN TOUCH & DIRECT CONTACT SECTION */}
        <ContactSection
          darkMode={darkMode}
          lang={lang}
        />
      </main>

      {/* FOOTER */}
      <Footer
        darkMode={darkMode}
        onOpenHtmlModal={() => setIsHtmlModalOpen(true)}
        lang={lang}
      />

      {/* IMAGE LIGHTBOX MODAL */}
      <LightboxModal
        isOpen={isLightboxOpen}
        selectedGraphic={selectedGraphic}
        graphics={GRAPHIC_WORKS}
        onClose={handleCloseLightbox}
        onSelectGraphic={(graphic) => setSelectedGraphic(graphic)}
      />

      {/* STANDALONE SINGLE-FILE HTML MODAL */}
      <HtmlExportModal
        isOpen={isHtmlModalOpen}
        onClose={() => setIsHtmlModalOpen(false)}
        htmlContent={STANDALONE_HTML}
      />

      {/* INSTANT SPOTLIGHT SEARCH & JUMP NAVIGATOR */}
      <SpotlightSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        darkMode={darkMode}
        onOpenGraphicLightbox={handleOpenLightbox}
        lang={lang}
      />
    </div>
  );
}
