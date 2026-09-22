import React from 'react';
import { Sun, Moon, Film, MessageCircle } from 'lucide-react';
import { USER_INFO } from '../data';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  name: string;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleTheme, name }) => {
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
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shadow-md transition-all ${
                darkMode
                  ? 'bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 text-black shadow-amber-500/20'
                  : 'bg-gradient-to-br from-amber-500 to-yellow-600 text-black shadow-amber-500/10'
              }`}
            >
              <Film className="w-5 h-5 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-wider uppercase bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent group-hover:brightness-125 transition-all">
                {name}
              </span>
              <span
                className={`text-[11px] font-bold tracking-wider uppercase ${
                  darkMode ? 'text-amber-400/90' : 'text-amber-700'
                }`}
              >
                Video Editor • Graphic Designer • Meta Marketer
              </span>
            </div>
          </a>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold tracking-wide">
          <a
            href="#creative-stack"
            id="nav-link-stack"
            className={`transition-colors hover:text-yellow-400 ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            Tools & Skills
          </a>
          <a
            href="#featured-video"
            id="nav-link-featured"
            className={`transition-colors hover:text-yellow-400 ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            Featured
          </a>
          <a
            href="#video-portfolio"
            id="nav-link-videos"
            className={`transition-colors hover:text-yellow-400 ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            Videos (5)
          </a>
          <a
            href="#graphic-works"
            id="nav-link-graphics"
            className={`transition-colors hover:text-yellow-400 ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            Graphics (6)
          </a>
          <a
            href="#about-section"
            id="nav-link-about"
            className={`transition-colors hover:text-yellow-400 ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            About
          </a>
          <a
            href="#contact-section"
            id="nav-link-contact"
            className={`transition-colors hover:text-yellow-400 ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Right: WhatsApp direct link & Theme Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Top WhatsApp Pill */}
          <a
            href={USER_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-link"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-md shadow-emerald-600/25 border border-emerald-400/40 hover:scale-102 active:scale-95"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">WhatsApp:</span>
            <span>{USER_INFO.whatsappRaw}</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={onToggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`p-2 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-400 active:scale-90 ${
              darkMode
                ? 'bg-black/60 border-amber-500/30 text-yellow-400 hover:bg-amber-500/10 hover:border-amber-400'
                : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
            }`}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
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
