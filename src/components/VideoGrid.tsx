import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  ExternalLink,
  Film,
  Youtube,
  Sparkles,
  Maximize2,
  X,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { VideoItem, Language } from '../types';
import { translations } from '../translations';

interface VideoGridProps {
  darkMode: boolean;
  videos: VideoItem[];
  lang: Language;
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

export const VideoGrid: React.FC<VideoGridProps> = ({ darkMode, videos, lang }) => {
  const t = translations[lang];
  const [filter, setFilter] = useState<'all' | 'reels' | 'motion'>('all');
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [theaterVideo, setTheaterVideo] = useState<VideoItem | null>(null);

  // Filter video list based on selected category
  const filteredVideos = videos.filter((video) => {
    if (filter === 'reels') {
      return video.aspectRatio === '9/16';
    }
    if (filter === 'motion') {
      return video.aspectRatio === '16/9';
    }
    return true;
  });

  // Handle ESC key for theater modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setTheaterVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getTechniqueDetails = (video: VideoItem): { title: string; desc: string; tags: string[] } => {
    if (video.id === 'video-ai' || video.tag.includes('AI')) {
      return {
        title: lang === 'bn' ? 'সিনেমেটিক এআই ভিজ্যুয়াল এডিট' : 'Cinematic AI Visuals & Flow',
        desc: lang === 'bn'
          ? 'এআই-জেনারেটেড সিনারিও, হাইপার-রিয়েল কালার গ্রেড এবং গভীর অ্যাম্বিয়েন্ট সাউন্ড ডিজাইনের মাধ্যমে তৈরি।'
          : 'AI-generated visual concept with hyper-real color grading, kinetic flow, and deep atmospheric sound design.',
        tags: ['AI Visuals', 'Sound Mastering', 'Color Grade', '4K UHD'],
      };
    }
    if (video.id === 'video-ae') {
      return {
        title: lang === 'bn' ? 'অ্যাডোবি আফটার ইফেক্টস মোশন ভিডিও' : 'Adobe After Effects Motion Video',
        desc: lang === 'bn'
          ? 'আফটার ইফেক্টসে তৈরি ডাইনামিক ৩ডি ক্যামেরা মোশন, স্পিড র‍্যাম্প, স্মুথ ভিজ্যুয়াল এফেক্টস ও টাইপোগ্রাফি।'
          : 'Dynamic 3D camera tracking, smooth speed ramps, kinetic visual effects, and vector motion in After Effects.',
        tags: ['After Effects', 'Motion VFX', 'Speed Ramp', '16:9 Widescreen'],
      };
    }
    if (video.id === 'video-motivation') {
      return {
        title: video.title,
        desc: lang === 'bn'
          ? 'অনুপ্রেরণামূলক ডকুমেন্টারি ও স্টোরিটেলিং এডিট—যেখানে রয়েছে গতিময় ভিজ্যুয়াল ফ্লো, আবেগপূর্ণ সাউন্ড ডিজাইন ও নিখুঁত কাট।'
          : 'Inspiring documentary and narrative storytelling edit with emotional audio design, smooth pacing, and cinematic color grade.',
        tags: ['Storytelling', 'Sound Design', 'Inspirational', '16:9 Widescreen'],
      };
    }
    if (video.id === 'video-5') {
      return {
        title: video.title,
        desc: lang === 'bn'
          ? 'ক্যারিয়ার ও স্কিল ডেভেলপমেন্ট রিল—গতিময় টাইমলাইন কাট, আকর্ষণীয় সাউন্ড এফেক্টস, বোল্ড টাইপোগ্রাফি এবং হাই-এনগেজমেন্ট হুক।'
          : 'Career and skill development viral reel featuring high-energy pacing, sound punches, dynamic text overlays, and strong CTA.',
        tags: ['Skill & Career', 'Viral Hook', 'Dynamic Pacing', '9:16 Reel'],
      };
    }
    // Vertical Reels (1, 2, 3)
    return {
      title: video.title,
      desc: lang === 'bn'
        ? 'প্রথম ৩ সেকেন্ডের রিটেনশন হুক, দ্রুতগতির কাট, ট্রেন্ডিং বিট সিঙ্ক এবং অন-স্ক্রিন ক্যাপশন।'
        : 'Sub-3s viral retention hook, dynamic beat-synced pacing, kinetic typography, and audio punch.',
      tags: ['Viral Hook', 'Beat-Synced', 'Kinetic Text', '9:16 Reel'],
    };
  };

