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
import { CursorGlow } from './components/CursorGlow';
import { ClickSparkleEffect } from './components/ClickSparkleEffect';
import { USER_INFO, FEATURED_VIDEO, PORTFOLIO_VIDEOS, GRAPHIC_WORKS } from './data';
import { GraphicItem } from './types';
import { STANDALONE_HTML } from './portfolioHtmlString';

export default function App() {
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
      {/* 1. INTERACTIVE DYNAMIC CURSOR GLOW (Soft gold ambient spotlight & magnetic follower ring) */}
      <CursorGlow darkMode={darkMode} />

      {/* 2. INTERACTIVE CLICK SPARKLE & SHOCKWAVE BURST ON ANY CLICK */}
      <ClickSparkleEffect darkMode={darkMode} />

      {/* A. NAVIGATION BAR */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={handleToggleTheme}
        name={USER_INFO.name}
      />

      {/* MAIN CONTENT (Strict Top to Bottom Structure) */}
      <main id="top" className="relative z-10">
        {/* B. HERO SECTION (Feature Video & Short Greeting with profile.jpg & WhatsApp card) */}
        <HeroSection
          darkMode={darkMode}
          featuredVideo={FEATURED_VIDEO}
          name={USER_INFO.name}
        />

        {/* C. CREATIVE SOFTWARE & 3-DISCIPLINE STACK (Premiere Pro, After Effects, Photoshop, Illustrator, CapCut, KineMaster, Meta Ads) */}
        <SoftwareStackSection
          darkMode={darkMode}
        />

        {/* D. VIDEO PORTFOLIO GRID (5 video editing works) */}
        <VideoGrid
          darkMode={darkMode}
          videos={PORTFOLIO_VIDEOS}
        />

        {/* E. GRAPHIC WORK SECTION (6 image cards graphic1.jpg - graphic6.jpg) */}
        <GraphicSection
          darkMode={darkMode}
          graphics={GRAPHIC_WORKS}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* F. DETAILED ABOUT ME (BIO) SECTION (Below Graphics Section) */}
        <AboutSection
          darkMode={darkMode}
        />

        {/* G. GET IN TOUCH SECTION (Email, WhatsApp: 01832313750, Social Links) */}
        <ContactSection
          darkMode={darkMode}
        />
      </main>

      {/* FOOTER */}
      <Footer
        darkMode={darkMode}
        onOpenHtmlModal={() => setIsHtmlModalOpen(true)}
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
    </div>
  );
}
