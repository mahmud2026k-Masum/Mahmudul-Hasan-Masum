import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { GraphicItem } from '../types';

interface LightboxModalProps {
  isOpen: boolean;
  selectedGraphic: GraphicItem | null;
  graphics: GraphicItem[];
  onClose: () => void;
  onSelectGraphic: (graphic: GraphicItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  selectedGraphic,
  graphics,
  onClose,
  onSelectGraphic,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !selectedGraphic) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, selectedGraphic]);

  if (!isOpen || !selectedGraphic) return null;

  const currentIndex = graphics.findIndex((g) => g.id === selectedGraphic.id);
  const total = graphics.length;

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % total;
    onSelectGraphic(graphics[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + total) % total;
    onSelectGraphic(graphics[prevIndex]);
  };

  return (
    <div
      id="graphic-lightbox-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between py-2 text-white/90 mb-2">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-sm text-yellow-300 tracking-tight truncate max-w-[200px] sm:max-w-md">
              {selectedGraphic.title}
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-yellow-400 border border-amber-500/30 font-mono">
              {currentIndex + 1} / {total}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={selectedGraphic.src}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-black/60 hover:bg-amber-500/20 text-yellow-400 border border-amber-500/30 transition-colors"
              title="Open full size in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              id="lightbox-close-btn"
              type="button"
              onClick={onClose}
              aria-label="Close Lightbox Modal"
              className="p-2 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Image Frame */}
        <div className="relative w-full max-h-[78vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black border border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
          <img
            id="lightbox-active-img"
            src={selectedGraphic.src}
            alt={selectedGraphic.title}
            className="max-h-[78vh] max-w-full object-contain select-none"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src.indexOf('/' + selectedGraphic.src) === -1) {
                target.src = '/' + selectedGraphic.src;
              }
            }}
          />

          {/* Navigation Arrows */}
          <button
            id="lightbox-prev-btn"
            type="button"
            onClick={handlePrev}
            aria-label="Previous Graphic"
            className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/80 hover:bg-black text-yellow-400 border border-amber-500/40 hover:border-yellow-400 transition-all cursor-pointer backdrop-blur-sm shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            id="lightbox-next-btn"
            type="button"
            onClick={handleNext}
            aria-label="Next Graphic"
            className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/80 hover:bg-black text-yellow-400 border border-amber-500/40 hover:border-yellow-400 transition-all cursor-pointer backdrop-blur-sm shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Image Caption & Category */}
        <div className="w-full mt-3 flex items-center justify-between text-xs text-amber-200/70 px-1">
          <span className="font-semibold">{selectedGraphic.category}</span>
          <span className="font-mono text-[11px] text-amber-400/60">Filename: {selectedGraphic.src}</span>
        </div>
      </div>
    </div>
  );
};