  return (
    <section id="video-portfolio" className="py-14 sm:py-20 transition-colors relative overflow-hidden">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6 border-b pb-8 border-zinc-800/80">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                  darkMode
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                    : 'bg-amber-50 text-amber-900 border border-amber-300'
                }`}
              >
                <Film className="w-3.5 h-3.5 text-amber-400" />
                {t.videos.tag}
              </span>
              <span className="text-xs font-mono font-bold text-zinc-400 px-2.5 py-1 rounded-full border border-zinc-800 bg-zinc-900">
                {videos.length} {t.videos.videoCount}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
              {t.videos.heading}
            </h2>
            <p
              className={`mt-2.5 text-sm sm:text-base max-w-2xl leading-relaxed ${
                darkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              {t.videos.subtitle}
            </p>
          </div>

          {/* FILTER TABS (PREMIUM PILLS) */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-end">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-102'
                  : 'bg-zinc-900/80 text-zinc-300 border border-zinc-800 hover:border-amber-500/40 hover:text-white'
              }`}
            >
              {t.videos.filterAll} ({videos.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('reels')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === 'reels'
                  ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-102'
                  : 'bg-zinc-900/80 text-zinc-300 border border-zinc-800 hover:border-amber-500/40 hover:text-white'
              }`}
            >
              {t.videos.filterReels} ({videos.filter((v) => v.aspectRatio === '9/16').length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('motion')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === 'motion'
                  ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-102'
                  : 'bg-zinc-900/80 text-zinc-300 border border-zinc-800 hover:border-amber-500/40 hover:text-white'
              }`}
            >
              {t.videos.filterMotion} ({videos.filter((v) => v.aspectRatio === '16/9').length})
            </button>
          </div>
        </div>

        {/* PREMIUM VIDEO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredVideos.map((video, index) => {
            const isPlaying = playingVideoId === video.id;
            const thumbnail = getThumbnailUrl(video);
            const isVertical = video.aspectRatio === '9/16';
            const tech = getTechniqueDetails(video);

            return (
              <div
                key={video.id}
                className={`group rounded-3xl border transition-all duration-300 flex flex-col overflow-hidden relative ${
                  darkMode
                    ? 'bg-gradient-to-b from-[#0e1017] via-[#0b0c12] to-[#07080b] border-zinc-800/90 hover:border-amber-500/70 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(245,158,11,0.18)] hover:-translate-y-1.5'
                    : 'bg-white border-zinc-200 hover:border-amber-400 hover:shadow-2xl hover:-translate-y-1.5'
                }`}
              >
                {/* CARD TOP BAR */}
                <div
                  className={`px-4 py-3 border-b flex items-center justify-between text-xs ${
                    darkMode ? 'bg-black/60 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="font-mono text-[11px] font-bold text-amber-400">
                      PROJECT #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                        darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-200 text-zinc-700'
                      }`}
                    >
                      {isVertical ? '9:16 Vertical' : '16:9 Widescreen'}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setTheaterVideo(video)}
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors cursor-pointer"
                      title={t.videos.theaterMode}
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={video.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors inline-flex items-center"
                      title="Open on YouTube"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* MEDIA CONTAINER */}
                <div
                  className={`relative w-full bg-black overflow-hidden flex items-center justify-center ${
                    isVertical ? 'aspect-[9/14]' : 'aspect-video'
                  }`}
                >
                  {isPlaying ? (
                    <div className="relative w-full h-full">
                      <iframe
                        src={`${video.embedUrl}?autoplay=1&rel=0`}
                        title={video.title}
                        className="w-full h-full border-0 absolute inset-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                      {/* Floating Stop Button */}
                      <button
                        type="button"
                        onClick={() => setPlayingVideoId(null)}
                        className="absolute top-3 right-3 z-20 px-3 py-1.5 rounded-xl bg-black/85 hover:bg-amber-500 hover:text-black text-white text-xs font-bold flex items-center gap-1.5 shadow-lg border border-white/20 transition-all cursor-pointer backdrop-blur-md"
                      >
                        <Pause className="w-3 h-3" />
                        <span>{t.videos.stopVideo}</span>
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => setPlayingVideoId(video.id)}
                      className="relative w-full h-full cursor-pointer group/media"
                    >
                      {thumbnail ? (
                        <img
                          src={thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/media:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                          <Film className="w-12 h-12 text-zinc-700" />
                        </div>
                      )}

                      {/* Ambient Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 group-hover/media:via-black/20 transition-all duration-300" />

                      {/* Top Overlay Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-black/80 text-amber-300 border border-amber-500/40 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                          <Youtube className="w-3.5 h-3.5 text-red-500" />
                          <span>{video.tag}</span>
                        </span>
                      </div>

                      {/* Centered Luxury Play Button */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-amber-500/90 text-black flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.5)] group-hover/media:scale-110 group-hover/media:bg-amber-400 group-hover/media:shadow-[0_0_40px_rgba(245,158,11,0.8)] transition-all duration-300">
                          <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                        </div>
                        <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-black/85 text-amber-400 border border-amber-500/40 backdrop-blur-md opacity-90 group-hover/media:opacity-100 transition-opacity">
                          {t.videos.watchInline}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* CARD BODY */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                      {tech.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-2">
                      {tech.desc}
                    </p>

                    {/* Technique Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3.5">
                      {tech.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CARD ACTION BUTTONS */}
                  <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setTheaterVideo(video)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black border border-amber-500/30 transition-all cursor-pointer active:scale-95"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{t.videos.theaterMode}</span>
                    </button>

                    <a
                      href={video.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
                    >
                      <span>YouTube</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM QUALITY ASSURANCE BANNER */}
        <div
          className={`mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl border transition-all ${
            darkMode
              ? 'bg-[#0b0c10] border-amber-500/20 shadow-xl'
              : 'bg-amber-50 border-amber-200'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <div className="text-amber-400 font-black text-xl sm:text-2xl">100%</div>
              <div className="text-xs text-zinc-400 font-semibold mt-1">Custom Timeline Cuts</div>
            </div>
            <div className="p-3">
              <div className="text-amber-400 font-black text-xl sm:text-2xl">85%+</div>
              <div className="text-xs text-zinc-400 font-semibold mt-1">Average Retention Rate</div>
            </div>
            <div className="p-3">
              <div className="text-amber-400 font-black text-xl sm:text-2xl">4K/FHD</div>
              <div className="text-xs text-zinc-400 font-semibold mt-1">Mastered Sound & Colors</div>
            </div>
            <div className="p-3">
              <div className="text-amber-400 font-black text-xl sm:text-2xl">24–48h</div>
              <div className="text-xs text-zinc-400 font-semibold mt-1">Rapid Turnaround Time</div>
            </div>
          </div>
        </div>

      </div>

      {/* FULLSCREEN CINEMA THEATER MODAL */}
      {theaterVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl animate-fadeIn"
          onClick={() => setTheaterVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0d0e14] border border-amber-500/40 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(245,158,11,0.25)] flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-zinc-800 flex items-center justify-between bg-black/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="font-bold text-sm text-white truncate max-w-md">
                  {theaterVideo.title}
                </span>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  {theaterVideo.tag}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={theaterVideo.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-300 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Open YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  type="button"
                  onClick={() => setTheaterVideo(null)}
                  className="p-1.5 rounded-xl bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-300 transition-colors cursor-pointer"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Player in Modal */}
            <div className="relative w-full bg-black aspect-video max-h-[65vh] flex items-center justify-center">
              <iframe
                src={`${theaterVideo.embedUrl}?autoplay=1&rel=0`}
                title={theaterVideo.title}
                className="w-full h-full border-0 absolute inset-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Modal Footer Details */}
            <div className="p-5 bg-[#090a0f] border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="text-zinc-400">
                <span className="text-zinc-200 font-semibold">{t.hero.retentionPacing}:</span>{' '}
                {lang === 'bn'
                  ? 'হাই-রিটেনশন ভিডিও এডিটিং, নিখুঁত অডিও সাউন্ড ইফেক্টস ও কালার গ্রেড।'
                  : 'High-retention storytelling, crisp sound engineering, and cinematic color mastery.'}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="#contact-section"
                  onClick={() => setTheaterVideo(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-black transition-colors cursor-pointer shadow-md"
                >
                  {t.hero.btnGetInTouch}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
