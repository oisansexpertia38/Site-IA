import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ne pas activer sur les appareils tactiles pour éviter les bugs
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      
      // Petit délai pour le suiveur (effet de traînée)
      if (followerRef.current) {
        setTimeout(() => {
          if (followerRef.current) {
             followerRef.current.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
          }
        }, 50);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      {/* Point central précis */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{ willChange: 'transform' }}
      />
      
      {/* Halo suiveur */}
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-logo-teal/50 bg-logo-teal/10 rounded-full pointer-events-none z-[9998] blur-[1px] transition-transform duration-75 ease-out hidden md:block"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CustomCursor;