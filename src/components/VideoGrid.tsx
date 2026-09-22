import React from 'react';
import { Play, ExternalLink, Film, Youtube, Share2, Sparkles } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoGridProps {
  darkMode: boolean;
  videos: VideoItem[];
}

export const VideoGrid: React.FC<VideoGridProps> = ({ darkMode, videos }) => {
  return (
    <section id="video-portfolio" className="py-12 sm:py-16 transition-colors">
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
                <Film className="w-3.5 h-3.5 text-yellow-400" />
                Curated Video Portfolio
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Selected Video Editing Works
            </h2>
            <p
              className={`mt-1.5 text-sm sm:text-base max-w-xl ${
                darkMode ? 'text-amber-200/70' : 'text-slate-600'
              }`}
            >
              High-impact vertical shorts, kinetic cuts, and dynamic motion sequences engineered for engagement and sound synchronization.
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
            <span>{videos.length} Active Video Showcases</span>
          </div>
        </div>

        {/* Responsive Grid: 4 columns on desktop/xl screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video, index) => {
            const isYouTube = video.platform === 'youtube';

            return (
              <div
                key={video.id}
                id={`video-card-${video.id}`}
                className={`group rounded-2xl border overflow-hidden transition-all duration-300 flex flex-col hover:-translate-y-2 relative ${
                  darkMode
                    ? 'bg-gradient-to-b from-[#0e1017] to-[#07080c] border-amber-500/25 hover:border-yellow-400 hover:shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(245,158,11,0.2)]'
                    : 'bg-white border-amber-200 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-900/10'
                }`}
              >
                {/* Header info bar */}
                <div
                  className={`px-3.5 py-2.5 border-b flex items-center justify-between text-xs ${
                    darkMode
                      ? 'bg-black/70 border-amber-500/20'
                      : 'bg-amber-50/50 border-amber-100'
                  }`}
                >
                  <span className="font-bold flex items-center gap-1.5 text-xs">
                    {isYouTube ? (
                      <Youtube className="w-3.5 h-3.5 text-red-500" />
                    ) : (
                      <Share2 className="w-3.5 h-3.5 text-blue-500" />
                    )}
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
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    id={`iframe-${video.id}`}
                    className="w-full h-full border-0 absolute inset-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
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
                        : isYouTube
                        ? 'High-energy vertical cut crafted with beat-matched pacing and sound effects.'
                        : 'Facebook Reel project focused on narrative hook and fast visual rhythm.'}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-amber-500/20 flex items-center justify-between text-[11px]">
                    <span className={`font-mono font-bold ${darkMode ? 'text-amber-400/80' : 'text-amber-700'}`}>
                      SHOWCASE #{index + 1}
                    </span>
                    <a
                      href={video.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-yellow-400 hover:text-yellow-300 hover:underline flex items-center gap-1"
                    >
                      Watch Original &rarr;
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
