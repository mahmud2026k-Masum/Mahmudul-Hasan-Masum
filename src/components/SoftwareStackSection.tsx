import React, { useState } from 'react';
import { Sparkles, Video, Palette, Target, Layers, CheckCircle, Flame } from 'lucide-react';
import { SOFTWARE_TOOLS } from '../data';
import { SoftwareTool } from '../types';

interface SoftwareStackSectionProps {
  darkMode: boolean;
}

export const SoftwareStackSection: React.FC<SoftwareStackSectionProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTool, setActiveTool] = useState<SoftwareTool | null>(null);

  const categories = ['All', 'Video Editing', 'Motion & VFX', 'Graphic Design', 'Digital Marketing'];

  const filteredTools =
    selectedCategory === 'All'
      ? SOFTWARE_TOOLS
      : SOFTWARE_TOOLS.filter((t) => t.category === selectedCategory);

  return (
    <section id="creative-stack" className="py-12 sm:py-16 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP DISCIPLINE IDENTIFIER BANNER (Video Editor • Graphic Designer • Meta Marketer) */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-yellow-500/10 text-yellow-400 border border-yellow-400/40 shadow-sm shadow-yellow-500/10 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Full-Spectrum Creative Powerhouse</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Video Editor
            </span>
            <span className="mx-2 text-amber-500/60">•</span>
            <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Graphic Designer
            </span>
            <span className="mx-2 text-amber-500/60">•</span>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Meta Marketer
            </span>
          </h2>
          
          <p
            className={`mt-2.5 max-w-2xl mx-auto text-sm sm:text-base ${
              darkMode ? 'text-amber-100/70' : 'text-slate-600'
            }`}
          >
            A complete arsenal of industry-standard creative software and marketing strategies engineered to craft high-retention content that converts viewers into followers and buyers.
          </p>
        </div>

        {/* 3 CORE PILLARS CARD STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {/* Pillar 1: Video Editing */}
          <div
            className={`p-5 rounded-2xl border transition-all duration-300 hover-lift group relative overflow-hidden ${
              darkMode
                ? 'bg-gradient-to-b from-[#0f1118] to-[#0a0c10] border-amber-500/25 hover:border-yellow-400 hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)]'
                : 'bg-white border-amber-200 hover:border-amber-400 hover:shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-yellow-400/15 border border-yellow-400/30 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-yellow-400">1. Video Editing</h3>
                <span className="text-[11px] text-slate-400 font-medium">Retention & Storytelling</span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Cutting on beat, sound fx layering, dynamic zooms, speed ramping, and retention pacing for YouTube Shorts, Reels, and cinematic cuts.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] font-bold">
              <span className="px-2 py-0.5 rounded-md bg-[#9999FF]/15 text-[#B8B8FF] border border-[#9999FF]/30">Premiere Pro</span>
              <span className="px-2 py-0.5 rounded-md bg-[#D291FF]/15 text-[#E0B0FF] border border-[#D291FF]/30">After Effects</span>
              <span className="px-2 py-0.5 rounded-md bg-[#00F2FE]/15 text-[#4DD0E1] border border-[#00F2FE]/30">CapCut</span>
              <span className="px-2 py-0.5 rounded-md bg-[#FF3366]/15 text-[#FF6B8B] border border-[#FF3366]/30">KineMaster</span>
            </div>
          </div>

          {/* Pillar 2: Graphic Design */}
          <div
            className={`p-5 rounded-2xl border transition-all duration-300 hover-lift group relative overflow-hidden ${
              darkMode
                ? 'bg-gradient-to-b from-[#0f1118] to-[#0a0c10] border-amber-500/25 hover:border-sky-400 hover:shadow-[0_10px_30px_rgba(56,189,248,0.15)]'
                : 'bg-white border-amber-200 hover:border-sky-400 hover:shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-sky-400/15 border border-sky-400/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-sky-400">2. Graphic Design</h3>
                <span className="text-[11px] text-slate-400 font-medium">Visual Identity & Posters</span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Eye-popping YouTube thumbnails that boost CTR, aesthetic promotional posters, social media banners, typography, and brand assets.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] font-bold">
              <span className="px-2 py-0.5 rounded-md bg-[#31A8FF]/15 text-[#64B5F6] border border-[#31A8FF]/30">Photoshop</span>
              <span className="px-2 py-0.5 rounded-md bg-[#FF9A00]/15 text-[#FFA726] border border-[#FF9A00]/30">Illustrator</span>
              <span className="px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/30">Vector Art</span>
            </div>
          </div>

          {/* Pillar 3: Meta Marketer */}
          <div
            className={`p-5 rounded-2xl border transition-all duration-300 hover-lift group relative overflow-hidden ${
              darkMode
                ? 'bg-gradient-to-b from-[#0f1118] to-[#0a0c10] border-amber-500/25 hover:border-emerald-400 hover:shadow-[0_10px_30px_rgba(52,211,153,0.15)]'
                : 'bg-white border-amber-200 hover:border-emerald-400 hover:shadow-lg'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-emerald-400">3. Meta Marketing</h3>
                <span className="text-[11px] text-slate-400 font-medium">ROAS & Ad Creatives</span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Designing high-converting hook-focused video ads for Facebook & Instagram, audience segmentation strategy, and conversion optimization.
            </p>
            <div className="flex flex-wrap gap-1.5 text-[10px] font-bold">
              <span className="px-2 py-0.5 rounded-md bg-[#0081FB]/15 text-[#42A5F5] border border-[#0081FB]/30">Meta Ads Manager</span>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">High-ROAS Hooks</span>
              <span className="px-2 py-0.5 rounded-md bg-teal-500/15 text-teal-300 border border-teal-500/30">Ad Scaling</span>
            </div>
          </div>
        </div>

        {/* CATEGORY FILTER PILLS */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-yellow-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300/80">
              Software & Tool Stack ({SOFTWARE_TOOLS.length} Core Tools)
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-md shadow-yellow-500/20 scale-102'
                    : darkMode
                    ? 'bg-black/60 text-slate-300 hover:text-yellow-300 border border-amber-500/20 hover:border-amber-400/40'
                    : 'bg-white text-slate-700 hover:text-amber-800 border border-amber-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SOFTWARE GRID CARDS WITH AUTHENTIC STYLING & HOVER ANIMATION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              id={`tool-card-${tool.id}`}
              onClick={() => setActiveTool(activeTool?.id === tool.id ? null : tool)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveTool(activeTool?.id === tool.id ? null : tool);
                }
              }}
              className={`p-5 rounded-2xl border transition-all duration-300 hover-lift cursor-pointer flex flex-col justify-between relative group ${
                darkMode
                  ? 'bg-[#0d0f15] border-amber-500/20 hover:border-yellow-400 hover:shadow-[0_12px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(245,158,11,0.2)]'
                  : 'bg-white border-amber-200 hover:border-amber-400 hover:shadow-xl'
              }`}
            >
              <div>
                {/* Header with App Monogram & Role Tag */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-3">
                    {/* App Logo / Monogram Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg shadow-md border ${tool.badgeBg} ${tool.badgeColor} ${tool.accentBorder} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                    >
                      {tool.shortName}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base group-hover:text-yellow-400 transition-colors">
                        {tool.name}
                      </h4>
                      <span className="text-[11px] font-semibold text-amber-400/70">
                        {tool.roleTag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {tool.description}
                </p>
              </div>

              {/* Footer Mastery Level & Animated Indicator */}
              <div className="pt-3 border-t border-amber-500/15 flex items-center justify-between text-[11px]">
                <span className="flex items-center gap-1.5 font-bold text-amber-300/90">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  {tool.level}
                </span>

                <span className="text-xs text-yellow-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all font-mono">
                  &rarr;
                </span>
              </div>

              {/* Active Golden Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none rounded-tr-2xl">
                <div className="w-16 h-16 bg-gradient-to-bl from-yellow-400/20 to-transparent transform rotate-45 translate-x-3 -translate-y-3" />
              </div>
            </div>
          ))}
        </div>

        {/* CREATIVE PHILOSOPHY FOOTER NOTE */}
        <div className="mt-8 p-4 rounded-2xl border border-amber-500/25 bg-black/50 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Flame className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Cross-Discipline Advantage:</strong> Combining video pacing (Premiere & AE) with graphic key art (Photoshop & Illustrator) and data-backed Meta ad strategy.
            </span>
          </div>
          <a
            href="https://wa.me/8801832313750"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-black whitespace-nowrap shadow-md"
          >
            Inquire on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
