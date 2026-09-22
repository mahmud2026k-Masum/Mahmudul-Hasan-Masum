import React, { useEffect, useState, useRef } from 'react';

interface CursorGlowProps {
  darkMode: boolean;
}

export const CursorGlow: React.FC<CursorGlowProps> = ({ darkMode }) => {
  const [position, setPosition] = useState({ x: -400, y: -400 });
  const [followerPos, setFollowerPos] = useState({ x: -400, y: -400 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mousePos = useRef({ x: -400, y: -400 });
  const follower = useRef({ x: -400, y: -400 });

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering over an interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, [role="button"], input, select, textarea, .interactive-hover, .group'
        );
        setIsHovered(!!interactive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovered(false);
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
            ? `radial-gradient(460px circle at ${position.x}px ${position.y}px, rgba(245, 158, 11, 0.18), rgba(251, 191, 36, 0.08) 35%, rgba(255, 255, 255, 0.02) 60%, transparent 80%)`
            : `radial-gradient(380px circle at ${position.x}px ${position.y}px, rgba(234, 179, 8, 0.14), rgba(245, 158, 11, 0.05) 45%, transparent 75%)`,
        }}
      />

      {/* 2. Trailing Smooth Magnetic Golden Ring */}
      <div
        className={`fixed pointer-events-none rounded-full transition-transform duration-150 ease-out flex items-center justify-center ${
          isClicking
            ? 'scale-75'
            : isHovered
            ? 'scale-160'
            : 'scale-100'
        }`}
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
          transform: `translate(-50%, -50%) ${
            isClicking ? 'scale(0.75)' : isHovered ? 'scale(1.6)' : 'scale(1)'
          }`,
          width: '38px',
          height: '38px',
          border: isHovered
            ? '2px solid rgba(250, 204, 21, 0.9)'
            : '1.5px solid rgba(245, 158, 11, 0.65)',
          backgroundColor: isHovered
            ? 'rgba(250, 204, 21, 0.12)'
            : 'rgba(245, 158, 11, 0.03)',
          boxShadow: isHovered
            ? '0 0 16px rgba(250, 204, 21, 0.5), inset 0 0 8px rgba(250, 204, 21, 0.2)'
            : '0 0 8px rgba(245, 158, 11, 0.25)',
        }}
      >
        {isHovered && (
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 animate-ping opacity-75" />
        )}
      </div>

      {/* 3. Sharp Golden Center Pointer Dot */}
      <div
        className={`fixed pointer-events-none rounded-full transition-transform duration-75 ${
          isClicking ? 'scale-125' : isHovered ? 'scale-125 bg-white' : 'scale-100 bg-yellow-400'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          width: '7px',
          height: '7px',
          boxShadow: '0 0 10px #facc15, 0 0 4px #ffffff',
        }}
      />
    </div>
  );
};
