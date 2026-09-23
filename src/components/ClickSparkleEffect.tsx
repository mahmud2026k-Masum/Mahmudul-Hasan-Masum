import React, { useEffect, useState, useCallback } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  tx: number;
  ty: number;
  size: number;
  color: string;
}

interface DiamondSparkle {
  id: number;
  x: number;
  y: number;
  tx: number;
  ty: number;
  size: number;
  color: string;
}

interface WaveEvent {
  id: number;
  x: number;
  y: number;
  color: string;
}

const LUXURY_GOLD_PALETTE = [
  '#facc15', // yellow-400
  '#f59e0b', // amber-500
  '#fbbf24', // amber-400
  '#fde047', // yellow-300
  '#ffffff', // bright white sparkle
];

export const ClickSparkleEffect: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [waves, setWaves] = useState<WaveEvent[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [diamonds, setDiamonds] = useState<DiamondSparkle[]>([]);

  const handlePointerDown = useCallback((e: MouseEvent) => {
    const clickX = e.clientX;
    const clickY = e.clientY;

    const eventId = Date.now() + Math.random();
    const primaryColor = darkMode ? '#facc15' : '#d97706';

    const newWave: WaveEvent = {
      id: eventId,
      x: clickX,
      y: clickY,
      color: primaryColor,
    };

    // Micro stardust particles (7 particles)
    const newParticles: Particle[] = [];
    const count = 7;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * 2 * Math.PI + (Math.random() * 0.4 - 0.2);
      const distance = 20 + Math.random() * 24;
      newParticles.push({
        id: eventId + i + 1,
        x: clickX,
        y: clickY,
        tx: Math.cos(angle) * distance,
        ty: Math.sin(angle) * distance,
        size: Math.random() * 2.5 + 2.5,
        color: LUXURY_GOLD_PALETTE[Math.floor(Math.random() * LUXURY_GOLD_PALETTE.length)],
      });
    }

    // 4 Elegant Diamond / Star sparkles
    const newDiamonds: DiamondSparkle[] = [];
    const diamondCount = 4;
    for (let d = 0; d < diamondCount; d++) {
      const angle = (d * (Math.PI / 2)) + (Math.PI / 4) + (Math.random() * 0.2 - 0.1);
      const dist = 24 + Math.random() * 18;
      newDiamonds.push({
        id: eventId + 20 + d,
        x: clickX,
        y: clickY,
        tx: Math.cos(angle) * dist,
        ty: Math.sin(angle) * dist,
        size: 9 + Math.random() * 3,
        color: d % 2 === 0 ? '#facc15' : '#ffffff',
      });
    }

    setWaves((prev) => [...prev.slice(-3), newWave]);
    setParticles((prev) => [...prev.slice(-14), ...newParticles]);
    setDiamonds((prev) => [...prev.slice(-8), ...newDiamonds]);

    // Clean up waves after animation completes
    setTimeout(() => {
      setWaves((prev) => prev.filter((w) => w.id !== eventId));
    }, 700);

    // Clean up particles
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.some((np) => np.id === p.id)));
    }, 650);

    // Clean up diamond sparkles
    setTimeout(() => {
      setDiamonds((prev) => prev.filter((dm) => !newDiamonds.some((ndm) => ndm.id === dm.id)));
    }, 680);
  }, [darkMode]);

  useEffect(() => {
    window.addEventListener('click', handlePointerDown);
    return () => {
      window.removeEventListener('click', handlePointerDown);
    };
  }, [handlePointerDown]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none"
    >
      {/* 1. Waves & Center Bloom */}
      {waves.map((wave) => (
        <React.Fragment key={wave.id}>
          {/* Radiant Center Bloom */}
          <div
            className="absolute rounded-full animate-click-core-bloom pointer-events-none"
            style={{
              left: `${wave.x}px`,
              top: `${wave.y}px`,
              width: '18px',
              height: '18px',
              background: `radial-gradient(circle, ${wave.color} 0%, rgba(245, 158, 11, 0.4) 60%, transparent 100%)`,
            }}
          />

          {/* Primary High-Precision Expanding Shockwave Ring */}
          <div
            className="absolute rounded-full animate-click-wave-primary pointer-events-none"
            style={{
              left: `${wave.x}px`,
              top: `${wave.y}px`,
              width: '36px',
              height: '36px',
              borderColor: wave.color,
              boxShadow: `0 0 10px ${wave.color}, inset 0 0 6px ${wave.color}`,
            }}
          />

          {/* Secondary Echo Ring (Subtle Resonance) */}
          <div
            className="absolute rounded-full animate-click-wave-echo pointer-events-none"
            style={{
              left: `${wave.x}px`,
              top: `${wave.y}px`,
              width: '30px',
              height: '30px',
              borderColor: darkMode ? 'rgba(254, 240, 138, 0.65)' : 'rgba(245, 158, 11, 0.5)',
              boxShadow: `0 0 8px rgba(245, 158, 11, 0.4)`,
            }}
          />
        </React.Fragment>
      ))}

      {/* 2. Micro Stardust Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-particle pointer-events-none"
          style={
            {
              left: `${p.x}px`,
              top: `${p.y}px`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 6px ${p.color}`,
              '--tx': `${p.tx}px`,
              '--ty': `${p.ty}px`,
            } as React.CSSProperties
          }
        />
      ))}

      {/* 3. 4-Point Star / Diamond Sparkles */}
      {diamonds.map((d) => (
        <div
          key={d.id}
          className="absolute animate-diamond-sparkle pointer-events-none flex items-center justify-center font-bold"
          style={
            {
              left: `${d.x}px`,
              top: `${d.y}px`,
              color: d.color,
              fontSize: `${d.size}px`,
              textShadow: `0 0 8px ${d.color}`,
              '--tx': `${d.tx}px`,
              '--ty': `${d.ty}px`,
            } as React.CSSProperties
          }
        >
          ✦
        </div>
      ))}
    </div>
  );
};
