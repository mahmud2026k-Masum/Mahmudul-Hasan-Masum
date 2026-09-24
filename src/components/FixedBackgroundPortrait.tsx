import React, { useState, useEffect } from 'react';

interface FixedBackgroundPortraitProps {
  darkMode: boolean;
}

export const FixedBackgroundPortrait: React.FC<FixedBackgroundPortraitProps> = ({ darkMode }) => {
  const [imgSrc, setImgSrc] = useState<string>('/bg_portrait.jpg');
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth downward glide as user scrolls past hero profile into works
  // Starts at -15px and glides smoothly downwards up to +190px
  const translateY = Math.min(195, -15 + scrollY * 0.15);
  const scale = 1 + Math.min(0.04, scrollY * 0.000035);
  // Opacity gently blooms as you move away from the hero card
  const bloomRatio = Math.min(1, Math.max(0, scrollY / 350));
  const activeOpacity = darkMode
    ? 0.44 + bloomRatio * 0.14 // 0.44 -> 0.58
    : 0.20 + bloomRatio * 0.08; // 0.20 -> 0.28

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none flex items-center justify-center"
    >
      {/* 1. Ambient Soft Glow & Edge Fill across entire screen that floats in sync */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none will-change-transform"
        style={{
          backgroundImage: `url(${imgSrc})`,
          filter: 'blur(54px)',
          opacity: darkMode ? 0.26 : 0.12,
          transform: `scale(1.22) translateY(${translateY * 0.4}px)`,
          transition: 'opacity 500ms ease-out',
        }}
      />

      {/* 2. Soft Ambient Radial Lighting Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: darkMode
            ? 'radial-gradient(circle at 50% 48%, rgba(245, 158, 11, 0.12) 0%, rgba(7, 8, 10, 0.18) 35%, rgba(7, 8, 10, 0.78) 75%, #07080a 100%)'
            : 'radial-gradient(circle at 50% 48%, rgba(245, 158, 11, 0.08) 0%, rgba(250, 250, 249, 0.25) 35%, rgba(250, 250, 249, 0.85) 75%, #fafaf9 100%)',
        }}
      />

      {/* 3. CENTERED HIGH-DEFINITION PORTRAIT - Glides downward smoothly with scroll (Parallax motion) */}
      <div
        className="relative z-10 flex items-center justify-center w-full h-full p-4 sm:p-6 md:p-8 will-change-transform transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
        }}
      >
        <img
          src={imgSrc}
          alt=""
          loading="eager"
          decoding="async"
          onError={() => setImgSrc('https://i.postimg.cc/TPYDzfHV/Fai.jpg')}
          className="h-auto max-h-[80vh] sm:max-h-[85vh] md:max-h-[88vh] w-auto max-w-[88vw] sm:max-w-[620px] md:max-w-[720px] lg:max-w-[760px] object-contain object-center transition-opacity duration-500"
          style={{
            opacity: activeOpacity,
            filter: darkMode
              ? 'contrast(1.12) brightness(1.06) saturate(1.0)'
              : 'contrast(1.10) brightness(1.02)',
            // Deeply feather all 4 sides and corners early (0% opacity at 78%) so the image bounds never show
            maskImage:
              'radial-gradient(ellipse 68% 74% at 50% 46%, black 20%, rgba(0, 0, 0, 0.88) 36%, rgba(0, 0, 0, 0.5) 52%, rgba(0, 0, 0, 0.12) 66%, transparent 78%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 68% 74% at 50% 46%, black 20%, rgba(0, 0, 0, 0.88) 36%, rgba(0, 0, 0, 0.5) 52%, rgba(0, 0, 0, 0.12) 66%, transparent 78%)',
          }}
        />
      </div>

      {/* 4. Left Side Soft Dark Edge Melter */}
      <div
        className="absolute inset-y-0 left-0 w-1/4 max-w-[360px] pointer-events-none"
        style={{
          background: darkMode
            ? 'linear-gradient(to right, #07080a 25%, rgba(7, 8, 10, 0.5) 65%, transparent 100%)'
            : 'linear-gradient(to right, #fafaf9 25%, rgba(250, 250, 249, 0.5) 65%, transparent 100%)',
        }}
      />

      {/* 5. Right Side Soft Dark Edge Melter */}
      <div
        className="absolute inset-y-0 right-0 w-1/4 max-w-[360px] pointer-events-none"
        style={{
          background: darkMode
            ? 'linear-gradient(to left, #07080a 25%, rgba(7, 8, 10, 0.5) 65%, transparent 100%)'
            : 'linear-gradient(to left, #fafaf9 25%, rgba(250, 250, 249, 0.5) 65%, transparent 100%)',
        }}
      />

      {/* 6. Top Ambient Gradient to protect top navbar clarity */}
      <div
        className="absolute top-0 inset-x-0 h-32 pointer-events-none"
        style={{
          background: darkMode
            ? 'linear-gradient(to bottom, rgba(7, 8, 10, 0.88), transparent)'
            : 'linear-gradient(to bottom, rgba(250, 250, 249, 0.9), transparent)',
        }}
      />

      {/* 7. Bottom Ambient Gradient to softly transition into footer */}
      <div
        className="absolute bottom-0 inset-x-0 h-36 pointer-events-none"
        style={{
          background: darkMode
            ? 'linear-gradient(to top, #07080a 20%, transparent)'
            : 'linear-gradient(to top, #fafaf9 20%, transparent)',
        }}
      />
    </div>
  );
};
