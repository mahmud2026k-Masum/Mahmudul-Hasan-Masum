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

interface Wave {
  id: number;
  x: number;
  y: number;
  color: string;
}

const GOLD_PALETTE = [
  '#facc15', // yellow-400
  '#f59e0b', // amber-500
  '#fbbf24', // amber-400
  '#fef08a', // yellow-200
  '#ffffff', // bright white sparkle
];

export const ClickSparkleEffect: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [waves, setWaves] = useState<Wave[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  const handlePointerDown = useCallback((e: MouseEvent) => {
    // Avoid interfering if clicked inside an interactive element with custom click
    const clickX = e.clientX;
    const clickY = e.clientY;

    const waveId = Date.now() + Math.random();
    const newWave: Wave = {
      id: waveId,
      x: clickX,
      y: clickY,
      color: darkMode ? '#facc15' : '#d97706',
    };

    const newParticles: Particle[] = [];
    const count = 10;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * 2 * Math.PI + (Math.random() * 0.4 - 0.2);
      const distance = 35 + Math.random() * 55;
      newParticles.push({
        id: waveId + i + 1,
        x: clickX,
        y: clickY,
        tx: Math.cos(angle) * distance,
        ty: Math.sin(angle) * distance,
        size: Math.random() * 5 + 3,
        color: GOLD_PALETTE[Math.floor(Math.random() * GOLD_PALETTE.length)],
      });
    }

    setWaves((prev) => [...prev.slice(-6), newWave]);
    setParticles((prev) => [...prev.slice(-30), ...newParticles]);

    // Clean up wave after animation
    setTimeout(() => {
      setWaves((prev) => prev.filter((w) => w.id !== waveId));
    }, 700);

    // Clean up particles after animation
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.some((np) => np.id === p.id)));
    }, 750);
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
      {/* Shockwave expanding rings */}
      {waves.map((wave) => (
        <div
          key={wave.id}
          className="absolute rounded-full animate-click-wave"
          style={{
            left: `${wave.x}px`,
            top: `${wave.y}px`,
            width: '60px',
            height: '60px',
            borderColor: wave.color,
            boxShadow: `0 0 20px ${wave.color}, inset 0 0 10px ${wave.color}`,
          }}
        />
      ))}

      {/* Sparkling energetic particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-particle shadow-sm"
          style={
            {
              left: `${p.x}px`,
              top: `${p.y}px`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 8px ${p.color}`,
              '--tx': `${p.tx}px`,
              '--ty': `${p.ty}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};
