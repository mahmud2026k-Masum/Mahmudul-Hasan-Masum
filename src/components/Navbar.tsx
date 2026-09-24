import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Film, MessageCircle, Search, Globe, ChevronDown, Check } from 'lucide-react';
import { USER_INFO } from '../data';
import { Language } from '../types';
import { translations } from '../translations';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenSearch: () => void;
  name: string;
  lang: Language;
  onToggleLang: () => void;
  onSelectLang?: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleTheme,
  onOpenSearch,
  name,
  lang,
  onToggleLang,
  onSelectLang,
}) => {
  const t = translations[lang];
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLangMenuOpen(false);
      }
    };

    if (isLangMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLangMenuOpen]);

  const handleChooseLanguage = (selected: Language) => {
    if (onSelectLang) {
      onSelectLang(selected);
    } else if (onToggleLang && selected !== lang) {
      onToggleLang();
    }
    setIsLangMenuOpen(false);
  };

  return (
    <header
      id="top-nav"
      className="sticky top-0 z-40 w-full border-b transition-colors duration-200 backdrop-blur-md"
      style={{
        backgroundColor: darkMode ? 'rgba(8, 9, 12, 0.88)' : 'rgba(255, 255, 255, 0.92)',
        borderColor: darkMode ? 'rgba(245, 158, 11, 0.2)' : 'rgba(226, 232, 240, 0.8)',
        color: darkMode ? '#fef08a' : '#0f172a',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Left: Creator Name and Multi-Discipline Title */}
        <div className="flex items-center gap-3">
          <a
            href="#top"
            id="brand-home-link"
            className="group flex items-center gap-3 transition-transform active:scale-95"
          >
            {/* Circular Profile Picture replacing video icon */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400 shadow-md shadow-amber-500/25 ring-2 ring-amber-500/20 shrink-0 group-hover:ring-amber-400 transition-all">
              <img
                src="/profile.jpg?v=orig"
                alt={name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.indexOf('profile.jpg') === -1) {
                    target.src = 'profile.jpg';
                  }
                }}
              />
            </div>
            <div className="flex flex-col">
              <span
                className="font-extrabold text-base sm:text-lg tracking-wider uppercase whitespace-nowrap text-[#f59e0b]"
                style={{ color: '#f59e0b' }}
              >
                {lang === 'bn' ? t.hero.creatorName : name}
              </span>
              <span
                className={`text-[10px] font-bold tracking-wider uppercase ${
                  darkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}
              >
                {t.navbar.role}
              </span>
            </div>
          </a>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
          <a
            href="#hero-section"
            id="nav-link-profile"
            className={`transition-colors hover:text-amber-400 ${
              darkMode ? 'text-zinc-300' : 'text-zinc-700'
            }`}
          >
            {t.navbar.profile}
          </a>
          <a
            href="#graphic-works"
            id="nav-link-graphics"
            className={`transition-colors hover:text-amber-400 ${
              darkMode ? 'text-zinc-300' : 'text-zinc-700'
            }`}
          >
            {t.navbar.graphics}
          </a>
          <a
            href="#video-portfolio"
            id="nav-link-videos"
            className={`transition-colors hover:text-amber-400 ${
              darkMode ? 'text-zinc-300' : 'text-zinc-700'
            }`}
          >
            {t.navbar.videos}
          </a>
          <a
            href="#creative-stack"
            id="nav-link-stack"
            className={`transition-colors hover:text-amber-400 ${
              darkMode ? 'text-zinc-300' : 'text-zinc-700'
            }`}
          >
            {t.navbar.skills}
          </a>
          <a
            href="#about-section"
            id="nav-link-about"
            className={`transition-colors hover:text-amber-400 ${
              darkMode ? 'text-zinc-300' : 'text-zinc-700'
            }`}
          >
            {t.navbar.about}
          </a>
          <a
            href="#contact-section"
            id="nav-link-contact"
            className={`transition-colors hover:text-amber-400 ${
              darkMode ? 'text-zinc-300' : 'text-zinc-700'
            }`}
          >
            {t.navbar.contact}
          </a>
        </nav>

        {/* Right: Language Switcher, Search, WhatsApp & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Instant Spotlight Search Button */}
          <button
            id="nav-spotlight-search-btn"
            type="button"
            onClick={onOpenSearch}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer active:scale-95 ${
              darkMode
                ? 'bg-zinc-900/90 border-amber-500/30 text-amber-300 hover:bg-amber-500/15 hover:border-amber-400'
                : 'bg-zinc-100 border-zinc-300 text-zinc-800 hover:bg-zinc-200'
            }`}
            title="Instant Spotlight Search (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden md:inline">{t.navbar.search}</span>
            <kbd className="hidden lg:inline text-[9px] px-1 py-0.2 rounded bg-black/40 border border-zinc-700/60 font-mono text-zinc-400">
              {t.navbar.searchShortcut}
            </kbd>
          </button>

          {/* Bilingual Language Dropdown (English / বাংলা) */}
          <div className="relative" ref={langMenuRef}>
            <button
              id="lang-toggle-btn"
              type="button"
              onClick={() => setIsLangMenuOpen((prev) => !prev)}
              aria-expanded={isLangMenuOpen}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer active:scale-95 ${
                darkMode
                  ? 'bg-zinc-900/90 border-amber-500/40 text-amber-300 hover:bg-amber-500/15 hover:border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.15)]'
                  : 'bg-amber-50/80 border-amber-300 text-amber-900 hover:bg-amber-100 shadow-sm'
              }`}
              title={lang === 'bn' ? 'ভাষা নির্বাচন করুন (বাংলা / English)' : 'Select Language (English / বাংলা)'}
              aria-label="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="font-extrabold tracking-wide">
                {lang === 'bn' ? 'বাংলা' : 'English'}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                  isLangMenuOpen ? 'rotate-180 text-amber-400' : darkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {isLangMenuOpen && (
              <div
                className={`absolute right-0 top-full mt-2 w-44 rounded-2xl p-1.5 shadow-2xl border backdrop-blur-2xl z-50 transition-all duration-150 animate-in fade-in zoom-in-95 ${
                  darkMode
                    ? 'bg-zinc-950/95 border-amber-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.85)]'
                    : 'bg-white/95 border-slate-200 shadow-xl'
                }`}
              >
                <div
                  className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                    darkMode ? 'text-zinc-500' : 'text-zinc-400'
                  }`}
                >
                  Language • ভাষা
                </div>

                {/* English Selection Option */}
                <button
                  type="button"
                  onClick={() => handleChooseLanguage('en')}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    lang === 'en'
                      ? darkMode
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-amber-100 text-amber-900 border border-amber-300'
                      : darkMode
                      ? 'text-zinc-300 hover:bg-zinc-800/80 hover:text-white'
                      : 'text-zinc-700 hover:bg-slate-100 hover:text-zinc-900'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base leading-none">🇺🇸</span>
                    <div className="flex flex-col text-left">
                      <span className="font-bold">English</span>
                      <span className={`text-[10px] font-normal ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        EN • Global
                      </span>
                    </div>
                  </div>
                  {lang === 'en' && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                </button>

                {/* Bengali Selection Option */}
                <button
                  type="button"
                  onClick={() => handleChooseLanguage('bn')}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer mt-1 ${
                    lang === 'bn'
                      ? darkMode
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-amber-100 text-amber-900 border border-amber-300'
                      : darkMode
                      ? 'text-zinc-300 hover:bg-zinc-800/80 hover:text-white'
                      : 'text-zinc-700 hover:bg-slate-100 hover:text-zinc-900'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base leading-none">🇧🇩</span>
                    <div className="flex flex-col text-left">
                      <span className="font-['Hind_Siliguri'] font-bold text-sm">বাংলা</span>
                      <span className={`text-[10px] font-normal ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                        BN • বাংলা ভাষা
                      </span>
                    </div>
                  </div>
                  {lang === 'bn' && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                </button>
              </div>
            )}
          </div>

          {/* Glossy Glassmorphic WhatsApp Pill */}
          <a
            href={USER_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-link"
            className={`group relative overflow-hidden inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 hover:scale-102 active:scale-95 cursor-pointer backdrop-blur-xl ${
              darkMode
                ? 'bg-gradient-to-r from-emerald-500/20 via-emerald-400/25 to-teal-500/20 text-emerald-300 border border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.25),inset_0_1px_1px_rgba(255,255,255,0.35)] hover:shadow-[0_0_28px_rgba(16,185,129,0.45),inset_0_1px_2px_rgba(255,255,255,0.5)] hover:border-emerald-300 hover:text-white'
                : 'bg-emerald-500/15 text-emerald-800 border border-emerald-500/50 shadow-sm hover:bg-emerald-500/25 hover:shadow-md'
            }`}
            title="Chat on WhatsApp"
          >
            {/* Top Gloss Highlight Reflection */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400 group-hover:scale-110 transition-transform relative z-10" />
            <span className="hidden xl:inline relative z-10 font-semibold opacity-90">{t.navbar.whatsappLabel}</span>
            <span className="relative z-10 font-extrabold tracking-wide">{USER_INFO.whatsappRaw}</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={onToggleTheme}
            aria-label={darkMode ? t.navbar.switchToLight : t.navbar.switchToDark}
            className={`p-2 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-400 active:scale-90 ${
              darkMode
                ? 'bg-black/60 border-amber-500/30 text-yellow-400 hover:bg-amber-500/10 hover:border-amber-400'
                : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
            }`}
            title={darkMode ? t.navbar.switchToLight : t.navbar.switchToDark}
          >
            {darkMode ? (
              <Sun className="w-4 h-4 transition-transform hover:rotate-45 duration-300" />
            ) : (
              <Moon className="w-4 h-4 transition-transform hover:-rotate-12 duration-300" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
