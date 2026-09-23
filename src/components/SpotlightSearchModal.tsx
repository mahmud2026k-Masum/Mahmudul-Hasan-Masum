import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, Video, Palette, Sparkles, MessageCircle, Mail, MapPin, ExternalLink, ArrowRight, Wrench, Layers } from 'lucide-react';
import { USER_INFO, PORTFOLIO_VIDEOS, GRAPHIC_WORKS, SOFTWARE_TOOLS } from '../data';
import { GraphicItem } from '../types';

interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Profile & Contact' | 'Video Project' | 'Graphic Design' | 'Tool & Skill' | 'Social Profile';
  icon: React.ReactNode;
  action: () => void;
  keywords: string[];
}

interface SpotlightSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  onOpenGraphicLightbox?: (graphic: GraphicItem) => void;
}

export const SpotlightSearchModal: React.FC<SpotlightSearchModalProps> = ({
  isOpen,
  onClose,
  darkMode,
  onOpenGraphicLightbox,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input automatically on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Smooth scroll helper with highlight pulse
  const scrollToTarget = (targetId: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-2', 'ring-amber-400', 'transition-all');
        setTimeout(() => {
          el.classList.remove('ring-2', 'ring-amber-400');
        }, 1800);
      }
    }, 100);
  };

  // Compile all searchable database items
  const allSearchItems: SearchItem[] = useMemo(() => {
    const items: SearchItem[] = [
      // 1. Profile and Identity
      {
        id: 'creator-masum',
        title: USER_INFO.name,
        subtitle: `${USER_INFO.role} • Dhaka, Bangladesh`,
        category: 'Profile & Contact',
        icon: <Sparkles className="w-4 h-4 text-amber-400" />,
        action: () => scrollToTarget('hero-section'),
        keywords: ['masum', 'mahmudul', 'hasan', 'about', 'bio', 'editor', 'marketer', 'profile', 'dhaka', 'মাসুম'],
      },
      {
        id: 'creator-whatsapp',
        title: `WhatsApp: ${USER_INFO.whatsappRaw}`,
        subtitle: 'Fastest direct messaging for project inquiries',
        category: 'Profile & Contact',
        icon: <MessageCircle className="w-4 h-4 text-emerald-400" />,
        action: () => {
          onClose();
          window.open(USER_INFO.whatsappLink, '_blank');
        },
        keywords: ['whatsapp', 'phone', 'contact', 'call', '01832313750', 'chat', 'message', 'নাম্বার'],
      },
      {
        id: 'creator-email',
        title: `Email: ${USER_INFO.email}`,
        subtitle: 'Send briefs, Google Drive footage, and contracts',
        category: 'Profile & Contact',
        icon: <Mail className="w-4 h-4 text-amber-400" />,
        action: () => {
          onClose();
          window.location.href = `mailto:${USER_INFO.email}?subject=Project%20Inquiry`;
        },
        keywords: ['email', 'mail', 'brief', 'drive', 'inquiry', 'mahmud2026k@gmail.com'],
      },
      {
        id: 'creator-location',
        title: USER_INFO.address,
        subtitle: 'Studio location • Open for remote & local projects',
        category: 'Profile & Contact',
        icon: <MapPin className="w-4 h-4 text-rose-400" />,
        action: () => scrollToTarget('contact-section'),
        keywords: ['address', 'location', 'dhaka', 'badda', 'satarkul', 'studio', 'thana', 'ম্যাপ'],
      },

      // 2. Social Profiles
      {
        id: 'social-facebook',
        title: 'Facebook Profile & Reel Showcase',
        subtitle: 'Connect for video edits, creative collabs & reels',
        category: 'Social Profile',
        icon: <ExternalLink className="w-4 h-4 text-blue-400" />,
        action: () => {
          onClose();
          window.open(USER_INFO.facebookProfile, '_blank');
        },
        keywords: ['facebook', 'fb', 'profile', 'reel', 'social', 'ফেবুক'],
      },
      {
        id: 'social-x',
        title: 'X (Twitter) Profile',
        subtitle: 'Follow motion design thoughts & workflow updates',
        category: 'Social Profile',
        icon: <ExternalLink className="w-4 h-4 text-zinc-300" />,
        action: () => {
          onClose();
          window.open(USER_INFO.xProfile, '_blank');
        },
        keywords: ['x', 'twitter', 'tweet', 'id', 'social', 'টুইটার'],
      },

      // 3. Video Projects
      ...PORTFOLIO_VIDEOS.map((v) => ({
        id: `video-${v.id}`,
        title: v.title,
        subtitle: `${v.tag} • ${v.platform.toUpperCase()}`,
        category: 'Video Project' as const,
        icon: <Video className="w-4 h-4 text-amber-400" />,
        action: () => scrollToTarget('video-portfolio'),
        keywords: ['video', 'reel', 'edit', 'trailer', 'documentary', 'retention', 'premiere', v.title.toLowerCase(), v.tag.toLowerCase()],
      })),

      // 4. Graphic Designs & Posters
      ...GRAPHIC_WORKS.map((g) => ({
        id: `graphic-${g.id}`,
        title: g.title,
        subtitle: `${g.category} • ${g.alt}`,
        category: 'Graphic Design' as const,
        icon: <Palette className="w-4 h-4 text-emerald-400" />,
        action: () => {
          onClose();
          if (onOpenGraphicLightbox) {
            onOpenGraphicLightbox(g);
          } else {
            scrollToTarget('graphic-works');
          }
        },
        keywords: ['graphic', 'poster', 'flyer', 'thumbnail', 'banner', 'photoshop', 'illustrator', g.title.toLowerCase(), g.category.toLowerCase()],
      })),

      // 5. Software Tools & Skills
      ...SOFTWARE_TOOLS.map((t) => ({
        id: `tool-${t.id}`,
        title: t.name,
        subtitle: `${t.roleTag} • ${t.level}`,
        category: 'Tool & Skill' as const,
        icon: <Wrench className="w-4 h-4 text-yellow-400" />,
        action: () => scrollToTarget('creative-stack'),
        keywords: ['tool', 'software', 'skill', 'adobe', t.name.toLowerCase(), t.shortName.toLowerCase(), t.roleTag.toLowerCase()],
      })),
      {
        id: 'skill-meta-marketing',
        title: 'Meta Ads & Campaign Scaling',
        subtitle: 'ROAS optimization, audience targeting & creative testing',
        category: 'Tool & Skill',
        icon: <Layers className="w-4 h-4 text-blue-400" />,
        action: () => scrollToTarget('creative-stack'),
        keywords: ['meta', 'facebook ads', 'marketing', 'roas', 'scaling', 'ads', 'মার্কেটিং'],
      },
    ];

    return items;
  }, [onClose, onOpenGraphicLightbox]);

  // Filter items in real time with instant fuzzy matching
  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allSearchItems.slice(0, 8); // show top quick suggestions
    return allSearchItems.filter((item) => {
      if (item.title.toLowerCase().includes(q)) return true;
      if (item.subtitle.toLowerCase().includes(q)) return true;
      if (item.keywords.some((k) => k.includes(q))) return true;
      return false;
    });
  }, [allSearchItems, query]);

  // Keyboard navigation inside modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + (filteredItems.length || 1)) % (filteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="spotlight-search-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md transition-opacity duration-200 animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="spotlight-search-dialog"
        className={`relative w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden transition-all transform scale-100 ${
          darkMode ? 'bg-[#0b0c10] border-amber-500/40 text-slate-100' : 'bg-white border-amber-400/50 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-zinc-800/80 gap-3">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type any name, project, video, poster, tool, or skill (e.g. Masum, Reel, CapCut, Meta)..."
            className="w-full bg-transparent border-0 outline-none text-sm sm:text-base font-medium placeholder-zinc-500 text-zinc-100"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-xs px-2 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-zinc-800/80 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 divide-y divide-zinc-800/40">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-zinc-500 text-sm">
              No matching items found for &ldquo;{query}&rdquo;. Try searching &ldquo;Masum&rdquo;, &ldquo;Reel&rdquo;, &ldquo;Premiere&rdquo;, or &ldquo;WhatsApp&rdquo;.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`group flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-amber-500/15 border border-amber-500/30 text-amber-200'
                      : 'hover:bg-zinc-800/50 text-zinc-300'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 shadow-sm group-hover:border-amber-500/50">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold truncate text-white group-hover:text-amber-300">
                          {item.title}
                        </span>
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-amber-400 shrink-0 ml-3 opacity-80 group-hover:opacity-100">
                    <span>Jump</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="px-4 py-2.5 bg-black/40 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 ml-1">↓</kbd> to navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">↵</kbd> to select
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">ESC</kbd> to close
            </span>
          </div>
          <span className="text-amber-400/90 font-semibold hidden sm:inline">
            ⚡ Instant 0ms Local Search
          </span>
        </div>
      </div>
    </div>
  );
};
