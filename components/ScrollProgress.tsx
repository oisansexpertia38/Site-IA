import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-slate-900/20">
      <div 
        className="h-full bg-gradient-to-r from-logo-blue via-logo-teal to-logo-green shadow-[0_0_10px_rgba(122,184,14,0.5)]"
        style={{ width: `${scrollProgress * 100}%`, transition: 'width 0.1s ease-out' }}
      />
    </div>
  );
};

export default ScrollProgress;