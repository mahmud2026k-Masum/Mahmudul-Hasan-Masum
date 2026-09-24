export type Language = 'en' | 'bn';

export interface TranslationDictionary {
  navbar: {
    role: string;
    profile: string;
    graphics: string;
    videos: string;
    skills: string;
    about: string;
    contact: string;
    search: string;
    searchShortcut: string;
    whatsappLabel: string;
    switchToLight: string;
    switchToDark: string;
    switchLanguage: string;
  };
  hero: {
    creatorName: string;
    portfolioOf: string;
    identityPill: string;
    disciplineVideo: string;
    disciplineGraphic: string;
    disciplineMarketing: string;
    bioSummary: string;
    address: string;
    btnViewGraphics: string;
    btnExploreVideos: string;
    videoCountLabel: string;
    btnGetInTouch: string;
    featuredTag: string;
    featuredWatchYouTube: string;
    featuredVideoTitle: string;
    featuredVideoDesc: string;
    videoFormat: string;
    aspectRatio: string;
    retentionPacing: string;
    watchEmbedVideo: string;
  };
  graphics: {
    tag: string;
    heading: string;
    badgeCount: string;
    subtitle: string;
    filterAll: string;
    filterPosters: string;
    filterThumbnails: string;
    filterBranding: string;
    clickToZoom: string;
    openInLightbox: string;
  };
  videos: {
    tag: string;
    heading: string;
    subtitle: string;
    watchOnPlatform: string;
    youtubeLink: string;
    facebookLink: string;
    videoCount: string;
    retentionBadge: string;
  };
  software: {
    tag: string;
    heading: string;
    subtitle: string;
    masteryLevel: string;
    statsProjects: string;
    statsProjectsLabel: string;
    statsRetention: string;
    statsRetentionLabel: string;
    statsTurnaround: string;
    statsTurnaroundLabel: string;
  };
  about: {
    tag: string;
    heading: string;
    subtitle: string;
    bio: string;
    softwareStackTitle: string;
    whatIBringTitle: string;
    greeting: string;
    bioP1: string;
    bioP2: string;
    bioP3: string;
    keyHighlightsTitle: string;
    statsExperience: string;
    statsExperienceLabel: string;
    statsSatisfaction: string;
    statsSatisfactionLabel: string;
    statsHours: string;
    statsHoursLabel: string;
    skillsTitle: string;
    philosophyTitle: string;
    philosophyText: string;
    educationTitle: string;
    educationDegree: string;
    educationInstitute: string;
    locationTitle: string;
    locationText: string;
  };
  contact: {
    tag: string;
    heading: string;
    subtitle: string;
    whatsappTitle: string;
    whatsappDesc: string;
    btnChatWhatsApp: string;
    whatsappCardTitle: string;
    whatsappCardDesc: string;
    whatsappBtn: string;
    emailTitle: string;
    emailDesc: string;
    btnSendEmail: string;
    emailCardTitle: string;
    emailCardDesc: string;
    emailBtn: string;
    addressTitle: string;
    addressDesc: string;
    btnViewMap: string;
    addressCardTitle: string;
    addressCardDesc: string;
    copy: string;
    copyNumber: string;
    copied: string;
    directMessageTitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    serviceSelect: string;
    serviceVideo: string;
    serviceGraphic: string;
    serviceMarketing: string;
    serviceAll: string;
    sendBtn: string;
    quickResponseNote: string;
  };
  search: {
    placeholder: string;
    hint: string;
    noResults: string;
    trySearching: string;
    jump: string;
    navigateHint: string;
    selectHint: string;
    closeHint: string;
    instantTag: string;
    categoryProfile: string;
    categoryVideo: string;
    categoryGraphic: string;
    categoryTool: string;
    categoryContact: string;
    categorySocial: string;
  };
  footer: {
    role: string;
    roleTagline: string;
    address: string;
    allRightsReserved: string;
    rightsReserved: string;
    standaloneHtmlBtn: string;
    downloadHtml: string;
    designedFor: string;
    craftedFor: string;
    backToTop: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    navbar: {
      role: 'Video Editor • Graphic Designer • Meta Marketer',
      profile: 'Profile',
      graphics: 'Graphics',
      videos: 'Videos',
      skills: 'Skills & Tools',
      about: 'About',
      contact: 'Contact',
      search: 'Search',
      searchShortcut: '⌘K',
      whatsappLabel: 'WhatsApp:',
      switchToLight: 'Switch to Light Mode',
      switchToDark: 'Switch to Dark Mode',
      switchLanguage: 'বাংলায় পরিবর্তন করুন',
    },
    hero: {
      creatorName: 'MAHMUDUL HASAN MASUM',
      portfolioOf: 'Creative Portfolio of',
      identityPill: 'Video Editor • Graphic Designer • Meta Marketer',
      disciplineVideo: 'Video Editing',
      disciplineGraphic: 'Graphic Design',
      disciplineMarketing: 'Meta Marketing',
      bioSummary:
        'Welcome to my creative portfolio! I edit high-retention video content, design high-CTR thumbnails and posters, and build conversion-driven Meta Ads for modern digital growth.',
      address: 'House-364, Satarkul Road, Uttar Badda, Dhaka-12',
      btnViewGraphics: 'View Graphic Works',
      btnExploreVideos: 'Explore Video Edits',
      videoCountLabel: 'Video Edits',
      btnGetInTouch: 'Get in Touch',
      featuredTag: 'Featured Trailer • Best Reel',
      featuredWatchYouTube: 'Watch on YouTube',
      featuredVideoTitle: 'Cinematic Teaser & High-Retention Reel Showcase',
      featuredVideoDesc:
        'High-energy montage demonstrating precise timeline cuts, color grading, sound design, dynamic speed ramps, and retention-focused pacing in Premiere Pro and After Effects.',
      videoFormat: '9:16 Vertical Reel',
      aspectRatio: 'Full HD 1080p',
      retentionPacing: 'High-Retention Pacing',
      watchEmbedVideo: 'Video Player',
    },
    graphics: {
      tag: 'Visual Art & Branding',
      heading: 'Graphic Design & Poster Art',
      badgeCount: 'Selected Posters',
      subtitle:
        'Custom movie-style posters, high-converting social media creatives, flyers, and YouTube thumbnails crafted in Photoshop & Illustrator.',
      filterAll: 'All Artwork',
      filterPosters: 'Posters',
      filterThumbnails: 'Thumbnails',
      filterBranding: 'Branding',
      clickToZoom: 'Click to zoom & inspect details',
      openInLightbox: 'View High Resolution',
    },
    videos: {
      tag: 'Portfolio Highlights',
      heading: 'High-Retention Video Editing',
      subtitle:
        'Selected YouTube Shorts, Instagram Reels, promotional teasers, and documentary-style video edits crafted with Premiere Pro, After Effects, and CapCut.',
      watchOnPlatform: 'Watch Full Quality',
      youtubeLink: 'YouTube',
      facebookLink: 'Facebook Reel',
      videoCount: 'Projects',
      retentionBadge: 'High-Retention Edit',
    },
    software: {
      tag: 'Mastered Creative Stack',
      heading: 'Creative Tools & Expertise',
      subtitle:
        'Industry-standard production software utilized for timeline storytelling, motion design, visual art manipulation, and digital media marketing.',
      masteryLevel: 'Proficiency',
      statsProjects: '25+',
      statsProjectsLabel: 'Creative Projects Completed',
      statsRetention: '85%+',
      statsRetentionLabel: 'Average Viewer Retention',
      statsTurnaround: '24-48h',
      statsTurnaroundLabel: 'Rapid Project Turnaround',
    },
    about: {
      tag: 'Background & Experience',
      heading: 'About Mahmudul Hasan Masum',
      subtitle:
        'Dedicated video editor, graphic artist, and Meta performance marketer based in Dhaka, Bangladesh.',
      bio: "I am a passionate video editor and visual designer committed to storytelling that commands attention. Through dynamic pacing, precise sound design, and sharp typography, I transform raw footage into viral, high-retention content. Additionally, I build cohesive visual key art in Photoshop and scale performance marketing campaigns with Meta Ads.",
      softwareStackTitle: 'Software Mastery & Creative Stack',
      whatIBringTitle: 'What I Bring to Every Project',
      greeting: "Hello, I'm Mahmudul Hasan Masum.",
      bioP1:
        'I am an enthusiastic creative professional with a strong passion for visual storytelling and digital growth. Over the past several months, I have dedicated hundreds of hours to mastering Premiere Pro, After Effects, Photoshop, CapCut, and Meta Ads Manager.',
      bioP2:
        'Whether it is editing fast-paced viral reels that hold attention until the final second, crafting eye-catching poster designs that generate clicks, or configuring Meta advertising funnels that convert viewers into clients, I bring unrelenting energy and precision to every deliverable.',
      bioP3:
        'I am based in Uttar Badda, Dhaka, and work with creators, agencies, and businesses worldwide. My focus is on high reliability, fast communication, and exceeding client expectations every single time.',
      keyHighlightsTitle: 'Why Choose To Work With Me',
      statsExperience: '100%',
      statsExperienceLabel: 'Client Dedication',
      statsSatisfaction: '5/5',
      statsSatisfactionLabel: 'Quality Standard',
      statsHours: '12h+',
      statsHoursLabel: 'Daily Editing Commitment',
      skillsTitle: 'Core Competencies',
      philosophyTitle: 'Creative Philosophy',
      philosophyText:
        'Every second of a video and every pixel of a poster must serve a purpose—to hook, engage, and inspire action.',
      educationTitle: 'Location & Availability',
      educationDegree: 'Open for Remote & On-Site Projects',
      educationInstitute: 'Dhaka, Bangladesh (UTC+6)',
      locationTitle: 'Primary Studio Address',
      locationText: 'House-364, Satarkul Road, Uttar Badda, Dhaka-12, Bangladesh',
    },
    contact: {
      tag: 'Direct Collaboration',
      heading: "Get in Touch & Start Collaborating",
      subtitle:
        'Have a YouTube video, Short/Reel, graphic design poster, or Meta Ad campaign? Contact me directly via WhatsApp, email, or visit my studio for rapid turnaround.',
      whatsappTitle: 'WhatsApp Direct',
      whatsappDesc: 'Message directly for project inquiries, footage links, and instant quotes.',
      btnChatWhatsApp: 'Chat on WhatsApp',
      whatsappCardTitle: 'Instant WhatsApp Chat',
      whatsappCardDesc: 'Quickest response for quotes, urgent edits, and project briefs.',
      whatsappBtn: 'Chat on WhatsApp (01832313750)',
      emailTitle: 'Direct Email',
      emailDesc: 'Send project briefs, asset folders, and contract details directly.',
      btnSendEmail: 'Send An Email',
      emailCardTitle: 'Official Email Inquiry',
      emailCardDesc: 'Send project requirements, Google Drive assets, or formal proposals.',
      emailBtn: 'Send Email (mahmud2026k@gmail.com)',
      addressTitle: 'Studio Address',
      addressDesc: 'Dhaka, Bangladesh. Open for local meetings & global remote creative work.',
      btnViewMap: 'View On Google Maps',
      addressCardTitle: 'Studio Location',
      addressCardDesc: 'House-364, Satarkul Road, Uttar Badda, Thana: Badda, Dhaka-12, BD',
      copy: 'Copy',
      copyNumber: 'Copy Phone Number',
      copied: 'Copied',
      directMessageTitle: 'Send a Direct Project Brief',
      namePlaceholder: 'Your Name or Company',
      emailPlaceholder: 'Your Email or Phone',
      messagePlaceholder: 'Tell me about your video editing, graphic design, or marketing needs...',
      serviceSelect: 'Select Required Service',
      serviceVideo: 'Video Editing (Premiere / After Effects / CapCut)',
      serviceGraphic: 'Graphic Design (Posters / Thumbnails / Branding)',
      serviceMarketing: 'Meta Marketing (Facebook & Instagram Ads)',
      serviceAll: 'Full Creative Package (Video + Graphic + Ads)',
      sendBtn: 'Send Message via WhatsApp',
      quickResponseNote: '⚡ Typical response time: Under 15 minutes',
    },
    search: {
      placeholder: 'Type any name, project, video, poster, tool, or skill (e.g. Masum, Reel, CapCut, Meta)...',
      hint: 'Instant 0ms Local Search',
      noResults: 'No matching items found for',
      trySearching: 'Try searching "Masum", "Reel", "Premiere", or "WhatsApp".',
      jump: 'Jump',
      navigateHint: 'to navigate',
      selectHint: 'to select',
      closeHint: 'to close',
      instantTag: 'Instant 0ms Local Search',
      categoryProfile: 'Profile',
      categoryVideo: 'Video Project',
      categoryGraphic: 'Graphic Design',
      categoryTool: 'Tool & Skill',
      categoryContact: 'Contact',
      categorySocial: 'Social Link',
    },
    footer: {
      role: 'Video Editor • Graphic Designer • Meta Marketer',
      roleTagline: 'Video Editor & Visual Storyteller',
      address: 'House-364, Satarkul Road, Uttar Badda, Dhaka-12, Bangladesh',
      allRightsReserved: 'All rights reserved.',
      rightsReserved: 'All rights reserved.',
      standaloneHtmlBtn: 'Standalone HTML',
      downloadHtml: 'Download Standalone HTML',
      designedFor: 'Crafted for Maximum Retention & Visual Impact',
      craftedFor: 'Crafted for high-retention video content & storytelling',
      backToTop: 'Back to top',
    },
  },
  bn: {
    navbar: {
      role: 'ভিডিও এডিটর • গ্রাফিক ডিজাইনার • মেটা মার্কেটার',
      profile: 'প্রোফাইল',
      graphics: 'গ্রাফিক্স',
      videos: 'ভিডিও',
      skills: 'দক্ষতা ও টুলস',
      about: 'পরিচিতি',
      contact: 'যোগাযোগ',
      search: 'অনুসন্ধান',
      searchShortcut: '⌘K',
      whatsappLabel: 'হোয়াটসঅ্যাপ:',
      switchToLight: 'লাইট মোডে পরিবর্তন করুন',
      switchToDark: 'ডার্ক মোডে পরিবর্তন করুন',
      switchLanguage: 'Switch to English',
    },
    hero: {
      creatorName: 'মাহমুদুল হাসান মাসুম',
      portfolioOf: 'ক্রিয়েটিভ পোর্টফোলিও',
      identityPill: 'ভিডিও এডিটর • গ্রাফিক ডিজাইনার • মেটা মার্কেটার',
      disciplineVideo: 'ভিডিও এডিটিং',
      disciplineGraphic: 'গ্রাফিক ডিজাইন',
      disciplineMarketing: 'মেটা মার্কেটিং',
      bioSummary:
        'আমার ক্রিয়েটিভ পোর্টফোলিওতে স্বাগতম! আমি হাই-রিটেনশন ভিডিও এডিট, নজরকাড়া থাম্বনেইল ও পোস্টার ডিজাইন এবং আধুনিক ডিজিটাল গ্রোথের জন্য কনভার্সন-ড্রাইভেন মেটা অ্যাডস ক্যাম্পেইন তৈরি করি।',
      address: 'বাড়ি-৩৬৪, সাঁতারকুল রোড, উত্তর বাড্ডা, ঢাকা-১২',
      btnViewGraphics: 'গ্রাফিক কাজসমূহ দেখুন',
      btnExploreVideos: 'ভিডিও এডিটস দেখুন',
      videoCountLabel: 'ভিডিও এডিটস',
      btnGetInTouch: 'যোগাযোগ করুন',
      featuredTag: 'ফিচার্ড ট্রেইলার • সেরা রিল',
      featuredWatchYouTube: 'ইউটিউবে দেখুন',
      featuredVideoTitle: 'সিনেমেটিক টিজার ও হাই-রিটেনশন রিল শোকেস',
      featuredVideoDesc:
        'প্রিমিয়ার প্রো ও আফটার ইফেক্টসে তৈরি হাই-এনার্জি মন্টেজ—যেখানে রয়েছে নিখুঁত টাইমলিন কাট, কালার গ্রেডিং, সাউন্ড ডিজাইন এবং রিটেনশন-ফোকাসড পেসিং।',
      videoFormat: '৯:১৬ ভার্টিক্যাল রিল',
      aspectRatio: 'ফুল এইচডি ১০৮০p',
      retentionPacing: 'হাই-রিটেনশন পেসিং',
      watchEmbedVideo: 'ভিডিও প্লেয়ার',
    },
    graphics: {
      tag: 'ভিজুয়াল আর্ট ও ব্র্যান্ডিং',
      heading: 'গ্রাফিক ডিজাইন ও পোস্টার আর্ট',
      badgeCount: 'নির্বাচিত পোস্টার',
      subtitle:
        'ফটোশপ ও ইলাস্ট্রেটরে তৈরি প্রিমিয়াম মুভি পোস্টার, সোশ্যাল মিডিয়া ব্যানার, আকর্ষণীয় ফ্লায়ার এবং হাই-সিটিআর ইউটিউব থাম্বনেইল।',
      filterAll: 'সকল ডিজাইন',
      filterPosters: 'পোস্টার',
      filterThumbnails: 'থাম্বনেইল',
      filterBranding: 'ব্র্যান্ডিং',
      clickToZoom: 'বড় করে দেখতে ক্লিক করুন',
      openInLightbox: 'উচ্চ রেজোলিউশনে দেখুন',
    },
    videos: {
      tag: 'পোর্টফোলিও হাইলাইটস',
      heading: 'হাই-রিটেনশন ভিডিও এডিটিং',
      subtitle:
        'প্রিমিয়ার প্রো, আফটার ইফেক্টস এবং ক্যাপকাটের সমন্বয়ে তৈরি নির্বাচিত ইউটিউব শর্টস, ইনস্টাগ্রাম রিল, প্রোমোশনাল টিজার এবং তথ্যবহুল ভিডিও এডিটস।',
      watchOnPlatform: 'ফুল কোয়ালিটিতে দেখুন',
      youtubeLink: 'ইউটিউব',
      facebookLink: 'ফেসবুক রিল',
      videoCount: 'প্রোজেক্টস',
      retentionBadge: 'হাই-রিটেনশন এডিট',
    },
    software: {
      tag: 'মাস্টারড ক্রিয়েটিভ স্ট্যাক',
      heading: 'ক্রিয়েটিভ টুলস ও দক্ষতা',
      subtitle:
        'টাইমলাইন স্টোরিটেলিং, মোশন গ্রাফিক্স, ভিজুয়াল আর্ট ম্যানিপুলেশন এবং ডিজিটাল মিডিয়া মার্কেটিংয়ে ব্যবহৃত শীর্ষমানের প্রোডাকশন সফটওয়্যার।',
      masteryLevel: 'দক্ষতা',
      statsProjects: '২৫+',
      statsProjectsLabel: 'সম্পন্নকৃত ক্রিয়েটিভ প্রজেক্ট',
      statsRetention: '৮৫%+',
      statsRetentionLabel: 'গড় অডিয়েন্স রিটেনশন',
      statsTurnaround: '২৪-৪৮ঘণ্টা',
      statsTurnaroundLabel: 'দ্রুত প্রজেক্ট ডেলিভারি',
    },
    about: {
      tag: 'ব্যাকগ্রাউন্ড ও অভিজ্ঞতা',
      heading: 'মাহমুদুল হাসান মাসুম সম্পর্কে',
      subtitle:
        'ঢাকা, বাংলাদেশে অবস্থানরত নিবেদিতপ্রাণ প্রফেশনাল ভিডিও এডিটর, গ্রাফিক ডিজাইনার ও মেটা পারফরম্যান্স মার্কেটার।',
      bio: "আমি একজন নিবেদিতপ্রাণ ভিডিও এডিটর এবং ভিজ্যুয়াল ডিজাইনার, যিনি দর্শকের মনোযোগ আকর্ষণকারী স্টোরিটেলিং তৈরিতে প্রতিশ্রুতিবদ্ধ। ডাইনামিক পেসিং, নিখুঁত সাউন্ড ডিজাইন এবং নজরকাড়া টাইপোগ্রাফির মাধ্যমে আমি সাধারণ ফুটেজকে ভাইরাল এবং উচ্চ-রিটেনশন কনটেন্টে রূপান্তর করি। পাশাপাশি ফটোশপে নান্দনিক পোস্টার ডিজাইন এবং মেটা বিজ্ঞাপনের মাধ্যমে ব্যবসার প্রসার ঘটাই।",
      softwareStackTitle: 'সফটওয়্যার টুলকিট ও ক্রিয়েটিভ স্ট্যাক',
      whatIBringTitle: 'প্রতিটি প্রজেক্টে আমার বিশেষত্ব',
      greeting: 'হ্যালো, আমি মাহমুদুল হাসান মাসুম।',
      bioP1:
        'আমি ভিজুয়াল স্টোরিটেলিং এবং ডিজিটাল ব্র্যান্ড গ্রোথে বিশ্বাসী একজন ক্রিয়েটিভ প্রফেশনাল। গত কয়েক মাস ধরে আমি প্রিমিয়ার প্রো, আফটার ইফেক্টস, ফটোশপ, ক্যাপকাট এবং মেটা অ্যাডস ম্যানেজারে নিজেকে দক্ষ করে তোলার জন্য শত শত ঘণ্টা ব্যয় করেছি।',
      bioP2:
        'দর্শকের নজর ধরে রাখার মতো গতিশীল ভাইরাল রিল তৈরি করা হোক, ক্লিকেবল পোস্টার ডিজাইন করা হোক কিংবা ভিউয়ারকে ক্লায়েন্টে রূপান্তরের জন্য মেটা বিজ্ঞাপনী ফানেল সেটআপ করা হোক—আমি প্রতিটি কাজেই শতভাগ আন্তরিকতা ও আধুনিক নান্দনিকতা বজায় রাখি।',
      bioP3:
        'আমি উত্তর বাড্ডা, ঢাকায় অবস্থান করছি এবং দেশি-বিদেশি বিভিন্ন কনটেন্ট ক্রিয়েটর, এজেন্সি ও ব্যবসার সাথে কাজ করছি। দ্রুত যোগাযোগ ও মানসম্মত কাজ ডেলিভারি করাই আমার মূল লক্ষ্য।',
      keyHighlightsTitle: 'কেন আমার সাথে কাজ করবেন',
      statsExperience: '১০০%',
      statsExperienceLabel: 'কাজের প্রতি একাগ্রতা',
      statsSatisfaction: '৫/৫',
      statsSatisfactionLabel: 'কোয়ালিটি স্ট্যান্ডার্ড',
      statsHours: '১২+ ঘণ্টা',
      statsHoursLabel: 'দৈনিক এডিটিং ডেডিকেশন',
      skillsTitle: 'মূল পারদর্শিতা',
      philosophyTitle: 'কাজের দর্শন',
      philosophyText:
        'একটি ভিডিওর প্রতিটি সেকেন্ড এবং একটি পোস্টারের প্রতিটি পিক্সেল এমনভাবে তৈরি হওয়া উচিত যাতে তা দর্শকের মনোযোগ আকর্ষণ করে এবং অ্যাকশন তৈরি করে।',
      educationTitle: 'কাজের ক্ষেত্র ও উপস্থিতি',
      educationDegree: 'রিমোট ও অন-সাইট উভয় প্রজেক্টে উন্মুক্ত',
      educationInstitute: 'ঢাকা, বাংলাদেশ (UTC+6)',
      locationTitle: 'মূল স্টুডিও ঠিকানা',
      locationText: 'বাড়ি-৩৬৪, সাঁতারকুল রোড, উত্তর বাড্ডা, থানা: বাড্ডা, ঢাকা-১২, বাংলাদেশ',
    },
    contact: {
      tag: 'সরাসরি কোলাবোরেশন',
      heading: 'যোগাযোগ ও কাজ শুরু করুন',
      subtitle:
        'আপনার কি কোনো ইউটিউব ভিডিও, শর্ট/রিল, গ্রাফিক ডিজাইন পোস্টার বা মেটা বিজ্ঞাপনী ক্যাম্পেইনের কাজ প্রয়োজন? দ্রুত ডেলিভারির জন্য সরাসরি হোয়াটসঅ্যাপ বা ইমেইলে যোগাযোগ করুন।',
      whatsappTitle: 'সরাসরি হোয়াটসঅ্যাপ',
      whatsappDesc: 'প্রজেক্ট আলোচনা, ফুটেজ লিংক প্রদান ও তাৎক্ষণিক কোটেশনের জন্য সরাসরি মেসেজ দিন।',
      btnChatWhatsApp: 'হোয়াটসঅ্যাপে চ্যাট করুন',
      whatsappCardTitle: 'সরাসরি হোয়াটসঅ্যাপ চ্যাট',
      whatsappCardDesc: 'দ্রুত রেট কোটেশন ও তাৎক্ষণিক প্রজেক্ট ব্রিফের জন্য সবচেয়ে সহজ উপায়।',
      whatsappBtn: 'হোয়াটসঅ্যাপে মেসেজ পাঠান (01832313750)',
      emailTitle: 'সরাসরি ইমেইল',
      emailDesc: 'প্রজেক্ট ব্রিফ, ড্রাইভ ফোল্ডার লিংক ও চুক্তি সংক্রান্ত তথ্য পাঠাতে পারেন।',
      btnSendEmail: 'একটি ইমেইল পাঠান',
      emailCardTitle: 'অফিসিয়াল ইমেইল অনুসন্ধান',
      emailCardDesc: 'প্রজেক্ট ডিটেইলস, গুগল ড্রাইভ এসেটস বা ফর্মাল প্রস্তাব পাঠাতে পারেন।',
      emailBtn: 'ইমেইল পাঠান (mahmud2026k@gmail.com)',
      addressTitle: 'স্টুডিওর ঠিকানা',
      addressDesc: 'ঢাকা, বাংলাদেশ। লোকাল মিটিং ও বিশ্বব্যাপী রিমোট প্রজেক্টে কাজ করার জন্য উন্মুক্ত।',
      btnViewMap: 'গুগল ম্যাপে দেখুন',
      addressCardTitle: 'স্টুডিও ঠিকানা',
      addressCardDesc: 'বাড়ি-৩৬৪, সাঁতারকুল রোড, উত্তর বাড্ডা, থানা: বাড্ডা, ঢাকা-১২, বাংলাদেশ',
      copy: 'কপি করুন',
      copyNumber: 'নাম্বার কপি করুন',
      copied: 'কপি হয়েছে',
      directMessageTitle: 'সরাসরি প্রজেক্টের সংক্ষিপ্ত বিবরণ পাঠান',
      namePlaceholder: 'আপনার নাম বা প্রতিষ্ঠানের নাম',
      emailPlaceholder: 'আপনার ইমেইল বা ফোন নম্বর',
      messagePlaceholder: 'আপনার ভিডিও এডিটিং, গ্রাফিক ডিজাইন বা মার্কেটিং প্রয়োজন সম্পর্কে লিখুন...',
      serviceSelect: 'প্রয়োজনীয় সার্ভিস নির্বাচন করুন',
      serviceVideo: 'ভিডিও এডিটিং (প্রিমিয়ার / আফটার ইফেক্টস / ক্যাপকাট)',
      serviceGraphic: 'গ্রাফিক ডিজাইন (পোস্টার / থাম্বনেইল / ব্র্যান্ডিং)',
      serviceMarketing: 'মেটা মার্কেটিং (ফেসবুক ও ইনস্টাগ্রাম বিজ্ঞাপন)',
      serviceAll: 'সম্পূর্ণ ক্রিয়েটিভ প্যাকেজ (ভিডিও + গ্রাফিক্স + অ্যাডস)',
      sendBtn: 'হোয়াটসঅ্যাপের মাধ্যমে পাঠান',
      quickResponseNote: '⚡ সাধারণত ১৫ মিনিটের মধ্যে রেসপন্স করা হয়',
    },
    search: {
      placeholder: 'যে কোনো নাম, প্রজেক্ট, ভিডিও, পোস্টার বা টুল সার্চ করুন (যেমন: মাসুম, রিল, ফটোশপ)...',
      hint: 'তাৎক্ষণিক ০ মিলিসেকেন্ড লোকাল সার্চ',
      noResults: 'কোনো ফলাফল পাওয়া যায়নি',
      trySearching: 'চেষ্টা করে দেখুন "মাসুম", "রিল", "প্রিমিয়ার", বা "হোয়াটসঅ্যাপ"।',
      jump: 'যান',
      navigateHint: 'দিয়ে নেভিগেট করুন',
      selectHint: 'দিয়ে নির্বাচন করুন',
      closeHint: 'দিয়ে বন্ধ করুন',
      instantTag: 'তাৎক্ষণিক ০ms লোকাল সার্চ',
      categoryProfile: 'প্রোফাইল',
      categoryVideo: 'ভিডিও প্রজেক্ট',
      categoryGraphic: 'গ্রাফিক ডিজাইন',
      categoryTool: 'টুল ও স্কিল',
      categoryContact: 'যোগাযোগ',
      categorySocial: 'সোশ্যাল লিংক',
    },
    footer: {
      role: 'ভিডিও এডিটর • গ্রাফিক ডিজাইনার • মেটা মার্কেটার',
      roleTagline: 'ভিডিও এডিটর ও ভিজ্যুয়াল স্টোরিটেলার',
      address: 'বাড়ি-৩৬৪, সাঁতারকুল রোড, উত্তর বাড্ডা, ঢাকা-১২, বাংলাদেশ',
      allRightsReserved: 'সর্বস্বত্ব সংরক্ষিত।',
      rightsReserved: 'সর্বস্বত্ব সংরক্ষিত।',
      standaloneHtmlBtn: 'স্ট্যান্ডঅ্যালোন এইচটিএমএল',
      downloadHtml: 'স্ট্যান্ডঅ্যালোন এইচটিএমএল ডাউনলোড করুন',
      designedFor: 'সর্বোচ্চ রিটেনশন ও ভিজুয়াল ইমপ্যাক্টের জন্য নির্মিত',
      craftedFor: 'উচ্চ-রিটেনশন ভিডিও কনটেন্ট ও স্টোরিটেলিংয়ের জন্য নির্মিত',
      backToTop: 'উপরে যান',
    },
  },
};
