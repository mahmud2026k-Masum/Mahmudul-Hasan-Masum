import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check, ExternalLink, Send, Sparkles } from 'lucide-react';
import { USER_INFO } from '../data';

interface ContactSectionProps {
  darkMode: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(USER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(USER_INFO.whatsappRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact-section" className="py-12 sm:py-20 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-yellow-500/10 text-yellow-400 border border-yellow-400/30">
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          Let&apos;s Build Something Memorable
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
          Get in Touch & Start Collaborating
        </h2>

        <p
          className={`text-base sm:text-lg max-w-xl mx-auto mb-10 ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          Have a YouTube video, Short/Reel, graphic design poster, or Meta Ad campaign? Contact me directly via WhatsApp or email for rapid turnaround and dedicated execution.
        </p>

        {/* Contact Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-left">
          
          {/* PRIMARY: WhatsApp Card */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover-lift relative overflow-hidden ${
              darkMode
                ? 'bg-gradient-to-br from-[#0a1210] via-[#090e0c] to-[#0d1714] border-emerald-500/40 shadow-xl shadow-emerald-950/30'
                : 'bg-emerald-50/50 border-emerald-300 shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Fastest Response
              </span>
            </div>

            <h3 className="text-xl font-black mb-1">WhatsApp Chat</h3>
            <p className={`text-xs mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Message directly for project inquiries, raw footage sharing, or video timeline estimates.
            </p>

            <div className="p-3.5 rounded-xl bg-black/60 border border-emerald-500/30 mb-4 flex items-center justify-between">
              <span className="font-mono font-bold text-sm text-emerald-300">
                {USER_INFO.whatsappRaw}
              </span>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 cursor-pointer"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <a
              href={USER_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-btn"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-extrabold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-lg shadow-emerald-500/25 transition-all cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Open WhatsApp & Chat Now</span>
            </a>
          </div>

          {/* SECONDARY: Email Card */}
          <div
            className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover-lift relative overflow-hidden ${
              darkMode
                ? 'bg-gradient-to-br from-[#121008] via-[#0e0c06] to-[#17140b] border-amber-500/40 shadow-xl shadow-amber-950/20'
                : 'bg-amber-50/50 border-amber-300 shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-black flex items-center justify-center shadow-lg shadow-amber-500/30 font-black">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                Official Email
              </span>
            </div>

            <h3 className="text-xl font-black mb-1">Direct Email</h3>
            <p className={`text-xs mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Send project briefs, Google Drive footage links, and campaign requirements.
            </p>

            <div className="p-3.5 rounded-xl bg-black/60 border border-amber-500/30 mb-4 flex items-center justify-between">
              <span className="font-mono font-bold text-xs sm:text-sm text-yellow-300 truncate max-w-[200px]">
                {USER_INFO.email}
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-xs font-semibold text-yellow-400 hover:text-yellow-300 inline-flex items-center gap-1 cursor-pointer shrink-0"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <a
              href={`mailto:${USER_INFO.email}?subject=Collaboration%20Inquiry%20(Video%20Editing%20/%20Graphic%20Design%20/%20Meta%20Marketing)`}
              id="contact-email-btn"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-sm font-extrabold bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 hover:brightness-110 text-black shadow-lg shadow-amber-500/25 transition-all cursor-pointer active:scale-95"
            >
              <Send className="w-4 h-4 text-black" />
              <span>Send An Email</span>
            </a>
          </div>

        </div>

        {/* Extra Info & Identity */}
        <div className="inline-flex items-center gap-4 text-xs font-semibold">
          <a
            href={USER_INFO.facebookProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline flex items-center gap-1"
          >
            <span>Facebook Reel Showcase</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-slate-600">•</span>
          <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>
            Video Editor • Graphic Designer • Meta Marketer
          </span>
        </div>

      </div>
    </section>
  );
};
