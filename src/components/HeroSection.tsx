import React, { useState } from 'react';
import {
  Sparkles,
  ExternalLink,
  MessageCircle,
  Video,
  Copy,
  Check,
  Award,
  Palette,
  Target,
} from 'lucide-react';
import { USER_INFO, SOFTWARE_TOOLS, PORTFOLIO_VIDEOS } from '../data';
import { VideoItem } from '../types';

interface HeroSectionProps {
  darkMode: boolean;
  featuredVideo: VideoItem;
  name: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  darkMode,
  featuredVideo,
  name,
}) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleCopyWhatsApp = () => {
    navigator.clipboard.writeText(USER_INFO.whatsappRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="hero-section" className="pt-6 pb-12 sm:pt-10 sm:pb-16 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP ITEM: Featured / Best Video in large responsive 16/9 container with golden shadow */}
        <div id="featured-video" className="mb-10 sm:mb-14">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                  darkMode
                    ? 'bg-yellow-500/15 text-yellow-400 border border-yellow-400/40 shadow-sm shadow-yellow-500/10'
                    : 'bg-amber-50 text-amber-800 border border-amber-300'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                Featured Trailer • Best Work
              </span>
            </div>
            
            <a
              href={featuredVideo.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="watch-featured-source-btn"
              className={`inline-flex items-center gap-1.5 text-xs font-bold transition-colors cursor-pointer ${
                darkMode
                  ? 'text-yellow-400 hover:text-yellow-300 hover:underline'
                  : 'text-amber-800 hover:text-amber-900'
              }`}
            >
              <span>{featuredVideo.platform === 'youtube' ? 'Watch on YouTube' : 'Watch on Facebook'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* 16:9 Responsive Video Container with Subtle Gold-tinted Shadow */}
          <div
            id="featured-video-container"
            className={`relative w-full aspect-video rounded-2xl overflow-hidden border transition-all duration-300 group ${
              darkMode
                ? 'bg-black border-amber-500/30 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(245,158,11,0.15)]'
                : 'bg-slate-100 border-amber-200 shadow-xl shadow-amber-900/10'
            }`}
          >
            {/* Embedded Video Player (YouTube or Facebook) */}
            <iframe
              src={featuredVideo.embedUrl}
              title={featuredVideo.title}
              id="featured-video-iframe"
              className="w-full h-full border-0 absolute inset-0 z-10"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              onLoad={() => setIsVideoLoaded(true)}
            />

            {/* Loading / Fallback Indicator */}
            {!isVideoLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/90 text-yellow-300 z-0">
                <div className="w-12 h-12 rounded-full border-3 border-yellow-400 border-t-transparent animate-spin" />
                <p className="text-xs tracking-widest uppercase font-mono text-yellow-400/80">
                  Loading Best Work Reel...
                </p>
              </div>
            )}
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1 text-xs">
            <span className={darkMode ? 'text-amber-200/70' : 'text-slate-600'}>
              🎬 Dynamic trailer cut — sound design, rhythmic pacing, & visual sequencing.
            </span>
            <span className={`font-mono text-[11px] font-bold ${darkMode ? 'text-yellow-400' : 'text-amber-700'}`}>
              Aspect Ratio 16:9 • High Definition
            </span>
          </div>
        </div>

        {/* SHORT GREETING & PROFILE PICTURE (Placed right below featured video with WhatsApp) */}
        <div
          id="short-greeting-section"
          className={`p-6 sm:p-10 rounded-3xl border transition-all relative overflow-hidden ${
            darkMode
              ? 'bg-gradient-to-br from-[#0c0d12] via-[#090a0e] to-[#12131a] border-amber-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.7),0_0_30px_rgba(234,179,8,0.1)]'
              : 'bg-white border-amber-200 shadow-xl shadow-amber-900/5'
          }`}
        >
          {/* Subtle Ambient Gold Light Beam */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10 relative z-10">
            
            {/* ENHANCED PROFILE PICTURE WITH GOLD AURA & WHATSAPP CARD */}
            <div className="flex flex-col items-center shrink-0">
              <div className="relative group">
                {/* Glowing Golden Ring Backlight */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 opacity-75 blur-md group-hover:opacity-100 transition duration-500" />
                
                {/* Profile Avatar using exact "profile.jpg" */}
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden ring-3 ring-yellow-400 shadow-2xl bg-black">
                  <img
                    src="profile.jpg"
                    alt={`Profile picture of ${name}`}
                    id="author-profile-img"
                    className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700"
                    loading="eager"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.indexOf('/profile.jpg') === -1) {
                        target.src = '/profile.jpg';
                      }
                    }}
                  />
                  {/* Subtle Inner Vignette */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/40 pointer-events-none" />
                </div>

                {/* Available for Projects Badge */}
                <div
                  id="profile-status-badge"
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-extrabold flex items-center gap-1.5 shadow-lg border bg-black text-yellow-300 border-yellow-400/60 whitespace-nowrap"
                  title="Available for video editing & design commissions"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
                  AVAILABLE FOR COMMISSIONS
                </div>
              </div>

              {/* WHATSAPP CARD PROMINENTLY UNDER PROFILE */}
              <div className="mt-7 w-full max-w-[260px] p-3 rounded-2xl border border-amber-500/30 bg-black/70 text-center shadow-lg hover-lift">
                <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center justify-center gap-1.5 mb-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                  WhatsApp Direct Contact
                </div>
                
                {/* Click to Chat WhatsApp button */}
                <a
                  href={USER_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="profile-whatsapp-chat-btn"
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{USER_INFO.whatsappRaw}</span>
                </a>

                {/* Quick Copy Link */}
                <div className="mt-2 flex items-center justify-center gap-2 text-[11px]">
                  <button
                    type="button"
                    onClick={handleCopyWhatsApp}
                    className="text-amber-300/80 hover:text-yellow-400 font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* MINI QUICK SOFTWARE TOOL ICONS BADGE BAR */}
              <div className="mt-3.5 flex items-center justify-center gap-1.5 flex-wrap max-w-[260px]">
                {SOFTWARE_TOOLS.slice(0, 6).map((tool) => (
                  <span
                    key={tool.id}
                    title={`${tool.name} • ${tool.roleTag}`}
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-black border transition-transform hover:scale-125 cursor-pointer ${tool.badgeBg} ${tool.badgeColor} ${tool.accentBorder}`}
                  >
                    {tool.shortName}
                  </span>
                ))}
              </div>
            </div>

            {/* GREETING & CREATOR NAME - PROMINENT, BOLD & MULTI-DISCIPLINE IDENTITY */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              
              {/* Pro Multi-Discipline Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
                <Award className="w-3.5 h-3.5" />
                <span>Video Editor • Graphic Designer • Meta Marketer</span>
              </div>

              {/* Creator Name - Large, Bold & Gold Typography */}
              <div>
                <h2 className="text-sm font-bold tracking-widest uppercase text-amber-300/70 mb-1">
                  Creative Portfolio of
                </h2>
                <h1
                  id="hero-creator-name"
                  className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(245,158,11,0.25)] leading-tight"
                >
                  {name}
                </h1>
              </div>

              {/* 3 Discipline Badges in Hero */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-black bg-yellow-400/15 text-yellow-300 border border-yellow-400/40">
                  <Video className="w-3.5 h-3.5" /> Video Editing
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-black bg-sky-400/15 text-sky-300 border border-sky-400/40">
                  <Palette className="w-3.5 h-3.5" /> Graphic Design
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-black bg-emerald-400/15 text-emerald-300 border border-emerald-400/40">
                  <Target className="w-3.5 h-3.5" /> Meta Marketing
                </span>
              </div>

              <p
                className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
                  darkMode ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                Welcome to my creative portfolio! I edit high-retention video content (Premiere Pro, After Effects, CapCut, KineMaster), design high-CTR thumbnails and posters (Photoshop, Illustrator), and develop conversion-driven Meta Ads for digital growth.
              </p>

              {/* Primary Action Buttons with Click & Hover animations */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                
                {/* WhatsApp Primary Contact Button */}
                <a
                  href={USER_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-whatsapp-main-btn"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-extrabold transition-all bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/25 border border-emerald-300/30 cursor-pointer active:scale-95 hover-lift"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp ({USER_INFO.whatsappRaw})</span>
                </a>

                {/* Creative Software Stack Anchor */}
                <a
                  href="#creative-stack"
                  id="hero-stack-btn"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-extrabold transition-all bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 hover:brightness-110 text-black shadow-lg shadow-amber-500/25 cursor-pointer active:scale-95 hover-lift"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>View Software Stack</span>
                </a>

                {/* Explore Videos Button */}
                <a
                  href="#video-portfolio"
                  id="hero-explore-videos-btn"
                  className={`inline-flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-bold border transition-all cursor-pointer active:scale-95 hover-lift ${
                    darkMode
                      ? 'bg-black/60 border-amber-500/30 text-amber-300 hover:bg-amber-500/10 hover:border-amber-400'
                      : 'bg-slate-50 border-amber-300 text-amber-900 hover:bg-amber-50'
                  }`}
                >
                  <Video className="w-4 h-4" />
                  <span>{PORTFOLIO_VIDEOS.length} Video Edits</span>
                </a>
              </div>

              {/* Software Tool Monograms Strip */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-semibold">
                <span className="text-[11px] text-amber-300/70 uppercase tracking-wider font-mono">Tools:</span>
                <span className="px-2.5 py-1 rounded-lg border border-[#9999FF]/30 bg-[#9999FF]/10 text-[#B8B8FF] font-bold">
                  Premiere Pro
                </span>
                <span className="px-2.5 py-1 rounded-lg border border-[#D291FF]/30 bg-[#D291FF]/10 text-[#E0B0FF] font-bold">
                  After Effects
                </span>
                <span className="px-2.5 py-1 rounded-lg border border-[#31A8FF]/30 bg-[#31A8FF]/10 text-[#64B5F6] font-bold">
                  Photoshop
                </span>
                <span className="px-2.5 py-1 rounded-lg border border-[#FF9A00]/30 bg-[#FF9A00]/10 text-[#FFA726] font-bold">
                  Illustrator
                </span>
                <span className="px-2.5 py-1 rounded-lg border border-[#00F2FE]/30 bg-[#00F2FE]/10 text-[#4DD0E1] font-bold">
                  CapCut
                </span>
                <span className="px-2.5 py-1 rounded-lg border border-[#FF3366]/30 bg-[#FF3366]/10 text-[#FF6B8B] font-bold">
                  KineMaster
                </span>
                <span className="px-2.5 py-1 rounded-lg border border-[#0081FB]/30 bg-[#0081FB]/10 text-[#42A5F5] font-bold">
                  Meta Ads
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
