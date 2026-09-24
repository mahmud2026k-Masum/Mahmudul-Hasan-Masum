import React, { useState } from 'react';
import {
  Sparkles,
  ExternalLink,
  Video,
  Award,
  Palette,
  Target,
  MapPin,
  ArrowDown,
} from 'lucide-react';
import { USER_INFO, PORTFOLIO_VIDEOS } from '../data';
import { VideoItem, Language } from '../types';
import { translations } from '../translations';

interface HeroSectionProps {
  darkMode: boolean;
  featuredVideo: VideoItem;
  name: string;
  lang: Language;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  darkMode,
  featuredVideo,
  name,
  lang,
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPhotoPopped, setIsPhotoPopped] = useState(false);
  const t = translations[lang];

  return (
    <section id="hero-section" className="pt-6 pb-12 sm:pt-8 sm:pb-16 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. TOP ITEM: PROMINENT PROFILE CARD (First thing visitors see) */}
        <div
          id="hero-profile-card"
          className={`mb-10 sm:mb-14 p-6 sm:p-10 rounded-3xl border transition-all relative overflow-hidden ${
            darkMode
              ? 'bg-[#0b0c10] border-amber-500/25 shadow-[0_15px_40px_rgba(0,0,0,0.7)]'
              : 'bg-white border-zinc-200 shadow-xl'
          }`}
        >
          {/* Subtle Ambient Gold Light Accent */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-14 relative z-10">
            
            {/* PROMINENT LARGE PROFILE PICTURE */}
            <div className="flex flex-col items-center shrink-0">
              <div
                className="relative group cursor-pointer"
                onClick={() => setIsPhotoPopped(!isPhotoPopped)}
                title="Mahmudul Hasan Masum"
              >
                {/* Ambient Golden Halo on Hover */}
                <div className="absolute -inset-3 rounded-3xl bg-amber-500/25 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
                
                {/* Profile Avatar - Large, Bold & High-Definition */}
                <div
                  className={`relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden ring-4 ring-amber-500/70 bg-black transition-all duration-300 select-none ${
                    isPhotoPopped
                      ? 'scale-105 -translate-y-2 shadow-[0_30px_60px_rgba(0,0,0,0.9),0_12px_30px_rgba(245,158,11,0.35)] ring-amber-400 ring-4'
                      : 'shadow-2xl group-hover:scale-102 group-hover:-translate-y-1.5 group-hover:shadow-[0_25px_50px_rgba(0,0,0,0.85),0_10px_25px_rgba(245,158,11,0.25)]'
                  }`}
                >
                  <img
                    src="/profile.jpg?v=orig"
                    alt={`Profile picture of ${name}`}
                    id="author-profile-img"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.indexOf('profile.jpg') === -1) {
                        target.src = '/profile.jpg';
                      }
                    }}
                  />
                  {/* Subtle Inner Border */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* GREETING & CREATOR NAME - CLEAN, MINIMALIST & SINGLE LINE DEEP GOLD */}
            <div className="flex-1 text-center lg:text-left space-y-4 min-w-0">
              
              {/* Minimalist Identity Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-300">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>{t.hero.identityPill}</span>
              </div>

              {/* Creator Name - Guaranteed ONE LINE in solid deep warm gold */}
              <div className="overflow-hidden">
                <h2 className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-1">
                  {t.hero.portfolioOf}
                </h2>
                <h1
                  id="hero-creator-name"
                  className="text-2xl sm:text-4xl md:text-5xl lg:text-[46px] font-black tracking-tight uppercase whitespace-nowrap text-[#f59e0b] leading-tight"
                  style={{ color: '#f59e0b' }}
                >
                  {lang === 'bn' ? t.hero.creatorName : name}
                </h1>
              </div>

              {/* 3 Discipline Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-zinc-900/90 text-zinc-200 border border-zinc-800 hover:border-amber-500/40 transition-colors">
                  <Video className="w-3.5 h-3.5 text-amber-500" /> {t.hero.disciplineVideo}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-zinc-900/90 text-zinc-200 border border-zinc-800 hover:border-amber-500/40 transition-colors">
                  <Palette className="w-3.5 h-3.5 text-amber-500" /> {t.hero.disciplineGraphic}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-zinc-900/90 text-zinc-200 border border-zinc-800 hover:border-amber-500/40 transition-colors">
                  <Target className="w-3.5 h-3.5 text-amber-500" /> {t.hero.disciplineMarketing}
                </span>
              </div>

              <p
                className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
                  darkMode ? 'text-zinc-300' : 'text-zinc-700'
                }`}
              >
                {t.hero.bioSummary}
              </p>

              {/* Address / Location Line */}
              <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs text-zinc-400 font-medium">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="text-zinc-300">{t.hero.address}</span>
              </div>

              {/* Minimalist Clean Portfolio Navigation Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                {/* View Graphics Button (Next Section) */}
                <a
                  href="#graphic-works"
                  id="hero-view-graphics-btn"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-400 text-black shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <Palette className="w-4 h-4 text-black" />
                  <span>{t.hero.btnViewGraphics}</span>
                </a>

                {/* Explore Videos Button */}
                <a
                  href="#video-portfolio"
                  id="hero-explore-videos-btn"
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border transition-all cursor-pointer active:scale-95 ${
                    darkMode
                      ? 'bg-zinc-900/90 border-zinc-800 text-zinc-300 hover:border-amber-500/50 hover:text-amber-400'
                      : 'bg-zinc-100 border-zinc-300 text-zinc-800 hover:bg-zinc-200'
                  }`}
                >
                  <Video className="w-4 h-4 text-amber-500" />
                  <span>{PORTFOLIO_VIDEOS.length} {t.hero.videoCountLabel}</span>
                </a>

                {/* Direct Contact Section Jump */}
                <a
                  href="#contact-section"
                  id="hero-contact-jump-btn"
                  className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border transition-all cursor-pointer active:scale-95 ${
                    darkMode
                      ? 'bg-zinc-900/50 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                      : 'bg-zinc-100/80 border-zinc-300 text-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  <ArrowDown className="w-4 h-4 text-amber-400" />
                  <span>{t.hero.btnGetInTouch}</span>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* 2. FEATURED VIDEO SHOWCASE (Positioned right below Profile Card) */}
        <div id="featured-video" className="mb-4">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  darkMode
                    ? 'bg-zinc-900 text-amber-400 border border-zinc-800'
                    : 'bg-zinc-100 text-zinc-800 border border-zinc-300'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                {t.hero.featuredTag}
              </span>
            </div>
            
            <a
              href={featuredVideo.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="watch-featured-source-btn"
              className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                darkMode
                  ? 'text-zinc-400 hover:text-amber-400'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <span>{featuredVideo.platform === 'youtube' ? t.hero.featuredWatchYouTube : 'Watch on Facebook'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 16:9 Responsive Video Container */}
          <div
            id="featured-video-container"
            className={`relative w-full aspect-video rounded-2xl overflow-hidden border transition-all duration-300 group ${
              darkMode
                ? 'bg-black border-zinc-800 shadow-[0_10px_35px_rgba(0,0,0,0.8)]'
                : 'bg-zinc-100 border-zinc-300 shadow-lg'
            }`}
          >
            {/* Embedded Video Player */}
            <iframe
              src={featuredVideo.embedUrl}
              title={featuredVideo.title}
              id="featured-video-iframe"
              className="w-full h-full border-0 absolute inset-0 z-10"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              onLoad={() => setIsVideoLoaded(true)}
            />

            {/* Loading Indicator */}
            {!isVideoLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/90 text-amber-400 z-0">
                <div className="w-10 h-10 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
                <p className="text-xs tracking-widest uppercase font-mono text-zinc-400">
                  Loading Reel...
                </p>
              </div>
            )}
          </div>

          <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 px-1 text-xs">
            <span className={darkMode ? 'text-zinc-400' : 'text-zinc-600'}>
              {t.hero.featuredVideoDesc}
            </span>
            <span className={`font-mono text-[11px] font-semibold ${darkMode ? 'text-amber-400/90' : 'text-zinc-700'}`}>
              {t.hero.aspectRatio} • {t.hero.retentionPacing}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

