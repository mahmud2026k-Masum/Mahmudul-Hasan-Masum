import React, { useEffect, useState, useRef } from 'react';

interface CursorGlowProps {
  darkMode: boolean;
}

export const CursorGlow: React.FC<CursorGlowProps> = ({ darkMode }) => {
  const [position, setPosition] = useState({ x: -400, y: -400 });
  const [followerPos, setFollowerPos] = useState({ x: -400, y: -400 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mousePos = useRef({ x: -400, y: -400 });
  const follower = useRef({ x: -400, y: -400 });

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const animate = () => {
      // Smooth lerp for trailing follower ring
      follower.current.x += (mousePos.current.x - follower.current.x) * 0.18;
      follower.current.y += (mousePos.current.y - follower.current.y) * 0.18;
      setFollowerPos({
        x: Math.round(follower.current.x),
        y: Math.round(follower.current.y),
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden select-none transition-opacity duration-300"
    >
      {/* 1. Large Ambient Golden Spotlight Following Mouse */}
      <div
        className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: darkMode
            ? `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(245, 158, 11, 0.17), rgba(251, 191, 36, 0.07) 38%, rgba(255, 255, 255, 0.015) 60%, transparent 80%)`
            : `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(234, 179, 8, 0.15), rgba(245, 158, 11, 0.05) 45%, transparent 75%)`,
        }}
      />

      {/* 2. Trailing Smooth Golden Ring - Slightly larger (44px) & elegant uniform size everywhere */}
      <div
        className="fixed pointer-events-none rounded-full flex items-center justify-center transition-all duration-150"
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
          transform: `translate(-50%, -50%) ${isClicking ? 'scale(0.78)' : 'scale(1)'}`,
          width: '44px',
          height: '44px',
          border: '1.5px solid rgba(245, 158, 11, 0.75)',
          backgroundColor: 'rgba(245, 158, 11, 0.06)',
          boxShadow: isClicking
            ? '0 0 16px rgba(245, 158, 11, 0.5), inset 0 0 8px rgba(245, 158, 11, 0.2)'
            : '0 0 12px rgba(245, 158, 11, 0.28)',
        }}
      />

      {/* 3. Sharp Golden Center Pointer Dot - 8px crisp luminescent core */}
      <div
        className="fixed pointer-events-none rounded-full transition-transform duration-100"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) ${isClicking ? 'scale(0.75)' : 'scale(1)'}`,
          width: '8px',
          height: '8px',
          backgroundColor: '#facc15',
          boxShadow: '0 0 10px #facc15, 0 0 18px rgba(245, 158, 11, 0.5)',
        }}
      />
    </div>
  );
};
