import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  ExternalLink,
  Film,
  Youtube,
  Maximize2,
  X,
  Sparkles,
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

  // Group videos into their specific categories
  const showreelVideo = videos.find((v) => v.id === 'video-portfolio-showreel') || videos[0];
  const verticalReels = videos.filter((v) => v.aspectRatio === '9/16');
  const widescreenVideos = videos.filter((v) => v.aspectRatio === '16/9' && v.id !== 'video-portfolio-showreel');

  // Filter video list based on selected category tab
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
    if (video.id === 'video-portfolio-showreel') {
      return {
        title: lang === 'bn' ? 'মাহমুদুল হাসান • ক্রিয়েটিভ ভিডিও এডিটর ও মোশন শোরিল' : 'Mahmudul Hasan | Video Editor & Motion Designer | Creative Portfolio',
        desc: lang === 'bn'
          ? 'সম্পূর্ণ পোর্টফোলিও শোকেস—যেখানে রয়েছে হাই-রিটেনশন কাটস, প্রিমিয়ার প্রো টাইমলাইন মাস্টারিং, আফটার ইফেক্টস মোশন ও সাউন্ড ডিজাইন।'
          : 'Full creative showreel featuring timeline mastery in Premiere Pro, dynamic After Effects motion, cinematic color grading, and retention sound design.',
        tags: ['Featured Showreel', 'Premiere Pro', 'After Effects', '16:9 Widescreen'],
      };
    }
    if (video.id === 'video-ai' || video.tag.includes('AI')) {
      return {
        title: lang === 'bn' ? 'Ai কি মানুষের চাকরি খেয়ে ফেলবে? • AI & Future Reel' : 'Ai কি মানুষের চাকরি খেয়ে ফেলবে? • AI & Future Reel',
        desc: lang === 'bn'
          ? 'প্রথম ৩ সেকেন্ডের রিটেনশন হুক, ট্রেন্ডিং বিট-সিঙ্ক কাটস, আকর্ষণীয় সাবটাইটেল এবং এআই ফিউচার টপিক এনগেজমেন্ট।'
          : 'Sub-3s viral retention hook, dynamic beat-synced pacing, kinetic Bengali typography, and high-engagement AI discussion.',
        tags: ['AI Future', 'Viral Hook', 'Kinetic Text', '9:16 Reel'],
      };
    }
    if (video.id === 'video-ae') {
      return {
        title: lang === 'bn' ? 'অ্যাডোবি আফটার ইফেক্টস মোশন • নাজমুল হুদা মোশন' : 'Adobe After Effects Motion Video • নাজমুল হুদা মোশন',
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

  // Reusable card renderer
  const renderCard = (video: VideoItem, indexNumber?: number) => {
    const isPlaying = playingVideoId === video.id;
    const thumbnail = getThumbnailUrl(video);
    const isVertical = video.aspectRatio === '9/16';
    const tech = getTechniqueDetails(video);
    const displayIndex = indexNumber !== undefined ? (indexNumber < 10 ? `0${indexNumber}` : `${indexNumber}`) : null;

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
          className={`px-4 py-2.5 border-b flex items-center justify-between text-xs ${
            darkMode ? 'bg-black/60 border-zinc-800/80' : 'bg-zinc-50 border-zinc-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            {displayIndex && (
              <span className="font-mono text-[11px] font-bold text-amber-400">
                PROJECT #{displayIndex}
              </span>
            )}
            <span
              className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-200 text-zinc-700'
              }`}
            >
              {isVertical ? '9:16 Reel' : '16:9 Widescreen'}
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
            isVertical ? 'aspect-[9/15]' : 'aspect-video'
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
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-500/90 text-black flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.5)] group-hover/media:scale-110 group-hover/media:bg-amber-400 group-hover/media:shadow-[0_0_40px_rgba(245,158,11,0.8)] transition-all duration-300">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
                </div>
                <span className="px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-black/85 text-amber-400 border border-amber-500/40 backdrop-blur-md opacity-90 group-hover/media:opacity-100 transition-opacity">
                  {t.videos.watchInline}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* CARD BODY - Compact, minimal spacing, no empty dead space */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-3">
          <div>
            <h3 className="font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-amber-400 transition-colors line-clamp-1">
              {tech.title}
            </h3>
            <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed line-clamp-2">
              {tech.desc}
            </p>

            {/* Technique Tags */}
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {tech.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CARD ACTION BUTTONS */}
          <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => setTheaterVideo(video)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-black border border-amber-500/30 transition-all cursor-pointer active:scale-95"
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
  };

  return (
    <section id="video-portfolio" className="py-14 sm:py-20 transition-colors relative overflow-hidden">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6 border-b pb-8 border-zinc-800/80">
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

        {/* 
          FILTER LOGIC:
          - If "all":
            1. Top Featured Showreel (widescreen, 16:9, before reels)
            2. Short-Form Reels Grid (9:16 vertical, exactly same height)
            3. Widescreen & Motion Edits (16:9 widescreen, side-by-side, same size, at the bottom)
          - If "reels":
            Shows all 9:16 vertical reels
          - If "motion":
            Shows all 16:9 widescreen videos side-by-side
        */}

        {filter === 'all' ? (
          <div className="space-y-12 sm:space-y-16">
            {/* PART 1: TOP FEATURED SHOWREEL (Before "এআই কি মানুষের চাকরি খেয়ে দেবে?" reel) */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  {t.videos.featuredShowreelBadge}
                </span>
                <span className="text-xs font-mono font-bold text-zinc-400">
                  PROJECT #01 • WIDESCREEN
                </span>
              </div>
              <div className="max-w-4xl mx-auto">
                {renderCard(showreelVideo, 1)}
              </div>
            </div>

            {/* PART 2: SHORT-FORM REELS (9:16 Vertical, starting with "Ai কি মানুষের চাকরি খেয়ে ফেলবে?") */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-zinc-800/60 gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2">
                    <span>📱</span>
                    <span>{t.videos.reelsHeading}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    {lang === 'bn'
                      ? 'সাব-৩ সেকেন্ড রিটেনশন হুক, ট্রেন্ডিং অডিও সিঙ্ক, কাইনেটিক ক্যাপশন এবং এআই আলোচনা।'
                      : 'Sub-3s viral retention hook, trending audio sync, kinetic typography, and fast pacing.'}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-amber-400 px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 shrink-0 self-start sm:self-auto">
                  {verticalReels.length} {t.videos.videoCount} (9:16)
                </span>
              </div>

              {/* Strict 9:16 Vertical Grid: Row 1 has 3 reels; Row 2 has 2 reels centered with equal margins on both sides */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
                {verticalReels.map((video, idx) => {
                  let colSpanClass = 'col-span-1 sm:col-span-1 lg:col-span-2';
                  if (idx === 3) {
                    // 4th video: start at column 2 on desktop (leaves col 1 empty on left)
                    colSpanClass = 'col-span-1 sm:col-span-1 lg:col-start-2 lg:col-span-2';
                  } else if (idx === 4) {
                    // 5th video: spans col 4 & 5 (leaves col 6 empty on right). On tablet (2-col), centers across both cols.
                    colSpanClass = 'col-span-1 sm:col-span-2 sm:max-w-md sm:mx-auto sm:w-full lg:col-span-2 lg:max-w-none';
                  }
                  return (
                    <div key={video.id} className={colSpanClass}>
                      {renderCard(video, idx + 2)}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PART 3: YOUTUBE WIDESCREEN & MOTION EDITS (Side-by-side at the bottom, exact same size, centered) */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-3 border-b border-zinc-800/60 gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2">
                    <span>⚡</span>
                    <span>{t.videos.widescreenHeading}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    {lang === 'bn'
                      ? 'লং-ফর্ম ডকুমেন্টারি স্টোরিটেলিং, আফটার ইফেক্টস ৩ডি মোশন এবং সিনেমাটিক অডিও মাস্টারিং।'
                      : 'Long-form documentary storytelling, After Effects 3D motion, and cinematic narrative assembly.'}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-amber-400 px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 shrink-0 self-start sm:self-auto">
                  {widescreenVideos.length} {t.videos.videoCount} (16:9)
                </span>
              </div>

              {/* Strict 16:9 Horizontal Grid: both cards side-by-side, same size, zero empty gap, centered */}
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {widescreenVideos.map((video, idx) => (
                  <div key={video.id} className="w-full">
                    {renderCard(video, verticalReels.length + idx + 2)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : filter === 'reels' ? (
          /* Filtered Tab View: Reels Centered with Equal Margins */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
            {filteredVideos.map((video, idx) => {
              let colSpanClass = 'col-span-1 sm:col-span-1 lg:col-span-2';
              if (idx === 3) {
                colSpanClass = 'col-span-1 sm:col-span-1 lg:col-start-2 lg:col-span-2';
              } else if (idx === 4) {
                colSpanClass = 'col-span-1 sm:col-span-2 sm:max-w-md sm:mx-auto sm:w-full lg:col-span-2 lg:max-w-none';
              }
              return (
                <div key={video.id} className={colSpanClass}>
                  {renderCard(video, idx + 1)}
                </div>
              );
            })}
          </div>
        ) : (
          /* Filtered Tab View: Widescreen Motion Videos Centered */
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredVideos.map((video, idx) => renderCard(video, idx + 1))}
          </div>
        )}

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
