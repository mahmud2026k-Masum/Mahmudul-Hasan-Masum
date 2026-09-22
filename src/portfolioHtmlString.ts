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
      width: 36px;
      height: 36px;
      border: 1.5px solid rgba(245, 158, 11, 0.7);
      background: rgba(245, 158, 11, 0.05);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      z-index: 50;
      transition: transform 0.15s ease-out, border-color 0.2s ease, width 0.2s, height 0.2s;
    }
    #cursor-dot {
      pointer-events: none;
      position: fixed;
      width: 7px;
      height: 7px;
      background: #facc15;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      z-index: 51;
      box-shadow: 0 0 10px #facc15;
    }
    .hover-lift {
      transition: transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.25s ease, border-color 0.25s ease;
    }
    .hover-lift:hover {
      transform: translateY(-4px);
    }
    @keyframes clickWave {
      0% { transform: translate(-50%, -50%) scale(0.2); opacity: 1; border-width: 3px; }
      100% { transform: translate(-50%, -50%) scale(2.6); opacity: 0; border-width: 1px; }
    }
    .click-wave {
      position: fixed;
      pointer-events: none;
      border-radius: 50%;
      border: 2px solid #facc15;
      box-shadow: 0 0 16px #facc15;
      animation: clickWave 0.65s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
      z-index: 999;
    }
    @keyframes particleBurst {
      0% { transform: translate(0, 0) scale(1); opacity: 1; }
      100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
    }
    .click-particle {
      position: fixed;
      pointer-events: none;
      border-radius: 50%;
      animation: particleBurst 0.65s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
      z-index: 999;
    }
  </style>
