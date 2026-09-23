import React, { useState } from 'react';
import { Sparkles, Video, Palette, Target, Layers, CheckCircle2 } from 'lucide-react';
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

  const SKILL_SETS = [
    {
      title: 'Video Editing',
      icon: Video,
      summary: 'High-Retention Visual Storytelling',
      skills: [
        'Pacing & Rhythmic Cuts',
        'Sound Design & Audio Layering',
        'Motion Graphics & Transitions',
        'Dynamic Captions & Subtitles',
        'Color Correction & Grading',
      ],
    },
    {
      title: 'Graphic Design',
      icon: Palette,
      summary: 'High-CTR Thumbnails & Poster Art',
      skills: [
        'YouTube Thumbnail Psychology',
        'Poster Layout & Composition',
        'Typography & Contrast',
        'Vector Art & Logo Creation',
        'Brand Identity & Social Kits',
      ],
    },
    {
      title: 'Meta Marketing',
      icon: Target,
      summary: 'Performance Advertising & ROAS',
      skills: [
        'Hook-Focused Ad Creative',
        'Campaign Structuring & Scaling',
        'Audience Targeting Strategy',
        'A/B Creative Split Testing',
        'Conversion Rate Optimization',
      ],
    },
  ];

  return (
    <section id="creative-stack" className="py-12 sm:py-16 transition-colors relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean & Minimalist */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-zinc-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Core Competencies & Stack</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#f59e0b]">
            Skills & Software Tools
          </h2>
          
          <p
            className={`mt-2.5 max-w-2xl mx-auto text-xs sm:text-sm ${
              darkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            Practical expertise across video post-production, visual key art, and data-driven Meta ad campaigns.
          </p>
        </div>

        {/* 1. SKILLS SECTION (Clean minimalist 3-pillar breakdown) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {SKILL_SETS.map((set, idx) => {
            const IconComp = set.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all ${
                  darkMode
                    ? 'bg-[#0b0c10] border-zinc-800 hover:border-amber-500/40 shadow-md'
                    : 'bg-white border-zinc-200 shadow-md hover:border-amber-400'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#f59e0b]">{set.title}</h3>
                    <p className="text-[11px] text-zinc-400">{set.summary}</p>
                  </div>
                </div>

                <ul className="space-y-2 text-xs">
                  {set.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2 text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* 2. SOFTWARE TOOL STACK (Minimalist styling) */}
        <div className="pt-2">
          {/* Category Filter Pills */}
          <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Software Arsenal ({filteredTools.length})
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-black shadow-sm'
                      : darkMode
                      ? 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                      : 'bg-zinc-100 text-zinc-700 hover:text-zinc-900 border border-zinc-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Software Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                id={`tool-card-${tool.id}`}
                onClick={() => setActiveTool(activeTool?.id === tool.id ? null : tool)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  activeTool?.id === tool.id
                    ? 'border-amber-500 ring-1 ring-amber-500/50'
                    : 'hover:border-amber-500/40'
                } ${
                  darkMode
                    ? 'bg-[#0b0c10] border-zinc-800 text-zinc-300'
                    : 'bg-white border-zinc-200 text-zinc-800 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-black text-amber-400">
                      {tool.shortName}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold leading-tight">{tool.name}</h4>
                      <span className="text-[10px] text-zinc-400">{tool.roleTag}</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-900 border border-zinc-800 text-amber-400/90">
                    {tool.level}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-2 line-clamp-2">
                  {tool.description}
                </p>

                <div className="flex items-center justify-between text-[11px] pt-2 border-t border-zinc-800/80 text-zinc-400">
                  <span>{tool.category}</span>
                  <span className="text-amber-500/90 font-medium">Click to inspect</span>
                </div>

                {activeTool?.id === tool.id && (
                  <div className="mt-3 pt-3 border-t border-zinc-800 text-xs space-y-1.5 animate-fadeIn">
                    <p className="font-bold text-amber-400">Application & Role:</p>
                    <p className="text-zinc-300">{tool.roleTag} — {tool.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

