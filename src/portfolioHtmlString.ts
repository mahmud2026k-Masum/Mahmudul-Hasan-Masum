export const STANDALONE_HTML = `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MAHMUDUL HASAN MASUM - Video Editor • Graphic Designer • Meta Marketer</title>
  <meta name="description" content="Portfolio of Mahmudul Hasan Masum: Video Editor, Graphic Designer & Meta Marketer. Featuring Premiere Pro, After Effects, Photoshop, CapCut, video edits and Meta Ads.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    html { scroll-behavior: smooth; font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }
    #cursor-glow {
      pointer-events: none;
      position: fixed;
      inset: 0;
      z-index: 30;
      opacity: 0;
      transition: opacity 0.3s ease;
      background: radial-gradient(420px circle at 50% 50%, rgba(245, 158, 11, 0.18), rgba(251, 191, 36, 0.08) 45%, transparent 75%);
    }
    #cursor-follower {
      pointer-events: none;
      position: fixed;
      width: 44px;
      height: 44px;
      border: 1.5px solid rgba(245, 158, 11, 0.75);
      background: rgba(245, 158, 11, 0.06);
      box-shadow: 0 0 12px rgba(245, 158, 11, 0.28);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      z-index: 50;
      transition: transform 0.12s ease-out, border-color 0.2s ease, box-shadow 0.2s ease;
    }
    #cursor-dot {
      pointer-events: none;
      position: fixed;
      width: 8px;
      height: 8px;
      background: #facc15;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      z-index: 51;
      box-shadow: 0 0 10px #facc15, 0 0 18px rgba(245, 158, 11, 0.5);
    }
    .hover-lift {
      transition: transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.25s ease, border-color 0.25s ease;
    }
    .hover-lift:hover {
      transform: translateY(-4px);
    }
    @keyframes clickWavePrimary {
      0% { transform: translate(-50%, -50%) scale(0.25); opacity: 0.95; border-width: 2px; }
      50% { opacity: 0.7; }
      100% { transform: translate(-50%, -50%) scale(2.6); opacity: 0; border-width: 1px; }
    }
    @keyframes clickWaveEcho {
      0% { transform: translate(-50%, -50%) scale(0.15); opacity: 0.8; border-width: 1.5px; }
      40% { opacity: 0.6; }
      100% { transform: translate(-50%, -50%) scale(1.9); opacity: 0; border-width: 1px; }
    }
    @keyframes clickCoreBloom {
      0% { transform: translate(-50%, -50%) scale(0.2); opacity: 0.9; }
      50% { transform: translate(-50%, -50%) scale(1.4); opacity: 0.5; }
      100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
    }
    @keyframes particleBurst {
      0% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.95; }
      70% { opacity: 0.7; }
      100% { transform: translate(var(--tx), var(--ty)) scale(0) rotate(180deg); opacity: 0; }
    }
    @keyframes diamondSparkle {
      0% { transform: translate(-50%, -50%) translate(0, 0) scale(0) rotate(0deg); opacity: 1; }
      30% { transform: translate(-50%, -50%) translate(calc(var(--tx) * 0.4), calc(var(--ty) * 0.4)) scale(1.2) rotate(45deg); opacity: 1; }
      100% { transform: translate(-50%, -50%) translate(var(--tx), var(--ty)) scale(0) rotate(135deg); opacity: 0; }
    }
    .click-wave-primary {
      position: fixed;
      pointer-events: none;
      border-radius: 50%;
      border: 2px solid #facc15;
      box-shadow: 0 0 12px #facc15, inset 0 0 6px #facc15;
      animation: clickWavePrimary 0.58s cubic-bezier(0.12, 0.9, 0.28, 1) forwards;
      z-index: 999;
    }
    .click-wave-echo {
      position: fixed;
      pointer-events: none;
      border-radius: 50%;
      border: 1.5px solid rgba(254, 240, 138, 0.7);
      box-shadow: 0 0 8px rgba(245, 158, 11, 0.4);
      animation: clickWaveEcho 0.65s cubic-bezier(0.15, 0.85, 0.35, 1) 0.05s forwards;
      z-index: 998;
    }
    .click-core-bloom {
      position: fixed;
      pointer-events: none;
      border-radius: 50%;
      background: radial-gradient(circle, #facc15 0%, rgba(245, 158, 11, 0.4) 60%, transparent 100%);
      animation: clickCoreBloom 0.42s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      z-index: 997;
    }
    .click-particle {
      position: fixed;
      pointer-events: none;
      border-radius: 50%;
      animation: particleBurst 0.62s cubic-bezier(0.15, 0.88, 0.32, 1) forwards;
      z-index: 999;
    }
    .click-diamond {
      position: fixed;
      pointer-events: none;
      animation: diamondSparkle 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      z-index: 999;
    }
  </style>
</head>
<body class="bg-[#07080a] text-slate-100 antialiased selection:bg-yellow-400 selection:text-black min-h-screen relative">
  <div id="cursor-glow" aria-hidden="true"></div>
  <div id="cursor-follower" aria-hidden="true"></div>
  <div id="cursor-dot" aria-hidden="true"></div>

  <!-- NAVBAR -->
  <header class="sticky top-0 z-40 w-full border-b border-zinc-800 bg-[#08090c]/90 backdrop-blur-md px-6 py-4 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <div class="relative w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400 shadow-md shadow-amber-500/25 ring-2 ring-amber-500/20 shrink-0">
        <img src="profile.jpg" alt="Mahmudul Hasan Masum" class="w-full h-full object-cover object-top">
      </div>
      <div>
        <h1 class="font-extrabold text-base uppercase whitespace-nowrap text-[#f59e0b]">MAHMUDUL HASAN MASUM</h1>
        <p class="text-[10px] font-bold uppercase text-zinc-400">Video Editor • Graphic Designer • Meta Marketer</p>
      </div>
    </div>
    <div class="flex items-center gap-2 sm:gap-3">
      <button onclick="openSpotlightSearch()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border border-amber-500/30 bg-zinc-900/90 text-amber-300 hover:bg-amber-500/15 cursor-pointer">
        🔍 <span class="hidden md:inline">Search</span> <kbd class="hidden lg:inline text-[9px] px-1 py-0.2 rounded bg-black/40 border border-zinc-700 font-mono text-zinc-400">⌘K</kbd>
      </button>
      <a href="https://wa.me/8801832313750" target="_blank" class="relative overflow-hidden inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 backdrop-blur-xl bg-gradient-to-r from-emerald-500/20 via-emerald-400/25 to-teal-500/20 text-emerald-300 border border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:border-emerald-300 hover:text-white">
        <div class="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent pointer-events-none"></div>
        <span class="relative z-10">💬</span>
        <span class="hidden sm:inline relative z-10 font-semibold opacity-90">WhatsApp:</span>
        <span class="relative z-10 font-extrabold tracking-wide">01832313750</span>
      </a>
    </div>
  </header>

  <!-- MAIN -->
  <main class="max-w-6xl mx-auto px-4 py-8 space-y-16">
    <!-- 1. CREATOR PROFILE CARD FIRST -->
    <section class="p-8 sm:p-10 rounded-3xl border border-amber-500/25 bg-[#0b0c10] shadow-[0_15px_40px_rgba(0,0,0,0.7)] flex flex-col md:flex-row items-center gap-8 lg:gap-14">
      <div class="flex flex-col items-center shrink-0">
        <div class="relative group cursor-pointer" onclick="this.classList.toggle('scale-105')">
          <div class="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden ring-4 ring-amber-500/70 shadow-2xl bg-black transition-all duration-300 group-hover:scale-102">
            <img src="profile.jpg" alt="Mahmudul Hasan Masum" class="w-full h-full object-cover object-top">
          </div>
        </div>
      </div>

      <div class="flex-1 space-y-3.5 text-center md:text-left">
        <div class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-zinc-900 text-zinc-300 border border-zinc-800">
          Video Editor • Graphic Designer • Meta Marketer
        </div>
        <div>
          <h3 class="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-1">Creative Portfolio of</h3>
          <h2 class="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#f59e0b] whitespace-nowrap">MAHMUDUL HASAN MASUM</h2>
        </div>
        <div class="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
          <span class="px-3 py-1 rounded-xl text-xs font-bold bg-zinc-900 text-zinc-200 border border-zinc-800">🎬 Video Editing</span>
          <span class="px-3 py-1 rounded-xl text-xs font-bold bg-zinc-900 text-zinc-200 border border-zinc-800">🎨 Graphic Design</span>
          <span class="px-3 py-1 rounded-xl text-xs font-bold bg-zinc-900 text-zinc-200 border border-zinc-800">📈 Meta Marketing</span>
        </div>
        <p class="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
          Welcome to my portfolio! I craft high-retention video edits (Premiere Pro, After Effects, CapCut, KineMaster), high-CTR visual art (Photoshop, Illustrator), and ROI-driven Meta Ad campaigns.
        </p>
        <div class="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
          <a href="#graphic-works" class="px-5 py-3 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-400 text-black shadow-md transition-all">🎨 View Graphic Works</a>
          <a href="#video-portfolio" class="px-5 py-3 rounded-xl text-sm font-semibold border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-amber-400 transition-all">🎬 Explore Videos</a>
        </div>
      </div>
    </section>

    <!-- FEATURED HIGHLIGHT VIDEO (Below profile) -->
    <section>
      <div class="flex items-center justify-between mb-3">
        <span class="px-3 py-1 rounded-full text-xs font-bold uppercase bg-zinc-900 text-amber-400 border border-zinc-800">
          ✨ Featured Trailer • Best Reel
        </span>
        <a href="https://www.youtube.com/shorts/7-4GKg2K0cE" target="_blank" class="text-xs font-semibold text-zinc-400 hover:text-amber-400">Watch on YouTube &nearr;</a>
      </div>
      <div class="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-black shadow-2xl">
        <iframe src="https://www.youtube-nocookie.com/embed/7-4GKg2K0cE" class="w-full h-full border-0 absolute inset-0" allowfullscreen></iframe>
      </div>
    </section>

    <!-- 2. GRAPHIC WORKS (6 POSTERS) -->
    <section id="graphic-works">
      <div class="flex items-center justify-between mb-6">
        <div>
          <span class="text-xs font-bold uppercase text-amber-400">🎨 Visual Art</span>
          <h2 class="text-2xl font-black text-white uppercase">Graphic Design & Poster Art (6)</h2>
        </div>
        <span class="text-xs font-mono text-zinc-400 px-3 py-1 rounded-lg border border-zinc-800 bg-zinc-900">6 Posters</span>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="rounded-2xl border border-zinc-800 overflow-hidden aspect-[4/5] bg-black hover-lift"><img src="graphic1.jpg" alt="Poster 1" class="w-full h-full object-cover"></div>
        <div class="rounded-2xl border border-zinc-800 overflow-hidden aspect-[4/5] bg-black hover-lift"><img src="graphic2.jpg" alt="Poster 2" class="w-full h-full object-cover"></div>
        <div class="rounded-2xl border border-zinc-800 overflow-hidden aspect-[4/5] bg-black hover-lift"><img src="graphic3.jpg" alt="Poster 3" class="w-full h-full object-cover"></div>
        <div class="rounded-2xl border border-zinc-800 overflow-hidden aspect-[4/5] bg-black hover-lift"><img src="graphic4.jpg" alt="Poster 4" class="w-full h-full object-cover"></div>
        <div class="rounded-2xl border border-zinc-800 overflow-hidden aspect-[4/5] bg-black hover-lift"><img src="graphic5.jpg" alt="Poster 5" class="w-full h-full object-cover"></div>
        <div class="rounded-2xl border border-zinc-800 overflow-hidden aspect-[4/5] bg-black hover-lift"><img src="graphic6.jpg" alt="Poster 6" class="w-full h-full object-cover"></div>
      </div>
    </section>

    <!-- 3. SELECTED VIDEO EDITING WORKS (5) -->
    <section id="video-portfolio">
      <div class="flex items-center justify-between mb-6">
        <div>
          <span class="text-xs font-bold uppercase text-amber-400">🎬 Video Carousel</span>
          <h2 class="text-2xl font-black text-white uppercase">Selected Video Editing Works (5)</h2>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs font-mono text-zinc-400 px-3 py-1 rounded-lg border border-zinc-800 bg-zinc-900">5 Videos</span>
          <button type="button" onclick="document.getElementById('video-export-carousel').scrollBy({left: -300, behavior: 'smooth'})" class="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-amber-400 hover:bg-amber-500 hover:text-black font-bold text-xs cursor-pointer">&larr;</button>
          <button type="button" onclick="document.getElementById('video-export-carousel').scrollBy({left: 300, behavior: 'smooth'})" class="p-1.5 rounded-lg border border-zinc-800 bg-zinc-900 text-amber-400 hover:bg-amber-500 hover:text-black font-bold text-xs cursor-pointer">&rarr;</button>
        </div>
      </div>
      <div id="video-export-carousel" class="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4">
        <div class="w-[260px] shrink-0 snap-center rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden hover-lift flex flex-col">
          <div class="aspect-[9/16] bg-black"><iframe src="https://www.youtube-nocookie.com/embed/1Q_cR71UGuk" class="w-full h-full border-0" allowfullscreen></iframe></div>
          <div class="p-3 text-xs font-bold text-zinc-200">Kinetic Edit 01</div>
        </div>
        <div class="w-[260px] shrink-0 snap-center rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden hover-lift flex flex-col">
          <div class="aspect-[9/16] bg-black"><iframe src="https://www.youtube-nocookie.com/embed/OJMtDsnlC6c" class="w-full h-full border-0" allowfullscreen></iframe></div>
          <div class="p-3 text-xs font-bold text-zinc-200">Visual Flow 02</div>
        </div>
        <div class="w-[260px] shrink-0 snap-center rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden hover-lift flex flex-col">
          <div class="aspect-[9/16] bg-black"><iframe src="https://www.youtube-nocookie.com/embed/x48dOQQ3Xok" class="w-full h-full border-0" allowfullscreen></iframe></div>
          <div class="p-3 text-xs font-bold text-zinc-200">Rhythm & Impact 03</div>
        </div>
        <div class="w-[260px] shrink-0 snap-center rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden hover-lift flex flex-col">
          <div class="aspect-[9/16] bg-black"><iframe src="https://www.youtube-nocookie.com/embed/4sOAjFusWDI" class="w-full h-full border-0" allowfullscreen></iframe></div>
          <div class="p-3 text-xs font-bold text-zinc-200">Logo Animation & Motion</div>
        </div>
        <div class="w-[260px] shrink-0 snap-center rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden hover-lift flex flex-col">
          <div class="aspect-[9/16] bg-black"><iframe src="https://www.youtube-nocookie.com/embed/0LxIu7gW8l0" class="w-full h-full border-0" allowfullscreen></iframe></div>
          <div class="p-3 text-xs font-bold text-zinc-200">Motion Video Edit</div>
        </div>
      </div>
    </section>

    <!-- 4. SKILLS & SOFTWARE STACK -->
    <section id="creative-stack">
      <div class="mb-6">
        <span class="text-xs font-bold uppercase text-amber-400">⚡ Stack</span>
        <h2 class="text-2xl font-black text-white uppercase">Creative Skills & Tools</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="p-5 rounded-2xl border border-zinc-800 bg-zinc-950">
          <h3 class="font-bold text-amber-400 mb-1 text-sm">1. Video Editing</h3>
          <p class="text-xs text-zinc-400 mb-3">Pacing, beat-sync cuts, sound fx, motion overlays, viral retention.</p>
          <div class="flex flex-wrap gap-1 text-[10px] font-bold text-zinc-300">
            <span class="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">Premiere Pro</span>
            <span class="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">After Effects</span>
            <span class="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">CapCut</span>
            <span class="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">KineMaster</span>
          </div>
        </div>
        <div class="p-5 rounded-2xl border border-zinc-800 bg-zinc-950">
          <h3 class="font-bold text-amber-400 mb-1 text-sm">2. Graphic Design</h3>
          <p class="text-xs text-zinc-400 mb-3">High-CTR YouTube thumbnails, key visuals, promo posters, vector art.</p>
          <div class="flex flex-wrap gap-1 text-[10px] font-bold text-zinc-300">
            <span class="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">Photoshop</span>
            <span class="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">Illustrator</span>
          </div>
        </div>
        <div class="p-5 rounded-2xl border border-zinc-800 bg-zinc-950">
          <h3 class="font-bold text-amber-400 mb-1 text-sm">3. Meta Marketing</h3>
          <p class="text-xs text-zinc-400 mb-3">Scroll-stopping video ad creatives, hook scripting, audience targeting, ROAS scaling.</p>
          <div class="flex flex-wrap gap-1 text-[10px] font-bold text-zinc-300">
            <span class="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">Meta Ads</span>
            <span class="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">ROAS Scaling</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. CONTACT -->
    <section class="p-8 sm:p-10 rounded-3xl border border-zinc-800 bg-zinc-950 text-center">
      <h2 class="text-2xl sm:text-3xl font-black text-white uppercase mb-2">Get in Touch</h2>
      <p class="text-zinc-400 mb-6 text-sm max-w-lg mx-auto">Contact directly on WhatsApp or Email for video editing, graphic design, and Meta marketing projects.</p>
      <div class="flex flex-wrap justify-center gap-3 mb-6">
        <a href="https://wa.me/8801832313750" target="_blank" class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg transition-all">💬 WhatsApp: 01832313750</a>
        <a href="mailto:mahmud2026k@gmail.com" class="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs shadow-lg transition-all">✉️ Email Me</a>
        <a href="https://www.facebook.com/profile.php?id=61577322251551" target="_blank" class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-lg transition-all">Facebook Profile &nearr;</a>
        <a href="https://x.com/home?lang=en" target="_blank" class="px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-amber-400 text-white font-extrabold text-xs shadow-lg transition-all">𝕏 Twitter Profile &nearr;</a>
      </div>
      <p class="text-xs text-zinc-500">📍 House-364, Satarkul Road, Uttar Badda, Dhaka-12</p>
    </section>
  </main>

  <footer class="border-t border-zinc-800 bg-[#050608] py-8 text-center text-xs text-zinc-500 space-y-1">
    <div>© MAHMUDUL HASAN MASUM. Video Editor • Graphic Designer • Meta Marketer.</div>
    <div>📍 House-364, Satarkul Road, Uttar Badda, Dhaka-12 • WhatsApp: 01832313750</div>
  </footer>

  <script>
    const glow = document.getElementById('cursor-glow');
    const follower = document.getElementById('cursor-follower');
    const dot = document.getElementById('cursor-dot');
    let mX = -200, mY = -200, cX = -200, cY = -200;
    window.addEventListener('mousemove', (e) => {
      mX = e.clientX; mY = e.clientY;
      dot.style.left = mX + 'px'; dot.style.top = mY + 'px';
      glow.style.opacity = '1';
    });
    function loop() {
      cX += (mX - cX) * 0.18; cY += (mY - cY) * 0.18;
      follower.style.left = cX + 'px'; follower.style.top = cY + 'px';
      glow.style.background = \`radial-gradient(500px circle at \${Math.round(cX)}px \${Math.round(cY)}px, rgba(245, 158, 11, 0.18), rgba(251, 191, 36, 0.07) 38%, transparent 75%)\`;
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    window.addEventListener('mousedown', () => {
      follower.style.transform = 'translate(-50%, -50%) scale(0.78)';
      dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
    });
    window.addEventListener('mouseup', () => {
      follower.style.transform = 'translate(-50%, -50%) scale(1)';
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    window.addEventListener('click', (e) => {
      const bloom = document.createElement('div');
      bloom.className = 'click-core-bloom';
      bloom.style.left = e.clientX + 'px'; bloom.style.top = e.clientY + 'px';
      bloom.style.width = '18px'; bloom.style.height = '18px';
      document.body.appendChild(bloom);
      setTimeout(() => bloom.remove(), 450);

      const wave = document.createElement('div');
      wave.className = 'click-wave-primary';
      wave.style.left = e.clientX + 'px'; wave.style.top = e.clientY + 'px';
      wave.style.width = '36px'; wave.style.height = '36px';
      document.body.appendChild(wave);
      setTimeout(() => wave.remove(), 600);

      const echo = document.createElement('div');
      echo.className = 'click-wave-echo';
      echo.style.left = e.clientX + 'px'; echo.style.top = e.clientY + 'px';
      echo.style.width = '30px'; echo.style.height = '30px';
      document.body.appendChild(echo);
      setTimeout(() => echo.remove(), 700);

      const colors = ['#facc15', '#fbbf24', '#f59e0b', '#ffffff', '#fde047'];
      for (let i = 0; i < 7; i++) {
        const p = document.createElement('div');
        p.className = 'click-particle';
        const angle = (i / 7) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
        const dist = 22 + Math.random() * 26;
        p.style.width = '4px'; p.style.height = '4px';
        p.style.left = e.clientX + 'px'; p.style.top = e.clientY + 'px';
        p.style.backgroundColor = colors[i % colors.length];
        p.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
        p.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 650);
      }

      for (let d = 0; d < 4; d++) {
        const dm = document.createElement('div');
        dm.className = 'click-diamond';
        dm.textContent = '✦';
        const angle = (d * (Math.PI / 2)) + (Math.PI / 4);
        const dist = 24 + Math.random() * 18;
        dm.style.left = e.clientX + 'px'; dm.style.top = e.clientY + 'px';
        dm.style.fontSize = '10px';
        dm.style.color = d % 2 === 0 ? '#facc15' : '#ffffff';
        dm.style.textShadow = '0 0 8px ' + dm.style.color;
        dm.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
        dm.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
        document.body.appendChild(dm);
        setTimeout(() => dm.remove(), 680);
      }
    });

    const sData = [
      { id: 'top', title: 'Mahmudul Hasan Masum', subtitle: 'Video Editor & Graphic Designer', cat: 'Bio', tags: 'masum profile about dhaka' },
      { id: 'whatsapp-chat', title: 'WhatsApp: 01832313750', subtitle: 'Fastest direct contact', cat: 'Chat', tags: 'whatsapp call phone 01832313750' },
      { id: 'contact-section', title: 'Email: mahmud2026k@gmail.com', subtitle: 'Project brief & collaboration', cat: 'Mail', tags: 'email mail gmail brief' },
      { id: 'contact-section', title: 'Facebook Profile', subtitle: 'Video edits & reels', cat: 'Social', tags: 'facebook fb social reels' },
      { id: 'contact-section', title: 'X (Twitter) Profile', subtitle: 'Motion updates', cat: 'Social', tags: 'x twitter tweet social' },
      { id: 'video-portfolio', title: 'Video Editing Showcase', subtitle: '7 High-retention video projects', cat: 'Video', tags: 'video reel trailer documentary edit' },
      { id: 'graphic-works', title: 'Graphic & Poster Designs', subtitle: 'Flyers, thumbnails & artworks', cat: 'Graphics', tags: 'graphic poster flyer banner photoshop' },
      { id: 'creative-stack', title: 'Creative Tools & Skills', subtitle: 'Premiere Pro, After Effects, Photoshop, CapCut, Meta', cat: 'Skills', tags: 'premiere after effects photoshop capcut meta' }
    ];

    function openSpotlightSearch() {
      const modal = document.getElementById('spotlight-modal');
      const input = document.getElementById('spotlight-input');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      input.value = '';
      renderSpotlight('');
      setTimeout(() => input.focus(), 50);
    }

    function closeSpotlightSearch() {
      const modal = document.getElementById('spotlight-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function jumpTo(id) {
      closeSpotlightSearch();
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function renderSpotlight(q) {
      const query = q.trim().toLowerCase();
      const list = document.getElementById('spotlight-results');
      const items = query ? sData.filter(i => i.title.toLowerCase().includes(query) || i.subtitle.toLowerCase().includes(query) || i.tags.includes(query)) : sData;
      if (!items.length) {
        list.innerHTML = '<div class="p-4 text-center text-zinc-500 text-sm">No results found</div>';
        return;
      }
      list.innerHTML = items.map(i => \`
        <div onclick="jumpTo('\${i.id}')" class="p-3 rounded-xl hover:bg-zinc-800/60 cursor-pointer flex items-center justify-between">
          <div>
            <div class="text-sm font-bold text-white">\${i.title} <span class="text-[9px] px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">\${i.cat}</span></div>
            <div class="text-xs text-zinc-400">\${i.subtitle}</div>
          </div>
          <span class="text-xs text-amber-400">Jump &rarr;</span>
        </div>
      \`).join('');
    }

    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const m = document.getElementById('spotlight-modal');
        if (m.classList.contains('hidden')) openSpotlightSearch();
        else closeSpotlightSearch();
      } else if (e.key === 'Escape') {
        closeSpotlightSearch();
      }
    });
  </script>

  <div id="spotlight-modal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md hidden items-start justify-center pt-20 px-4" onclick="closeSpotlightSearch()">
    <div class="w-full max-w-xl rounded-2xl border border-amber-500/40 bg-[#0b0c10] text-slate-100 shadow-2xl overflow-hidden" onclick="event.stopPropagation()">
      <div class="flex items-center px-4 py-3 border-b border-zinc-800 gap-3">
        <span class="text-amber-400">🔍</span>
        <input id="spotlight-input" type="text" oninput="renderSpotlight(this.value)" placeholder="Search any name, project, video, tool, skill..." class="w-full bg-transparent border-0 outline-none text-sm text-white" />
        <button onclick="closeSpotlightSearch()" class="text-zinc-400 hover:text-white">✕</button>
      </div>
      <div id="spotlight-results" class="max-h-80 overflow-y-auto p-2 divide-y divide-zinc-800/40"></div>
    </div>
  </div>
</body>
</html>`;
