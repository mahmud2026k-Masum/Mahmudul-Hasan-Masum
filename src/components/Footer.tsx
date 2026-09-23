import React from 'react';
import { ArrowUp, Code, MessageCircle, Heart, Film, MapPin, Facebook } from 'lucide-react';
import { USER_INFO } from '../data';

interface FooterProps {
  darkMode: boolean;
  onOpenHtmlModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onOpenHtmlModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="site-footer"
      className="border-t py-12 transition-colors relative z-20"
      style={{
        backgroundColor: darkMode ? '#050608' : '#f1f5f9',
        borderColor: darkMode ? 'rgba(245, 158, 11, 0.2)' : 'rgba(226, 232, 240, 0.8)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-2 mb-1">
              <Film className="w-4 h-4 text-yellow-400" />
              <span className="font-extrabold text-sm uppercase tracking-wider text-yellow-400">
                {USER_INFO.name}
              </span>
            </div>
            <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Video Editor & Visual Storyteller • WhatsApp: {USER_INFO.whatsappRaw}
            </p>
            <p className={`text-xs mt-1 flex items-center gap-1.5 ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{USER_INFO.address}</span>
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5">
            {/* WhatsApp Quick Chat */}
            <a
              href={USER_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>{USER_INFO.whatsappRaw}</span>
            </a>

            {/* Facebook Profile */}
            <a
              href={USER_INFO.facebookProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:bg-blue-600/30 transition-colors"
              title="Facebook Profile"
            >
              <Facebook className="w-3.5 h-3.5 fill-current" />
              <span>Facebook</span>
            </a>

            {/* X (Twitter) Profile */}
            <a
              href={USER_INFO.xProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-zinc-900 text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white transition-colors"
              title="X (Twitter) Profile"
            >
              <span className="font-bold text-xs">𝕏</span>
              <span>X (Twitter)</span>
            </a>

            {/* View Standalone HTML Button */}
            <button
              type="button"
              id="footer-html-code-btn"
              onClick={onOpenHtmlModal}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                darkMode
                  ? 'bg-black/60 border-amber-500/30 text-yellow-300 hover:bg-amber-500/10 hover:border-amber-400'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Code className="w-3.5 h-3.5 text-yellow-400" />
              <span>Standalone HTML</span>
            </button>

            {/* Back to Top */}
            <button
              type="button"
              id="back-to-top-btn"
              onClick={scrollToTop}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                darkMode
                  ? 'bg-black/60 border-amber-500/30 text-yellow-300 hover:bg-amber-500/10'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sub-footer Copyright */}
        <div className="mt-8 pt-6 border-t border-amber-500/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 text-center">
          <p>© {new Date().getFullYear()} Mahmudul Hasan Masum. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted for high-retention video content & storytelling
          </p>
        </div>
      </div>
    </footer>
  );
};
