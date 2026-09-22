import React from 'react';
import { Image as ImageIcon, ZoomIn, Palette, Sparkles } from 'lucide-react';
import { GraphicItem } from '../types';

interface GraphicSectionProps {
  darkMode: boolean;
  graphics: GraphicItem[];
  onOpenLightbox: (graphic: GraphicItem) => void;
}

export const GraphicSection: React.FC<GraphicSectionProps> = ({
  darkMode,
  graphics,
  onOpenLightbox,
}) => {
  return (
    <section id="graphic-works" className="py-12 sm:py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  darkMode
                    ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-400/30'
                    : 'bg-amber-50 text-amber-800 border border-amber-300'
                }`}
              >
                <Palette className="w-3.5 h-3.5 text-yellow-400" />
                Visual Design Portfolio
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Graphic & Poster Designs
            </h2>
            <p
              className={`mt-1.5 text-sm sm:text-base max-w-xl ${
                darkMode ? 'text-amber-200/70' : 'text-slate-600'
              }`}
            >
              Creative banners, promotional visual concepts, and graphic art pieces designed for digital branding. Click any image to view in high resolution.
            </p>
          </div>

          <div
            className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-bold ${
              darkMode
                ? 'bg-black/80 border-amber-500/30 text-yellow-300 shadow-lg'
                : 'bg-amber-50 border-amber-200 text-amber-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>6 Graphic Showcases</span>
          </div>
        </div>

        {/* 6 Image Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {graphics.map((item, index) => (
            <div
              key={item.id}
              id={`graphic-card-${item.id}`}
              onClick={() => onOpenLightbox(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenLightbox(item);
                }
              }}
              className={`group rounded-2xl border overflow-hidden transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-1.5 relative ${
                darkMode
                  ? 'bg-[#0e1017] border-amber-500/25 hover:border-yellow-400 hover:shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(245,158,11,0.2)]'
                  : 'bg-white border-amber-200 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-900/10'
              }`}
            >
              {/* Image Preview with Hover Zoom */}
              <div className="relative aspect-[4/3] bg-black overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  id={`img-graphic-${index + 1}`}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.indexOf('/graphic') === -1) {
                      target.src = `/${item.src}`;
                    }
                  }}
                />

                {/* Hover Overlay with Lightbox Indicator */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-500/90 text-black font-extrabold text-xs shadow-xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-4 h-4 text-black" />
                    <span>View Full Size</span>
                  </div>
                </div>

                {/* Badge Tag */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-amber-500/30 text-[11px] font-bold text-yellow-300">
                  {item.category}
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm sm:text-base group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-0.5 text-xs ${
                      darkMode ? 'text-amber-200/60' : 'text-slate-500'
                    }`}
                  >
                    Asset: {item.src}
                  </p>
                </div>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    darkMode
                      ? 'bg-amber-500/10 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black'
                      : 'bg-amber-100 text-amber-800 group-hover:bg-amber-500 group-hover:text-black'
                  }`}
                >
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
