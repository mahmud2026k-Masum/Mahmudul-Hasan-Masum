import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check, ExternalLink, Send, Sparkles, MapPin, Facebook, Twitter } from 'lucide-react';
import { USER_INFO } from '../data';
import { Language } from '../types';
import { translations } from '../translations';

interface ContactSectionProps {
  darkMode: boolean;
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode, lang }) => {
  const t = translations[lang];
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);

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

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(USER_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section id="contact-section" className="py-12 sm:py-20 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-yellow-500/10 text-yellow-400 border border-yellow-400/30">
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
          {t.contact.tag}
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
          {t.contact.heading}
        </h2>

        <p
          className={`text-base sm:text-lg max-w-2xl mx-auto mb-10 ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {t.contact.subtitle}
        </p>

        {/* Contact Action Cards - 3 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
          
          {/* 1. PRIMARY: WhatsApp Card */}
          <div
            className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 hover-lift relative overflow-hidden flex flex-col justify-between ${
              darkMode
                ? 'bg-zinc-950 border-emerald-500/40 shadow-xl shadow-emerald-950/20'
                : 'bg-emerald-50/50 border-emerald-300 shadow-lg'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                  {lang === 'bn' ? 'সবচেয়ে দ্রুত' : 'Fastest'}
                </span>
              </div>

              <h3 className="text-lg font-black mb-1">{t.contact.whatsappTitle}</h3>
              <p className={`text-xs mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {t.contact.whatsappDesc}
              </p>

              <div className="p-3 rounded-xl bg-black/60 border border-emerald-500/30 mb-4 flex items-center justify-between">
                <span className="font-mono font-bold text-xs sm:text-sm text-emerald-300">
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
                      <span>{t.contact.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.contact.copy}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <a
              href={USER_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-whatsapp-btn"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{t.contact.btnChatWhatsApp}</span>
            </a>
          </div>

          {/* 2. SECONDARY: Email Card */}
          <div
            className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 hover-lift relative overflow-hidden flex flex-col justify-between ${
              darkMode
                ? 'bg-zinc-950 border-amber-500/30 shadow-xl shadow-amber-950/10'
                : 'bg-amber-50/50 border-amber-300 shadow-lg'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-2xl bg-amber-500 text-black flex items-center justify-center shadow-lg shadow-amber-500/30 font-black">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 uppercase tracking-wider">
                  {lang === 'bn' ? 'অফিশিয়াল' : 'Official'}
                </span>
              </div>

              <h3 className="text-lg font-black mb-1">{t.contact.emailTitle}</h3>
              <p className={`text-xs mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {t.contact.emailDesc}
              </p>

              <div className="p-3 rounded-xl bg-black/60 border border-amber-500/30 mb-4 flex items-center justify-between">
                <span className="font-mono font-bold text-xs text-yellow-300 truncate max-w-[150px]">
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
                      <span>{t.contact.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.contact.copy}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <a
              href={`mailto:${USER_INFO.email}?subject=Collaboration%20Inquiry%20(Video%20Editing%20/%20Graphic%20Design%20/%20Meta%20Marketing)`}
              id="contact-email-btn"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-amber-500 hover:bg-amber-400 text-black shadow-md transition-all cursor-pointer active:scale-95"
            >
              <Send className="w-3.5 h-3.5 text-black" />
              <span>{t.contact.btnSendEmail}</span>
            </a>
          </div>

          {/* 3. TERTIARY: Studio Address Card */}
          <div
            className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 hover-lift relative overflow-hidden flex flex-col justify-between ${
              darkMode
                ? 'bg-zinc-950 border-zinc-800 shadow-xl'
                : 'bg-zinc-50 border-zinc-300 shadow-lg'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-2xl bg-zinc-800 text-amber-400 flex items-center justify-center shadow-md font-black border border-zinc-700">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700 uppercase tracking-wider">
                  {lang === 'bn' ? 'ঠিকানা' : 'Location'}
                </span>
              </div>

              <h3 className="text-lg font-black mb-1">{t.contact.addressTitle}</h3>
              <p className={`text-xs mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {t.contact.addressDesc}
              </p>

              <div className="p-3 rounded-xl bg-black/60 border border-zinc-800 mb-4 flex items-start justify-between gap-2">
                <span className="font-mono text-xs text-zinc-200 leading-snug">
                  {t.hero.address}
                </span>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer shrink-0 mt-0.5"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-amber-400" />
                      <span>{t.contact.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.contact.copy}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER_INFO.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-map-btn"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 shadow-md transition-all cursor-pointer active:scale-95"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.contact.btnViewMap}</span>
            </a>
          </div>

        </div>

        {/* SOCIAL PROFILES & NETWORKS - FACEBOOK & X (TWITTER) */}
        <div className="mb-10 p-6 rounded-3xl border border-zinc-800 bg-black/60 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div className="text-center sm:text-left">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {lang === 'bn' ? 'সোশ্যাল প্রোফাইল ও নেটওয়ার্ক' : 'Social Profiles & Networks'}
              </span>
              <h4 className="text-base sm:text-lg font-black text-white">
                {lang === 'bn' ? 'সোশ্যাল মিডিয়ায় সরাসরি কানেক্ট করুন' : 'Connect Directly on Social Media'}
              </h4>
            </div>
            <span className="text-xs text-zinc-400">
              {lang === 'bn' ? 'ফেসবুক ও এক্সে (টুইটার) সক্রিয়' : 'Active on Facebook & X (Twitter)'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Facebook Profile Card */}
            <a
              href={USER_INFO.facebookProfile}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-facebook-profile-btn"
              className="group p-4 rounded-2xl border border-blue-600/30 bg-blue-950/20 hover:bg-blue-900/30 hover:border-blue-500 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-transform">
                  <Facebook className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                    Facebook Profile
                  </h5>
                  <p className="text-xs text-zinc-400">
                    {lang === 'bn' ? 'ভিডিও প্রকল্প ও আপডেটের জন্য যুক্ত হোন' : 'Connect for video projects & updates'}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 group-hover:translate-x-0.5 transition-transform">
                {lang === 'bn' ? 'প্রোফাইল দেখুন' : 'Visit Profile'}
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* X (Twitter) Profile Card */}
            <a
              href={USER_INFO.xProfile}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-x-profile-btn"
              className="group p-4 rounded-2xl border border-zinc-700 bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-zinc-500 transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform font-black">
                  <span className="text-sm">𝕏</span>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    X (Twitter) Profile
                  </h5>
                  <p className="text-xs text-zinc-400">
                    {lang === 'bn' ? 'মোশন ডিজাইন ও ক্রিয়েটিভ আপডেট ফলো করুন' : 'Follow motion design & creative thoughts'}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 group-hover:translate-x-0.5 transition-transform">
                {lang === 'bn' ? 'এক্সে ফলো করুন' : 'Follow on 𝕏'}
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>

        {/* Extra Info & Identity */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-zinc-400">
          <span className="inline-flex items-center gap-1.5 text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            {t.hero.address}
          </span>
          <span className="text-zinc-600">•</span>
          <a
            href={USER_INFO.facebookProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline flex items-center gap-1"
          >
            <Facebook className="w-3.5 h-3.5 fill-current" />
            <span>Facebook Profile</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-zinc-600">•</span>
          <a
            href={USER_INFO.xProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline flex items-center gap-1"
          >
            <span className="font-bold">𝕏</span>
            <span>X (Twitter) Profile</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-zinc-600">•</span>
          <span>{t.navbar.role}</span>
        </div>

      </div>
    </section>
  );
};
