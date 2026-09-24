import React from 'react';
import { UserCheck, Sparkles, CheckCircle2, Film, Video, Palette, Target } from 'lucide-react';
import { USER_INFO, SOFTWARE_TOOLS } from '../data';
import { Language } from '../types';
import { translations } from '../translations';

interface AboutSectionProps {
  darkMode: boolean;
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode, lang }) => {
  const t = translations[lang];

  return (
    <section id="about-section" className="py-12 sm:py-16 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card with Black & Gold Theme */}
        <div
          className={`p-6 sm:p-12 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
            darkMode
              ? 'bg-gradient-to-br from-[#0c0d12] via-[#090a0e] to-[#12131a] border-amber-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(245,158,11,0.1)]'
              : 'bg-white border-amber-200 shadow-xl shadow-amber-900/5'
          }`}
        >
          {/* Subtle Ambient Gold Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="flex items-center gap-2 mb-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                darkMode
                  ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-400/30'
                  : 'bg-amber-50 text-amber-800 border border-amber-300'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 text-yellow-400" />
              {t.about.tag}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
            {t.about.heading}
          </h2>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 rounded-xl text-xs font-black bg-yellow-400/15 text-yellow-300 border border-yellow-400/40 inline-flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5" /> {lang === 'bn' ? 'হাই-রিটেনশন ভিডিও এডিটিং' : 'High-Retention Video Editing'}
            </span>
            <span className="px-3 py-1 rounded-xl text-xs font-black bg-sky-400/15 text-sky-300 border border-sky-400/40 inline-flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5" /> {lang === 'bn' ? 'পোস্টার ও গ্রাফিক ডিজাইন' : 'Key Art & Graphic Design'}
            </span>
            <span className="px-3 py-1 rounded-xl text-xs font-black bg-emerald-400/15 text-emerald-300 border border-emerald-400/40 inline-flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5" /> {lang === 'bn' ? 'মেটা বিজ্ঞাপন ও আরওএএস' : 'Meta Ads Marketing & ROAS'}
            </span>
          </div>

          {/* User's Exact Honest Bio */}
          <div
            className={`p-6 sm:p-8 rounded-2xl border mb-8 relative ${
              darkMode
                ? 'bg-black/60 border-amber-500/25 text-slate-200'
                : 'bg-amber-50/50 border-amber-200 text-slate-800'
            }`}
          >
            <div className="absolute top-4 right-4 opacity-15">
              <Film className="w-16 h-16 text-yellow-400" />
            </div>
            
            <p className="text-base sm:text-lg leading-relaxed font-normal relative z-10">
              &ldquo;{t.about.bio}&rdquo;
            </p>

            <div className="mt-4 pt-4 border-t border-amber-500/20 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="font-bold text-yellow-400 uppercase tracking-wider">
                — {lang === 'bn' ? t.hero.creatorName : USER_INFO.name}
              </span>
              <span className={darkMode ? 'text-amber-200/60 font-mono' : 'text-slate-500 font-mono'}>
                {lang === 'bn'
                  ? 'প্রিমিয়ার প্রো, আফটার ইফেক্টস, ফটোশপ, ক্যাপকাট এবং মেটা বিজ্ঞাপনে বিশেষজ্ঞ'
                  : 'Daily Craft in Premiere, After Effects, Photoshop, CapCut & Meta Ads'}
              </span>
            </div>
          </div>

          {/* Core Tools Utilized Everyday */}
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              {t.about.softwareStackTitle}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {SOFTWARE_TOOLS.map((tool) => (
                <div
                  key={tool.id}
                  className={`p-3 rounded-xl border text-center transition-all hover-lift ${
                    darkMode ? 'bg-black/50 border-amber-500/20' : 'bg-slate-50 border-amber-200'
                  }`}
                >
                  <div
                    className={`w-9 h-9 mx-auto rounded-lg flex items-center justify-center text-xs font-black mb-1.5 ${tool.badgeBg} ${tool.badgeColor} border ${tool.accentBorder}`}
                  >
                    {tool.shortName}
                  </div>
                  <div className="font-bold text-xs truncate" title={tool.name}>
                    {tool.name.replace('Adobe ', '')}
                  </div>
                  <div className="text-[10px] text-amber-400/80 truncate">
                    {tool.roleTag}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Focus & Practical Skills */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              {t.about.whatIBringTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {USER_INFO.skills.map((skill, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border transition-all duration-200 hover-lift ${
                    darkMode
                      ? 'bg-black/40 border-amber-500/20 hover:border-yellow-400/60'
                      : 'bg-slate-50 border-slate-200 hover:border-amber-400'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-yellow-400 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                    <span>{skill.title}</span>
                  </div>
                  <p
                    className={`text-xs leading-relaxed ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