</head>
<body class="bg-[#07080a] text-slate-100 antialiased selection:bg-yellow-400 selection:text-black min-h-screen relative">
  <div id="cursor-glow" aria-hidden="true"></div>
  <div id="cursor-follower" aria-hidden="true"></div>
  <div id="cursor-dot" aria-hidden="true"></div>

  <!-- NAVBAR -->
  <header class="sticky top-0 z-40 w-full border-b border-amber-500/20 bg-[#08090c]/90 backdrop-blur-md px-6 py-4 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <span class="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 text-black flex items-center justify-center font-black">🎬</span>
      <div>
        <h1 class="font-extrabold text-base uppercase text-yellow-400">MAHMUDUL HASAN MASUM</h1>
        <p class="text-[11px] font-bold uppercase text-amber-300/80">Video Editor • Graphic Designer • Meta Marketer</p>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <a href="https://wa.me/8801832313750" target="_blank" class="px-3.5 py-1.5 rounded-xl bg-emerald-500 text-white font-bold text-xs shadow-md">
        💬 WhatsApp: 01832313750
      </a>
    </div>
  </header>

  <!-- MAIN -->
  <main class="max-w-6xl mx-auto px-4 py-8 space-y-16">
    <!-- HERO FEATURED VIDEO -->
    <section>
      <div class="flex items-center justify-between mb-3">
        <span class="px-3 py-1 rounded-full text-xs font-bold uppercase bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
          ✨ Featured Trailer • Best Work
        </span>
        <a href="https://www.youtube.com/shorts/7-4GKg2K0cE" target="_blank" class="text-xs font-bold text-yellow-400 hover:underline">Watch on YouTube &nearr;</a>
      </div>
      <div class="relative w-full aspect-video rounded-2xl overflow-hidden border border-amber-500/30 bg-black shadow-2xl">
        <iframe src="https://www.youtube-nocookie.com/embed/7-4GKg2K0cE" class="w-full h-full border-0 absolute inset-0" allowfullscreen></iframe>
      </div>
    </section>

    <!-- CREATOR PROFILE & WHATSAPP CARD -->
    <section class="p-8 rounded-3xl border border-amber-500/30 bg-[#0d0f15] flex flex-col md:flex-row items-center gap-8">
      <div class="flex flex-col items-center">
        <div class="w-36 h-36 rounded-2xl overflow-hidden ring-4 ring-yellow-400 shadow-xl bg-black">
          <img src="profile.jpg" alt="Mahmudul Hasan Masum" class="w-full h-full object-cover">
        </div>
        <div class="mt-4 p-3 rounded-xl border border-amber-500/30 bg-black/70 text-center w-full max-w-[220px]">
          <div class="text-[11px] font-bold text-amber-400 mb-1">WhatsApp Direct</div>
          <a href="https://wa.me/8801832313750" target="_blank" class="block w-full py-1.5 rounded-lg bg-emerald-500 text-white font-black text-xs">
            01832313750
          </a>
        </div>
      </div>
      <div class="flex-1 space-y-3 text-center md:text-left">
        <div class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-yellow-400/10 text-yellow-400 border border-yellow-400/30">
          Video Editor • Graphic Designer • Meta Marketer
        </div>
        <h2 class="text-3xl sm:text-4xl font-black uppercase text-yellow-400">MAHMUDUL HASAN MASUM</h2>
        <p class="text-sm text-slate-300 leading-relaxed">
          Crafting high-retention video edits (Premiere Pro, After Effects, CapCut, KineMaster), thumbnail art (Photoshop, Illustrator), and high-converting Meta Ads.
        </p>
        <div class="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
          <span class="px-2.5 py-1 rounded bg-[#9999FF]/20 text-[#B8B8FF] border border-[#9999FF]/40 font-bold">Premiere Pro</span>
          <span class="px-2.5 py-1 rounded bg-[#D291FF]/20 text-[#E0B0FF] border border-[#D291FF]/40 font-bold">After Effects</span>
          <span class="px-2.5 py-1 rounded bg-[#31A8FF]/20 text-[#64B5F6] border border-[#31A8FF]/40 font-bold">Photoshop</span>
          <span class="px-2.5 py-1 rounded bg-[#FF9A00]/20 text-[#FFA726] border border-[#FF9A00]/40 font-bold">Illustrator</span>
          <span class="px-2.5 py-1 rounded bg-[#00F2FE]/20 text-[#4DD0E1] border border-[#00F2FE]/40 font-bold">CapCut</span>
          <span class="px-2.5 py-1 rounded bg-[#FF3366]/20 text-[#FF6B8B] border border-[#FF3366]/40 font-bold">KineMaster</span>
          <span class="px-2.5 py-1 rounded bg-[#0081FB]/20 text-[#42A5F5] border border-[#0081FB]/40 font-bold">Meta Ads</span>
        </div>
      </div>
    </section>

    <!-- 7 VIDEOS -->
    <section>
      <h2 class="text-2xl font-black mb-6 text-yellow-400 uppercase">Selected Video Editing Works (7)</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div class="rounded-xl border border-amber-500/25 bg-[#0e1017] overflow-hidden">
          <div class="aspect-[9/16] bg-black"><iframe src="https://www.youtube-nocookie.com/embed/1Q_cR71UGuk" class="w-full h-full border-0" allowfullscreen></iframe></div>
          <div class="p-2 text-xs font-bold text-center">Kinetic Edit 01</div>
        </div>
        <div class="rounded-xl border border-amber-500/25 bg-[#0e1017] overflow-hidden">
          <div class="aspect-[9/16] bg-black"><iframe src="https://www.youtube-nocookie.com/embed/OJMtDsnlC6c" class="w-full h-full border-0" allowfullscreen></iframe></div>
          <div class="p-2 text-xs font-bold text-center">Visual Flow 02</div>
        </div>
        <div class="rounded-xl border border-amber-500/25 bg-[#0e1017] overflow-hidden">
          <div class="aspect-[9/16] bg-black"><iframe src="https://www.youtube-nocookie.com/embed/x48dOQQ3Xok" class="w-full h-full border-0" allowfullscreen></iframe></div>
          <div class="p-2 text-xs font-bold text-center">Rhythm & Impact 03</div>
        </div>
        <div class="rounded-xl border border-amber-500/25 bg-[#0e1017] overflow-hidden">
          <div class="aspect-[9/16] bg-black"><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fr%2F1CBad8bAtN%2F&show_text=0" class="w-full h-full border-0" allowfullscreen></iframe></div>
          <div class="p-2 text-xs font-bold text-center">Creative Sequence 04</div>
        </div>
        <div class="rounded-xl border border-amber-500/25 bg-[#0e1017] overflow-hidden">
          <div class="aspect-[9/16] bg-black"><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fr%2F1DyiotVTh8%2F&show_text=0" class="w-full h-full border-0" allowfullscreen></iframe></div>
          <div class="p-2 text-xs font-bold text-center">Showcase Reel 05</div>
        </div>
        <div class="rounded-xl border border-amber-500/25 bg-[#0e1017] overflow-hidden">
          <div class="aspect-[9/16] bg-black"><iframe src="https://www.youtube-nocookie.com/embed/4sOAjFusWDI" class="w-full h-full border-0" allowfullscreen></iframe></div>
          <div class="p-2 text-xs font-bold text-center">Logo Animation & Motion</div>
        </div>
        <div class="rounded-xl border border-amber-500/25 bg-[#0e1017] overflow-hidden">
          <div class="aspect-[9/16] bg-black"><iframe src="https://www.youtube-nocookie.com/embed/0LxIu7gW8l0" class="w-full h-full border-0" allowfullscreen></iframe></div>
          <div class="p-2 text-xs font-bold text-center">Motion Video Edit</div>
        </div>
      </div>
    </section>

    <!-- 6 GRAPHICS -->
    <section>
      <h2 class="text-2xl font-black mb-6 text-yellow-400 uppercase">Graphic Design & Poster Art (6)</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div class="rounded-xl border border-amber-500/25 overflow-hidden aspect-[4/5] bg-black"><img src="graphic1.jpg" alt="Poster 1" class="w-full h-full object-cover"></div>
        <div class="rounded-xl border border-amber-500/25 overflow-hidden aspect-[4/5] bg-black"><img src="graphic2.jpg" alt="Poster 2" class="w-full h-full object-cover"></div>
        <div class="rounded-xl border border-amber-500/25 overflow-hidden aspect-[4/5] bg-black"><img src="graphic3.jpg" alt="Poster 3" class="w-full h-full object-cover"></div>
        <div class="rounded-xl border border-amber-500/25 overflow-hidden aspect-[4/5] bg-black"><img src="graphic4.jpg" alt="Poster 4" class="w-full h-full object-cover"></div>
        <div class="rounded-xl border border-amber-500/25 overflow-hidden aspect-[4/5] bg-black"><img src="graphic5.jpg" alt="Poster 5" class="w-full h-full object-cover"></div>
        <div class="rounded-xl border border-amber-500/25 overflow-hidden aspect-[4/5] bg-black"><img src="graphic6.jpg" alt="Poster 6" class="w-full h-full object-cover"></div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="p-8 rounded-3xl border border-amber-500/30 bg-[#0d0f15] text-center">
      <h2 class="text-2xl sm:text-3xl font-black text-yellow-400 uppercase mb-2">Get in Touch</h2>
      <p class="text-slate-400 mb-6">Contact directly on WhatsApp or Email for video editing, graphic design, and Meta marketing projects.</p>
      <div class="flex flex-wrap justify-center gap-4">
        <a href="https://wa.me/8801832313750" target="_blank" class="px-6 py-3 rounded-2xl bg-emerald-500 text-white font-extrabold shadow-lg">WhatsApp: 01832313750</a>
        <a href="mailto:mahmud2026k@gmail.com" class="px-6 py-3 rounded-2xl bg-yellow-400 text-black font-extrabold shadow-lg">Email: mahmud2026k@gmail.com</a>
      </div>
    </section>
  </main>

  <footer class="border-t border-amber-500/20 bg-[#050608] py-8 text-center text-xs text-slate-500">
    © MAHMUDUL HASAN MASUM. Video Editor • Graphic Designer • Meta Marketer.
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
      glow.style.background = \`radial-gradient(420px circle at \${Math.round(cX)}px \${Math.round(cY)}px, rgba(245, 158, 11, 0.18), rgba(251, 191, 36, 0.07) 40%, transparent 75%)\`;
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    window.addEventListener('click', (e) => {
      const wave = document.createElement('div');
      wave.className = 'click-wave';
      wave.style.left = e.clientX + 'px'; wave.style.top = e.clientY + 'px';
      wave.style.width = '50px'; wave.style.height = '50px';
      document.body.appendChild(wave);
      setTimeout(() => wave.remove(), 700);

      const colors = ['#facc15', '#fbbf24', '#ffffff'];
      for (let i = 0; i < 8; i++) {
        const p = document.createElement('div');
        p.className = 'click-particle';
        const angle = (i / 8) * Math.PI * 2;
        p.style.width = '4px'; p.style.height = '4px';
        p.style.left = e.clientX + 'px'; p.style.top = e.clientY + 'px';
        p.style.backgroundColor = colors[i % colors.length];
        p.style.setProperty('--tx', Math.cos(angle) * 40 + 'px');
        p.style.setProperty('--ty', Math.sin(angle) * 40 + 'px');
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 700);
      }
    });
  </script>
</body>
</html>`;
