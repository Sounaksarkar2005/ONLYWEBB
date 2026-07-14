import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -20, y: -20 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .custom-cursor-target')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`hidden md:block fixed w-8 h-8 rounded-full border border-white/30 pointer-events-none z-[100] transition-transform duration-100 ease-out mix-blend-difference ${isHovering ? 'scale-150 border-primary bg-white/10' : ''}`}
      style={{
        left: 0,
        top: 0,
        transform: `translate(${position.x - 16}px, ${position.y - 16}px) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`,
      }}
    />
  );
}
