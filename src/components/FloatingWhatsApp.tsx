import React, { useState } from 'react';
import { MessageCircle, Copy, Check, X } from 'lucide-react';
import { USER_INFO } from '../data';

interface FloatingWhatsAppProps {
  darkMode: boolean;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(USER_INFO.whatsappRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="floating-whatsapp-widget"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none"
    >
      {/* Expanded Quick Contact Card */}
      {isOpen && (
        <div
          className={`w-72 sm:w-80 p-4 rounded-2xl border shadow-2xl backdrop-blur-xl transition-all animate-in fade-in slide-in-from-bottom-4 duration-200 ${
            darkMode
              ? 'bg-zinc-950/95 border-zinc-800 text-zinc-100 shadow-black/80'
              : 'bg-white/95 border-zinc-200 text-zinc-900 shadow-zinc-400/40'
          }`}
        >
          {/* Card Header */}
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800/60 dark:border-zinc-800/60">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                WhatsApp Active Now
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-zinc-200 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Profile snippet */}
          <div className="pt-3 pb-2 flex items-center gap-3">
            <img
              src="profile.jpg"
              alt={USER_INFO.name}
              className="w-11 h-11 rounded-xl object-cover ring-1 ring-emerald-500/40"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('/profile.jpg')) target.src = '/profile.jpg';
              }}
            />
            <div>
              <p className="text-sm font-extrabold leading-tight text-white dark:text-white">
                {USER_INFO.name}
              </p>
              <p className="text-[11px] text-zinc-400">
                ভিডিও এডিটর ও গ্রাফিক্স ডিজাইনার
              </p>
            </div>
          </div>

          <p className="text-xs text-zinc-300 dark:text-zinc-400 leading-relaxed mb-3">
            প্রজেক্ট আলোচনা বা ভিডিও এডিটিং কাজের জন্য সরাসরি হোয়াটসঅ্যাপে মেসেজ করুন।
          </p>

          {/* Actions */}
          <div className="space-y-2">
            <a
              href={USER_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md shadow-emerald-700/30 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>সরাসরি চ্যাট করুন ({USER_INFO.whatsappRaw})</span>
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className={`w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-medium border transition-colors ${
                darkMode
                  ? 'border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300'
                  : 'border-zinc-300 bg-zinc-100 hover:bg-zinc-200 text-zinc-800'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">নাম্বার কপি হয়েছে!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>নাম্বার কপি করুন ({USER_INFO.whatsappRaw})</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        id="floating-whatsapp-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/50 hover:shadow-emerald-600/40 border border-emerald-400/40 transition-all duration-300 active:scale-95 cursor-pointer"
        title="WhatsApp: 01832313750"
      >
        {/* Pulsing beacon */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>

        <MessageCircle className="w-5 h-5 fill-white" />
        
        <span className="hidden sm:inline font-bold tracking-wide">
          WhatsApp: {USER_INFO.whatsappRaw}
        </span>
        <span className="sm:hidden font-bold">
          WhatsApp
        </span>
      </button>
    </div>
  );
};
