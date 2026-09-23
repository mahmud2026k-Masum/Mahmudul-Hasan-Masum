import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Film,
  Youtube,
  Sparkles,
  Maximize2,
  RotateCcw,
  LayoutGrid,
  Layers,
  X,
} from 'lucide-react';
import { VideoItem } from '../types';

interface VideoGridProps {
  darkMode: boolean;
  videos: VideoItem[];
}

const getYouTubeId = (url: string): string => {
  const match = url.match(/(?:embed\/|v=|shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : '';
};

const getThumbnailUrl = (video: VideoItem): string => {
  const ytid = getYouTubeId(video.embedUrl) || getYouTubeId(video.sourceUrl);
  if (ytid) {
    return `https://i.ytimg.com/vi/${ytid}/hqdefault.jpg`;
  }
  return '';
};

export const VideoGrid: React.FC<VideoGridProps> = ({ darkMode, videos }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [theaterVideo, setTheaterVideo] = useState<VideoItem | null>(null);

  const touchStartXRef = useRef<number | null>(null);
  const total = videos.length;

  // Navigate next / prev
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
    setPlayingVideoId(null);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
    setPlayingVideoId(null);
  }, [total]);

  const handleSelectCard = (index: number) => {
    if (index === activeIndex) {
      // Toggle play on center card
      setPlayingVideoId((prev) => (prev === videos[index].id ? null : videos[index].id));
    } else {
      setActiveIndex(index);
      setPlayingVideoId(null);
    }
  };

  // Auto-rotation timer: cycles every 4.5 seconds unless paused, hovered, or a video is playing
  useEffect(() => {
    if (!isAutoRotating || isHovered || playingVideoId !== null || viewMode !== 'carousel') {
      return;
    }

    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoRotating, isHovered, playingVideoId, viewMode, handleNext]);

  // Touch gesture swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    if (diff > 45) {
      handlePrev();
    } else if (diff < -45) {
      handleNext();
    }
    touchStartXRef.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'carousel' || theaterVideo !== null) return;
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === ' ' && activeIndex >= 0) {
        e.preventDefault();
        setPlayingVideoId((prev) => (prev === videos[activeIndex].id ? null : videos[activeIndex].id));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, theaterVideo, activeIndex, videos, handleNext, handlePrev]);

  return (
    <section id="video-portfolio" className="py-12 sm:py-16 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  darkMode
                    ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-400/30'
                    : 'bg-amber-50 text-amber-800 border border-amber-300'
                }`}
              >
                <Film className="w-3.5 h-3.5 text-yellow-400" />
                Curated Video Portfolio
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Selected Video Editing Works
            </h2>
            <p
              className={`mt-1.5 text-sm sm:text-base max-w-xl ${
                darkMode ? 'text-zinc-400' : 'text-slate-600'
              }`}
            >
              Interactive 3D carousel showcase of high-impact vertical cuts, kinetic motion edits, and sound-synchronized sequences.
            </p>
          </div>

          {/* Controls: View Mode Switch & Video Count */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <div
              className={`flex items-center p-1 rounded-xl border text-xs font-semibold ${
                darkMode
                  ? 'bg-zinc-950/80 border-zinc-800 text-zinc-300'
                  : 'bg-amber-50 border-amber-200 text-amber-900'
              }`}
            >
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'carousel'
                    ? 'bg-amber-500 text-black font-bold shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="3D Stacked Carousel View"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>3D Carousel</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-amber-500 text-black font-bold shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="All Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
            </div>

            <div
              className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-bold ${
                darkMode
                  ? 'bg-black/80 border-amber-500/30 text-yellow-300 shadow-lg'
                  : 'bg-amber-50 border-amber-200 text-amber-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span>{videos.length} Videos</span>
            </div>
          </div>
        </div>

        {/* 1. 3D STACKED ROTATING CAROUSEL VIEW */}
        {viewMode === 'carousel' && (
          <div
            className="relative w-full select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* 3D Stage Container */}
            <div
              className="relative w-full h-[520px] sm:h-[560px] md:h-[600px] flex items-center justify-center overflow-hidden perspective-[1200px]"
              style={{ perspective: '1200px' }}
            >
              {videos.map((video, index) => {
                // Circular distance calculation (-2, -1, 0, 1, 2)
                let diff = (index - activeIndex) % total;
                if (diff > total / 2) diff -= total;
                if (diff < -total / 2) diff += total;

                const isActive = diff === 0;
                const isPlaying = isActive && playingVideoId === video.id;
                const thumbnail = getThumbnailUrl(video);

                // Calculate 3D stacking coordinates
                let translateX = '0%';
                let translateZ = '0px';
                let rotateY = '0deg';
                let scale = 1;
                let zIndex = 20;
                let opacity = 1;
                let isClickable = true;

                if (diff === 0) {
                  translateX = '0%';
                  translateZ = '60px';
                  rotateY = '0deg';
                  scale = 1;
                  zIndex = 30;
                  opacity = 1;
                } else if (diff === 1) {
                  translateX = '62%';
                  translateZ = '-20px';
                  rotateY = '-18deg';
                  scale = 0.86;
                  zIndex = 22;
                  opacity = 0.78;
                } else if (diff === -1) {
                  translateX = '-62%';
                  translateZ = '-20px';
                  rotateY = '18deg';
                  scale = 0.86;
                  zIndex = 22;
                  opacity = 0.78;
                } else if (diff === 2) {
                  translateX = '112%';
                  translateZ = '-70px';
                  rotateY = '-28deg';
                  scale = 0.72;
                  zIndex = 14;
                  opacity = 0.42;
                } else if (diff === -2) {
                  translateX = '-112%';
                  translateZ = '-70px';
                  rotateY = '28deg';
                  scale = 0.72;
                  zIndex = 14;
                  opacity = 0.42;
                } else {
                  translateX = diff > 0 ? '160%' : '-160%';
                  scale = 0.5;
                  zIndex = 5;
                  opacity = 0;
                  isClickable = false;
                }

                return (
                  <div
                    key={video.id}
                    onClick={() => isClickable && handleSelectCard(index)}
                    style={{
                      transform: `translateX(${translateX}) translateZ(${translateZ}) rotateY(${rotateY}) scale(${scale})`,
                      zIndex,
                      opacity,
                      transition: 'transform 0.55s cubic-bezier(0.2, 0.8, 0.25, 1), opacity 0.5s ease',
                      transformStyle: 'preserve-3d',
                    }}
                    className={`absolute w-[270px] sm:w-[310px] md:w-[340px] rounded-2xl border overflow-hidden shadow-2xl transition-shadow cursor-pointer ${
                      isActive
                        ? darkMode
                          ? 'bg-[#0d0f14] border-amber-400 ring-2 ring-amber-400/70 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(245,158,11,0.3)]'
                          : 'bg-white border-amber-400 ring-2 ring-amber-400/60 shadow-2xl'
                        : darkMode
                        ? 'bg-zinc-950 border-zinc-800 hover:border-amber-500/50'
                        : 'bg-slate-100 border-slate-300 hover:border-amber-400'
                    }`}
                  >
                    {/* Top Bar on Card */}
                    <div
                      className={`px-3.5 py-2.5 border-b flex items-center justify-between text-xs ${
                        darkMode ? 'bg-black/70 border-zinc-800' : 'bg-white/80 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <Youtube className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span className={`font-bold text-xs truncate ${darkMode ? 'text-amber-200' : 'text-slate-800'}`}>
                          {video.tag}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {isActive && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setTheaterVideo(video);
                            }}
                            className="text-zinc-400 hover:text-amber-400 p-1 rounded transition-colors cursor-pointer"
                            title="Expand to Theater View"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                        <a
                          href={video.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-yellow-400 hover:underline inline-flex items-center gap-0.5 text-[11px] font-bold"
                          title="Open Original Link"
                        >
                          Open
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* Media Area (Vertical 9:16 aspect ratio) */}
                    <div className="relative w-full aspect-[9/16] bg-black overflow-hidden flex items-center justify-center">
                      {isPlaying ? (
                        <iframe
                          src={`${video.embedUrl}?autoplay=1&rel=0`}
                          title={video.title}
                          className="w-full h-full border-0 absolute inset-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      ) : (
                        <div className="relative w-full h-full group/media">
                          {thumbnail ? (
                            <img
                              src={thumbnail}
                              alt={video.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                              <Film className="w-12 h-12 text-zinc-700" />
                            </div>
                          )}

                          {/* Dark gradient overlay for contrast */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

                          {/* Interactive Play Indicator Button */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                            <div
                              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
                                isActive
                                  ? 'bg-amber-500 text-black hover:scale-110 hover:bg-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.6)] animate-pulse'
                                  : 'bg-black/60 border border-white/20 text-white group-hover/media:scale-105 group-hover/media:bg-amber-500 group-hover/media:text-black'
                              }`}
                            >
                              <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
                            </div>
                            
                            {isActive && (
                              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-black/80 text-amber-400 border border-amber-500/50 backdrop-blur-md">
                                Click to Watch Video
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Info Bar */}
                    <div className="p-3.5 bg-black/80 flex flex-col justify-between border-t border-zinc-800">
                      <div>
                        <h3 className="font-bold text-sm tracking-tight text-white line-clamp-1">
                          {video.title}
                        </h3>
                        <p className="mt-1 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                          {video.title.toLowerCase().includes('motion') || video.title.toLowerCase().includes('logo')
                            ? 'Motion graphics, After Effects kinetic typography & sound animation.'
                            : 'High-energy vertical short crafted with beat-matched pacing and viral retention hooks.'}
                        </p>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-zinc-800 flex items-center justify-between text-[11px]">
                        <span className="font-mono font-bold text-amber-400/90">
                          #{index + 1} of {total}
                        </span>
                        
                        {isActive ? (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectCard(index);
                            }}
                            className="inline-flex items-center gap-1 font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                          >
                            {isPlaying ? (
                              <>
                                <Pause className="w-3.5 h-3.5" />
                                <span>Stop Video</span>
                              </>
                            ) : (
                              <>
                                <Play className="w-3.5 h-3.5 fill-current" />
                                <span>Play Now</span>
                              </>
                            )}
                          </button>
                        ) : (
                          <span className="text-zinc-500 font-semibold group-hover:text-amber-400 transition-colors">
                            Click to Focus &rarr;
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel Navigation Arrow Controls */}
            <div className="flex items-center justify-between pointer-events-none absolute inset-x-2 sm:inset-x-6 top-1/2 -translate-y-1/2 z-40">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Video"
                className="pointer-events-auto p-3 sm:p-3.5 rounded-full border border-amber-500/40 bg-black/80 text-amber-400 hover:bg-amber-500 hover:text-black hover:scale-110 shadow-[0_10px_25px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Video"
                className="pointer-events-auto p-3 sm:p-3.5 rounded-full border border-amber-500/40 bg-black/80 text-amber-400 hover:bg-amber-500 hover:text-black hover:scale-110 shadow-[0_10px_25px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Bottom Carousel Indicator Bar & Auto-Rotate Toggle */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
              {/* Dot / Number Indicators */}
              <div className="flex items-center gap-2">
                {videos.map((vid, idx) => (
                  <button
                    key={vid.id}
                    type="button"
                    onClick={() => handleSelectCard(idx)}
                    aria-label={`Jump to video ${idx + 1}: ${vid.title}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeIndex
                        ? 'w-8 bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.7)]'
                        : 'w-2.5 bg-zinc-700 hover:bg-zinc-500'
                    }`}
                  />
                ))}
              </div>

              {/* Status and Auto-Rotate Controls */}
              <div className="flex items-center gap-3 text-xs">
                <span className="text-zinc-400 font-medium">
                  Now Viewing: <strong className="text-amber-400">{videos[activeIndex]?.title}</strong>
                </span>

                <button
                  type="button"
                  onClick={() => setIsAutoRotating(!isAutoRotating)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors cursor-pointer ${
                    isAutoRotating
                      ? 'border-amber-500/40 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20'
                      : 'border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white'
                  }`}
                  title={isAutoRotating ? 'Pause auto-rotation' : 'Resume auto-rotation'}
                >
                  <RotateCcw className={`w-3.5 h-3.5 ${isAutoRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
                  <span>Auto-Rotate: {isAutoRotating ? 'ON' : 'OFF'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 2. GRID VIEW (ALTERNATIVE VIEW) */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video, index) => {
              const isPlaying = playingVideoId === video.id;
              const thumbnail = getThumbnailUrl(video);

              return (
                <div
                  key={video.id}
                  className={`group rounded-2xl border overflow-hidden transition-all duration-300 flex flex-col hover:-translate-y-2 relative ${
                    darkMode
                      ? 'bg-gradient-to-b from-[#0e1017] to-[#07080c] border-amber-500/25 hover:border-yellow-400 hover:shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(245,158,11,0.2)]'
                      : 'bg-white border-amber-200 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-900/10'
                  }`}
                >
                  {/* Header info bar */}
                  <div
                    className={`px-3.5 py-2.5 border-b flex items-center justify-between text-xs ${
                      darkMode ? 'bg-black/70 border-amber-500/20' : 'bg-amber-50/50 border-amber-100'
                    }`}
                  >
                    <span className="font-bold flex items-center gap-1.5 text-xs">
                      <Youtube className="w-3.5 h-3.5 text-red-500" />
                      <span className={darkMode ? 'text-amber-200' : 'text-slate-800'}>
                        {video.tag}
                      </span>
                    </span>

                    <a
                      href={video.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 text-[11px] font-bold transition-colors ${
                        darkMode ? 'text-yellow-400 hover:text-yellow-300' : 'text-amber-700 hover:text-amber-900'
                      }`}
                      title="Open on external platform"
                    >
                      Open
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Video Container (Vertical 9:16 ratio) */}
                  <div className="relative w-full aspect-[9/16] bg-black overflow-hidden flex items-center justify-center">
                    {isPlaying ? (
                      <iframe
                        src={`${video.embedUrl}?autoplay=1&rel=0`}
                        title={video.title}
                        className="w-full h-full border-0 absolute inset-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <div
                        onClick={() => setPlayingVideoId(video.id)}
                        className="relative w-full h-full cursor-pointer group/card"
                      >
                        {thumbnail && (
                          <img
                            src={thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-2xl group-hover/card:scale-110 transition-transform">
                            <Play className="w-6 h-6 fill-current ml-1" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer details */}
                  <div className="p-3.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-sm tracking-tight line-clamp-1 group-hover:text-yellow-400 transition-colors">
                        {video.title}
                      </h3>
                      <p
                        className={`mt-1 text-xs line-clamp-2 leading-relaxed ${
                          darkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        {video.title.toLowerCase().includes('motion') || video.title.toLowerCase().includes('logo')
                          ? 'Motion graphics, After Effects animation & kinetic visual elements.'
                          : 'High-energy vertical cut crafted with beat-matched pacing and sound effects.'}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-amber-500/20 flex items-center justify-between text-[11px]">
                      <span className={`font-mono font-bold ${darkMode ? 'text-amber-400/80' : 'text-amber-700'}`}>
                        SHOWCASE #{index + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => setTheaterVideo(video)}
                        className="font-bold text-yellow-400 hover:text-yellow-300 hover:underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        <Maximize2 className="w-3 h-3" />
                        Theater Mode
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* THEATER LIGHTBOX MODAL */}
      {theaterVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setTheaterVideo(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl border border-amber-500/40 bg-black overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase text-amber-400">
                  {theaterVideo.tag}
                </span>
                <h3 className="text-base font-black text-white">{theaterVideo.title}</h3>
              </div>

              <button
                type="button"
                onClick={() => setTheaterVideo(null)}
                className="p-2 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-amber-400/50 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative w-full aspect-[9/16] bg-black">
              <iframe
                src={`${theaterVideo.embedUrl}?autoplay=1`}
                title={theaterVideo.title}
                className="w-full h-full border-0 absolute inset-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-zinc-800 flex items-center justify-between">
              <a
                href={theaterVideo.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black bg-amber-500 text-black hover:bg-amber-400 transition-colors"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setTheaterVideo(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
