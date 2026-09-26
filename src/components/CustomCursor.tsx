import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device supports fine cursor (desktop)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsTouchDevice(!mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsTouchDevice(!e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    if (!mediaQuery.matches) {
      return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPosition({ x: mouseX, y: mouseY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"], .interactive-target')
        );
        setIsHovering(isInteractive);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth lerp for trailing ring
    const render = () => {
      const ease = 0.18;
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;
      setTrailPosition({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    animationFrameId = requestAnimationFrame(render);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Precision inner center dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out shadow-[0_0_8px_rgba(56,189,248,0.8)]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovering ? 0 : 1})`,
        }}
      />

      {/* Smooth outer target ring */}
      <div
        className="fixed top-0 left-0 rounded-full border border-sky-400/40 -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color,border-color] duration-150 ease-out"
        style={{
          transform: `translate3d(${trailPosition.x}px, ${trailPosition.y}px, 0)`,
          width: isHovering ? '44px' : '26px',
          height: isHovering ? '44px' : '26px',
          backgroundColor: isHovering ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
          borderColor: isHovering ? 'rgba(56, 189, 248, 0.7)' : 'rgba(56, 189, 248, 0.35)',
        }}
      />
    </div>
  );
};
