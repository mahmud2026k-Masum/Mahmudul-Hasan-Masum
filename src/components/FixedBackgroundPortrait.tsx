import React, { useState, useEffect, useMemo } from 'react';

interface FixedBackgroundPortraitProps {
  darkMode: boolean;
}

interface StarLight {
  id: number;
  top: string;
  left: string;
  size: number;
  opacity: number;
  glow: number;
  isCross?: boolean;
}

// 80 carefully calibrated, static starry visual lights
// Concentrated in the dark outer flanks (left & right sides of portrait) and across canvas
const STATIC_STARS: StarLight[] = [
  // --- LEFT FLANK (Left side of the portrait) ---
  { id: 1, left: '3%', top: '8%', size: 2.2, opacity: 0.85, glow: 5 },
  { id: 2, left: '6%', top: '15%', size: 3.2, opacity: 0.95, glow: 7, isCross: true },
  { id: 3, left: '11%', top: '11%', size: 2.0, opacity: 0.75, glow: 4 },
  { id: 4, left: '16%', top: '6%', size: 2.6, opacity: 0.80, glow: 6 },
  { id: 5, left: '4%', top: '24%', size: 2.4, opacity: 0.70, glow: 5 },
  { id: 6, left: '9%', top: '28%', size: 3.5, opacity: 0.95, glow: 8, isCross: true },
  { id: 7, left: '14%', top: '22%', size: 1.8, opacity: 0.65, glow: 4 },
  { id: 8, left: '20%', top: '18%', size: 2.8, opacity: 0.85, glow: 6 },
  { id: 9, left: '25%', top: '12%', size: 2.0, opacity: 0.60, glow: 4 },
  { id: 10, left: '5%', top: '38%', size: 2.5, opacity: 0.80, glow: 5 },
  { id: 11, left: '10%', top: '44%', size: 2.0, opacity: 0.70, glow: 4 },
  { id: 12, left: '17%', top: '35%', size: 3.2, opacity: 0.90, glow: 7, isCross: true },
  { id: 13, left: '22%', top: '41%', size: 2.2, opacity: 0.75, glow: 5 },
  { id: 14, left: '27%', top: '29%', size: 1.8, opacity: 0.60, glow: 4 },
  { id: 15, left: '4%', top: '52%', size: 3.0, opacity: 0.90, glow: 7, isCross: true },
  { id: 16, left: '8%', top: '59%', size: 2.2, opacity: 0.75, glow: 5 },
  { id: 17, left: '15%', top: '50%', size: 2.4, opacity: 0.80, glow: 5 },
  { id: 18, left: '21%', top: '56%', size: 1.9, opacity: 0.65, glow: 4 },
  { id: 19, left: '26%', top: '48%', size: 2.8, opacity: 0.85, glow: 6 },
  { id: 20, left: '5%', top: '68%', size: 2.0, opacity: 0.70, glow: 4 },
  { id: 21, left: '11%', top: '73%', size: 3.4, opacity: 0.95, glow: 8, isCross: true },
  { id: 22, left: '18%', top: '66%', size: 2.2, opacity: 0.75, glow: 5 },
  { id: 23, left: '24%', top: '70%', size: 2.5, opacity: 0.80, glow: 5 },
  { id: 24, left: '28%', top: '62%', size: 1.8, opacity: 0.60, glow: 4 },
  { id: 25, left: '4%', top: '82%', size: 2.6, opacity: 0.85, glow: 6 },
  { id: 26, left: '9%', top: '89%', size: 2.0, opacity: 0.70, glow: 4 },
  { id: 27, left: '16%', top: '81%', size: 3.2, opacity: 0.90, glow: 7, isCross: true },
  { id: 28, left: '22%', top: '86%', size: 2.4, opacity: 0.75, glow: 5 },
  { id: 29, left: '27%', top: '78%', size: 2.0, opacity: 0.65, glow: 4 },
  { id: 30, left: '7%', top: '95%', size: 2.8, opacity: 0.85, glow: 6 },
  { id: 31, left: '13%', top: '94%', size: 1.9, opacity: 0.65, glow: 4 },
  { id: 32, left: '20%', top: '92%', size: 2.5, opacity: 0.80, glow: 5 },

  // --- RIGHT FLANK (Right side of the portrait) ---
  { id: 33, left: '96%', top: '9%', size: 2.2, opacity: 0.85, glow: 5 },
  { id: 34, left: '92%', top: '16%', size: 3.2, opacity: 0.95, glow: 7, isCross: true },
  { id: 35, left: '87%', top: '10%', size: 2.0, opacity: 0.75, glow: 4 },
  { id: 36, left: '82%', top: '5%', size: 2.6, opacity: 0.80, glow: 6 },
  { id: 37, left: '76%', top: '12%', size: 2.0, opacity: 0.60, glow: 4 },
  { id: 38, left: '71%', top: '18%', size: 2.8, opacity: 0.85, glow: 6 },
  { id: 39, left: '95%', top: '26%', size: 2.4, opacity: 0.70, glow: 5 },
  { id: 40, left: '89%', top: '29%', size: 3.5, opacity: 0.95, glow: 8, isCross: true },
  { id: 41, left: '84%', top: '23%', size: 1.8, opacity: 0.65, glow: 4 },
  { id: 42, left: '78%', top: '28%', size: 2.5, opacity: 0.80, glow: 5 },
  { id: 43, left: '73%', top: '25%', size: 1.9, opacity: 0.60, glow: 4 },
  { id: 44, left: '94%', top: '39%', size: 2.5, opacity: 0.80, glow: 5 },
  { id: 45, left: '88%', top: '45%', size: 2.0, opacity: 0.70, glow: 4 },
  { id: 46, left: '83%', top: '36%', size: 3.2, opacity: 0.90, glow: 7, isCross: true },
  { id: 47, left: '77%', top: '42%', size: 2.2, opacity: 0.75, glow: 5 },
  { id: 48, left: '72%', top: '34%', size: 1.8, opacity: 0.60, glow: 4 },
  { id: 49, left: '95%', top: '53%', size: 3.0, opacity: 0.90, glow: 7, isCross: true },
  { id: 50, left: '90%', top: '60%', size: 2.2, opacity: 0.75, glow: 5 },
  { id: 51, left: '84%', top: '51%', size: 2.4, opacity: 0.80, glow: 5 },
  { id: 52, left: '78%', top: '57%', size: 1.9, opacity: 0.65, glow: 4 },
  { id: 53, left: '73%', top: '49%', size: 2.8, opacity: 0.85, glow: 6 },
  { id: 54, left: '94%', top: '69%', size: 2.0, opacity: 0.70, glow: 4 },
  { id: 55, left: '88%', top: '74%', size: 3.4, opacity: 0.95, glow: 8, isCross: true },
  { id: 56, left: '82%', top: '67%', size: 2.2, opacity: 0.75, glow: 5 },
  { id: 57, left: '76%', top: '71%', size: 2.5, opacity: 0.80, glow: 5 },
  { id: 58, left: '71%', top: '63%', size: 1.8, opacity: 0.60, glow: 4 },
  { id: 59, left: '95%', top: '83%', size: 2.6, opacity: 0.85, glow: 6 },
  { id: 60, left: '89%', top: '90%', size: 2.0, opacity: 0.70, glow: 4 },
  { id: 61, left: '83%', top: '82%', size: 3.2, opacity: 0.90, glow: 7, isCross: true },
  { id: 62, left: '77%', top: '87%', size: 2.4, opacity: 0.75, glow: 5 },
  { id: 63, left: '72%', top: '79%', size: 2.0, opacity: 0.65, glow: 4 },
  { id: 64, left: '92%', top: '96%', size: 2.8, opacity: 0.85, glow: 6 },
  { id: 65, left: '86%', top: '95%', size: 1.9, opacity: 0.65, glow: 4 },
  { id: 66, left: '79%', top: '93%', size: 2.5, opacity: 0.80, glow: 5 },

  // --- TOP & BOTTOM AMBIENT PERIPHERALS ---
  { id: 67, left: '35%', top: '5%', size: 2.2, opacity: 0.70, glow: 5 },
  { id: 68, left: '42%', top: '9%', size: 3.0, opacity: 0.85, glow: 7, isCross: true },
  { id: 69, left: '49%', top: '4%', size: 2.0, opacity: 0.65, glow: 4 },
  { id: 70, left: '57%', top: '8%', size: 2.6, opacity: 0.80, glow: 6 },
  { id: 71, left: '64%', top: '5%', size: 2.2, opacity: 0.70, glow: 5 },
  { id: 72, left: '33%', top: '92%', size: 2.5, opacity: 0.75, glow: 5 },
  { id: 73, left: '40%', top: '96%', size: 2.0, opacity: 0.60, glow: 4 },
  { id: 74, left: '48%', top: '93%', size: 3.2, opacity: 0.90, glow: 7, isCross: true },
  { id: 75, left: '55%', top: '95%', size: 2.2, opacity: 0.70, glow: 5 },
  { id: 76, left: '62%', top: '91%', size: 2.8, opacity: 0.85, glow: 6 },
  { id: 77, left: '38%', top: '15%', size: 1.8, opacity: 0.55, glow: 4 },
  { id: 78, left: '63%', top: '16%', size: 1.8, opacity: 0.55, glow: 4 },
  { id: 79, left: '36%', top: '85%', size: 2.0, opacity: 0.60, glow: 4 },
  { id: 80, left: '65%', top: '84%', size: 2.0, opacity: 0.60, glow: 4 },
];

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
    return () => window.removeEventListener('keydown', handleScroll);
  }, []);

  // Smooth downward glide as user scrolls past hero profile into works
  const translateY = Math.min(195, -15 + scrollY * 0.15);
  const scale = 1 + Math.min(0.04, scrollY * 0.000035);
  const bloomRatio = Math.min(1, Math.max(0, scrollY / 350));
  const activeOpacity = darkMode
    ? 0.44 + bloomRatio * 0.14 // 0.44 -> 0.58
    : 0.20 + bloomRatio * 0.08;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none flex items-center justify-center"
    >
      {/* 1. Ambient Soft Glow & Edge Fill across entire screen */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none will-change-transform"
        style={{
          backgroundImage: `url(${imgSrc})`,
          filter: 'blur(54px)',
          opacity: darkMode ? 0.22 : 0.10,
          transform: `scale(1.22) translateY(${translateY * 0.4}px)`,
          transition: 'opacity 500ms ease-out',
        }}
      />

      {/* 2. Soft Ambient Radial Lighting Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: darkMode
            ? 'radial-gradient(circle at 50% 48%, rgba(245, 158, 11, 0.10) 0%, rgba(7, 8, 10, 0.20) 35%, rgba(7, 8, 10, 0.75) 75%, #07080a 100%)'
            : 'radial-gradient(circle at 50% 48%, rgba(245, 158, 11, 0.08) 0%, rgba(250, 250, 249, 0.25) 35%, rgba(250, 250, 249, 0.85) 75%, #fafaf9 100%)',
        }}
      />

      {/* 3. STARRY VISUAL LIGHTS (White starry lights on both sides & canvas, strictly static) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {STATIC_STARS.map((star) => {
          const starOpacity = darkMode ? star.opacity : star.opacity * 0.4;

          return (
            <div
              key={star.id}
              className="absolute pointer-events-none flex items-center justify-center"
              style={{
                top: star.top,
                left: star.left,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {star.isCross ? (
                // 4-Point Elegant Cross Star Flare
                <div
                  className="relative flex items-center justify-center pointer-events-none"
                  style={{
                    width: `${star.size * 3.5}px`,
                    height: `${star.size * 3.5}px`,
                    opacity: starOpacity,
                  }}
                >
                  {/* Horizontal Ray */}
                  <div
                    className="absolute bg-white rounded-full"
                    style={{
                      width: '100%',
                      height: `${Math.max(1, star.size * 0.4)}px`,
                      boxShadow: `0 0 ${star.glow}px 1px rgba(255, 255, 255, 0.9)`,
                    }}
                  />
                  {/* Vertical Ray */}
                  <div
                    className="absolute bg-white rounded-full"
                    style={{
                      height: '100%',
                      width: `${Math.max(1, star.size * 0.4)}px`,
                      boxShadow: `0 0 ${star.glow}px 1px rgba(255, 255, 255, 0.9)`,
                    }}
                  />
                  {/* Core Bright Center Dot */}
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-white"
                    style={{
                      boxShadow: `0 0 ${star.glow * 1.2}px 2px rgba(255, 255, 255, 0.95)`,
                    }}
                  />
                </div>
              ) : (
                // Round Radiant Star Dot
                <div
                  className="rounded-full bg-white"
                  style={{
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    opacity: starOpacity,
                    boxShadow: `0 0 ${star.glow}px ${star.glow * 0.35}px rgba(255, 255, 255, 0.85)`,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* 4. CENTERED HIGH-DEFINITION PORTRAIT - Glides downward smoothly with scroll (Parallax motion) */}
      <div
        className="relative z-20 flex items-center justify-center w-full h-full p-4 sm:p-6 md:p-8 will-change-transform transition-transform duration-100 ease-out"
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

      {/* 5. Left Side Soft Dark Edge Melter */}
      <div
        className="absolute inset-y-0 left-0 w-1/4 max-w-[360px] pointer-events-none z-30"
        style={{
          background: darkMode
            ? 'linear-gradient(to right, rgba(7, 8, 10, 0.7) 15%, rgba(7, 8, 10, 0.3) 65%, transparent 100%)'
            : 'linear-gradient(to right, rgba(250, 250, 249, 0.7) 15%, rgba(250, 250, 249, 0.3) 65%, transparent 100%)',
        }}
      />

      {/* 6. Right Side Soft Dark Edge Melter */}
      <div
        className="absolute inset-y-0 right-0 w-1/4 max-w-[360px] pointer-events-none z-30"
        style={{
          background: darkMode
            ? 'linear-gradient(to left, rgba(7, 8, 10, 0.7) 15%, rgba(7, 8, 10, 0.3) 65%, transparent 100%)'
            : 'linear-gradient(to left, rgba(250, 250, 249, 0.7) 15%, rgba(250, 250, 249, 0.3) 65%, transparent 100%)',
        }}
      />

      {/* 7. Top Ambient Gradient to protect top navbar clarity */}
      <div
        className="absolute top-0 inset-x-0 h-32 pointer-events-none z-30"
        style={{
          background: darkMode
            ? 'linear-gradient(to bottom, rgba(7, 8, 10, 0.88), transparent)'
            : 'linear-gradient(to bottom, rgba(250, 250, 249, 0.9), transparent)',
        }}
      />

      {/* 8. Bottom Ambient Gradient to softly transition into footer */}
      <div
        className="absolute bottom-0 inset-x-0 h-36 pointer-events-none z-30"
        style={{
          background: darkMode
            ? 'linear-gradient(to top, #07080a 20%, transparent)'
            : 'linear-gradient(to top, #fafaf9 20%, transparent)',
        }}
      />
    </div>
  );
};
